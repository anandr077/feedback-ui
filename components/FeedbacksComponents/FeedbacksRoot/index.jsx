import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import _ from 'lodash';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { formattedDate } from '../../../dates';
import GeneralPopup from '../../GeneralPopup';
import SubmitCommentFrameRoot from '../../SubmitCommentFrameRoot';
import { FeedbackContext } from './FeedbackContext.js';

import {
  addFeedback,
  askJeddAI,
  deleteFeedback,
  deleteSubmissionById,
  getClassesWithStudents,
  getCommentBank,
  getDefaultCriteria,
  getOtherDrafts,
  getOverComments,
  getSubmissionById,
  getSubmissionsByAssignmentId,
  getTeachersForClass,
  markSubmissionRequestSubmission,
  markSubmsissionClosed,
  markSubmissionReviewed as markSubmsissionReviewed,
  provideFeedbackOnFeedback,
  resolveFeedback,
  submitAssignment,
  updateFeedback,
} from '../../../service';
import { getShortcuts } from '../../../service.js';
import {
  getUserId,
  getUserName,
  getUserRole,
} from '../../../userLocalDetails.js';
import Loader from '../../Loader';
import FeedbackTeacherLaptop from '../FeedbackTeacherLaptop';
import {
  extractStudents,
  findMarkingCriteria,
  getComments,
  getPageMode,
  goToNewUrl,
} from './functions';
import {
  ActionButtonsContainer,
  ClassBox,
  ClassBoxContainer,
  ClassContainer,
  ClassTitle,
  ClassTitleBox,
  Crown,
  DialogContiner,
  Line141,
  ListItem,
  StudentContainer,
  StudentList,
  StyledTextField,
  feedbacksFeedbackTeacherLaptopData,
} from './style';

import { useQueryClient } from '@tanstack/react-query';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min.js';
import { toast } from 'react-toastify';
import PopupWithoutCloseIcon from '../../../components2/PopupWithoutCloseIcon';
import StyledDropDown from '../../../components2/StyledDropDown/index.jsx';
import { isNullOrEmpty } from '../../../utils/arrays.js';
import CheckboxBordered from '../../CheckboxBordered/index.jsx';
import Header from '../../Header2/index.jsx';
import { downloadSubmissionPdf } from '../../Shared/helper/downloadPdf';
import Toast from '../../Toast/index.js';
import isJeddAIUser from './JeddAi.js';
import { allCriteriaHaveSelectedLevels } from './rules.js';
import { useAllSubmisssionsById, useClassData, useCommentBanksById,  useCommentsById, useOtherDraftsById, useOverAllCommentsById, useSubmissionById } from '../../state/hooks.js';

const MARKING_METHODOLOGY_TYPE = {
  Rubrics: 'rubrics',
  Strengths_And_Targets: 'strengthsAndTargets',
};
const isTeacher = getUserRole() === 'TEACHER';

export default function FeedbacksRoot({ isDocumentPage }) {
  const history = useHistory();
  const [pendingLocation, setPendingLocation] = useState(null);
  const queryClient = useQueryClient();
  const quillRefs = useRef([]);
  const [showShareWithClass, setShowShareWithClass] = useState(false);
  const [exemplarComment, setExemplerComment] = useState('');
  const [updateExemplarComment, setUpdateExemplarComment] = useState({
    comment: null,
    showComment: false,
  });
  const [showLoader, setShowLoader] = useState(false);

  const newCommentFrameRef = useRef(null);

  const [submission, setSubmission] = useState(null);
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [studentName, setStudentName] = useState(null);
  const [showNewComment, setShowNewComment] = useState(false);
  const [selectedRange, setSelectedRange] = useState(null);
  const [selectedText, setSelectedText] = useState(null);
  const [newCommentSerialNumber, setNewCommentSerialNumber] = useState(0);
  const [nextUrl, setNextUrl] = useState('');
  const [commentHighlight, setCommentHighlight] = useState(false);
  const [editingComment, setEditingComment] = useState(false);
  const [newMarkingCriterias, setNewMarkingCriterias] = useState([]);
  const [showSubmitPopup, setShowSubmitPopup] = React.useState(false);
  const [methodTocall, setMethodToCall] = React.useState(null);
  const [popupText, setPopupText] = React.useState(null);
  const [classesAndStudents, setClassesAndStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [checkedState, setCheckedState] = useState({});
  const [feedbackReviewPopup, setFeedbackReviewPopup] = useState(false);
  const [pageLeavePopup, setPageLeavePopup] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);
  const [showFloatingDialogue, setShowFloatingDialogue] = useState(false);
  const defaultMarkingCriteria = getDefaultCriteria();
  const [otherDrafts, setOtherDrafts] = useState([]);


  const {
    data: submissionByIdData,
    isLoadingdata: isLoadingsubmissionByIdData,
  } = useSubmissionById(id);
  const {
    data: commentsByIdData,
    isLoadingdata: isLoadingcommentsByIdData,
    setData: setCommentsByIdData,
  } = useCommentsById(id);
  const {
    data: overAllCommentsById,
    isLoadingdata: isLoadingoverAllCommentsById,
    setData: setOverAllCommentsById,
  } = useOverAllCommentsById(id);
  const { data: otherDraftsById, isLoadingdata: isLoadingotherDraftsById } =
    useOtherDraftsById(id);
  const { data: classData, isLoadingdata: isLoadingclassData } = useClassData();

  console.log(
    'outise',
    submissionByIdData,
    commentsByIdData,
    overAllCommentsById,
    otherDraftsById,
    classData
  );

  useEffect(() => {
    setIsLoading(true);
  }, [id]);

  
  const commentBankIds = submissionByIdData?.assignment?.questions
    .filter((q) => q.commentBankId !== undefined && q.commentBankId !== null)
    .map((q) => q.commentBankId);

  const { data: allSubmissions, isLoadingdata: isLoadingallSubmissions } =
    useAllSubmisssionsById(submissionByIdData?.assignment.id, isTeacher);

  const { data: commentBanksData, isLoadingdata: isLoadingcommentBanksData } =
    useCommentBanksById(commentBankIds, isTeacher);

   const isDataLoading =
     isLoadingsubmissionByIdData ||
     isLoadingcommentsByIdData ||
     isLoadingoverAllCommentsById ||
     isLoadingotherDraftsById ||
     isLoadingclassData ||
     (isTeacher &&
       (isLoadingallSubmissions ||
         isLoadingcommentBanksData));


  const markingCriteriaFeedback = commentsByIdData?.filter(
    (c) => c.type === 'MARKING_CRITERIA'
  );
  const feedbackComments = commentsByIdData?.filter(
          (c) => c.type !== 'MARKING_CRITERIA'
        );


  useEffect(() => {
    if (!isDataLoading) {
      console.log('submissionByIdData outside', submissionByIdData);

      if (submissionByIdData) {
        console.log('submissionByIdData Inside', submissionByIdData);
        setSubmission(submissionByIdData);
      }

      if (otherDraftsById) {
        setOtherDrafts(otherDraftsById);
      }

     

      

      if (classData && submissionByIdData) {
        const initialState = classData.reduce((acc, classItem) => {
          acc[classItem.id] = {
            checked: false,
            students: classItem.students.reduce((studentAcc, student) => {
              const isStudent = submissionByIdData.studentId === student.id;
              studentAcc[student.id] = isStudent;
              return studentAcc;
            }, {}),
          };
          return acc;
        }, {});
        setCheckedState(initialState);
        setClassesAndStudents(classData);

        const allTeachers = _.flatten(classData.map((c) => c.teachers));
        const uniqueTeachers = _.uniqBy(allTeachers, 'id');
        setTeachers(uniqueTeachers);
      }
      if (!isTeacher) {
        setIsLoading(false);
      }
    }
  }, [isDataLoading, id]);


  

 useEffect(() => {
   if (!isDataLoading && allSubmissions) {
     setStudents(extractStudents(allSubmissions));

     let currentSubmissionIndex = 0;
     const allExceptCurrent = allSubmissions?.filter((r, index) => {
       if (r.id !== submissionByIdData.id) {
         return r;
       } else {
         currentSubmissionIndex = index;
         return false;
       }
     });

     let nextSubmissionIndex = currentSubmissionIndex + 1;
     while (
       nextSubmissionIndex > 0 &&
       nextSubmissionIndex < allExceptCurrent?.length
     ) {
       if (allExceptCurrent[nextSubmissionIndex]?.status === 'SUBMITTED') {
         break;
       } else {
         nextSubmissionIndex++;
       }
     }
     if (nextSubmissionIndex >= allExceptCurrent.length) {
       nextSubmissionIndex = 0;
     }

     const nextUrl = allExceptCurrent[nextSubmissionIndex]
       ? '#submissions/' + allExceptCurrent[nextSubmissionIndex]?.id
       : '/';
     setNextUrl(nextUrl);

     const studentName =
       allSubmissions.find((r) => r.id === submissionByIdData.assignment.id)
         ?.studentName ?? null;
     setStudentName(studentName);
     setIsLoading(false);
   }
 }, [isDataLoading, id]);
  
  const deleteDraftPage = async (submissionId, pendingLocation) => {
    await deleteSubmissionById(submissionId).then(() => {
      if (pendingLocation) {
        goToNewUrl(pendingLocation);
      }
      setPageLeavePopup(false);
    });
  };

  useEffect(() => {
    const unblock = history.block((location, action) => {
      if (
        submission?.status === 'REVIEWED' &&
        submission?.type === 'DOCUMENT' &&
        submission?.studentId === getUserId() &&
        (submission?.feedbackOnFeedback === null ||
          submission?.feedbackOnFeedback === undefined)
      ) {
        setPendingLocation(location);
        setFeedbackReviewPopup(true);
        return false;
      }
      if (submission?.status === 'DRAFT' && submission?.type === 'DOCUMENT') {
        if (
          !submission?.answers &&
          submission?.assignment.title === 'Untitled Question'
        ) {
          deleteDraftPage(submission.id, location);
          return false;
        } else {
          setPendingLocation(location);
          setPageLeavePopup(true);
          return false;
        }
      }

      return true;
    });

    return () => {
      unblock();
    };
  }, [submission, feedbackReviewPopup, history]);



console.log('isDataLoading', isDataLoading);

  
  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  const allCommentBanks = commentBanksData
    ?.filter((cb) => cb !== undefined && cb !== null)
    ?.flatMap((annotation) =>
      annotation.smartComments.filter((smartComment) =>
        commentBankIds?.includes(annotation.id)
      )
    );


  const saveDraftPage = () => {
    if (pendingLocation) {
      goToNewUrl(pendingLocation);
    }
    setPageLeavePopup(false);
  };

  const handleFeedbackOnFeedback = (feedbackOnFeedback) => () => {
    provideFeedbackOnFeedback(submission.id, feedbackOnFeedback).then((res) => {
      setSubmission((old) => {
        return { ...old, feedbackOnFeedback: res.feedbackOnFeedback };
      });
      setFeedbackReviewPopup(false);
      if (pendingLocation !== undefined || pendingLocation !== null) {
        history.replace(pendingLocation);
      }
    });
  };



  const initialCheckedState = classesAndStudents.reduce((acc, classItem) => {
    acc[classItem.id] = {
      checked: false,
      students: classItem.students.reduce((studentAcc, student) => {
        let bool = submission.studentId === student.id ? true : false;
        studentAcc[student.id] = bool;
        return studentAcc;
      }, {}),
    };
    return acc;
  }, {});

  const pageMode = getPageMode(isTeacher, getUserId(), submission);

  const handleEditingComment = (flag) => {
    setEditingComment(flag);
  };

  const handleEditorMounted = (editor, index) => {
    quillRefs.current[index] = editor;
  };

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleAddComment();
    }
  }
  function handleAddComment() {
    if (!document.getElementById('newCommentInput').value) return;
    addFeedback(submission.id, {
      questionSerialNumber: newCommentSerialNumber,
      feedback: document.getElementById('newCommentInput').value,
      range: selectedRange,
      selectedText: selectedText,
      type: 'COMMENT',
      replies: [],
      markingCriteria: defaultMarkingCriteria,
      sharedWithStudents: [],
    }).then((response) => {
      if (response) {
        setCommentsByIdData([
          ...markingCriteriaFeedback,
          ...feedbackComments,
          response,
        ]);
        highlightByComment(response);
        setShowNewComment(false);
      }
    });
  }

  function handleShortcutAddComment(commentText) {
    addFeedback(submission.id, {
      questionSerialNumber: newCommentSerialNumber,
      feedback: commentText.trim(),
      range: selectedRange,
      selectedText: selectedText,
      type: 'COMMENT',
      replies: [],
      markingCriteria: defaultMarkingCriteria,
      sharedWithStudents: [],
    }).then((response) => {
      if (response) {
        setCommentsByIdData([
          ...markingCriteriaFeedback,
          ...feedbackComments,
          response,
        ]);
        highlightByComment(response);
        setShowNewComment(false);
      }
    });
  }

  function handleShortcutAddCommentSmartAnnotaion(commentText) {
    addFeedback(submission.id, {
      questionSerialNumber: newCommentSerialNumber,
      feedback: commentText,
      range: selectedRange,
      selectedText: selectedText,
      type: 'SMART_ANNOTATION',
      replies: [],
      markingCriteria: defaultMarkingCriteria,
      sharedWithStudents: [],
    }).then((response) => {
      if (response) {
        setCommentsByIdData([
          ...markingCriteriaFeedback,
          ...feedbackComments,
          response,
        ]);
        highlightByComment(response);
        setShowNewComment(false);
      }
    });
  }

  function handleFocusAreaComment(focusArea) {
    addFeedback(submission.id, {
      questionSerialNumber: newCommentSerialNumber,
      feedback: focusArea.title,
      range: selectedRange,
      selectedText: selectedText,
      type: 'FOCUS_AREA',
      color: focusArea.color,
      focusAreaId: focusArea.id,
      replies: [],
      markingCriteria: defaultMarkingCriteria,
      sharedWithStudents: [],
    }).then((response) => {
      if (response) {
        setCommentsByIdData([
          ...markingCriteriaFeedback,
          ...feedbackComments,
          response,
        ]);
        highlightByComment(response);
        setShowNewComment(false);
        setShowFloatingDialogue(false);
      }
    });
  }

  const addExemplerComment = () => {
    const comment = exemplarComment || 'No comment';

    addFeedback(submission.id, {
      questionSerialNumber: newCommentSerialNumber,
      feedback: comment,
      range: selectedRange,
      selectedText: selectedText,
      type: 'MODEL_RESPONSE',
      replies: [],
      markingCriteria: defaultMarkingCriteria,
      sharedWithStudents: getSharedStudentIds(),
    }).then((response) => {
      if (response) {
        setCommentsByIdData([
          ...markingCriteriaFeedback,
          ...feedbackComments,
          response,
        ]);
        highlightByComment(response);
        setShowNewComment(false);
        setExemplerComment('');
        setShowShareWithClass(false);
      }
    });
  };

  const updateExemplar = () => {
    const dataToUpdate = updateExemplarComment.comment;
    updateParentComment(dataToUpdate.comment, dataToUpdate.id);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;

    if (updateExemplarComment.showComment) {
      setUpdateExemplarComment((prev) => ({
        ...prev,
        comment: {
          ...prev.comment,
          comment: value,
        },
      }));
    } else {
      setExemplerComment(value);
    }
  };

  const handleClassCheck = (classId) => {
    const currentClassCheckedState = checkedState[classId]
      ? !checkedState[classId].checked
      : false;
    const updatedState = {
      ...checkedState,
      [classId]: {
        ...checkedState[classId],
        checked: currentClassCheckedState,
        students: Object.fromEntries(
          Object.entries(checkedState[classId]?.students || {}).map(
            ([studentId, _]) => {
              if (submission.studentId === studentId) {
                return [studentId, true];
              }
              return [studentId, currentClassCheckedState];
            }
          )
        ),
      },
    };
    setCheckedState(updatedState);
  };

  const handleStudentCheck = (classId, studentId) => {
    const updatedStudentCheckedState = !(
      checkedState[classId]?.students[studentId] || false
    );

    const updatedState = {
      ...checkedState,
      [classId]: {
        ...checkedState[classId],
        students: {
          ...checkedState[classId].students,
          [studentId]: updatedStudentCheckedState,
        },
      },
    };
    setCheckedState(updatedState);
  };

  const convertToCheckedState = (selectedStudents) => {
    const updatedState = { ...initialCheckedState };

    selectedStudents?.forEach(({ classId, studentId }) => {
      if (!updatedState[classId]) {
        updatedState[classId] = {
          checked: true,
          students: {},
        };
      }
      updatedState[classId].students[studentId] = true;
    });

    Object.keys(updatedState).forEach((classId) => {
      const classChecked = Object.values(updatedState[classId].students).every(
        (isChecked) => isChecked
      );
      updatedState[classId].checked = classChecked;
    });
    setCheckedState(updatedState);
  };

  const getSharedStudentIds = () => {
    const checkedStudentIds = _(checkedState)
      .map((classInfo, classId) =>
        _(classInfo.students)
          .pickBy((isChecked) => isChecked)
          .map((_, studentId) => ({ classId, studentId }))
          .value()
      )
      .flatten()
      .value();
    return checkedStudentIds;
  };

  const sharewithclassdialog = (
    <Dialog
      onClose={() => {
        setShowShareWithClass(false);
        setShowNewComment(false);
        setExemplerComment('');
        setCheckedState(initialCheckedState);
      }}
      sx={{
        '& .MuiDialog-container': {
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: '400px',
          },
        },
      }}
      open={showShareWithClass}
    >
      <ClassContainer>
        <ClassBoxContainer>
          <ClassTitleBox>
            <ClassTitle>
              <Crown src="/icons/share.png" alt="crown" />
              Share
            </ClassTitle>
            <Line141 src="/img/line-14@2x.png" />
          </ClassTitleBox>
          <StudentContainer>
            {classesAndStudents.map((classItem) => (
              <div key={classItem.id}>
                <ClassBox>
                  <CheckboxBordered
                    type="checkbox"
                    checked={checkedState[classItem.id]?.checked || false}
                    onChange={() => handleClassCheck(classItem.id)}
                  />
                  {classItem.title}
                </ClassBox>
                <StudentList>
                  {classItem.students.map((student) => (
                    <ListItem key={student.id}>
                      <label>
                        <CheckboxBordered
                          type="checkbox"
                          checked={
                            checkedState[classItem.id]?.students[student.id] ||
                            false
                          }
                          disabled={submission.studentId === student.id}
                          onChange={() =>
                            handleStudentCheck(classItem.id, student.id)
                          }
                        />
                        {student.name}{' '}
                        {submission.studentId === student.id ? '(author)' : ''}
                      </label>
                    </ListItem>
                  ))}
                </StudentList>
              </div>
            ))}
          </StudentContainer>
        </ClassBoxContainer>
      </ClassContainer>
      <DialogContiner>
        <StyledTextField
          value={
            updateExemplarComment.showComment
              ? updateExemplarComment.comment.comment
              : exemplarComment
          }
          onChange={handleInputChange}
          placeholder="Add a note for this example"
        />
        <ActionButtonsContainer>
          <DialogActions>
            <SubmitCommentFrameRoot
              submitButtonOnClick={() => {
                updateExemplarComment.showComment
                  ? updateExemplar()
                  : addExemplerComment();
                setCheckedState(initialCheckedState);
              }}
              isButtonDisabled={
                getSharedStudentIds().length >= 2 ? false : true
              }
              showComment={updateExemplarComment.showComment}
              cancelButtonOnClick={() => {
                setShowShareWithClass(false);
                setShowNewComment(false);
                setExemplerComment('');
                setCheckedState(initialCheckedState);
              }}
              smartAnnotations={commentBanksData?.filter(
                (cb) => cb !== undefined && cb !== null
              )}
            />
          </DialogActions>
        </ActionButtonsContainer>
      </DialogContiner>
    </Dialog>
  );

  function handleShareWithClass() {
    setCheckedState(initialCheckedState);
    setShowShareWithClass(true);
    updateExemplarComment.showComment = false;
  }

  function handleDeleteComment(commentId) {
    deleteFeedback(submission.id, commentId).then((response) => {
      

      setCommentsByIdData((prevComments) => {
       
        const otherComments = prevComments.filter(
          (comment) => comment.type !== 'MARKING_CRITERIA'
        );
        const markingCriteriaComments = prevComments.filter(
          (comment) => comment.type === 'MARKING_CRITERIA'
        );
        let updatedComments = otherComments.filter((c) => c.id != commentId);
        return [...updatedComments, ...markingCriteriaComments];
      });
    });
  }

  function handleResolvedComment(commentId) {
    const updatedComments = feedbackComments.map((comment) => {
      if (comment.id === commentId) {
        resolveFeedback(commentId);
        return { ...comment, status: 'RESOLVED' };
      }
      return comment;
    });
    setCommentsByIdData([
      ...markingCriteriaFeedback,
      ...updatedComments
    ]);
  }

  function handleReplyComment(
    replyComment,
    commentId,
    serialNumber,
    sharedWithStudents
  ) {
    const replyCommentObject = {
      questionSerialNumber: serialNumber,
      comment: replyComment,
      range: { from: 0, to: 0 },
      type: 'COMMENT',
      reviewerId: getUserId(),
      reviewerName: getUserName(),
      replies: [],
      markingCriteria: defaultMarkingCriteria,
      sharedWithStudents: sharedWithStudents,
    };
    const addReplyComments = feedbackComments.map((comment) => {
      if (comment.id === commentId) {
        const commentToUpdate =
          comment.replies === undefined
            ? { ...comment, replies: [replyCommentObject] }
            : { ...comment, replies: [...comment.replies, replyCommentObject] };

        updateFeedback(submission.id, commentId, {
          ...commentToUpdate,
          questionSerialNumber: commentToUpdate.questionSerialNumber,
          feedback: commentToUpdate.comment,
          range: commentToUpdate.range,
          selectedText: commentToUpdate.selectedText,
          type: commentToUpdate.type,
          replies: commentToUpdate.replies,
          reviewerId: commentToUpdate.reviewerId,
          color: commentToUpdate.color,
          focusAreaId: commentToUpdate.focusAreaId,
          sharedWithStudents: commentToUpdate.sharedWithStudents,
        }).then((response) => {
          if (response) {
            const updatedComments = feedbackComments.map((c) =>
              c.id === commentId ? commentToUpdate : c
            );
            setCommentsByIdData([
              ...markingCriteriaFeedback,
              ...updatedComments,
            ]);
          }
        });
      }
      return comment;
    });

    setShowNewComment(false);
    setExemplerComment('');
    setShowShareWithClass(false);
  }

  function updateParentComment(comment, commentId) {
    const updatedComment = feedbackComments.map((c) => {
      if (c.id === commentId) {
        const commentToUpdate = {
          ...c,
          comment: comment,
          sharedWithStudents: getSharedStudentIds(),
        };
        updateFeedback(submission.id, commentId, {
          questionSerialNumber: commentToUpdate.questionSerialNumber,
          feedback: commentToUpdate.comment,
          range: commentToUpdate.range,
          selectedText: commentToUpdate.selectedText,
          type: commentToUpdate.type,
          color: commentToUpdate.color,
          focusAreaId: commentToUpdate.focusAreaId,
          sharedWithStudents: commentToUpdate.sharedWithStudents,
          replies:
            commentToUpdate?.replies === undefined
              ? []
              : commentToUpdate?.replies,
          reviewerId: commentToUpdate.reviewerId,
        }).then((response) => {
          if (response) {
            const updatedComments = feedbackComments.map((c) =>
              c.id === commentId ? commentToUpdate : c
            );
            setCommentsByIdData([
              ...markingCriteriaFeedback,
              ...updatedComments,
            ]);
          }
        });
      }
      return c;
    });

    setShowNewComment(false);
    setExemplerComment('');
    setShowShareWithClass(false);
  }

  function updateChildComment(
    commentId,
    replyCommentIndex,
    comment,
    sharedWithStudents
  ) {
    const updatedReplyComment = feedbackComments.map((c) => {
      if (c.id === commentId) {
        const updatedReplies = [...c.replies];
        updatedReplies[replyCommentIndex] = {
          ...updatedReplies[replyCommentIndex],
          comment: comment,
        };
        const commentToUpdate = { ...c, replies: updatedReplies };

        updateFeedback(submission.id, commentId, {
          questionSerialNumber: c.questionSerialNumber,
          feedback: c.comment,
          range: c.range,
          selectedText: c.selectedText,
          type: c.type,
          replies: updatedReplies,
          focusAreaId: commentToUpdate.focusAreaId,
          reviewerId: c.reviewerId,
          sharedWithStudents: sharedWithStudents,
        }).then((response) => {
          if (response) {
            const updatedComments = feedbackComments.map((c) =>
              c.id === commentId ? commentToUpdate : c
            );
            setCommentsByIdData([
              ...markingCriteriaFeedback,
              ...updatedComments,
            ]);
          }
        });
      }
      return c;
    });
  }

  function handleDeleteReplyComment(commentId, replyCommentIndex) {
    const deleteReplyComment = feedbackComments.map((c) => {
      if (c.id === commentId) {
        const updatedReplies = [...c.replies];
        updatedReplies.splice(replyCommentIndex, 1);
        const commentToUpdate = { ...c, replies: updatedReplies };
        updateFeedback(submission.id, commentId, {
          questionSerialNumber: c.questionSerialNumber,
          feedback: c.comment,
          range: c.range,
          selectedText: c.selectedText,
          type: c.type,
          replies: updatedReplies,
          focusAreaId: commentToUpdate.focusAreaId,
          reviewerId: c.reviewerId,
          sharedWithStudents: c.sharedWithStudents,
        }).then((response) => {
          if (response) {
            const updatedComments = feedbackComments.map((c) =>
              c.id === commentId ? commentToUpdate : c
            );
            setCommentsByIdData([
              ...markingCriteriaFeedback,
              ...updatedComments,
            ]);
          }
        });
      }
      return c;
    });
  }

  const validateMarkingCriteria = () => {
    let valid = true;

    submission.assignment.questions.some((question, index) => {
      if (question?.markingCriteria?.criterias) {
        let criterias = question.markingCriteria.criterias;
        if (!isNullOrEmpty(markingCriteriaFeedback)) {
          let submitedMarkingCriteria = findMarkingCriteria(
            markingCriteriaFeedback,
            index
          );
          if (submitedMarkingCriteria) {
            criterias = submitedMarkingCriteria?.markingCriteria?.criterias;
          }
        }

        if (!allCriteriaHaveSelectedLevels(criterias)) {
          valid = false;

          toast(
            <Toast
              message={
                'Please select marking criteria for question ' +
                question.serialNumber
              }
            />
          );

          return true;
        }
      }
      if (question.markingCriteria?.strengthsTargetsCriterias) {
        let selectedSAndT = {
          selectedStrengths: [],
          selectedTargets: [],
        };

        if (!isNullOrEmpty(markingCriteriaFeedback)) {
          let submitedMarkingCriteria = findMarkingCriteria(
            markingCriteriaFeedback,
            index
          );
          if (submitedMarkingCriteria) {
            selectedSAndT.selectedStrengths =
              submitedMarkingCriteria?.markingCriteria?.selectedStrengths;
            selectedSAndT.selectedTargets =
              submitedMarkingCriteria?.markingCriteria?.selectedTargets;
          }
        }
        if (
          !selectedSAndT ||
          isNullOrEmpty(selectedSAndT.selectedStrengths) ||
          isNullOrEmpty(selectedSAndT.selectedTargets)
        ) {
          valid = false;

          toast(
            <Toast
              message={
                'Please Select marking criteria for question ' +
                question.serialNumber
              }
            />
          );
          return true;
        }
      }
      return false;
    });
    return valid;
  };

  function convertToSelectedAttribute(selectedArray) {
    return selectedArray?.map((item, index) => ({
      index,
      criteria: item.criteria,
      attribute: item.attribute,
    }));
  }

  function handleSubmissionReviewed() {
    setShowSubmitPopup(false);
    setMethodToCall(null);
    setPopupText('');
    if (validateMarkingCriteria()) {
      submitReview();
    }
  }

  function submitReview() {
    markSubmsissionReviewed(submission.id).then((_) => {
      queryClient.invalidateQueries(['notifications']);
      queryClient.invalidateQueries(['tasks']);
      queryClient.invalidateQueries(['assignments']);
      queryClient.invalidateQueries((queryKey) => {
        return queryKey.includes('class');
      });

      toast(
        <Toast
          message={'Task reviewed...'}
          link={
            window.location.href.includes('documentsReview')
              ? '/documentsReview/'
              : '/submissions/' + submission.id
          }
        />
      );
      if (isTeacher) {
        window.location.href = nextUrl === '/' ? '/#' : nextUrl;
      } else {
        window.location.href = '/#';
      }
    });
  }

  // function submitMarkingCriteriaFeedback(
  //   question,
  //   markingCriteriaRequest,
  //   QuestionIndex
  // ) {
  //   let submitedMarkingCriteria = markingCriteriaFeedback?.find(
  //     (markingCriteria) =>
  //       markingCriteria?.questionSerialNumber === question.serialNumber
  //   );
  //   if (submitedMarkingCriteria?.id) {
  //     updateFeedback(
  //       submission.id,
  //       submitedMarkingCriteria.id,
  //       markingCriteriaRequest
  //     )
  //       .then((response) => {
  //         setMarkingCriteriaFeedback((prev) => {
  //           const existingIndex = prev.findIndex(
  //             (markingCriteria) =>
  //               markingCriteria.questionSerialNumber === question.serialNumber
  //           );

  //           if (existingIndex !== -1) {
  //             return prev.map((item, index) =>
  //               index === existingIndex ? { ...item, ...response } : item
  //             );
  //           } else {
  //             return [
  //               ...prev,
  //               { ...response, questionSerialNumber: question.serialNumber },
  //             ];
  //           }
  //         });
  //       })
  //       .catch((error) => {
  //         console.error('Error in updateFeedback:', error);
  //       });
  //   } else {
  //     return addFeedback(submission.id, markingCriteriaRequest).then(
  //       (response) => {
  //         setMarkingCriteriaFeedback((prev) => {
  //           const existingIndex = prev.findIndex(
  //             (markingCriteria) =>
  //               markingCriteria.questionSerialNumber === question.serialNumber
  //           );

  //           if (existingIndex !== -1) {
  //             return prev.map((item, index) =>
  //               index === existingIndex ? { ...item, ...response } : item
  //             );
  //           } else {
  //             return [
  //               ...prev,
  //               { ...response, questionSerialNumber: question.serialNumber },
  //             ];
  //           }
  //         });
  //       }
  //     );
  //   }
  // }

  function submitMarkingCriteriaFeedback(
    question,
    markingCriteriaRequest,
    QuestionIndex
  ) {
    let submitedMarkingCriteria = markingCriteriaFeedback?.find(
      (markingCriteria) =>
        markingCriteria?.questionSerialNumber === question.serialNumber
    );

    const updateLocalFeedbackState = (response) => {
      setCommentsByIdData((prevComments) => {
        
        const otherComments = prevComments.filter(
          (comment) => comment.type !== 'MARKING_CRITERIA'
        );
        const markingCriteriaComments = prevComments.filter(
          (comment) => comment.type === 'MARKING_CRITERIA'
        );

        
        const updatedMarkingCriteriaComments = markingCriteriaComments.map(
          (comment) => {
            if (comment.id === response.id) {
              return { ...comment, ...response };
            }
            return comment;
          }
        );

      
        if (
          !markingCriteriaComments.find((comment) => comment.id === response.id)
        ) {
          updatedMarkingCriteriaComments.push(response);
        }

       
        return [...otherComments, ...updatedMarkingCriteriaComments];
      });
    };

    if (submitedMarkingCriteria?.id) {
      updateFeedback(
        submission.id,
        submitedMarkingCriteria.id,
        markingCriteriaRequest
      )
        .then((response) => {
          updateLocalFeedbackState(response);
        })
        .catch((error) => {
          console.error('Error in updateFeedback:', error);
        });
    } else {
      addFeedback(submission.id, markingCriteriaRequest)
        .then((response) => {
          updateLocalFeedbackState(response);
        })
        .catch((error) => {
          console.error('Error in addFeedback:', error);
        });
    }
  }


  function handleRequestResubmission() {
    setShowSubmitPopup(false);
    setMethodToCall(null);
    setPopupText('');
    if (validateMarkingCriteria()) {
      markSubmissionRequestSubmission(submission.id).then((_) => {
        queryClient.invalidateQueries(['notifications']);
        queryClient.invalidateQueries(['tasks']);
        queryClient.invalidateQueries(['assignments']);
        queryClient.invalidateQueries((queryKey) => {
          return queryKey.includes('class');
        });
        toast(
          <Toast
            message={'Resubmission requested...'}
            link={'/submissions/' + submission.id}
          />
        );
        if (isTeacher) {
          window.location.href = nextUrl === '/' ? '/#' : nextUrl;
          window.location.reload();
        } else {
          window.location.href = '/#';
        }
      });
    }
  }

  const addOverallFeedback = (questionSerialNumber, comment, audio) => {
    addFeedback(submissionByIdData.id, {
      questionSerialNumber: questionSerialNumber,
      feedback: comment,
      range: {
        from: 0,
        to: 0,
      },
      audio: audio,
      type: 'OVERALL_COMMENT',
    })
      .then((response) => {
        if (response) {
          setOverAllCommentsById([...overAllCommentsById, response]);
        }
      })
      .catch((err) => {
        toast(
          <Toast
            message={`Error adding feedback: ${err.message}`}
          />
        );
        
      });;
  };

  const updateOverAllFeedback = (feedbackId, feedbackText, audio) => {
    const feedbackToUpdate = overAllCommentsById.find(
      (feedback) => feedback.id === feedbackId
    );
    if (feedbackToUpdate === null || feedbackToUpdate === undefined) {
      return;
    }

    updateFeedback(submissionByIdData?.id, feedbackId, {
      ...feedbackToUpdate,
      feedback: feedbackText,
      audio: audio,
    })
      .then((response) => {
        setOverAllCommentsById((prevComments) =>
          prevComments.map((feedback) => {
            return feedback.id === feedbackId
              ? { ...feedback, comment: feedbackText, audio: audio }
              : feedback;
          })
        );
      })
      .catch((err) => {
         toast(<Toast message={`Error updating feedback: ${err.message}`} />);
      });
  };

  const handleSaveSubmissionForReview = () => {
    setShowSubmitPopup(false);
    setMethodToCall(null);
    setPopupText('');

    disableAllEditors();
    setShowLoader(true);
    toast(<Toast message={'Submitting task...'} />);

    setTimeout(() => {
      submitAssignment(submission.id).then((_) => {
        queryClient.invalidateQueries(['notifications']);
        queryClient.invalidateQueries(['tasks']);
        queryClient.invalidateQueries(['assignments']);
        queryClient.invalidateQueries((queryKey) => {
          return queryKey.includes('class');
        });

        toast(
          <Toast
            message={'Task submitted...'}
            link={'/submissions/' + submission.id}
          />
        );
        window.location.href = '/#';
        setShowLoader(false);
      });
    }, 4000);
  };
  function disableAllEditors() {
    submission.assignment.questions
      .filter((question) => question.type === 'TEXT')
      .forEach((question) => {
        const quill = quillRefs.current[question.serialNumber - 1];
        quill?.disable();
      });
  }

  function handleSubmissionClosed() {
    setShowSubmitPopup(false);
    setMethodToCall(null);
    setPopupText('');

    disableAllEditors();
    setShowLoader(true);
    toast(<Toast message={'Submitting task...'} />);
    setTimeout(() => {
      markSubmsissionClosed(submission.id).then((_) => {
        queryClient.invalidateQueries(['notifications']);
        queryClient.invalidateQueries(['tasks']);
        queryClient.invalidateQueries(['assignments']);
        queryClient.invalidateQueries((queryKey) => {
          return queryKey.includes('class');
        });

        toast(
          <Toast
            message={'Task completed...'}
            link={'/submissions/' + submission.id}
          />
        );
        window.location.href = '/#';
        setShowLoader(false);
      });
    }, 4000);
  }

  function handleCommentSelected(comment) {
    if (comment.range && !editingComment) {
      const range = {
        index: comment.range.from,
        length: comment.range.to - comment.range.from,
      };
      const quill = quillRefs.current[comment.questionSerialNumber - 1];
      quill.selectRange(range);
      quill.focus();
      quill.scrollToHighlight(comment.id);
    } else {
    }
  }

  const reviewerSelectionChange =
    (visibleComment, serialNumber) => (selection) => {
      if (!selection.range) {
        return;
      }
      if (
        pageMode === 'DRAFT' &&
        isNullOrEmpty(
          _.flatMap(submission.assignment.questions, (q) => q.focusAreas || [])
        )
      ) {
        return;
      }
      const range = selection.range;
      const from = range.index;
      const to = range.index + range.length;

      const matchingComments = visibleComment
        .filter((comment) => comment.questionSerialNumber === serialNumber)
        .filter(
          (comment) => comment.range.from <= from && comment.range.to >= to
        );
      if (matchingComments && matchingComments.length > 0) {
        const matchingComment = matchingComments[0];
        setSelectedComment(matchingComment);
        highlightByComment(matchingComment);
      } else {
        openNewCommentFrame(from, to, serialNumber, selection);
      }
    };
  function openNewCommentFrame(from, to, serialNumber, selection) {
    if (
      pageMode === 'DRAFT' &&
      isNullOrEmpty(
        _.flatMap(submission.assignment.questions, (q) => q.focusAreas || [])
      )
    ) {
      return;
    }
    if (pageMode !== 'REVIEW' && pageMode !== 'DRAFT') {
      return;
    }
    if (from !== to) {
      setNewCommentSerialNumber(serialNumber);
      setSelectedRange({
        from: from,
        to: to,
      });
      setSelectedText(selection.selectedText);
      if (pageMode === 'DRAFT' || pageMode === 'REVISE') {
        setShowFloatingDialogue(true);
      }
      if (pageMode === 'REVIEW') {
        setShowNewComment(true);
      }
    }
  }
  function highlightByComment(comment) {
    const div = document.getElementById('comment_' + comment.id);
    if (div) {
      highlightComment(comment.color, div);
    }
  }
  function highlightComment(color, div) {
    setTimeout(() => {
      div.style.background = color ? color : '#FFFFFF';
      div.style.border = '1px solid #E5E5E5';
      div.style.boxShadow = '0px 4px 16px #7200e01a';
      div.style.scale = 1;
    }, 2000);
    div.style.background = '#F9F5FF';
    div.style.border = '1px solid rgba(197, 150, 242, 1)';
    div.style.boxShadow = '0px 4.08px 8px 0px rgba(112, 112, 112, 0.1)';
    div.style.scale = 1.0003;
    setCommentHighlight(true);
  }

  const unhighlightComment = () => {
    if (feedbackComments.length > 0 && commentHighlight) {
      feedbackComments.map((comment) => {
        const div = document.getElementById('comment_' + comment.id);
        div.style.background = '#FFFFFF';
        div.style.border = '1px solid #E5E5E5';
        div.style.boxShadow = '0px 4px 16px #7200e01a';
        div.style.scale = 1;
      });
      setCommentHighlight(false);
    }
  };

  const hideNewCommentDiv = () => {
    setShowNewComment(false);
  };

  const studentUpdate = (student) => {
    setStudentName(student);
  };

  const onSelectionChange = reviewerSelectionChange;

  const createTasksDropDown = () => {
    if (!isTeacher) {
      return <></>;
    } else {
      const menuItems = students.map((student) => {
        return {
          id: student.id,
          title: student.name,
          link: student.link,
        };
      });
      const selectedItemIndex = menuItems.findIndex((menuItem) => {
        return menuItem.id === submission.id;
      });
      return (
        <>
          <StyledDropDown
            showAvatars={true}
            search={true}
            selectedIndex={selectedItemIndex}
            menuItems={menuItems}
          />
        </>
      );
    }
  };

  const downloadPDF = () => {
    downloadSubmissionPdf(submission.id);
  };

  function submissionStatusLabel() {
    return getStatusMessage(
      submission,
      isTeacher
        ? 'TEACHER'
        : getUserId() === submission.studentId
        ? 'SELF'
        : 'PEER'
    );
  }

  function getStatusMessage(submission, viewer) {
    if (submission.status === 'DRAFT') {
      return (
        'Created by ' +
        submission.assignment.teacherName +
        ' | Due on ' +
        formattedDate(submission.assignment.dueAt)
      );
    }
    if (submission.status === 'SUBMITTED') {
      let submitter;
      if (viewer === 'PEER') {
        submitter = 'your peer';
      } else if (viewer === 'SELF') {
        submitter = 'you';
      } else {
        submitter = submission.studentName;
      }
      return (
        'Submitted by ' +
        submitter +
        ' | Review due on ' +
        formattedDate(submission.assignment.reviewDueAt)
      );
    }
    if (
      submission.status === 'REVIEWED' ||
      submission.status === 'RESUBMISSION_REQUESTED'
    ) {
      let reviewer;
      if (submission.assignment.reviewedBy === 'TEACHER') {
        if (viewer === 'TEACHER') {
          reviewer = 'you';
        } else {
          reviewer = submission.assignment.teacherName;
        }
      } else {
        if (viewer === 'PEER') {
          reviewer = 'you';
        } else {
          if (isJeddAIUser(submission.reviewerId)) {
            reviewer = 'JEDDAI';
          } else {
            reviewer = 'your peer';
          }
        }
      }
      return (
        'Reviewed by ' +
        reviewer +
        ' on ' +
        formattedDate(submission.reviewedAt)
      );
    }

    if (submission.status === 'CLOSED') {
      let closedBy;
      if (viewer === 'PEER') {
        closedBy = 'your peer';
      } else if (viewer === 'SELF') {
        closedBy = 'you';
      } else {
        closedBy = submission.studentName;
      }
      return (
        'Closed by ' + closedBy + ' on ' + formattedDate(submission.closedAt)
      );
    }
  }

  function handleMarkingCriteriaLevelFeedback(QuestionIndex, markingCriteria) {
    const currentQuestion = submission.assignment.questions[QuestionIndex];

    submitMarkingCriteriaFeedback(
      currentQuestion,
      markingCriteria,
      QuestionIndex
    );
  }

  
  const hideSubmitPopup = () => {
    setShowSubmitPopup(false);
  };
  const showSubmitPopuphandler = (method) => {
    setShowSubmitPopup(true);
    setMethodToCall(method);
    if (method === 'SubmitForReview') {
      setPopupText('Are you sure you want to submit this task for review?');
    } else if (method === 'SubmitReview') {
      setPopupText('Are you sure you want to submit feedback for this task?');
    } else if (method === 'RequestResubmission') {
      setPopupText(
        'Are you sure you want to request resubmission for this task?'
      );
    } else if (method === 'CloseSubmission') {
      setPopupText('Are you sure you want to mark this task as complete?');
    }
  };
  const jeddAI = () => {
    const q = quillRefs.current[0];
    return askJeddAI(submission.id, q.getText()).then((res) => {
      setSubmission((old) => ({
        ...old,
        status: res.status,
        feedbackRequestType: res.feedbackRequestType,
        answers: res.answers,
      }));
      let interval;

      function getAndUpdateSubmission() {
        getSubmissionById(submission.id).then((response) => {
          if (response) {
            if (response.status !== 'FEEDBACK_ACCEPTED') {
              clearInterval(interval);
              window.location.reload();
            }
            setSubmission(response);
          }
        });
      }

      setTimeout(() => {
        interval = setInterval(getAndUpdateSubmission, 10000);
      }, 10000);
    });
  };

  const isResetEditorTextSelection = () => {
    setShowFloatingDialogue(false);
    setNewCommentSerialNumber(0);
    setSelectedRange(null);
    setSelectedText(null);
    setShowNewComment(false);
  };

  const methods = {
    comments: feedbackComments,
    submissionStatusLabel,
    handleDeleteComment,
    handleShareWithClass,
    handleAddComment,
    setShowNewComment,
    hideNewCommentDiv,
    handleEditorMounted,
    handleKeyPress,
    handleShortcutAddComment,
    handleShortcutAddCommentSmartAnnotaion,
    handleFocusAreaComment,
    handleSubmissionReviewed,
    handleSaveSubmissionForReview,
    handleSubmissionClosed,
    handleCommentSelected,
    createTasksDropDown,
    onSelectionChange,
    studentUpdate,
    unhighlightComment,
    downloadPDF,
    handleResolvedComment,
    handleReplyComment,
    handleDeleteReplyComment,
    handleEditingComment,
    updateParentComment,
    updateChildComment,
    handleMarkingCriteriaLevelFeedback,
    showSubmitPopuphandler,
    setUpdateExemplarComment,
    convertToCheckedState,
    addOverallFeedback,
    updateOverAllFeedback,
    jeddAI,
  };

  const shortcuts = getShortcuts();

  return (
    <FeedbackContext.Provider
      value={{
        smartAnnotations: commentBanksData?.filter(
          (cb) => cb !== undefined && cb !== null
        ),
        showNewComment,
        newCommentSerialNumber,
        markingCriteriaFeedback,
        overallComments: overAllCommentsById,
        comments: feedbackComments,
        showFloatingDialogue,
        setShowFloatingDialogue,
        allCommentBanks,
        methods,
        isTeacher,
        quillRefs,
        setNewCommentSerialNumber,
        setSelectedRange,
        setSelectedText,
        isResetEditorTextSelection,
        setSelectedComment,
      }}
    >
      {showSubmitPopup &&
        submitPopup(pageMode, hideSubmitPopup, popupText, submissionFunction)}
      {feedbackReviewPopup && (
        <PopupWithoutCloseIcon
          text={'Did you find this feedback helpful?'}
          onYes={handleFeedbackOnFeedback('LIKE')}
          onNo={handleFeedbackOnFeedback('DISLIKE')}
          onClickOutside={handleFeedbackOnFeedback('DISLIKE')}
        />
      )}

      {pageLeavePopup && (
        <GeneralPopup
          title="Save document"
          closeBtnText={'Delete'}
          textContent={'Do you want to save this document? '}
          buttonText={'Save'}
          hidePopup={() => deleteDraftPage(submission.id, pendingLocation)}
          confirmButtonAction={saveDraftPage}
        />
      )}
      <Header
        breadcrumbs={[submission?.assignment.title, submission?.status]}
      />

      <FeedbackTeacherLaptop
        {...{
          isTeacher,
          showLoader,
          submissionStatusLabel,
          quillRefs,
          pageMode,
          shortcuts,
          newCommentFrameRef,
          methods,
          comments: feedbackComments ? feedbackComments : [],
          submission,
          setSubmission,
          sharewithclassdialog,
          ...feedbacksFeedbackTeacherLaptopData,
          MARKING_METHODOLOGY_TYPE,
          selectedRange,
          classesAndStudents,
          teachers,
          selectedComment,
          overallComments: overAllCommentsById,
          markingCriteriaFeedback,
          otherDrafts,
          setOtherDrafts,
        }}
      />
    </FeedbackContext.Provider>
  );

  function submissionFunction() {
    if (methodTocall === 'CloseSubmission') {
      return handleSubmissionClosed;
    }
    if (methodTocall === 'SubmitReview') {
      return handleSubmissionReviewed;
    }
    if (methodTocall === 'SubmitForReview') {
      return handleSaveSubmissionForReview;
    }
    return handleRequestResubmission;
  }
}
function submitPopup(pageMode, hideSubmitPopup, popupText, submissionFunction) {
  let warningMessage = undefined;
  let confirmationMessage = undefined;
  let buttonText = 'Submit';

  if (pageMode === 'DRAFT') {
    warningMessage =
      'Plagiarism undermines the learing process, hinders personal growth, and goes against the principles of honesty and fairness.';
    confirmationMessage =
      'By submitting your work, you are acknowledging that it is entirely your own and has not been plagiarised in any form.';
    buttonText = 'Submit';
  }
  return (
    <GeneralPopup
      hidePopup={hideSubmitPopup}
      title="Submit task"
      textContent={popupText}
      buttonText={buttonText}
      confirmButtonAction={submissionFunction()}
      warningMessage={warningMessage}
      confirmationMessage={confirmationMessage}
    />
  );
}
