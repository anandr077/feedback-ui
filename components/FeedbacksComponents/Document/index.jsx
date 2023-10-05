import 'quill/dist/quill.bubble.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import { default as React, default as React, useState, useEffect } from 'react';
import Header from '../../Header';

import Footer from '../../Footer';
import FooterSmall from '../../FooterSmall';
import HeaderSmall from '../../HeaderSmall';
import { isSmallScreen } from '../../ReactiveRender';
import { answersFrameNoMC } from '../AnswersFrameNoMC';
import Breadcrumb from '../Breadcrumb';
import Breadcrumb2 from '../Breadcrumb2';
import '../FeedbackTeacherLaptop/FeedbackTeacherLaptop.css';
import { contextBarForPortfolioDocument } from '../FeedbackTeacherLaptop/contextBar';
import {
  Frame1315,
  Frame1368,
  Frame1386,
  Frame1387,
  Frame1388,
} from '../FeedbackTeacherLaptop/style';
import DocumentFeedbackFrame from './DocumentFeedbackFrame';
import FeedbackTypeDialog from '../../Shared/Dialogs/feedbackType';
import {
  getStudentsForClass,
  getTeachersForClass,
  createRequestFeddbackType,
  getSubmissionById,
} from '../../../service';

const FeedbackMethodType = ['From teacher', 'Form class', 'From peer'];

const FeedbackMethodTypeEnum = {
  FROM_TEACHER: 0,
  FROM_CLASS: 1,
  FROM_PEER: 2,
};

const FeedbackType = {
  TEACHER: 'TEACHER',
  P2P: 'P2P',
  FRIEND: 'FRIEND',
};

function Document(props) {
  const {
    newCommentSerialNumber,
    isTeacher,
    labelText,
    quillRefs,
    pageMode,
    smartAnnotations,
    newCommentFrameRef,
    showNewComment,
    methods,
    comments,
    headerProps,
    submission,
    setSubmission,
    share,
  } = props;
  const [isShowResolved, setShowResolved] = useState(false);
  const [isShowSelectType, setShowSelectType] = useState(false);
  const [feedbackMethodTypeDialog, setFeedbackMethodTypeDialog] = useState(-1);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);

  const commentsForSelectedTab = selectTabComments(isShowResolved, comments);

  const [smallScreen, setSmallScreen] = useState(isSmallScreen());

  const handleOutsideClick = (event) => {
    setShowSelectType(false);
  };
  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (submission.classId) {
      Promise.all([
        getStudentsForClass(submission.classId),
        getTeachersForClass(submission.classId),
      ]).then(([studentsResponse, teachersResponse]) => {
        const filteredStudentsResponse = studentsResponse.filter(
          (student) => student.id !== submission.studentId
        );
        const updatedStudentsResponse = filteredStudentsResponse.map((item) => {
          return { ...item, title: item.id };
        });
        setStudents(updatedStudentsResponse);
        setTeachers(
          teachersResponse.map((item) => {
            return { ...item, title: item.id };
          })
        );
      });
    }
  }, [submission.classId]);

  const handleRequestFeedback = (index) => {
    setFeedbackMethodTypeDialog(index);
  };
  const handleSelectedRequestFeedback = (itemData, type) => {
    const requestData = {
      type: type,
      reviewerId: itemData ? itemData.id : null,
    };
    createRequestFeddbackType(submission.id, requestData).then((res) => {
      if (res) {
        getSubmissionById(submission.id).then((s) => {
          setSubmission(s);
        });
      }
    });
  };
  return (
    <>
      <div className="feedback-teacher-laptop screen">
        <Frame1388>
          {breadcrumbs(pageMode, submission)}
          {answersAndFeedbacks(
            isShowSelectType,
            setShowSelectType,
            submission,
            methods,
            isTeacher,
            pageMode,
            labelText,
            quillRefs,
            null,
            null,
            commentsForSelectedTab,
            newCommentSerialNumber,
            setShowResolved,
            showNewComment,
            isShowResolved,
            null,
            null,
            comments,
            newCommentFrameRef,
            share,
            smartAnnotations,
            handleRequestFeedback
          )}
        </Frame1388>
      </div>
      {handleFeedbackMethodTypeDialog(
        feedbackMethodTypeDialog,
        setFeedbackMethodTypeDialog,
        handleSelectedRequestFeedback,
        students,
        teachers
      )}
    </>
  );
}

const handleFeedbackMethodTypeDialog = (
  feedbackMethodType,
  setFeedbackMethodTypeDialog,
  handleSelectedRequestFeedback,
  students,
  teachers
) => {
  if (feedbackMethodType === FeedbackMethodTypeEnum.FROM_TEACHER) {
    return (
      <FeedbackTypeDialog
        menuItems={teachers}
        setFeedbackMethodTypeDialog={setFeedbackMethodTypeDialog}
        title="teacher"
        handleSelectedRequestFeedback={handleSelectedRequestFeedback}
        feedbackType={FeedbackType.TEACHER}
      ></FeedbackTypeDialog>
    );
  }
  if (feedbackMethodType === FeedbackMethodTypeEnum.FROM_CLASS) {
    return (
      <FeedbackTypeDialog
        setFeedbackMethodTypeDialog={setFeedbackMethodTypeDialog}
        title="class"
        handleSelectedRequestFeedback={handleSelectedRequestFeedback}
        feedbackType={FeedbackType.P2P}
      ></FeedbackTypeDialog>
    );
  }
  if (feedbackMethodType === FeedbackMethodTypeEnum.FROM_PEER) {
    return (
      <FeedbackTypeDialog
        menuItems={students}
        setFeedbackMethodTypeDialog={setFeedbackMethodTypeDialog}
        title="student"
        handleSelectedRequestFeedback={handleSelectedRequestFeedback}
        feedbackType={FeedbackType.FRIEND}
      ></FeedbackTypeDialog>
    );
  }
  return <></>;
};

const selectTabComments = (showResolved, comments) => {
  if (showResolved) {
    return comments.map((comment) => {
      if (comment.type === 'FOCUS_AREA') {
        return { ...comment, isHidden: true };
      }
      return comment;
    });
  }
  return comments.map((comment) => {
    if (comment.type === 'FOCUS_AREA' || comment.status === 'RESOLVED') {
      return { ...comment, isHidden: true };
    }
    return comment;
  });
};

function answersAndFeedbacks(
  isShowSelectType,
  setShowSelectType,
  submission,
  methods,
  isTeacher,
  pageMode,
  labelText,
  quillRefs,
  handleCheckboxChange,
  groupedFocusAreaIds,
  commentsForSelectedTab,
  newCommentSerialNumber,
  setShowResolved,
  showNewComment,
  isShowResolved,
  setFeedback,
  isFeedback,
  comments,
  newCommentFrameRef,
  share,
  smartAnnotations,
  handleRequestFeedback
) {
  return (
    <Frame1386 id="content">
      {contextBarForPortfolioDocument(
        isShowSelectType,
        setShowSelectType,
        submission,
        methods,
        isTeacher,
        pageMode,
        labelText,
        (feedbackMethodType = FeedbackMethodType),
        handleRequestFeedback,
        true
      )}
      <Frame1368 id="assignmentData">
        {answersFrameNoMC(
          quillRefs,
          pageMode,
          submission,
          commentsForSelectedTab,
          methods
        )}
        <></>
        {documentFeedbackFrame(
          methods,
          submission,
          newCommentSerialNumber,
          commentsForSelectedTab,
          setShowResolved,
          showNewComment,
          isShowResolved,
          isTeacher,
          comments,
          pageMode,
          newCommentFrameRef,
          share,
          smartAnnotations
        )}
      </Frame1368>
    </Frame1386>
  );
}

function documentFeedbackFrame(
  methods,
  submission,
  newCommentSerialNumber,
  commentsForSelectedTab,
  setShowResolved,
  showNewComment,
  isShowResolved,
  isTeacher,
  comments,
  pageMode,
  newCommentFrameRef,
  share,
  smartAnnotations
) {
  if (pageMode === 'DRAFT') {
    return <></>;
  }

  return (
    <DocumentFeedbackFrame
      methods={methods}
      submission={submission}
      newCommentSerialNumber={newCommentSerialNumber}
      commentsForSelectedTab={commentsForSelectedTab}
      setShowResolved={setShowResolved}
      showNewComment={showNewComment}
      isShowResolved={isShowResolved}
      isTeacher={isTeacher}
      comments={comments}
      pageMode={pageMode}
      newCommentFrameRef={newCommentFrameRef}
      share={share}
      smartAnnotations={smartAnnotations}
    ></DocumentFeedbackFrame>
  );
}

function breadcrumbs(pageMode, submission) {
  if (pageMode === 'DRAFT' || pageMode === 'REVISE') {
    return (
      <Frame1387>
        <Frame1315>
          <Breadcrumb text={'Portfolio'} link={'/#/portfolio'} />
          <Breadcrumb2 assignments={'Class' + submission.classId} />
          <Breadcrumb2 assignments={submission.assignment.title} />
        </Frame1315>
      </Frame1387>
    );
  }
  return (
    <Frame1387>
      <Frame1315>
        <Breadcrumb text={'Tasks'} link={'/#/tasks'} />
        <Breadcrumb2 assignments={submission.assignment.title} />
      </Frame1315>
    </Frame1387>
  );
}

export default Document;
