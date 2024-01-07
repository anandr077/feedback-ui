import React from 'react';
import { DotsContainer, Dot, FooterContainer, ButtonContainer, Button } from './onboardFooterStyle';

const OnboardFooter = ({ stage, setStage }) => {
  return (
    <FooterContainer>
      <DotsContainer>
        <Dot isActive={stage === 1}></Dot>
        <Dot isActive={stage === 2}></Dot>
        <Dot isActive={stage === 3}></Dot>
        <Dot isActive={stage === 4}></Dot>
        <Dot isActive={stage === 5}></Dot>
      </DotsContainer>
      <ButtonContainer>
        <Button prev={true}>Previous</Button>
        <Button next={true} onClick={()=> setStage(stage + 1)}>Next</Button>
      </ButtonContainer>
    </FooterContainer>
  );
};

export default OnboardFooter;
