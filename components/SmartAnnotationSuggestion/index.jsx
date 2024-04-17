import React, { useState } from 'react';
import { getUserId } from '../../userLocalDetails';
import {
  SuggestionsLabel,
  ButtonContainer,
  TextInputEditable,
  SuggestionsContainer,
  SuggestionsContainerComments,
  DeleteButton,
  ButtonBox,
} from './style';
import deleteLight from '../../static/img/delete-light.svg';

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
        <SuggestionsContainer>
          {editing ? (
             (
              <TextInputEditable
                value={editedText}
                onChange={handleTextChange}
                onBlur={() => saveEditedSuggestion(editedText, index)}
                onKeyPress={handleKeyPress}
              ></TextInputEditable>
            )
          ) : (
            <SuggestionsLabel>{editedText}</SuggestionsLabel>
          )}
          <ButtonContainer>
            { (
              <ButtonBox>
                <DeleteButton
                  src="/icons/edit-purple-icon.svg"
                  alt="delete-button"
                  onClick={() => setEditing(true)}
                ></DeleteButton>
                <span>Edit</span>
              </ButtonBox>
            )}
            {(
              <ButtonBox>
                <DeleteButton
                  src={deleteLight}
                  alt="delete-button"
                  onClick={() => handleDeleteSuggestion(index)}
                ></DeleteButton>
                <span>Delete</span>
              </ButtonBox>
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
