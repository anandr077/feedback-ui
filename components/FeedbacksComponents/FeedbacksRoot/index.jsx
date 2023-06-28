import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { filter, flatMap, includes, map, uniq } from "lodash";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { formattedDate } from "../../../dates";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SubmitCommentFrameRoot from "../../SubmitCommentFrameRoot";
import styled from "styled-components";
import {
  addFeedback,
  updateFeedback,
  resolveFeedback,
  deleteFeedback,
  getSubmissionById,
  getSubmissionsByAssignmentId,
  getUserId,
  getUserRole,
  markSubmissionReviewed as markSubmsissionReviewed,
  markSubmsissionClosed,
  submitAssignment,
  updateFeedbackRange,
  getUserName,
} from "../../../service";
import { getShortcuts, saveAnswer } from "../../../service.js";
import {
  assignmentsHeaderProps,
  taskHeaderProps,
} from "../../../utils/headerProps.js";
import ImageDropdownMenu from "../../ImageDropdownMenu";
import Loader from "../../Loader";
import ReactiveRender from "../../ReactiveRender";
import FeedbackTeacherLaptop from "../FeedbackTeacherLaptop";
import FeedbackTeacherMobile from "../FeedbackTeacherMobile";
import { extractStudents, getComments, getPageMode } from "./functions";
import { TextField } from "@mui/material";
import { IbmplexsansNormalShark20px } from "../../../styledMixins";
import SnackbarContext from "../../SnackbarContext";

export default function FeedbacksRoot({ isAssignmentPage }) {
  const quillRefs = useRef([]);
  const [labelText, setLabelText] = useState("");
  const [showShareWithClass, setShowShareWithClass] = useState(false);
  const [exemplarComment, setExemplerComment] = useState("");
  const [isValidComment, setIsValidComment] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const { showSnackbar } = React.useContext(SnackbarContext);

  const newCommentFrameRef = useRef(null);

  const [submission, setSubmission] = useState(null);
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [studentName, setStudentName] = useState(null);
  const [comments, setComments] = useState([]);
  const [showNewComment, setShowNewComment] = useState(false);
  const [selectedRange, setSelectedRange] = useState(null);
  const [selectedRangeFormat, setSelectedRangeFormat] = useState(null);
  const [newCommentSerialNumber, setNewCommentSerialNumber] = useState(0);
  const [newCommentValue, setNewCommentValue] = useState("");
  const [nextUrl, setNextUrl] = useState("");
  const [commentHighlight, setCommentHighlight] = useState(false);

  const isTeacher = getUserRole() === "TEACHER";

  useEffect(() => {
    Promise.all([getSubmissionById(id), getComments(id)])
      .then(([submissionsResult, commentsResult]) => {
        setSubmission(submissionsResult);
        const allComments = commentsResult.map((c) => {
          return { ...c };
        });
        setComments(allComments);
      })
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
          const allExceptCurrent = allSubmissions.filter(
            (r) => r.id != submission.id
          );
          const nextUrl = allExceptCurrent[0]
            ? "#submissions/" + allExceptCurrent[0]?.id
            : "/";
          // console.log("allSubmissions " + JSON.stringify(allSubmissions));
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
    return <Loader />;
  }

  const pageMode = getPageMode(isTeacher, getUserId(), submission);

  const handleChangeText = (change, allSaved) => {
    if (document.getElementById("statusLabelIcon")) {
      if (allSaved) {
        document.getElementById("statusLabelIcon").style.backgroundImage =
          'url("/icons/saved.png")';
      } else {
        document.getElementById("statusLabelIcon").style.backgroundImage =
          'url("/icons/saving.png")';
      }
      document.getElementById("statusLabelDiv").innerHTML = change;
    }
  };

  const handleEditorMounted = (editor, index) => {
    // alert("handleEditorMounted" + JSON.stringify(editor) + " " + index);
    quillRefs.current[index] = editor;
  };

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleAddComment();
    }
  }
  function handleAddComment() {
    quillRefs.current[newCommentSerialNumber - 1].applyBackgroundFormat(
      selectedRange,
      selectedRangeFormat
    );

    if (!document.getElementById("newCommentInput").value) return;
    addFeedback(submission.id, {
      questionSerialNumber: newCommentSerialNumber,
      feedback: document.getElementById("newCommentInput").value,
      range: selectedRange,
      type: "COMMENT",
      replies: [],
    }).then((response) => {
      if (response) {
        setComments([...comments, response]);
        setNewCommentValue("");
      }
    });
    setShowNewComment(false);
  }

  function handleShortcutAddComment(commentText) {
    quillRefs.current[newCommentSerialNumber - 1].applyBackgroundFormat(
      selectedRange,
      selectedRangeFormat
    );

    addFeedback(submission.id, {
      questionSerialNumber: newCommentSerialNumber,
      feedback: commentText,
      range: selectedRange,
      type: "COMMENT",
      replies: [],
    }).then((response) => {
      if (response) {
        setComments([...comments, response]);
        setNewCommentValue("");
      }
    });
    setShowNewComment(false);
  }
  function handleFocusAreaComment(focusArea) {
    quillRefs.current[newCommentSerialNumber - 1].applyBackgroundFormat(
      selectedRange,
      selectedRangeFormat
    );

    addFeedback(submission.id, {
      questionSerialNumber: newCommentSerialNumber,
      feedback: focusArea.title,
      range: selectedRange,
      type: "FOCUS_AREA",
      color: focusArea.color,
      focusAreaId: focusArea.id,
      replies: [],
    }).then((response) => {
      if (response) {
        setComments([...comments, response]);
        setNewCommentValue("");
      }
    });
    setShowNewComment(false);
  }

  const addExemplerComment = () => {
    if (exemplarComment === "") {
      setIsValidComment(false);
      return;
    }
    addFeedback(submission.id, {
      questionSerialNumber: newCommentSerialNumber,
      feedback: exemplarComment,
      range: selectedRange,
      type: "MODEL_RESPONSE",
      replies: [],
    }).then((response) => {
      if (response) {
        setComments([...comments, response]);
        setNewCommentValue("");
      }
    });
    setShowNewComment(false);
    setExemplerComment("");
    setShowShareWithClass(false);
  };
  const handleInputChange = (event) => {
    const value = event.target.value;
    setExemplerComment(value);
    setIsValidComment(value !== "");
  };
  const sharewithclassdialog = (
    <Dialog
      onClose={() => {
        setShowShareWithClass(false);
        setShowNewComment(false);
        setExemplerComment("");
      }}
      open={showShareWithClass}
    >
      <Box padding={4}>
        <StyledTextField
          multiline
          label="Add comment"
          variant="outlined"
          value={exemplarComment}
          onChange={handleInputChange}
          error={!isValidComment}
          helperText={!isValidComment ? "Please enter your comment here" : ""}
        />
        <DialogActions>
          <SubmitCommentFrameRoot
            submitButtonOnClick={addExemplerComment}
            cancelButtonOnClick={() => {
              setShowShareWithClass(false);
              setShowNewComment(false);
              setExemplerComment("");
            }}
          />
        </DialogActions>
      </Box>
    </Dialog>
  );

  function handleShareWithClass() {
    quillRefs.current[newCommentSerialNumber - 1].applyBackgroundFormat(
      selectedRange,
      selectedRangeFormat
    );
    setShowShareWithClass(true);
  }
  const createDebounceFunction = (answer) => {
    if (pageMode === "DRAFT" || pageMode === "REVISE") {
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
    handleChangeText("Saving...", false);
    saveAnswer(submission.id, answer.serialNumber, {
      answer: contents,
    }).then((_) => {
      if (pageMode === "DRAFT") {
        handleChangeText("All changes saved", true);
      } else {
        const quill = quillRefs.current[answer.serialNumber - 1];
        const highlightsWithCommentsData = quill.getAllHighlightsWithComments();

        const transformedData = flatMap(
          Object.entries(highlightsWithCommentsData),
          ([commentId, highlights]) => {
            return highlights.map((highlight) => {
              const { content, range } = highlight;
              return { commentId, range };
            });
          }
        );

        // Use Array.prototype.map to create an array of commentIds
        const commentIdsArray = transformedData.map(
          ({ commentId }) => commentId
        );

        // Create a Set from the commentIdsArray
        const transformedCommentIds = uniq(commentIdsArray);

        const commentsForAnswer = comments.filter(
          (comment) => comment.questionSerialNumber === answer.serialNumber
        );
        const missingComments = filter(
          commentsForAnswer,
          (comment) => !includes(commentIdsArray, comment.id)
        );
        const missingCommentsWithZeroRange = map(
          missingComments,
          (comment) => ({
            commentId: comment.id,
            range: { from: 0, to: 0 },
          })
        );

        const finalData = transformedData.concat(missingCommentsWithZeroRange);
        const promises = finalData.map(({ commentId, range }) => {
          return updateFeedbackRange(submission.id, commentId, range);
        });

        Promise.all(promises).then((results) => {
          getComments(submission).then((cmts) => {
            setComments(cmts);
            handleChangeText("All changes saved", true);
          });
        });
      }
    });
  };

  function handleDeleteComment(commentId) {
    deleteFeedback(submission.id, commentId).then((response) => {
      setComments(comments.filter((c) => c.id != commentId));
    });
  }

  function handleResolvedComment(commentId) {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        resolveFeedback(commentId);
        return { ...comment, status: "RESOLVED" };
      }
      return comment;
    });
    setComments(updatedComments);
  }

  function handleReplyComment(replyComment, commentId, serialNumber) {
    const replyCommentObject = {
      questionSerialNumber: serialNumber,
      comment: replyComment,
      range: {from: 0, to: 0},
      type: "COMMENT",
      reviewerId:getUserId(),
      reviewerName:getUserName(),
      replies:[]
    };
    const addReplyComments = comments.map((comment) => {
      if (comment.id === commentId) {
        const commentToUpdate= 
        comment.replies === undefined ? 
        { ...comment, replies: [replyCommentObject]} :
        { ...comment, replies: [...comment.replies,replyCommentObject]}
  
            updateFeedback(submission.id, commentId, {
              questionSerialNumber: commentToUpdate.questionSerialNumber,
              feedback: commentToUpdate.comment,
              range: commentToUpdate.range,
              type: commentToUpdate.type,
              replies: commentToUpdate.replies,
              reviewerId: commentToUpdate.reviewerId,
            })
            .then((response) => {
            if (response) {
              return commentToUpdate;
            }
          });
      }
      return comment;
    });

    setComments(addReplyComments);
    setNewCommentValue("");
    setShowNewComment(false);
    setExemplerComment("");
    setShowShareWithClass(false);
    window.location.reload();
  }

  function handleSubmissionReviewed() {
    markSubmsissionReviewed(submission.id).then((_) => {
      showSnackbar("Task reviewed...", window.location.href);
      if (isTeacher) {
        window.location.href = nextUrl === "/" ? "/#" : nextUrl;
      } else {
        window.location.href = "/#";
      }
    });
  }
  const handleSaveSubmissionForReview = () => {
    disableAllEditors();
    handleChangeText("Saving...", false);
    setShowLoader(true);
    showSnackbar("Submitting task...");

    setTimeout(() => {
      submitAssignment(submission.id).then((_) => {
        showSnackbar("Task submitted...", window.location.href);
        window.location.href = "/#";
        setShowLoader(false);
      });
    }, 4000);
  };
  function disableAllEditors() {
    submission.assignment.questions
      .filter((question) => question.type === "TEXT")
      .forEach((question) => {
        // alert(JSON.stringify(question))
        const quill = quillRefs.current[question.serialNumber - 1];
        // alert(JSON.stringify(quillRefs.current))
        quill.disable();
      });
  }

  function handleSubmissionClosed() {
    disableAllEditors();
    handleChangeText("Saving...", false);
    setShowLoader(true);
    showSnackbar("Submitting task...");
    setTimeout(() => {
      markSubmsissionClosed(submission.id).then((_) => {
        showSnackbar("Task completed...", window.location.href);
        window.location.href = "/#";
        setShowLoader(false);
      });
    }, 4000);
  }

  function handleCommentSelected(comment) {
    if (comment.range) {
      const range = {
        index: comment.range.from,
        length: comment.range.to - comment.range.from,
      };
      const quill = quillRefs.current[comment.questionSerialNumber - 1];

      quill.selectRange(range);
      quill.focus();
      quill.scrollToHighlight(comment.id);
      // div.scrollIntoView({
      //   behavior: "smooth",
      //   block: "center",
      //   inline: "center",
      // });
    } else {
    }
  }

  const handlesaveAnswer = (serialNumber) => (contents) => {
    handleChangeText("Saving...", false);
    saveAnswer(submission.id, serialNumber, {
      answer: contents,
    }).then((_) => {
      handleChangeText("All changes saved", true);
    });
  };

  const reviewerSelectionChange = (serialNumber) => (range) => {
    if (range) {
      const from = range.index;
      const to = range.index + range.length;

      const matchingComments = comments
        .filter((comment) => comment.questionSerialNumber === serialNumber)
        .filter(
          (comment) => comment.range.from <= from && comment.range.to >= to
        );
      if (matchingComments && matchingComments.length > 0) {
        const matchingComment = matchingComments[0];
        const div = document.getElementById("comment_" + matchingComment.id);
        highlightComment(div);
      } else {
        if (from !== to) {
          setNewCommentSerialNumber(serialNumber);
          setSelectedRange({
            from: from,
            to: to,
          });
          const delta =
            quillRefs.current[serialNumber - 1].setLostFocusColor(range);
          setSelectedRangeFormat(delta);

          // newCommentFrameRef.current?.focus();

          setShowNewComment(true);
        }
      }
    }
  };

  function highlightComment(div) {
    div.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    setTimeout(() => {
      div.style.background = "#FFFFFF";
      div.style.border = "1px solid #E5E5E5";
      div.style.boxShadow = "0px 4px 16px #7200e01a";
      div.style.scale = 1;
    }, 2000);
    div.style.background = "#F9F5FF";
    div.style.border = "1px solid #7200E0";
    div.style.boxShadow = "0px 4px 16px rgba(114, 0, 224, 0.2)";
    div.style.scale = 1.0003;
    setCommentHighlight(true);
  }

  const unhighlightComment = () => {
    if (comments.length > 0 && commentHighlight) {
      comments.map((comment) => {
        const div = document.getElementById("comment_" + comment.id);
        div.style.background = "#FFFFFF";
        div.style.border = "1px solid #E5E5E5";
        div.style.boxShadow = "0px 4px 16px #7200e01a";
        div.style.scale = 1;
      });
      setCommentHighlight(false);
    }
  };

  const noopSelectionChange = (serialNumber) => (range) => {};

  const hideNewCommentDiv = () => {
    quillRefs.current[newCommentSerialNumber - 1].applyBackgroundFormat(
      selectedRange,
      selectedRangeFormat
    );

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
      console.log("menuItems", JSON.stringify(menuItems));
      return (
        <ImageDropdownMenu
          menuItems={menuItems}
          showAvatar={true}
          selectedIndex={selectedItemIndex}
        ></ImageDropdownMenu>
      );
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a4",
      margin: {
        top: 0,
        bottom: 10,
        left: 0,
        right: 0,
      },
    });

    const totalpdf = document.createElement("div");

    const title = document.createElement("div");
    title.style.fontSize = "40px";
    title.style.fontWeight = "bold";
    title.style.textAlign = "center";
    title.style.marginBottom = "50px";
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
      if (question.type === "MCQ") {
        const options = document.createElement("div");
        question.options.map((option) => {
          const optiondiv = document.createElement("div");
          optiondiv.style.fontSize = option.isCorrect ? "25px" : "20px";
          optiondiv.style.fontWeight = option.isCorrect ? "bold" : "normal";
          optiondiv.style.color = option.isCorrect ? "green" : "black";

          optiondiv.style.marginBottom = "10px";
          optiondiv.textContent = option.option;
          options.appendChild(optiondiv);
        });
        assignmentAnswers[question.serialNumber] = options;
      }
    });

    submission.answers.map((answer) => {
      const parser = new DOMParser();
      const htmlContent = answer.answer.answer;
      const parsedContent = parser.parseFromString(htmlContent, "text/html")
        .body.textContent;
      if (answer.answer.answer) {
        assignmentAnswers[answer.serialNumber] = parsedContent;
      }
    });
    for (let i = 1; i < assignmentQuestions.length; i++) {
      const question = document.createElement("div");
      question.style.fontSize = "25px";
      question.style.fontWeight = "bold";
      question.style.marginBottom = "10px";
      question.textContent = i + ". " + assignmentQuestions[i];
      totalpdf.appendChild(question);

      const answer = document.createElement("div");
      // answer.style.border = "1px solid black";
      answer.style.padding = "10px";
      answer.style.fontSize = "25px";
      answer.style.marginBottom = "40px";
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
      isTeacher
        ? "TEACHER"
        : getUserId() === submission.studentId
        ? "SELF"
        : "PEER"
    );
  }
  function getStatusMessage(submission, viewer) {
    if (submission.status === "DRAFT") {
      return (
        "Created by " +
        submission.assignment.teacherName +
        " | Due on " +
        formattedDate(submission.assignment.dueAt)
      );
    }
    if (submission.status === "SUBMITTED") {
      let submitter;
      if (viewer === "PEER") {
        submitter = "your peer";
      } else if (viewer === "SELF") {
        submitter = "you";
      } else {
        submitter = submission.studentName;
      }
      return (
        "Submitted by " +
        submitter +
        " | Review due on " +
        formattedDate(submission.assignment.reviewDueAt)
      );
    }
    if (submission.status === "REVIEWED") {
      let reviewer;
      if (submission.assignment.reviewedBy === "TEACHER") {
        if (viewer === "TEACHER") {
          reviewer = "you";
        } else {
          reviewer = submission.assignment.teacherName;
        }
      } else {
        if (viewer === "PEER") {
          reviewer = "you";
        } else {
          reviewer = "your peer";
        }
      }
      return (
        "Reviewed by " +
        reviewer +
        " on " +
        formattedDate(submission.reviewedAt)
      );
    }
    if (submission.status === "CLOSED") {
      let closedBy;
      if (viewer === "PEER") {
        closedBy = "your peer";
      } else if (viewer === "SELF") {
        closedBy = "you";
      } else {
        closedBy = submission.studentName;
      }
      return (
        "Closed by " + closedBy + " on " + formattedDate(submission.closedAt)
      );
    }
  }

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
  };

  const shortcuts = getShortcuts();

  return (
    <ReactiveRender
      mobile={
        <FeedbackTeacherMobile
          {...{
            newCommentSerialNumber,
            isTeacher,
            submissionStatusLabel,
            labelText,
            quillRefs,
            pageMode,
            newCommentFrameRef,
            methods,
            showNewComment,
            comments,
            studentName,
            students,
            submission,
            sharewithclassdialog,
            ...feedbacksFeedbackTeacherMobileData,
          }}
        />
      }
      tablet={
        <FeedbackTeacherLaptop
          {...{
            newCommentSerialNumber,

            isTeacher,
            showLoader,
            submissionStatusLabel,
            labelText,
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
          }}
        />
      }
      laptop={
        <>
          <FeedbackTeacherLaptop
            {...{
              isTeacher,
              newCommentSerialNumber,

              showLoader,
              submissionStatusLabel,
              labelText,
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
            }}
          />
        </>
      }
      desktop={
        <FeedbackTeacherLaptop
          {...{
            isTeacher,
            newCommentSerialNumber,
            showLoader,
            submissionStatusLabel,
            labelText,
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
          }}
        />
      }
    />
  );
}

const StyledTextField = styled(TextField)`
  width: 100%;
  margin-bottom: 20px;
  .MuiOutlinedInput-root {
    ${IbmplexsansNormalShark20px}
    border-radius: 0px;
    border-color: var(--light-mode-purple);
  }
  .MuiOutlinedInput-root {
    border-color: var(--light-mode-purple);
  }
  label {
    ${IbmplexsansNormalShark20px}
    color: var(--light-mode-purple);
    border-color: var(--light-mode-purple);
  }
  .MuiInputBase-input {
    ${IbmplexsansNormalShark20px}
    border-color:var(--light-mode-purple);
  }
`;

const isTeacher = getUserRole() === "TEACHER";

const feedbacksNavElement1Data = {
  home3: "/img/home3-1@2x.png",
  place: "Home",
};

const feedbacksNavElement2Data = {
  home3: "/img/assignment@2x.png",
  place: "Assignments",
  className: "nav-element-1",
};

const feedbacksNavElement3Data = {
  home3: "/img/subject-1@2x.png",
  place: "Classes",
  className: "nav-element-2",
};

const feedbacksFrame41Data = {
  maskGroup: "/img/mask-group-1@2x.png",
};

const feedbacksTeacherDashboardHeader22Data = {
  logo: "/img/logo-1@2x.png",
  navElement1Props: feedbacksNavElement1Data,
  navElement2Props: feedbacksNavElement2Data,
  navElement3Props: feedbacksNavElement3Data,
  frame4Props: feedbacksFrame41Data,
};

const feedbacksBreadcrumb25Data = {
  assignments: "Feedback",
};

const feedbacksBreadcrumb26Data = {
  assignments: "Physics - thermodynamics assignment questions",
};

const feedbacksButtons7Data = {
  arrowleft: "/img/arrowleft@2x.png",
};

const feedbacksButtons25Data = {
  button: "Submit",
  // arrowright: "/img/arrowright@2x.png",
  className: "buttons-4",
};

const feedbacksFrame1317224Data = {
  buttonsProps: feedbacksButtons7Data,
  buttons2Props: feedbacksButtons25Data,
};

const feedbacksFrame1366421Data = {
  q2PoremIpsumDolo:
    "Q2. Porem ipsum dolor sit amet, consectetur adipiscing elit.",
};

const feedbacksFrame1366422Data = {
  q2PoremIpsumDolo:
    "Q3. Porem ipsum dolor sit amet, consectetur adipiscing elit.",
};

const feedbacksFrame13203Data = {
  children: ["Feedback", "Resolved"],
};

const feedbacksFrame13204Data = {
  children: "Shortcuts",
  className: "frame-1321-1",
};

const feedbacksFrame13332Data = {
  className: "frame-1333-2",
};

const feedbacksCommentCard321Data = {
  horemIpsumDolorSi: "Use More Techniques",
};

const feedbacksCommentCard322Data = {
  horemIpsumDolorSi:
    "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio.",
};

const feedbacksCommentCard323Data = {
  horemIpsumDolorSi:
    "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio.",
  className: "comment-card-5",
};

const feedbacksCommentCard324Data = {
  horemIpsumDolorSi:
    "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio.",
  className: "comment-card-6",
};

const feedbacksButtons8Data = {
  arrowleft: "/img/arrowleft@2x.png",
};

const feedbacksButtons26Data = {
  button: "Next",
  arrowright: "/img/arrowright@2x.png",
};

const feedbacksFrame13172Data = {
  buttonsProps: feedbacksButtons8Data,
  buttons2Props: feedbacksButtons26Data,
};

const feedbacksFeedbackTeacherLaptopData = {
  headerProps: isTeacher ? assignmentsHeaderProps : taskHeaderProps,
  physicsThermodyna: "Physics - thermodynamics assignment questions",
  frame1284: "/img/frame-1284@2x.png",
  q1PoremIpsumDolo:
    "Q1. Porem ipsum dolor sit amet, consectetur adipiscing elit?",
  line261: "/img/line-26-8.png",
  line262: "/img/line-26-8.png",
  typeHere: "Type here....",
  iconsaxLinearMicrophone2: "/img/iconsax-linear-microphone2-1@2x.png",
  line263: "/img/line-26-10@2x.png",
  iconsaxLinearShare: "/img/iconsax-linear-share@2x.png",
  share: "Share",
  line27: "/img/line-26-10@2x.png",
  x2021JeddleAllRightsReserved: "© 2021 Jeddle. All rights reserved.",
  teacherDashboardHeader2Props: feedbacksTeacherDashboardHeader22Data,
  breadcrumb21Props: feedbacksBreadcrumb25Data,
  breadcrumb22Props: feedbacksBreadcrumb26Data,
  frame13172Props: feedbacksFrame1317224Data,
  frame136641Props: feedbacksFrame1366421Data,
  frame136642Props: feedbacksFrame1366422Data,
  frame13201Props: feedbacksFrame13203Data,
  frame13202Props: feedbacksFrame13204Data,
  frame1333Props: feedbacksFrame13332Data,
  commentCard31Props: feedbacksCommentCard321Data,
  commentCard32Props: feedbacksCommentCard322Data,
  commentCard33Props: feedbacksCommentCard323Data,
  commentCard34Props: feedbacksCommentCard324Data,
  frame1317Props: feedbacksFrame13172Data,
};

const richTextComponents15Data = {
  src: "/img/underline@2x.png",
  className: "rich-text-components-14",
};

const frame128036Data = {
  className: "frame-1280-7",
};
const frame129735Data = {
  text9: "5.",
  frame1284: "/img/frame-1284-9@2x.png",
  richTextComponentsProps: richTextComponents15Data,
  frame12803Props: frame128036Data,
};

const questionFrame43Data = {
  frame12973Props: frame129735Data,
};

const feedbacksBreadcrumb21Data = {
  assignments: "Feedback",
};

const feedbacksBreadcrumb22Data = {
  assignments: "Physics - thermodynami...",
};

const feedbacksButtons1Data = {
  arrowleft: "/img/arrowleft-2@2x.png",
};

const feedbacksButtons21Data = {
  button: "Submit",
  // arrowright: "/img/arrowright-2@2x.png",
  className: "",
};

const feedbacksFrame1317221Data = {
  buttonsProps: feedbacksButtons1Data,
  buttons2Props: feedbacksButtons21Data,
};

const feedbacksFrame1366221Data = {
  q2PoremIpsumDolo:
    "Q2. Porem ipsum dolor sit amet, consectetur adipiscing elit.",
};

const feedbacksFrame1366222Data = {
  q2PoremIpsumDolo:
    "Q3. Porem ipsum dolor sit amet, consectetur adipiscing elit.",
};

const feedbacksButtons3Data = {
  arrowleft: "/img/arrowleft-3@2x.png",
};

const feedbacksButtons22Data = {
  button: "Next",
  arrowright: "/img/arrowright-3@2x.png",
};

const feedbacksFrame13171Data = {
  buttonsProps: feedbacksButtons3Data,
  buttons2Props: feedbacksButtons22Data,
};

const feedbacksFeedbackTeacherMobileData = {
  headerProps: isTeacher ? assignmentsHeaderProps : taskHeaderProps,
  frame1349: "/img/frame-1349@2x.png",
  frame5: "/img/frame-5@2x.png",
  physicsThermodyna: "Physics - thermodynamics assignment questions",
  frame12841: "/img/frame-1284@2x.png",
  q1PoremIpsumDolo:
    "Q1. Porem ipsum dolor sit amet, consectetur adipiscing elit?",
  line261: "/img/line-26-2@2x.png",
  line262: "/img/line-26-2@2x.png",
  frame12842: "/img/frame-1284@2x.png",
  x2023JeddleAllRightsReserved: "© 2023 Jeddle. All rights reserved.",
  mainWebsite: "Main Website",
  terms: "Terms",
  privacy: "Privacy",
  breadcrumb21Props: feedbacksBreadcrumb21Data,
  breadcrumb22Props: feedbacksBreadcrumb22Data,
  frame13172Props: feedbacksFrame1317221Data,
  frame136621Props: feedbacksFrame1366221Data,
  frame136622Props: feedbacksFrame1366222Data,
  frame1317Props: feedbacksFrame13171Data,
};
