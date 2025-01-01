import { getUserId } from '../../userLocalDetails';

export const isShowLikeCancelButton = (comment, pageMode, isShowLikeDelete) => {
  console.log('the comment is', comment)
  return (
    getUserId() === comment.reviewerId &&
    comment.type !== 'FOCUS_AREA' &&
    isShowLikeDelete === comment.id && 
    pageMode !== 'CLOSED'
  );
};

export const isHighlightSelectedComment = (selectedComment, commentId) =>{
  return selectedComment && commentId === selectedComment.id
}

export const isShowCommentCount = (commentsLength, isHoveredOrSelected) =>{
  return commentsLength > 1 && !isHoveredOrSelected
}
