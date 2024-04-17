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
  SixdotsImage,
} from './style';
import deleteLight from '../../static/img/delete-light.svg';
import WidearrowDown from '../../static/img/Widearrow-down.svg';
import WideArrowUp from '../../static/img/WideArrow-up.svg';

function SmartAnotation(props) {
  const {
    smartAnnotation,
    smartAnnotationIndex,
    smartCommentIndex,
    smartAnnotationUpdateIndex,
    commentBankId,
    UpdateSmartAnotationHandler,
    settingsMode,
    deleteAnnotationHandler,
    onSuggestionClick,
    createSmartAnnotation,
    teacherId,
    open = false,
    setSmartAnnotationeditIndex,
  } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentSmartAnnotation, setCurrentSmartAnnotation] =
    useState(smartAnnotation);
  const [newSmartAnnotationEdit, setNewSmartAnnotationEdit] = useState(false);
  const [editedText, setEditedText] = useState('');
  const [editingTitle, setEditingTitle] = useState(false);
  const [editTitle, setEditTitle] = useState(smartAnnotation.title);

  const handleTextChange = (event) => {
    setEditedText(event.target.value);
  };

  const handleTitleTextChange = (event) => {
    setEditTitle(event.target.value);
  };

  const toggleSection = () => {
    if (settingsMode) setSmartAnnotationeditIndex('');
    setIsExpanded(!isExpanded);
  };

  const saveEditedSuggestion = (updatedText, index) => {
    const newSmartAnnotation = { ...currentSmartAnnotation };
    newSmartAnnotation.suggestions[index] = updatedText;
    setCurrentSmartAnnotation(newSmartAnnotation);
    UpdateSmartAnotationHandler(
      newSmartAnnotation,
      smartAnnotationIndex,
      smartCommentIndex
    );
  };

  const saveEditedSmartAnnotation = (updatedText) => {
    if (updatedText?.trim() === '') return;
    const newSmartAnnotation = { ...currentSmartAnnotation };
    newSmartAnnotation.title = updatedText;
    setCurrentSmartAnnotation(newSmartAnnotation);
    setEditTitle(updatedText);
    UpdateSmartAnotationHandler(
      newSmartAnnotation,
      smartAnnotationIndex,
      smartCommentIndex
    );
  };

  const handleDeleteSuggestion = (index) => {
    const newSmartAnnotation = { ...currentSmartAnnotation };
    newSmartAnnotation.suggestions.splice(index, 1);
    UpdateSmartAnotationHandler(
      newSmartAnnotation,
      smartAnnotationIndex,
      smartCommentIndex
    );
  };

  const handleDeleteSmartComment = () => {
    deleteAnnotationHandler(smartCommentIndex, smartAnnotationIndex);
  };

  const addNewSuggestions = () => {
    const newSuggestion = '';
    currentSmartAnnotation.suggestions.push(newSuggestion);
    UpdateSmartAnotationHandler(
      currentSmartAnnotation,
      smartAnnotationIndex,
      smartCommentIndex
    );
  };

  const onClickFn = (index) => {
    if (onSuggestionClick)
      return () =>
        onSuggestionClick(
          smartAnnotation.title + '\n\n' + smartAnnotation.suggestions[index]
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
      {isExpanded || open ? (
        <SmartAnnotationContainer>
          <TtitleContainer>
            {editingTitle ? (
               (
                <TextInputEditable
                  value={editTitle}
                  onChange={handleTitleTextChange}
                  onBlur={() => saveEditedSmartAnnotation(editTitle)}
                  onKeyPress={handleKeyPress}
                ></TextInputEditable>
              )
            ) : (
              <Title onClick={toggleSection}>{editTitle}</Title>
            )}

            {settingsMode ? (
              <ButtonContainer>
                {(
                  <ButtonBox>
                    <DeleteButton2
                      src="/icons/edit-purple-icon.svg"
                      alt="edit-button"
                      onClick={() => setEditingTitle(true)}
                    ></DeleteButton2>
                    <span>Edit</span>
                  </ButtonBox>
                )}
                <ButtonBox>
                  <DeleteButton2
                    src="/img/copy@2x.png"
                    alt="copy"
                    onClick={() => cloneSmartAnnotation()}
                  ></DeleteButton2>
                  <span>Copy</span>
                </ButtonBox>
                { (
                  <ButtonBox>
                    <DeleteButton2
                      src={deleteLight}
                      alt="delete-button"
                      onClick={() => handleDeleteSmartComment()}
                    />
                    <span>Delete</span>
                  </ButtonBox>
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
                src={WideArrowUp}
                alt="arrowdown2"
              />
            )}
          </TtitleContainer>

          {smartAnnotation?.suggestions?.map((suggestion, index) => {
            return (
              <SmartAnnotationSuggestion
                key={Math.random()}
                onClickFn={onClickFn}
                text={
                  suggestion.description ? suggestion.description : suggestion
                }
                index={index}
                saveEditedSuggestion={saveEditedSuggestion}
                settingsMode={settingsMode}
                handleDeleteSuggestion={handleDeleteSuggestion}
                addNewSuggestions={addNewSuggestions}
                teacherId={teacherId}
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

          {settingsMode ? (
            <ButtonContainer>
              <PlusImage src="/img/add-violet.svg" alt="plus" />
              <ButtonLabel onClick={addNewSuggestions}>New Comment</ButtonLabel>
            </ButtonContainer>
          ) : newSmartAnnotationEdit ? (
            <ButtonWrapper>
              <SubmitButton onClick={onClickNewSuggestionComment}>
                Submit
              </SubmitButton>
            </ButtonWrapper>
          ) : (
             (
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
        <SmartAnnotationTitleContainer onClick={toggleSection}>
          <Title>{editTitle}</Title>
          <Arrowdown2 src={WidearrowDown} alt="arrowdown2" />
        </SmartAnnotationTitleContainer>
      )}
    </>
  );
}

export default SmartAnotation;
