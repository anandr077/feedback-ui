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
  getUserId,
  updateAssignment,
  updateDocumentType,
  updateSubject,
} from '../../../service';
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
  getUserId,
} from '../../../service';
import SnackbarContext from '../../SnackbarContext';
import { linkify } from '../../../utils/linkify';
import Button5 from '../Buttons5';
import Cookies from 'js-cookie';
import { Dialog } from '@mui/material';
import ai from '../../../static/img/ai.svg';
import profileCircle from '../../../static/img/profile-circle.svg';
import Teacher from '../../../static/img/Teacher.svg';
import questionmark from '../../../static/img/question-mark.svg';
import people from '../../../static/img/people.svg';
import messages from '../../../static/img/messages-2.svg';
import closecircle from '../../../static/img/closecircle.svg';
import rightarrow from '../../../static/img/Vector13.svg';
import RequestFeedbackPopUp from '../../../components2/RequestFeedbackPopUp';
import _ from 'lodash';
import { sub } from 'date-fns';
import RectangularBigBtn from '../../../components2/Buttons/RectangularbigBtn';
import StyledDropDown from '../../../components2/StyledDropDown';
import TransparentbigBtn from '../../../components2/Buttons/TransparentbigBtn';

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
        {downloadButtonClosedSubmission(
          isTeacher,
          pageMode,
          submission,
          methods
        )}
        {downloadButtonNonClosedSubmission(
          isTeacher,
          pageMode,
          submission,
          methods
        )}
      </TitleWrapper>
      {/* {tasksListsDropDown(isTeacher, methods)} */}
      {/* {(pageMode === 'DRAFT' || pageMode === 'REVISE') && (
        <StatusLabel key="statusLabel" id="statusLabel" text={labelText} />
      )} */}
      <ButtonContainer>
        {submitButton(methods, pageMode, isTeacher, submission)}
      </ButtonContainer>
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
  setShowTeacherPopUp
) => {
  const allTeachers = _.flatten(allClasses?.map((c) => c.teachers) || []);
  const uniqueTeachers = _.uniqBy(allTeachers, 'id');
  const allStudents = _.flatten(allClasses?.map((c) => c.students) || []);
  const uniqueStudents = _.uniqBy(allStudents, 'id').filter(
    (s) => s.id !== getUserId()
  );
  const showClassMate = uniqueStudents.length > 0;
  const showTeacher = uniqueTeachers.length > 0;
  const requestFeedback = (submissionId, requestType) => (id) => {
    console.log('Submitting', submissionId, requestType, id);
    createRequestFeddbackType(submissionId, {
      type: requestType,
      reviewerId: id,
    }).then((response) => {
      console.log('Response', response);
      console.log('Done ', setSubmission);

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
    console.log('Closing');
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
              <Frame1577Img src={questionmark} />
            </Frame1577>
            <Frame1334Img
              style={{ cursor: 'pointer' }}
              onClick={ClosePopUp}
              src={closecircle}
            />
          </Frame1334>
          <Frame5053>
            {showTeacher && (
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
            {showClassMate && (
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
            <Frame5053Card1 onClick={requestCommnityFeedback}>
              <Frame5053Card1Img src={people} />
              <Frame5053Card1Para>Community</Frame5053Card1Para>
            </Frame5053Card1>
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
        <RectangularBigBtn
          text={'Submit'}
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
          <RectangularBigBtn
            text={'Submit'}
            onClickFn={() => methods.showSubmitPopuphandler('SubmitReview')}
          />
        </ButtonsContainer>
      );
    } else {
      return (
        <RectangularBigBtn
          text={'Submit'}
          onClickFn={() => methods.showSubmitPopuphandler('SubmitReview')}
        />
      );
    }
  }
  if (pageMode === 'REVISE') {
    if (submission.status === 'RESUBMISSION_REQUESTED') {
      return (
        <RectangularBigBtn
          text={'Submit'}
          onClickFn={() => methods.showSubmitPopuphandler('SubmitForReview')}
        />
      );
    }
    return (
      <RectangularBigBtn
        leftIcon={'/img/Tick.svg'}
        text={'Mark as completed'}
        onClickFn={() => methods.showSubmitPopuphandler('CloseSubmission')}
      />
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

  React.useEffect(() => {
    if (submission?.assignment?.title) {
      setInputValue(submission.assignment.title);
    }
  }, [submission]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const updateAssignmentTitle = (newTitle) => {
    const updatedAssignment = {
      ...submission.assignment,
      title: newTitle,
    };
    updateAssignment(submission.assignment.id, updatedAssignment)
      .then((res) => {
        if (res && res.title) {
          console.log('Assignment title updated to: ' + res.title);
          setSubmission((old) => ({
            ...old,
            assignment: {
              ...old.assignment,
              title: res.title,
            },
            otherDrafts: old.otherDrafts.map((draft) =>
              draft.submissionId === submission.id
                ? { ...draft, title: res.title }
                : draft
            ),
          }));
        } else {
          console.log('Response is not as expected:', res);
          setInputValue(res.title);
        }
      })
      .catch((error) => {
        console.error('Error updating assignment:', error);
      });
  };

  const handleTaskUpdate = (selectedItem) => {
    updateDocumentType(submission.id, selectedItem.title).then((res) => {
      setSubmission((old) => {
        return {
          ...old,
          documentType: res.documentType,
        };
      });
    });
  };

  const handleSubjectUpdate = (selectedItem) => {
    updateSubject(submission.assignment.id, selectedItem.title).then((res) => {
      setSubmission((old) => {
        return {
          ...old,
          assignment: {
            ...old.assignment,
            subject: res.subject,
          },
        };
      });
    });
  };

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

  const autoResize = () => {
    if (inputRef.current) {
      inputRef.current.style.height = '20px';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      autoResize();
    }, 0);
  }, []);

  return (
    <>
      {subjectTypeSelection(
        pageMode,
        submission,
        handleTaskUpdate,
        handleSubjectUpdate
      )}
      <Frame1371 id="assignmentTitle">
        <TitleWrapper>
          <TitleContainer>
            {pageMode === 'DRAFT' ? (
              <QuestionEditInput
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => {
                  handleInputChange(e);
                  autoResize(e);
                }}
                style={{ overflow: 'hidden' }}
                onBlur={() => {
                  updateAssignmentTitle(inputValue);
                  setIsEditing(false);
                }}
              />
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
        <FeedbackBtnContainer>
          {/* {(pageMode === 'DRAFT' || pageMode === 'REVISE') && (
          <StatusLabel key="statusLabel" id="statusLabel" text={labelText} />
        )} */}
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
        </FeedbackBtnContainer>
      </Frame1371>
    </>
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
                {<img src="/img/messages.png" alt="message" />}
                Request Feedback
              </RequestFeedbackButton>
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
          cursor: 'unset',
          minWidth: '100px',
          position: 'relative',
        }}
      >
        {<img src="/img/messages.png" alt="messages" />}
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
              showSnackbar,
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
            showSnackbar,
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
          }}
        >
          {<Icon24 src="/img/jeddleaiIcon.svg"></Icon24>}
          <Label16pxSmall>JeddAI is working on your feedback</Label16pxSmall>
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
        }}
      >
        {<Icon24 src="/img/message24.svg"></Icon24>}
        <Label16pxSmall>Someone is working on your feedback</Label16pxSmall>
      </RequestFeedbackFrame>
    );
  }
  if (pageMode === 'CLOSED' && submission.status === 'REVIEWED') {
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
          }}
        >
          {<Icon24 src="/img/jeddleaiIcon.svg"></Icon24>}
          <Label16pxSmall>JeddAI has provided its feedback</Label16pxSmall>
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

function subjectTypeSelection(
  pageMode,
  submission,
  handleTaskUpdate,
  handleSubjectUpdate
) {
  console.log('the submission is', submission);
  const subjectOptions = [{ title: 'English' }];
  const taskOptions = [
    { title: 'Analytical' },
    { title: 'Imaginative' },
    { title: 'Discursive' },
    { title: 'Persuasive' },
    { title: 'Reflective' },
  ];
  console.log(
    'selected index ' +
      taskOptions.findIndex((item) => item.title === submission.documentType)
  );
  return (
    <SubjectSelectionContainer>
      {pageMode === 'DRAFT' ? (
        <>
          <SubjectSelectBox>
            <label>Select Subject</label>
            <StyledDropDown
              menuItems={subjectOptions}
              selectedIndex={subjectOptions.findIndex(
                (item) => item.title === submission.assignment.subject
              )}
              onItemSelected={(item) => handleSubjectUpdate(item)}
            ></StyledDropDown>
          </SubjectSelectBox>
          <SubjectSelectBox>
            <label>Task Type</label>

            <StyledDropDown
              menuItems={taskOptions}
              selectedIndex={taskOptions.findIndex(
                (item) => item.title === submission.documentType
              )}
              onItemSelected={(item) => handleTaskUpdate(item)}
            ></StyledDropDown>
          </SubjectSelectBox>
        </>
      ) : (
        <>
          <SubjectSelectBox>
            <label>{submission.assignment.subject}</label>
          </SubjectSelectBox>
          <SubjectSelectBox>
            <label>{submission.documentType}</label>
          </SubjectSelectBox>
        </>
      )}
    </SubjectSelectionContainer>
  );
}
