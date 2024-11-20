import React from 'react';
import { MainTitle, Subtitle, Header, ButtonContainer } from './teacherOnboardingMainSectionStyle';
import RoundedBorderSubmitBtn from '../Buttons/RoundedBorderSubmitBtn/index';
import { useHistory } from 'react-router-dom';

const TeacherOnboardingMainSection = ({ content }) => {
  const history = useHistory();
  return (
    <div>
      <Header>
        <MainTitle>{content.title}</MainTitle>
        <Subtitle>{content.subTitle}</Subtitle>
      </Header>
      <img src={content.image} />
      <ButtonContainer>
      <RoundedBorderSubmitBtn text={content.buttonText} onClickFn={()=> history.push(content.link)}/>
      </ButtonContainer>
    </div>
  );
};

export default TeacherOnboardingMainSection;
