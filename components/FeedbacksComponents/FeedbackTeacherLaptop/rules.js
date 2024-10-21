export function showAiFeedbackGenerateButton(submissionType, pageMode, isTeacher, reviewedBy) {
   return isTeacher && submissionType === "SUBMISSION" && pageMode === "REVIEW" && reviewedBy === 'TEACHER'
}