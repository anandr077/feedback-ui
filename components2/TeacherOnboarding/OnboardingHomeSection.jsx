import React from 'react';
import { DialogContent } from '@mui/material';
import TeacherHeroImage from '../../static/img/TeacherOnboardingHero.svg';
import {
  OnboardingBanner,
  OnboardingMainSection,
  OnboardingLeft,
} from './onboardingHomeSectionStyle';
import { MainTitle, Subtitle } from './teacherOnboardingMainSectionStyle';
import RoundedBorderSubmitBtn from '../Buttons/RoundedBorderSubmitBtn';
import { profileStateYear } from '../../service';

const OnboardingHomeSection = ({ currentSlide }) => {
  
  const handleGetStartedButtonClick = () => {
    profileStateYear({
      year: 2024,
      state: 'NSW',
    }).then(() => {
      currentSlide(false);
    });
  };

  return (
    <DialogContent>
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
          onClickFn={handleGetStartedButtonClick}
        />
      </OnboardingMainSection>
    </DialogContent>
  );
};

export default OnboardingHomeSection;
