import React from 'react';
import {
  MainContainer,
  Content,
  Headline,
  Para
} from './style';
import { getUserName } from '../../service';

const WelcomeOverlayMobile = () => {
  const name = getUserName();
  return (
    <MainContainer>
      <Content>
        <Headline>Welcome to Jeddle.</Headline>
        <Para>Open our web app in desktop or tablet to get feedback</Para>
      </Content>
    </MainContainer>
  );
};

export default WelcomeOverlayMobile;
