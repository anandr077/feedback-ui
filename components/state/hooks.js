import _ from 'lodash';
import { createGlobalState } from '.';
import { getAllMarkingCriteria, getAssignments, getClasses, getClassesWithStudents, getCommentBank, getCommentsForSubmission, getCompletedTasks, getCommunityTasks, getFeedbackBanks, getGiveFeedbackCompletedTasks, getOtherDrafts, getOverComments, getStudentStats, getSubmissionById, getSubmissionsByAssignmentId, getTeachersForClass } from '../../service';
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
export const useAssignmentsAll = createGlobalState('assignments', getAssignments);
export const useCompletedAll = createGlobalState('completedTasks', getCompletedTasks);
export const useCommentBanks = createGlobalState(
  'feedbackBanks',
  getFeedbackBanks
);
export const useMarkingCriterias = createGlobalState(
  'markingCriterias',
  getAllMarkingCriteria
);


export const useCommunityTasks = createGlobalState(
  'communityTasks',
  getCommunityTasks
);


export const useGiveFeedbackCompletedTasks = createGlobalState(
  'giveFeedbackCompletedTasks',
  getGiveFeedbackCompletedTasks
);

export const useStudentStats = createGlobalState(
  'studentStats',
  getStudentStats
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
export const useClasses = createGlobalState(
  'classes',
  getClasses
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