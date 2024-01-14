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
  TitleContainer,
  Frame1334,
  Frame1334Img,
  Frame1577,
  Frame1577heading,
  Frame1577Img,
  Frame5053,
  Frame5053Card1,
  Frame5053Card1Img,
  Frame5053Card1Para,
  Frame5053Card2,
  Frame1364,
  PopupContainer,
  Frame1364Button,
  Frame1364ButtonText,
  Card1Img,
  Frame5053Card2Data,
  Card1ImgContainer,
} from './style';
import DropdownMenu from '../../DropdownMenu';
import { useState } from 'react';
import { cancelFeedbackRequest, getUserId } from '../../../service';
import SnackbarContext from '../../SnackbarContext';
import { linkify } from '../../../utils/linkify';
import Cookies from 'js-cookie';
import { Dialog } from '@mui/material';
import ai from '../../../static/img/ai.svg';
import profileCircle from '../../../static/img/profile-circle.svg';
import Teacher from '../../../static/img/Teacher.svg';
import questionmark from '../../../static/img/question-mark.svg';
import messages from '../../../static/img/messages.svg';
import closecircle from '../../../static/img/closecircle.svg';
import rightarrow from '../../../static/img/Vector13.svg';
import RequestFeedbackPopUp from '../../../components2/RequestFeedbackPopUp';

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
        <AssignmentTitle
          dangerouslySetInnerHTML={{
            __html: linkify(submission.assignment.title),
          }}
        />
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
  setShowSelectType,
  handleRequestFeedback,
  allClasses
) => {
  // const handleOutsideClick = (event) => {
  //   setShowSelectType(false);
  // };
  // React.useEffect(() => {
  //   window.addEventListener('click', handleOutsideClick);
  //   return () => {
  //     window.removeEventListener('click', handleOutsideClick);
  //   };
  // }, []);
  const [showStudentPopUp, setShowStudentPopUp] = React.useState(false);
  const [showTeacherPopUp, setShowTeacherPopUp] = React.useState(false);
  const ClosePopUp = () => {
    setShowStudentPopUp(false);
    setShowTeacherPopUp(false);
    setShowSelectType(false);
  };
  const ShowStudent = () => {
    setShowStudentPopUp(true);
  };
  const ShowTeacher = () => {
    setShowTeacherPopUp(true);
  };
  console.log('classesA', allClasses[0]);
  if (!isShowSelectType) {
    return <></>;
  }
  return (
    <Dialog open={isShowSelectType}>
      {showStudentPopUp && (
        <RequestFeedbackPopUp
          list={allClasses[0].students}
          ClosePopUp={ClosePopUp}
          heading={'classmate'}
        />
      )}
      {showTeacherPopUp && (
        <RequestFeedbackPopUp
          list={allClasses[0].teachers}
          ClosePopUp={ClosePopUp}
          heading={'teacher'}
        />
      )}
      {!showStudentPopUp && !showTeacherPopUp && (
        <PopupContainer>
          <Frame1334>
            <Frame1334Img src={messages} />
            <Frame1577>
              <Frame1577heading>Get Feedback</Frame1577heading>
              <Frame1577Img src={questionmark} />
            </Frame1577>
            <Frame1334Img
              style={{ cursor: 'pointer' }}
              onClick={ClosePopUp}
              src={closecircle}
            />
          </Frame1334>
          <Frame5053>
            <Frame5053Card1>
              <Frame5053Card1Img src="/img/community.png" />
              <Frame5053Card1Para>Community</Frame5053Card1Para>
            </Frame5053Card1>
            <Frame5053Card2 onClick={ShowTeacher}>
              <Frame5053Card2Data>
                <Frame5053Card1Img src={Teacher} />
                <Frame5053Card1Para>Teacher</Frame5053Card1Para>
              </Frame5053Card2Data>
              <Card1ImgContainer>
                <Card1Img src={rightarrow} />
              </Card1ImgContainer>
            </Frame5053Card2>
            <Frame5053Card2 onClick={ShowStudent}>
              <Frame5053Card2Data>
                <Frame5053Card1Img src={profileCircle} />
                <Frame5053Card1Para>Classmate</Frame5053Card1Para>
              </Frame5053Card2Data>
              <Card1ImgContainer>
                <Card1Img src={rightarrow} />
              </Card1ImgContainer>
            </Frame5053Card2>
            <Frame5053Card1>
              <Frame5053Card1Img src={ai} />
              <Frame5053Card1Para>JeddAI</Frame5053Card1Para>
            </Frame5053Card1>
          </Frame5053>
        </PopupContainer>
      )}
    </Dialog>
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
  showFeedbackButtons,
  setShowFeedbackButtons,
  submission,
  setSubmission,
  methods,
  isTeacher,
  pageMode,
  labelText,
  feedbackMethodType = [],
  handleRequestFeedback,
  showStatusText = true,
  allClasses,
  classesAndStudents
) {
  const { showSnackbar } = React.useContext(SnackbarContext);

  return (
    <Frame1371 id="assignmentTitle">
      <TitleWrapper>
        <TitleContainer>
          <AssignmentTitle
            style={{ display: 'contents' }}
            dangerouslySetInnerHTML={{
              __html: linkify(submission?.assignment?.title),
            }}
          />
          <img
            src="/icons/EditSM.png"
            alt="edit"
            width="20px"
            height="20px"
            style={{ cursor: 'pointer' }}
          />
        </TitleContainer>
        {showStatusText && statusText(methods, 0, submission)}
      </TitleWrapper>
      {(pageMode === 'DRAFT' || pageMode === 'REVISE') && (
        <StatusLabel key="statusLabel" id="statusLabel" text={labelText} />
      )}
      {submitButtonDocument(
        showSnackbar,
        isShowSelectType,
        setShowSelectType,
        methods,
        pageMode,
        submission,
        setSubmission,
        feedbackMethodType,
        handleRequestFeedback,
        allClasses,
        showFeedbackButtons,
        setShowFeedbackButtons
      )}
    </Frame1371>
  );
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
  showSnackbar,
  isShowSelectType,
  setShowSelectType,
  methods,
  pageMode,
  submission,
  setSubmission,
  feedbackMethodType,
  handleRequestFeedback,
  allClasses,
  showFeedbackButtons,
  setShowFeedbackButtons
) => {
  console.log('pageMode', pageMode);
  if (pageMode === 'DRAFT') {
    return (
      <>
        <Buttons2 button="JeddAI" onClickFn={() => methods.jeddAI()}></Buttons2>
        <div style={{ position: 'relative' }}>
          {
            <>
              {selectReviewType(
                feedbackMethodType,
                isShowSelectType,
                setShowSelectType,
                handleRequestFeedback,
                allClasses
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
      </>
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
          minWidth: '100px',
          position: 'relative',
        }}
      >
        {<img src="/img/messages-green.svg" alt="messages" />}
        {getStatusLabel(
          pageMode,
          submission,
          allClasses,
          setShowFeedbackButtons,
          showFeedbackButtons
        )}
      </RequestFeedbackFrame>
    );
  }
  if (pageMode === 'CLOSED' && submission.status === 'SUBMITTED') {
    return (
      <RequestFeedbackFrame
        style={{
          border: '1px solid #0C8F8F',
          cursor: 'unset',
          minWidth: '100px',
          position: 'relative',
        }}
      >
        {<img src="/img/messages-green.svg" alt="messages" />}
        {getStatusLabel(
          pageMode,
          submission,
          allClasses,
          setShowFeedbackButtons,
          showFeedbackButtons
        )}
        {showFeedbackButtons &&
          dropdownButtons(
            setShowFeedbackButtons,
            showSnackbar,
            submission,
            setSubmission
          )}
      </RequestFeedbackFrame>
    );
  }
  if (pageMode === 'CLOSED' && submission.status === 'FEEDBACK_ACCEPTED') {
    return (
      <RequestFeedbackFrame
        style={{
          border: '1px solid #0C8F8F',
          cursor: 'unset',
          minWidth: '100px',
          position: 'relative',
        }}
      >
        {<img src="/img/messages-green.svg" alt="messages" />}
        {getStatusLabel(
          pageMode,
          submission,
          allClasses,
          setShowFeedbackButtons,
          showFeedbackButtons
        )}
        {showFeedbackButtons &&
          dropdownButtons(
            setShowFeedbackButtons,
            showSnackbar,
            submission,
            setSubmission
          )}
      </RequestFeedbackFrame>
    );
  }
  return <></>;
};

function getStatusLabel(
  pageMode,
  submission,
  allClasses,
  setShowFeedbackButtons,
  showFeedbackButtons
) {
  if (pageMode === 'REVISE') {
    return (
      <RequestFeedbackDropdown
        title={`Feedback received from ${feedbackRequestedFrom()}`}
      >
        Feedback received
      </RequestFeedbackDropdown>
    );
  }
  if (pageMode === 'CLOSED' && submission.status === 'FEEDBACK_ACCEPTED') {
    return (
      <RequestFeedbackDropdown
        title={`Feedback requested from ${feedbackRequestedFrom()}`}
      >
        Feedback requested
      </RequestFeedbackDropdown>
    );
  }

  if (submission.status === 'FEEDBACK_DECLINED') {
    return (
      'Feedback request declined by ' +
      getFeedbackRequestedBy(submission, allClasses)
    );
  }
  return (
    <RequestFeedbackDropdown
      title={`Feedback requested from ${feedbackRequestedFrom()}`}
    >
      Feedback requested
      <IconContainer
        src="/icons/three-dot.svg"
        alt="show cancel"
        onClick={(event) => {
          event.stopPropagation();
          setShowFeedbackButtons(!showFeedbackButtons);
        }}
      />
    </RequestFeedbackDropdown>
  );

  function feedbackRequestedFrom() {
    if (submission.feedbackRequestType === 'P2P') {
      return allClasses.find((item) => item.id === submission.classId)?.title;
    }
    return submission.reviewerName;
  }
}
function getFeedbackRequestedBy(submission, allClasses) {
  if (submission.feedbackRequestType === 'P2P') {
    return allClasses.find((item) => item.id === submission.classId)?.title;
  }
  return submission.reviewerName;
}

function dropdownButtons(
  setShowFeedbackButtons,
  showSnackbar,
  submission,
  setSubmission
) {
  return (
    <DropdownButtonsGroup>
      {/* <DropdownButton>Change due date</DropdownButton> */}
      <DropdownButton
        onClick={() =>
          handleCancelFeedbackRequest(
            setShowFeedbackButtons,
            showSnackbar,
            submission,
            setSubmission
          )
        }
      >
        Cancel
      </DropdownButton>
    </DropdownButtonsGroup>
  );
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

      setSubmission(response);
    })
    .catch((error) => {
      showSnackbar(error.message);
      setSubmission(error.submission);
    })
    .finally(() => {
      setShowFeedbackButtons(false);
    });
}
