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
  ButtonContainer,
  Frame131612,
  SelectFeedbackMethod,
  SelectFeedbackMethodType,
  RequestFeedbackFrame,
  RequestFeedbackDropdown,
  IconContainer,
  DropdownButtonsGroup,
  DropdownButton,
  TitleContainer,
  QuestionEditInput,
  EditTextBox,
  FeedbackBtnContainer,
  RequestFeedbackStatusFrame,
  Label16pxSmall,
  MessageIcon24,
  Icon24,
  ButtonWithImageBeforeText,
  SubjectSelectionContainer,
  SubjectSelectBox,
  RequestFeedbackButton,
} from './style';
import DropdownMenu from '../../DropdownMenu';
import { useState } from 'react';
import {
  cancelFeedbackRequest,
  updateAssignment,
  updateDocumentType,
  updateSubject,
} from '../../../service';
import { getUserId, getUserRole } from '../../../userLocalDetails';
import {
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
import {
  cancelFeedbackRequest,
  createRequestFeddbackType,
} from '../../../service';
import { linkify } from '../../../utils/linkify';
import Button5 from '../Buttons5';
import { Dialog } from '@mui/material';
import ai from '../../../static/img/ai.svg';
import profileCircle from '../../../static/img/profile-circle.svg';
import Teacher from '../../../static/img/Teacher.svg';
import expert from '../../../static/img/Expert-check.svg';
import messages from '../../../static/img/messages-2.svg';
import closecircle from '../../../static/img/closecircle.svg';
import rightarrow from '../../../static/img/Vector13.svg';
import RequestFeedbackPopUp from '../../../components2/RequestFeedbackPopUp';
import _ from 'lodash';
import { sub } from 'date-fns';
import RectangularBigBtn from '../../../components2/Buttons/RectangularbigBtn';
import StyledDropDown from '../../../components2/StyledDropDown';
import TransparentbigBtn from '../../../components2/Buttons/TransparentbigBtn';
import RectangularBigBtn2 from '../../../components2/Buttons/RectangularBigBtn2';
import { toast } from 'react-toastify';
import Toast from '../../Toast';

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

const selectReviewType = (
  submission,
  setSubmission,
  methods,
  feedbackMethodType,
  isShowSelectType,
  setShowSelectType,
  handleRequestFeedback,
  allClasses,
  showStudentPopUp,
  showTeacherPopUp,
  setShowStudentPopUp,
  setShowTeacherPopUp
) => {
  const allTeachers = _.flatten(allClasses?.map((c) => c.teachers) || []);
  const uniqueTeachers = _.uniqBy(allTeachers, 'id');
  const allStudents = _.flatten(allClasses?.map((c) => c.students) || []);
  const uniqueStudents = _.uniqBy(allStudents, 'id').filter(
    (s) => s.id !== getUserId()
  );
  const isTeacher = getUserRole() === 'TEACHER';
  const showClassMate = uniqueStudents.length > 0;
  const showTeacher = uniqueTeachers.length > 0;
  const requestFeedback = (submissionId, requestType) => (id) => {
    createRequestFeddbackType(submissionId, {
      type: requestType,
      reviewerId: id,
    }).then((response) => {
      setSubmission((old) => ({
        ...old,
        answers: response.answers,
        status: response.status,
        reviewerId: response.reviewerId,
        reviewerName: response.reviewerName,
        submittedAt: response.submittedAt,
        feedbackRequestType: response.feedbackRequestType,
        classId: response.classId,
        declinedByReviewerIds: response.declinedByReviewerIds,
        submittedAt: response.submittedAt,
      }));
      ClosePopUp();
    });
  };
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
  const requestCommnityFeedback = () => {
    requestFeedback(submission.id, 'P2P')(null);
  };

  if (!isShowSelectType) {
    return <></>;
  }

  return (
    <Dialog open={isShowSelectType}>
      {showStudentPopUp && (
        <RequestFeedbackPopUp
          list={uniqueStudents}
          ClosePopUp={ClosePopUp}
          heading={'classmate'}
          onClickFn={(id) => requestFeedback(submission.id, 'FRIEND')(id)}
        />
      )}
      {showTeacherPopUp && (
        <RequestFeedbackPopUp
          list={uniqueTeachers}
          ClosePopUp={ClosePopUp}
          heading={'teacher'}
          onClickFn={(id) => requestFeedback(submission.id, 'TEACHER')(id)}
        />
      )}
      {!showStudentPopUp && !showTeacherPopUp && (
        <PopupContainer>
          <Frame1334>
            <Frame1334Img src={messages} />
            <Frame1577>
              <Frame1577heading>Get Feedback</Frame1577heading>
            </Frame1577>
            <Frame1334Img
              style={{ cursor: 'pointer' }}
              onClick={ClosePopUp}
              src={closecircle}
            />
          </Frame1334>
          <Frame5053>
            {showTeacher && !isTeacher && (
              <Frame5053Card2 onClick={ShowTeacher}>
                <Frame5053Card2Data>
                  <Frame5053Card1Img src={Teacher} />
                  <Frame5053Card1Para>Teacher</Frame5053Card1Para>
                </Frame5053Card2Data>
                <Card1ImgContainer>
                  <Card1Img src={rightarrow} />
                </Card1ImgContainer>
              </Frame5053Card2>
            )}
            {showClassMate && !isTeacher && (
              <Frame5053Card2 onClick={ShowStudent}>
                <Frame5053Card2Data>
                  <Frame5053Card1Img src={profileCircle} />
                  <Frame5053Card1Para>Classmate</Frame5053Card1Para>
                </Frame5053Card2Data>
                <Card1ImgContainer>
                  <Card1Img src={rightarrow} />
                </Card1ImgContainer>
              </Frame5053Card2>
            )}
            {!isTeacher && (
              <Frame5053Card1 onClick={requestCommnityFeedback}>
                <Frame5053Card1Img src={expert} />
                <Frame5053Card1Para>Expert</Frame5053Card1Para>
              </Frame5053Card1>
            )}
            <Frame5053Card1
              onClick={() => {
                methods.jeddAI().then(() => ClosePopUp());
              }}
            >
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
        <RectangularBigBtn2
          leftIcon={'img/messages.png'}
          text={'Submit For Feedback'}
          onClickFn={() => methods.showSubmitPopuphandler('SubmitForReview')}
        />
      </div>
    );
  }
  if (pageMode === 'REVIEW') {
    if (isTeacher) {
      return (
        <ButtonsContainer>
          <TransparentbigBtn
            leftIcon={'img/refresh-circle.png'}
            text={'Request Re-submission'}
            onClickFn={() =>
              methods.showSubmitPopuphandler('RequestResubmission')
            }
          />
          <Buttons2
            button={'Submit'}
            onClickFn={() => methods.showSubmitPopuphandler('SubmitReview')}
          />
        </ButtonsContainer>
      );
    } else {
      return (
        <RectangularBigBtn2
          text={'Submit'}
          onClickFn={() => methods.showSubmitPopuphandler('SubmitReview')}
        />
      );
    }
  }
  if (pageMode === 'REVISE') {
    if (submission.status === 'RESUBMISSION_REQUESTED') {
      return (
        <RectangularBigBtn2
          leftIcon={'img/messages.png'}
          text={'Get Feedback'}
          onClickFn={() => methods.showSubmitPopuphandler('SubmitForReview')}
        />
      );
    }
    return (
      <RectangularBigBtn2
        leftIcon={'/img/tick.svg'}
        text={'Mark as completed'}
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
      <RectangularBigBtn2
        leftIcon={'/img/downloadPDF.svg'}
        text={'Download'}
        onClickFn={methods.downloadPDF}
      />
    );
  }
  return <></>;
};



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
          <div className="text">{focusAreasCount} Self-assessment Areas</div>
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
  setSubmission,
  feedbackMethodType,
  handleRequestFeedback,
  allClasses,
  showFeedbackButtons,
  setShowFeedbackButtons,
  showStudentPopUp,
  showTeacherPopUp,
  setShowStudentPopUp,
  setShowTeacherPopUp,
  isTeacher
) => {
  if (pageMode === 'DRAFT') {
    return (
      <>
        <div
          style={{
            position: 'relative',
            width: '100%',
            background: '#7200e0',
            borderRadius: '12px',
          }}
        >
          {
            <>
              {selectReviewType(
                submission,
                setSubmission,
                methods,
                feedbackMethodType,
                isShowSelectType,
                setShowSelectType,
                handleRequestFeedback,
                allClasses,
                showStudentPopUp,
                showTeacherPopUp,
                setShowStudentPopUp,
                setShowTeacherPopUp
              )}
              <RequestFeedbackButton
                onClick={(event) => {
                  event.stopPropagation();
                  setShowSelectType(true);
                }}
              >
                {<img src={isTeacher ? '/img/ai.svg' : '/img/messages.png'} alt="Feedback" />}
                {isTeacher ? 'Jedd AI' : 'Request Feedback'}
              </RequestFeedbackButton>
            </>
          }
        </div>
      </>
    );
  }

  if (pageMode === 'REVIEW') {
    return (
      <RequestFeedbackButton
        onClick={() => methods.showSubmitPopuphandler('SubmitReview')}
      >
        {/* <Buttons2
          button="Submit"
          onClickFn={() => methods.showSubmitPopuphandler('SubmitReview')}
        ></Buttons2> */}
        Submit
      </RequestFeedbackButton>
    );
  }
  if (pageMode === 'CLOSED' && submission.status === 'SUBMITTED') {
    return (
      <RequestFeedbackStatusFrame
        style={{
          // border: '1px solid #0C8F8F',
          cursor: 'unset',
          minWidth: '100px',
          position: 'relative',
          background: 'white !important',
          color: 'black',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          alignItems: 'start',
        }}
      >
        <div style={{ display: 'flex', gap: '5px' }}>
          {<Icon24 src="/img/message24.svg"></Icon24>}
          <Label16pxSmall>
            Your work is currently awaiting feedback
          </Label16pxSmall>
        </div>
        <ButtonWithImageBeforeText
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
        </ButtonWithImageBeforeText>
        {showFeedbackButtons &&
          dropdownButtons(
            setShowFeedbackButtons,

            submission,
            setSubmission
          )}
      </RequestFeedbackStatusFrame>
    );
  }
  if (pageMode === 'CLOSED' && submission.status === 'FEEDBACK_ACCEPTED') {
    if (submission.feedbackRequestType === 'JEDDAI') {
      return (
        <RequestFeedbackFrame
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
          {<Icon24 src="/img/jeddleaiIcon.svg"></Icon24>}
          <Label16pxSmall>
            <div>JeddAI is working on your feedback</div>
           
          </Label16pxSmall>
        </RequestFeedbackFrame>
      );
    }
    return (
      <RequestFeedbackFrame
        style={{
          cursor: 'unset',
          minWidth: '100px',
          position: 'relative',
          background: 'white',
          color: 'black',
          display: 'flex',
          gap: '10px',
          height: '66px',
          border: '1px solid #F1E7FF',
        }}
      >
        {<Icon24 src="/img/message24.svg"></Icon24>}
        <Label16pxSmall>Someone is working on your feedback</Label16pxSmall>
      </RequestFeedbackFrame>
    );
  }
  if (submission.status === 'REVIEWED') {
    if (submission.feedbackRequestType === 'JEDDAI') {
      return (
        <RequestFeedbackFrame
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
          {<Icon24 src="/img/jeddleaiIcon.svg"></Icon24>}
          <Label16pxSmall>JeddAI has marked your work</Label16pxSmall>
        </RequestFeedbackFrame>
      );
    }
    return (
      <RequestFeedbackFrame
        style={{
          cursor: 'unset',
          minWidth: '100px',
          position: 'relative',
          background: 'white',
          color: 'black',
          display: 'flex',
          gap: '10px',
          height: '66px',
          border: '1px solid #F1E7FF',
        }}
      >
        {<Icon24 src="/img/message24.svg"></Icon24>}
        <Label16pxSmall>Your feedback is ready to review</Label16pxSmall>
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
    return '';
    // if (submission.feedbackRequestType === 'P2P') {
    //   return allClasses.find((item) => item.id === submission.classId)?.title;
    // }
    // return submission.reviewerName;
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
  submission,
  setSubmission
) {
  cancelFeedbackRequest(submission.id)
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


