import React, { useState } from 'react';
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
  ArrowBtn,
  Select
} from './style';
import ResubmitBtn from '../../../static/img/Resubmit.svg';
import ActiveCommentIcon from '../../../static/img/purplesinglecomment.svg';
import CommentIcon from '../../../static/img/graysinglecomment.svg';
import ActiveFocusIcon from '../../../static/img/purplehighlight.svg';
import FocusIcon from '../../../static/img/grayhighlight.svg';
import ArrowLeft from '../../../static/img/arrowleftgray.svg';
import ArrowRight from '../../../static/img/arrowrightgray.svg';

const data = ['Student one', 'Student two', 'Student three', 'Student four', 'Student five'];

const FeedbackHeader = ({
  commentFocusAreaToggle,
  setCommentFocusAreaToggle,
  methods
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

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
        <ReassignBtn>
          <img src={ResubmitBtn} />
          Reassign Task
        </ReassignBtn>
        <SubmitBtn onClick={()=> methods.showSubmitPopuphandler('SubmitForReview')}>Submit Feedback</SubmitBtn>
      </RightSection>
    </FeedbackHeaderContainer>
  );
};

export default FeedbackHeader;
