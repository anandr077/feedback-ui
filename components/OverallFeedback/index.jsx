import { useEffect, useRef } from 'react';
import {
  FeedbackContainer,
  OverAllCommentTitle,
  NonEditFeedbackContainer,
} from './style';
import {
  FeedbackContainer,
  HiddenInputBox,
  OverAllCommentTitle,
} from './style';
import TextField from '../TextField';
import EditableText from './EditableText';
import { updateFeedback } from '../../service';
import AudioRecorder from '../AudioRecorder';
import NonEditableFeedback from '../../components2/NonEditableFeedback';
import AudioPlayer from '../AudioPlayer';
import { base64ToBlob, blobToBase64 } from '../../utils/blobs';

const OverallFeedback = ({
  pageMode,
  addOverallFeedback,
  question,
  overallComment,
  updateOverAllFeedback,
}) => {
  console.log('question', question);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      const lineHeight = 25;
      const minRows = 1;
      const maxRows = 1000;

      const numberOfRows = Math.min(
        Math.max(
          Math.ceil(textareaRef.current.scrollHeight / lineHeight),
          minRows
        ),
        maxRows
      );

      const newHeight = numberOfRows * lineHeight;
      textareaRef.current.style.height = `${newHeight}px`;
    }
  }, []);

  const calculateTextareaHeight = () => {
    const lineHeight = 25;
    const minRows = 1;
    const maxRows = 1000;

    const numberOfRows = Math.min(
      Math.max(
        Math.ceil(textareaRef.current?.scrollHeight / lineHeight),
        minRows
      ),
      maxRows
    );

    const newHeight = numberOfRows * lineHeight;
    return `${newHeight}px`;
  };

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
    return (
      <HiddenInputBox
        style={{ height: calculateTextareaHeight() }}
        ref={textareaRef}
      >
        {overallComment?.comment}
      </HiddenInputBox>
    );
  }

  const onSave = (overallComment) => (newCommentText) => {
    if (overallComment === null || overallComment === undefined) {
      return addOverallFeedback(question.serialNumber, newCommentText, null);
    }
    return updateOverAllFeedback(
      overallComment.id,
      newCommentText,
      overallComment.audio
    );
  };

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
        return addOverallFeedback(question.serialNumber, '', base64);
      }
      return updateOverAllFeedback(
        overallComment.id,
        overallComment.comment,
        base64
      );
    });
  };

  const audioOverallComment = (pageMode, overallComment) => {
    console.log('second audio overall comment', overallComment);
    if (overallComment?.audio) {
      return (
        <AudioRecorder
          handleAudioFeedbackRecorded={handleAudioFeedbackRecorded}
          handleDelete={handleDeleteAudioFeedback}
          initialAudio={base64ToBlob(overallComment?.audio, 'audio/webm')}
        />
      );
    }
    return (
      <AudioRecorder
        handleAudioFeedbackRecorded={handleAudioFeedbackRecorded}
      />
    );
  };

  if (pageMode === 'DRAFT') return <></>;
  if (pageMode === 'CLOSED' || pageMode === 'REVISE') {
    if (overallComment !== null && overallComment !== undefined) {
      return (
        <NonEditFeedbackContainer>
          <NonEditableFeedback
            textFeedback={overallComment?.comment}
            audioFeedback={base64ToBlob(overallComment?.audio, 'audio/webm')}
          />
        </NonEditFeedbackContainer>
      );
    }
    return <></>;
  }

  return (
    <FeedbackContainer>
      <div style={{ borderTop: '1px solid #F1E6FC', paddingTop: '40px' }}>
        <OverAllCommentTitle>General Feedback</OverAllCommentTitle>
        {/* {audioOverallComment(pageMode, overallComment)} */}
        {/* {showOverallComment(pageMode, overallComment)} */}
      </div>
    </FeedbackContainer>
  );
};

export default OverallFeedback;
