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

const QuestionsDetailsTab = ({ handleClose, openRightPanel, submission, QuestionIndex, setQuestionIndex }) => {
 
  return (
    <QuestionDetailsContainer openRightPanel={openRightPanel}>
      <RightSidebarHeading title={'Questions'} handleClose={handleClose} />
      <QuestionSection>
        {submission.assignment.questions.map((question, idx) => {
          return (
            <QuestionBody onClick={()=> setQuestionIndex(idx)}>
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

export default QuestionsDetailsTab;
