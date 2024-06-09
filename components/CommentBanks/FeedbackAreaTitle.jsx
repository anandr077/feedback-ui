import React, { useState } from 'react';
import {
  DotContainer,
  DotContainerPopUp,
  DotIconImage,
  FeedbackAreaCon,
  FeedbackAreaText,
  IconImage,
  OptionContainer,
  OptionText,
  Optionicon,
  TextInputEditable,
} from './feedbackAreastyle';
import threeDots from '../../static/img/three-dots.svg';
import Delete from '../../static/img/tabs-delete.svg';
import Rename from '../../static/img/Rename.svg';
import Copy from '../../static/img/Copy.svg';
import { useRef } from 'react';
import { useEffect } from 'react';

function FeedbackAreaTitle({
  index,
  currentSmartCommentId,
  handleSmartCommentSelection,
  smartComment,
  UpdateSmartAnotationHandler,
  createSmartAnnotation,
  deleteAnnotationHandler,
}) {
  const divRef = useRef(null);
  const [currentSmartComment, setCurrentSmartComment] = useState(smartComment);
  const [showPopUp, setShowPopUp] = useState(false);
  const [editingTitle, setEditingTitle] = useState(false);
  const [editTitle, setEditTitle] = useState(smartComment.title);

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setShowPopUp(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const saveEditedSmartAnnotation = (updatedText) => {
    if (updatedText?.trim() === '') return;
    setEditTitle(updatedText);
    const newSmartAnnotation = { ...currentSmartComment };
    newSmartAnnotation.title = updatedText;
    setCurrentSmartComment(newSmartAnnotation);
    UpdateSmartAnotationHandler(newSmartAnnotation, currentSmartCommentId);
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      saveEditedSmartAnnotation(editTitle);
    }
  };
  const handleTitleTextChange = (event) => {
    setEditTitle(event.target.value);
  };

  const handleEditingClick = () => {
    setEditingTitle(true);
    setShowPopUp(false);
  };

  const cloneSmartAnnotation = () => {
    setShowPopUp(false);
    let { title, suggestions } = currentSmartComment;
    title = 'Copy of ' + title;
    createSmartAnnotation({ title: title, suggestions: suggestions });
  };

  const handleDeleteSmartComment = () => {
    deleteAnnotationHandler(index);
  };
  return (
    <div>
      <FeedbackAreaCon
        key={index}
        onClick={() => handleSmartCommentSelection(currentSmartComment, index)}
        selected={index === currentSmartCommentId}
        showPopUp={showPopUp}
      >
        {editingTitle ? (
          <TextInputEditable
            value={editTitle}
            onChange={handleTitleTextChange}
            onBlur={() => saveEditedSmartAnnotation(editTitle)}
            onKeyPress={handleKeyPress}
          ></TextInputEditable>
        ) : (
          <FeedbackAreaText selected={index === currentSmartCommentId}>
            {editTitle}
          </FeedbackAreaText>
        )}
        <DotContainer>
          {index === currentSmartCommentId && (
            <DotIconImage
              alt="threedots-icon"
              onClick={() => setShowPopUp(true)}
              src={threeDots}
            />
          )}
          {showPopUp && (
            <DotContainerPopUp ref={divRef}>
              <OptionContainer onClick={() => handleEditingClick()}>
                <Optionicon src={Rename} />
                <OptionText>Rename</OptionText>
              </OptionContainer>
              <OptionContainer onClick={() => cloneSmartAnnotation()}>
                <Optionicon src={Copy} />
                <OptionText>Duplicate</OptionText>
              </OptionContainer>
              <OptionContainer onClick={() => handleDeleteSmartComment()}>
                <Optionicon src={Delete} />
                <OptionText style={{ color: '#E2483D' }}>Delete</OptionText>
              </OptionContainer>
            </DotContainerPopUp>
          )}
        </DotContainer>
      </FeedbackAreaCon>
    </div>
  );
}

export default FeedbackAreaTitle;
