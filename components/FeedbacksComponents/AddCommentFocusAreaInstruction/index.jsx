import React from 'react';
import QuestionMarkIcon from '../../../static/img/24purplequestion.svg';
import {
  MainContainer,
  Heading,
  Steps,
  Section,
  IconGroup,
  IconContainer,
  Text,
  SectionContainer
} from './style';
import ABCIcon from '../../../static/img/abc34.svg';
import CommentIcon from '../../../static/img/24purplecomment.svg';
import MouseCircleIcon from '../../../static/img/mouse-circle.svg';
import AlphabetIcon from '../../../static/img/24grayalphabet.svg';
import ShareIcon from '../../../static/img/24grayshare.svg';
import ThumbsupIcon from '../../../static/img/24graythumbsup.svg';
import RefreshIcon from '../../../static/img/24refresh-circle-green.svg';

const AddCommentFocusAreaInstruction = () => {
  return (
    <MainContainer>
      <Heading>
        <img src={QuestionMarkIcon} />
        <h1>Adding Comments</h1>
      </Heading>
      <Steps>STEPS</Steps>
      <SectionContainer>
        <Section>
          <img className="abcIcon" src={ABCIcon} />
          <Text>Highlight a section of the response</Text>
        </Section>
        <Section>
          <IconContainer>
            <IconGroup>
              <img className="commentIcon" src={CommentIcon} />
              <img className="mouseIcon" src={MouseCircleIcon} />
            </IconGroup>
            <img src={ShareIcon} />
            <img src={ThumbsupIcon} />
            <img src={AlphabetIcon} />
          </IconContainer>
          <Text>Click the comment icon from the provided options</Text>
        </Section>
        <Section>
          <img src={RefreshIcon} />
          <Text>Repeat this process to add more comments</Text>
        </Section>
      </SectionContainer>
    </MainContainer>
  );
};

export default AddCommentFocusAreaInstruction;
