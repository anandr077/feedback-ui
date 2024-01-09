import React, { useState, useContext } from 'react';
import { OnboardContainer } from './onboardContentStyle';
import StateYearDialogue from './StateYearDialogue';
import FirstPopUp from './FirstPopUp';
import { isMobileView } from '../../components/ReactiveRender'

const OnboardContent = ({}) => {
  const [stage, setStage] = useState(1);
  const mobileView = isMobileView()

  // if (editStateYear) {
  //   return (
  //     <OnboardContainer mobileView={mobileView}>
  //       <StateYearDialogue />
  //     </OnboardContainer>
  //   );
  // }

  return (
    <OnboardContainer mobileView={mobileView}>
      {/* {stage === 1 && <FirstPopUp setStage={setStage} stage={stage} />} */}
      {/* {stage === 2 && <StateYearDialogue setStage={setStage} />} */}
      <StateYearDialogue setStage={setStage} />
    </OnboardContainer>
  );
};

export default OnboardContent;
