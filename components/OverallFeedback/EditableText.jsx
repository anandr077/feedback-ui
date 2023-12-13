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
  const [textareaRows, setTextareaRows] = useState(1);

  const calculateTextareaRows = (value, maxCharactersPerLine) => {
    const lineCount = value.split('\n').reduce((count, line) => {
      const charactersInLine = Math.ceil(line.length / maxCharactersPerLine);
      return count + Math.max(charactersInLine, 1);
    }, 0);

    return Math.max(lineCount, 1);
  };

  useEffect(() => {
    if (textareaRef.current) {
      const textareaWidth = textareaRef.current.clientWidth;
      const averageCharacterWidth = 8;
      const maxCharactersPerLine = Math.floor(
        textareaWidth / averageCharacterWidth
      );

      const newRows = calculateTextareaRows(tempValue, maxCharactersPerLine);
      setTextareaRows(newRows);
      textareaRef.current.rows = newRows;
    }
  }, [tempValue]);

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
            rows={textareaRows}
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
                rows={textareaRows}
                autoFocus
                readOnly={true}
                ref={textareaRef}
              />
              <Button style={{ marginTop: '10px' }} onClick={handleEditClick}>
                Edit
              </Button>
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
