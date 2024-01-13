import 'quill/dist/quill.bubble.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import { default as React, default as React, useEffect, useState } from 'react';
import {
  createRequestFeddbackType,
  docsMoveToFolder,
  getSubmissionById,
  getPortfolioSubjects,
} from '../../../service';
import FeedbackTypeDialog from '../../Shared/Dialogs/feedbackType';
import SnackbarContext from '../../SnackbarContext';
import { answersFrameNoMC } from '../AnswersFrameNoMC';
import Breadcrumb from '../Breadcrumb';
import Breadcrumb2 from '../Breadcrumb2';
import '../FeedbackTeacherLaptop/FeedbackTeacherLaptop.css';
import { contextBarForPortfolioDocument } from '../FeedbackTeacherLaptop/contextBar';
import {
  DrawerArrow,
  Frame1315,
  Frame1368,
  Frame1386,
  Frame1387,
  Frame1388,
  DrawerArrowContainer,
  DrawerArrow,
  ArrowImg,
  Main,
} from '../FeedbackTeacherLaptop/style';
import DocumentFeedbackFrame from './DocumentFeedbackFrame';
import { sub } from 'date-fns';
import IndepentdentUserSidebar from '../../IndependentUser/IndepentdentUserSidebar';
import { styled, useTheme } from '@mui/material/styles';

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
    allFolders,
    allClasses,
    students,
    teachers,
    onMobileView = false,
    overallComments,
  } = props;
  const [isShowResolved, setShowResolved] = useState(false);
  const [isShowSelectType, setShowSelectType] = useState(false);
  const [showFeedbackButtons, setShowFeedbackButtons] = useState(false);
  const [feedbackMethodTypeDialog, setFeedbackMethodTypeDialog] = useState(-1);

  const [open, setOpen] = useState(false);
  const [subjectsList, setSubjectsList] = React.useState([]);
  const [selectedSubject, setSelectedSubject] = React.useState();
  const [groupedAndSortedData, setGroupedAndSortedData] = React.useState({});
  const drawerWidth = 275;

  useEffect(() => {
    Promise.all([getPortfolioSubjects()]).then(([result]) => {
      console.log('the studentSubject', result);
      setSubjectsList(result);
    });
  }, []);

  React.useEffect(() => {
    const groupedData = subjectsList?.reduce((result, item) => {
      const subject = item.subject ? item.subject : 'English';

      if (!result[subject]) {
        result[subject] = [];
      }

      result[subject].push(item);

      return result;
    }, {});

    for (const subject in groupedData) {
      if (groupedData.hasOwnProperty(subject)) {
        groupedData[subject].sort((a, b) => b.lastseenAtTs - a.lastseenAtTs);
      }
    }
    setGroupedAndSortedData(groupedData);
    setSelectedSubject(Object.keys(groupedData)[0]);
  }, [subjectsList]);

  const commentsForSelectedTab = selectTabComments(isShowResolved, comments);

  const handleOutsideClick = (event) => {
    setShowSelectType(false);
    setShowFeedbackButtons(false);
  };
  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleRequestFeedback = async (index) => {
    await setFeedbackMethodTypeDialog(-1);
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

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className="feedback-teacher-laptop screen"
        style={{ minWidth: 'unset' }}
      >
        <Main drawerWidth={drawerWidth} open={open}>
          <DrawerArrowContainer open={open}>
            <IndepentdentUserSidebar
              open={open}
              subjects={groupedAndSortedData}
              setSelectedSubject={setSelectedSubject}
              selectedSubject={selectedSubject}
            />
            <DrawerArrow
              onClick={handleDrawer}
              drawerWidth={drawerWidth}
              open={open}
            >
              <ArrowImg src="img/caret-5@2x.png" open={open} />
            </DrawerArrow>
          </DrawerArrowContainer>
          <Frame1388 open={open} drawerWidth={drawerWidth}>
            {breadcrumbs(pageMode, submission, allFolders)}
            {answersAndFeedbacks(
              isShowSelectType,
              setShowSelectType,
              showFeedbackButtons,
              setShowFeedbackButtons,
              submission,
              setSubmission,
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
              allFolders,
              methods.updateDocumentClass,
              onMobileView,
              overallComments
            )}
          </Frame1388>
        </Main>
      </div>
      {handleFeedbackMethodTypeDialog(
        feedbackMethodTypeDialog,
        setFeedbackMethodTypeDialog,
        handleSelectedRequestFeedback,
        students,
        teachers,
        allClasses
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
  showFeedbackButtons,
  setShowFeedbackButtons,
  submission,
  setSubmission,
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
  allFolders,
  updateDocumentClass,
  onMobileView,
  overallComments
) {
  return (
    <Frame1386 id="content" onMobileView={onMobileView}>
      {contextBarForPortfolioDocument(
        isShowSelectType,
        setShowSelectType,
        showFeedbackButtons,
        setShowFeedbackButtons,
        submission,
        setSubmission,
        methods,
        isTeacher,
        pageMode,
        labelText,
        (feedbackMethodType = FeedbackMethodType),
        handleRequestFeedback,
        true,
        allClasses
      )}
      <Frame1368 id="assignmentData">
        {answersFrameNoMC(
          quillRefs,
          pageMode,
          submission,
          commentsForSelectedTab,
          overallComments,
          methods
        )}
        <></>
        {!onMobileView &&
          documentFeedbackFrame(
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

function breadcrumbs(pageMode, submission, allFolders) {
  if (
    pageMode === 'DRAFT' ||
    pageMode === 'REVISE' ||
    (pageMode === 'CLOSED' &&
      (submission.status === 'FEEDBACK_ACCEPTED' ||
        submission.status === 'SUBMITTED'))
  ) {
    return (
      <Frame1387>
        <Frame1315>
          <Breadcrumb text={'Portfolio'} link={'/#/portfolio'} />
          {folderBreadcrumb()}
          {subfolderBreadcrumb()}

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

  function subfolderBreadcrumb() {
    return (
      <Breadcrumb2
        assignments={'Drafts'}
        link={'/#/portfolio/' + submission.folderId + '/Drafts'}
      />
    );
  }

  function folderBreadcrumb() {
    let matchingFolderTitle = null;
    if (allFolders && submission && submission.id) {
      const matchingFolder = allFolders.find(
        (folder) => folder.id === submission.folderId
      );
      if (matchingFolder) {
        matchingFolderTitle = matchingFolder.title;
      }
    }
    return (
      <Breadcrumb2
        assignments={matchingFolderTitle}
        link={'/#/portfolio/' + submission.folderId}
      />
    );
  }
}

export default Document;
