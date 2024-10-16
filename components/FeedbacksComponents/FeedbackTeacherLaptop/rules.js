export function showAiFeedbackGenerateButton(submissionType, pageMode, isTeacher){
   return submissionType === "SUBMISSION" && pageMode === "REVIEW" && isTeacher
}