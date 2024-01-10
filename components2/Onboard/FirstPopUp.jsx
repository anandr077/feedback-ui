import React from 'react';
import {
  MainContainer,
  Header,
  HeaderText,
  Name,
  SkipBtn,
  ContentBox,
  PlayBtn,
  Content,
} from './firstPopUpStyle';
import OnboardFooter from './OnboardFooter';

const FirstPopUp = ({ setStage, stage }) => {
  return (
    <MainContainer>
      <Header>
        <HeaderText>
          Welcome to <Name>Jeddle</Name>
        </HeaderText>
      </Header>
      <ContentBox>
        <PlayBtn src="img/play.png" />
        <Content>How <br/>Jeddle <br/>Works</Content>
      </ContentBox>
      <OnboardFooter stage={stage} setStage={setStage} />
    </MainContainer>
  );
};

export default FirstPopUp;
