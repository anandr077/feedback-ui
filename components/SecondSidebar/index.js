import React, { useState, useEffect } from 'react';
import {
  useLocation,
  useHistory,
} from 'react-router-dom/cjs/react-router-dom.min';
import { MainContainer, Button } from './style';
import { useQuery } from '@tanstack/react-query';
import { getNotifications } from '../../service';
import settings from '../../static/icons/settings.svg';
import banks from '../../static/icons/banks.svg';
import marking from '../../static/icons/marking.svg';
import { getUserRole } from '../../userLocalDetails';

const SecondSidebar = () => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [feedbackRequests, setFeedbackRequests] = useState(0);
  const location = useLocation();
  const history = useHistory();
  const role = getUserRole();

  const { data: notifications, isLoading } = useQuery({
    queryKey: ['notifications'],
    queryFn: async () => {
      const result = await getNotifications();
      return result;
    },
    staleTime: 60000,
  });

  React.useEffect(() => {
    if (notifications) {
      let feedbackRequestCount = 0;

      notifications.forEach((item) => {
        if (item.type === 'URL') {
          feedbackRequestCount++;
        }
      });
      setFeedbackRequests(feedbackRequestCount);
    }
  }, [notifications]);

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

  const subLinks = [
    {
      icon: '',
      title: `${role === 'STUDENT' ? 'Tasks' : 'Classwork'}`,
      link: '/',
    },
    {
      icon: '',
      title: `${role === 'STUDENT' ? 'Tasks' : 'Classwork'}`,
      link: '/tasks',
    },
    {
      icon: '',
      title: `Feedback Requests (${feedbackRequests})`,
      link: '/giveFeedback',
    },
    {
      icon: '',
      title: `Feedback History`,
      link: `/feedbackHistory`,
    },
    {
      icon: '',
      title: `${role === 'STUDENT' ? 'Completed Tasks' : 'Closed Tasks'}`,
      link: `/completed`,
    },
    {
      icon: '',
      title: `Shared Responses`,
      link: `/sharedresponses`,
    },
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
  ];

  const subRoutes = [
    {
      link: '/',
      subLinks: [
        subLinks[0],
        subLinks[2],
        subLinks[3],
        subLinks[4],
        subLinks[5],
      ],
    },
    {
      link: '/tasks',
      subLinks: [
        subLinks[1],
        subLinks[2],
        subLinks[3],
        subLinks[4],
        subLinks[5],
      ],
    },
    {
      link: '/settings',
      subLinks: [subLinks[6], subLinks[7], subLinks[8]],
    },
    {
      link: '/giveFeedback',
      subLinks: [
        subLinks[1],
        subLinks[2],
        subLinks[3],
        subLinks[4],
        subLinks[5],
      ],
    },
    {
      link: '/feedbackHistory',
      subLinks: [
        subLinks[1],
        subLinks[2],
        subLinks[3],
        subLinks[4],
        subLinks[5],
      ],
    },
    {
      link: '/markingTemplate/strengthAndTargets',
      subLinks: [subLinks[6], subLinks[7], subLinks[8]],
    },
    {
      link: '/markingTemplate/rubrics',
      subLinks: [subLinks[6], subLinks[7], subLinks[8]],
    },
    {
      link: '/commentbanks',
      subLinks: [subLinks[6], subLinks[7], subLinks[8]],
    },
    {
      link: '/completed',
      subLinks: [
        subLinks[1],
        subLinks[2],
        subLinks[3],
        subLinks[4],
        subLinks[5],
      ],
    },
  ];
  return (
    <MainContainer height={containerHeight}>
      {subRoutes.map((route, idx) => {
        if (route.link === location.pathname) {
          return (
            <React.Fragment key={idx}>
              {route.subLinks.map((subLink, subIdx) => {
                if (
                  (subLink.link === '/sharedresponses' ||
                    subLink.link === '/feedbackHistory') &&
                  role === 'TEACHER'
                ) {
                  return null;
                }
                return (
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
                );
              })}
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
