import { Avatar } from '@boringer-avatars/react';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import { React } from 'react';
import { getCommentsForSubmission, getUserRole } from '../../../service';

export function extractStudents(tasksResult) {
  return tasksResult.map((task) => {
    return {
      id: task.id,
      name: task.studentName,
      src: (
        <Avatar
          title={false}
          size={25}
          variant="beam"
          name={task.studentName}
          square={false}
        />
      ),
      link: task.link,
    };
  });
}

export function getPageMode(isTeacher, user, submission) {
  if (submission.type === 'DOCUMENT')
    return getPortfolioPageMode(user, submission);
  if (isTeacher) return getTeacherPageMode(submission);
  return getStudentPageMode(user, submission);
}

export function getTeacherPageMode(submission) {
  if (submission.status === 'DRAFT') return 'CLOSED';
  if (
    submission.status === 'REVIEWED' ||
    submission.status === 'RESUBMISSION_REQUESTED'
  )
    return 'CLOSED';
  if (submission.status === 'CLOSED') return 'CLOSED';
  if (submission.assignment.reviewedBy === 'P2P') {
    return 'CLOSED';
  }
  return 'REVIEW';
}

export function getStudentPageMode(user, submission) {
  if (submission.assignment.reviewedBy === 'P2P') {
    return getP2PPageMode(user, submission);
  }
  return getSelfPageMode(submission);
}

export function getP2PPageMode(user, submission) {
  if (user === submission.studentId) {
    return getSelfPageMode(submission);
  }
  if (submission.status === 'DRAFT') return 'CLOSED';
  if (submission.status === 'SUBMITTED') return 'REVIEW';
  if (submission.status === 'FEEDBACK_ACCEPTED') return 'REVIEW'
  return 'CLOSED';
  
}

export function getSelfPageMode(submission) {
  if (submission.status === 'DRAFT') return 'DRAFT';
  if (submission.status === 'SUBMITTED') return 'CLOSED';
  if (
    submission.status === 'REVIEWED' ||
    submission.status === 'RESUBMISSION_REQUESTED'
  )
    return 'REVISE';
  if (submission.status === 'CLOSED') return 'CLOSED';
  return 'CLOSED';
}

export const getComments = async (submissionId) => {
  try {
    const comments = await getCommentsForSubmission(submissionId);
    return comments;
  } catch (error) {
    console.error(error);
    return [];
  }
};



export function getPortfolioPageMode(user, submission) {
  if (user === submission.studentId) {
    return getSelfPortfolioPageMode(submission);
  }
  return getReviewerPortfolioPageMode(user, submission);
}

export function getSelfPortfolioPageMode(submission) {
  if (submission.status === 'DRAFT' || submission.status === 'FEEDBACK_DECLINED') 
    return 'DRAFT';
  // if (submission.status === 'SUBMITTED' || submission.status === 'FEEDBACK_ACCEPTED')
  //   return 'CLOSED'
  return 'CLOSED';
}


export function getReviewerPortfolioPageMode(user, submission) {
  if (submission.status === 'SUBMITTED' || submission.status === 'FEEDBACK_ACCEPTED') 
    return 'REVIEW';
  return 'CLOSED';
}