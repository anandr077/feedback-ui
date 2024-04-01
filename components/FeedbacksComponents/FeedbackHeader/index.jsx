import React from 'react';
import {
  FeedbackHeaderContainer,
  LeftSection,
  RightSection,
  ReassignBtn,
  SubmitBtn,
  ToggleContainer,
  ToggleLavel,
  ToggleInput,
  ToggleBtn,
  ToggleSwitchLabels,
} from './style';
import ResubmitBtn from '../../../static/img/Resubmit.svg';

const FeedbackHeader = ({
  commentFocusAreaToggle,
  setCommentFocusAreaToggle,
}) => {
  return (
    <FeedbackHeaderContainer>
      <LeftSection></LeftSection>
      <RightSection>
        <ToggleContainer>
          <ToggleLavel commentFocusAreaToggle={commentFocusAreaToggle}>
            <ToggleInput
              checked={commentFocusAreaToggle}
              onChange={() =>
                setCommentFocusAreaToggle(!commentFocusAreaToggle)
              }
              type="checkbox"
            />
            <ToggleBtn>{commentFocusAreaToggle ? 'EN' : 'PT'} </ToggleBtn>
            <ToggleSwitchLabels>
              <span>PT</span>
              <span>EN</span>
            </ToggleSwitchLabels>
          </ToggleLavel>
        </ToggleContainer>
        <ReassignBtn>
          <img src={ResubmitBtn} />
          Reassign Task
        </ReassignBtn>
        <SubmitBtn>Submit Feedback</SubmitBtn>
      </RightSection>
    </FeedbackHeaderContainer>
  );
};

export default FeedbackHeader;
