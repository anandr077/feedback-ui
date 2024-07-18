import { findMarkingCriteria } from "../FeedbacksRoot/functions";
import { isAllowGiveMarkingCriteriaFeedback, isShowGreenTick } from "../FeedbacksRoot/rules";

export function getButtonText(pageMode, currentMarkingCriteria) {
  if (!isAllowGiveMarkingCriteriaFeedback(pageMode)) {
    return 'Show Results';
  } else if (isShowGreenTick(currentMarkingCriteria)) {
    return 'Update';
  } else {
    return 'Expand';
  }
}
