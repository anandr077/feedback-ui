import React from 'react';
import { Screen } from './onboardingScreenStyle';
import OnboardContent from './OnboardContent';

const OnboardingScreen = ({editStateYear, onClose}) => {
  return (
    <Screen>
      <OnboardContent editStateYear = {editStateYear} onClose={onClose}/>
    </Screen>
  );
};

export default OnboardingScreen;
