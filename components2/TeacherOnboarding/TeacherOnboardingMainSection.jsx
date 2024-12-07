import React from 'react';
import {
  OnboardingMainContainer,
  MainTitle,
  Subtitle,
  Header,
  ButtonContainer,
  NextButtonContainer,
  ContentSection,
  Image,
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
        <Image src={content.image} />
        <ButtonContainer>
          <RoundedBorderSubmitBtn
            text={content.buttonText}
            onClickFn={() => window.open(content.link, '_blank')}
          />
        </ButtonContainer>
      </ContentSection>
      <NextButtonContainer>
        <GrayBackgroundBtn
          buttonText={lastItem ? 'Finish' : 'Next'}
          onClickFn={handleNextButtonClick}
          showRightIcon={!lastItem}
        />
      </NextButtonContainer>
    </OnboardingMainContainer>
  );
};

export default TeacherOnboardingMainSection;
