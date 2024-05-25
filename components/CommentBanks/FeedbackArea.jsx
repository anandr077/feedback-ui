import React, { useState } from 'react';
import SmartAnnotationSuggestion from '../SmartAnnotationSuggestion';
import { getUserId } from '../../userLocalDetails';
import deleteLight from '../../static/img/delete-light.svg';
import WidearrowDown from '../../static/img/Widearrow-down.svg';
import WideArrowUp from '../../static/img/WideArrow-up.svg';
import {
  FeedbackAreaCon,
  FeedbackAreaText,
  FeedbackAreasContainer,
  LeftConatiner,
  LeftConatinerHeading,
  LeftConatinerHeadingText,
  MainConatiner,
  RightConatiner,
  RightConatinerHeading,
  RightConatinerHeadingText,
  SpecificComment,
  SpecificCommentText,
  SpecificCommentsCont,
} from './feedbackAreastyle';
import CommentSuggestion from './CommentSuggestion';
// import {
//   TextInputEditable,
//   TextBox,
//   SmartAnnotationContainer,
//   ButtonContainer,
//   ButtonLabel,
//   PlusImage,
//   TtitleContainer,
//   ButtonBox,
//   DeleteButton2,
//   Line14,
//   SmartAnnotationTitleContainer,
//   Title,
//   Arrowdown2,
//   SubmitButton,
//   ButtonWrapper,
// } from './feedbackAreastyle';

function FeedbackArea(props) {
  const {
    smartAnnotation,
    smartAnnotationIndex,
    // smartCommentIndex,
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
  console.log('smartAnnotation', smartAnnotation);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentSmartAnnotation, setCurrentSmartAnnotation] =
    useState(smartAnnotation);
  const [newSmartAnnotationEdit, setNewSmartAnnotationEdit] = useState(false);
  const [editedText, setEditedText] = useState('');
  const [editingTitle, setEditingTitle] = useState(false);
  const [editTitle, setEditTitle] = useState();
  const [currentSmartComment, setCurrnetSmartComment] = useState(
    currentSmartAnnotation.smartComments[0]
  );
  const [currentSmartCommentId, setCurrnetSmartCommentId] = useState(0);

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

  const handleSmartCommentSelection = (smartComment, index) => {
    setCurrnetSmartCommentId(index);
    setCurrnetSmartComment(smartComment);
  };

  return (
    <>
      <MainConatiner>
        <LeftConatiner>
          <LeftConatinerHeading>
            <LeftConatinerHeadingText>Feedback Areas</LeftConatinerHeadingText>
          </LeftConatinerHeading>
          <FeedbackAreasContainer>
            {currentSmartAnnotation.smartComments.map((smartComment, index) => {
              return (
                <FeedbackAreaCon
                  key={index}
                  onClick={() =>
                    handleSmartCommentSelection(smartComment, index)
                  }
                  selected={index === currentSmartCommentId}
                >
                  <FeedbackAreaText selected={index === currentSmartCommentId}>
                    {smartComment.title}
                  </FeedbackAreaText>
                </FeedbackAreaCon>
              );
            })}
          </FeedbackAreasContainer>
        </LeftConatiner>
        <RightConatiner>
          <RightConatinerHeading>
            <RightConatinerHeadingText>
              Specific Comments:
              <span style={{ opacity: '0.7' }}>
                {' '}
                {currentSmartComment.title}
              </span>
            </RightConatinerHeadingText>
          </RightConatinerHeading>
          <SpecificCommentsCont>
            {currentSmartComment.suggestions.map((comment, index) => {
              return <CommentSuggestion comment={comment} index={index} />;
            })}
          </SpecificCommentsCont>
        </RightConatiner>
      </MainConatiner>
    </>
  );
}

export default FeedbackArea;
