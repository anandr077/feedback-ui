import React from 'react';
import { DialogContent } from '@mui/material';
import TeacherHeroImage from '../../static/img/TeacherOnboardingHero.svg';
import {
  OnboardingBanner,
  OnboardingMainSection,
  OnboardingLeft
} from './onboardingHomeSectionStyle';
import { MainTitle, Subtitle } from './teacherOnboardingMainSectionStyle';
import RoundedBorderSubmitBtn from '../Buttons/RoundedBorderSubmitBtn';
import CloseButton from '../Buttons/CloseButton';

const OnboardingHomeSection = ({ currentSlide, onCloseOnboarding }) => {
  return (
    <DialogContent>
      <CloseButton onclickFn={onCloseOnboarding}/>
      <OnboardingBanner src={TeacherHeroImage} />
      <OnboardingMainSection>
        <OnboardingLeft>
          <MainTitle>Welcome to Jeddle</MainTitle>
          <Subtitle>
            Create Tasks, Give Feedback or Ask JeddAI for Feedback
          </Subtitle>
        </OnboardingLeft>
        <RoundedBorderSubmitBtn
          text={'Get Started'}
          onClickFn={() => currentSlide(false)}
        />
      </OnboardingMainSection>
    </DialogContent>
  );
};

export default OnboardingHomeSection;
