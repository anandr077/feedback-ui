import _ from 'lodash';
import { createGlobalState } from '.';
import { getAllMarkingCriteria, getClassesWithStudents, getCommentBank, getCommentsForSubmission, getFeedbackBanks, getOtherDrafts, getOverComments, getSubmissionById, getSubmissionsByAssignmentId, getTeachersForClass } from '../../service';
import { createGlobalStates } from './createGlobalStates';

export const useAllSubmisssionsById = createGlobalState(
  'submissionsByAssignmentId',
  getSubmissionsByAssignmentId
);
export const useOtherDraftsById = createGlobalState('otherDraftsById', getOtherDrafts);

export const useCommentBanksById = createGlobalStates(
  'feedbackBanksById',
  getCommentBank
);
export const useCommentBanks = createGlobalState(
  'feedbackBanks',
  getFeedbackBanks
);
export const useMarkingCriterias = createGlobalState(
  'markingCriterias',
  getAllMarkingCriteria
);

export const useCommentsById = createGlobalState(
  'commentsById',
  getCommentsForSubmission
);


export const useOverAllCommentsById = createGlobalState(
  'overAllCommentsById',
  getOverComments
);

export const useSubmissionById = createGlobalState(
  'submissionById',
  getSubmissionById
);


async function fetchClassWithStudentsAndTeachers() {
  try {
    const classesWithStudents = await getClassesWithStudents();

    const teacherPromises = _.flatMap(classesWithStudents, (classItem) => {
      return getTeachersForClass(classItem.id).then((teachers) => {
        return { ...classItem, teachers };
      });
    });

    return await Promise.all(teacherPromises);
  } catch (error) {
    console.error('Error fetching classes with students and teachers:', error);
    throw error;
  }
}

export const useClassData = createGlobalState(
  'classData',
  fetchClassWithStudentsAndTeachers
);