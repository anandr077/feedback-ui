export const isReadOnly = (assignment) => {
  return assignment.submissionCount !== 0 && assignment.status != 'DRAFT';
};
