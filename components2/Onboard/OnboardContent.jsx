import React, { useState } from 'react';
import {
  OnboardContainer,
  Logo,
  Heading,
  Text,
  Button,
  StyledArrowForwardIcon,
  StyledAddIcon,
  DotsContainer,
  Dot,
} from './onboardContentStyle';
import LogoImg from '../../static/icons/favicon.png';
import StateYearDialogue from './StateYearDialogue';

const OnboardContent = () => {
  const [stage, setStage] = useState(1);
  return (
    <OnboardContainer>
      <Logo src={LogoImg} />
      {stage === 1 && (
        <>
          <Heading>Welcome</Heading>
          <Text>
            Create documents, ask JedAI for feedback and organise your files.
            Get started to meet our community and ask JedAI for feedback
          </Text>
          <Button onClick={() => setStage(2)}>
            Get started <StyledArrowForwardIcon />
          </Button>
        </>
      )}
      {stage === 2 && (
        <>
          <Heading>Help us know you better</Heading>
          <StateYearDialogue setStage={setStage} />
        </>
      )}
      {stage === 3 && (
        <>
          <Heading>Start getting feedback</Heading>
          <Text>
            Now that you have folder to store your files, you can create a new
            document to start getting feedback
          </Text>
          <Button>
            <StyledAddIcon /> Create a new document
          </Button>
        </>
      )}
      <DotsContainer>
        <Dot isActive={stage === 1}></Dot>
        <Dot isActive={stage === 2}></Dot>
        <Dot isActive={stage === 3}></Dot>
      </DotsContainer>
    </OnboardContainer>
  );
};

export default OnboardContent;
