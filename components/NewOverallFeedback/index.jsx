import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  ButtonContainer,
  CheckedContainer,
  CheckedContainerInput,
  CheckedContainerLable,
  OverallFeedbackSection,
  TextFeedback,
  ShowMoreButton,
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
  isShowOverallFeedbackSavedLabel,
  isShowSaveCommentLabel,
  isShowUpdateCommentLabel,
} from '../FeedbacksComponents/FeedbacksRoot/rules';
import GreenTick, { GreenTickText } from '../GreenTick';
import { isStringNull } from '../../utils/strings';
import CheckboxBordered from '../CheckboxBordered';

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
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
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

  useEffect(() => {
    const lineHeight = 24; 
    const lines = inputRef.current.scrollHeight / lineHeight;
    
    if (lines > 4) {
      setIsTruncated(true);
    }else{
      setIsTruncated(false);
    }
  }, [overallComment, serialNumber]);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
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
          <>
          <TextFeedback
            ref={inputRef}
            readOnly={true}
            read={true}
            style={{
              height: `auto`,
              maxHeight: isExpanded ? 'none' : '96px', 
              overflow: 'hidden',
              whiteSpace: 'pre-wrap',
            }}
          />
           {isTruncated && (
            <ShowMoreButton onClick={toggleText}>
              {isExpanded ? 'Show less' : 'Show more'}
            </ShowMoreButton>
          )}
          </>
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
      <CheckboxBordered checked={isChecked} onChange={handleCheckboxChange} />
      <CheckedContainerLable>Skip this section</CheckedContainerLable>
    </CheckedContainer>
  ) : (
    <OverallFeedbackSection>
      {isShowOverAllTextFeedback(pageMode, overallComment?.comment) && (
        <TextFeedback
          ref={inputRef}
          placeholder="Give feedback here..."
          style={{
            minHeight: '104px',
          }}
          onChange={(e) => {
            setIsEditing(true);
            textAreaAutoResize(e, inputRef);
          }}
        ></TextFeedback>
      )}
      <ButtonContainer>
        <Button
          onClick={() => {
            onSave();
          }}
          disabled={!isEditing}
        >
          {!isStringNull(overallComment?.comment)
            ? isShowUpdateCommentLabel()
            : isShowSaveCommentLabel()}
        </Button>
      </ButtonContainer>
      {isShowOverallFeedbackSavedLabel(overallComment?.comment) && (
        <GreenTickText text={'Overall feedback saved'} />
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

      <CheckedContainer>
        <CheckboxBordered checked={isChecked} onChange={handleCheckboxChange} />

        <CheckedContainerLable>Skip this section</CheckedContainerLable>
      </CheckedContainer>
    </OverallFeedbackSection>
  );
};

export default NewOverallFeedback;
