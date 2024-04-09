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

  const subRoutes = [
    {
      link: '/',
      subLinks: [
        {
          icon: '',
          title: `${role === "STUDENT" ? "Tasks" : "Classwork"}`,
          link: '/',
        },
        {
          icon: '',
          title: `Feedback Requests (${feedbackRequests})`,
          link: '/giveFeedback',
        },
        {
          icon: '',
          title: `${role === "STUDENT" ? "Feedback History" : "Closed Tasks"}`,
          link:  `${role === "STUDENT" ? "/feedbackHistory" : "/completed"}`,
        }
      ],
    },
    {
      link: '/tasks',
      subLinks: [
        {
          icon: '',
          title: `${role === "STUDENT" ? "Tasks" : "Classwork"}`,
          link: '/tasks',
        },
        {
          icon: '',
          title: `Feedback Requests (${feedbackRequests})`,
          link: '/giveFeedback',
        },
        {
          icon: '',
          title: `${role === "STUDENT" ? "Feedback History" : "Closed Tasks"}`,
          link:  `${role === "STUDENT" ? "/feedbackHistory" : "/completed"}`,
        }
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
          title: `${role === "STUDENT" ? "Tasks" : "Classwork"}`,
          link: '/tasks',
        },
        {
          icon: '',
          title: `Feedback Requests (${feedbackRequests})`,
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
          title: `${role === "STUDENT" ? "Tasks" : "Classwork"}`,
          link: '/tasks',
        },
        {
          icon: '',
          title: `Feedback Requests (${feedbackRequests})`,
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
