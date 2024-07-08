import React, { useEffect, useState } from 'react';
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
    UpdateSmartAnotationHandler,
    deleteAnnotationHandler,
    createSmartAnnotation,
    smartAnnotationeditIndex,
    createSmartAnnotationHandler
  } = props;

  const [currentSmartComment, setCurrnetSmartComment] = useState(
    smartAnnotation?.smartComments[smartAnnotationeditIndex]
  );
  const [currentSmartCommentId, setCurrnetSmartCommentId] = useState(
    smartAnnotationeditIndex
  );
  const [isNewCommentAdded, setIsNewCommentAdded] = useState(false);


  const saveEditedSuggestion = (updatedText, index) => {
    const newSmartAnnotation = { ...currentSmartComment };
    newSmartAnnotation.suggestions[index] = updatedText;
    if (isNewCommentAdded) setIsNewCommentAdded(false);
      UpdateSmartAnotationHandler(newSmartAnnotation, currentSmartCommentId);
  };

  const handleDeleteSuggestion = (index) => {
    const newSmartAnnotation = { ...currentSmartComment };
    newSmartAnnotation.suggestions.splice(index, 1);
    UpdateSmartAnotationHandler(newSmartAnnotation, currentSmartCommentId);
  };

  const addNewSuggestions = () => {
    const newSuggestion = '';
    let newSmartAnnotation = { ...currentSmartComment };
    setIsNewCommentAdded(true);
    newSmartAnnotation.suggestions.push(newSuggestion);
    setCurrnetSmartComment(newSmartAnnotation);
    
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
            {smartAnnotation?.smartComments?.map((smartComment, index) => {
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
            })}
            {smartAnnotation?.ownerId === getUserId() && (
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
                {currentSmartComment?.title}
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
                  defaultEditing={
                    isNewCommentAdded &&
                    currentSmartComment?.suggestions.length === index + 1
                  }
                />
              );
            })}
            {smartAnnotation?.ownerId === getUserId() && (
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
