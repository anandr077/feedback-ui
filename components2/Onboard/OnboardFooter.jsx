import React from 'react';
import { DotsContainer, Dot, FooterContainer, ButtonContainer, Button } from './onboardFooterStyle';

const OnboardFooter = ({ stage, setStage }) => {
  return (
    <FooterContainer>
      <ButtonContainer>
        <Button prev={true}>Previous</Button>
        <Button next={true} onClick={()=> setStage(stage + 1)}>Next</Button>
      </ButtonContainer>
    </FooterContainer>
  );
};

export default OnboardFooter;
