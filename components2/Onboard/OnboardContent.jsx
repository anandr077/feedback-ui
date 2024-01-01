import React, { useState, useContext } from 'react';
import { OnboardContainer } from './onboardContentStyle';
import StateYearDialogue from './StateYearDialogue';
import FirstPopUp from './FirstPopUp';
import { OnboardingContext } from './OnboardingProvider';

const OnboardContent = () => {
  const [stage, setStage] = useState(1);
  const { editStateYear } = useContext(OnboardingContext);

  if (editStateYear) {
    return (
      <OnboardContainer>
        <StateYearDialogue />
      </OnboardContainer>
    );
  }

  return (
    <OnboardContainer>
      {stage === 1 && <FirstPopUp setStage={setStage} stage={stage} />}
      {stage === 2 && (
        <>
          <StateYearDialogue setStage={setStage} />
        </>
      )}
    </OnboardContainer>
  );
};

export default OnboardContent;
