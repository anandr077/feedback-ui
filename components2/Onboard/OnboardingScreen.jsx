import React from 'react';
import { Screen, FooterContainer } from './onboardingScreenStyle';
import Footer from '../../components/Footer';
import OnboardContent from './OnboardContent';

const OnboardingScreen = () => {
  return (
    <Screen>
      <OnboardContent />
      {/* <FooterContainer>
        <Footer />
      </FooterContainer> */}
    </Screen>
  );
};

export default OnboardingScreen;
