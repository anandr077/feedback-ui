export const isShowReassignBtn = (isTeacher, pageMode, submissionType) =>{
    return isTeacher && pageMode === 'REVIEW' && submissionType !== 'DOCUMENT'
}