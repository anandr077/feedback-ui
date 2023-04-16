import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {
  addFeedback,
  deleteFeedback,
  getCommentsForSubmission,
  getSubmissionById,
  getTasks,
  getUserRole,
  markSubmissionReviewed as markSubmsissionReviewed,
  markSubmsissionClosed,
} from "../../../service";
import { saveAnswer, submitAssignment } from "../../../service.js";
import {
  taskHeaderProps,
  assignmentsHeaderProps,
} from "../../../utils/headerProps.js";
import Loader from "../../Loader";
import ReactiveRender from "../../ReactiveRender";
import FeedbackTeacherLaptop from "../FeedbackTeacherLaptop";
import FeedbackTeacherMobile from "../FeedbackTeacherMobile";
import { extractStudents, getPageMode } from "./functions";

import FeedBacksDropDown from "../FeedbacksDropDown";

export default function FeedbacksRoot({ isFeedbackPage }) {
  const quillRefs = useRef([]);
  const newCommentFrameRef = useRef(null);
  const commentCardRefs = useRef([]);

  const [submission, setSubmission] = useState(null);
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [studentName, setStudentName] = useState(null);
  const [comments, setComments] = useState([]);
  const [showNewComment, setShowNewComment] = useState(false);
  const [selectedRange, setSelectedRange] = useState(null);
  const [newCommentSerialNumber, setNewCommentSerialNumber] = useState(0);
  const [newCommentValue, setNewCommentValue] = useState("");
  const [nextUrl, setNextUrl] = useState("");

  const isTeacher = getUserRole() === "TEACHER";
  const [assignmentId, setAssignmentId] = useState(id);
  useEffect(() => {
    Promise.all([
      getSubmissionById(assignmentId),
      isTeacher ? getTasks() : Promise.resolve([]),
      getCommentsForSubmission(id),
    ]).then(([submissionsResult, tasksResult, commentsResult]) => {
      setSubmission(submissionsResult);
      setStudents(extractStudents(tasksResult));
      const allExceptCurrent = tasksResult.filter(
        (r) => r.id != submissionsResult.id
      );
      setNextUrl(
        allExceptCurrent[0] ? "/feedbacks/" + allExceptCurrent[0]?.id : "/"
      );
      console.log("Next " + JSON.stringify(nextUrl));

      setStudentName(
        tasksResult.find((r) => r.id === submissionsResult.id)?.studentName ??
          null
      );

      setComments(commentsResult);
      setIsLoading(false);
    });
  }, [assignmentId]);

  if (isLoading) {
    return <Loader />;
  }
  console.log("##isFeedbackPage: " + isFeedbackPage);

  const pageMode = getPageMode(isFeedbackPage, submission);
  console.log("pageMode: " + pageMode);

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

  function handleDeleteComment(commentId) {
    deleteFeedback(submission.id, commentId).then((response) => {
      setComments(comments.filter((c) => c.id != commentId));
    });
  }

  function handleShareWithClass() {
    addFeedback(submission.id, {
      questionSerialNumber: newCommentSerialNumber,
      feedback: document.getElementById("newCommentInput").value,
      range: selectedRange,
      type: "MODEL_RESPONSE",
    }).then((response) => {
      if (response) {
        setComments([...comments, response]);
        setNewCommentValue("");
      }
    });
    setShowNewComment(false);
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
      quill.selectRange(range);

      const div = document.getElementById(
        "quill_" + comment.questionSerialNumber
      );
      div.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    } else {
      console.log("No range");
    }
  }

  const handlesaveAnswer = (serialNumber) => (_) => {
    const contents = quillRefs.current[serialNumber - 1].getContents();
    saveAnswer(submission.id, serialNumber, {
      answer: contents,
    }).then((_) => {
      console.log("Answer saved");
    });
    console.log(serialNumber);
  };

  const reviewerSelectionChange = (serialNumber) => (range) => {
    if (range) {
      const from = range.index;
      const to = range.index + range.length;

      const matchingComments = comments
          .filter(comment => comment.questionSerialNumber === serialNumber)
          .filter(comment=> (comment.range.from <= from && comment.range.to >= to))
      if (matchingComments && matchingComments.length  > 0) {
          const matchingComment = matchingComments[0]
          const div = document.getElementById(
            "comment_" + matchingComment.id
          );
          highlightComment(div);
      } else if (pageMode === "REVIEW") {
        setNewCommentSerialNumber(serialNumber);
        setSelectedRange({
          from: from,
          to: to,
        });
        newCommentFrameRef.current?.focus();
        setShowNewComment(true);
      }
    }
  };

  function highlightComment(div) {
    div.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    const originalBackground = div.style.background;
    const originalBorder = div.style.border;
    const originalBoxShadow = div.style.boxShadow;

    // Set the new style properties
    div.style.background = "#F9F5FF";
    div.style.border = "1px solid #7200E0";
    div.style.boxShadow = "0px 4px 16px rgba(114, 0, 224, 0.2)";
    div.style.scale = 1.0003;

    // Restore the original style properties after 5 seconds
    setTimeout(() => {
      div.style.background = originalBackground;
      div.style.border = originalBorder;
      div.style.boxShadow = originalBoxShadow;
      div.style.scale = 1;
    }, 2000);
  }
  const noopSelectionChange = (serialNumber) => (range) => {
    console.log("##editorOnX" + JSON.stringify(range));
  };

  const hideNewCommentDiv = () => {
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
      return (
        <FeedBacksDropDown
          studentName={studentName}
          students={students}
          studentUpdate={studentUpdate}
        ></FeedBacksDropDown>
      );
    }
  };

  const methods = {
    handleDeleteComment,
    handleShareWithClass,
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
    createTasksDropDown,
    onSelectionChange,
    setStudentName,
    studentUpdate,
  };

  return (
    <ReactiveRender
      mobile={
        <FeedbackTeacherMobile
          {...{
            quillRefs,
            pageMode,
            newCommentFrameRef,
            methods,
            showNewComment,
            comments,
            studentName,
            students,
            submission,
            ...feedbacksFeedbackTeacherMobileData,
          }}
        />
      }
      tablet={
        <FeedbackTeacherLaptop
          {...{
            quillRefs,
            pageMode,
            newCommentFrameRef,
            methods,
            showNewComment,
            comments,
            studentName,
            students,
            submission,
            ...feedbacksFeedbackTeacherLaptopData,
          }}
        />
      }
      laptop={
        <>
          <FeedbackTeacherLaptop
            {...{
              quillRefs,
              pageMode,
              newCommentFrameRef,
              methods,
              showNewComment,
              comments,
              studentName,
              students,
              submission,
              ...feedbacksFeedbackTeacherLaptopData,
            }}
          />
        </>
      }
      desktop={
        <FeedbackTeacherLaptop
          {...{
            quillRefs,
            pageMode,
            newCommentFrameRef,
            methods,
            showNewComment,
            comments,
            studentName,
            students,
            submission,
            ...feedbacksFeedbackTeacherLaptopData,
          }}
        />
      }
    />
  );
}
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
