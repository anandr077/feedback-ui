import jsPDF from 'jspdf';
import { filter, flatMap, includes, map } from 'lodash';
import { reducer, initailState } from '../../PortfolioPage/portfolioReducer';
import { getPortfolio, getClasses, docsMoveToFolder, getOverComments, addDocumentToPortfolio, addDocumentToPortfolioWithDetails } from '../../../service';
import { getPortfolio, getClasses, docsMoveToFolder, getOverComments, askJeddAI } from '../../../service';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import React, { useEffect, useRef, useState, useReducer } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
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
  getStudentsForClass,
  getTeachersForClass,
  fetchSubmissionData,
} from '../../../service';
import {
  getShortcuts,
  getSmartAnnotations,
  saveAnswer,
} from '../../../service.js';
import { documentHeaderProps } from '../../../utils/headerProps';
import Loader from '../../Loader';
import ReactiveRender, { isMobileView } from '../../ReactiveRender';
import SnackbarContext from '../../SnackbarContext';
import { getComments, getPortfolioPageMode } from './functions';
import _ from 'lodash';

export default function DocumentRoot({}) {
  const queryClient = useQueryClient();

  const quillRefs = useRef([]);
  const [labelText, setLabelText] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const { showSnackbar } = React.useContext(SnackbarContext);
  const newCommentFrameRef = useRef(null);
  const [submission, setSubmission] = useState(null);
  const [portfolio, setPortfolio] = useState(null);
  const [smartAnnotations, setSmartAnnotations] = useState([]);
  const [isSubmissionLoading, setIsSubmissionLoading] = useState(true);
  const [isClassesLoading, setIsClassesLoading] = useState(true);
  let { id } = useParams();
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
  const [allClasses, setAllClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [feedbackClasses, setFeedbackClasses] = useState([]);
  const [hasProcessedData, setHasProcessedData] = useState(false);
  const [pageMode, setPageMode] = useState(null);
  const [shouldFetchPortfolio, setShouldFetchPortfolio] = useState(false);
  const [overallComments, setOverallComments] = useState([]);
  const [initialOverallFeedback, setInitialOverAllFeedback] = useState({
    feedbackText: 'Add General Feedback...',
    editFeedback: false,
  });
  // Fetch functions
  const fetchSubmissionData = async () => {
    if (id === undefined || id === null) {
      alert("adding")
      const doc = await addDocumentToPortfolioWithDetails({
        title:"New draft",
        subject:"English"
      })
      alert("added" + doc.id)
      window.location.href = `#documents/${doc.id}`;
      id = doc.id
    }
    const [submissionsResult, commentsResult, smartAnnotationResult, overAllCommentsResult] =
      await Promise.all([
        getSubmissionById(id),
        getComments(id),
        getSmartAnnotations(),
        getOverComments(id),
      ]);

    setSubmission(submissionsResult);
    setComments(commentsResult);
    setSmartAnnotations(smartAnnotationResult);
    setIsSubmissionLoading(false);
    setOverallComments(overAllCommentsResult);

    return submissionsResult; // Return the fetched submission data for further use.
  };

  const fetchDetails = async (submission, classIds) => {
    const studentsPromises = classIds.map((id) => getStudentsForClass(id));
    const teachersPromises = classIds.map((id) => getTeachersForClass(id));

    const studentsArrays = await Promise.all(studentsPromises);
    const teachersArrays = await Promise.all(teachersPromises);

    const allStudents = _.flatten(studentsArrays);
    const allTeachers = _.flatten(teachersArrays);

    const uniqueStudents = _.uniqBy(allStudents, 'id').filter(
      (item) => item.id !== submission.studentId
    );
    const uniqueTeachers = _.uniqBy(allTeachers, 'id');

    setStudents(uniqueStudents.map((item) => ({ ...item, title: item.name })));
    setTeachers(uniqueTeachers.map((item) => ({ ...item, title: item.name })));
    console.log('teachers', teachers);
  };

  const fetchClassesAndDetails = async (submission) => {
    const classes = await getClasses();

    setAllClasses(classes);
    const classIds = classes.map((c) => c.id);
    await fetchDetails(submission, classIds);
    setIsClassesLoading(false);
  };

  useEffect(() => {
    fetchSubmissionData().then((fetchedSubmission) => {
      if (fetchedSubmission) {
        fetchClassesAndDetails(fetchedSubmission);
        setSubmission(fetchedSubmission);
      }
    });
  }, [id]);
  useEffect(() => {
    if (submission) {
      const mode = getPortfolioPageMode(getUserId(), submission);
      setPageMode(mode);
    }
  }, [submission]);
  useEffect(() => {
    if (submission) {
      if (pageMode === 'REVISE' || pageMode === 'DRAFT') {
        queryClient.prefetchQuery(['portfolio'], getPortfolio);
      }
    }
  }, [submission]);
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['portfolio'],
    queryFn: getPortfolio,
    staleTime: 3600000,
    enabled: loadPortfolio(),
  });

  useEffect(() => {
    if (data && !hasProcessedData) {
      setPortfolio(data);
      setHasProcessedData(true);
    }
  }, [data, queryClient]);

  console.log(
    'isLoading',
    data,
    isLoading,
    isSubmissionLoading,
    isClassesLoading
  );
  if (
    (loadPortfolio() && isLoading) ||
    isSubmissionLoading ||
    isClassesLoading
  ) {
    return <Loader />;
  }

  // queryClient.removeQueries(['portfolio'])

  const folders = portfolio?.files.map((folder) => {
    return { id: folder.id, title: folder.title, classId: folder.classId };
  });

  const headerProps = documentHeaderProps(
    pageMode === 'DRAFT' || pageMode === 'REVISE'
  );
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

  function loadPortfolio() {
    return submission ? submission.studentId === getUserId() : false;
  }

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

  const handleDebounce = (answer) => (contents, highlights) => {
    handleChangeText('Saving...', false);
    saveAnswer(submission.id, answer.serialNumber, {
      answer: contents,
    }).then((updatedSubmission) => {
      setSubmission(updatedSubmission)
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
          ...commentToUpdate,
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

  const addOverallFeedback = (questionSerialNumber, comment, audio) => {
    addFeedback(submission.id, {
      questionSerialNumber: questionSerialNumber,
      feedback: comment,
      range: {
        from: 0,
        to: 0,
      },
      audio: audio,
      type: 'OVERALL_COMMENT',
    }).then((response) => {
      if (response) {
        console.log('the overall Feedback is', response);
        setOverallComments([...overallComments, response]);
      }
    });
  };
  const jeddAI = () => {
    console.log("quillRefs", quillRefs)
    const q=  quillRefs.current[0]
    console.log("q", q.getText())
    askJeddAI(submission.id, q.getText()).then((response) => {
      console.log("response done", response)
    })
    
  }
  const updateOverAllFeedback = (feedbackId, feedbackText, audio) => {
    const feedbackToUpdate = overallComments.find(
      (feedback) => feedback.id === feedbackId
    );
    if (feedbackToUpdate === null || feedbackToUpdate === undefined) {
      return;
    }
    console.log('feedbackToUpdate ', feedbackToUpdate);

    updateFeedback(submission.id, feedbackId, {
      ...feedbackToUpdate,
      feedback: feedbackText,
      audio: audio,
    }).then((response) => {
      setOverallComments((o) =>
        o.map((feedback) => {
          return feedback.id === feedbackId
            ? { ...feedback, comment: feedbackText, audio: audio }
            : feedback;
        })
      );
    });
  };

  function handleSubmissionReviewed() {
    setShowSubmitPopup(false);
    setMethodToCall(null);
    setPopupText('');
    submitReview();
  }

  function submitReview() {
    markSubmsissionReviewed(submission.id).then((_) => {
      clearQueries();
      showSnackbar('Task reviewed...', window.location.href);
      window.location.href = '/#';
    });
  }

  function handleRequestResubmission() {
    setShowSubmitPopup(false);
    setMethodToCall(null);
    setPopupText('');

    markSubmissionRequestSubmission(submission.id).then((_) => {
      clearQueries();
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
        clearQueries();
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
        clearQueries();
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
  const onSelectionChange =
    pageMode === 'REVIEW' ? reviewerSelectionChange : (a, b) => () => {};

  const hideSubmitPopup = () => {
    setShowSubmitPopup(false);
  };
  const showSubmitPopuphandler = (method) => {
    setShowSubmitPopup(true);
    setMethodToCall(method);
    if (method === 'SubmitForReview') {
      setPopupText('Are you sure you want to submit this draft for review?');
    } else if (method === 'SubmitReview') {
      setPopupText('Are you sure you want to submit feedback for this draft?');
    }
  };
  function submissionStatusLabel() {
    if (pageMode === 'DRAFT') {
      return '';
    }
    if (pageMode === 'REVIEW') {
      return 'Feedback requested by ' + getFeedbackRequestedBy();
    }
    return '';
  }
  function getFeedbackRequestedBy() {
    if (submission.feedbackRequestType === 'P2P') {
      return 'your peer.';
    }
    if (submission.feedbackRequestType === null) {
      return 'your peer.';
    }
    if (submission.feedbackRequestType === undefined) {
      return 'your peer.';
    }
    return submission.studentName;
  }

  function handleShortcutAddCommentSmartAnnotaion(commentText) {
    addFeedback(submission.id, {
      questionSerialNumber: newCommentSerialNumber,
      feedback: commentText,
      range: selectedRange,
      type: 'SMART_ANNOTATION',
      replies: [],
    }).then((response) => {
      if (response) {
        setComments([...comments, response]);
        setNewCommentValue('');
      }
    });
    setShowNewComment(false);
  }
  const updateDocumentClass = (item, allFolders) => {
    if (item.id === submission.folderId) {
      return;
    }
    docsMoveToFolder(submission.id, item.classId, item.id).then((res) => {
      if (res) {
        const classObj = allFolders.find((item) => item.id === res.folderId);
        showSnackbar('Moved to ' + classObj.title);
        queryClient.invalidateQueries(['portfolio']);
        getSubmissionById(submission.id).then((s) => {
          setSubmission(s);
        });
      }
    });
  };

  const clearQueries = () => {
    queryClient.invalidateQueries(['notifications']);
    queryClient.invalidateQueries(['tasks']);
    queryClient.invalidateQueries(['assignments']);
    queryClient.invalidateQueries(['document-reviews']);
  };

  const methods = {
    updateDocumentClass,
    handleShortcutAddCommentSmartAnnotaion,
    submissionStatusLabel,
    createDebounceFunction,
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
    handleResolvedComment,
    handleReplyComment,
    handleDeleteReplyComment,
    handleEditingComment,
    updateParentComment,
    updateChildComment,
    showSubmitPopuphandler,
    addOverallFeedback,
    initialOverallFeedback,
    setInitialOverAllFeedback,

    updateOverAllFeedback,
    jeddAI
  };

  const shortcuts = getShortcuts();

  return (
    <>
      {showSubmitPopup && (
        <GeneralPopup
          hidePopup={hideSubmitPopup}
          title="Submit task"
          textContent={popupText}
          buttonText="Submit"
          confirmButtonAction={submissionFunction()}
        />
      )}

      <Document
          {...{
            newCommentSerialNumber,
            showLoader,
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
            headerProps: headerProps,
            allFolders: folders,
            allClasses,
            students,
            teachers,
            overallComments
          }}
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
