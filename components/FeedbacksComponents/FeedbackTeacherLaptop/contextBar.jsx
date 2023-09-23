import { default as React } from 'react';
import StatusLabel from '../../StatusLabel';
import Buttons2 from '../Buttons2';
import {
  AssignmentTitle,
  AwaitFeedbackContainer,
  ButtonsContainer,
  Ellipse141,
  Frame1371,
  StatusText,
  TitleWrapper,
  Frame131612,
  SelectFeedbackMethod,
  SelectFeedbackMethodType,
  RequestFeedbackFrame,
} from './style';

function createFocusAreasCount(submission) {
  return submission.assignment.questions
    .flatMap((question) => question.focusAreas)
    .filter((focusArea) => focusArea !== undefined).length;
}

const tasksListsDropDown = (isTeacher, methods) => {
  if (isTeacher) {
    return <Frame131612>{methods.createTasksDropDown()}</Frame131612>;
  }
  return <></>;
};
export function contextBar(
  isShowSelectType,
  setShowSelectType,
  submission,
  methods,
  isTeacher,
  pageMode,
  labelText,
  feedbackMethodType = [],
  requestFeedback = false,
  handleRequestFeedback,
  showStatusText = true
) {
  const focusAreasCount = createFocusAreasCount(submission);
  console.log('submission: ', submission);
  return (
    <Frame1371 id="assignmentTitle">
      <TitleWrapper>
        <AssignmentTitle>{submission.assignment.title}</AssignmentTitle>
        {showStatusText && statusText(methods, focusAreasCount, submission)}
      </TitleWrapper>
      {downloadButtonClosedSubmission(isTeacher, pageMode, submission, methods)}
      {downloadButtonNonClosedSubmission(isTeacher, pageMode, submission, methods)}
      {tasksListsDropDown(isTeacher, methods)}
      {(pageMode === 'DRAFT' || pageMode === 'REVISE') && (
        <StatusLabel key="statusLabel" id="statusLabel" text={labelText} />
      )}
      {submitButton(
        isShowSelectType,
        setShowSelectType,
        methods,
        pageMode,
        isTeacher,
        submission,
        feedbackMethodType,
        requestFeedback,
        handleRequestFeedback
      )}
    </Frame1371>
  );
}
const selectReviewType = (
  feedbackMethodType,
  isShowSelectType,
  handleRequestFeedback
) => {
  if (!isShowSelectType) {
    return <></>;
  }
  return (
    <SelectFeedbackMethod>
      {feedbackMethodType.map((type, index) => {
        return (
          <SelectFeedbackMethodType
            onClick={(event) => {
              event.stopPropagation();
              handleRequestFeedback(index);
            }}
          >
            {type}
          </SelectFeedbackMethodType>
        );
      })}
    </SelectFeedbackMethod>
  );
};
const submitButton = (
  isShowSelectType,
  setShowSelectType,
  methods,
  pageMode,
  isTeacher,
  submission,
  feedbackMethodType,
  requestFeedback = false,
  handleRequestFeedback
) => {
  if (pageMode === 'DRAFT') {
    return (
      <div style={{ position: 'relative' }}>
        {requestFeedback ? (
          <>
            {selectReviewType(
              feedbackMethodType,
              isShowSelectType,
              handleRequestFeedback
            )}
            <RequestFeedbackFrame
              onClick={(event) => {
                event.stopPropagation();
                setShowSelectType(!isShowSelectType);
              }}
            >
              {<img src="/img/messages.svg" alt="message" />}
              Request Feedback
            </RequestFeedbackFrame>
          </>
        ) : (
          <Buttons2
            button="Submit"
            onClickFn={() => methods.showSubmitPopuphandler('SubmitForReview')}
          ></Buttons2>
        )}
      </div>
    );
  }
  if (pageMode === 'REVIEW') {
    if (isTeacher) {
      return (
        <ButtonsContainer>
          <Buttons2
            button="Request resubmission"
            onClickFn={() =>
              methods.showSubmitPopuphandler('RequestResubmission')
            }
          ></Buttons2>
          <Buttons2
            button="Submit"
            onClickFn={() => methods.showSubmitPopuphandler('SubmitReview')}
          ></Buttons2>
        </ButtonsContainer>
      );
    } else {
      return (
        <ButtonsContainer>
          <Buttons2
            button="Submit"
            onClickFn={() => methods.showSubmitPopuphandler('SubmitReview')}
          ></Buttons2>
        </ButtonsContainer>
      );
    }
  }
  if (pageMode === 'REVISE') {
    if (requestFeedback) {
      return (
        <RequestFeedbackFrame
          style={{ border: '1px solid #0C8F8F', cursor: 'unset' }}
        >
          {<img src="/img/messages-green.svg" alt="messages" />}
          Feedback requested from{' '}
          {submission.reviewerId ? submission.reviewerId : 'peers'}
        </RequestFeedbackFrame>
      );
    }
    if (submission.status === 'RESUBMISSION_REQUESTED') {
      return (
        <>
          <Buttons2
            button="Submit"
            onClickFn={() => methods.showSubmitPopuphandler('SubmitForReview')}
          ></Buttons2>
        </>
      );
    }
    return (
      <>
        <Buttons2
          button="Mark as complete"
          onClickFn={() => methods.showSubmitPopuphandler('CloseSubmission')}
        ></Buttons2>
      </>
    );
  }
  return <></>;
};

function downloadButtonNonClosedSubmission(isTeacher, pageMode, submission, methods) {
  return !isTeacher && pageMode === 'CLOSED' && submission.status != 'CLOSED' && (
    <AwaitFeedbackContainer id="deleteButton">
      <Buttons2
        button="Download PDF"
        download={true}
        onClickFn={methods.downloadPDF} />
    </AwaitFeedbackContainer>
  );
}

function downloadButtonClosedSubmission(isTeacher, pageMode, submission, methods) {
  return !isTeacher &&
    pageMode === 'CLOSED' &&
    submission.status === 'CLOSED' && (
      <div id="deleteButton">
        <Buttons2
          button="Download PDF"
          download={true}
          onClickFn={methods.downloadPDF} />
      </div>
    );
}

export function contextBarForPortfolioDocument(
  setShowSelectType,
  submission,
  methods,
  isTeacher,
  pageMode,
  labelText,
  feedbackMethodType = [],
  requestFeedback = false,
  handleRequestFeedback,
) {
  return (
    <Frame1371 id="assignmentTitle">
      <TitleWrapper>
        <AssignmentTitle>{submission?.assignment?.title}</AssignmentTitle>
        {statusText(methods, 0, submission)}
      </TitleWrapper>
      {downloadButtonClosedSubmission(isTeacher, pageMode, submission, methods)}
      {downloadButtonNonClosedSubmission(isTeacher, pageMode, submission, methods)}
      {(pageMode === 'DRAFT' || pageMode === 'REVISE') && (
        <StatusLabel key="statusLabel" id="statusLabel" text={labelText} />
      )}
      {submitButton(
        isShowSelectType,
        setShowSelectType,
        methods,
        pageMode,
        isTeacher,
        submission,
        feedbackMethodType,
        requestFeedback,
        handleRequestFeedback
      )}
    </Frame1371>
  );
}

function statusText(methods, focusAreasCount, submission) {
  return <StatusText>
    <div>{methods.submissionStatusLabel()}</div>
    {focusAreasCount > 0 && (
      <div className="focus-area">
        <div className="image">
          {submission.assignment?.focusAreas &&
            submission.assignment.focusAreas.length >= 1 &&
            focusAreasCount > 0 ? (
            <Ellipse141
              backgroundColor={submission.assignment?.focusAreas[0].color} />
          ) : (
            <></>
          )}
          {submission.assignment?.focusAreas &&
            submission.assignment.focusAreas.length >= 2 ? (
            <Ellipse141
              backgroundColor={submission.assignment?.focusAreas[1].color}
              style={{ marginLeft: '-8px' }} />
          ) : (
            <></>
          )}
        </div>
        <div className="text">{focusAreasCount} focus areas</div>
      </div>
    )}
  </StatusText>;
}