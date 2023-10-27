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
  RequestFeedbackDropdown,
  IconContainer,
  DropdownButtonsGroup,
  DropdownButton,
} from './style';
import DropdownMenu from '../../DropdownMenu';
import { useState } from 'react';

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
  submission,
  methods,
  isTeacher,
  pageMode,
  labelText
) {
  const focusAreasCount = createFocusAreasCount(submission);
  return (
    <Frame1371 id="assignmentTitle">
      <TitleWrapper>
        <AssignmentTitle>{submission.assignment.title}</AssignmentTitle>
        {statusText(methods, focusAreasCount, submission)}
      </TitleWrapper>
      {downloadButtonClosedSubmission(isTeacher, pageMode, submission, methods)}
      {downloadButtonNonClosedSubmission(
        isTeacher,
        pageMode,
        submission,
        methods
      )}
      {tasksListsDropDown(isTeacher, methods)}
      {(pageMode === 'DRAFT' || pageMode === 'REVISE') && (
        <StatusLabel key="statusLabel" id="statusLabel" text={labelText} />
      )}
      {submitButton(methods, pageMode, isTeacher, submission)}
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
const submitButton = (methods, pageMode, isTeacher, submission) => {
  if (pageMode === 'DRAFT') {
    return (
      <div style={{ position: 'relative' }}>
        <Buttons2
          button="Submit"
          onClickFn={() => methods.showSubmitPopuphandler('SubmitForReview')}
        ></Buttons2>
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

function downloadButtonNonClosedSubmission(
  isTeacher,
  pageMode,
  submission,
  methods
) {
  return (
    !isTeacher &&
    pageMode === 'CLOSED' &&
    submission.status != 'CLOSED' && (
      <AwaitFeedbackContainer id="deleteButton">
        <Buttons2
          button="Download PDF"
          download={true}
          onClickFn={methods.downloadPDF}
        />
      </AwaitFeedbackContainer>
    )
  );
}

function downloadButtonClosedSubmission(
  isTeacher,
  pageMode,
  submission,
  methods
) {
  return (
    !isTeacher &&
    pageMode === 'CLOSED' &&
    submission.status === 'CLOSED' && (
      <div id="deleteButton">
        <Buttons2
          button="Download PDF"
          download={true}
          onClickFn={methods.downloadPDF}
        />
      </div>
    )
  );
}

export function contextBarForPortfolioDocument(
  isShowSelectType,
  setShowSelectType,
  submission,
  methods,
  isTeacher,
  pageMode,
  labelText,
  feedbackMethodType = [],
  handleRequestFeedback,
  showStatusText,
  allClasses,
  allFolders,
  updateDocumentClass
) {
  const [showFeedbackButtons, setShowFeedbackButtons] = useState(false);

  const selectedFolderIdIndex = allFolders?.findIndex(
    (item) => item.id === submission?.folderId
  );

  return (
    <Frame1371 id="assignmentTitle">
      <TitleWrapper>
        <AssignmentTitle>{submission?.assignment?.title}</AssignmentTitle>
        {showStatusText && statusText(methods, 0, submission)}

        {changeFolderDropDown()}
      </TitleWrapper>
      {downloadButtonClosedSubmission(isTeacher, pageMode, submission, methods)}
      {downloadButtonNonClosedSubmission(
        isTeacher,
        pageMode,
        submission,
        methods
      )}
      {(pageMode === 'DRAFT' || pageMode === 'REVISE') && (
        <StatusLabel key="statusLabel" id="statusLabel" text={labelText} />
      )}
      {submitButtonDocument(
        isShowSelectType,
        setShowSelectType,
        methods,
        pageMode,
        submission,
        feedbackMethodType,
        handleRequestFeedback,
        allClasses,
        showFeedbackButtons,
        setShowFeedbackButtons
      )}
    </Frame1371>
  );

  function changeFolderDropDown() {
    if (pageMode === 'DRAFT' || pageMode === 'REVISE') {
      return (
        allFolders?.length > 0 && (
          <div style={{ width: 'fit-content' }}>
            <DropdownMenu
              menuItems={allFolders}
              onItemSelected={(item) => updateDocumentClass(item, allFolders)}
              selectedIndex={selectedFolderIdIndex}
            ></DropdownMenu>
          </div>
        )
      );
    }
    return <></>;
  }
}

function statusText(methods, focusAreasCount, submission) {
  return (
    <StatusText>
      <div>{methods.submissionStatusLabel()}</div>
      {focusAreasCount > 0 && (
        <div className="focus-area">
          <div className="image">
            {submission.assignment?.focusAreas &&
            submission.assignment.focusAreas.length >= 1 &&
            focusAreasCount > 0 ? (
              <Ellipse141
                backgroundColor={submission.assignment?.focusAreas[0].color}
              />
            ) : (
              <></>
            )}
            {submission.assignment?.focusAreas &&
            submission.assignment.focusAreas.length >= 2 ? (
              <Ellipse141
                backgroundColor={submission.assignment?.focusAreas[1].color}
                style={{ marginLeft: '-8px' }}
              />
            ) : (
              <></>
            )}
          </div>
          <div className="text">{focusAreasCount} focus areas</div>
        </div>
      )}
    </StatusText>
  );
}

const submitButtonDocument = (
  isShowSelectType,
  setShowSelectType,
  methods,
  pageMode,
  submission,
  feedbackMethodType,
  handleRequestFeedback,
  allClasses,
  showFeedbackButtons,
  setShowFeedbackButtons
) => {
  if (pageMode === 'DRAFT') {
    return (
      <div style={{ position: 'relative' }}>
        {
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
        }
      </div>
    );
  }

  if (pageMode === 'REVIEW') {
    return (
      <ButtonsContainer>
        <Buttons2
          button="Submit"
          onClickFn={() => methods.showSubmitPopuphandler('SubmitReview')}
        ></Buttons2>
      </ButtonsContainer>
    );
  }
  if (pageMode === 'REVISE') {
    return (
      <RequestFeedbackFrame
        style={{
          border: '1px solid #0C8F8F',
          cursor: 'unset',
          minWidth: '240px',
          position: 'relative',
        }}
      >
        {<img src="/img/messages-green.svg" alt="messages" />}
        {getStatusLabel(submission, allClasses, setShowFeedbackButtons, showFeedbackButtons)}
        {showFeedbackButtons && dropdownButtons()}
      </RequestFeedbackFrame>
    );
  }
  return <></>;
};

function getStatusLabel(submission, allClasses, setShowFeedbackButtons, showFeedbackButtons) {
  if (submission.status === 'FEEDBACK_DECLINED') {
    return (
      'Feedback requested declined by ' +
      getFeedbackRequestedBy(submission, allClasses)
    );
  }
  return (
    <RequestFeedbackDropdown
      title={`Request feedback from ${submission.reviewerName}`}
    >
      Feedback requested
      <IconContainer
        src="/icons/three-dot.svg"
        alt="show cancel"
        onClick={() => setShowFeedbackButtons(!showFeedbackButtons)}
      />
    </RequestFeedbackDropdown>
  );
}
function getFeedbackRequestedBy(submission, allClasses) {
  if (submission.feedbackRequestType === 'P2P') {
    return allClasses.find((item) => item.id === submission.classId)?.title;
  }
  return submission.reviewerName;
}

function dropdownButtons() {
  return (
    <DropdownButtonsGroup>
      <DropdownButton>Change due date</DropdownButton>
      <DropdownButton>Cancel</DropdownButton>
    </DropdownButtonsGroup>
  );
}

//getFeedbackRequestedBy(submission, allClasses)
