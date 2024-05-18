import { getUserRole } from '../../userLocalDetails';

const role = getUserRole();

export const headerTitle = [
  {
    link: '/tasks',
    title: role === 'TEACHER' ? 'Classwork' : 'Tasks',
    teacherTooltip:
      'View the status of every task that you have assigned for your classes',
    studentTooltip: 'View all of your current tasks from school',
  },
  {
    link: '/giveFeedback',
    title: 'Give Feedback',
    teacherTooltip: '',
    studentTooltip:
      'Help other students who have requested feedback from the community',
  },
  {
    link: '/sharedresponses',
    title: 'Shared Responses',
    teacherTooltip: '',
    studentTooltip:
      'All your tasks assigned to you, tasks you are doing, and tasks you have submitted for review',
  },
  {
    link: '/settings',
    title: ' Marking Templates',
    teacherTooltip: '',
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
    title: 'Feedback History',
    teacherTooltip: '',
    studentTooltip:
      'This is a record of the feedback that you have provided to other students in the past',
  },
  {
    link: '/completed',
    title: 'Completed',
    teacherTooltip: '',
    studentTooltip: 'View all of the tasks that you have marked as complete',
  },
  {
    link: '/classes',
    title: 'Class Insights',
    teacherTooltip: '',
    studentTooltip: 'View all of the tasks that you have marked as complete',
  },
  {
    link: '/markingTemplates/strengths-and-targets',
    title: 'Marking Templates',
    teacherTooltip: '',
    studentTooltip: 'View all of the tasks that you have marked as complete',
  },
  {
    link: '/markingTemplates/rubrics',
    title: 'Marking Templates',
    teacherTooltip: '',
    studentTooltip: 'View all of the tasks that you have marked as complete',
  },
  {
    link: '/tasks/new',
    title: 'Create task',
    teacherTooltip: '',
    studentTooltip: 'View all of the tasks that you have marked as complete',
  },
  {
    link: '/commentbanks',
    title: 'Comment Banks',
    teacherTooltip: '',
    studentTooltip: 'View all of the tasks that you have marked as complete',
  },
  {
    link: '/documents/',
    title: role === 'TEACHER' ? 'JeddAI' : 'Get Feedback',
    teacherTooltip: '',
    studentTooltip: '',
  },
  {
    link: '/',
    title: role === 'TEACHER' ? 'Classwork' : 'Tasks',
    teacherTooltip:
      'View the status of every task that you have assigned for your classes',
    studentTooltip: 'View all of your current tasks from school',
  },
];

export const headerTitleSub = [
  {
    link: '/markingTemplates/rubrics',
    title: 'New Marking Template',
  },
  {
    link: '/markingTemplates/strengths-and-targets',
    title: 'New Marking Template',
  },
];
