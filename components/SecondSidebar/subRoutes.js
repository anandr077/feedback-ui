import settings from '../../static/icons/settings.svg';
import banks from '../../static/icons/banks.svg';
import marking from '../../static/icons/marking.svg';

export const subRoutes = [
    {
      link: '/',
      subLinks: [
        {
          icon: '',
          title: 'Classwork',
          link: '/',
        },
        {
          icon: '',
          title: 'Feedback Requests(4)',
          link: '/giveFeedback',
        },
        {
          icon: '',
          title: 'Closed Tasks',
          link: '/completed',
        },
      ],
    },
    {
      link: '/tasks',
      subLinks: [
        {
          icon: '',
          title: 'Classwork',
          link: '/tasks',
        },
        {
          icon: '',
          title: 'Feedback Requests(4)',
          link: '/giveFeedback',
        },
        {
          icon: '',
          title: 'Closed Tasks',
          link: '/completed',
        },
      ],
    },
    {
      link: '/settings',
      subLinks: [
        {
          icon: '',
          title: 'User Settings',
          link: '/settings',
        },
        {
          icon: '',
          title: 'Marking Templates',
          link: '/settings',
        },
        {
          icon: '',
          title: 'Comment Banks',
          link: '/settings',
        },
      ],
    },
    {
      link: '/giveFeedback',
      subLinks: [
        {
          icon: '',
          title: 'Feedback Requests',
          link: '/giveFeedback',
        },
        {
          icon: '',
          title: 'Feedback History',
          link: '/feedbackHistory',
        },
      ],
    },
    {
      link: '/feedbackHistory',
      subLinks: [
        {
          icon: '',
          title: 'Feedback Requests',
          link: '/giveFeedback',
        },
        {
          icon: '',
          title: 'Feedback History',
          link: '/feedbackHistory',
        },
      ],
    },
    {
      link: '/markingTemplate/strengthAndTargets',
      subLinks: [
        {
          icon: settings,
          title: 'User Settings',
          link: '/settins',
        },
        {
          icon: banks,
          title: 'Marking Templates',
          link: '/markingTemplate/strengthAndTargets',
        },
        {
          icon: marking,
          title: 'Comment Banks',
          link: '/feedbackHistory',
        },
      ],
    },
    {
      link: '/markingTemplate/rubrics',
      subLinks: [
        {
          icon: settings,
          title: 'User Settings',
          link: '/settins',
        },
        {
          icon: banks,
          title: 'Marking Templates',
          link: '/markingTemplate/strengthAndTargets',
        },
        {
          icon: marking,
          title: 'Comment Banks',
          link: '/feedbackHistory',
        },
      ],
    },
  ];