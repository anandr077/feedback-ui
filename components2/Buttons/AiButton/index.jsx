import React from 'react';
import AiImage from '../../../static/icons/AI-Button@3x.svg';
import { MainButtonContainer } from './style';
import QuestionTooltip from '../../QuestionTooltip';

const AiButton = ({ handleClick }) => {
  return (
    <MainButtonContainer onClick={() => handleClick('tab4')}>
      <QuestionTooltip text={'Save time with AI'} img={AiImage} />
    </MainButtonContainer>
  );
};

export default AiButton;
