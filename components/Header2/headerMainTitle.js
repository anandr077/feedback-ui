import { getUserRole } from '../../userLocalDetails';

const role = getUserRole();

export const headerMainTitle = [
  {
    link: '/tasks',
    title: role === 'TEACHER' ? 'Tasks' : 'School Work',
    homeLink: '/tasks',
  },
  {
    link: '/giveFeedback',
    title: role === 'TEACHER' ? 'Tasks' : 'School Work',
    homeLink: '/tasks',
  },
  {
    link: '/exemplarResponses',
    title: role === 'TEACHER' ? 'Tasks' : 'School Work',
    homeLink: '/tasks',
  },
  {
    link: '/settings',
    title: 'Feeback Tools',
    homeLink: '/settings',
  },
  {
    link: '/feedbackHistory',
    title: role === 'TEACHER' ? 'Tasks' : 'School Work',
    homeLink: '/tasks',
  },
  {
    link: '/sharedresponses',
    title: 'School Work',
    homeLink: '/tasks',
  },
  {
    link: '/documentsReview',
    title: 'Feedback History',
    homeLink: '/tasks',
  },
  {
    link: '/documents',
    title: role === 'TEACHER' ? 'JeddAI' : 'Get Feedback',
    //homeLink: '/documents',
  },
  {
    link: '/classes',
    title: 'Class Insights',
  },
  {
    link: '/submissions',
    title: 'Tasks',
    homeLink: '/tasks',
  },
  {
    link: '/completed',
    title: role === 'TEACHER' ? 'Tasks' : 'School Work',
    homeLink: '/tasks',
  },
  {
    link: '/markingTemplates/strengths-and-targets',
    title: 'Feeback Tools',
    homeLink: '/settings',
  },
  {
    link: '/markingTemplates/rubrics',
    title: 'Feeback Tools',
    homeLink: '/settings',
  },
  {
    link: '/tasks/new',
    title: 'Create task',
  },
  {
    link: '/commentbanks',
    title: 'Feeback Tools',
    homeLink: '/settings',
  },
  {
    link: '/',
    title: role === 'TEACHER' ? 'Tasks' : 'School Work',
    homeLink: '/tasks',
  },
];
