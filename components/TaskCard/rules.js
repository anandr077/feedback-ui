export const isShowProgressBar = (task) => {
    return task.status != 'DRAFT' && task.submissionCount >= 0;
}

export const isShowShareOption = (taskStatus) => {
    return taskStatus === 'PUBLISHED'
}