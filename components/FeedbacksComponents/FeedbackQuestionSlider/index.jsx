import React from 'react';
import styled from 'styled-components';
import LeftIcon from '../../../static/img/darkgray16leftarrow.svg';
import RightIcon from '../../../static/img/darkgray16rightarrow.svg';
import { FeedbackContext } from '../FeedbacksRoot/FeedbackContext';

const FeedbackQuestionSlider = ({
  setQuestionIndex,
  QuestionIndex,
  questions,
}) => {
  const {setNewCommentSerialNumber,setSelectedRange,setSelectedText, quillRefs, setShowFloatingDialogue } = React.useContext(FeedbackContext);

  const handlePreviousQuestion = () => {
    if (QuestionIndex === 0) return;
    setShowFloatingDialogue(false);

   
    setNewCommentSerialNumber(0)
    setSelectedRange(null)
    setSelectedText(null)
    setQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextQuestion = () => {
    if (QuestionIndex === questions.length - 1) return;
    setShowFloatingDialogue(false);

    setNewCommentSerialNumber(0)
    setSelectedRange(null)
    setSelectedText(null)
    setQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <QuestionCounter size={questions.length}>
      {questions.length > 1 && (
        <QuestionBtn
          onClick={handlePreviousQuestion}
          disabled={QuestionIndex === 0}
        >
          <img src={LeftIcon} /> Previous
        </QuestionBtn>
      )}
      <QuestionBox>
        Question {QuestionIndex + 1} of {questions.length}
      </QuestionBox>
      {questions.length > 1 && (
        <QuestionBtn
          onClick={handleNextQuestion}
          disabled={QuestionIndex === questions.length - 1}
        >
          <img src={RightIcon} /> Next
        </QuestionBtn>
      )}
    </QuestionCounter>
  );
};

export default FeedbackQuestionSlider;

export const QuestionCounter = styled.div`
  display: flex;
  justify-content: ${(props) => (props.size > 1 ? '' : 'center')};
  width: 100%;
  align-items: center;
  padding: 8px 16px;
  background-color: rgba(255, 255, 255, 1);
  border-bottom: 1px solid rgba(201, 198, 204, 0.5);
`;

export const QuestionBtn = styled.button`
  min-width: 85px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 4px 8px;
  border-radius: 16px;
  border: 1.5px solid rgba(75, 70, 79, 1);
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 600;
  font-size: var(--font-size-s);
  line-height: 20px;
  color: rgba(75, 70, 79, 1);
  background-color: transparent;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const QuestionBox = styled.div`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 600;
  font-size: var(--font-size-l);
  line-height: 24px;
  color: rgba(75, 70, 79, 1);
  margin: 0 auto;
`;
