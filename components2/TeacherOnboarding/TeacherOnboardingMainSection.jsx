import React, { useEffect, useState } from 'react';
import {
  OnboardingMainContainer,
  MainTitle,
  Subtitle,
  Header,
  NextButtonContainer,
  ContentSection,
  Video,
} from './teacherOnboardingMainSectionStyle';
import RoundedBorderSubmitBtn from '../Buttons/RoundedBorderSubmitBtn/index';
import GrayBackgroundBtn from '../Buttons/GrayBackgroundBtn';

const TeacherOnboardingMainSection = ({ content, lastItem, handleNextButtonClick }) => {
  const [videoSrc, setVideoSrc] = useState(content.video);

  useEffect(() => {
    setVideoSrc("");
    setTimeout(() => {
      setVideoSrc(`${content.video}?autoplay=0&controlsVisibleOnLoad=true&wtime=0`);
    }, 10); 
  }, [content.id]);

  return (
    <OnboardingMainContainer>
      <ContentSection>
        <Header>
          <MainTitle>{content.title}</MainTitle>
          <Subtitle fixedHeight={true}>{content.subTitle}</Subtitle>
        </Header>
        <Video
          key={content.tite}
          src={videoSrc}
          frameborder="0"
          allowfullscreen
        ></Video>
      </ContentSection>
      <NextButtonContainer>
        <GrayBackgroundBtn
          buttonText={lastItem ? 'Start' : 'Next'}
          onClickFn={handleNextButtonClick}
          showRightIcon={!lastItem}
        />
      </NextButtonContainer>
    </OnboardingMainContainer>
  );
};

export default TeacherOnboardingMainSection;
