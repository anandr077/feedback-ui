import { FeedbackContainer, OverAllCommentTitle } from './style';
import TextField from '../TextField';
import EditableText from './EditableText';
import { updateFeedback } from '../../service';
import AudioRecorder from '../AudioRecorder';
import { useState } from 'react';
import NonEditableFeedback from '../../components2/NonEditableFeedback';
import AudioPlayer from '../AudioPlayer';
import { base64ToBlob, blobToBase64 } from '../../utils/blobs';
import { TextareaAutosize } from '@mui/material';

const OverallFeedback = ({
  pageMode,
  handleOverAllFeedback,
  submissionId,
  question,
  initialOverallFeedback,
  setInitialOverAllFeedback,
  overallComment,
  updateOverAllFeedback,
}) => {

  function showOverallComment(pageMode, overallComment) {
    if (pageMode === 'REVIEW') {
      return (
        <EditableText
          initialValue={overallComment?.comment}
          onSave={onSave(overallComment)}
        ></EditableText>
      );
    }
    if (pageMode === 'DRAFT') {
      return <></>;
    }
    return <textarea>{overallComment?.comment}</textarea>;
  }

  const onSave = (overallComment) => (newCommentText) => {
    if (overallComment === null || overallComment === undefined) {
      return handleOverAllFeedback(question.serialNumber, newCommentText, null);
    }
    return updateOverAllFeedback(overallComment.id, newCommentText, overallComment.audio);
  };

  
  const handleDeleteAudioFeedback = (audioFeedback) =>{
    return updateOverAllFeedback(overallComment.id, overallComment.comment, null);
  }

  const handleGeneratedAudioFeedback = (audioFeedback) =>{
    console.log("audioFeedback", audioFeedback)
    blobToBase64(audioFeedback).then((base64) => {
      if (overallComment === null || overallComment === undefined) {
        return handleOverAllFeedback(question.serialNumber, "", base64);
      }
      return updateOverAllFeedback(
        overallComment.id, overallComment.comment, base64
      );
    })
  }

  const audioOverallComment = (pageMode, overallComment) => {
    if (pageMode === 'REVIEW') {
      if (overallComment?.audio) {
        return (
          <AudioRecorder
            handleGeneratedAudioFeedback={handleGeneratedAudioFeedback}
            handleDelete={handleDeleteAudioFeedback}
            initialAudio={base64ToBlob(overallComment?.audio, 'audio/webm')}
          />
        );
      }
      return (
        <AudioRecorder
          handleGeneratedAudioFeedback={handleGeneratedAudioFeedback}
        />
      );
    }
    return null;
  };

  if (pageMode === 'DRAFT')
    return <></>
  if (pageMode === 'CLOSED' || pageMode === 'REVISE') {
    if (overallComment) {
      return (
        <NonEditableFeedback
          textFeedback={overallComment?.comment}
          audioFeedback={overallComment?.audio}
        />
      );
    }
    return <></>
  }

  return (
    <FeedbackContainer>
      <OverAllCommentTitle>Overall comment</OverAllCommentTitle>
      {showOverallComment(pageMode, overallComment)}
      {audioOverallComment(pageMode, overallComment)}
      
    </FeedbackContainer>
  );
};

export default OverallFeedback;
