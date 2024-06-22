import React from 'react';
import {
  MainContainer,
  Content,
  Headline,
  Para
} from './style';

const WelcomeOverlayMobile = () => {
  return (
    <MainContainer>
      <Content>
        <Headline>Welcome to Jeddle.</Headline>
        <Para>Open our web app in desktop or tablet</Para>
      </Content>
    </MainContainer>
  );
};

export default WelcomeOverlayMobile;
