import React, { useState, useContext } from 'react';
import { OnboardContainer } from './onboardContentStyle';
import StateYearDialogue from './StateYearDialogue';
import FirstPopUp from './FirstPopUp';
import { isMobileView } from '../../components/ReactiveRender'

const OnboardContent = ({editStateYear, onClose}) => {
  const [stage, setStage] = useState(2);
  const mobileView = isMobileView()

  if (editStateYear) {
    return (
      <OnboardContainer mobileView={mobileView}>
        <StateYearDialogue setStage={setStage} editStateYear={editStateYear} onClose = {onClose}/>
      </OnboardContainer>
    );
  }

  return (
    <OnboardContainer mobileView={mobileView}>
      {stage === 1 && <FirstPopUp setStage={setStage} stage={stage} />}
      {stage === 2 && <StateYearDialogue setStage={setStage} onClose = {onClose} />}
    </OnboardContainer>
  );
};

export default OnboardContent;
