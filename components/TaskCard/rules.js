import { getUserId } from "../../userLocalDetails";

 const userId = getUserId();

export const isShowProgressBar = (task) => {
    return task.status != 'DRAFT' && task.submissionCount >= 0;
}

export const isShowShareOption = (taskStatus) => {
    return taskStatus === 'PUBLISHED'
}

export const isShowChangeDueTime = (teacherId) =>{
    return userId === teacherId
}

export const isShowDeleteOption = (teacherId) =>{
    return userId === teacherId 
}