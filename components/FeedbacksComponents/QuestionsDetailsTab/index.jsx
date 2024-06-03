import React, { useContext } from 'react';
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
import { FeedbackContext } from '../FeedbacksRoot/FeedbackContext';

const QuestionsDetailsTab = ({
  handleClose,
  openRightPanel,
  submission,
  QuestionIndex,
  setQuestionIndex,
}) => {
  const { isResetEditorTextSelection } = useContext(FeedbackContext);

  const questionClick = (idx) => {
    setQuestionIndex(idx);
    isResetEditorTextSelection();
  };

  return (
    <QuestionDetailsContainer openRightPanel={openRightPanel}>
      <RightSidebarHeading title={'Questions'} handleClose={handleClose} />
      <QuestionSection>
        {submission.assignment.questions.map((question, idx) => {
          return (
            <QuestionBody onClick={() => questionClick(idx)}>
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
