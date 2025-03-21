import React from 'react';
import {
  MainContainer,
  HowJeddAiWorksVideo,
  FAQSection,
  FAQHeading,
  FAQContent,
} from './whatIsJeddAiStyle.js';
import MaterialAccordion from '../MaterialAccordion/index.jsx';
import { accordionItems } from './OnboardingAccordionItems.js';

const WhatIsJeddAi = () => {
  return (
    <MainContainer>
      <HowJeddAiWorksVideo
        src="https://fast.wistia.net/embed/iframe/pas1z2rcol"
        frameborder="0"
        allowfullscreen
      ></HowJeddAiWorksVideo>
      <FAQSection>
        <FAQHeading>FAQ's</FAQHeading>
        <FAQContent>
          <MaterialAccordion accordionList={accordionItems} />
        </FAQContent>
      </FAQSection>
    </MainContainer>
  );
};

export default WhatIsJeddAi;
