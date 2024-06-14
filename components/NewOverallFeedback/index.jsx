import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  ButtonContainer,
  CheckedContainer,
  CheckedContainerInput,
  CheckedContainerLable,
  OverallFeedbackSection,
  TextFeedback,
} from './style';
import { base64ToBlob, blobToBase64 } from '../../utils/blobs';
import AudioRecorder from '../AudioRecorder';
import AudioPlayer from '../AudioPlayer';
import { textAreaAutoResize } from '../../components2/textAreaAutoResize';
import {
  isShowClosedReviewAudioComment,
  isShowClosedReviewOverallComment,
  isShowClosedReviewOverallTextInputBox,
  isShowOverAllTextFeedback,
  isStringNull,
} from '../FeedbacksComponents/FeedbacksRoot/rules';
import GreenTick, { GreenTickText } from '../GreenTick';

const NewOverallFeedback = ({
  pageMode,
  addOverallFeedback,
  serialNumber,
  overallComment,
  updateOverAllFeedback,
  reviewer,
  userId,
}) => {
  const [audioComment, setAudioComment] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
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
    if (isEditing) setIsEditing(false);
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
  }, [overallComment, serialNumber]);

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

  const handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    if (
      checked &&
      (overallComment?.comment != null || overallComment?.audio != null)
    ) {
      updateOverAllFeedback(overallComment.id, '', null);
    }
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
            style={{
              height: 'auto',
            }}
            read={true}
          />
        )}
        {isShowClosedReviewOverallComment(
          pageMode,
          overallComment?.comment,
          reviewer,
          userId
        ) ? (
          <TextFeedback
            ref={inputRef}
            readOnly={true}
            read={true}
            style={{
              height: `auto`,
            }}
          />
        ) : null}
        {isShowClosedReviewAudioComment(
          pageMode,
          overallComment?.audio,
          reviewer,
          userId
        ) && (
          <AudioPlayer
            generatedAudioFeedback={base64ToBlob(
              overallComment.audio,
              'audio/webm'
            )}
          />
        )}
      </>
    );
  }

  return isChecked ? (
    <CheckedContainer>
      <CheckedContainerInput
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <CheckedContainerLable>Give Overall Feedback</CheckedContainerLable>
    </CheckedContainer>
  ) : (
    <OverallFeedbackSection>
      {isShowOverAllTextFeedback(pageMode, overallComment?.comment) && (
        <TextFeedback
          ref={inputRef}
          placeholder="Give feedback here..."
          style={{
            minHeight: '160px',
          }}
          onChange={(e) => {
            setIsEditing(true);
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
      <ButtonContainer>
        <Button
          onClick={() => {
            onSave();
          }}
          disabled={!isEditing}
        >
          {!isStringNull(overallComment?.comment) ? 'Update' : 'Save Feedback'}
        </Button>
      </ButtonContainer>
      {!isStringNull(overallComment?.comment) && (
        <GreenTickText text={'Overall feedback saved'} />
      )}
      <CheckedContainer>
        <CheckedContainerInput
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <CheckedContainerLable>Skip this section</CheckedContainerLable>
      </CheckedContainer>
    </OverallFeedbackSection>
  );
};

export default NewOverallFeedback;
