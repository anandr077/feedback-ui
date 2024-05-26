import React, { useState } from 'react';
import SmartAnnotationSuggestion from '../SmartAnnotationSuggestion';
import { getUserId } from '../../userLocalDetails';
import deleteLight from '../../static/img/delete-light.svg';
import WidearrowDown from '../../static/img/Widearrow-down.svg';
import WideArrowUp from '../../static/img/WideArrow-up.svg';
import PlusBlue from '../../static/img/Plus-blue.svg';

import {
  FeedbackAreaCon,
  FeedbackAreaText,
  FeedbackAreasContainer,
  LeftConatiner,
  LeftConatinerHeading,
  LeftConatinerHeadingText,
  MainConatiner,
  PlusImage,
  RightConatiner,
  RightConatinerHeading,
  RightConatinerHeadingText,
  SpecificComment,
  SpecificCommentText,
  SpecificCommentsCont,
} from './feedbackAreastyle';
import CommentSuggestion from './CommentSuggestion';
import FeedbackAreaTitle from './FeedbackAreaTitle';

function FeedbackArea(props) {
  const {
    smartAnnotation,
    smartAnnotationIndex,
    // smartCommentIndex,
    smartAnnotationUpdateIndex,

    UpdateSmartAnotationHandler,
    settingsMode,
    deleteAnnotationHandler,
    onSuggestionClick,
    createSmartAnnotation,
    open = false,
    smartAnnotationeditIndex,
    createSmartAnnotationHandler,
  } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentSmartAnnotation, setCurrentSmartAnnotation] =
    useState(smartAnnotation);
  const [newSmartAnnotationEdit, setNewSmartAnnotationEdit] = useState(false);
  const [editedText, setEditedText] = useState('');
  const [editingTitle, setEditingTitle] = useState(false);
  const [editTitle, setEditTitle] = useState();
  const [currentSmartComment, setCurrnetSmartComment] = useState(
    smartAnnotationeditIndex
      ? currentSmartAnnotation?.smartComments[smartAnnotationeditIndex]
      : currentSmartAnnotation?.smartComments[0]
  );
  const [currentSmartCommentId, setCurrnetSmartCommentId] = useState(
    smartAnnotationeditIndex ? smartAnnotationeditIndex : 0
  );

  const saveEditedSuggestion = (updatedText, index) => {
    const newSmartAnnotation = { ...currentSmartComment };
    console.log('newSmartAnnotation', newSmartAnnotation);
    newSmartAnnotation.suggestions[index] = updatedText;
    setCurrnetSmartComment(newSmartAnnotation);
    UpdateSmartAnotationHandler(newSmartAnnotation, currentSmartCommentId);
  };

  const handleDeleteSuggestion = (index) => {
    const newSmartAnnotation = { ...currentSmartComment };
    newSmartAnnotation.suggestions.splice(index, 1);
    UpdateSmartAnotationHandler(newSmartAnnotation, currentSmartCommentId);
  };

  const addNewSuggestions = () => {
    const newSuggestion = 'New suggestion';
    let newSmartAnnotation = { ...currentSmartComment };
    newSmartAnnotation.suggestions.push(newSuggestion);
    setCurrentSmartAnnotation(newSmartAnnotation);
    UpdateSmartAnotationHandler(newSmartAnnotation, currentSmartCommentId);
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
            {currentSmartAnnotation?.smartComments?.map(
              (smartComment, index) => {
                return (
                  <FeedbackAreaTitle
                    index={index}
                    smartComment={smartComment}
                    currentSmartCommentId={currentSmartCommentId}
                    handleSmartCommentSelection={handleSmartCommentSelection}
                    UpdateSmartAnotationHandler={UpdateSmartAnotationHandler}
                    createSmartAnnotation={createSmartAnnotation}
                    deleteAnnotationHandler={deleteAnnotationHandler}
                  />
                );
              }
            )}
            {currentSmartAnnotation?.ownerId === getUserId() && (
              <FeedbackAreaCon
                style={{ justifyContent: 'flex-start', gap: '8px' }}
                onClick={() => createSmartAnnotationHandler()}
              >
                <PlusImage src={PlusBlue} />
                <FeedbackAreaText style={{ color: '#7200E0' }}>
                  New Feedback Area
                </FeedbackAreaText>
              </FeedbackAreaCon>
            )}
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
            {currentSmartComment?.suggestions?.map((comment, index) => {
              return (
                <CommentSuggestion
                  key={index}
                  comment={comment}
                  index={index}
                  saveEditedSuggestion={saveEditedSuggestion}
                  handleDeleteSuggestion={handleDeleteSuggestion}
                />
              );
            })}

            {currentSmartAnnotation?.ownerId === getUserId() && (
              <SpecificComment
                style={{ justifyContent: 'flex-start', gap: '8px' }}
                onClick={addNewSuggestions}
              >
                <PlusImage src={PlusBlue} />
                <SpecificCommentText
                  style={{ color: '#7200E0', fontWeight: '500' }}
                >
                  Add New Comment
                </SpecificCommentText>
              </SpecificComment>
            )}
          </SpecificCommentsCont>
        </RightConatiner>
      </MainConatiner>
    </>
  );
}

export default FeedbackArea;
