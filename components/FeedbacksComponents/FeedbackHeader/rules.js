export const isShowJeddAiIcon = (isTeacher) =>{
   return isTeacher
}
export const isShowReassignBtn = (isTeacher, pageMode, submissionType) =>{
    return isTeacher && pageMode === 'REVIEW' && submissionType !== 'DOCUMENT'
}

export const isDisableButton = (answers) => {
    if (!Array.isArray(answers) || answers.length === 0) {
      return true; 
    } 
    const hasText = answers[0]?.answer?.answer?.trim();
    return !hasText || hasText === '<p><br/></p>'; 
  };