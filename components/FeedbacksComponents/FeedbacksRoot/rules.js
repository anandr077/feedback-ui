export const isShowCommentInstructions = (
  pageMode,
  nbComments,
  isShowingNewCommentDialogue,
  isFeedback
) => {
  if (isShowingNewCommentDialogue) {
    return false;
  }
  if(!isFeedback){
    return false;
  }
  return pageMode === 'REVIEW' && nbComments === 0;
};

export const isShowFocusAreaInstructions = (pageMode, nbComments, isFocusAreas) => {
  if(!isFocusAreas){
    return
  }
  return pageMode === 'DRAFT' && nbComments === 0;
};

export const isShowCommentsAndFocusAreasTab = (pageMode, submissionType) => {
  return pageMode !== 'DRAFT' && submissionType !== 'DOCUMENT';
};



export const isShowCommentBanks = (commentBanks) =>{
  return commentBanks.length > 0
}

export const isShareWithClass = (role) =>{
  return role !== 'STUDENT'
}


export const isAllowGiveMarkingCriteriaFeedback = (pageMode) => {
  return pageMode === 'REVIEW';
};

export const isShowStudentDropdownInHeader = (isTeacher, submissionType, pageMode) =>{
   return isTeacher && submissionType === "SUBMISSION" && (pageMode === 'REVIEW' || pageMode === 'CLOSED')
}

export const isShowTitleInHeader = (submissionType, role) =>{
  return submissionType === "SUBMISSION" && role !== 'TEACHER'
}

export const isSubjectTaskType = (submissionType) =>{
  return submissionType === "DOCUMENT"
}