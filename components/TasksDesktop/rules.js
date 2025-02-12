export const isShowAllDraftsFunc = (
  visibleInProgressTaskCount,
  inProgressTasks
) => {
  return visibleInProgressTaskCount < inProgressTasks.length;
};

export const isShowAllInReviewFunc = (
  visibleInReviewTaskCount,
  inReviewTasks
) => {
  return visibleInReviewTaskCount < inReviewTasks.length;
};

export const isShowAllAssignmentFunc = (
  visibleAssignedTaskCount,
  assignedTasks
) => {
  return visibleAssignedTaskCount < assignedTasks.length;
};

export const isShowAllButton = (tasks) =>{
 return tasks.length > 3;
}
