import React from 'react';
import {
  MainContainer,
  SubmissionBody,
  LottieContainer,
  AIImage,
  TextContainer,
} from './style';
import RightSidebarHeading from '../RightSidebarHeading';
import '@lottiefiles/lottie-player';
import AIFeedbackImage from '../../../static/img/AI-feedback-Image.svg';



const SubmissionAITab = ({ handleClose, openRightPanel ,showLottie}) => {
  
  const active = true;
  return (
    <MainContainer openRightPanel={openRightPanel}>
      <RightSidebarHeading
        title={'JeddAI Review'}
        handleClose={handleClose}
      />
      <SubmissionBody>
        {showLottie ? 
        <LottieContainer>
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="./icons/Scanning.json"
        ></lottie-player>
        </LottieContainer> :
         <>
        <AIImage src={AIFeedbackImage} alt="AI Feedback Image" />
        <TextContainer>
          <ul>
            <li>Sorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
              </li>
              <li>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</li>
          </ul>
        </TextContainer>
        </>}
     
      </SubmissionBody>
    </MainContainer>
  );
};

export default SubmissionAITab;
