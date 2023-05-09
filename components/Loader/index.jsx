import React from "react";
import Lottie from "lottie-react";
import animationData from "./data.json";
import styled from "styled-components";
import "@lottiefiles/lottie-player";

export default function Loader() {
  return<Container> 
   <LottieContainer><lottie-player
  autoplay
  loop
  mode="normal"
  src="./icons/data.json"
>
</lottie-player>
</LottieContainer> 
<StyledText>Making sure everything looks good...</StyledText>
</Container>;
}
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
top : 30%;
z-index: 1;
position: fixed;
left: 760px;
`;
const LottieContainer = styled.div`
display: flex;
align-items: center;
padding: 0px;
z-index: 1;
width: 326px;
height: 270px;
;`;

const StyledText = styled.div`
width: 326px;
height: 26px;
font-family: '"IBM Plex Sans", sans-serif';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 26px;
text-align: center;
color: #1E252A;
`;