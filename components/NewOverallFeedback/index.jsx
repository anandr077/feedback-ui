import React, { useEffect, useRef } from 'react';
import { TextFeedback } from './style';
import { base64ToBlob, blobToBase64 } from '../../utils/blobs';
import AudioRecorder from '../AudioRecorder';
import NonEditableFeedback from '../../components2/NonEditableFeedback';
import AudioPlayer from '../AudioPlayer';

const NewOverallFeedback = ({
  pageMode,
  addOverallFeedback,
  serialNumber,
  overallComment,
  updateOverAllFeedback,
}) => {
  console.log('first overall feedback', overallComment);
  console.log('pageMode', pageMode);
  const inputRef = useRef();
  useEffect(() => {
    if (overallComment?.comment) {
      // setEditedText(commentObject.comment);
      inputRef.current.value = overallComment.comment;
    } else {
      // setEditedText('');
      inputRef.current.value = '';
    }
  }, [overallComment, serialNumber]);

  const onSave = () => {
    // console.log('newCommentText', newCommentText);
    let value = inputRef.current.value;
    if (overallComment === null || overallComment === undefined) {
      return addOverallFeedback(serialNumber, value, null);
    }
    return updateOverAllFeedback(
      overallComment.id,
      value,
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
    if (overallComment !== null && overallComment !== undefined) {
      return (
        <>
          {/* <NonEditableFeedback
            textFeedback={overallComment?.comment}
            audioFeedback={base64ToBlob(overallComment?.audio, 'audio/webm')}
          /> */}
          <TextFeedback
            // value={editedText}
            // onChange={pageMode === 'REVIEW' ? handleTextareaChange : undefined}
            ref={inputRef}
            readOnly={true}
            placeholder="Give feedback here..."
            // onBlur={pageMode === 'REVIEW' ? () => onSave() : undefined}
          ></TextFeedback>
          {overallComment?.audio ? (
            <AudioPlayer
              generatedAudioFeedback={base64ToBlob(
                overallComment?.audio,
                'audio/webm'
              )}
            />
          ) : (
            <></>
          )}
        </>
      );
    }
    return <></>;
  }

  return (
    <>
      <TextFeedback
        // value={editedText}
        // onChange={pageMode === 'REVIEW' ? handleTextareaChange : undefined}
        ref={inputRef}
        placeholder="Give feedback here..."
        onBlur={pageMode === 'REVIEW' ? () => onSave() : undefined}
      ></TextFeedback>

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
