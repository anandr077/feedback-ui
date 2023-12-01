import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { cloneDeep, filter, flatMap, get, includes, map, set } from 'lodash';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { formattedDate } from '../../../dates';
import GeneralPopup from '../../GeneralPopup';
import SubmitCommentFrameRoot from '../../SubmitCommentFrameRoot';
import _ from 'lodash';

import {
  addFeedback,
  deleteFeedback,
  getDefaultCriteria,
  getSubmissionById,
  getSubmissionsByAssignmentId,
  getOverComments,
  getUserId,
  getUserName,
  getUserRole,
  getClassesWithStudents,
  markSubmissionRequestSubmission,
  markSubmsissionClosed,
  markSubmissionReviewed as markSubmsissionReviewed,
  resolveFeedback,
  submitAssignment,
  updateFeedback,
  updateFeedbackRange,
} from '../../../service';
import {
  getShortcuts,
  getSmartAnnotations,
  saveAnswer,
} from '../../../service.js';
import DropdownMenu from '../../DropdownMenu';
import Loader from '../../Loader';
import ReactiveRender, { isSmallScreen } from '../../ReactiveRender';
import SnackbarContext from '../../SnackbarContext';
import FeedbackTeacherLaptop from '../FeedbackTeacherLaptop';
import FeedbackTeacherMobile from '../FeedbackTeacherMobile';
import { extractStudents, getComments, getPageMode } from './functions';
import SnackbarContext from '../../SnackbarContext';
import {
  ActionButtonsContainer,
  DialogContiner,
  StyledTextField,
  feedbacksFeedbackTeacherLaptopData,
  feedbacksFeedbackTeacherMobileData,
  ClassContainer,
  ClassHeading,
  ClassBoxContainer,
  ClassBox,
  StudentList,
  ClassTitleBox,
  ClassTitle,
  Line141,
  ListItem,
  Crown,
  StudentContainer,
} from './style';

import { downloadSubmissionPdf } from '../../Shared/helper/downloadPdf';
import { useQueryClient } from '@tanstack/react-query';
import CheckboxBordered from '../../CheckboxBordered/index.jsx';

const MARKING_METHODOLOGY_TYPE = {
  Rubrics: 'rubrics',
  Strengths_And_Targets: 'strengthsAndTargets',
};
const isTeacher = getUserRole() === 'TEACHER';

export default function FeedbacksRoot({ isAssignmentPage }) {
  const queryClient = useQueryClient();
  queryClient.removeQueries(['portfolio']);

  const quillRefs = useRef([]);
  const [labelText, setLabelText] = useState('');
  const [showShareWithClass, setShowShareWithClass] = useState(false);
  const [exemplarComment, setExemplerComment] = useState('');
  const [updateExemplarComment, setUpdateExemplarComment] = useState({
    comment: null,
    showComment: false,
  });
  const [showLoader, setShowLoader] = useState(false);
  const { showSnackbar } = React.useContext(SnackbarContext);

  const newCommentFrameRef = useRef(null);

  const [submission, setSubmission] = useState(null);
  const [smartAnnotations, setSmartAnnotations] = useState([]);
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [studentName, setStudentName] = useState(null);
  const [comments, setComments] = useState([]);
  const [showNewComment, setShowNewComment] = useState(false);
  const [selectedRange, setSelectedRange] = useState(null);
  const [newCommentSerialNumber, setNewCommentSerialNumber] = useState(0);
  const [nextUrl, setNextUrl] = useState('');
  const [commentHighlight, setCommentHighlight] = useState(false);
  const [editingComment, setEditingComment] = useState(false);
  const [markingCriteriaFeedback, setMarkingCriteriaFeedback] = useState([]);
  const [newMarkingCriterias, setNewMarkingCriterias] = useState({});
  const [initialOverallFeedback, setInitialOverAllFeedback] = useState({
    feedbackText: 'Add General Feedback...',
    editFeedback: false,
  });
  const [overallComments, setOverallComments] = useState([]);

  const [showSubmitPopup, setShowSubmitPopup] = React.useState(false);
  const [methodTocall, setMethodToCall] = React.useState(null);
  const [popupText, setPopupText] = React.useState(null);
  const [smallScreenView, setSmallScreenView] = React.useState(isSmallScreen());
  const [classesAndStudents, setClassesAndStudents] = useState([]);
  const [checkedState, setCheckedState] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const defaultMarkingCriteria = getDefaultCriteria();

  useEffect(() => {
    Promise.all([
      getSubmissionById(id),
      getComments(id),
      getSmartAnnotations(),
      getClassesWithStudents(),
      getOverComments(id),
    ])
      .then(
        ([
          submissionsResult,
          commentsResult,
          smartAnnotationResult,
          classesWithStudentsResult,
          overAllCommentsResult,
        ]) => {
          setSubmission(submissionsResult);
          const allComments = commentsResult?.map((c) => {
            return { ...c };
          });
          const feedbackComments = allComments?.filter(
            (c) => c.type !== 'MARKING_CRITERIA'
          );
          setComments(feedbackComments);
          const markingCriteriaFeedback = allComments?.filter(
            (c) => c.type === 'MARKING_CRITERIA'
          );
          setMarkingCriteriaFeedback(markingCriteriaFeedback);
          setSmartAnnotations(smartAnnotationResult);

          const initialState = classesWithStudentsResult.reduce(
            (acc, classItem) => {
              acc[classItem.id] = {
                checked: false,
                students: classItem.students.reduce((studentAcc, student) => {
                  studentAcc[student.id] = false;
                  return studentAcc;
                }, {}),
              };
              return acc;
            },
            {}
          );
          setClassesAndStudents(classesWithStudentsResult);
          setCheckedState(initialState);
          console.log('the overall comment is', overAllCommentsResult)
          setOverallComments(overAllCommentsResult);
        }
      )
      .finally(() => {
        if (!isTeacher) {
          setIsLoading(false);
        }
      });
  }, [id]);

  useEffect(() => {
    if (isTeacher && submission && submission?.assignment.id) {
      getSubmissionsByAssignmentId(submission.assignment.id)
        .then((allSubmissions) => {
          setStudents(extractStudents(allSubmissions));
          let currentSubmissionIndex = 0;
          const allExceptCurrent = allSubmissions.map((r, index) => {
            if (r.id != submission.id) {
              return r;
            } else {
              currentSubmissionIndex = index;
            }
          });

          let nextSubmissionIndex = currentSubmissionIndex + 1;
          while (
            nextSubmissionIndex > 0 &&
            nextSubmissionIndex < allExceptCurrent.length
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
            allSubmissions.find((r) => r.id === submission.assignment.id)
              ?.studentName ?? null;

          setStudentName(studentName);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [submission]);

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  const initialCheckedState = classesAndStudents.reduce((acc, classItem) => {
    acc[classItem.id] = {
      checked: false,
      students: classItem.students.reduce((studentAcc, student) => {
        studentAcc[student.id] = false;
        return studentAcc;
      }, {}),
    };
    return acc;
  }, {});

  const pageMode = getPageMode(isTeacher, getUserId(), submission);

  const handleChangeText = (change, allSaved) => {
    if (document.getElementById('statusLabelIcon')) {
      if (allSaved) {
        document.getElementById('statusLabelIcon').style.backgroundImage =
          'url("/icons/saved.png")';
      } else {
        document.getElementById('statusLabelIcon').style.backgroundImage =
          'url("/icons/saving.png")';
      }
      document.getElementById('statusLabelDiv').innerHTML = change;
    }
  };

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
      type: 'COMMENT',
      replies: [],
      markingCriteria: defaultMarkingCriteria,
      sharedWithStudents: [],
    }).then((response) => {
      if (response) {
        setComments([...comments, response]);
      }
    });
    setShowNewComment(false);
  }

  function handleShortcutAddComment(commentText) {
    addFeedback(submission.id, {
      questionSerialNumber: newCommentSerialNumber,
      feedback: commentText.trim(),
      range: selectedRange,
      type: 'COMMENT',
      replies: [],
      markingCriteria: defaultMarkingCriteria,
      sharedWithStudents: [],
    }).then((response) => {
      if (response) {
        setComments([...comments, response]);
      }
    });
    setShowNewComment(false);
  }

  function handleShortcutAddCommentSmartAnnotaion(commentText) {
    addFeedback(submission.id, {
      questionSerialNumber: newCommentSerialNumber,
      feedback: commentText,
      range: selectedRange,
      type: 'SMART_ANNOTATION',
      replies: [],
      markingCriteria: defaultMarkingCriteria,
      sharedWithStudents: [],
    }).then((response) => {
      if (response) {
        setComments([...comments, response]);
      }
    });
    setShowNewComment(false);
  }

  function handleFocusAreaComment(focusArea) {
    addFeedback(submission.id, {
      questionSerialNumber: newCommentSerialNumber,
      feedback: focusArea.title,
      range: selectedRange,
      type: 'FOCUS_AREA',
      color: focusArea.color,
      focusAreaId: focusArea.id,
      replies: [],
      markingCriteria: defaultMarkingCriteria,
      sharedWithStudents: [],
    }).then((response) => {
      if (response) {
        setComments([...comments, response]);
      }
    });
    setShowNewComment(false);
  }

  const addExemplerComment = () => {
    const comment = exemplarComment || 'No comment';

    addFeedback(submission.id, {
      questionSerialNumber: newCommentSerialNumber,
      feedback: comment,
      range: selectedRange,
      type: 'MODEL_RESPONSE',
      replies: [],
      markingCriteria: defaultMarkingCriteria,
      sharedWithStudents: getSharedStudentIds(),
    }).then((response) => {
      if (response) {
        setComments([...comments, response]);
      }
    });
    setShowNewComment(false);
    setExemplerComment('');
    setShowShareWithClass(false);
  };

  const updateExemplar = () => {
    const dataToUpdate = updateExemplarComment.comment;
    console.log('the comment is, ', dataToUpdate);
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
    setIsButtonDisabled(false);
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
            ([studentId, _]) => [studentId, currentClassCheckedState]
          )
        ),
      },
    };
    setIsButtonDisabled(false);
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
    setIsButtonDisabled(false);
    setCheckedState(updatedState);
  };

  const convertToCheckedState = (selectedStudents) => {
    setIsButtonDisabled(false);
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
      open={showShareWithClass}
    >
      <ClassContainer>
        <ClassBoxContainer>
          <ClassTitleBox>
            <ClassTitle>
              <Crown src="/icons/exemplary_response.png" alt="crown" />
              Exemplar
            </ClassTitle>
            <Line141 src="/img/line-14@2x.png" />
          </ClassTitleBox>
          <ClassHeading>Share with:</ClassHeading>
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
                  {classItem.students
                    .filter((student) => student.id !== submission.studentId)
                    .map((student) => (
                      <ListItem key={student.id}>
                        <label>
                          <CheckboxBordered
                            type="checkbox"
                            checked={
                              checkedState[classItem.id]?.students[
                                student.id
                              ] || false
                            }
                            onChange={() =>
                              handleStudentCheck(classItem.id, student.id)
                            }
                          />
                          {student.name}
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
                console.log('Clicked');

                updateExemplarComment.showComment
                  ? updateExemplar()
                  : addExemplerComment();
                setCheckedState(initialCheckedState);
              }}
              isButtonDisabled={isButtonDisabled}
              showComment={updateExemplarComment.showComment}
              cancelButtonOnClick={() => {
                setShowShareWithClass(false);
                setShowNewComment(false);
                setExemplerComment('');
                setCheckedState(initialCheckedState);
              }}
            />
          </DialogActions>
        </ActionButtonsContainer>
      </DialogContiner>
    </Dialog>
  );

  function handleShareWithClass() {
    setCheckedState(initialCheckedState);
    setIsButtonDisabled(true);
    setShowShareWithClass(true);
    updateExemplarComment.showComment = false;
  }
  const createDebounceFunction = (answer) => {
    if (pageMode === 'DRAFT' || pageMode === 'REVISE') {
      return {
        debounceTime: 2000,
        onDebounce: handleDebounce(answer),
      };
    }
    return {
      debounceTime: 0,
      onDebounce: console.log,
    };
  };

  const handleDebounce = (answer) => (contents, highlights) => {
    handleChangeText('Saving...', false);
    saveAnswer(submission.id, answer.serialNumber, {
      answer: contents,
    }).then((updatedSubmission) => {
      setSubmission(updatedSubmission);
      return updateCommentsRange(answer, highlights);
    });
  };

  function updateCommentsRange(answer, highlightsWithCommentsData) {
    const mergedHighlights = {};

    Object.entries(highlightsWithCommentsData).map(([commentId, ranges]) => {
      const mergedRange = {
        range: {
          from: ranges[0].range.from,
          to: ranges[ranges.length - 1].range.to,
        },
      };
      mergedHighlights[commentId] = [mergedRange];
    });

    const transformedData = flatMap(
      Object.entries(mergedHighlights),
      ([commentId, highlights]) => {
        return highlights.map((highlight) => {
          const { content, range } = highlight;
          return { commentId, range };
        });
      }
    );

    const commentIdsArray = transformedData.map(({ commentId }) => commentId);

    const commentsForAnswer = comments.filter(
      (comment) => comment.questionSerialNumber === answer.serialNumber
    );
    const missingComments = filter(
      commentsForAnswer,
      (comment) => !includes(commentIdsArray, comment.id)
    );

    const missingCommentsWithZeroRange = map(missingComments, (comment) => ({
      commentId: comment.id,
      range: { from: 0, to: 0 },
    }));

    const finalData = transformedData.concat(missingCommentsWithZeroRange);

    const promises = finalData.map(({ commentId, range }) => {
      return updateFeedbackRange(submission.id, commentId, range);
    });

    Promise.all(promises).then((results) => {
      getComments(submission.id).then((cmts) => {
        setComments(cmts.filter((c) => c.type !== 'MARKING_CRITERIA'));
        handleChangeText('All changes saved', true);
      });
    });
  }

  function handleDeleteComment(commentId) {
    deleteFeedback(submission.id, commentId).then((response) => {
      setComments(comments.filter((c) => c.id != commentId));
    });
  }

  function handleResolvedComment(commentId) {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        resolveFeedback(commentId);
        return { ...comment, status: 'RESOLVED' };
      }
      return comment;
    });
    setComments(updatedComments);
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
    const addReplyComments = comments.map((comment) => {
      if (comment.id === commentId) {
        const commentToUpdate =
          comment.replies === undefined
            ? { ...comment, replies: [replyCommentObject] }
            : { ...comment, replies: [...comment.replies, replyCommentObject] };

        updateFeedback(submission.id, commentId, {
          questionSerialNumber: commentToUpdate.questionSerialNumber,
          feedback: commentToUpdate.comment,
          range: commentToUpdate.range,
          type: commentToUpdate.type,
          replies: commentToUpdate.replies,
          reviewerId: commentToUpdate.reviewerId,
          color: commentToUpdate.color,
          focusAreaId: commentToUpdate.focusAreaId,
          sharedWithStudents: commentToUpdate.sharedWithStudents,
        }).then((response) => {
          if (response) {
            const updatedComments = comments.map((c) =>
              c.id === commentId ? commentToUpdate : c
            );
            setComments(updatedComments);
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
    const updatedComment = comments.map((c) => {
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
            const updatedComments = comments.map((c) =>
              c.id === commentId ? commentToUpdate : c
            );
            setComments(updatedComments);
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
    const updatedReplyComment = comments.map((c) => {
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
          type: c.type,
          replies: updatedReplies,
          focusAreaId: commentToUpdate.focusAreaId,
          reviewerId: c.reviewerId,
          sharedWithStudents: sharedWithStudents,
        }).then((response) => {
          if (response) {
            const updatedComments = comments.map((c) =>
              c.id === commentId ? commentToUpdate : c
            );
            setComments(updatedComments);
          }
        });
      }
      return c;
    });
  }

  function handleDeleteReplyComment(commentId, replyCommentIndex) {
    const deleteReplyComment = comments.map((c) => {
      if (c.id === commentId) {
        const updatedReplies = [...c.replies];
        updatedReplies.splice(replyCommentIndex, 1);
        const commentToUpdate = { ...c, replies: updatedReplies };
        updateFeedback(submission.id, commentId, {
          questionSerialNumber: c.questionSerialNumber,
          feedback: c.comment,
          range: c.range,
          type: c.type,
          replies: updatedReplies,
          focusAreaId: commentToUpdate.focusAreaId,
          reviewerId: c.reviewerId,
          sharedWithStudents: c.sharedWithStudents,
        }).then((response) => {
          if (response) {
            const updatedComments = comments.map((c) =>
              c.id === commentId ? commentToUpdate : c
            );
            setComments(updatedComments);
          }
        });
      }
      return c;
    });
  }

  const validateMarkingCriteria = () => {
    let invalid = true;
    if (
      submission.assignment.questions.markingCriteria === undefined ||
      submission.assignment.questions.markingCriteria === null
    ) {
      return true;
    }
    submission.assignment.questions.map((question) => {
      if (
        (question?.markingCriteria?.title != '' &&
          question?.markingCriteria?.criterias) ||
        question.markingCriteria?.strengthsTargetsCriterias
      ) {
        question.markingCriteria?.criterias?.map((criteria) => {
          if (!criteria.selectedLevel) {
            criteria.selectedLevel = criteria.levels[0].name;
          }
        });
      }
    });
    return invalid;
  };

  function hasDuplicateAttributes(arr) {
    const attributeSet = new Set();

    for (const item of arr) {
      if (attributeSet.has(item.attribute)) {
        return true;
      }
      attributeSet.add(item.attribute);
    }

    return false;
  }
  function convertToSelectedAttribute(selectedArray) {
    return selectedArray.map((item, index) => ({
      index,
      criteria: item.label,
      attribute: item.value.name,
    }));
  }

  function handleSubmissionReviewed() {
    setShowSubmitPopup(false);
    setMethodToCall(null);
    setPopupText('');
    let isDuplicate = false;
    if (validateMarkingCriteria()) {
      submission.assignment.questions.map((question) => {
        submitMarkingCriteriaInputs(question);
      });
    }
    submission.assignment.questions.map((question) => {
      if (
        submission.assignment.questions.markingCriteria === undefined ||
        submission.assignment.questions.markingCriteria === null
      ) {
        return true;
      }
      if (hasDuplicateAttributes(question.markingCriteria?.selectedStrengths)) {
        showSnackbar(
          'Please select different strength in question number ' +
            question.serialNumber
        );
        setShowSubmitPopup(false);
        isDuplicate = true;
      }
    });
    if (!isDuplicate) {
      submitReview();
    }
  }

  function submitMarkingCriteriaInputs(question) {
    if (question.markingCriteria?.title != '') {
      if (question.markingCriteria?.criterias) {
        const markingCriteriaRequest = question.markingCriteria;
        return submitMarkingCriteriaFeedback(question, markingCriteriaRequest);
      }
      if (question.markingCriteria?.strengthsTargetsCriterias) {
        const markingCriteriaRequest = question.markingCriteria;
        const selectedStrengths = get(
          newMarkingCriterias,
          `${question.serialNumber}.selectedStrengths`
        );
        const selectedTargets = get(
          newMarkingCriterias,
          `${question.serialNumber}.selectedTargets`
        );
        markingCriteriaRequest.selectedStrengths =
          convertToSelectedAttribute(selectedStrengths);
        markingCriteriaRequest.selectedTargets =
          convertToSelectedAttribute(selectedTargets);
        submitMarkingCriteriaFeedback(question, markingCriteriaRequest);
      }
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
      showSnackbar('Task reviewed...', window.location.href);
      if (isTeacher) {
        window.location.href = nextUrl === '/' ? '/#' : nextUrl;
      } else {
        window.location.href = '/#';
      }
    });
  }

  function submitMarkingCriteriaFeedback(question, markingCriteriaRequest) {
    return addFeedback(submission.id, {
      questionSerialNumber: question.serialNumber,
      feedback: 'Marking Criteria Feedback',
      range: selectedRange,
      type: 'MARKING_CRITERIA',
      replies: [],
      markingCriteria: markingCriteriaRequest,
      sharedWithStudents: [],
    });
  }

  function handleRequestResubmission() {
    setShowSubmitPopup(false);
    setMethodToCall(null);
    setPopupText('');
    if (validateMarkingCriteria()) {
      submission.assignment.questions.map((question) => {
        if (
          question.markingCriteria?.title != '' &&
          question.markingCriteria.criterias
        ) {
          const markingCriteriaRequest = question.markingCriteria;
          addFeedback(submission.id, {
            questionSerialNumber: question.serialNumber,
            feedback: 'Marking Criteria Feedback',
            range: selectedRange,
            type: 'MARKING_CRITERIA',
            replies: [],
            markingCriteria: markingCriteriaRequest,
            sharedWithStudents: [],
          }).then((response) => {
            queryClient.invalidateQueries(['notifications']);
            queryClient.invalidateQueries(['tasks']);
            queryClient.invalidateQueries(['assignments']);
            queryClient.invalidateQueries((queryKey) => {
              return queryKey.includes('class');
            });
            showSnackbar('Resubmission requested...', window.location.href);
            window.location.href = '/#';
            setShowLoader(false);
          });
        }
      });

      markSubmissionRequestSubmission(submission.id).then((_) => {
        showSnackbar('Resubmission requested...', window.location.href);
        if (isTeacher) {
          window.location.href = nextUrl === '/' ? '/#' : nextUrl;
          window.location.reload();
        } else {
          window.location.href = '/#';
        }
      });
    }
  }

  const handleOverAllFeedback = ( questionSerialNumber, comment) => {
    addFeedback(submission.id, {
      questionSerialNumber: questionSerialNumber,
      feedback: comment,
      range: {
        from: 0,
        to: 0,
      },
      type: 'OVERALL_COMMENT',
    }).then((response) => {
      if (response) {
        console.log('the overall Feedback is', response)
        setOverallComments([...overallComments, response]);
      }
    });
  };

  const updateOverAllFeedback = (feedbackId, feedbackText) => {
    const feedbackToUpdate = overallComments.find((feedback) => feedback.id === feedbackId)
    if (feedbackToUpdate === null || feedbackToUpdate === undefined) {
      return
    }
    console.log("feedbackToUpdate ", feedbackToUpdate)

    updateFeedback(submission.id, feedbackId, {
      ...feedbackToUpdate,
      feedback: feedbackText,
    }).then((response) => {
      setOverallComments(o=>o.map((feedback) => {
        return feedback.id === feedbackId ? 
        {...feedback, comment: feedbackText} : feedback
      })
      );
        
    })
    
  };

  const handleSaveSubmissionForReview = () => {
    setShowSubmitPopup(false);
    setMethodToCall(null);
    setPopupText('');

    disableAllEditors();
    handleChangeText('Saving...', false);
    setShowLoader(true);
    showSnackbar('Submitting task...');

    setTimeout(() => {
      submitAssignment(submission.id).then((_) => {
        queryClient.invalidateQueries(['notifications']);
        queryClient.invalidateQueries(['tasks']);
        queryClient.invalidateQueries(['assignments']);
        queryClient.invalidateQueries((queryKey) => {
          return queryKey.includes('class');
        });
        showSnackbar('Task submitted...', window.location.href);
        window.location.href = '/#';
        setShowLoader(false);
      });
    }, 4000);
  };
  function disableAllEditors() {
    submission.assignment.questions
      .filter((question) => question.type === 'TEXT')
      .forEach((question) => {
        // alert(JSON.stringify(question))
        const quill = quillRefs.current[question.serialNumber - 1];
        // alert(JSON.stringify(quillRefs.current))
        quill.disable();
      });
  }

  function handleSubmissionClosed() {
    setShowSubmitPopup(false);
    setMethodToCall(null);
    setPopupText('');

    disableAllEditors();
    handleChangeText('Saving...', false);
    setShowLoader(true);
    showSnackbar('Submitting task...');
    setTimeout(() => {
      markSubmsissionClosed(submission.id).then((_) => {
        queryClient.invalidateQueries(['notifications']);
        queryClient.invalidateQueries(['tasks']);
        queryClient.invalidateQueries(['assignments']);
        queryClient.invalidateQueries((queryKey) => {
          return queryKey.includes('class');
        });
        showSnackbar('Task completed...', window.location.href);
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

  const handlesaveAnswer = (serialNumber) => (contents) => {
    handleChangeText('Saving...', false);
    saveAnswer(submission.id, serialNumber, {
      answer: contents,
    }).then((_) => {
      handleChangeText('All changes saved', true);
    });
  };

  const reviewerSelectionChange = (visibleComment, serialNumber) => (range) => {
    if (range) {
      const from = range.index;
      const to = range.index + range.length;

      const matchingComments = visibleComment
        .filter((comment) => comment.questionSerialNumber === serialNumber)
        .filter(
          (comment) => comment.range.from <= from && comment.range.to >= to
        );
      if (matchingComments && matchingComments.length > 0) {
        const matchingComment = matchingComments[0];
        const div = document.getElementById('comment_' + matchingComment.id);
        if (div) {
          highlightComment(matchingComment.color, div);
        }
      } else {
        if (from !== to) {
          setNewCommentSerialNumber(serialNumber);
          setSelectedRange({
            from: from,
            to: to,
          });
          setShowNewComment(true);
        }
      }
    }
  };

  function highlightComment(color, div) {
    div.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
    setTimeout(() => {
      div.style.background = color ? color : '#FFFFFF';
      div.style.border = '1px solid #E5E5E5';
      div.style.boxShadow = '0px 4px 16px #7200e01a';
      div.style.scale = 1;
    }, 2000);
    div.style.background = '#F9F5FF';
    div.style.border = '1px solid #7200E0';
    div.style.boxShadow = '0px 4px 16px rgba(114, 0, 224, 0.2)';
    div.style.scale = 1.0003;
    setCommentHighlight(true);
  }

  const unhighlightComment = () => {
    if (comments.length > 0 && commentHighlight) {
      comments.map((comment) => {
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
    // get assignment by student name or other way
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
          <DropdownMenu
            menuItems={menuItems}
            showAvatar={true}
            selectedIndex={selectedItemIndex}
            defaultSearch={true}
          ></DropdownMenu>
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
          reviewer = 'your peer';
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

  function handleMarkingCriteriaLevelFeedback(
    questionSerialNumber,
    criteriaSerialNumber,
    selectedLevel
  ) {
    const markingCriteriaToUpdate =
      submission.assignment.questions[questionSerialNumber - 1].markingCriteria;
    markingCriteriaToUpdate.criterias[criteriaSerialNumber].selectedLevel =
      selectedLevel;
  }

  const handleStrengthsTargetsFeedback =
    (questionSerialNumber) => (index) => (value) => {
      const criteriaType = index === 2 ? 'target' : 'strength';
      const criteriaIndex = index === 2 ? 0 : index;
      setNewMarkingCriterias((prevState) => {
        const label = value.heading;
        let newState = cloneDeep(prevState);
        let path = `${questionSerialNumber}.${
          criteriaType === 'strength' ? 'selectedStrengths' : 'selectedTargets'
        }[${criteriaIndex}]`;
        newState = set(newState, path, { label, value });
        return newState;
      });
    };
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

  const methods = {
    createDebounceFunction,
    submissionStatusLabel,
    isTeacher,
    handleChangeText,
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
    handlesaveAnswer,
    createTasksDropDown,
    onSelectionChange,
    setStudentName,
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
    handleStrengthsTargetsFeedback,
    showSubmitPopuphandler,
    setUpdateExemplarComment,
    convertToCheckedState,
    handleOverAllFeedback,
    initialOverallFeedback,
    setInitialOverAllFeedback,
    
    updateOverAllFeedback,
  };

  const shortcuts = getShortcuts();

  return (
    <>
      {showSubmitPopup &&
        submitPopup(pageMode, hideSubmitPopup, popupText, submissionFunction)}

      <ReactiveRender
        mobile={
          <FeedbackTeacherMobile
            {...{
              newCommentSerialNumber,
              markingCriteriaFeedback,

              isTeacher,
              submissionStatusLabel,
              labelText,
              quillRefs,
              pageMode,
              smartAnnotations,
              newCommentFrameRef,
              methods,
              showNewComment,
              comments,
              studentName,
              students,
              submission,
              sharewithclassdialog,
              ...feedbacksFeedbackTeacherMobileData,
              MARKING_METHODOLOGY_TYPE,
            }}
          />
        }
        tablet={
          <FeedbackTeacherLaptop
            {...{
              newCommentSerialNumber,
              markingCriteriaFeedback,
              isTeacher,
              showLoader,
              submissionStatusLabel,
              labelText,
              quillRefs,
              pageMode,
              shortcuts,
              smartAnnotations,
              newCommentFrameRef,
              methods,
              showNewComment,
              comments,
              studentName,
              students,
              submission,
              sharewithclassdialog,
              ...feedbacksFeedbackTeacherLaptopData,
              MARKING_METHODOLOGY_TYPE,
              overallComments
            }}
          />
        }
        laptop={
          <>
            <FeedbackTeacherLaptop
              {...{
                isTeacher,
                markingCriteriaFeedback,
                newCommentSerialNumber,
                showLoader,
                submissionStatusLabel,
                labelText,
                quillRefs,
                pageMode,
                shortcuts,
                smartAnnotations,
                newCommentFrameRef,
                methods,
                showNewComment,
                comments,
                studentName,
                students,
                submission,
                sharewithclassdialog,
                ...feedbacksFeedbackTeacherLaptopData,
                MARKING_METHODOLOGY_TYPE,
                overallComments
              }}
            />
          </>
        }
        desktop={
          <FeedbackTeacherLaptop
            {...{
              isTeacher,
              markingCriteriaFeedback,
              newCommentSerialNumber,
              showLoader,
              submissionStatusLabel,
              labelText,
              smartAnnotations,
              quillRefs,
              pageMode,
              shortcuts,
              newCommentFrameRef,
              methods,
              showNewComment,
              comments,
              studentName,
              students,
              submission,
              sharewithclassdialog,
              ...feedbacksFeedbackTeacherLaptopData,
              MARKING_METHODOLOGY_TYPE,
              overallComments
            }}
          />
        }
      />
    </>
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
