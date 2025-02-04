import { isNullOrEmpty } from "../../utils/arrays";

export const isReadOnly = (assignment) => {
  return assignment.submissionCount !== 0 && assignment.status != 'DRAFT';
};

export const isTaskNotSetUp = (questions) =>{
  return !isNullOrEmpty(questions) && questions[0].question === '';
}

export const isFeedbackMethodNotSelected = (reviewedBy) =>{
  return reviewedBy === 'NONE';
}

export const noClassSelected = (classIds) =>{
  return classIds.length === 0;
}
