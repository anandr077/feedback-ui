import React, { useEffect, useRef, useState } from 'react';
import { TextFeedback } from './style';
import { base64ToBlob, blobToBase64 } from '../../utils/blobs';
import AudioRecorder from '../AudioRecorder';
import NonEditableFeedback from '../../components2/NonEditableFeedback';
import AudioPlayer from '../AudioPlayer';
import { textAreaAutoResize } from '../../components2/textAreaAutoResize';

const NewOverallFeedback = ({
  pageMode,
  addOverallFeedback,
  serialNumber,
  overallComment,
  updateOverAllFeedback,
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
  }, [overallComment, serialNumber, inputRef]);

  
  // if(overallComment.questionSerialNumber === serialNumber){
  //   console.log('the overall feedback', overallComment.audio)
  // }

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
    if (overallComment !== null && overallComment !== undefined) {
      return (
        <>
          <TextFeedback
            ref={inputRef}
            readOnly={true}
            placeholder="Give feedback here..."
          ></TextFeedback>
          {audioComment ? (
            <AudioPlayer
              generatedAudioFeedback={base64ToBlob(audioComment, 'audio/webm')}
            />
          ) : (
            <></>
          )}
        </>
      );
    }
    return (
      <TextFeedback
        ref={inputRef}
        readOnly={true}
        style={{
          height: `auto`,
        }}
      ></TextFeedback>
    );
  }

  return (
    <>
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
