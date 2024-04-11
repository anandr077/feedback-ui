import { getUserRole } from '../../userLocalDetails';

const role = getUserRole();

export const headerMainTitle = [
  {
    link: '/tasks',
    title: role === 'TEACHER' ? 'Tasks' : 'School Work',
  },
  {
    link: '/giveFeedback',
    title: role === 'TEACHER' ? 'Tasks' : 'School Work',
  },
  {
    link: '/exemplarResponses',
    title: role === 'TEACHER' ? 'Tasks' : 'School Work',
  },
  {
    link: '/settings',
    title: 'Account settings',
  },
  {
    link: '/feedbackHistory',
    title: role === 'TEACHER' ? 'Tasks' : 'School Work',
  },
  {
    link: '/shareresponse',
    title: 'School Work',
  },
  {
    link: '/documentsReview',
    title: 'Feedback History',
  },
  {
    link: '/completed',
    title: role === 'TEACHER' ? 'Tasks' : 'School Work',
  },
  {
    link: '/markingTemplate/strengthAndTargets',
    title: 'Marking Templates',
  },
  {
    link: '/markingTemplate/rubrics',
    title: 'Marking Templates',
  },
  {
    link: '/tasks/new',
    title: 'Create task',
  },
  {
    link: '/commentbanks',
    title: 'Comment Banks',
  },
  {
    link: '/',
    title: role === 'TEACHER' ? 'Tasks' : 'School Work',
  },
];
