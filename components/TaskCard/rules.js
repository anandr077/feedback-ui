export const isShowProgressBar = (task) => {
    return task.status != 'DRAFT' && task.submissionCount >= 0;
}