import React, { useState } from 'react';
import {
  MainContainer,
  Heading,
  HeadingTitle,
  CloseBtn,
  HeadingDropdown,
  Text,
  RubricContainer,
  RubricInputContainer,
  RubricButton,
  OverallFeedbackContainer,
  TextFeedback,
  FeedbackBtn
} from './style';
import CloseIcon from '../../../static/img/close.svg';
import QuestionIcon from '../../../static/img/question-mark.svg';
import TickMark from '../../../static/img/Ticklightcolor.svg';
import ArrowDownIcon from '../../../static/img/gray-arrow-down.svg';
import Microphone from '../../../static/img/Microphone.svg';

const CriteriaAndOverallFeedback = ({handleClick, openRightPanel}) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    const allowedChars = /^[0-9]$|^$/;
    if (allowedChars.test(event.target.value)) {
      setInputValue(event.target.value);
    }
  };

  return (
    <MainContainer openRightPanel={openRightPanel}>
      <Heading>
        <HeadingTitle>
          Assessment Criteria
          <img src={QuestionIcon} />
        </HeadingTitle>
        <HeadingDropdown>
          <img src={TickMark} />
          <img src={ArrowDownIcon} />
        </HeadingDropdown>
        <CloseBtn src={CloseIcon} onClick={()=> handleClick('')}/>
      </Heading>
      <Text>Click the button below to complete this section</Text>
      <RubricContainer>
        <RubricInputContainer>
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
          />{' '}
          / 5
        </RubricInputContainer>
        <RubricButton>Rubric</RubricButton>
      </RubricContainer>
      <Heading>
        <HeadingTitle>
          Overall Feedback
          <img src={QuestionIcon} />
        </HeadingTitle>
        <HeadingDropdown>
          <img src={TickMark} />
        </HeadingDropdown>
      </Heading>
      <OverallFeedbackContainer>
        <TextFeedback placeholder="Give feedback here..."></TextFeedback>
        <FeedbackBtn>
          <img src={Microphone} />
          Add Audio
        </FeedbackBtn>
      </OverallFeedbackContainer>
    </MainContainer>
  );
};

export default CriteriaAndOverallFeedback;
