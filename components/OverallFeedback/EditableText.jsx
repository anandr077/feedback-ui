import React, { useState, useEffect, useRef } from 'react';
import {
  HiddenInputBox,
  InputBox,
  ButtonsContainer,
  Button,
  EditTextContainer,
} from './editableTextStyle';

const EditableText = ({ initialValue, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);
  const [tempValue, setTempValue] = useState(initialValue);
  const textareaRef = useRef(null);

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

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = calculateTextareaHeight();

      if (isEditing && tempValue) {
        const textLength = tempValue.length;
        textareaRef.current.setSelectionRange(textLength, textLength);
        textareaRef.current.focus();
      }
    }
  }, [isEditing, tempValue]);

  const handleEditClick = () => {
    setIsEditing(true);
    setTempValue(value);
  };

  const handleSave = () => {
    setIsEditing(false);
    setValue(tempValue);
    onSave(tempValue);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTempValue(value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = calculateTextareaHeight();
    }
  }, [isEditing]);

  const handleInputChange = (e) => {
    setTempValue(e.target.value);
  };

  return (
    <EditTextContainer>
      {isEditing ? (
        <>
          <InputBox
            type="text"
            value={tempValue}
            onChange={handleInputChange}
            autoFocus
            ref={textareaRef}
          />
          <ButtonsContainer>
            <Button onClick={handleSave}>Save</Button>
            <Button onClick={handleCancel} type="cancel">
              Cancel
            </Button>
          </ButtonsContainer>
        </>
      ) : (
        <div>
          {value ? (
            <>
              <HiddenInputBox
                type="text"
                value={tempValue}
                onChange={handleInputChange}
                autoFocus
                readOnly={true}
                ref={textareaRef}
              />
              <Button onClick={handleEditClick}>Edit</Button>
            </>
          ) : (
            <Button onClick={handleEditClick} type="addFeedback">
              + Written Feedback
            </Button>
          )}
        </div>
      )}
    </EditTextContainer>
  );
};

export default EditableText;
