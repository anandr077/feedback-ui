import { findMarkingCriteria } from "../FeedbacksRoot/functions";
import { isAllowGiveMarkingCriteriaFeedback, isShowGreenTick } from "../FeedbacksRoot/rules";

export function getButtonText(
  pageMode,
  markingCriteriaFeedback,
  QuestionIndex,
) {
  if (!isAllowGiveMarkingCriteriaFeedback(pageMode)) {
    return 'Show Results';
  } else if (
    isShowGreenTick(findMarkingCriteria(markingCriteriaFeedback, QuestionIndex))
  ) {
    return 'Update';
  } else {
    return 'Expand';
  }
}
