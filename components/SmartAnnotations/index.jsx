import React, { useState } from 'react';
import SmartAnnotationSuggestion from '../SmartAnnotationSuggestion';
import { getUserId } from '../../userLocalDetails';
import {
  TextInputEditable,
  TextBox,
  SmartAnnotationContainer,
  ButtonContainer,
  ButtonLabel,
  PlusImage,
  TtitleContainer,
  ButtonBox,
  DeleteButton2,
  Line14,
  SmartAnnotationTitleContainer,
  Title,
  Arrowdown2,
  SubmitButton,
  ButtonWrapper,
  ArrowUpIcon,
} from './style';
import deleteLight from '../../static/img/delete-light.svg';

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

  console.log('first smart annotation', smartAnnotation);
  const [isExpanded, setIsExpanded] = useState(
    smartAnnotationUpdateIndex === smartAnnotationIndex && settingsMode
  );
  const [currentSmartAnnotation, setCurrentSmartAnnotation] =
    useState(smartAnnotation);
  const [newSmartAnnotationEdit, setNewSmartAnnotationEdit] = useState(false);
  const [editedText, setEditedText] = useState('');
  const [editingTitle, setEditingTitle] = useState(false);
  const [editTitle, setEditTitle] = useState(smartAnnotation.categoryName);

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
    if (updatedText?.trim() === '') return;
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
      description: '',
    };
    currentSmartAnnotation.suggestions.push(newSuggestion);
    UpdateSmartAnotationHandler(currentSmartAnnotation, smartAnnotationIndex);
  };

  const onClickFn = (index) => {
    if (onSuggestionClick)
      return () =>
        onSuggestionClick(
          smartAnnotation.title +
            '\n\n' +
            smartAnnotation.suggestions[index].description
        );
    else return () => {};
  };

  const onClickNewSuggestionComment = () => {
    if (editedText.trim() === '') return;
    onSuggestionClick(smartAnnotation.title + '\n\n' + editedText);
    setEditedText('');
    setNewSmartAnnotationEdit(false);
  };

  const cloneSmartAnnotation = () => {
    let { title, suggestions } = smartAnnotation;
    title = 'Copy of ' + title;
    createSmartAnnotation({ title: title, suggestions: suggestions });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      saveEditedSmartAnnotation(editTitle);
    }
  };

  return (
    <>
      {isExpanded ? (
        <SmartAnnotationContainer>
          <TtitleContainer>
            {editingTitle ? (
              smartAnnotation?.teacherId === getUserId() ? (
                <TextInputEditable
                  value={editTitle}
                  onChange={handleTitleTextChange}
                  onBlur={() => saveEditedSmartAnnotation(editTitle)}
                  onKeyPress={handleKeyPress}
                ></TextInputEditable>
              ) : (
                <Title onClick={toggleSection}>{editTitle}</Title>
              )
            ) : (
              <Title onClick={toggleSection}>{editTitle}</Title>
            )}

            {settingsMode ? (
              <ButtonContainer>
                {smartAnnotation?.teacherId === getUserId() ? (
                  <ButtonBox>
                    <DeleteButton2
                      src="/icons/edit-purple-icon.svg"
                      alt="edit-button"
                      onClick={() => setEditingTitle(true)}
                    ></DeleteButton2>
                    <span>Edit</span>
                  </ButtonBox>
                ) : (
                  <></>
                )}
                <ButtonBox>
                  <DeleteButton2
                    src="/img/copy@2x.png"
                    alt="copy"
                    onClick={() => cloneSmartAnnotation()}
                  ></DeleteButton2>
                  <span>Copy</span>
                </ButtonBox>
                {smartAnnotation?.teacherId === getUserId() ? (
                  <ButtonBox>
                    <DeleteButton2
                      src={deleteLight}
                      alt="delete-button"
                      onClick={() => handleDeleteAnnotation()}
                    />
                    <span>Delete</span>
                  </ButtonBox>
                ) : (
                  <></>
                )}
                <Arrowdown2
                  onClick={toggleSection}
                  src="/img/arrowup.png"
                  alt="arrowdown2"
                  left={true}
                />
              </ButtonContainer>
            ) : (
              <Arrowdown2
                onClick={toggleSection}
                src="/img/arrowup.png"
                alt="arrowdown2"
              />
            )}
          </TtitleContainer>
          <Line14 src="/img/line-14.png" alt="Line 14" />

          {smartAnnotation?.annotations?.map((suggestion, index) => {
            return (
              <SmartAnnotationSuggestion
                key={Math.random()}
                onClickFn={onClickFn}
                text={suggestion.annotationText}
                index={index}
                saveEditedSuggestion={saveEditedSuggestion}
                settingsMode={settingsMode}
                handleDeleteSuggestion={handleDeleteSuggestion}
                handleDeleteAnnotation={handleDeleteAnnotation}
                addNewSuggestions={addNewSuggestions}
                teacherId={smartAnnotation.teacherId}
                toggleSection={toggleSection}
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

          {smartAnnotation?.teacherId === getUserId() && settingsMode ? (
            <ButtonContainer>
              <PlusImage src="/img/add-violet.svg" alt="plus" />
              <ButtonLabel onClick={addNewSuggestions}>New Comment</ButtonLabel>
            </ButtonContainer>
          ) : smartAnnotation?.teacherId === getUserId() &&
            newSmartAnnotationEdit ? (
            <ButtonWrapper>
              <SubmitButton onClick={onClickNewSuggestionComment}>
                Submit
              </SubmitButton>
            </ButtonWrapper>
          ) : (
            smartAnnotation?.teacherId === getUserId() && (
              <ButtonContainer>
                <PlusImage src="/img/add-violet.svg" alt="plus" />
                <ButtonLabel onClick={() => setNewSmartAnnotationEdit(true)}>
                  Other suggestion
                </ButtonLabel>
              </ButtonContainer>
            )
          )}
        </SmartAnnotationContainer>
      ) : (
        <SmartAnnotationTitleContainer
          onClick={() => {
            toggleSection();
          }}
        >
          <Title>{editTitle}</Title>
          <Arrowdown2 src="/img/arrowdown2-1@2x.png" alt="arrowdown2" />
        </SmartAnnotationTitleContainer>
      )}
    </>
  );
}

export default SmartAnotation;
