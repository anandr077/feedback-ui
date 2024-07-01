import { isNullOrEmpty } from '../../../utils/arrays';
import { findMarkingCriteria } from './functions';

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

export const isShareWithClass = (role, submissionType) => {
  return role !== 'STUDENT' && submissionType !== "DOCUMENT";
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

export const isShowOverallFeedbackHeadline = (
  pageMode,
  overallComment,
  reviewer,
  userId,
  markingCriteriaFeedback
) => {
  if (markingCriteriaFeedback?.length === 0) {
    return false;
  }
  if (
    (overallComment === null || overallComment === undefined) &&
    pageMode !== 'REVIEW'
  ) {
    return false;
  }
  if (pageMode === 'CLOSED' && reviewer !== userId) {
    return false;
  }
  if (pageMode === 'DRAFT') {
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
export const isShowMarkingCriteriaSection = (markingCriteria) => {
  return (
    markingCriteria !== undefined &&
    (markingCriteria.criterias !== undefined ||
      markingCriteria.strengthsTargetsCriterias !== undefined)
  );
};
export const isShowMarkingCriteriaButton = (
  isTeacher,
  submissionType,
  submissionStatus,
  overallComments,
  QuestionIndex,
  markingCriteriaFeedback
) => {
  
  const currentMarkingCriteria = findMarkingCriteria(
    markingCriteriaFeedback,
    QuestionIndex
  );
  const overallComment = (
    overallComments.length != 0 ? overallComments : null
  )?.find((comment) => comment?.questionSerialNumber === QuestionIndex + 1);

  
  const areCommentsAndFeedbackEmpty =
    !overallComment?.audio &&
    !overallComment?.comment &&
    !isShowMarkingCriteriaSection(currentMarkingCriteria);
  if (
    (submissionStatus === 'REVIEWED' || submissionStatus === 'CLOSED') &&
    areCommentsAndFeedbackEmpty
  ) {
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

export const isShowQuestionsTab = (submissionType) =>{
  return submissionType !== 'DOCUMENT'
}

export const isShowOverAllTextFeedback = (pageMode, overallComment) => {
  return pageMode === 'REVIEW' || overallComment != null;
};

export const isShowClosedReviewOverallTextInputBox = (pageMode) => {
  return pageMode === 'REVIEW';
};

export const isShowClosedReviewOverallComment = (
  pageMode,
  overallComment,
  reviewer,
  user
) => {
  if (overallComment === null || overallComment === undefined) {
    return false;
  }
  if (pageMode === 'REVISE') {
    return true;
  }
  if (pageMode === 'CLOSED' && reviewer !== user) {
    return false;
  }
  return true;
};

export const isShowClosedReviewAudioComment = (
  pageMode,
  audio,
  reviewer,
  user
) => {
  if (audio === null || audio === undefined) {
    return false;
  }
  if (pageMode === 'REVISE') {
    return true;
  }
  if (pageMode === 'CLOSED' && reviewer !== user) {
    return false;
  }
  return true;
};

export const allCriteriaHaveSelectedLevels = (criterias) => {
  return criterias?.every(
    (criteria) =>
      criteria.selectedLevel !== null && criteria.selectedLevel !== undefined
  );
};

export const isShowGreenTick = (
  markingCriteriaFeedback,
) => {
  let markingCriteria = markingCriteriaFeedback?.markingCriteria;
  return (
    (isMarkingCriteriaTypeRubric(markingCriteria?.type)
      ? allCriteriaHaveSelectedLevels(markingCriteria?.criterias)
      : !isNullOrEmpty(markingCriteria?.selectedTargets) || !isNullOrEmpty(markingCriteria?.selectedStrengths))
  );
};

export const isShowUpdateCommentLabel = () => {
  return 'Update';
};
export const isShowSaveCommentLabel = () => {
  return 'Save Feedback';
};
export const isShowOverallFeedbackSavedLabel = (String) => {
  if (String === null || String === undefined) {
    return false;
  }
  return true;
};

export const isShowMarkingCriteriaSidebar = (overallComments, markingCriteriaFeedback) =>{
  return overallComments?.length !== 0 || markingCriteriaFeedback?.length !== 0
}
