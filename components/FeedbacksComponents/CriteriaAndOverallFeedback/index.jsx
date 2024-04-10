import React, { useContext, useEffect, useState } from 'react';
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

const CriteriaAndOverallFeedback = ({
  handleClick,
  openRightPanel,
  QuestionIndex,
  addOverallFeedback,
  updateOverAllFeedback,
}) => {
  const { overallComments } = useContext(FeedbackContext);
  console.log('QuestionIndex', QuestionIndex);
  console.log('overallComments', overallComments);
  const [inputValue, setInputValue] = useState('');
  const [overallComment, setOverallComment] = useState();
  const handleInputChange = (event) => {
    const allowedChars = /^[0-9]$|^$/;
    if (allowedChars.test(event.target.value)) {
      setInputValue(event.target.value);
    }
  };
  const [editedText, setEditedText] = useState();

  useEffect(() => {
    const commentObject = overallComments.find(
      (comment) => comment.questionSerialNumber === QuestionIndex + 1
    );
    console.log('first comment', commentObject);
    setOverallComment(commentObject);
    if (commentObject?.comment) {
      setEditedText(commentObject.comment);
    } else {
      setEditedText('');
    }
  }, [overallComments, QuestionIndex]);

  const handleDeleteAudioFeedback = (audioFeedback) => {
    return updateOverAllFeedback(
      overallComment.id,
      overallComment.comment,
      null
    );
  };

  const handleAudioFeedbackRecorded = (audioFeedback) => {
    blobToBase64(audioFeedback).then((base64) => {
      if (overallComment === null || overallComment === undefined) {
        return addOverallFeedback(QuestionIndex + 1, '', base64);
      }
      return updateOverAllFeedback(
        overallComment.id,
        overallComment.comment,
        base64
      );
    });
  };

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
        <TextFeedback
          value={editedText}
          placeholder="Give feedback here..."
        ></TextFeedback>
        {/* <FeedbackBtn> */}
        {/* <img src={Microphone} />
        Add Audio */}
        {/* {audioOverallComment(overallComment)} */}
        {/* <AudioOverallComment
            overallComment={overallComment}
            handleAudioFeedbackRecorded={handleAudioFeedbackRecorded}
            handleDeleteAudioFeedback={handleDeleteAudioFeedback}
          /> */}
        {overallComment?.audio ? (
          <AudioRecorder
            handleAudioFeedbackRecorded={handleAudioFeedbackRecorded}
            handleDelete={handleDeleteAudioFeedback}
            initialAudio={base64ToBlob(overallComment?.audio, 'audio/webm')}
          />
        ) : (
          <AudioRecorder
            handleAudioFeedbackRecorded={handleAudioFeedbackRecorded}
          />
        )}
        {/* </FeedbackBtn> */}
      </OverallFeedbackContainer>
    </MainContainer>
  );
};

export default CriteriaAndOverallFeedback;
