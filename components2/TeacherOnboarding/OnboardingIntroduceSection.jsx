import React from 'react';
import { DialogContent } from '@mui/material';
import CloseButton from '../Buttons/CloseButton';
import { IntroMainContainer, Title, ButtonContainer } from './OnboardingIntroduceStyle.js';
import GrayBackgroundBtn from '../Buttons/GrayBackgroundBtn/index.jsx';

const OnboardingIntroduceSection = ({ onSlideChange, onCloseOnboarding }) => {
  return (
    <DialogContent>
      <CloseButton onclickFn={onCloseOnboarding} />
      <IntroMainContainer>
        <Title>Where am I and what is JeddAI?</Title>
        <ButtonContainer>
        <GrayBackgroundBtn
          buttonText={'Previous'}
          onClickFn={() => onSlideChange(0)}
          showLeftIcon={true}
        />
        <GrayBackgroundBtn
          buttonText={'Next'}
          onClickFn={() => onSlideChange(2)}
          showLeftIcon={true}
        />
        </ButtonContainer>
      </IntroMainContainer>
    </DialogContent>
  );
};

export default OnboardingIntroduceSection;
