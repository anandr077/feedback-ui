import React from 'react';
import {
  MainContainer,
  SubmissionBody,
  LottieContainer,
  AIImage,
  TextContainer,
  StyledText,
} from './style';
import RightSidebarHeading from '../RightSidebarHeading';
import '@lottiefiles/lottie-player';
import AIFeedbackImage from '../../../static/img/AI-feedback-Image.svg';
import { useState } from 'react';
import { useEffect } from 'react';

const lottieAnimations = [
  { src: './icons/Scanning.json', text: 'Scanning the document' },
  { src: './icons/Reviewing.json', text: 'Reviewing the document' },
  { src: './icons/Commenting.json', text: 'Commenting on the document' },
  { src: './icons/Grading.json', text: 'Grading the document' },
  { src: './icons/Finaliasing.json', text: 'Finalising the document' },
];

const JeddAITab = ({ handleClose, openRightPanel, showLottie }) => {
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);

  useEffect(() => {
    if (showLottie && currentAnimationIndex < lottieAnimations.length - 1) {
      const intervalId = setInterval(() => {
        setCurrentAnimationIndex((prevIndex) => prevIndex + 1);
      }, 4000);

      return () => clearInterval(intervalId);
    }
  }, [showLottie, currentAnimationIndex]);

  const { src, text } = lottieAnimations[currentAnimationIndex];

  const active = true;
  return (
    <MainContainer openRightPanel={openRightPanel}>
      <RightSidebarHeading title={'JeddAI Review'} handleClose={handleClose} />
      <SubmissionBody>
        {showLottie ? (
          <LottieContainer>
            <lottie-player
              key={src}
              autoplay
              loop
              mode="normal"
              src={src}
            ></lottie-player>
            <StyledText>{text}</StyledText>
          </LottieContainer>
        ) : (
          <>
            <AIImage src={AIFeedbackImage} alt="AI Feedback Image" />
            <TextContainer>
              <ul>
                <li>
                  Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Nunc vulputate libero et velit interdum, ac aliquet odio
                  mattis.
                </li>
                <li>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </li>
              </ul>
            </TextContainer>
          </>
        )}
      </SubmissionBody>
    </MainContainer>
  );
};

export default JeddAITab;
