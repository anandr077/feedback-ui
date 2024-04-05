import React from 'react';
import { FocusAreaContainer, FocusArea } from './style';

const FocusAreaCard = ({ comments }) => {
  return (
    <FocusAreaContainer>
      {comments.map((comment) => {
          return (
            <FocusArea style={{ backgroundColor: comment.color }}>
              {comment.comment}
            </FocusArea>
          );
        })}
    </FocusAreaContainer>
  );
};

export default FocusAreaCard;
