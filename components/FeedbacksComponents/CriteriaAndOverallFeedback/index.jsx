import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  MainContainer,
  Heading,
  HeadingTitle,
  CloseBtn,
  HeadingDropdown,
  Text,
  RubricContainer,
  RubricInputContainer,
  RubricButton,
  OverallFeedbackContainer,
  TextFeedback,
  FeedbackBtn,
} from './style';
import CloseIcon from '../../../static/img/close.svg';
import QuestionIcon from '../../../static/img/question-mark.svg';
import TickMark from '../../../static/img/Ticklightcolor.svg';
import ArrowDownIcon from '../../../static/img/gray-arrow-down.svg';
import Microphone from '../../../static/img/Microphone.svg';
import { FeedbackContext } from '../FeedbacksRoot/FeedbackContext';
import AudioRecorder from '../../AudioRecorder';
import { base64ToBlob, blobToBase64 } from '../../../utils/blobs';
import OverallFeedback from '../../OverallFeedback';
import NewOverallFeedback from '../../NewOverallFeedback';
// import MemoizedAudioRecorder from '../../AudioRecorder';

const CriteriaAndOverallFeedback = ({
  handleClick,
  openRightPanel,
  QuestionIndex,
  addOverallFeedback,
  updateOverAllFeedback,
  pageMode,
}) => {
  const { overallComments } = useContext(FeedbackContext);
  console.log('QuestionIndex', QuestionIndex);
  console.log('overallComments', overallComments);
  const [inputValue, setInputValue] = useState('');
  const [overallComment, setOverallComment] = useState({});
  const handleInputChange = (event) => {
    const allowedChars = /^[0-9]$|^$/;
    if (allowedChars.test(event.target.value)) {
      setInputValue(event.target.value);
    }
  };

  useEffect(() => {
    const commentObject = overallComments.find(
      (comment) => comment.questionSerialNumber === QuestionIndex + 1
    );
    console.log('first comment', commentObject);
    setOverallComment(commentObject);
  }, [overallComments, QuestionIndex]);

  return (
    <MainContainer openRightPanel={openRightPanel}>
      <Heading>
        <HeadingTitle>
          Assessment Criteria
          <img src={QuestionIcon} />
        </HeadingTitle>
        <HeadingDropdown>
          <img src={TickMark} />
          <img src={ArrowDownIcon} />
        </HeadingDropdown>
        <CloseBtn src={CloseIcon} onClick={() => handleClick('')} />
      </Heading>
      <Text>Click the button below to complete this section</Text>
      <RubricContainer>
        <RubricInputContainer>
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
          />{' '}
          / 5
        </RubricInputContainer>
        <RubricButton>Rubric</RubricButton>
      </RubricContainer>
      <Heading>
        <HeadingTitle>
          Overall Feedback
          <img src={QuestionIcon} />
        </HeadingTitle>
        <HeadingDropdown>
          <img src={TickMark} />
        </HeadingDropdown>
      </Heading>
      <OverallFeedbackContainer>
        <NewOverallFeedback
          pageMode={pageMode}
          addOverallFeedback={addOverallFeedback}
          serialNumber={QuestionIndex + 1}
          overallComment={overallComment}
          updateOverAllFeedback={updateOverAllFeedback}
        />
      </OverallFeedbackContainer>
    </MainContainer>
  );
};

export default CriteriaAndOverallFeedback;
