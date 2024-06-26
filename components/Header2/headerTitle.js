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
import React, { useEffect, useState } from 'react';
import arrowRightMini from '../../static/img/arrowRightMini.svg';
import QuestionTooltip from '../../components2/QuestionTooltip';
import questionMark from '../../static/img/24questionbordered.svg';
import { headerMainTitle } from './headerMainTitle';
import { getFirstFourWords } from '../../utils/strings';
const role = getUserRole();
const localClasses = getLocalClasses();
const isExpert = isTeacherWithoutClass(role, localClasses);
const homeTitle = isExpert ? 'Give Feedback' : 'Classwork';

export const headerTitleSub = [
  {
    link: '/markingTemplates/rubrics/new',
    title: 'New Marking Template',
  },
  {
    link: '/markingTemplates/strengths-and-targets/new',
    title: 'New Marking Template',
  },
];

function HeaderTitle() {
  const [documentName, setDocumentName] = useState('');
  const [documentStatus, setDocumenStatus] = useState('');

  useEffect(() => {
    const fetchDocumentData = () => {
      const title = getCookie('documentName');
      const status = getCookie('documentstatus');
      if (title) setDocumentName(getFirstFourWords(title));
      if (status) setDocumenStatus(status);
    };
    fetchDocumentData();
    const handleCookieChange = () => {
      fetchDocumentData();
    };

    const cookieInterval = setInterval(handleCookieChange, 1000);

    return () => {
      clearInterval(cookieInterval);
    };
  }, []);

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
        'View the status of every task that you have assigned for your classes',
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
        'All your tasks assigned to you, tasks you are doing, and tasks you have submitted for review',
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
      title: 'Feedback History',
      teacherTooltip: '',
      studentTooltip:
        'This is a record of the feedback that you have provided to other students in the past',
    },
    {
      link: '/documentsReview',
      title:
        documentStatus === 'FEEDBACK_ACCEPTED'
          ? 'Feedback From Me'
          : 'Feedback History',
      teacherTooltip: '',
      studentTooltip:
        'This is a record of the feedback that you have provided to other students in the past',
    },
    {
      link: '/completed',
      title: 'Completed Tasks',
      teacherTooltip: '',
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
    },
    {
      link: '/markingTemplates/strengths-and-targets',
      title: 'Marking Templates',
      teacherTooltip:
        'A library of customisable marking templates that can be used for any new task',
    },
    {
      link: '/markingTemplates/rubrics',
      title: 'Marking Templates',
      teacherTooltip: '',
      studentTooltip: 'View all of the tasks that you have marked as complete',
    },
    {
      link: '/commentbanks',
      title: 'Comment Banks',
      teacherTooltip:
        "A customisable bank of comments to provide faster feedback when making a student's work",
    },
    {
      link: '/documents/',
      teacherTooltip: '',
      studentTooltip: '',
    },
    {
      link: '/',
      title: role === 'TEACHER' ? homeTitle : 'Tasks',
      teacherTooltip:
        'View the status of every task that you have assigned for your classes',
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
  const pageHeaderSub = headerTitleSub.find((item) =>
    new RegExp(`${item.link}`).test(location.pathname)
  );
  

  const pageMainHeader = headerMainTitle.find((item) =>
    currentPathname.startsWith(item.link)
  );
  
  return (
    <TitleConatiner>
      <TitleMain
        darkBackground={!pageHeader.title}
        to={pageMainHeader?.homeLink}
      >
        {pageMainHeader && pageMainHeader.title}
      </TitleMain>
      {pageHeader.title && <ArrowRightImg src={arrowRightMini} />}
      <Title>
        {pageHeader && (
          <Title style={{ color: pageHeaderSub && '#7b7382' }}>
            {pageHeader.title}
          </Title>
        )}

        {pageHeaderSub && <ArrowRightImg src={arrowRightMini} />}
        {pageHeaderSub && pageHeaderSub.title}
        {pageMainHeader?.documentName && documentName && (
          <ArrowRightImg src={arrowRightMini} />
        )}
        {pageMainHeader?.documentName && (
          <DocumentName>{documentName}</DocumentName>
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
