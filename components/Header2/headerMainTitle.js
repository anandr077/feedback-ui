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
    title: 'Settings',
  },
  {
    link: '/feedbackHistory',
    title: role === 'TEACHER' ? 'Tasks' : 'School Work',
  },
  {
    link: '/sharedresponses',
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
    link: '/markingTemplates/strengths-and-targets',
    title: 'Settings',
  },
  {
    link: '/markingTemplates/rubrics',
    title: 'Settings',
  },
  {
    link: '/tasks/new',
    title: 'Create task',
  },
  {
    link: '/commentbanks',
    title: 'Settings',
  },
  {
    link: '/',
    title: role === 'TEACHER' ? 'Tasks' : 'School Work',
  },
];
