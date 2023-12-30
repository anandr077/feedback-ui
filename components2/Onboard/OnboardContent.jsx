import React, { useState } from 'react';
import {
  OnboardContainer,
  Heading,
  Text,
  Button,
} from './onboardContentStyle';
import StateYearDialogue from './StateYearDialogue';
import FirstPopUp from './FirstPopUp';

const OnboardContent = () => {
  const [stage, setStage] = useState(1);
  return (
    <OnboardContainer>
      {stage === 1 && (
        <FirstPopUp setStage={setStage} stage={stage} />
      )}
      {stage === 2 && (
        <>
          <StateYearDialogue setStage={setStage} />
        </>
      )}
    </OnboardContainer>
  );
};

export default OnboardContent;
