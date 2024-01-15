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
  QuestionEditInput,
  EditTextBox,
} from './style';
import DropdownMenu from '../../DropdownMenu';
import { useState } from 'react';
import { cancelFeedbackRequest, getUserId, updateAssignment } from '../../../service';
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
import { cancelFeedbackRequest, createRequestFeddbackType, getUserId } from '../../../service';
import SnackbarContext from '../../SnackbarContext';
import { linkify } from '../../../utils/linkify';
import Button5 from '../Buttons5';
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
import _ from 'lodash';
import { sub } from 'date-fns';

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
      {/* {tasksListsDropDown(isTeacher, methods)} */}
      {(pageMode === 'DRAFT' || pageMode === 'REVISE') && (
        <StatusLabel key="statusLabel" id="statusLabel" text={labelText} />
      )}
      {submitButton(methods, pageMode, isTeacher, submission)}
    </Frame1371>
  );
}
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
  setShowTeacherPopUp,
) => {
  const allTeachers = _.flatten(allClasses?.map(c => c.teachers) || []);;
  const uniqueTeachers = _.uniqBy(allTeachers, 'id');
  const allStudents = _.flatten(allClasses?.map(c=>c.students) || []);
  const uniqueStudents = _.uniqBy(allStudents, 'id').filter(s=>s.id !== getUserId());
  
  const requestFeedback = (submissionId, requestType)=>(id) => {
    console.log("Submitting", submissionId, requestType, id)
    createRequestFeddbackType(submissionId,
      {
        type:requestType,
        reviewerId:id
      })
      .then((response) => {
        console.log("Response", response)
        console.log("Done ", setSubmission)
        
        setSubmission(response);
        // ClosePopUp()
      })
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
          onClickFn={(id)=>requestFeedback(submission.id, 'P2P')(id)}
        />
      )}
      {showTeacherPopUp && (
        <RequestFeedbackPopUp
          list={uniqueTeachers}
          ClosePopUp={ClosePopUp}
          heading={'teacher'}
          onClickFn={(id)=>requestFeedback(submission.id, 'TEACHER')(id)}
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
            {<Frame5053Card2 onClick={ShowTeacher}>
              <Frame5053Card2Data>
                <Frame5053Card1Img src={Teacher} />
                <Frame5053Card1Para>Teacher</Frame5053Card1Para>
              </Frame5053Card2Data>
              <Card1ImgContainer>
                <Card1Img src={rightarrow} />
              </Card1ImgContainer>
            </Frame5053Card2>}
            <Frame5053Card2 onClick={ShowStudent}>
              <Frame5053Card2Data>
                <Frame5053Card1Img src={profileCircle} />
                <Frame5053Card1Para>Classmate</Frame5053Card1Para>
              </Frame5053Card2Data>
              <Card1ImgContainer>
                <Card1Img src={rightarrow} />
              </Card1ImgContainer>
            </Frame5053Card2>
            <Frame5053Card1 onClick={() => methods.jeddAI()}>
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
          <Button5
            button="Request Re-submission"
            icon={'img/refresh-circle.png'}
            onClickFn={() =>
              methods.showSubmitPopuphandler('RequestResubmission')
            }
          ></Button5>
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
  showStudentPopUp,
  showTeacherPopUp,
  setShowStudentPopUp,
  setShowTeacherPopUp
) {
  const { showSnackbar } = React.useContext(SnackbarContext);
  const [isEditing, setIsEditing] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [assignment, setAssignment] = React.useState(submission);
  const inputRef = React.useRef(null);

  console.log('the submission is', submission);

  React.useEffect(() => {
    if (submission?.assignment?.title) {
      setInputValue(submission.assignment.title);
    }
  }, [submission?.assignment?.title]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const updateAssignmentTitle = (newTitle) => {
    const updatedAssignment = {
      ...submission.assignment,
      title: newTitle,
    };
    updateAssignment(submission.id, updatedAssignment)
      .then((res) => {
        if (res && res.assignment && res.assignment.title) {
          console.log('Assignment title updated to: ' + res.assignment);
        } else {
          console.log('Response is not as expected:', res);
          setInputValue(res.title);
        }
      })
      .catch((error) => {
        console.error('Error updating assignment:', error);
      });
  };

  console.log('set assignment', assignment);

  const handleTitleClick = () => {
    setIsEditing(true);
  };

  React.useEffect(() => {
    if (isEditing) {
      const input = inputRef.current;
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  }, [isEditing]);

  return (
    <Frame1371 id="assignmentTitle">
      <TitleWrapper>
        <TitleContainer>
          {pageMode === 'DRAFT' ? (
            isEditing ? (
              <QuestionEditInput
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onBlur={() => {
                  updateAssignmentTitle(inputValue);
                  setIsEditing(false);
                }}
              />
            ) : (
              <AssignmentTitle
                style={{ display: 'contents', color: 'var(--text)' }}
                dangerouslySetInnerHTML={{
                  __html: linkify(submission?.assignment?.title),
                }}
                onClick={handleTitleClick}
              />
            )
          ) : (
            <AssignmentTitle
              style={{ display: 'contents', color: '#A6A6A6' }}
              dangerouslySetInnerHTML={{
                __html: linkify(submission?.assignment?.title),
              }}
            />
          )}
        </TitleContainer>
        {pageMode === 'DRAFT' ? (
          <EditTextBox>
            💬 Use a specific question for more accurate feedback
          </EditTextBox>
        ) : (
          showStatusText && statusText(methods, 0, submission)
        )}
      </TitleWrapper>
      <div style={{ display: 'flex', gap: '15px' }}>
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
          setShowFeedbackButtons,
          showStudentPopUp,
          showTeacherPopUp,
          setShowStudentPopUp,
          setShowTeacherPopUp
        )}
      </div>
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
  setShowFeedbackButtons,
  showStudentPopUp,
  showTeacherPopUp,
  setShowStudentPopUp,
  setShowTeacherPopUp
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
                setShowTeacherPopUp,
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
