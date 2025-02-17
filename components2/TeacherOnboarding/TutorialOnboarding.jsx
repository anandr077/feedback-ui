import React from 'react';
import { VideoSection, FAQSection } from './tutorialOnboardingStyle.js';
import { MainContainer, Section, Title } from './startOnboardingStyle.js';

const TutorialOnboarding = () => {
  return (
    <MainContainer>
      <Section>
        <Title>How-To Videos</Title>
        <VideoSection>
           <img src="/img/onboardingThumbnail.svg" />
           <img src="/img/onboardingThumbnail.svg" />
           <img src="/img/onboardingThumbnail.svg" />
           <img src="/img/onboardingThumbnail.svg" />
           <img src="/img/onboardingThumbnail.svg" />
        </VideoSection>
      </Section>
      <FAQSection>
        <Title>FAQ's</Title>
      </FAQSection>
    </MainContainer>
  );
};

export default TutorialOnboarding;
