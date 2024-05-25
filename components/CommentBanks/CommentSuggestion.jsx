import React from 'react';
import {
  IconImage,
  IconsContainer,
  SpecificComment,
  SpecificCommentText,
} from './feedbackAreastyle';
import Delete from '../../static/img/tabs-delete.svg';
import Rename from '../../static/img/Rename.svg';

function CommentSuggestion({ comment, index }) {
  return (
    <SpecificComment key={index}>
      <SpecificCommentText>{comment}</SpecificCommentText>
      <IconsContainer>
        <IconImage src={Rename} />
        <IconImage src={Delete} />
      </IconsContainer>
    </SpecificComment>
  );
}

export default CommentSuggestion;
