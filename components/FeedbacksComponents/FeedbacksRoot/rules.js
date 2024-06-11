export const isShowCommentInstructions = (
  pageMode,
  nbComments,
  isShowingNewCommentDialogue,
  isFeedback
) => {
  if (isShowingNewCommentDialogue) {
    return false;
  }
  if (!isFeedback) {
    return false;
  }
  return pageMode === 'REVIEW' && nbComments === 0;
};

export const isShowFocusAreaInstructions = (
  pageMode,
  nbComments,
  isFocusAreas
) => {
  if (!isFocusAreas) {
    return;
  }
  return pageMode === 'DRAFT' && nbComments === 0;
};

export const isShowCommentsAndFocusAreasTab = (pageMode, submissionType) => {
  return pageMode !== 'DRAFT' && submissionType !== 'DOCUMENT';
};

export const isShowCommentBanks = (commentBanks) => {
  return commentBanks.length > 0;
};

export const isShareWithClass = (role) => {
  return role !== 'STUDENT';
};

export const isAllowGiveMarkingCriteriaFeedback = (pageMode) => {
  return pageMode === 'REVIEW';
};

export const isShowFeedbackBy = (name) => {
  return name !== null;
};

export const isShowStudentDropdownInHeader = (
  isTeacher,
  submissionType,
  pageMode
) => {
  return (
    isTeacher &&
    submissionType === 'SUBMISSION' &&
    (pageMode === 'REVIEW' || pageMode === 'CLOSED')
  );
};

export const isShowTitleInHeader = (submissionType, role) => {
  return submissionType === 'SUBMISSION' && role !== 'TEACHER';
};

export const isShowSubjectTaskType = (submissionType) => {
  return submissionType === 'DOCUMENT';
};

export const isShowFullCommentBankText = (comment, selectedComment) => {
  if (selectedComment) {
    return comment.id === selectedComment.id;
  }
  return false;
};

export const isShowOverallFeedbackHeadline = (pageMode, overallComment, reviewer, userId, markingCriteriaFeedback) => {
  if(markingCriteriaFeedback?.length === 0){
    return false
  }
  if (overallComment === null || overallComment === undefined) {
    return false;
  }
  if (pageMode === "CLOSED" && reviewer !== userId) {
    return false;
  }
  if (pageMode === "DRAFT") {
    return false;
  }
  return true;
};

export const isMarkingCriteriaTypeRubric = (type) => {
  return type === 'RUBRICS';
};

export const isShowTaskDetailsButton = (submissionType) => {
  return submissionType !== 'DOCUMENT';
};

export const isShowMarkingCriteriaButton = (
  isTeacher,
  submissionType,
  submissionStatus,
  overallComments, 
  markingCriteriaFeedback
) => {
  const areCommentsAndFeedbackEmpty = overallComments.length === 0 && markingCriteriaFeedback.length === 0;

  if ((submissionStatus === 'REVIEWED' || submissionStatus === 'CLOSED') && areCommentsAndFeedbackEmpty) {
    return false;
  }

  return (
    isTeacher ||
    (!isTeacher &&
      (submissionStatus === 'REVIEWED' ||
        submissionStatus === 'CLOSED' ||
        submissionType === 'DOCUMENT'))
  );
};

export const isShowOverAllTextFeedback = (pageMode, overallComment) => {
  return pageMode === 'REVIEW' || overallComment != null;
};


export const isShowClosedReviewOverallTextInputBox = (pageMode) =>{
  return pageMode === "REVIEW";
}

export const isShowMarkingCriteriaSection = (markingCriteriaFeedback) =>{
   return markingCriteriaFeedback?.length !== 0;
}

export const isShowClosedReviewOverallComment = (pageMode, overallComment, reviewer, user) =>{
  if (overallComment === null || overallComment === undefined) {
    return false;
  }
  if (pageMode === "REVISE") {
    return true;
  }
  if (pageMode === "CLOSED" && reviewer !== user) {
    return false;
  }
  return true;
}

export const isShowClosedReviewAudioComment = (pageMode, audio, reviewer, user) =>{
  if (audio === null || audio === undefined) {
    return false;
  }
  if (pageMode === "REVISE") {
    return true;
  }
  if (pageMode === "CLOSED" && reviewer !== user) {
    return false;
  }
  return true;
}
