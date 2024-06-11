import 'quill/dist/quill.bubble.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import {
  default as React,
  default as React,
  useEffect,
  useState,
  useContext,
} from 'react';
import Header from '../../Header';
import { getUserRole } from '../../../userLocalDetails';
import { flatMap, groupBy } from 'lodash';
import Loader from '../../Loader';
import { answersFrame } from '../AnswersFrame';
import Breadcrumb from '../Breadcrumb';
import Breadcrumb2 from '../Breadcrumb2';
import './FeedbackTeacherLaptop.css';
import { contextBar, contextBarForPortfolioDocument } from './contextBar';
import FeedbackFrame from './feedbackFrame';
import {
  Frame1315,
  Frame1368,
  FeedbackBody,
  Frame1386,
  Frame1387,
  Frame1388,
  Screen2,
  PageContainer,
  DrawerArrow,
  ArrowImg,
  GoBackBtn,
  ImgContainer,
  CountZoomContainer,
  ZoomContianer,
  ZoomInput,
} from './style';
import { isMobileView, isDesktopView } from '../../ReactiveRender';
import WelcomeOverlayMobile from '../../../components2/WelcomeOverlayMobile';
import TeacherSidebar from '../../TeacherSidebar';
import IndepentdentUserSidebar from '../../IndependentUser/IndepentdentUserSidebar';
import { FeedbackContext } from '../FeedbacksRoot/FeedbackContext';

import { useHistory, useLocation } from 'react-router-dom';
import FeedbackTypeDialog from '../../Shared/Dialogs/feedbackType';
import { createRequestFeddbackType } from '../../../service';
import { isNullOrEmpty } from '../../../utils/arrays';
import ResponsiveFooter from '../../ResponsiveFooter';
import FeedbackRightSidebar from '../FeedbackRightSidebar';
import FeedbackHeader from '../FeedbackHeader';
import FeedbackQuestionSlider from '../FeedbackQuestionSlider';
import FeedbackRightSideSlidingTabs from '../FeedbackRightSideSlidingTabs';
import CriteriaAndOverallFeedback from '../CriteriaAndOverallFeedback';
import FocusAreasLabel from '../../../components2/FocusAreasLabel';

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
    smallMarkingCriteria,
    isTeacher,
    showLoader,
    quillRefs,
    pageMode,
    newCommentFrameRef,
    methods,
    comments,
    submission,
    setSubmission,
    share,
    sharewithclassdialog,
    selectedRange,
    classesAndStudents,
    teachers,
    selectedComment,
  } = props;
  const isMobile = isMobileView();
  const isDesktop = isDesktopView();
  const [openRightPanel, SetOpenRightPanel] = React.useState('');
  const [QuestionIndex, setQuestionIndex] = React.useState(0);
  const questions = submission.assignment.questions
  const [isFeedback, setFeedback] = React.useState( !(questions[QuestionIndex]?.focusAreas && questions[QuestionIndex]?.focusAreas.length !== 0));
  const [isFocusAreas, setFocusAreas] = React.useState(
    questions[QuestionIndex]?.focusAreas && questions[QuestionIndex]?.focusAreas.length !== 0
  );
  const [groupedFocusAreaIds, setGroupedFocusAreaIds] = React.useState(() =>
    createGroupedFocusAreas(submission)
  );
  const [openLeftPanel, setOpenLefPanel] = useState(false);
  const [groupedAndSortedData, setGroupedAndSortedData] = React.useState({});
  const [selectedSubject, setSelectedSubject] = React.useState();
  const drawerWidth = 219;
  const { countWords, showNewComment, newCommentSerialNumber } =
    useContext(FeedbackContext);

  React.useEffect(() => {
    let dataToUse = submission.otherDrafts || [];

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
  const location = useLocation();

  const [showStudentPopUp, setShowStudentPopUp] = React.useState(false);
  const [showTeacherPopUp, setShowTeacherPopUp] = React.useState(false);

  const [isShowResolved, setShowResolved] = useState(false);

  const [isShowSelectType, setShowSelectType] = useState(false);
  const [showFeedbackButtons, setShowFeedbackButtons] = useState(false);
  const [feedbackMethodTypeDialog, setFeedbackMethodTypeDialog] = useState(-1);
  const [editorFontSize, setEditorFontSize] = useState(100);

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
      setSubmission((old) => ({
        ...old,
        status: response.status,
        reviewerId: response.reviewerId,
        reviewerName: response.reviewerName,
        submittedAt: response.submittedAt,
        feedbackRequestType: response.feedbackRequestType,
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

  React.useEffect(() => {
    const documentsRoute = location.pathname.includes('documents');
    const submissionsRoute = location.pathname.includes('submissions');
    const documentReviewRoute = location.pathname.includes('documentsReview');
    const role = getUserRole();

    const isOpen =
      (role === 'TEACHER' && submissionsRoute) ||
      (role === 'STUDENT' && documentsRoute);

    const isStudentReviewRoute = documentReviewRoute && role === 'STUDENT';

    setOpenLefPanel(!isStudentReviewRoute && isOpen);
  }, [location.pathname]);

  const handleCheckboxChange = (serialNumber, focusAreaId) => {
    const isChecked = groupedFocusAreaIds[serialNumber].includes(focusAreaId);
    setGroupedFocusAreaIds((prevState) => {
      if (!isChecked) {
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

  function handleToggleUpdate() {
    setFeedback((prev) => !prev);
    setFocusAreas((prev) => !prev);
    methods.setShowNewComment(false);
  }

  const handleDrawer = () => {
    setOpenLefPanel(!openLeftPanel);
  };

  return (
    <>
      {loader(showLoader)}
      <PageContainer>
        <>
          {isMobile && <WelcomeOverlayMobile />}
          {sharewithclassdialog}
          {(submission.otherDrafts || submission.studentsSubmissions) &&
            sidebar()}
          <Frame1388
            mobileView={isMobile}
            desktopView={isDesktop}
            drawerWidth={drawerWidth}
            open={!location.pathname.includes('/submission') && openLeftPanel}
          >
            {answersAndFeedbacks(
              isMobile,
              submission,
              setSubmission,
              methods,
              isTeacher,
              pageMode,
              quillRefs,
              smallMarkingCriteria,
              handleCheckboxChange,
              groupedFocusAreaIds,
              commentsForSelectedTab,
              setShowResolved,
              isShowResolved,
              setFeedback,
              isFeedback,
              isFocusAreas,
              setFocusAreas,
              comments,
              newCommentFrameRef,
              share,
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
              editorFontSize,
              selectedComment,
              selectedRange,
              handleToggleUpdate,
              openRightPanel, 
              SetOpenRightPanel,
              QuestionIndex, 
              setQuestionIndex,
              openLeftPanel
            )}
          </Frame1388>
        </>
        <CountZoomContainer open={openLeftPanel} mobileView={isMobile}>
          <div>
            {countWords} {countWords === 1 ? 'word' : 'words'}
          </div>
          <ZoomContianer>
            Zoom
            <ZoomInput
              name="zoom"
              type="range"
              min="50"
              max="150"
              value={editorFontSize}
              onChange={(e) => setEditorFontSize(e.target.value)}
            />
            {editorFontSize}%
          </ZoomContianer>
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
      <>{isMobile && <ResponsiveFooter />}</>
    </>
  );

  function sidebar() {
    return (
      <>
        {!isNullOrEmpty(submission.otherDrafts) && (
          <IndepentdentUserSidebar
            open={openLeftPanel}
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
        )}

        {((isTeacher && (pageMode !== 'CLOSED' || pageMode !== 'REVIEW')) ||
          submission.otherDrafts ||
          submission.studentsSubmissions) && (
          <DrawerArrow
            onClick={handleDrawer}
            drawerWidth={drawerWidth}
            open={openLeftPanel}
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
        )}

        {((isTeacher && pageMode !== 'CLOSED' && pageMode !== 'REVIEW') ||
          submission.otherDrafts) && (
          <DrawerArrow
            onClick={handleDrawer}
            drawerWidth={drawerWidth}
            open={openLeftPanel}
          >
            <ImgContainer>
              <ArrowImg src="img/anglerightgray3.svg" open={openLeftPanel} />
            </ImgContainer>
          </DrawerArrow>
        )}
      </>
    );
  }
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
  quillRefs,
  smallMarkingCriteria,
  handleCheckboxChange,
  groupedFocusAreaIds,
  commentsForSelectedTab,
  setShowResolved,
  isShowResolved,
  setFeedback,
  isFeedback,
  isFocusAreas,
  setFocusAreas,
  comments,
  newCommentFrameRef,
  share,
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
  editorFontSize,
  selectedComment,
  selectedRange,
  handleToggleUpdate,
  openRightPanel, 
  SetOpenRightPanel,
  QuestionIndex, 
  setQuestionIndex,
  openLeftPanel
) {

  const handleRightSidebarClick = (tab) => {
    SetOpenRightPanel(tab);
  };

  const question = submission.assignment.questions[QuestionIndex];

  return (
    <Frame1386 id="content">
      {/* {createContextBar(
        submission,
        setSubmission,
        methods,
        pageMode,
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
      )} */}
      <FeedbackHeader
        submission={submission}
        setSubmission={setSubmission}
        pageMode={pageMode}
        FeedbackMethodType={FeedbackMethodType}
        handleRequestFeedback={handleRequestFeedback}
        allClasses={classesAndStudents}
        showFeedbackButtons={showFeedbackButtons}
        setShowFeedbackButtons={setShowFeedbackButtons}
        showStudentPopUp={showStudentPopUp}
        setShowStudentPopUp={setShowStudentPopUp}
        showTeacherPopUp={showTeacherPopUp}
        setShowTeacherPopUp={setShowTeacherPopUp}
        setFeedback={setFeedback}
        setFocusAreas={setFocusAreas}
        isFeedback={isFeedback}
        isFocusAreas={isFocusAreas}
        handleToggleUpdate={handleToggleUpdate}
        setShowResolved={setShowResolved}
        isShowResolved={isShowResolved}
        commentsForSelectedTab={commentsForSelectedTab}
        isLeftSidebarOpen={openLeftPanel}
      />
      {submission.type === 'SUBMISSION' &&
        submission.assignment.questions.length !== 0 && (
          <FeedbackQuestionSlider
            setQuestionIndex={setQuestionIndex}
            QuestionIndex={QuestionIndex}
            questions={submission.assignment.questions}
            setFeedback={setFeedback}
            setFocusAreas={setFocusAreas}
          />
        )}
      <FeedbackBody>
        {isFocusAreas && (
          <FocusAreasLabel
            handleCheckboxChange={handleCheckboxChange}
            groupedFocusAreaIds={groupedFocusAreaIds}
            serialNumber={question?.serialNumber}
            focusAreas={question?.focusAreas}
          />
        )}
        <Frame1368 id="assignmentData">
          {answersFrame(
            quillRefs,
            smallMarkingCriteria,
            handleCheckboxChange,
            groupedFocusAreaIds,
            pageMode,
            submission,
            setSubmission,
            commentsForSelectedTab,
            methods,
            editorFontSize,
            selectedComment,
            selectedRange,
            openRightPanel,
            QuestionIndex,
            newCommentFrameRef,
            share,
            isFeedback,
            isFocusAreas
          )}

          {/* {!isMobile && (
            <FeedbackFrame
              methods={methods}
              submission={submission}
              commentsForSelectedTab={commentsForSelectedTab}
              setShowResolved={setShowResolved}
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
            ></FeedbackFrame>
          )} */}
        </Frame1368>
          <>
            <FeedbackRightSideSlidingTabs
              handleRightSidebarClick={handleRightSidebarClick}
              openRightPanel={openRightPanel}
              submission={submission}
              QuestionIndex={QuestionIndex}
              methods={methods}
              setQuestionIndex={setQuestionIndex}
              pageMode={pageMode}
            />
            <CriteriaAndOverallFeedback
              handleClick={handleRightSidebarClick}
              openRightPanel={openRightPanel}
              QuestionIndex={QuestionIndex}
              addOverallFeedback={methods.addOverallFeedback}
              updateOverAllFeedback={methods.updateOverAllFeedback}
              handleMarkingCriteriaLevelFeedback={
                methods.handleMarkingCriteriaLevelFeedback
              }
              handleStrengthsTargetsFeedback={
                methods.handleStrengthsTargetsFeedback
              }
              pageMode={pageMode}
              submission={submission}
            />
            <FeedbackRightSidebar
              handleClick={handleRightSidebarClick}
              openRightPanel={openRightPanel}
              pageMode={pageMode}
              isTeacher={isTeacher}
              submission={submission}
            />
          </>
      </FeedbackBody>
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
      pageMode,
      (feedbackMethodType = FeedbackMethodType),
      handleRequestFeedback,
      true,
      classesAndStudents,
      showStudentPopUp,
      showTeacherPopUp,
      setShowStudentPopUp,
      setShowTeacherPopUp,
      isTeacher
    );
  }

  return contextBar(submission, methods, isTeacher, pageMode);
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
