import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import _, { flatMap, groupBy } from 'lodash';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { formattedDate } from '../../../dates';
import GeneralPopup from '../../GeneralPopup';
import SubmitCommentFrameRoot from '../../SubmitCommentFrameRoot';
import { FeedbackContext } from './FeedbackContext.js';

import {
  acceptFeedbackRequest,
  addFeedback,
  askJeddAI,
  deleteFeedback,
  deleteSubmissionById,
  getDefaultCriteria,
  getSubmissionById,
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
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import PopupWithoutCloseIcon from '../../../components2/PopupWithoutCloseIcon';
import StyledDropDown from '../../../components2/StyledDropDown/index.jsx';
import { isNullOrEmpty } from '../../../utils/arrays.js';
import CheckboxBordered from '../../CheckboxBordered/index.jsx';
import Header from '../../Header2/index.jsx';
import { downloadSubmissionPdf } from '../../Shared/helper/downloadPdf';
import Toast from '../../Toast/index.js';
import isJeddAIUser from './JeddAi.js';
import { allCriteriaHaveSelectedLevels, bannerText, isShowBannerBox, isShowBannerButton } from './rules.js';
import { useAllDocuments, useAllSubmisssionsById, useMarkingCriterias, useClassData, useCommentBanks, useCommentBanksById,  useCommentsById, useIsJeddAIEnabled, useOverAllCommentsById, useSubmissionById } from '../../state/hooks.js';
import JeddAIFeedbackTypeSelection from '../JeddAIFeedbackTypeSelection/index.jsx';
import PreviewDialog from '../../Shared/Dialogs/preview/previewCard.jsx';
import CommentBankDialog from '../../Shared/Dialogs/commentBank/index.js';
import TopBannerBox from '../../../components2/TopBannerBox/index.jsx';

const MARKING_METHODOLOGY_TYPE = {
  Rubrics: 'rubrics',
  Strengths_And_Targets: 'strengthsAndTargets',
};
const isTeacher = getUserRole() === 'TEACHER';

export default function FeedbacksRoot() {
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
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [showNewComment, setShowNewComment] = useState(false);
  const [selectedRange, setSelectedRange] = useState(null);
  const [selectedText, setSelectedText] = useState(null);
  const [newCommentSerialNumber, setNewCommentSerialNumber] = useState(0);
  const [nextUrl, setNextUrl] = useState('');
  const [commentHighlight, setCommentHighlight] = useState(false);
  const [editingComment, setEditingComment] = useState(false);
  const [showSubmitPopup, setShowSubmitPopup] = React.useState(false);
  const [methodTocall, setMethodToCall] = React.useState(null);
  const [popupText, setPopupText] = React.useState(null);
  const [checkedState, setCheckedState] = useState({});
  const [feedbackReviewPopup, setFeedbackReviewPopup] = useState(false);
  const [pageLeavePopup, setPageLeavePopup] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);
  const [showFloatingDialogue, setShowFloatingDialogue] = useState(false);
  const defaultMarkingCriteria = getDefaultCriteria();
  const unblockRef = useRef(null);
  const [groupedFocusAreaIds, setGroupedFocusAreaIds] = React.useState();
  const [showFocusAreaPopUp, setShowFocusArePopUp] = React.useState(false);
  const [showFocusAreaPopUpText, setShowFocusArePopUpText] = React.useState('');
  const [showFeedbackBanksPopUp, setFeedbackBanksPopUp] = React.useState(false);
  const [openRightPanel, setOpenRightPanel] = React.useState();
  const [showLottie, setShowLottie] = React.useState(false);
  const [showJeddAIFeedbackTypeSelectionPopUp, setShowJeddAIFeedbackTypeSelectionPopUp] = useState(false);
  const [openMarkingCriteriaPreviewDialog, setMarkingCriteriaPreviewDialog] =
  React.useState(false);
  const [openCommentBankPreviewDialog, setCommentBankPreviewDialog] =
  React.useState(false);
  const [currentMarkingCriteria, setCurrentMarkingCriteria] = React.useState(null);
  const [currentCommentBank, setCurrentCommentBank] = useState(null);
  const [isUpdatingHandWrittenFiles, setIsUpdatingHandWrittenFiles] = useState(false);
  const [openReviewApprovalBanner, setOpenReviewApprovalBanner] = useState(true);

  const {
    data: submissionByIdData,
    isLoadingdata: isLoadingsubmissionByIdData,
    setData: setSubmissionByIdData,
    resetData: resetSubmissionByIdData,
  } = useSubmissionById(id);

  
  const {
    data: commentsByIdData,
    isLoadingdata: isLoadingcommentsByIdData,
    setData: setCommentsByIdData,
    resetData: resetCommentsByIdData,
  } = useCommentsById(id);
  const {
    data: overAllCommentsById,
    isLoadingdata: isLoadingoverAllCommentsById,
    setData: setOverAllCommentsById,
    resetData: resetOverAllCommentsById,
  } = useOverAllCommentsById(id);


  
  const {
    data: allDocumentsData,
    isLoadingdata: isLoadingDocumentsData,
    setData: setAllDocuments,
    resetData: resetAllDocuments,
  } = useAllDocuments();


  const { data: classData, isLoadingdata: isLoadingclassData } = useClassData();
  const { data: isJeddAIEnabled, isLoadingdata: isLoadingJeddAIEnabled } = useIsJeddAIEnabled();
 

  useEffect(() => {
    setIsLoading(true);
  }, [id]);


  const commentBankIds = submissionByIdData?.assignment?.questions
    .filter((q) => q.commentBankId !== undefined && q.commentBankId !== null)
    .map((q) => q.commentBankId);

  const {
    data: allSubmissions,
    isLoadingdata: isLoadingallSubmissions,
    resetData: resetAllSubmissions,
  } = useAllSubmisssionsById(submissionByIdData?.assignment.id, isTeacher);

  const {
    data: commentBanksData,
    isLoadingdata: isLoadingcommentBanksData,
    resetData: resetCommentBanksData,
  } = useCommentBanksById(commentBankIds, isTeacher);


  const {
    data: feedbanksData,
    isLoadingdata : isLoadingfeedbanks,
    setData: setFeedbanksData,
    resetData,
  } = useCommentBanks();
  
  const {
    data: markingCriterias,
    isLoadingdata: isLoadingMarkingCriterias,
    setData: setMarkingCriterias,
    resetData: resetMarkingCriterias,
  } = useMarkingCriterias();

  const isDataLoading =
    isLoadingsubmissionByIdData ||
    isLoadingcommentsByIdData ||
    isLoadingoverAllCommentsById ||
    isLoadingDocumentsData ||
    isLoadingclassData ||
    isLoadingJeddAIEnabled||
    (isTeacher &&
      (isLoadingallSubmissions ||
         isLoadingcommentBanksData || isLoadingfeedbanks || isLoadingMarkingCriterias));


  const markingCriteriaFeedback = commentsByIdData?.filter(
    (c) => c.type === 'MARKING_CRITERIA'
  );
  const feedbackComments = commentsByIdData?.filter(
    (c) => c.type !== 'MARKING_CRITERIA'
  );


  const allTeachers = _.flatten(classData?.map((c) => c.teachers));
  const uniqueTeachers = _.uniqBy(allTeachers, 'id');


  const initialCheckedState = classData?.reduce((acc, classItem) => {
    acc[classItem.id] = {
      checked: false,
      students: classItem.students.reduce((studentAcc, student) => {
        let bool = submissionByIdData?.studentId === student.id ? true : false;
        studentAcc[student.id] = bool;
        return studentAcc;
      }, {}),
    };
    return acc;
  }, {});

  


  useEffect(() => {
    if (!isDataLoading) {
      setGroupedFocusAreaIds(
        createGroupedFocusAreas(submissionByIdData, feedbackComments)
      );

      if (classData && submissionByIdData) {
        
        setCheckedState(initialCheckedState);
        
      }
      if (!isTeacher) {
        setIsLoading(false);
      }
    }
  }, [isDataLoading, id]);

  const students = extractStudents(allSubmissions);

  useEffect(() => {
    if (!isDataLoading && allSubmissions) {
   

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
      setIsLoading(false);
    }
  }, [isDataLoading, id]);

  useEffect(() => {
    unblockRef.current = history.block((location, action) => {
      if (
        submissionByIdData?.status === 'REVIEWED' &&
        submissionByIdData?.type === 'DOCUMENT' &&
        submissionByIdData?.studentId === getUserId() &&
        (submissionByIdData?.feedbackOnFeedback === null ||
          submissionByIdData?.feedbackOnFeedback === undefined)
      ) {
        setPendingLocation(location);
        setFeedbackReviewPopup(true);
        return false;
      }
      return true;
    });

    return () => {
      if (unblockRef.current) {
        unblockRef.current();
      }
    };
  }, [submissionByIdData, feedbackReviewPopup, history]);


  useEffect(()=>{
    const showBannerBox = allSubmissions?.some((submission) => submission?.id === submissionByIdData?.id)
    setOpenReviewApprovalBanner(showBannerBox)
  }, [submissionByIdData, allSubmissions])



  const deleteDraftPage = (submissionId, pendingLocation) => {
    console.log('deleteDraftPage', submissionId, pendingLocation);
    deleteSubmissionById(submissionId).then(() => {
      if (pendingLocation) {
        goToNewUrl(pendingLocation, history, unblockRef);
      }
      setPageLeavePopup(false);
    });
  };

  

  const updateGroupedFocusAreaIds = (serialNumber, focusAreaId) => {
    const isPresent = groupedFocusAreaIds[serialNumber].includes(focusAreaId);
    if (!isPresent) {
      setGroupedFocusAreaIds((prevState) => {
        return {
          ...prevState,
          [serialNumber]: [...prevState[serialNumber], focusAreaId],
        };
      });
      console.log('updateGroupedFocusAreaIds', groupedFocusAreaIds);
    }
  };

  function createGroupedFocusAreas(submissionByIdData, feedbackComments) {
    const flattenedQuestions = flatMap(
      submissionByIdData?.assignment?.questions,
      (question) =>
        question?.focusAreaIds?.map((focusAreaId) => ({
          serialNumber: question.serialNumber,
          focusAreaId,
        }))
    );

    const groupedBySerialNumber = groupBy(flattenedQuestions, 'serialNumber');
    const grouped = Object.keys(groupedBySerialNumber).reduce(
      (grouped, serialNumber) => {
        grouped[serialNumber] = [];
        return grouped;
      },
      {}
    );

    feedbackComments.forEach((comment) => {
      if (comment.type === 'FOCUS_AREA') {
        const { questionSerialNumber, focusAreaId } = comment;
        if (grouped[questionSerialNumber]) {
          grouped[questionSerialNumber].push(focusAreaId);
        }
      }
    });
    return grouped;
  }
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
      goToNewUrl(pendingLocation, history, unblockRef);
    }
    setPageLeavePopup(false);
  };

  const handleFeedbackOnFeedback = (feedbackOnFeedback) => () => {
    provideFeedbackOnFeedback(submissionByIdData.id, feedbackOnFeedback).then(
      (res) => {
        setSubmissionByIdData((old) => {
          return { ...old, feedbackOnFeedback: res.feedbackOnFeedback };
        });
        setFeedbackReviewPopup(false);
        if (pendingLocation !== undefined || pendingLocation !== null) {
          history.replace(pendingLocation);
        }
      }
    );
  };


  const pageMode = getPageMode(isTeacher, getUserId(), submissionByIdData);

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
    addFeedback(submissionByIdData.id, {
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
    addFeedback(submissionByIdData.id, {
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
    addFeedback(submissionByIdData.id, {
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
    addFeedback(submissionByIdData.id, {
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
        updateGroupedFocusAreaIds(newCommentSerialNumber, focusArea.id);
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

    addFeedback(submissionByIdData.id, {
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
              if (submissionByIdData.studentId === studentId) {
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
            {classData.map((classItem) => (
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
                          disabled={submissionByIdData?.studentId === student.id}
                          onChange={() =>
                            handleStudentCheck(classItem.id, student.id)
                          }
                        />
                        {student.name}{' '}
                        {submissionByIdData?.studentId === student.id
                          ? '(author)'
                          : ''}
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
    deleteFeedback(submissionByIdData.id, commentId).then((response) => {
      setCommentsByIdData((prevComments) => {
        const otherComments = prevComments.filter(
          (comment) => comment.type !== 'MARKING_CRITERIA'
        );
        const markingCriteriaComments = prevComments.filter(
          (comment) => comment.type === 'MARKING_CRITERIA'
        );

        let updatedComments = otherComments.filter((c) => c.id != commentId);
        setGroupedFocusAreaIds(
          createGroupedFocusAreas(submissionByIdData, updatedComments)
        );
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

        updateFeedback(submissionByIdData.id, commentId, {
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
        updateFeedback(submissionByIdData.id, commentId, {
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

        updateFeedback(submissionByIdData.id, commentId, {
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
        updateFeedback(submissionByIdData.id, commentId, {
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

    submissionByIdData.assignment.questions.some((question, index) => {
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



  function handleSubmissionReviewed() {
    setShowSubmitPopup(false);
    setMethodToCall(null);
    setPopupText('');
    if (validateMarkingCriteria()) {
      submitReview();
    }
  }

  function submitReview() {
    markSubmsissionReviewed(submissionByIdData.id).then((_) => {
      

      toast(
        <Toast
          message={'Task reviewed...'}
          link={
            window.location.href.includes('documentsReview')
              ? '/documentsReview/'
              : '/submissions/' + submissionByIdData?.id
          }
        />
      );
      queryClient.invalidateQueries(['notifications']);
      queryClient.invalidateQueries(['tasks']);
      queryClient.invalidateQueries(['assignments']);
      queryClient.invalidateQueries((queryKey) => {
        return queryKey.includes('class');
      });
      resetSubmissionByIdData();
      resetCommentsByIdData();
      resetOverAllCommentsById();
      resetAllDocuments();
      resetAllSubmissions();
      resetCommentBanksData();
      console.log('teh teacher nextUrl', nextUrl)

      history.push('/#');
    });
  }

  

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
        submissionByIdData?.id,
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
      addFeedback(submissionByIdData?.id, markingCriteriaRequest)
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
      markSubmissionRequestSubmission(submissionByIdData?.id).then((_) => {
        
        toast(
          <Toast
            message={'Resubmission requested...'}
            link={'/submissions/' + submissionByIdData?.id}
          />
        );

        queryClient.invalidateQueries(['notifications']);
        queryClient.invalidateQueries(['tasks']);
        queryClient.invalidateQueries(['assignments']);
        queryClient.invalidateQueries((queryKey) => {
          return queryKey.includes('class');
        });
        resetSubmissionByIdData();
        resetCommentsByIdData();
        resetOverAllCommentsById();
        resetAllDocuments();
        resetAllSubmissions();
        resetCommentBanksData();
        
        history.push('/#');
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
      const quill = quillRefs.current[0];
      // console.log("Get text", quill.getText());
      submitAssignment(submissionByIdData.id).then((_) => {
        

        toast(
          <Toast
            message={'Task submitted...'}
            link={'/submissions/' + submissionByIdData.id}
          />
        );
        queryClient.invalidateQueries(['notifications']);
        queryClient.invalidateQueries(['tasks']);
        queryClient.invalidateQueries(['assignments']);
        queryClient.invalidateQueries((queryKey) => {
          return queryKey.includes('class');
        });
        resetSubmissionByIdData();
        resetCommentsByIdData();
        resetOverAllCommentsById();
        resetAllDocuments();
        resetAllSubmissions();
        resetCommentBanksData();
        history.push('/#');
        setShowLoader(false);
      });
    }, 4000);
  };
  function disableAllEditors() {
    submissionByIdData.assignment.questions
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
      markSubmsissionClosed(submissionByIdData?.id).then((_) => {
        

        toast(
          <Toast
            message={'Task completed...'}
            link={'/submissions/' + submissionByIdData?.id}
          />
        );
        queryClient.invalidateQueries(['notifications']);
        queryClient.invalidateQueries(['tasks']);
        queryClient.invalidateQueries(['assignments']);
        queryClient.invalidateQueries((queryKey) => {
          return queryKey.includes('class');
        });
        resetSubmissionByIdData();
        resetCommentsByIdData();
        resetOverAllCommentsById();
        resetAllDocuments();
        resetAllSubmissions();
        resetCommentBanksData();
        history.push('/#');
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
          _.flatMap(
            submissionByIdData?.assignment.questions,
            (q) => q.focusAreas || []
          )
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
        _.flatMap(
          submissionByIdData?.assignment.questions,
          (q) => q.focusAreas || []
        )
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
        return menuItem.id === submissionByIdData?.id;
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
    downloadSubmissionPdf(submissionByIdData?.id);
  };

  function submissionStatusLabel() {
    return getStatusMessage(
      submissionByIdData,
      isTeacher
        ? 'TEACHER'
        : getUserId() === submissionByIdData?.studentId
        ? 'SELF'
        : 'PEER'
    );
  }

  function getStatusMessage(submissionByIdData, viewer) {
    if (submissionByIdData?.status === 'DRAFT') {
      return (
        'Created by ' +
        submissionByIdData?.assignment.teacherName +
        ' | Due on ' +
        formattedDate(submissionByIdData?.assignment.dueAt)
      );
    }
    if (submissionByIdData?.status === 'SUBMITTED') {
      let submitter;
      if (viewer === 'PEER') {
        submitter = 'your peer';
      } else if (viewer === 'SELF') {
        submitter = 'you';
      } else {
        submitter = submissionByIdData?.studentName;
      }
      return (
        'Submitted by ' +
        submitter +
        ' | Review due on ' +
        formattedDate(submissionByIdData?.assignment.reviewDueAt)
      );
    }
    if (
      submissionByIdData?.status === 'REVIEWED' ||
      submissionByIdData?.status === 'RESUBMISSION_REQUESTED'
    ) {
      let reviewer;
      if (submissionByIdData?.assignment.reviewedBy === 'TEACHER') {
        if (viewer === 'TEACHER') {
          reviewer = 'you';
        } else {
          reviewer = submissionByIdData?.assignment.teacherName;
        }
      } else {
        if (viewer === 'PEER') {
          reviewer = 'you';
        } else {
          if (isJeddAIUser(submissionByIdData?.reviewerId)) {
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
        formattedDate(submissionByIdData?.reviewedAt)
      );
    }

    if (submissionByIdData?.status === 'CLOSED') {
      let closedBy;
      if (viewer === 'PEER') {
        closedBy = 'your peer';
      } else if (viewer === 'SELF') {
        closedBy = 'you';
      } else {
        closedBy = submissionByIdData?.studentName;
      }
      return (
        'Closed by ' +
        closedBy +
        ' on ' +
        formattedDate(submissionByIdData?.closedAt)
      );
    }
  }

  function handleMarkingCriteriaLevelFeedback(QuestionIndex, markingCriteria) {
    const currentQuestion =
      submissionByIdData?.assignment.questions[QuestionIndex];

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

  const validateFocusAreas = () => {
    let valid = true;
    let errorMessage = '';

    for (
      let index = 0;
      index < submissionByIdData?.assignment?.questions?.length;
      index++
    ) {
      const question = submissionByIdData?.assignment?.questions[index];
      const currentFocusAreas = question?.focusAreas || [];
      const selectedFocusAreas = groupedFocusAreaIds[index + 1] || [];

      const allSelfAssessmentUsed = currentFocusAreas.every(fa => selectedFocusAreas.includes(fa.id))      

      if (
        !allSelfAssessmentUsed
      ) {
      errorMessage = 'Some self-assessment areas are not selected. Do you want to submit?';
        valid = false;
        break; // Stop iterating
      }
    }

    if (!valid) {
      setShowFocusArePopUpText(errorMessage);
    }

    console.log('valid', valid);
    return valid;
  };

  const checkFocusAreas = () => {
    if (!validateFocusAreas()) {
      console.log('valid entered');
      setShowFocusArePopUp(true);
    } else {
      showSubmitPopuphandler('SubmitForReview');
    }
  };


  const proceedToSave = () => {
    showSubmitPopuphandler('SubmitForReview');
    setShowFocusArePopUpText('');
    setShowFocusArePopUp(false);
  };

  const closeFocusAreaPopUp = () => {
    setShowFocusArePopUpText('');
    setShowFocusArePopUp(false);
  };

  
  const jeddAI = (includeFeedbackMethods) => {
    const q = quillRefs.current[0];
    const args = [submissionByIdData?.id, q?.getText()];
    if (includeFeedbackMethods) {
      args.push(currentMarkingCriteria?.id, currentCommentBank?.id);
    }

    return askJeddAI(...args).then((res) => {
      setSubmissionByIdData((old) => ({
        ...old,
        status: res.status,
        feedbackRequestType: res.feedbackRequestType,
        answers: res.answers,
      }));
      setOpenRightPanel('tab4');
      setShowLottie(true);
      let interval;

      function getAndUpdateSubmission() {
        getSubmissionById(submissionByIdData?.id).then((response) => {
          if (response) {
            if (response.jeddaiFeedbackReceivedAt) {
              clearInterval(interval);
              window.location.reload();
              setShowLottie(false);
            }
            setSubmissionByIdData(response);
          }
        });
      }

      setTimeout(() => {
        interval = setInterval(getAndUpdateSubmission, 10000);
      }, 10000);
    });
  };

  
  function updateMarkingCriteria(id, markingCriteria) {
    setCurrentMarkingCriteria(markingCriteria);
  }
  function updateCommentBank(id, commentBank) {
    setCurrentCommentBank(commentBank);
  }

  function handleMarkingCriteriaPreview(id) {
    setMarkingCriteriaPreviewDialog(Object.keys(currentMarkingCriteria).length > 0);
  }
  function handleCommentBankPreview() {
    setCommentBankPreviewDialog(currentCommentBank?.smartComments?.length > 0);
  }

  function handleAcceptFeedbackRequest(submissionId){
    acceptFeedbackRequest(submissionId)
    .then((response)=>{
      setSubmissionByIdData((prev)=>({
        ...prev,
        reviewerId: response.reviewerId,
        reviewerName: response.reviewerName,
        status: response.status,
        feedbackRequestAcceptedAt: response.feedbackRequestAcceptedAt,
        reviewerName: response.reviewerName
      }));
    })
    .catch((error) => {
      console.log('Error accepting feedback request:', error);
      resetSubmissionByIdData();
      toast(
        <Toast
          message={
            'This feedback request has already been accepted by another teacher.'
          }
        />
      );
    });
  }

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
    checkFocusAreas,
    setShowJeddAIFeedbackTypeSelectionPopUp,
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
        allCommentBanks: feedbanksData?._embedded?.commentbanks,
        methods,
        isTeacher,
        quillRefs,
        setNewCommentSerialNumber,
        setSelectedRange,
        setSelectedText,
        isResetEditorTextSelection,
        setSelectedComment,
        setFeedbackBanksPopUp,
        isJeddAIEnabled,
        allMarkingCriterias: markingCriterias,
        isUpdatingHandWrittenFiles,
        setIsUpdatingHandWrittenFiles,
      }}
    >
      {isShowBannerBox(submissionByIdData?.status) && (
        <TopBannerBox
          onclickFn={() => handleAcceptFeedbackRequest(submissionByIdData?.id)}
          bannerText={bannerText(submissionByIdData?.status)}
          showBannerButton={isShowBannerButton(submissionByIdData?.status)}
          openBanner={openReviewApprovalBanner}
          setOpenBanner={setOpenReviewApprovalBanner}
        />
      )}
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
      {openMarkingCriteriaPreviewDialog && currentMarkingCriteria?.type && (
        <PreviewDialog
          setMarkingCriteriaPreviewDialog={setMarkingCriteriaPreviewDialog}
          markingCriterias={currentMarkingCriteria}
        />
      )}
      {openCommentBankPreviewDialog && (
        <CommentBankDialog
          setCommentBankPreviewDialog={setCommentBankPreviewDialog}
          commentBank={currentCommentBank}
        />
      )}

      {pageLeavePopup && (
        <GeneralPopup
          title="Save document"
          closeBtnText={'Delete'}
          textContent={'Do you want to save this document? '}
          buttonText={'Save'}
          hidePopup={() =>
            deleteDraftPage(submissionByIdData?.id, pendingLocation)
          }
          confirmButtonAction={saveDraftPage}
        />
      )}
      {showJeddAIFeedbackTypeSelectionPopUp && (
        <JeddAIFeedbackTypeSelection
          allMarkingCriterias={markingCriterias}
          allCommentBanks={feedbanksData?._embedded?.commentbanks}
          hidePopup={() => setShowJeddAIFeedbackTypeSelectionPopUp(false)}
          updateMarkingCriteria={updateMarkingCriteria}
          updateCommentBank={updateCommentBank}
          handleCommentBankPreview={handleCommentBankPreview}
          handleMarkingCriteriaPreview={handleMarkingCriteriaPreview}
          currentCommentBank={currentCommentBank}
          currentMarkingCriteria={currentMarkingCriteria}
          submit={jeddAI}
        />
      )}
      {showFocusAreaPopUp && (
        <GeneralPopup
          title="Submit task"
          textContent={showFocusAreaPopUpText}
          buttonText={'Submit'}
          hidePopup={closeFocusAreaPopUp}
          confirmButtonAction={proceedToSave}
        />
      )}
      <Header
        breadcrumbs={[
          submissionByIdData?.assignment.title,
          submissionByIdData?.status,
        ]}
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
          submission: submissionByIdData,
          setSubmission: setSubmissionByIdData,
          sharewithclassdialog,
          ...feedbacksFeedbackTeacherLaptopData(classData),
          MARKING_METHODOLOGY_TYPE,
          selectedRange,
          classesAndStudents: classData,
          teachers: uniqueTeachers,
          selectedComment,
          overallComments: overAllCommentsById,
          markingCriteriaFeedback,
          otherDrafts: allDocumentsData,
          setOtherDrafts: setAllDocuments,
          groupedFocusAreaIds,
          feedbanksData,
          showFeedbackBanksPopUp,
          setFeedbackBanksPopUp,
          openRightPanel,
          setOpenRightPanel,
          showLottie,
          setSelectedComment,
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
