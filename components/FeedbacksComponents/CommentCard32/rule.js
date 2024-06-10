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
