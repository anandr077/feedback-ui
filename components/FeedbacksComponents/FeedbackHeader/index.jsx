import React, { useState } from 'react';
import {
  FeedbackHeaderContainer,
  LeftSection,
  AssignmentTitle,
  RightSection,
  ReassignBtn,
  ToggleContainer,
  ToggleLavel,
  ToggleInput,
  ToggleBtn,
  ToggleSwitchLabels,
  ArrowBtn,
  Select,
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

const data = [
  'Student one',
  'Student two',
  'Student three',
  'Student four',
  'Student five',
];

const FeedbackHeader = ({
  commentFocusAreaToggle,
  setCommentFocusAreaToggle,
  methods,
  submission,
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
      {isTeacher ? (
        <LeftSection>
          <ArrowBtn onClick={handlePrevious}>
            <img src={ArrowLeft} alt="Left" />
          </ArrowBtn>
          <Select
            value={data[selectedIndex]}
            onChange={(e) => setSelectedIndex(data.indexOf(e.target.value))}
          >
            {data.map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </Select>
          <ArrowBtn onClick={handleNext}>
            <img src={ArrowRight} alt="Right" />
          </ArrowBtn>
        </LeftSection>
      ) : (
        <LeftSection>
          <AssignmentTitle>{submission.assignment.title}</AssignmentTitle>
        </LeftSection>
      )}
      <RightSection>
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
              isTeacher,
              setShowSelectType,
              methods,
              submission,
              pageMode,
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
  isTeacher,
  setShowSelectType,
  methods,
  submission,
  pageMode,
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
        {/* {selectReviewType(
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
              )} */}
        <RoundedBorderSubmitBtn
          text={isTeacher ? 'Jedd AI' : 'Request Feedback'}
          onClickFn={(event) => {
            event.stopPropagation();
            setShowSelectType(true);
          }}
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
      <RoundedBorderSubmitBtn
        leftIcon={'/img/downloadPDF.svg'}
        text={'Download'}
        onClickFn={methods.downloadPDF}
      />
    );
  }

  return <></>;
}
