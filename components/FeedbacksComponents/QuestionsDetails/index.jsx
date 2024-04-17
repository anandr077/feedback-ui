import React from 'react';
import {
  QuestionDetailsContainer,
  QuestionSection,
  QuestionBody,
  Heading,
  SerialNumber,
  Question,
} from './style';
import RightSidebarHeading from '../RightSidebarHeading';
import GrayTick from '../../../static/img/Ticklightcolor.svg';
import PurpleTick from '../../../static/img/16purplebgtick.svg';

const QuestionsDetails = ({ handleClose, openRightPanel, submission, QuestionIndex }) => {
  console.log('the questions are ', QuestionIndex);
  return (
    <QuestionDetailsContainer openRightPanel={openRightPanel}>
      <RightSidebarHeading title={'Questions'} handleClose={handleClose} />
      <QuestionSection>
        {submission.assignment.questions.map((question, idx) => {
          return (
            <QuestionBody>
              <Heading>
                <SerialNumber>Question {question.serialNumber}</SerialNumber>
                <img src={QuestionIndex === idx ? PurpleTick : GrayTick} />
              </Heading>
              <Question>{question.question}</Question>
            </QuestionBody>
          );
        })}
      </QuestionSection>
    </QuestionDetailsContainer>
  );
};

export default QuestionsDetails;
