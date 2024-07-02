export const isShowReplyInput = (
  isResolved,
  isReplyClicked,
  defaultComment,
  pageMode,
  editButtonActive
) => {
  return (
    isResolved !== 'RESOLVED' &&
    isReplyClicked &&
    !defaultComment &&
    pageMode !== 'CLOSED' &&
    !editButtonActive
  );
};

export const isShowReplyCount = (selectedComment, comment) =>{
  return selectedComment?.id !== comment.id && comment.replies?.length > 0 
}

export const isShowReplies = (selectedComment, comment) =>{
  return selectedComment?.id === comment.id 
}