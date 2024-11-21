import React from 'react';
import {
  OnboardingMainContainer,
  MainTitle,
  Subtitle,
  Header,
  ButtonContainer,
  Image,
} from './teacherOnboardingMainSectionStyle';
import RoundedBorderSubmitBtn from '../Buttons/RoundedBorderSubmitBtn/index';
import { useHistory } from 'react-router-dom';

const TeacherOnboardingMainSection = ({ content }) => {
  const history = useHistory();
  return (
    <OnboardingMainContainer>
      <Header>
        <MainTitle>{content.title}</MainTitle>
        <Subtitle>{content.subTitle}</Subtitle>
      </Header>
      <Image src={content.image} />
      <ButtonContainer>
        <RoundedBorderSubmitBtn
          text={content.buttonText}
          onClickFn={() => window.open(content.link, '_blank')}
        />
      </ButtonContainer>
    </OnboardingMainContainer>
  );
};

export default TeacherOnboardingMainSection;
