import React, { useState } from 'react';
import { getUserId } from '../../service';
import {
  SuggestionsLabel,
  ButtonContainer,
  TextInputEditable,
  SuggestionsContainer,
  SuggestionsContainerComments,
  DeleteButton,
} from './style';

export default function SmartAnnotationSuggestion(props) {
  const {
    text,
    index,
    saveEditedSuggestion,
    settingsMode,
    handleDeleteSuggestion,
    onClickFn,
    teacherId,
    toggleSection,
  } = props;

  const [editedText, setEditedText] = useState(text);
  const [editing, setEditing] = useState(false);
  const [userId, setUserId] = useState(getUserId());

  const handleTextChange = (event) => {
    setEditedText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      saveEditedSuggestion(editedText, index);
    }
  };

  return (
    <>
      {settingsMode ? (
        <SuggestionsContainer onClick={() => setEditing(true)}>
          {editing ? (
            <TextInputEditable
              value={editedText}
              onChange={() =>
                teacherId === userId ? handleTextChange(event) : toggleSection()
              }
              onBlur={() =>
                teacherId === userId
                  ? saveEditedSuggestion(editedText, index)
                  : toggleSection()
              }
              onKeyPress={(e) =>
                teacherId === userId ? handleKeyPress(e) : toggleSection()
              }
            ></TextInputEditable>
          ) : (
            <SuggestionsLabel>{editedText}</SuggestionsLabel>
          )}
          <ButtonContainer>
            {teacherId === userId ? (
              <DeleteButton
                src="/icons/edit-purple-icon.svg"
                alt="delete-button"
                onClick={() => setEditing(true)}
              ></DeleteButton>
            ) : (
              <></>
            )}
            {teacherId === userId ? (
              <DeleteButton
                src="/icons/delete-purple-icon.svg"
                alt="delete-button"
                onClick={() => handleDeleteSuggestion(index)}
              ></DeleteButton>
            ) : (
              <></>
            )}
          </ButtonContainer>
        </SuggestionsContainer>
      ) : (
        <SuggestionsContainerComments onClick={onClickFn(index)}>
          <SuggestionsLabel>{editedText}</SuggestionsLabel>
        </SuggestionsContainerComments>
      )}
    </>
  );
}
