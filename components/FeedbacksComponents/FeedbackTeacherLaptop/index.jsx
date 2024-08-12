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
import { getUserRole } from '../../../userLocalDetails';
import { flatMap, groupBy } from 'lodash';
import Loader from '../../Loader';
import { answersFrame } from '../AnswersFrame';
import {Footer} from './Footer';
import './FeedbackTeacherLaptop.css';
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
  PoupButtons,
  PoupDialogContent,
} from './style';
import { isMobileView, isDesktopView } from '../../ReactiveRender';
import WelcomeOverlayMobile from '../../../components2/WelcomeOverlayMobile';
import TeacherSidebar from '../../TeacherSidebar';
import IndepentdentUserSidebar from '../../IndependentUser/IndepentdentUserSidebar';
import { FeedbackContext } from '../FeedbacksRoot/FeedbackContext';

import { useHistory, useLocation } from 'react-router-dom';
import FeedbackTypeDialog from '../../Shared/Dialogs/feedbackType';
import { createRequestFeddbackType, deleteSubmissionById, updateAssignment } from '../../../service';
import { isNullOrEmpty } from '../../../utils/arrays';
import ResponsiveFooter from '../../ResponsiveFooter';
import FeedbackRightSidebar from '../FeedbackRightSidebar';
import FeedbackHeader from '../FeedbackHeader';
import FeedbackQuestionSlider from '../FeedbackQuestionSlider';
import FeedbackRightSideSlidingTabs from '../FeedbackRightSideSlidingTabs';
import CriteriaAndOverallFeedback from '../CriteriaAndOverallFeedback';
import FocusAreasLabel from '../../../components2/FocusAreasLabel';
import { isShowMarkingCriteriaSidebar } from '../FeedbacksRoot/rules';
import QuestionFieldSelection from '../../TheoryQuestionFrame/QuestionFieldSelection';
import CommentBankDialog from '../../Shared/Dialogs/commentBank';
import { Dialog, DialogActions, DialogContent } from '@mui/material';
import { toast } from 'react-toastify';
import Toast from '../../Toast';
import { CancelButton, ProceedButton } from '../../GeneralPopup/style';

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
    overallComments,
    markingCriteriaFeedback,
    otherDrafts,
    setOtherDrafts,
    groupedFocusAreaIds,
    feedbanksData,
    showFeedbackBanksPopUp,
    setFeedbackBanksPopUp,
    openRightPanel,
    SetOpenRightPanel,
    showLottie,
  } = props;
  console.log('submission', submission);

  
  const isMobile = isMobileView();
  const isDesktop = isDesktopView();
  const [QuestionIndex, setQuestionIndex] = React.useState(0);
  const questions = submission?.assignment.questions;
  const [isFeedback, setFeedback] = React.useState(
    !(questions && 
      questions[QuestionIndex]?.focusAreas &&
      questions[QuestionIndex]?.focusAreas.length !== 0
    )
  );
  const [isFocusAreas, setFocusAreas] = React.useState(
    questions &&
      questions[QuestionIndex]?.focusAreas &&
      questions[QuestionIndex]?.focusAreas.length !== 0
  );
  
  const [openLeftPanel, setOpenLefPanel] = useState(false);
  const [groupedAndSortedData, setGroupedAndSortedData] = React.useState({});
  const [selectedSubject, setSelectedSubject] = React.useState();
  const drawerWidth = 219;
  const { showNewComment, newCommentSerialNumber } =
    useContext(FeedbackContext);
  const allCommentBanks = feedbanksData?._embedded?.commentbanks;
  const currentCommentBankId = submission?.assignment?.questions[QuestionIndex]?.commentBankId
  const selectedCommentBankIndex = allCommentBanks?.findIndex(item => item.id === currentCommentBankId);
  const [openCommentBankPreviewDialog, setCommentBankPreviewDialog] = React.useState(false);
  const [currentCommentBank, setCurrentCommentBank] = React.useState(allCommentBanks.find(
    (commentBank) => commentBank.id === currentCommentBankId
  ));

  useEffect(() => {
    SetOpenRightPanel(isShowMarkingCriteriaSidebar(overallComments, markingCriteriaFeedback) ? 'tab2' : null)
  },[])

  useEffect(() => {
    if (showNewComment) {
      setFeedback(true);
      setFocusAreas(false);
    }
  }, [showNewComment]);
  React.useEffect(() => {
    let dataToUse = otherDrafts || [];

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
  }, [otherDrafts]);
  const navigate = useHistory();
  const location = useLocation();

  const [showStudentPopUp, setShowStudentPopUp] = React.useState(false);
  const [showTeacherPopUp, setShowTeacherPopUp] = React.useState(false);
  const [isShowResolved, setShowResolved] = useState(false);
  const [isShowSelectType, setShowSelectType] = useState(false);
  const [showFeedbackButtons, setShowFeedbackButtons] = useState(false);
  const [feedbackMethodTypeDialog, setFeedbackMethodTypeDialog] = useState(-1);
  const [editorFontSize, setEditorFontSize] = useState(100);
  const [changedCommentBankId, setChangedCommentBankId] = useState();


  const handleRequestFeedback = async (index) => {
    await setFeedbackMethodTypeDialog(-1);
    setFeedbackMethodTypeDialog(index);
  };


  function handleCommentBankPreview(commentBankId) {
    let commentBank = allCommentBanks.find(
      (commentBank) => commentBank.id === commentBankId
    );

    setCurrentCommentBank(commentBank);
    setCommentBankPreviewDialog(commentBank?.smartComments?.length > 0);
  }


  
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
    const documentReviewRoute = location.pathname.includes('documentsReview');
    const role = getUserRole();

    const isStudentReviewRoute = documentReviewRoute && role === 'STUDENT';

    setOpenLefPanel(!isStudentReviewRoute && documentsRoute);
  }, [location.pathname]);




    const getNextQuestionId = (currentId) => {
      const currentIndex = otherDrafts.findIndex(
        (question) => question.submissionId === currentId
      );
      const nextIndex =
        currentIndex + 1 < otherDrafts.length ? currentIndex + 1 : 0;
      return otherDrafts[nextIndex]?.submissionId;
    };

    const deleteQuestionFunction = (deleteQuestionId) => {
      deleteSubmissionById(deleteQuestionId).then(() => {
        if (deleteQuestionId === submission.id) {
          const nextId = getNextQuestionId(deleteQuestionId);
          navigate.push(`/documents/${nextId}`);
        } else {
          const filteredOtherDrafts = otherDrafts.filter(
            (question) => question.submissionId !== deleteQuestionId
          );
          setOtherDrafts(filteredOtherDrafts);
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

  const updateCommentBank = (serialNumber, item) => {
    console.log('first',serialNumber, item);
    setChangedCommentBankId(item.id);
  }

  const handleClose = () => {
    setFeedbackBanksPopUp(false);
    setChangedCommentBankId(null);
  };

  const handleUpdateCommentBankSubmit = () => {
    setFeedbackBanksPopUp(false);
    const updatedAssignment = {
      ...submission?.assignment,
      questions: submission.assignment.questions.map((question, index) =>
        index === QuestionIndex
          ? { ...question, commentBankId: changedCommentBankId }
          : question
      ),
    };
    setChangedCommentBankId(null);
    updateAssignment(submission?.assignment.id, updatedAssignment)
    .then((res) => {
      if (res) {
        setSubmission((old) => ({
          ...old,
          assignment: updatedAssignment,
        }));
        toast(<Toast message={'Comment bank changed'} />);
    }})
    .catch((error) => {
      toast(<Toast message={'Something went wrong'} />);
    });

  }

  return (
    <>

     {
        showFeedbackBanksPopUp && (
        <Dialog fullWidth={true} open={showFeedbackBanksPopUp} onClose={handleClose}>
        <PoupDialogContent>
        <QuestionFieldSelection 
           label='Comment Bank'
           items = {allCommentBanks}
           tooltipText = "Select a comment bank to save you time when reviewing a student's work. After highlighting a section of a student's response, simply click one of the suggested comments from the drop-down selection"
          onItemSelected = {updateCommentBank}
          currentFieldId ={currentCommentBankId}
          link = {'/commentbanks'}
          linkText ='Go to comment banks'
          selectedIndex={selectedCommentBankIndex}
          serialNumber={QuestionIndex}
          handlePreview={handleCommentBankPreview}
          />
        </PoupDialogContent>
        <PoupButtons>
        <ProceedButton onClick={handleClose}> Cancel</ProceedButton>
          <CancelButton onClick={handleUpdateCommentBankSubmit}>Change</CancelButton>
        </PoupButtons>
      </Dialog>)
      }
      {loader(showLoader)}
      <PageContainer>
        <>
          {sharewithclassdialog}
          {(otherDrafts || submission?.studentsSubmissions) && sidebar()}
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
              openLeftPanel,
              setOtherDrafts,
              showLottie
            )}
          </Frame1388>
        </>
        <Footer 
          openLeftPanel={openLeftPanel} 
          isMobile={isMobile} 
          editorFontSize={editorFontSize} 
          setEditorFontSize={setEditorFontSize}
          answers={submission?.answers} 
          questionIndex={QuestionIndex} 
        />
      </PageContainer>
      {handleFeedbackMethodTypeDialog(
        feedbackMethodTypeDialog,
        setFeedbackMethodTypeDialog,
        handleSelectedRequestFeedback,
        flatMap(classesAndStudents, (classObj) => classObj.students),
        teachers,
        classesAndStudents
      )}
      {openCommentBankPreviewDialog && (
        <CommentBankDialog
          setCommentBankPreviewDialog={setCommentBankPreviewDialog}
          commentBank={currentCommentBank}
        />
      )}
      <>{isMobile && <ResponsiveFooter />}</>
    </>
  );

  function sidebar() {
    return (
      <>
        {!isNullOrEmpty(otherDrafts) && (
          <IndepentdentUserSidebar
            open={openLeftPanel}
            subjects={otherDrafts?.map((d) => ({
              id: d.submissionId,
              title: d.title,
              subject: d.subject,
              lastseenAtTs: 1630330000,
            }))}
            setSelectedSubject={setSelectedSubject}
            selectedSubject={selectedSubject}
            groupedAndSortedData={groupedAndSortedData}
            currentSubmissionId={submission?.id}
            deleteQuestionFunction={deleteQuestionFunction}
          />
        )}

        {((isTeacher && (pageMode !== 'CLOSED' || pageMode !== 'REVIEW')) ||
          otherDrafts ||
          submission?.studentsSubmissions) && (
          <DrawerArrow
            onClick={handleDrawer}
            drawerWidth={drawerWidth}
            open={openLeftPanel}
            subjects={otherDrafts?.map((d) => ({
              id: d.submissionId,
              title: d.title,
              subject: d.subject,
              lastseenAtTs: 1630330000,
            }))}
            setSelectedSubject={setSelectedSubject}
            selectedSubject={selectedSubject}
            groupedAndSortedData={groupedAndSortedData}
            currentSubmissionId={submission?.id}
          />
        )}

        {((isTeacher && pageMode !== 'CLOSED' && pageMode !== 'REVIEW') ||
          otherDrafts.length > 0) && (
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
    return comments?.map((comment) => {
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
  return comments?.map((comment) => {
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


function answersAndFeedbacks(
  isMobile,
  submission,
  setSubmission,
  methods,
  isTeacher,
  pageMode,
  quillRefs,
  smallMarkingCriteria,
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
  openLeftPanel,
  setOtherDrafts,
  showLottie
) {
  const handleRightSidebarClick = (tab) => {
    SetOpenRightPanel(tab);
  };

  const focusAreaComments = comments?.filter(
    (comment) => comment.type === 'FOCUS_AREA'
  );
  
  const focusAreaCommentIds = focusAreaComments
    ?.filter((f) => f.questionSerialNumber === QuestionIndex + 1)
    .map((comment) => comment.focusAreaId);

  const question = submission?.assignment.questions[QuestionIndex];

  const matchingFocusAreas = question?.focusAreas;
  

  return (
    <Frame1386 id="content">
      
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
      {submission?.type === 'SUBMISSION' &&
        submission?.assignment.questions.length !== 0 && (
          <FeedbackQuestionSlider
            setQuestionIndex={setQuestionIndex}
            QuestionIndex={QuestionIndex}
            questions={submission?.assignment.questions}
            setFeedback={setFeedback}
            setFocusAreas={setFocusAreas}
          />
        )}
      <FeedbackBody>
        {isFocusAreas && (
          <FocusAreasLabel
            groupedFocusAreaIds={groupedFocusAreaIds}
            serialNumber={question?.serialNumber}
            focusAreas={matchingFocusAreas}
          />
        )}
        <Frame1368 id="assignmentData">
          {answersFrame(
            quillRefs,
            smallMarkingCriteria,
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
            isFocusAreas,
            openLeftPanel,
            setOtherDrafts
          )}
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
            showLottie={showLottie}
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
            
            pageMode={pageMode}
            submission={submission}
          />
          <FeedbackRightSidebar
            handleClick={handleRightSidebarClick}
            openRightPanel={openRightPanel}
            pageMode={pageMode}
            isTeacher={isTeacher}
            submission={submission}
            QuestionIndex={QuestionIndex}
          />
        </>
      </FeedbackBody>
    </Frame1386>
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

export default FeedbackTeacherLaptop;
