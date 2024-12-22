import { getUserId } from '../../userLocalDetails';

export const isShowLikeCancelButton = (comment, pageMode) => {
  return (
    getUserId() === comment.reviewerId &&
    comment.type !== 'FOCUS_AREA' &&
    pageMode !== 'CLOSED'
  );
};

export const isHighlightSelectedComment = (selectedComment, commentId) =>{
  return selectedComment && commentId === selectedComment.id
}

export const isShowCommentCount = (commentsLength, isHoveredOrSelected) =>{
  return commentsLength > 1 && !isHoveredOrSelected
}
