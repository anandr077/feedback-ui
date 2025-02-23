import React from 'react';
import { DialogContent } from '@mui/material';
import {
  OnboardingMainSection,
  OnboardingLeft,
  OnboardingVideo,
} from './onboardingHomeSectionStyle';
import { MainTitle, Subtitle } from './teacherOnboardingMainSectionStyle';
import RoundedBorderSubmitBtn from '../Buttons/RoundedBorderSubmitBtn';
import { profileStateYear } from '../../service';
import { useProfile } from '../../components/state/hooks';
import Loader from '../../components/Loader';

const OnboardingHomeSection = ({ onNext }) => {
  const { data: profile, isLoadingdata: isLoadingProfile } = useProfile();

  const noStateYear =
    (profile?.state === null || profile?.state === undefined) &&
    (profile?.year === null || profile?.year === undefined);

  const handleGetStartedButtonClick = () => {
    if (noStateYear) {
      profileStateYear({
        year: 12,
        state: 'NSW',
      }).then(() => {
        onNext();
      });
    } else {
      onNext();
    }
  };

  if (isLoadingProfile) {
    <Loader />;
  }

  return (
    <DialogContent>
      <OnboardingVideo
        src="https://fast.wistia.net/embed/iframe/pas1z2rcol"
        frameborder="0"
        allowfullscreen
      ></OnboardingVideo>
      <OnboardingMainSection>
        <OnboardingLeft>
          <MainTitle>
            Lighten the load with JeddAI, the ultimate feedback tool for
            formative assessment.
          </MainTitle>
          <Subtitle>
            Give feedback to students in less than 60 seconds.
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
