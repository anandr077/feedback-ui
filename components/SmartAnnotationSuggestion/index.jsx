import React, { useState } from "react";
import { IbmplexsansNormalShark20px } from "../../styledMixins";
import styled from "styled-components";

export default function SmartAnnotationSuggestion(props) {
  const {
    text,
    index,
    saveEditedSuggestion,
    settingsMode,
    handleDeleteSuggestion,
    onClickFn,
  } = props;

  const [editedText, setEditedText] = useState(text);
  const [editing, setEditing] = useState(false);

  const handleTextChange = (event) => {
    setEditedText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
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
              onChange={() => handleTextChange(event)}
              onBlur={() => saveEditedSuggestion(editedText, index)}
              onKeyPress={handleKeyPress}
            ></TextInputEditable>
          ) : (
            <SuggestionsLabel>{editedText}</SuggestionsLabel>
          )}
          <ButtonContainer>
            <DeleteButton
              src="/icons/edit-purple-icon.svg"
              alt="delete-button"
              onClick={() => setEditing(true)}
            ></DeleteButton>
            <DeleteButton
              src="/icons/delete-purple-icon.svg"
              alt="delete-button"
              onClick={() => handleDeleteSuggestion(index)}
            ></DeleteButton>
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

const SuggestionsLabel = styled.div`
  ${IbmplexsansNormalShark20px}
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  background: #ffffff;
`;

const TextInputEditable = styled.textarea`
  ${IbmplexsansNormalShark20px}
  position: relative;
  width: 100%;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
`;

const SuggestionsContainer = styled.div`
  ${IbmplexsansNormalShark20px}
  display: flex;
  padding: 12px 16px;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid #595959;
  background: #ffffff;
  cursor: pointer;
`;

const SuggestionsContainerComments = styled.div`
  ${IbmplexsansNormalShark20px}
  display: flex;
  padding: 12px 16px;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid #595959;
  background: #ffffff;
  cursor: pointer;
`;

const SuggestionsContainerSelected = styled.div`
  display: flex;
  padding: 12px 16px;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  align-self: stretch;
  border-radius: 12px;

  background: #ffffff;

  border: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const DeleteButton = styled.img`
  cursor: pointer;
  display: block;
  min-width: 15px;
  height: 15px;

  ${SuggestionsContainer}:hover & {
    display: block;
  }
`;
