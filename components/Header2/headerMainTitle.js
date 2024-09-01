import { getUserRole } from '../../userLocalDetails';
import { getLocalStorage } from '../../utils/function';
import { isTeacherWithoutClass } from './rules';

const role = getUserRole();
const localClasses = getLocalStorage('classes');
const homeLink = isTeacherWithoutClass(role, localClasses) ? '/giveFeedback' : '/tasks';

export const headerMainTitle = [
  {
    link: '/tasks',
    title: role === 'TEACHER' ? 'Tasks' : 'School Work',
    homeLink: homeLink,
    documentName: 'documentName',
  },
  {
    link: '/giveFeedback',
    title: role === 'TEACHER' ? 'Tasks' : 'School Work',
    homeLink: homeLink,
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
    homeLink: homeLink,
  },
  {
    link: '/sharedresponses',
    title: role === 'TEACHER' ? 'Tasks' : 'School Work',
    homeLink: '/tasks',
  },
  {
    link: '/documentsReview',
    title: role === 'TEACHER' ? 'Tasks' : 'School Work',
    homeLink: isTeacherWithoutClass(role, localClasses)
      ? '/giveFeedback'
      : '/tasks',
    documentName: 'documentName',
  },
  {
    link: '/documents',
    title: role === 'TEACHER' ? 'Use JeddAI' : 'Get Feedback',
    documentName: 'documentName',
  },
  {
    link: '/getFeedback',
    title: role === 'TEACHER' ? 'Use JeddAI' : 'Get Feedback',
  },
  {
    link: '/classes',
    title: 'Class Insights',
  },
  {
    link: '/submissions',
    title: role === 'TEACHER' ? 'Tasks' : 'School Work',
    homeLink: '/tasks',
    documentName: 'documentName',
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
    documentName: 'documentName',
  },
  {
    link: '/markingTemplates/rubrics',
    title: 'Feeback Tools',
    homeLink: '/settings',
    documentName: 'documentName',
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
    homeLink: homeLink,
  },
];
