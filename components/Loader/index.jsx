import React from 'react';
import styled from 'styled-components';
import '@lottiefiles/lottie-player';

export default function Loader() {
  return (
    <FullPageContainer>
      <LottieContainer>
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="./icons/loader.json"
        ></lottie-player>
      </LottieContainer>
      <StyledText>Loading brain power...</StyledText>
    </FullPageContainer>
  );
}

const FullPageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255); 
  z-index: 9999; 
`;


const LottieContainer = styled.div`
  width: auto;
  height: 100px;
  padding: 0px;
  z-index: 1;
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
