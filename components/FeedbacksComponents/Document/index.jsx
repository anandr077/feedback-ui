import _ from 'lodash';
import 'quill/dist/quill.bubble.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import { default as React, default as React, useEffect, useState } from 'react';
import {
  createRequestFeddbackType,
  getClasses,
  getStudentsForClass,
  getSubmissionById,
  getTeachersForClass,
  updateSubmissionClass,
} from '../../../service';
import FeedbackTypeDialog from '../../Shared/Dialogs/feedbackType';
import SnackbarContext from '../../SnackbarContext';
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

const FeedbackMethodType = ['Teacher', 'Class', 'Peer'];

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
  const { showSnackbar } = React.useContext(SnackbarContext);
  const [isShowResolved, setShowResolved] = useState(false);
  const [isShowSelectType, setShowSelectType] = useState(false);
  const [feedbackMethodTypeDialog, setFeedbackMethodTypeDialog] = useState(-1);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [allClasses, setAllClasses] = useState([]);
  const [feedbackClasses, setFeedbackClasses] = useState([]);

  const commentsForSelectedTab = selectTabComments(isShowResolved, comments);

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
    const fetchDetails = async (classIds) => {
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

      setStudents(uniqueStudents.map((item) => ({ ...item, title: item.id })));
      setTeachers(uniqueTeachers.map((item) => ({ ...item, title: item.id })));
    };

    const fetchClasses = async () => {
      const classes = await getClasses();
      if (submission.classId) {
        return classes.filter((c) => c.id === submission.classId);
      }
      return classes;
    };

    fetchClasses().then((classes) => {
      const classIds = classes.map((c) => c.id);
      setAllClasses(classes.map((c) => ({ ...c, title: c.title })));
      fetchDetails(classIds);
    });
  }, [submission]);

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

  const updateDocumentClass = (item) => {
    if (item.id === submission.classId) {
      return;
    }
    updateSubmissionClass(submission.id, item.id).then((res) => {
      if (res) {
        const classObj = allClasses.find((item) => item.id === res.classId);
        showSnackbar('Moved to submission ' + classObj.title);
        getSubmissionById(submission.id).then((s) => {
          setSubmission(s);
        });
      }
    });
  };

  return (
    <>
      <div
        className="feedback-teacher-laptop screen"
        style={{ minWidth: 'unset' }}
      >
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
            handleRequestFeedback,
            allClasses,
            updateDocumentClass
          )}
        </Frame1388>
      </div>
      {handleFeedbackMethodTypeDialog(
        feedbackMethodTypeDialog,
        setFeedbackMethodTypeDialog,
        handleSelectedRequestFeedback,
        students,
        teachers,
        submission.classId
          ? allClasses.filter((item) => item.id === submission.classId)
          : allClasses
      )}
    </>
  );
}

const handleFeedbackMethodTypeDialog = (
  feedbackMethodType,
  setFeedbackMethodTypeDialog,
  handleSelectedRequestFeedback,
  students,
  teachers,
  classes
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
        menuItems={classes}
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
  handleRequestFeedback,
  allClasses,
  updateDocumentClass
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
        true,
        allClasses,
        updateDocumentClass
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
          <Breadcrumb2
            assignments={'Folder' + submission.classId}
            link={'/#/portfolio/' + submission.classId}
          />
          <Breadcrumb2
            assignments={'Drafts'}
            link={'/#/portfolio/' + submission.classId + '/Drafts'}
          />

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
