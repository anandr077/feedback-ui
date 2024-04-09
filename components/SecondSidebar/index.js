import React, { useState, useEffect } from 'react';
import {
  useLocation,
  useHistory,
} from 'react-router-dom/cjs/react-router-dom.min';
import { MainContainer, Button } from './style';
import { useQuery } from '@tanstack/react-query';
import { getCommunityTasks } from '../../service';
import settings from '../../static/icons/settings.svg';
import banks from '../../static/icons/banks.svg';
import marking from '../../static/icons/marking.svg';

const SecondSidebar = () => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [feedbackRequests, setFeedbackRequests] = useState(0);
  const location = useLocation();
  const history = useHistory();

  const communityTasksQuery = useQuery({
    queryKey: ['communityTasks'],
    queryFn: async () => {
      const result = await getCommunityTasks();
      return result;
    },
    staleTime: 3600000,
  });

  React.useEffect(() => {
    if (communityTasksQuery.data) {
      setFeedbackRequests(communityTasksQuery.data);
    }
  }, [communityTasksQuery]);

  useEffect(() => {
    const updateHeight = () => {
      const windowHeight = window.innerHeight;
      setContainerHeight(`calc(${windowHeight}px - 170px)`);
    };

    updateHeight();

    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  const handleButtonClick = (link) => {
    history.push(link);
  };

  const subRoutes = [
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
          title: `Feedback Requests (${feedbackRequests ? feedbackRequests.length : 0})`,
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
          title: `Feedback Requests (${feedbackRequests ? feedbackRequests.length : 0})`,
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
          link: '/markingTemplate/strengthAndTargets',
        },
        {
          icon: '',
          title: 'Comment Banks',
          link: '/commentbanks',
        },
      ],
    },
    {
      link: '/giveFeedback',
      subLinks: [
        {
          icon: '',
          title: `Feedback Requests (${feedbackRequests ? feedbackRequests.length : 0})`,
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
          title: `Feedback Requests (${feedbackRequests ? feedbackRequests.length : 0})`,
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
          link: '/commentbanks',
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
          link: '/commentbanks',
        },
      ],
    },
    {
      link: '/commentbanks',
      subLinks: [
        {
          icon: settings,
          title: 'User Settings',
          link: '/settings',
        },
        {
          icon: banks,
          title: 'Marking Templates',
          link: '/markingTemplate/strengthAndTargets',
        },
        {
          icon: marking,
          title: 'Comment Banks',
          link: '/commentbanks',
        },
      ],
    },
  ];

  return (
    <MainContainer height={containerHeight}>
      {subRoutes.map((route, idx) => {
        if (route.link === location.pathname) {
          return (
            <React.Fragment key={idx}>
              {route.subLinks.map((subLink, subIdx) => (
                <Button
                  key={subIdx}
                  onClick={() => handleButtonClick(subLink.link)}
                  active={subLink.link === location.pathname}
                >
                  {subLink.icon && (
                    <img src={subLink.icon} alt={subLink.title} />
                  )}
                  {subLink.title}
                </Button>
              ))}
            </React.Fragment>
          );
        } else {
          return null;
        }
      })}
    </MainContainer>
  );
};

export default SecondSidebar;
