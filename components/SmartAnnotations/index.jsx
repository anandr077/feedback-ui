import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  IbmplexsansNormalShark20px,
  IbmplexsansNormalElectricViolet14px,
} from "../../styledMixins";
import SmartAnnotationSuggestion from "../SmartAnnotationSuggestion";
import { set } from "lodash";

function SmartAnotation(props) {
  const {
    smartAnnotation,
    smartAnnotationIndex,
    smartAnnotationUpdateIndex,
    UpdateSmartAnotationHandler,
    settingsMode,
    deleteAnnotationHandler,
    onSuggestionClick,
    createSmartAnnotation,
  } = props;

  const [isExpanded, setIsExpanded] = useState(
    smartAnnotationUpdateIndex === smartAnnotationIndex && settingsMode
  );
  const [currentSmartAnnotation, setCurrentSmartAnnotation] =
    useState(smartAnnotation);
  const [newSmartAnnotationEdit, setNewSmartAnnotationEdit] = useState(false);
  const [editedText, setEditedText] = useState("");
  const [editingTitle, setEditingTitle] = useState(false);
  const [editTitle, setEditTitle] = useState(smartAnnotation.title);

  const handleTextChange = (event) => {
    setEditedText(event.target.value);
  };

  const handleTitleTextChange = (event) => {
    setEditTitle(event.target.value);
  };

  const toggleSection = () => {
    setIsExpanded(!isExpanded);
  };

  const saveEditedSuggestion = (updatedText, index) => {
    const newSmartAnnotation = { ...currentSmartAnnotation };
    newSmartAnnotation.suggestions[index].description = updatedText;
    setCurrentSmartAnnotation(newSmartAnnotation);
    UpdateSmartAnotationHandler(newSmartAnnotation, smartAnnotationIndex);
  };

  const saveEditedSmartAnnotation = (updatedText) => {
    if (updatedText.trim() === "") return;
    const newSmartAnnotation = { ...currentSmartAnnotation };
    newSmartAnnotation.title = updatedText;
    setCurrentSmartAnnotation(newSmartAnnotation);
    setEditTitle(updatedText);
    UpdateSmartAnotationHandler(newSmartAnnotation, smartAnnotationIndex);
  };

  const handleDeleteSuggestion = (index) => {
    const newSmartAnnotation = { ...currentSmartAnnotation };
    newSmartAnnotation.suggestions.splice(index, 1);
    UpdateSmartAnotationHandler(newSmartAnnotation, smartAnnotationIndex);
  };

  const handleDeleteAnnotation = () => {
    deleteAnnotationHandler(currentSmartAnnotation.id);
  };

  const addNewSuggestions = () => {
    const newSuggestion = {
      description: "",
    };
    currentSmartAnnotation.suggestions.push(newSuggestion);
    UpdateSmartAnotationHandler(currentSmartAnnotation, smartAnnotationIndex);
  };

  const onClickFn = (index) => {
    if (onSuggestionClick)
      return () =>
        onSuggestionClick(
          smartAnnotation.title +
            "\n\n" +
            smartAnnotation.suggestions[index].description
        );
    else return () => {};
  };

  const onClickNewSuggestionComment = () => {
    if (editedText.trim() === "") return;
    onSuggestionClick(smartAnnotation.title + "\n\n" + editedText);
    setEditedText("");
    setNewSmartAnnotationEdit(false);
  };

  const cloneSmartAnnotation = () => {
    let { title, suggestions } = smartAnnotation;
    title = title + " clone";
    createSmartAnnotation({ title: title, suggestions: suggestions });
  };

  return (
    <>
      {isExpanded ? (
        <SmartAnnotationContainer>
          <TtitleContainer>
            {editingTitle ? (
              <TextInputEditable
                value={editTitle}
                onChange={() => handleTitleTextChange(event)}
                onBlur={() => saveEditedSmartAnnotation(editTitle)}
              ></TextInputEditable>
            ) : (
              <Title onClick={toggleSection}>{editTitle}</Title>
            )}

            {settingsMode ? (
              <ButtonContainer>
                <DeleteButton2
                  src="/icons/edit-purple-icon.svg"
                  alt="edit-button"
                  onClick={() => cloneSmartAnnotation()}
                ></DeleteButton2>
                <DeleteButton2
                  src="/icons/edit-purple-icon.svg"
                  alt="edit-button"
                  onClick={() => setEditingTitle(true)}
                ></DeleteButton2>
                <DeleteButton2
                  src="/icons/delete-purple-icon.svg"
                  alt="delete-button"
                  onClick={() => handleDeleteAnnotation()}
                />
              </ButtonContainer>
            ) : (
              <Arrowdown2 src="/img/arrowup.png" alt="arrowdown2" />
            )}
          </TtitleContainer>
          <Line14 src="/img/line-14.png" alt="Line 14" />

          {smartAnnotation?.suggestions?.map((suggestion, index) => {
            return (
              <SmartAnnotationSuggestion
                key={Math.random()}
                onClickFn={onClickFn}
                text={suggestion.description}
                index={index}
                saveEditedSuggestion={saveEditedSuggestion}
                settingsMode={settingsMode}
                handleDeleteSuggestion={handleDeleteSuggestion}
                handleDeleteAnnotation={handleDeleteAnnotation}
                addNewSuggestions={addNewSuggestions}
              ></SmartAnnotationSuggestion>
            );
          })}
          {newSmartAnnotationEdit && (
            <TextBox>
              <TextInputEditable
                value={editedText}
                onChange={() => handleTextChange(event)}
              ></TextInputEditable>
            </TextBox>
          )}
          <Line14 src="/img/line-14.png" alt="Line 14" />

          {settingsMode ? (
            <ButtonContainer>
              <PlusImage src="/img/add-violet.svg" alt="plus" />
              <ButtonLabel onClick={addNewSuggestions}>New</ButtonLabel>
            </ButtonContainer>
          ) : newSmartAnnotationEdit ? (
            <ButtonWrapper>
              <SubmitButton onClick={onClickNewSuggestionComment}>
                Submit
              </SubmitButton>
            </ButtonWrapper>
          ) : (
            <ButtonContainer>
              <PlusImage src="/img/add-violet.svg" alt="plus" />
              <ButtonLabel onClick={() => setNewSmartAnnotationEdit(true)}>
                Other suggestion
              </ButtonLabel>
            </ButtonContainer>
          )}
        </SmartAnnotationContainer>
      ) : (
        <SmartAnnotationTitleContainer onClick={toggleSection}>
          <Title>{editTitle}</Title>
          <Arrowdown2 src="/img/arrowdown2-1@2x.png" alt="arrowdown2" />
        </SmartAnnotationTitleContainer>
      )}
    </>
  );
}

export default SmartAnotation;

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

const TextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
`;

const SmartAnnotationContainer = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid #f1e7ff;
  background: #fff;
  box-shadow: 0px 2px 14px 0px rgba(114, 0, 224, 0.1);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  background: #ffffff;
`;

const ButtonLabel = styled.div`
  ${IbmplexsansNormalElectricViolet14px}
  font-size: 16px;
  color: var(--light-mode-purple, #7200e0);
  cursor: pointer;
`;

const PlusImage = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
  cursor: pointer;
`;

const TtitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const DeleteButton2 = styled.img`
  cursor: pointer;
  min-width: 20px;
  height: 20px;
`;

const SuggestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 16px;
  align-self: stretch;
  width: 100%;
`;

const Line14 = styled.img`
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 1px;
  object-fit: cover;
`;

const SmartAnnotationTitleContainer = styled.div`
  cursor: pointer;
  display: flex;
  padding: 16px;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid #f1e7ff;
  background: #fff;
  box-shadow: 0px 2px 14px 0px rgba(114, 0, 224, 0.1);
`;

const Title = styled.div`
  ${IbmplexsansNormalShark20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const Arrowdown2 = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const SubmitButton = styled.div`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  border: 1px solid #7200e0;
  color: #ffffff;
  background: #7200e0;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  font-family: IBM Plex Sans;
  font-weight: 500;
  :hover {
    scale: 1.1;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;
