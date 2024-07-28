import { Avatar } from '@boringer-avatars/react';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import { React } from 'react';
import { getCommentsForSubmission } from '../../../service';
import { getUserId } from '../../../userLocalDetails';

export function extractStudents(tasksResult) {
  return tasksResult?.map((task) => {
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
  if (submission?.type === 'DOCUMENT')
    return getPortfolioPageMode(user, submission);
  if (isTeacher) return getTeacherPageMode(submission);
  return getStudentPageMode(user, submission);
}

export function getTeacherPageMode(submission) {
  if (submission?.status === 'DRAFT') return 'CLOSED';
  if (
    submission?.status === 'REVIEWED' ||
    submission?.status === 'RESUBMISSION_REQUESTED'
  )
    return 'CLOSED';
  if (submission?.status === 'CLOSED') return 'CLOSED';
  if (submission?.assignment.reviewedBy === 'P2P') {
    return 'CLOSED';
  }
  return 'REVIEW';
}

export function getStudentPageMode(user, submission) {
  if (submission?.assignment.reviewedBy === 'P2P') {
    return getP2PPageMode(user, submission);
  }
  return getSelfPageMode(submission);
}

export function getP2PPageMode(user, submission) {
  if (user === submission?.studentId) {
    return getSelfPageMode(submission);
  }
  if (submission?.status === 'DRAFT') return 'CLOSED';
  if (submission?.status === 'SUBMITTED') return 'REVIEW';
  if (submission?.status === 'FEEDBACK_ACCEPTED') return 'REVIEW'
  return 'CLOSED';
  
}

export function getSelfPageMode(submission) {
  if (submission?.status === 'DRAFT') return 'DRAFT';
  if (submission?.status === 'SUBMITTED') return 'CLOSED';
  if (
    submission?.status === 'REVIEWED' ||
    submission?.status === 'RESUBMISSION_REQUESTED'
  )
    return 'REVISE';
  if (submission?.status === 'CLOSED') return 'CLOSED';
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
  if (submission.status === 'REVIEWED')
    return 'REVISE';
  // if (submission.status === 'SUBMITTED' || submission.status === 'FEEDBACK_ACCEPTED')
  //   return 'CLOSED'
  return 'CLOSED';
}


export function getReviewerPortfolioPageMode(user, submission) {
  if (submission.status === 'SUBMITTED' || submission.status === 'FEEDBACK_ACCEPTED') 
    return 'REVIEW';
  return 'CLOSED';
}

export const findMarkingCriteria = (
  markingCriteriaFeedback,
  QuestionIndex
) => {
  return markingCriteriaFeedback?.find(
    (markingCriteria) =>
      markingCriteria?.questionSerialNumber === QuestionIndex + 1
  );
};

export const getOverallComment = (overallComments, QuestionIndex) => {
  if (overallComments.length === 0) {
    return null;
  }
  return overallComments.find(
    (comment) => comment?.questionSerialNumber === QuestionIndex + 1
  );
}



export const goToNewUrl = (pendingLocation) => {
  const port =
    window.location.port &&
    window.location.port !== '80' &&
    window.location.port !== '443'
      ? `:${window.location.port}`
      : '';

  const path = pendingLocation ? `#${pendingLocation.pathname}` : '#/';

  const newUrl = `${window.location.protocol}//${
    window.location.hostname
  }${port}?code=${getUserId()}${path}`;

  window.history.pushState('', '', newUrl);
  window.location.reload();
};
