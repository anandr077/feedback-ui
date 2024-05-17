import React from 'react';
import { FocusAreaContainer, FocusArea } from './style';

const FocusAreaCard = ({ comments, methods, QuestionIndex }) => {
  return (
    <FocusAreaContainer>
      {comments
        .filter((c) => c.questionSerialNumber === QuestionIndex + 1)
        .map((comment) => {
          return (
            <FocusArea
              style={{ backgroundColor: comment.color }}
              onClick={() => methods.handleCommentSelected(comment)}
            >
              {comment.comment}
            </FocusArea>
          );
        })}
    </FocusAreaContainer>
  );
};

export default FocusAreaCard;
