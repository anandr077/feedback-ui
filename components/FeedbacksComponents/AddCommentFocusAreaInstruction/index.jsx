import React from 'react';
import QuestionMarkIcon from '../../../static/img/help-icon.svg';
import {
  MainContainer,
  Heading,
  Steps,
  Section,
  Text,
  SectionContainer,
} from './style';

const AddCommentFocusAreaInstruction = ({ heading, firstIcon, firstStep, secondStep, secondIcon, thirdIcon, thirdStep }) => {
  return (
    <MainContainer>
      <Heading>
        <img src={QuestionMarkIcon} />
        <h1>
          {heading}
        </h1>
      </Heading>
      <Steps>STEPS</Steps>
      <SectionContainer>
        <Section>
          <img
            className="abcIcon"
            src={firstIcon}
          />
          <Text>
            {firstStep}
          </Text>
        </Section>
        <Section>
          <img style={{width: 'fit-content'}} src={secondIcon} />
          <Text>{secondStep}</Text>
        </Section>
        <Section>
          <img src={thirdIcon} />
          <Text>{thirdStep}</Text>
        </Section>
      </SectionContainer>
    </MainContainer>
  );
};

export default AddCommentFocusAreaInstruction;
