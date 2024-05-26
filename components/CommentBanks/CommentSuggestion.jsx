import React, { useEffect, useState } from 'react';
import {
  IconImage,
  IconsContainer,
  SpecificComment,
  SpecificCommentText,
  TextInputEditable,
} from './feedbackAreastyle';
import Delete from '../../static/img/tabs-delete.svg';
import Rename from '../../static/img/Rename.svg';

function CommentSuggestion({
  comment,
  index,
  saveEditedSuggestion,
  handleDeleteSuggestion,
}) {
  const [editedText, setEditedText] = useState(comment);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setEditedText(comment);
  }, [comment]);

  const handleTextChange = (event) => {
    setEditedText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      saveEditedSuggestion(editedText, index);
      setEditing(false);
    }
  };
  return (
    <SpecificComment key={index}>
      {editing ? (
        <TextInputEditable
          value={editedText}
          onChange={handleTextChange}
          onBlur={() => saveEditedSuggestion(editedText, index)}
          onKeyPress={handleKeyPress}
        ></TextInputEditable>
      ) : (
        <SpecificCommentText>{editedText}</SpecificCommentText>
      )}
      <IconsContainer>
        <IconImage
          alt="edit-icon"
          onClick={() => setEditing(true)}
          src={Rename}
        />
        <IconImage
          alt="delete-icon"
          onClick={() => handleDeleteSuggestion(index)}
          src={Delete}
        />
      </IconsContainer>
    </SpecificComment>
  );
}

export default CommentSuggestion;
