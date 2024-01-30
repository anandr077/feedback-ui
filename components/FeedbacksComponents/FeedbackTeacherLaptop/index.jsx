import 'quill/dist/quill.bubble.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import { default as React, default as React, useEffect, useState } from 'react';
import Header from '../../Header';

import { flatMap, groupBy } from 'lodash';
import HeaderSmall from '../../HeaderSmall';
import Loader from '../../Loader';
import { isMobileView } from '../../ReactiveRender';
import { answersFrame } from '../AnswersFrame';
import Breadcrumb from '../Breadcrumb';
import Breadcrumb2 from '../Breadcrumb2';
import './FeedbackTeacherLaptop.css';
import { contextBar, contextBarForPortfolioDocument } from './contextBar';
import FeedbackFrame from './feedbackFrame';
import {
  Frame1315,
  Frame1368,
  Frame1386,
  Frame1387,
  Frame1388,
  Screen2,
  SubjectSelectionContainer,
  SubSelcetBox,
  Main,
  PageContainer,
  DrawerArrowContainer,
  DrawerArrow,
  ArrowImg,
  GoBackBtn,
  ImgContainer,
  CountZoomContainer,
} from './style';
import { isMobileView, isDesktopView } from '../../ReactiveRender';
import WelcomeOverlayMobile from '../../../components2/WelcomeOverlayMobile';
import TeacherSidebar from '../../TeacherSidebar';
import IndepentdentUserSidebar from '../../IndependentUser/IndepentdentUserSidebar';
import { IsoTwoTone } from '@mui/icons-material';

import { useHistory } from 'react-router-dom';
import FeedbackTypeDialog from '../../Shared/Dialogs/feedbackType';
import { getSubmissionById, createRequestFeddbackType } from '../../../service';
import StyledDropDown from '../../../components2/StyledDropDown';
import { isNullOrEmpty } from '../../../utils/arrays';

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

function FeedbackTeacherLaptop(props) {
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
    students,
    headerProps,
    submission,
    setSubmission,
    share,
    sharewithclassdialog,
    overallComments,
    selectedRange,
    classesAndStudents,
    teachers,
  } = props;
  const isMobile = isMobileView();
  const isDesktop = isDesktopView();

  const [isFeedback, setFeedback] = React.useState(pageMode !== 'DRAFT');
  const [isFocusAreas, setFocusAreas] = React.useState(pageMode === 'DRAFT' && submission.type !== 'DOCUMENT');
  const [groupedFocusAreaIds, setGroupedFocusAreaIds] = React.useState(() =>
    createGroupedFocusAreas(submission)
  );
  const [open, setOpen] = useState(false);
  
  const [groupedAndSortedData, setGroupedAndSortedData] = React.useState({});
  const [selectedSubject, setSelectedSubject] = React.useState();
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
  const drawerWidth = 315;

  React.useEffect(() => {
    let dataToUse = submission.otherDrafts||[];
   
    const groupedData = dataToUse?.reduce((result, item) => {
      const subject = item.subject || 'English';

      if (!result[subject]) {
        result[subject] = [];
      }

      result[subject].push(item);

      return result;
    }, {});

    if (!isTeacher) {
      setGroupedAndSortedData(groupedData);
      setSelectedSubject(Object.keys(groupedData)[0]);
      return;
    }

    for (const subject in groupedData) {
      if (groupedData.hasOwnProperty(subject)) {
        groupedData[subject].sort((a, b) => b.lastseenAtTs - a.lastseenAtTs);
      }
    }
    setGroupedAndSortedData(groupedData);
    setSelectedSubject(Object.keys(groupedData)[0]);
  }, [submission.otherDrafts]);
  const navigate = useHistory();

  const [showStudentPopUp, setShowStudentPopUp] = React.useState(false);
  const [showTeacherPopUp, setShowTeacherPopUp] = React.useState(false);

  React.useEffect(() => {
    if (showNewComment) {
      handleTabUpdate(pageMode, setFeedback, setFocusAreas);
    }
  }, [showNewComment]);

  const [isShowResolved, setShowResolved] = useState(false);

  const [isShowSelectType, setShowSelectType] = useState(false);
  const [showFeedbackButtons, setShowFeedbackButtons] = useState(false);
  const [feedbackMethodTypeDialog, setFeedbackMethodTypeDialog] = useState(-1);
  const [countWords, setCountWords] = useState(0)


  const handleRequestFeedback = async (index) => {
    await setFeedbackMethodTypeDialog(-1);
    setFeedbackMethodTypeDialog(index);
  };
  const handleSelectedRequestFeedback = (itemData, type) => {
    const requestData = {
      type: type,
      reviewerId: itemData ? itemData.id : null,
    };
    createRequestFeddbackType(submission.id, requestData).then((response) => {
      setSubmission(old=>({
        ...old,
        status:response.status,
        reviewerId:response.reviewerId,
        reviewerName:response.reviewerName,
        submittedAt:response.submittedAt,
        feedbackRequestType:response.feedbackRequestType,
        classId: response.classId,
        declinedByReviewerIds: response.declinedByReviewerIds,
        submittedAt: response.submittedAt,
      }));
    });
  };
  const commentsForSelectedTab = selectTabComments(
    isShowResolved,
    isFocusAreas,
    comments,
    groupedFocusAreaIds
  );
  const commentsDependencyString = React.useMemo(() => {
    return commentsForSelectedTab.map((c) => `${c.id}:${c.isHidden}`).join(',');
  }, [commentsForSelectedTab]);
  React.useEffect(() => {
    quillRefs.current.forEach(function (quillRef, index, array) {
      const currentTabComments = commentsForSelectedTab.filter(
        (comment) => comment.questionSerialNumber === index + 1
      );
      if (quillRef) quillRef.redrawHighlights(currentTabComments);
    });
  }, [commentsDependencyString]);

  React.useEffect(() => {
    const quillRef = quillRefs.current[newCommentSerialNumber - 1];
    if (showNewComment === undefined || quillRef === null) {
      return;
    }
    if (showNewComment) {
      quillRef?.setLostFocusColor({
        index: selectedRange.from,
        length: selectedRange.to - selectedRange.from,
      });
    } else {
      const currentTabComments = commentsForSelectedTab.filter(
        (comment) => comment.questionSerialNumber === newCommentSerialNumber
      );
      quillRef?.redrawHighlights(currentTabComments);
    }
  }, [showNewComment]);
  const handleCheckboxChange = (serialNumber, focusAreaId) => (event) => {
    const isChecked = event.target.checked;
    setGroupedFocusAreaIds((prevState) => {
      if (isChecked) {
        return {
          ...prevState,
          [serialNumber]: [...prevState[serialNumber], focusAreaId],
        };
      } else {
        return {
          ...prevState,
          [serialNumber]: prevState[serialNumber].filter(
            (id) => id !== focusAreaId
          ),
        };
      }
    });
  };


  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      {loader(showLoader)}
      <PageContainer>
        <>
          {isMobile && <WelcomeOverlayMobile />}
          {sharewithclassdialog}
          <>
            <>
              {isTeacher ? (
                <TeacherSidebar open={open} submission={submission} />
              ) : (
                !isNullOrEmpty(submission.otherDrafts) && (
                  <IndepentdentUserSidebar
                    open={open}
                    subjects={submission.otherDrafts?.map((d) => ({
                      id: d.submissionId,
                      title: d.title,
                      subject: d.subject,
                      lastseenAtTs: 1630330000,
                    }))}
                    setSelectedSubject={setSelectedSubject}
                    selectedSubject={selectedSubject}
                    groupedAndSortedData={groupedAndSortedData}
                    currentSubmissionId={submission.id}
                  />
                )
              )}
            </>
            {(isTeacher || submission.otherDrafts) && (
              <DrawerArrow
                onClick={handleDrawer}
                drawerWidth={drawerWidth}
                open={open}
              >
                <ImgContainer>
                  <ArrowImg src="img/caret-5@2x.png" open={open} />
                </ImgContainer>
              </DrawerArrow>
            )}
          </>
          <Frame1388
            mobileView={isMobile}
            desktopView={isDesktop}
            drawerWidth={drawerWidth}
            open={open}
          >
            {answersAndFeedbacks(
              isMobile,
              submission,
              setSubmission,
              methods,
              isTeacher,
              pageMode,
              labelText,
              quillRefs,
              markingCriteriaFeedback,
              smallMarkingCriteria,
              handleCheckboxChange,
              groupedFocusAreaIds,
              commentsForSelectedTab,
              newCommentSerialNumber,
              setShowResolved,
              showNewComment,
              isShowResolved,
              setFeedback,
              isFeedback,
              isFocusAreas,
              setFocusAreas,
              comments,
              newCommentFrameRef,
              share,
              smartAnnotations,
              overallComments,
              handleRequestFeedback,
              isShowSelectType,
              setShowSelectType,
              showFeedbackButtons,
              setShowFeedbackButtons,
              false,
              classesAndStudents,
              navigate,
              showStudentPopUp,
              showTeacherPopUp,
              setShowStudentPopUp,
              setShowTeacherPopUp,
              setCountWords,
            )}
          </Frame1388>
          {/* </Main> */}
        </>
        <CountZoomContainer open={open}>
          {countWords} words
        </CountZoomContainer>
      </PageContainer>

      {handleFeedbackMethodTypeDialog(
        feedbackMethodTypeDialog,
        setFeedbackMethodTypeDialog,
        handleSelectedRequestFeedback,
        flatMap(classesAndStudents, (classObj) => classObj.students),
        teachers,
        classesAndStudents
      )}
    </>
  );
}
const selectTabComments = (
  showResolved,
  isFocusAreas,
  comments,
  groupedFocusAreaIds
) => {
  if (isFocusAreas) {
    return comments.map((comment) => {
      if (comment.type !== 'FOCUS_AREA') {
        return { ...comment, isHidden: true };
      }
      const { focusAreaId, questionSerialNumber } = comment;
      const focusAreaIdsForQuestion =
        groupedFocusAreaIds[questionSerialNumber] || [];
      const isHidden = !focusAreaIdsForQuestion.includes(focusAreaId);

      return { ...comment, isHidden };
    });
  }
  if (showResolved) {
    return comments.map((comment) => {
      if (comment.type === 'FOCUS_AREA') {
        return { ...comment, isHidden: true };
      }
      return { ...comment, isHidden: false };
    });
  }
  return comments.map((comment) => {
    if (comment.type === 'FOCUS_AREA' || comment.status === 'RESOLVED') {
      return { ...comment, isHidden: true };
    }
    return { ...comment, isHidden: false };
  });
};
function loader(showLoader) {
  return (
    showLoader && (
      <Screen2>
        {' '}
        <Loader />
      </Screen2>
    )
  );
}

function handleTabUpdate(pageMode, setFeedback, setFocusAreas) {
  if (pageMode === 'DRAFT' || pageMode === 'REVISE') {
    setFeedback(false);
    setFocusAreas(true);
  } else {
    setFeedback(true);
    setFocusAreas(false);
  }
}

function createGroupedFocusAreas(submission) {
  const flattenedQuestions = flatMap(
    submission.assignment.questions,
    (question) =>
      question.focusAreaIds?.map((focusAreaId) => ({
        serialNumber: question.serialNumber,
        focusAreaId,
      }))
  );

  const groupedBySerialNumber = groupBy(flattenedQuestions, 'serialNumber');
  const grouped = Object.keys(groupedBySerialNumber).reduce(
    (grouped, serialNumber) => {
      grouped[serialNumber] = groupedBySerialNumber[serialNumber].map(
        (item) => item?.focusAreaId
      );
      return grouped;
    },
    {}
  );
  return grouped;
}

function answersAndFeedbacks(
  isMobile,
  submission,
  setSubmission,
  methods,
  isTeacher,
  pageMode,
  labelText,
  quillRefs,
  markingCriteriaFeedback,
  smallMarkingCriteria,
  handleCheckboxChange,
  groupedFocusAreaIds,
  commentsForSelectedTab,
  newCommentSerialNumber,
  setShowResolved,
  showNewComment,
  isShowResolved,
  setFeedback,
  isFeedback,
  isFocusAreas,
  setFocusAreas,
  comments,
  newCommentFrameRef,
  share,
  smartAnnotations,
  overallComments,
  handleRequestFeedback,
  isShowSelectType,
  setShowSelectType,
  showFeedbackButtons,
  setShowFeedbackButtons,
  showStatusText,
  classesAndStudents,
  navigate,
  showStudentPopUp,
  showTeacherPopUp,
  setShowStudentPopUp,
  setShowTeacherPopUp,
  setCountWords,
) {
  return (
    <Frame1386 id="content">
      
      {isTeacher && (
        <GoBackBtn onClick={() => navigate.goBack()}>
          <img className="arrowImg" src="img/arrow_left.png" />
          <img className="hoveredImg" src="icons/arrowleft.png" />
          Go Back
        </GoBackBtn>
      )}
      {createContextBar(
        submission,
        setSubmission,
        methods,
        pageMode,
        labelText,
        isShowSelectType,
        setShowSelectType,
        showFeedbackButtons,
        setShowFeedbackButtons,
        methods,
        isTeacher,
        pageMode,
        handleRequestFeedback,
        showStatusText,
        classesAndStudents,
        showStudentPopUp,
        showTeacherPopUp,
        setShowStudentPopUp,
        setShowTeacherPopUp
      )}
      <Frame1368 id="assignmentData">
        {answersFrame(
          quillRefs,
          markingCriteriaFeedback,
          smallMarkingCriteria,
          handleCheckboxChange,
          groupedFocusAreaIds,
          pageMode,
          submission,
          commentsForSelectedTab,
          overallComments,
          methods,
          setCountWords,
        )}

        {!isMobile && (
          <FeedbackFrame
            methods={methods}
            submission={submission}
            newCommentSerialNumber={newCommentSerialNumber}
            commentsForSelectedTab={commentsForSelectedTab}
            setShowResolved={setShowResolved}
            showNewComment={showNewComment}
            isShowResolved={isShowResolved}
            setFeedback={setFeedback}
            isFeedback={isFeedback}
            isFocusAreas={isFocusAreas}
            setFocusAreas={setFocusAreas}
            isTeacher={isTeacher}
            comments={comments}
            pageMode={pageMode}
            newCommentFrameRef={newCommentFrameRef}
            share={share}
            smartAnnotations={smartAnnotations}
          ></FeedbackFrame>
        )}
      </Frame1368>
    </Frame1386>
  );
}

function breadcrumbs(submission) {
  return (
    <Frame1387>
      <Frame1315>
        <Breadcrumb text={'Tasks'} link={'/#/tasks'} />
        <Breadcrumb2 assignments={submission.assignment.title} />
      </Frame1315>
    </Frame1387>
  );
}

function createContextBar(
  submission,
  setSubmission,
  methods,
  pageMode,
  labelText,
  isShowSelectType,
  setShowSelectType,
  showFeedbackButtons,
  setShowFeedbackButtons,
  methods,
  isTeacher,
  pageMode,
  handleRequestFeedback,
  showStatusText,
  classesAndStudents,
  showStudentPopUp,
  showTeacherPopUp,
  setShowStudentPopUp,
  setShowTeacherPopUp
) {
  if (submission.type === 'DOCUMENT') {
    return contextBarForPortfolioDocument(
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
      classesAndStudents,
      showStudentPopUp,
      showTeacherPopUp,
      setShowStudentPopUp,
      setShowTeacherPopUp
    );
  }

  return contextBar(submission, methods, isTeacher, pageMode, labelText);
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
export default FeedbackTeacherLaptop;
