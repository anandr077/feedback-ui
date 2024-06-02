import React, { useState, useEffect } from 'react';
import {
  FeedbackHeaderContainer,
  LeftSection,
  RightSection,
  ReassignBtn,
  ToggleContainer,
  ToggleLavel,
  ToggleInput,
  ToggleBtn,
  ToggleSwitchLabels,
  ArrowBtn,
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
  JeddAiImageForAnimation
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
import SnackbarContext from '../../SnackbarContext';
import { useHistory, useLocation } from 'react-router-dom';
import { isShowCommentsAndFocusAreasTab } from '../FeedbacksRoot/rules';
import PopupDialogueBox from '../../../components2/PopupDialogueBox';
import DropdownWithRoundedTick from '../../../components2/DropdownWithRoundedTick';
import ToggleSwitchWithTwoOptions from '../../../components2/ToggleSwitchWithTwoOptions';
import ToggleSwitchWithOneOption from '../../../components2/ToggleSwitchWithOneOption';

const FeedbackHeader = ({
  methods,
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
  handleTabUpdate,
  setShowResolved,
  isShowResolved,
  commentsForSelectedTab
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isTeacher = getUserRole() === 'TEACHER';
  const [isShowSelectType, setShowSelectType] = useState();
  const [openEditDialogue, setOpenEditDialogue] = useState();
  const { showSnackbar } = React.useContext(SnackbarContext);
  const history = useHistory();
  const location = useLocation();

  const studentsList = submission?.studentsSubmissions;

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
    setSelectedIndex((prevIndex) => {
      const newIndex = prevIndex >= studentsList.length - 1 ? 0 : prevIndex + 1;
      console.log('the newIndex num is', newIndex);
      handleQuestionClick(newIndex);
      return newIndex;
    });
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => {
      const newIndex = prevIndex <= 0 ? studentsList.length - 1 : prevIndex - 1;
      handleQuestionClick(newIndex);
      return newIndex;
    });
  };

  const handleQuestionClick = (index) => {
    setSelectedIndex(index);
    const newUrl = `/submissions/${studentsList[index]?.submissionId}`;
    history.push(newUrl);
  };

  const handleResolvedCommentToggle = () => {
    console.log('Toggle switch is now');
  };

  return (
    <FeedbackHeaderContainer>
      {isTeacher && (pageMode === 'REVIEW' || pageMode === 'CLOSED') ? (
        <LeftSection>
          <ArrowBtn onClick={handlePrevious}>
            <img src={ArrowLeft} alt="Left" />
          </ArrowBtn>
          <DropdownWithRoundedTick
            options={studentsList}
            selectedId={submission.id}
            selectedIndex={selectedIndex}
            onChange={handleQuestionClick}
          />
          <ArrowBtn onClick={handleNext}>
            <img src={ArrowRight} alt="Right" />
          </ArrowBtn>
        </LeftSection>
      ) : (
        <LeftSection>
          <SubjectTaskTypeContainer>
            {submission.assignment.subject && (
              <>
                <div>
                  <STTitle>Subject:</STTitle>
                  <STDetails>{submission.assignment.subject}</STDetails>
                </div>
                <span>|</span>
              </>
            )}
            {submission.documentType && (
              <>
                <div>
                  <STTitle>Task Type:</STTitle>
                  <STDetails>{submission.documentType}</STDetails>
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
        </LeftSection>
      )}

      <RightSection>
        {showResolvedToggle(setShowResolved)(
          commentsForSelectedTab,
          isFeedback,
          isShowResolved,
          handleShowResolvedToggle
        )}
        {isShowCommentsAndFocusAreasTab(pageMode, submission.type) && (
          <ToggleSwitchWithTwoOptions
            text1={'Comments'}
            text2={'Focus Areas'}
            icon1={CommentIcon}
            icon1Active={ActiveCommentIcon}
            icon2={FocusIcon}
            icon2Active={ActiveFocusIcon}
            onChangeFn={handleTabUpdate}
            isChecked={isFeedback}
          />
        )}
        {isTeacher && pageMode === 'REVIEW' && (
          <ReassignBtn
            onClick={() =>
              methods.showSubmitPopuphandler('RequestResubmission')
            }
          >
            <img src={ResubmitBtn} />
            Reassign Task
          </ReassignBtn>
        )}
        {submission.type === 'DOCUMENT'
          ? submitButtonOnDocument(
              showSnackbar,
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
  showSnackbar,
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
          text={isTeacher ? 'JeddAI' : 'Request Feedback'}
          onClickFn={
            isTeacher
              ? (event) => {
                  event.stopPropagation();
                  methods.jeddAI();
                }
              : (event) => {
                  event.stopPropagation();
                  setShowSelectType(true);
                }
          }
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

  if (pageMode === 'CLOSED' && submission.status === 'SUBMITTED') {
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
              showSnackbar,
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

  if (pageMode === 'CLOSED' && submission.status === 'FEEDBACK_ACCEPTED') {
    if (submission.feedbackRequestType === 'JEDDAI') {
      return (
        <JeddAiAnimatedTextContainer>
          {<JeddAiImageForAnimation src="/img/jeddleaiIcon.svg" />}
          <Label16pxSmall>
            <div>JeddAI is working on your feedback</div>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
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

  if (submission.status === 'REVIEWED') {
    if (submission.feedbackRequestType === 'JEDDAI') {
      return (
        <DocumentSubmitBtnContainer>
          {<Icon24 src="/img/jeddleaiIcon.svg" />}
          <p>JeddAI has provided its feedback</p>
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
        onClickFn={() => methods.showSubmitPopuphandler('SubmitForReview')}
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
    if (submission.status === 'RESUBMISSION_REQUESTED') {
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

  if (
    pageMode === 'CLOSED' &&
    submission.status === 'SUBMITTED' &&
    !isTeacher
  ) {
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
  showSnackbar,
  submission,
  setSubmission
) {
  cancelFeedbackRequest(submission.id)
    .then((response) => {
      showSnackbar('Feedback request cancelled');

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
      showSnackbar(error.message);
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
