import React from 'react';
import { DialogContent } from '@mui/material';
import TeacherHeroImage from '../../static/img/TeacherOnboardingHero.svg';
import {
  OnbaordingBanner,
  OnbaordingMainSection,
} from './onboardingHomeSectionStyle';
import { MainTitle, Subtitle } from './teacherOnboardingMainSectionStyle';
import RoundedBorderSubmitBtn from '../Buttons/RoundedBorderSubmitBtn';
import CloseButton from '../Buttons/CloseButton';

const OnboardingHomeSection = ({ currentSlide }) => {
  return (
    <DialogContent>
      <CloseButton onclickFn={()=> console.log('Hello world')}/>
      <OnbaordingBanner src={TeacherHeroImage} />
      <OnbaordingMainSection>
        <div>
          <MainTitle>Welcome to Jeddle</MainTitle>
          <Subtitle>
            Create Tasks, Give Feedback or Ask JeddAI for Feedback
          </Subtitle>
        </div>
        <RoundedBorderSubmitBtn
          text={'Get Started'}
          onClickFn={() => currentSlide(false)}
        />
      </OnbaordingMainSection>
    </DialogContent>
  );
};

export default OnboardingHomeSection;
