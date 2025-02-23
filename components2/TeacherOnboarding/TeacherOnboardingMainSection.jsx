import React from 'react';
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

  return (
    <OnboardingMainContainer>
      <ContentSection>
        <Header>
          <MainTitle>{content.title}</MainTitle>
          <Subtitle fixedHeight={true}>{content.subTitle}</Subtitle>
        </Header>
        <Video
          src={content.video}
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
