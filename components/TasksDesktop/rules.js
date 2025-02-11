export const isShowMoreDraftButton = (
  visibleInProgressTaskCount,
  inProgressTasks
) => {
  return visibleInProgressTaskCount < inProgressTasks.length;
};

export const isShowMoreInReviewButton = (
  visibleInReviewTaskCount,
  inReviewTasks
) => {
  return visibleInReviewTaskCount < inReviewTasks.length;
};

export const isShowMoreAssignedButton = (
  visibleAssignedTaskCount,
  assignedTasks
) => {
  return visibleAssignedTaskCount < assignedTasks.length;
};
