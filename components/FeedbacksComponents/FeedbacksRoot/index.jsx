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
  deleteFeedback,
  getSubmissionById,
  getSubmissionsByAssignmentId,
  getUserId,
  getUserRole,
  markSubmissionReviewed as markSubmsissionReviewed,
  markSubmsissionClosed,
  submitAssignment,
  updateFeedbackRange,
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
import {
  IbmplexsansMediumCongressBlue13px,
  IbmplexsansNormalShark20px,
} from "../../../styledMixins";

export default function FeedbacksRoot({ isAssignmentPage }) {
  const quillRefs = useRef([]);
  const [labelText, setLabelText] = useState("");
  const [showShareWithClass, setShowShareWithClass] = useState(false);
  const [exemplerComment, setExemplerComment] = useState("");
  const [isValidComment, setIsValidComment] = useState(true);

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
  // const [assignmentId, setAssignmentId] = useState(id);
  // useEffect(() => {
  //   Promise.all([
  //     isAssignmentPage
  //       ? getSubmissionsByAssignmentId(assignmentId)
  //       : Promise.resolve([]),
  //   ]).then(([submissionsResult]) => {
  //     if (isAssignmentPage) {
  //       window.location.href = "#submissions/" + submissionsResult[0].id;
  //     }
  //   });
  // }, [assignmentId]);
  // useEffect(() => {
  //   Promise.all([getSubmissionById(id)]).then(([submissionsResult]) => {
  //     console.log("submissionsResult " + submissionsResult);
  //     setSubmission(submissionsResult);
  //     getComments(submissionsResult)
  //       .then((commentsResult) => {
  //         setComments(commentsResult);
  //       })
  //       .finally(() => {
  //         if (!isTeacher) {
  //           setIsLoading(false);
  //         }
  //       });
  //   });
  // }, [assignmentId]);

  useEffect(() => {
    getSubmissionById(id).then((r)=>{
      return getComments(r).then((c) =>{
        return [r, c]
      })
    })
      .then(([submissionsResult, commentsResult]) => {
        console.log("submissionsResult " + submissionsResult);
        setSubmission(submissionsResult);
        setComments(commentsResult);
      }).finally(() => {
          if (!isTeacher) {
            console.log("Setting is loading for !isTeacher")
            setIsLoading(false);
          }
        });
  }, [id]);


  useEffect(() => {
    console.log("Submissions " + submission);
    if (isTeacher && submission && submission?.assignmentId) {
      getSubmissionsByAssignmentId(submission.assignmentId)
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
          allSubmissions.find((r) => r.id === submission.assignmentId)?.studentName ??
            null;
          console.log("studentName " + studentName);

          setStudentName(studentName);
        })
        .finally(() => {
          console.log("Setting is loading " + isLoading)
          setIsLoading(false)
        });
      }
  }, [submission]);

  if (isLoading) {
    return <Loader />;
  }
  console.log("Loading finished " + JSON.stringify(comments) + " isLoading " + isLoading)

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
    console.log("Mounted " + JSON.stringify(editor) + " index " + index);
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
    }).then((response) => {
      if (response) {
        setComments([...comments, response]);
        setNewCommentValue("");
      }
    });
    setShowNewComment(false);
  }

  const addExemplerComment = () => {
    if (exemplerComment === "") {
      setIsValidComment(false);
      return;
    }
    addFeedback(submission.id, {
      questionSerialNumber: newCommentSerialNumber,
      feedback: exemplerComment,
      range: selectedRange,
      type: "MODEL_RESPONSE",
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
      <Box padding={2}>
        <StyledTextField
          label="Exempler remark"
          variant="outlined"
          value={exemplerComment}
          onChange={handleInputChange}
          error={!isValidComment}
          helperText={!isValidComment ? "Please enter remark here" : ""}
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
        console.log("commentIdsArray:", JSON.stringify(commentIdsArray));

        // Create a Set from the commentIdsArray
        const transformedCommentIds = uniq(commentIdsArray);
        console.log(
          "transformedCommentIds:",
          JSON.stringify(transformedCommentIds)
        );
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
        console.log(
          "missingCommentsWithZeroRange " +
            JSON.stringify(missingCommentsWithZeroRange)
        );

        const finalData = transformedData.concat(missingCommentsWithZeroRange);
        const promises = finalData.map(({ commentId, range }) => {
          return updateFeedbackRange(submission.id, commentId, range);
        });

        Promise.all(promises).then((results) => {
          console.log("results " + JSON.stringify(results));
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

  function handleSubmissionReviewed() {
    markSubmsissionReviewed(submission.id).then((_) => {
      if (isTeacher) {
        window.location.href = nextUrl;
      } else {
        window.location.href = "/";
      }
    });
  }
  const handleSaveSubmissionForReview = () => {
    submitAssignment(submission.id).then((_) => {
      localStorage.setItem("submission", submission.id);
      window.location.href = "/";
    });
  };
  function handleSubmissionClosed() {
    markSubmsissionClosed(submission.id).then(
      (_) => (window.location.href = "/")
    );
  }

  function handleCommentSelected(comment) {
    if (comment.range) {
      const range = {
        index: comment.range.from,
        length: comment.range.to - comment.range.from,
      };
      const quill = quillRefs.current[comment.questionSerialNumber - 1];

      const div = document.getElementById(
        "quill_" + comment.questionSerialNumber
      );

      quill.selectRange(range);
      quill.focus();
      quill.scrollToHighlight(comment.id);
      // div.scrollIntoView({
      //   behavior: "smooth",
      //   block: "center",
      //   inline: "center",
      // });
    } else {
      console.log("No range");
    }
  }

  const handlesaveAnswer = (serialNumber) => (contents) => {
    handleChangeText("Saving...", false);
    saveAnswer(submission.id, serialNumber, {
      answer: contents,
    }).then((_) => {
      handleChangeText("All changes saved", true);
    });
    console.log(serialNumber);
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
      } else if (pageMode === "REVIEW") {
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
    console.log("##unhighlightComment", comments.length);
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

  const noopSelectionChange = (serialNumber) => (range) => {
    console.log("##editorOnX" + JSON.stringify(range));
  };

  const hideNewCommentDiv = () => {
    quillRefs.current[newCommentSerialNumber - 1].applyBackgroundFormat(
      selectedRange,
      selectedRangeFormat
    );

    setShowNewComment(false);
  };

  const studentUpdate = (student) => {
    console.log("##studentUpdate" + JSON.stringify(student));
    setStudentName(student);
    // get assignment by student name or other way
  };
  const onSelectionChange =
    pageMode != "DRAFT" ? reviewerSelectionChange : noopSelectionChange;

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
      return (
        <ImageDropdownMenu
          menuItems={menuItems}
          showAvatar={true}
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
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
      },
    });

    console.log("##", submission);

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
      console.log(assignmentAnswers[question.serialNumber]);
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
      answer.style.border = "1px solid black";
      answer.style.padding = "10px";
      answer.style.fontSize = "20px";
      answer.style.marginBottom = "40px";
      if (assignmentAnswers[i] instanceof HTMLElement) {
        answer.appendChild(assignmentAnswers[i]);
      } else {
        answer.textContent = assignmentAnswers[i];
      }
      // answer.textContent = assignmentAnswers[i];
      console.log("##", assignmentAnswers[i]);
      totalpdf.appendChild(answer);
    }

    const options = {
      callback: function (doc) {
        doc.save(`${submission.assignment.title}.pdf`);
      },
      x: 10,
      y: 10,
      width: 170,
      windowWidth: 1180,
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
        "Created by: " +
        submission.assignment.teacherName +
        " | Due on: " +
        formattedDate(submission.assignment.dueAt)
      );
    }
    if (submission.status === "SUBMITTED") {
      let submitter;
      if (viewer === "PEER") {
        submitter = "Peer";
      } else if (viewer === "SELF") {
        submitter = "You";
      } else {
        submitter = submission.studentName;
      }
      return (
        "Submitted by: " +
        submitter +
        " | Review due on: " +
        formattedDate(submission.assignment.reviewDueAt)
      );
    }
    if (submission.status === "REVIEWED") {
      let reviewer;
      if (submission.assignment.reviewedBy === "TEACHER") {
        reviewer = submission.assignment.teacherName;
      } else {
        reviewer = viewer === "TEACHER" ? submission.studentName : "Peer";
      }
      return (
        "Reviewed by: " +
        reviewer +
        " on: " +
        formattedDate(submission.reviewedAt)
      );
    }
    if (submission.status === "CLOSED") {
      let closedBy;
      if (viewer === "PEER") {
        return "Reviewed by you on " + submission.reviewed;
      } else if (viewer === "SELF") {
        closedBy =
          submission.assignment.reviewedBy === "TEACHER"
            ? submission.assignment.teacherName
            : "You";
      } else {
        closedBy =
          submission.assignment.reviewedBy === "TEACHER"
            ? submission.assignment.teacherName
            : submission.studentName;
      }
      return (
        "Closed by: " +
        closedBy +
        " on: " +
        formattedDate(submission.reviewedAt)
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
  };

  const shortcuts = getShortcuts();

  return (
    <ReactiveRender
      mobile={
        <FeedbackTeacherMobile
          {...{
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
            isTeacher,
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
  button: "Submit & Next",
  arrowright: "/img/arrowright@2x.png",
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
  children: "Feedback",
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
  button: "Submit & Next",
  arrowright: "/img/arrowright-2@2x.png",
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
