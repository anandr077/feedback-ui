import React, { useState, useEffect, useContext } from 'react';
import {
  FeedbackHeaderContainer,
  LeftSection,
  RightSection,
  ToggleContainer,
  ToggleLavel,
  ToggleInput,
  ToggleBtn,
  ToggleSwitchLabels,
  ArrowBtn,
  TaskTitle,
  Select,
  DocumentSubmitBtnContainer,
  AwaitingFeedbackTextAlert,
  CancelBtn,
  SubjectTaskTypeContainer,
  STTitle,
  STDetails,
  UpdateButton,
  DocumentSubmitCancelBtnContainer,
  Label16pxSmall,
  Icon24,
  JeddAiAnimatedTextContainer,
  JeddAiImageForAnimation,
} from './style';
import ResubmitBtn from '../../../static/img/Resubmit.svg';
import ActiveCommentIcon from '../../../static/img/purplesinglecomment.svg';
import CommentIcon from '../../../static/img/graysinglecomment.svg';
import ActiveFocusIcon from '../../../static/img/purplehighlight.svg';
import FocusIcon from '../../../static/img/grayhighlight.svg';
import ArrowLeft from '../../../static/img/arrowleftgray.svg';
import ArrowRight from '../../../static/img/arrowrightgray.svg';
import UpdateIcon from '../../../static/img/update15purple.svg';
import { getUserRole } from '../../../userLocalDetails';
import RoundedBorderSubmitBtn from '../../../components2/Buttons/RoundedBorderSubmitBtn';
import SelectReviewType from './SelectReviewType';
import { cancelFeedbackRequest } from '../../../service';
import { useHistory, useLocation } from 'react-router-dom';
import { isShowCommentsAndFocusAreasTab } from '../FeedbacksRoot/rules';
import {
  isShowCommentsAndFocusAreasTab,
  isShowStudentDropdownInHeader,
  isShowTitleInHeader,
  isShowSubjectTaskType,
} from '../FeedbacksRoot/rules';
import PopupDialogueBox from '../../../components2/PopupDialogueBox';
import DropdownWithRoundedTick from '../../../components2/DropdownWithRoundedTick';
import ToggleSwitchWithTwoOptions from '../../../components2/ToggleSwitchWithTwoOptions';
import ToggleSwitchWithOneOption from '../../../components2/ToggleSwitchWithOneOption';
import { FeedbackContext } from '../FeedbacksRoot/FeedbackContext';
import { toast } from 'react-toastify';
import Toast from '../../Toast';
import { isDisableButton, isShowJeddAiIcon, isShowReassignBtn } from './rules';
import PurpleBorderNoBackgroundBtn from '../../../components2/Buttons/PurpleBorderNoBackgroundBtn';


const FeedbackHeader = ({
  submission,
  setSubmission,
  pageMode,
  FeedbackMethodType = [],
  handleRequestFeedback,
  allClasses,
  showFeedbackButtons,
  setShowFeedbackButtons,
  showStudentPopUp,
  setShowStudentPopUp,
  showTeacherPopUp,
  setShowTeacherPopUp,
  setFeedback,
  isFeedback,
  isFocusAreas,
  setFocusAreas,
  handleToggleUpdate,
  setShowResolved,
  isShowResolved,
  commentsForSelectedTab,
  isLeftSidebarOpen
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isTeacher = getUserRole() === 'TEACHER';
  const [isShowSelectType, setShowSelectType] = useState();
  const [openEditDialogue, setOpenEditDialogue] = useState();
  const { methods, isResetEditorTextSelection, isUpdatingHandWrittenFiles } = useContext(FeedbackContext);
  const history = useHistory();
  const location = useLocation();

  const allAssignedStudents = allClasses
  ?.find(cls => submission?.classId === cls?.id)
  ?.students ?? [];
  const studentsList = submission?.studentsSubmissions;
  const studentsWithoutSubmission = allAssignedStudents.filter(
    student => !studentsList?.some(submittedStudent => submittedStudent?.studentId === student?.id)
  );


  useEffect(() => {
    const submissionId = location.pathname.split('/').pop();
    const newIndex = studentsList?.findIndex(
      (student) => student.submissionId === submissionId
    );
    if (newIndex !== -1) {
      setSelectedIndex(newIndex);
    }
  }, [location, studentsList]);

  const handlePrevious = () => {
    isResetEditorTextSelection();
    setSelectedIndex((prevIndex) => {
      const newIndex = prevIndex >= studentsList.length - 1 ? 0 : prevIndex + 1;
      handleQuestionClick(newIndex);
      return newIndex;
    });
  };

  const handleNext = () => {
    isResetEditorTextSelection();
    setSelectedIndex((prevIndex) => {
      const newIndex = prevIndex <= 0 ? studentsList.length - 1 : prevIndex - 1;
      handleQuestionClick(newIndex);
      return newIndex;
    });
  };

  const handleQuestionClick = (index) => {
    isResetEditorTextSelection();
    setSelectedIndex(index);
    const newUrl = `/submissions/${studentsList[index]?.submissionId}`;
    history.push(newUrl);
  };

  return (
    <FeedbackHeaderContainer>
      <LeftSection
        moveToRight={isLeftSidebarOpen && submission?.type === 'DOCUMENT'}
      >
        {isShowStudentDropdownInHeader(
          isTeacher,
          submission?.type,
          pageMode
        ) && (
          <>
            <ArrowBtn onClick={handlePrevious}>
              <img src={ArrowLeft} alt="Left" />
            </ArrowBtn>
            <DropdownWithRoundedTick
              firstOptionTitle="Submitted"
              firstOptions={studentsList}
              secondOptionTitle="Not Submitted"
              secondOptions={studentsWithoutSubmission}
              selectedId={submission?.id}
              selectedIndex={selectedIndex}
              onChange={handleQuestionClick}
            />
            <ArrowBtn onClick={handleNext}>
              <img src={ArrowRight} alt="Right" />
            </ArrowBtn>
          </>
        )}
        {isShowTitleInHeader(submission?.type, getUserRole()) && (
          <TaskTitle>{submission?.assignment?.title}</TaskTitle>
        )}
        {isShowSubjectTaskType(submission?.type) && (
          <SubjectTaskTypeContainer>
            {submission?.assignment.subject && (
              <>
                <div>
                  <STTitle>Subject:</STTitle>
                  <STDetails>{submission?.assignment.subject}</STDetails>
                </div>
                <span>|</span>
              </>
            )}
            {submission?.documentType && (
              <>
                <div>
                  <STTitle>Task Type:</STTitle>
                  <STDetails>{submission?.documentType}</STDetails>
                </div>
              </>
            )}
            {pageMode === 'DRAFT' && (
              <>
                <span>|</span>
                <UpdateButton onClick={() => setOpenEditDialogue(true)}>
                  <img src={UpdateIcon} />
                  Update
                </UpdateButton>
              </>
            )}
          </SubjectTaskTypeContainer>
        )}
      </LeftSection>

      <RightSection isDisabled={isUpdatingHandWrittenFiles}>
        {showResolvedToggle(setShowResolved)(
          commentsForSelectedTab,
          isFeedback,
          isShowResolved,
          handleShowResolvedToggle
        )}
        {isShowCommentsAndFocusAreasTab(pageMode, submission?.type) && (
          <ToggleSwitchWithTwoOptions
            text1={'Comments'}
            text2={'Self-assessment Areas'}
            icon1={CommentIcon}
            icon1Active={ActiveCommentIcon}
            icon2={FocusIcon}
            icon2Active={ActiveFocusIcon}
            onChangeFn={handleToggleUpdate}
            isChecked={isFocusAreas}
          />
        )}
        {isShowReassignBtn(isTeacher, pageMode, submission?.type) && (
          <PurpleBorderNoBackgroundBtn 
            leftIcon={ResubmitBtn}
            text={"Reassign Task"}
            onclick={() =>
              methods.showSubmitPopuphandler('RequestResubmission')
            }
          />
        )}
        {submission?.type === 'DOCUMENT'
          ? submitButtonOnDocument(
              isTeacher,
              setShowSelectType,
              methods,
              submission,
              setSubmission,
              pageMode,
              isShowSelectType,
              (FeedbackMethodType = []),
              handleRequestFeedback,
              allClasses,
              showFeedbackButtons,
              setShowFeedbackButtons,
              showStudentPopUp,
              setShowStudentPopUp,
              showTeacherPopUp,
              setShowTeacherPopUp
            )
          : submitButton(methods, pageMode, submission, isTeacher)}
      </RightSection>
      {openEditDialogue && (
        <PopupDialogueBox
          open={openEditDialogue}
          close={() => setOpenEditDialogue(false)}
          submission={submission}
          setSubmission={setSubmission}
        />
      )}
    </FeedbackHeaderContainer>
  );
};

export default FeedbackHeader;

function submitButtonOnDocument(
  isTeacher,
  setShowSelectType,
  methods,
  submission,
  setSubmission,
  pageMode,
  isShowSelectType,
  FeedbackMethodType = [],
  handleRequestFeedback,
  allClasses,
  showFeedbackButtons,
  setShowFeedbackButtons,
  showStudentPopUp,
  setShowStudentPopUp,
  showTeacherPopUp,
  setShowTeacherPopUp
) {
  
  if (pageMode === 'DRAFT') {
    return (
      <>
        <SelectReviewType
          submission={submission}
          setSubmission={setSubmission}
          methods={methods}
          feedbackMethodType={FeedbackMethodType}
          isShowSelectType={isShowSelectType}
          setShowSelectType={setShowSelectType}
          handleRequestFeedback={handleRequestFeedback}
          allClasses={allClasses}
          showStudentPopUp={showStudentPopUp}
          showTeacherPopUp={showTeacherPopUp}
          setShowStudentPopUp={setShowStudentPopUp}
          setShowTeacherPopUp={setShowTeacherPopUp}
        />
        <RoundedBorderSubmitBtn
          leftIcon={isShowJeddAiIcon(isTeacher) && '/img/ai.svg'}
          text={isTeacher ? 'Use JeddAI' : 'Request Feedback'}
          onClickFn={
            isTeacher
              ? (event) => {
                  event.stopPropagation();
                  methods.setShowJeddAIFeedbackTypeSelectionPopUp(true);
                }
              : (event) => {
                  event.stopPropagation();
                  setShowSelectType(true);
                }
          }
          isDisabled={isDisableButton(submission?.answers)}
        />
      </>
    );
  }
  if (pageMode === 'REVIEW') {
    return (
      <RoundedBorderSubmitBtn
        text={'Submit'}
        onClickFn={() => methods.showSubmitPopuphandler('SubmitReview')}
      />
    );
  }

  if (pageMode === 'CLOSED' && submission?.status === 'SUBMITTED') {
    return (
      <DocumentSubmitCancelBtnContainer>
        <AwaitingFeedbackTextAlert>
          {<img src="/img/message24.svg"></img>}
          <p>Your work is currently awaiting feedback</p>
        </AwaitingFeedbackTextAlert>
        <CancelBtn
          onClick={() =>
            handleCancelFeedbackRequest(
              setShowFeedbackButtons,
              submission,
              setSubmission
            )
          }
        >
          <img src="img/white-cross12.svg" />
          Cancel Request
        </CancelBtn>
      </DocumentSubmitCancelBtnContainer>
    );
  }

  if (pageMode === 'CLOSED' && submission?.status === 'FEEDBACK_ACCEPTED') {
    if (submission?.feedbackRequestType === 'JEDDAI') {
      return (
        <JeddAiAnimatedTextContainer>
          {<JeddAiImageForAnimation src="/img/jeddleaiIcon.svg" />}
          <Label16pxSmall>
            <div>JeddAI is working on your feedback</div>
            
          </Label16pxSmall>
        </JeddAiAnimatedTextContainer>
      );
    }
    return (
      <DocumentSubmitBtnContainer>
        {<img src="/img/message24.svg" />}
        <p>Someone is working on your feedback</p>
      </DocumentSubmitBtnContainer>
    );
  }

  if (submission?.status === 'REVIEWED') {
    if (submission?.feedbackRequestType === 'JEDDAI') {
      return (
        <DocumentSubmitBtnContainer>
          {<Icon24 src="/img/jeddleaiIcon.svg" />}
          <p>JeddAI has marked your work</p>
        </DocumentSubmitBtnContainer>
      );
    }
    return (
      <DocumentSubmitBtnContainer>
        {<img src="/img/message24.svg" />}
        <p>Your feedback is ready to review</p>
      </DocumentSubmitBtnContainer>
    );
  }
  return <></>;
}

function submitButton(methods, pageMode, submission, isTeacher) {
  if (pageMode === 'DRAFT') {
    return (
      <RoundedBorderSubmitBtn
        text={'Submit Task'}
        onClickFn={() => methods.checkFocusAreas()}
      />
    );
  }

  if (pageMode === 'REVIEW') {
    if (isTeacher) {
      return (
        <RoundedBorderSubmitBtn
          text={'Submit Feedback'}
          onClickFn={() => methods.showSubmitPopuphandler('SubmitReview')}
        />
      );
    } else {
      return (
        <RoundedBorderSubmitBtn
          text={'Submit Feedback'}
          onClickFn={() => methods.showSubmitPopuphandler('SubmitReview')}
        />
      );
    }
  }

  if (pageMode === 'REVISE') {
    if (submission?.status === 'RESUBMISSION_REQUESTED') {
      return (
        <RoundedBorderSubmitBtn
          text={'Get Feedback'}
          onClickFn={() => methods.showSubmitPopuphandler('SubmitForReview')}
        />
      );
    }
    return (
      <RoundedBorderSubmitBtn
        text={'Mark Complete'}
        onClickFn={() => methods.showSubmitPopuphandler('CloseSubmission')}
      />
    );
  }

  if (pageMode === 'CLOSED') {
    return (
      <RoundedBorderSubmitBtn
        leftIcon={'/img/downloadPDF.svg'}
        text={'Download'}
        onClickFn={methods.downloadPDF}
      />
    );
  }

  return <></>;
}

function handleCancelFeedbackRequest(
  setShowFeedbackButtons,
  submission,
  setSubmission
) {
  cancelFeedbackRequest(submission?.id)
    .then((response) => {
      toast(<Toast message={'Feedback request cancelled'} />);

      setSubmission((old) => ({
        ...old,
        status: response.status,
        reviewerId: response.reviewerId,
        reviewerName: response.reviewerName,
        submittedAt: response.submittedAt,
        feedbackRequestType: response.feedbackRequestType,
      }));
    })
    .catch((error) => {
      toast(<Toast message={error.message} />);
      setSubmission(error.submission);
    })
    .finally(() => {
      setShowFeedbackButtons(false);
    });
}

export const handleShowResolvedToggle = (setShowResolved) => (event) => {
  setShowResolved(event.target.checked);
};

export const showResolvedToggle =
  (setShowResolved) =>
  (
    commentsForSelectedTab,
    isFeedback,
    isShowResolved,
    handleShowResolvedToggle
  ) => {
    if (
      commentsForSelectedTab.filter((c) => c.status === 'RESOLVED').length <= 0
    ) {
      return <></>;
    }
    if (!isFeedback) {
      return <></>;
    }

    return (
      <ToggleSwitchWithOneOption
        text="Resolved Comments"
        onChecked={isShowResolved}
        onChangeFn={handleShowResolvedToggle(setShowResolved)}
      />
    );
  };
