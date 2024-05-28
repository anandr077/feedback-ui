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
    title: 'Feeback Tools',
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
    title: 'Feeback Tools',
  },
  {
    link: '/markingTemplates/rubrics',
    title: 'Feeback Tools',
  },
  {
    link: '/tasks/new',
    title: 'Create task',
  },
  {
    link: '/commentbanks',
    title: 'Feeback Tools',
  },
  {
    link: '/',
    title: role === 'TEACHER' ? 'Tasks' : 'School Work',
  },
];
