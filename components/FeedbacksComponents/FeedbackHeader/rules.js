export const isShowJeddAiIcon = (isTeacher) =>{
   return isTeacher
}
export const isShowReassignBtn = (isTeacher, pageMode, submissionType) =>{
    return isTeacher && pageMode === 'REVIEW' && submissionType !== 'DOCUMENT'
}