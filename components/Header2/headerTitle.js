import { getLocalClasses } from '../../service';
import { getCookie, getUserRole } from '../../userLocalDetails';
import {
  ArrowRightImg,
  DocumentName,
  Title,
  TitleConatiner,
  TitleMain,
} from './HeaderStyle';
import { isTeacher, isTeacherWithoutClass } from './rules';
import React from 'react';
import arrowRightMini from '../../static/img/arrowRightMini.svg';
import QuestionTooltip from '../../components2/QuestionTooltip';
import questionMark from '../../static/img/24questionbordered.svg';
import { headerMainTitle } from './headerMainTitle';
import { getFirstFourWords } from '../../utils/strings';
const role = getUserRole();
const localClasses = getLocalClasses();
const isExpert = isTeacherWithoutClass(role, localClasses);
const homeTitle = isExpert ? 'Feedback From Me' : 'Classwork';

function HeaderTitle({ breadcrumbs }) {
  const headerTitleArray = [
    {
      link: '/tasks/new',
      title: 'Create task',
      teacherTooltip:
        'Follow the steps provided to design the perfect task for your classes',
    },
    {
      link: '/tasks',
      title: role === 'TEACHER' ? 'Classwork' : 'Tasks',
      teacherTooltip:
        'View the status of every task that you have assigned to your classes',
      studentTooltip: 'View all of your current tasks from school',
    },
    {
      link: '/giveFeedback',
      title: isTeacher(role) ? 'Feedback From Me' : 'Help a Friend',
      teacherTooltip: 'Provide personalized feedback',
      studentTooltip:
        'Help other students who have requested feedback from the community',
    },
    {
      link: '/sharedresponses',
      title: 'Model Responses',
      teacherTooltip: '',
      studentTooltip:
        'A collection of student work that has been shared with the class',
    },
    {
      link: '/settings',
      title: ' Marking Templates',
      teacherTooltip:
        'A library of customisable marking templates that can be used for any new task',
      studentTooltip:
        'All your tasks assigned to you, tasks you are doing, and tasks you have submitted for review',
    },
    {
      link: '/feedbackHistory',
      title: !isTeacher(role) ? 'Feedback From Me' : 'Feedback History',
      teacherTooltip: 'Feedback provided on student requests for their work',
      studentTooltip:
        'This is a record of the feedback that you have provided to other students in the past',
    },
    {
      link: '/documentsReview',
      title:
        breadcrumbs && breadcrumbs[1] === 'FEEDBACK_ACCEPTED'
          ? isTeacher(role)
            ? 'Feedback From Me'
            : 'Help a Friend'
          : !isTeacher(role)
          ? 'Feedback From Me'
          : 'Feedback History',
      teacherTooltip: '',
      studentTooltip:
        'This is a record of the feedback that you have provided to other students in the past',
      homeLink:
        breadcrumbs && breadcrumbs[1] === 'FEEDBACK_ACCEPTED'
          ? '/giveFeedback'
          : '/feedbackHistory',
    },
    {
      link: '/completed',
      title: 'Completed Tasks',
      teacherTooltip: 'Consists of all the tasks whose feedback date has expired and are no longer active',
      studentTooltip: 'View all of the tasks that you have marked as complete',
    },
    {
      link: '/classes',
      teacherTooltip: 'View detailed analytics for each class and student',
    },
    {
      link: '/submissions',
      title: role === 'TEACHER' ? 'Classwork' : 'Tasks',
      teacherTooltip: '',
      studentTooltip: 'View all of the tasks that you have marked as complete',
      homeLink: '/',
    },
    {
      link: '/markingTemplates/strengths-and-targets',
      title: 'Marking Templates',
      teacherTooltip:
        'A library of customisable marking templates that can be used for any new task',
      homeLink: '/settings',
    },
    {
      link: '/markingTemplates/rubrics',
      title: 'Marking Templates',
      teacherTooltip: '',
      studentTooltip: 'View all of the tasks that you have marked as complete',
      homeLink: '/settings',
    },
    {
      link: '/commentbanks',
      title: 'Comment Banks',
      teacherTooltip:
        "A customisable bank of comments to provide faster feedback when making a student's work",
    },
    {
      link: '/documents/',
      teacherTooltip: 'Get comprehensive feedback on your work from JeddAI',
      studentTooltip: 'Request feedback from JeddAI, teachers or your friends on your work',
    },
    {
      link: '/',
      title: role === 'TEACHER' ? homeTitle : 'Tasks',
      teacherTooltip:
        'View the status of every task that you have assigned to your classes',
      studentTooltip: 'View all of your current tasks from school',
    },
  ];

  const currentUrl = new URL(location.href, window.location.origin);

  const currentPathname = currentUrl.hash
    ? currentUrl.hash.substring(1)
    : currentUrl.pathname;

  const pageHeader = headerTitleArray.find((item) =>
    currentPathname.startsWith(item.link)
  );

  const pageMainHeader = headerMainTitle.find((item) =>
    currentPathname.startsWith(item.link)
  );

  return (
    <TitleConatiner>
      <TitleMain
        darkBackground={!(pageHeader.title || pageMainHeader?.documentName)}
        to={pageMainHeader?.homeLink}
      >
        {pageMainHeader && pageMainHeader.title}
      </TitleMain>
      {pageHeader.title && <ArrowRightImg src={arrowRightMini} />}
      <Title>
        {pageHeader && (
          <TitleMain
            darkBackground={!pageHeader.homeLink}
            to={pageHeader?.homeLink}
          >
            {pageHeader.title}
          </TitleMain>
        )}

        {pageMainHeader?.documentName && breadcrumbs && (
          <ArrowRightImg src={arrowRightMini} />
        )}
        {pageMainHeader?.documentName && breadcrumbs && (
          <DocumentName>{getFirstFourWords(breadcrumbs[0])}</DocumentName>
        )}
        <QuestionTooltip
          img={questionMark}
          text={
            pageHeader && role === 'TEACHER'
              ? pageHeader.teacherTooltip
              : role === 'STUDENT'
              ? pageHeader?.studentTooltip
              : ''
          }
        />
      </Title>
    </TitleConatiner>
  );
}

export default HeaderTitle;
