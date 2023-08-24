import React from 'react';
import styled from 'styled-components';
import '@lottiefiles/lottie-player';

export default function Loader() {
  return (
    <Container>
      <LottieContainer>
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="./icons/loader.json"
        ></lottie-player>
      </LottieContainer>
      <StyledText>Loading brain power...</StyledText>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
`;

const LottieContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  z-index: 1;
  width: auto;
  height: 100px;
`;

const StyledText = styled.div`
  width: 326px;
  height: 26px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
  text-align: center;
  color: #1e252a;
`;
