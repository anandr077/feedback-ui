import React from 'react';
import QuestionMarkIcon from '../../../static/img/help-icon.svg';
import {
  MainContainer,
  Heading,
  Steps,
  Section,
  IconGroup,
  IconContainer,
  Text,
  SectionContainer,
} from './style';
import CommentIcon from '../../../static/img/24purplecomment.svg';
import MouseCircleIcon from '../../../static/img/mouse-circle.svg';
import AlphabetIcon from '../../../static/img/24grayalphabet.svg';
import ShareIcon from '../../../static/img/24grayshare.svg';
import ThumbsupIcon from '../../../static/img/24graythumbsup.svg';
import RefreshIcon from '../../../static/img/24refresh-circle-green.svg';

const AddCommentFocusAreaInstruction = ({ heading, firstIcon, firstStep, secondStep, secondIcon, thirdStep }) => {
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
          <img src={RefreshIcon} />
          <Text>{thirdStep}</Text>
        </Section>
      </SectionContainer>
    </MainContainer>
  );
};

export default AddCommentFocusAreaInstruction;
