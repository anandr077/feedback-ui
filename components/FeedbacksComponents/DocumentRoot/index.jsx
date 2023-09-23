import jsPDF from 'jspdf';
import { filter, flatMap, includes, map } from 'lodash';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { formattedDate } from '../../../dates';
import GeneralPopup from '../../GeneralPopup';
import Document from '../Document';

import {
  addFeedback,
  deleteFeedback,
  getSubmissionById,
  getUserId,
  getUserName,
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
import Loader from '../../Loader';
import ReactiveRender, { isSmallScreen } from '../../ReactiveRender';
import SnackbarContext from '../../SnackbarContext';
import FeedbackTeacherMobile from '../FeedbackTeacherMobile';
import { getComments, getPortfolioPageMode } from './functions';
import {
  feedbacksFeedbackTeacherLaptopData,
  feedbacksFeedbackTeacherMobileData,
} from './style';
import { portfolioHeaderProps } from '../../../utils/headerProps';
import Header from '../../Header';
import HeaderSmall from '../../HeaderSmall';

export default function DocumentRoot({}) {
  const quillRefs = useRef([]);
  const [labelText, setLabelText] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const { showSnackbar } = React.useContext(SnackbarContext);
  const newCommentFrameRef = useRef(null);
  const [submission, setSubmission] = useState(null);
  const [smartAnnotations, setSmartAnnotations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [studentName, setStudentName] = useState(null);
  const [comments, setComments] = useState([]);
  const [showNewComment, setShowNewComment] = useState(false);
  const [selectedRange, setSelectedRange] = useState(null);
  const [newCommentSerialNumber, setNewCommentSerialNumber] = useState(0);
  const [newCommentValue, setNewCommentValue] = useState('');
  const [commentHighlight, setCommentHighlight] = useState(false);
  const [editingComment, setEditingComment] = useState(false);
  const [showSubmitPopup, setShowSubmitPopup] = React.useState(false);
  const [methodTocall, setMethodToCall] = React.useState(null);
  const [popupText, setPopupText] = React.useState(null);
   const [smallScreenView, setSmallScreenView] = React.useState(
     isSmallScreen()
   );

  useEffect(() => {
    Promise.all([getSubmissionById(id), getComments(id), getSmartAnnotations()])
      .then(([submissionsResult, commentsResult, smartAnnotationResult]) => {
        setSubmission(submissionsResult);
        const allComments = commentsResult.map((c) => {
          return { ...c };
        });
        setComments(allComments);
        console.log('smartAnnotationResult', smartAnnotationResult);
        setSmartAnnotations(smartAnnotationResult);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return (
      <>
        {smallScreenView ? (
          <HeaderSmall headerProps={portfolioHeaderProps} />
        ) : (
          <Header headerProps={portfolioHeaderProps} />
        )}
        <Loader />
      </>
    );
  }

  const pageMode = getPortfolioPageMode(getUserId(), submission);

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
    }).then((response) => {
      if (response) {
        setComments([...comments, response]);
        setNewCommentValue('');
      }
    });
    setShowNewComment(false);
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

  const handleDebounce = (answer) => (contents) => {
    handleChangeText('Saving...', false);
    saveAnswer(submission.id, answer.serialNumber, {
      answer: contents,
    }).then((_) => {
      return updateCommentsRange(answer);
    });
  };

  function updateCommentsRange(answer) {
    const quill = quillRefs.current[answer.serialNumber - 1];
    const highlightsWithCommentsData = quill.getAllHighlightsWithComments();
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

    // Use Array.prototype.map to create an array of commentIds
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
        setComments(cmts);
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

  function handleReplyComment(replyComment, commentId, serialNumber) {
    const replyCommentObject = {
      questionSerialNumber: serialNumber,
      comment: replyComment,
      range: { from: 0, to: 0 },
      type: 'COMMENT',
      reviewerId: getUserId(),
      reviewerName: getUserName(),
      replies: [],
    };
    comments.map((comment) => {
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

    setNewCommentValue('');
    setShowNewComment(false);
    setExemplerComment('');
    setShowShareWithClass(false);
  }

  function updateParentComment(comment, commentId) {
    comments.map((c) => {
      if (c.id === commentId) {
        const commentToUpdate = { ...c, comment: comment };
        updateFeedback(submission.id, commentId, {
          questionSerialNumber: commentToUpdate.questionSerialNumber,
          feedback: commentToUpdate.comment,
          range: commentToUpdate.range,
          type: commentToUpdate.type,
          color: commentToUpdate.color,
          focusAreaId: commentToUpdate.focusAreaId,
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

    setNewCommentValue('');
    setShowNewComment(false);
    setExemplerComment('');
    setShowShareWithClass(false);
  }

  function updateChildComment(commentId, replyCommentIndex, comment) {
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
    comments.map((c) => {
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

  function handleSubmissionReviewed() {
    setShowSubmitPopup(false);
    setMethodToCall(null);
    setPopupText('');
    submitReview();
  }

  function submitReview() {
    markSubmsissionReviewed(submission.id).then((_) => {
      showSnackbar('Task reviewed...', window.location.href);
      window.location.href = '/#';
    });
  }

  function handleRequestResubmission() {
    setShowSubmitPopup(false);
    setMethodToCall(null);
    setPopupText('');

    markSubmissionRequestSubmission(submission.id).then((_) => {
      showSnackbar('Resubmission requested...', window.location.href);
      window.location.href = '/#';
    });
  }

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
        showSnackbar('Task submitted...', window.location.href);
        window.location.href = '/#';
        setShowLoader(false);
      });
    }, 4000);
  };
  function disableAllEditors() {
    submission.assignment.questions.forEach((question) => {
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

  const downloadPDF = () => {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      margin: {
        top: 0,
        bottom: 10,
        left: 0,
        right: 0,
      },
    });

    const totalpdf = document.createElement('div');

    const title = document.createElement('div');
    title.style.fontSize = '40px';
    title.style.fontWeight = 'bold';
    title.style.textAlign = 'center';
    title.style.marginBottom = '50px';
    title.textContent = submission.assignment.title;
    totalpdf.appendChild(title);

    const assignmentQuestions = new Array(
      submission.assignment.questions.length + 1
    );
    const assignmentAnswers = new Array(
      submission.assignment.questions.length + 1
    );
    submission.assignment.questions.map((question) => {
      assignmentQuestions[question.serialNumber] = question.question;
      if (question.type === 'MCQ') {
        const options = document.createElement('div');
        question.options.map((option) => {
          const optiondiv = document.createElement('div');
          optiondiv.style.fontSize = option.isCorrect ? '25px' : '20px';
          optiondiv.style.fontWeight = option.isCorrect ? 'bold' : 'normal';
          optiondiv.style.color = option.isCorrect ? 'green' : 'black';

          optiondiv.style.marginBottom = '10px';
          optiondiv.textContent = option.option;
          options.appendChild(optiondiv);
        });
        assignmentAnswers[question.serialNumber] = options;
      }
    });

    submission.answers.map((answer) => {
      const parser = new DOMParser();
      const htmlContent = answer.answer.answer;
      const parsedContent = parser.parseFromString(htmlContent, 'text/html')
        .body.textContent;
      if (answer.answer.answer) {
        assignmentAnswers[answer.serialNumber] = parsedContent;
      }
    });
    for (let i = 1; i < assignmentQuestions.length; i++) {
      const question = document.createElement('div');
      question.style.fontSize = '25px';
      question.style.fontWeight = 'bold';
      question.style.marginBottom = '10px';
      question.textContent = i + '. ' + assignmentQuestions[i];
      totalpdf.appendChild(question);

      const answer = document.createElement('div');
      // answer.style.border = "1px solid black";
      answer.style.padding = '10px';
      answer.style.fontSize = '25px';
      answer.style.marginBottom = '40px';
      if (assignmentAnswers[i] instanceof HTMLElement) {
        answer.appendChild(assignmentAnswers[i]);
      } else {
        answer.textContent = assignmentAnswers[i];
      }
      totalpdf.appendChild(answer);
    }

    const options = {
      callback: function (doc) {
        doc.save(`${submission.assignment.title}.pdf`);
      },
      x: 0,
      y: 0,
      width: 170,
      windowWidth: 1180,
      margin: 20, // Set a single margin value for all sides
      autoSize: true, // Automatically adjust content to fit within the available space
    };

    doc.html(totalpdf, options);
  };

  function submissionStatusLabel() {
    return getStatusMessage(
      submission,
      false ? 'TEACHER' : getUserId() === submission.studentId ? 'SELF' : 'PEER'
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
    handleChangeText,
    handleDeleteComment,
    handleAddComment,
    setShowNewComment,
    hideNewCommentDiv,
    handleEditorMounted,
    handleKeyPress,
    handleSubmissionReviewed,
    handleSaveSubmissionForReview,
    handleSubmissionClosed,
    handleCommentSelected,
    handlesaveAnswer,
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
    showSubmitPopuphandler,
  };

  const shortcuts = getShortcuts();

  return (
    <>
      {showSubmitPopup && (
        <GeneralPopup
          hidePopup={hideSubmitPopup}
          title="Submit Task"
          textContent={popupText}
          buttonText="Acknowledge and Submit"
          confirmButtonAction={submissionFunction()}
          warningMessage="Plagiarism undermines the learing process, hinders personal growth, and goes against the principles of honesty and fairness."
          confirmationMessage="By submitting your work, you are acknowledging that it is entirely your own and has not been plagiarised in any form."
        />
      )}

      <ReactiveRender
        mobile={
          <Document
            {...{
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
              submission,
              setSubmission,
              // ...feedbacksFeedbackTeacherLaptopData,
              headerProps: portfolioHeaderProps,
            }}
          />
        }
        tablet={
          <Document
            {...{
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
              submission,
              setSubmission,
              // ...feedbacksFeedbackTeacherLaptopData,
              headerProps: portfolioHeaderProps,
            }}
          />
        }
        laptop={
          <>
            <Document
              {...{
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
                submission,
                setSubmission,
                // ...feedbacksFeedbackTeacherLaptopData,
                headerProps: portfolioHeaderProps,
              }}
            />
          </>
        }
        desktop={
          <Document
            {...{
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
              submission,
              setSubmission,
              headerProps: portfolioHeaderProps,
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
