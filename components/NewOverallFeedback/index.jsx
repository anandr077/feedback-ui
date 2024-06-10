import React, { useEffect, useRef, useState } from 'react';
import { TextFeedback } from './style';
import { base64ToBlob, blobToBase64 } from '../../utils/blobs';
import AudioRecorder from '../AudioRecorder';
import NonEditableFeedback from '../../components2/NonEditableFeedback';
import AudioPlayer from '../AudioPlayer';
import { textAreaAutoResize } from '../../components2/textAreaAutoResize';
import { isShowClosedReviewAudioComment, isShowClosedReviewOverallComment, isShowClosedReviewOverallTextInputBox, isShowOverAllTextFeedback } from '../FeedbacksComponents/FeedbacksRoot/rules';

const NewOverallFeedback = ({
  pageMode,
  addOverallFeedback,
  serialNumber,
  overallComment,
  updateOverAllFeedback,
  reviewer,
  userId
}) => {
  const [audioComment, setAudioComment] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      if (overallComment?.comment) {
        inputRef.current.value = overallComment.comment;
      } else {
        inputRef.current.value = '';
      }
    }
  
    if (overallComment?.questionSerialNumber === serialNumber) {
      setAudioComment(overallComment.audio);
    }
    const textarea = inputRef.current;
    if (textarea) {
      const adjustHeight = () => {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
      };
      adjustHeight();
      textarea.addEventListener('input', adjustHeight);
      return () => {
        textarea.removeEventListener('input', adjustHeight);
      };
    }
  }, [overallComment, serialNumber, inputRef]);

  const onSave = () => {
    let value = inputRef.current.value;
    if (overallComment === null || overallComment === undefined) {
      return addOverallFeedback(serialNumber, value, null);
    }
    return updateOverAllFeedback(overallComment.id, value, audioComment);
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
        return addOverallFeedback(serialNumber, '', base64);
      }
      return updateOverAllFeedback(
        overallComment.id,
        overallComment.comment,
        base64
      );
    });
  };
  if (pageMode === 'DRAFT') return <></>;
  if (pageMode === 'CLOSED' || pageMode === 'REVISE') {
    return (
      <>
        {isShowClosedReviewOverallTextInputBox(pageMode) && (
          <TextFeedback
            ref={inputRef}
            readOnly={true}
            placeholder="Give feedback here..."
            read={true}
          />
        )}
        {isShowClosedReviewOverallComment(pageMode, overallComment?.comment, reviewer, userId) ? (
          <TextFeedback
            ref={inputRef}
            readOnly={true}
            read={true}
            style={{
              height: `auto`,
            }}
          />
        ) : null}
        {isShowClosedReviewAudioComment(pageMode, overallComment?.audio, reviewer, userId) && (
          <AudioPlayer
            generatedAudioFeedback={base64ToBlob(overallComment.audio, 'audio/webm')}
          />
        )}
      </>
    );
  }

  return (
    <>
     {isShowOverAllTextFeedback(pageMode, overallComment?.comment) && (
      <TextFeedback
        ref={inputRef}
        placeholder="Give feedback here..."
        style={{
          height: `${inputRef.current ? inputRef.current.scrollHeight : 104}px`,
        }}
        onBlur={pageMode === 'REVIEW' ? () => onSave() : undefined}
        onChange={(e) => {
          textAreaAutoResize(e, inputRef);
        }}
      ></TextFeedback>
     )}

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
    </>
  );
};

export default NewOverallFeedback;
