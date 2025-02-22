import React from 'react';
import {
  MainContainer,
  FAQSection,
  FAQHeading,
  FAQContent,
} from './whatIsJeddAiStyle.js';
import MaterialAccordion from '../MaterialAccordion/index.jsx';
import { whatIsJeddAiFaq } from './onboardingContents.js';

const WhatIsJeddAi = () => {
  return (
    <MainContainer>
      <div>
        <img src="/img/howjeddleworks.svg" />
      </div>
      <FAQSection>
        <FAQHeading>FAQ's</FAQHeading>
        <FAQContent>
          <MaterialAccordion accordionList={whatIsJeddAiFaq} />
        </FAQContent>
      </FAQSection>
    </MainContainer>
  );
};

export default WhatIsJeddAi;
