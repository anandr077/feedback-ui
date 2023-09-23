import 'quill/dist/quill.bubble.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import { default as React, default as React, useState, useEffect } from 'react';
import Header from '../../Header';

import Footer from '../../Footer';
import FooterSmall from '../../FooterSmall';
import HeaderSmall from '../../HeaderSmall';
import { isTabletView } from '../../ReactiveRender';
import { answersFrameNoMC } from '../AnswersFrameNoMC';
import Breadcrumb from '../Breadcrumb';
import Breadcrumb2 from '../Breadcrumb2';
import '../FeedbackTeacherLaptop/FeedbackTeacherLaptop.css';
import { contextBar } from '../FeedbackTeacherLaptop/contextBar';
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
  createRequestFeddbackType,
  getSubmissionById,
} from '../../../service';

const FeedbackMethodType = [
  'From subject teacher',
  'Form peers',
  'From a friend',
];

const FeedbackMethodTypeEnum = {
  FROM_SUBJECT_TEACHER: 0,
  FROM_PEER: 1,
  FROM_A_FRIEND: 2,
};

const FeedbackType = {
  TEACHER: 'TEACHER',
  P2P: 'P2P',
  FRIEND: 'FRIEND',
};

const menuItemsTeachers = [
  {
    id: 1,
    title: 'teacher1',
  },
  {
    id: 2,
    title: 'teacher2',
  },
  {
    id: 3,
    title: 'teacher3',
  },
  {
    id: 4,
    title: 'teacher4',
  },
];

function Document(props) {
  const {
    newCommentSerialNumber,
    markingCriteriaFeedback,
    smallMarkingCriteria,
    isTeacher,
    showLoader,
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
    sharewithclassdialog,
  } = props;
  const [isShowResolved, setShowResolved] = useState(false);
  const [isShowSelectType, setShowSelectType] = useState(false);
  const [feedbackMethodTypeDialog, setFeedbackMethodTypeDialog] = useState(-1);
  const [students, setStudents] = useState([]);

  const commentsForSelectedTab = selectTabComments(isShowResolved, comments);

  const [tabletView, setTabletView] = useState(isTabletView());

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
      Promise.all([getStudentsForClass(submission.classId)]).then(
        ([studentsResponse]) => {
          const filteredStudentsResponse = studentsResponse.filter(
            (student) => student.id !== submission.studentId
          );
          const updatedStudentsResponse = filteredStudentsResponse.map(
            (item) => {
              return { ...item, title: item.id };
            }
          );
          setStudents(updatedStudentsResponse);
        }
      );
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
          {header(tabletView, headerProps)}
          {breadcrumbs(submission)}
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
          {/* {footer(tabletView)} */}
        </Frame1388>
      </div>
      {handleFeedbackMethodTypeDialog(
        feedbackMethodTypeDialog,
        setFeedbackMethodTypeDialog,
        handleSelectedRequestFeedback,
        students
      )}
    </>
  );
}

const handleFeedbackMethodTypeDialog = (
  feedbackMethodType,
  setFeedbackMethodTypeDialog,
  handleSelectedRequestFeedback,
  students
) => {
  if (feedbackMethodType === FeedbackMethodTypeEnum.FROM_SUBJECT_TEACHER) {
    return (
      <FeedbackTypeDialog
        menuItems={menuItemsTeachers}
        setFeedbackMethodTypeDialog={setFeedbackMethodTypeDialog}
        title="teacher"
        handleSelectedRequestFeedback={handleSelectedRequestFeedback}
        feedbackType={FeedbackType.TEACHER}
      ></FeedbackTypeDialog>
    );
  }
  if (feedbackMethodType === FeedbackMethodTypeEnum.FROM_PEER) {
    handleSelectedRequestFeedback(null, FeedbackType.P2P);
  }
  if (feedbackMethodType === FeedbackMethodTypeEnum.FROM_A_FRIEND) {
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

function handleTabUpdate(pageMode, setFeedback, setFocusAreas) {
  if (pageMode === 'DRAFT' || pageMode === 'REVISE') {
    setFeedback(false);
    setFocusAreas(true);
  } else {
    setFeedback(true);
    setFocusAreas(false);
  }
}

// function footer(tabletView) {
//   return tabletView ? <FooterSmall /> : <Footer />;
// }

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
      {contextBar(
        isShowSelectType,
        setShowSelectType,
        submission,
        methods,
        isTeacher,
        pageMode,
        labelText,
        (feedbackMethodType = FeedbackMethodType),
        (requestFeedback = true),
        handleRequestFeedback,
        false
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

function header(tabletView, headerProps) {
  return tabletView ? (
    <HeaderSmall headerProps={headerProps} />
  ) : (
    <Header headerProps={headerProps} />
  );
}

function breadcrumbs(submission) {
  return (
    <Frame1387>
      <Frame1315>
        <Breadcrumb text={'Portfolio'} link={'/#/portfolio'} />
        <Breadcrumb2 assignments={submission.assignment.title} />
      </Frame1315>
    </Frame1387>
  );
}

export default Document;
