export const isShowCommentInstructions = (
  pageMode,
  nbComments,
  isShowingNewCommentDialogue
) => {
  if (isShowingNewCommentDialogue) {
    return false;
  }
  return pageMode === 'REVIEW' && nbComments === 0;
};

export const isShowFocusAreaInstructions = (pageMode, nbComments) => {
  return pageMode === 'DRAFT' && nbComments === 0;
};

export const isShowCommentsAndFocusAreasTab = (pageMode, submissionType) => {
  return pageMode !== 'DRAFT' && submissionType !== 'DOCUMENT';
};
