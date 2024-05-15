import React, { useState, useContext } from 'react';
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
  DocumentSubmitBtnContainer,
  AwaitingFeedbackTextAlert,
  CancelBtn,
  SubjectTaskTypeContainer,
  STTitle,
  STDetails,
} from './style';
import ResubmitBtn from '../../../static/img/Resubmit.svg';
import ActiveCommentIcon from '../../../static/img/purplesinglecomment.svg';
import CommentIcon from '../../../static/img/graysinglecomment.svg';
import ActiveFocusIcon from '../../../static/img/purplehighlight.svg';
import FocusIcon from '../../../static/img/grayhighlight.svg';
import ArrowLeft from '../../../static/img/arrowleftgray.svg';
import ArrowRight from '../../../static/img/arrowrightgray.svg';
import { getUserRole } from '../../../userLocalDetails';
import RoundedBorderSubmitBtn from '../../../components2/Buttons/RoundedBorderSubmitBtn';
import SelectReviewType from './SelectReviewType';
import { cancelFeedbackRequest } from '../../../service';
import SnackbarContext from '../../SnackbarContext';

const FeedbackHeader = ({
  commentFocusAreaToggle,
  setCommentFocusAreaToggle,
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
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isTeacher = getUserRole() === 'TEACHER';
  const [isShowSelectType, setShowSelectType] = useState();
  const { showSnackbar } = React.useContext(SnackbarContext);

  const handlePrevious = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <FeedbackHeaderContainer>
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
            <div>
              <STTitle>Task Type:</STTitle>
              <STDetails>{submission.documentType}</STDetails>
            </div>
          )}
        </SubjectTaskTypeContainer>
      </LeftSection>
      <RightSection>
        {submission.type !== 'DOCUMENT' && (
          <ToggleContainer>
            <ToggleLavel>
              <ToggleInput
                checked={commentFocusAreaToggle}
                onChange={() =>
                  setCommentFocusAreaToggle(!commentFocusAreaToggle)
                }
                type="checkbox"
              />
              <ToggleBtn>
                <img
                  src={
                    commentFocusAreaToggle ? ActiveFocusIcon : ActiveCommentIcon
                  }
                  alt={commentFocusAreaToggle ? 'Focus Area' : 'Comments'}
                />
                {commentFocusAreaToggle ? 'Focus Area' : 'Comments'}
              </ToggleBtn>
              <ToggleSwitchLabels>
                <span>
                  <img src={CommentIcon} /> Comments
                </span>
                <span>
                  <img src={FocusIcon} /> Focus Area
                </span>
              </ToggleSwitchLabels>
            </ToggleLavel>
          </ToggleContainer>
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
      <DocumentSubmitBtnContainer>
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
      </DocumentSubmitBtnContainer>
    );
  }

  if (pageMode === 'CLOSED' && submission.status === 'FEEDBACK_ACCEPTED') {
    if (submission.feedbackRequestType === 'JEDDAI') {
      return (
        <div
          style={{
            cursor: 'unset',
            minWidth: '100px',
          }}
        >
          {<img src="/img/jeddleaiIcon.svg" />}
          <div>
            <div>JeddAI is working on your feedback</div>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
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
        <div
          style={{
            cursor: 'unset',
            minWidth: '100px',
            position: 'relative',
            backgroundColor: 'white',
            color: 'black',
            display: 'flex',
            gap: '10px',
            height: '66px',
            border: '1px solid #F1E7FF',
          }}
        >
          {<img src="/img/jeddleaiIcon.svg" />}
          <p>JeddAI has provided its feedback</p>
        </div>
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
  console.log('the pagemode', pageMode);
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
          text={'Submit'}
          onClickFn={() => methods.showSubmitPopuphandler('SubmitReview')}
        />
      );
    } else {
      return (
        <RoundedBorderSubmitBtn
          text={'Submit'}
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
