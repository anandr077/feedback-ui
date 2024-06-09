import React, { useState, useEffect } from 'react';
import {
  useLocation,
  useHistory,
} from 'react-router-dom/cjs/react-router-dom.min';
import { MainContainer, Button } from './style';
import { useQuery } from '@tanstack/react-query';
import { getCommunityTasks, getCompletedTasks, getTasks, getAssignments, getLocalClasses } from '../../service';
import settings from '../../static/icons/settings.svg';
import banks from '../../static/icons/banks.svg';
import marking from '../../static/icons/marking.svg';
import commentSelected from '../../static/img/commentSelected.svg';
import commentUnSelected from '../../static/img/commentUnSelected.svg';
import markSelected from '../../static/img/markSelected.svg';
import markUnSelected from '../../static/img/markUnSelected.svg';
import { getUserRole } from '../../userLocalDetails';
import { isActiveButton, isTeacherWithoutClass } from './rules';
import { useQuery } from '@tanstack/react-query';

const SecondSidebar = ({ id }) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [feedbackRequestsLength, setFeedbackRequestsLength] = useState(0);
  const [completedTaskLength, setCompletedTaskLength] = useState(0);
  const [allStudentTasks, setAllStudentTasks] = useState(0);
  const [allTeacherTasks, setAllTeacherTasks] = useState(0);
  const location = useLocation();
  const history = useHistory();
  const role = getUserRole();
  const localClasses = getLocalClasses();
  const isTeacherNoClass = isTeacherWithoutClass(role, localClasses);

  const completedTasksQuery = useQuery({
    queryKey: ['completedTasks'],
    queryFn: async () => {
      const result = await getCompletedTasks();
      return result;
    },
    staleTime: 3600000,
  });
  const tasksQuery = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const result = await getTasks();

      return result;
    },
    staleTime: 3600000,
  });

  const assignmentsQuery = useQuery({
    queryKey: ['assignments'],
    queryFn: async () => {
      const result = await getAssignments();
      return result;
    },
    staleTime: 3600000,
  });

  const communityTasksQuery = useQuery({
    queryKey: ['communityTasks'],
    queryFn: async () => {
      const result = await getCommunityTasks();
      return result;
    },
    staleTime: 3600000,
  });

  useEffect(() => {
    if (tasksQuery.data) {
      setAllStudentTasks(tasksQuery.data?.length);
    }
    if (assignmentsQuery.data) {
      setAllTeacherTasks(assignmentsQuery.data?.length);
    }
    if (completedTasksQuery.data) {
      setCompletedTaskLength(completedTasksQuery.data?.length);
    }
    if (communityTasksQuery.data) {
      setFeedbackRequestsLength(communityTasksQuery.data?.length);
    }
  }, [
    tasksQuery.data,
    completedTasksQuery.data,
    assignmentsQuery.data,
    communityTasksQuery.data,
  ]);

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
      selectedIcon: '',
      title: `Current Tasks ${role === 'STUDENT' ? `(${allStudentTasks})` : `(${allTeacherTasks})`}`,
      link: '/',
      matchLink: '/',
    },
    {
      icon: '',
      selectedIcon: '',
      title: `Current Tasks ${role === 'STUDENT' ? `(${allStudentTasks})` : `(${allTeacherTasks})`}`,
      link: '/tasks',
      matchLink: '/tasks',
    },
    {
      icon: '',
      selectedIcon: '',
      title: `Completed Tasks (${completedTaskLength})`,
      link: `/completed`,
      matchLink: `/completed`,
    },
    {
      icon: '',
      selectedIcon: '',
      title: `${
        role === 'STUDENT'
          ? `Help a Friend (${feedbackRequestsLength})`
          : `Feedback From Me (${feedbackRequestsLength})`
      }`,
      link: '/giveFeedback',
      matchLink: '/giveFeedback',
    },
    {
      icon: '',
      selectedIcon: '',
      title: `Model Responses`,
      link: `/sharedresponses`,
      matchLink: `/sharedresponses`,
    },
    {
      icon: '',
      selectedIcon: '',
      title: `${
        role === 'STUDENT'
          ? `Feedback From Me`
          : `Feedback History`
      }`,
      link: `/feedbackHistory`,
      matchLink: `/feedbackHistory`,
    },
    {
      icon: markUnSelected,
      selectedIcon: markSelected,
      title: 'Marking Templates',
      link: '/settings',
      matchLink: '/settings',
    },
    {
      icon: commentUnSelected,
      selectedIcon: commentSelected,
      title: 'Comment Banks',
      link: '/commentbanks',
      matchLink: '/commentbanks',
    },
    {
      icon: markUnSelected,
      selectedIcon: markSelected,
      title: 'Marking Templates',
      link: '/settings',
      matchLink: `/markingTemplates/rubrics/${id}`,
    },
    {
      icon: markUnSelected,
      selectedIcon: markSelected,
      title: 'Marking Templates',
      link: '/settings',
      matchLink: `/markingTemplates/strengths-and-targets/${id}`,
    },
  ];

  const subRoutes = isTeacherNoClass ? [
    {
      link: '/giveFeedback',
      subLinks: [subLinks[3], subLinks[5]],
    },
    {
      link: '/feedbackHistory',
      subLinks: [subLinks[3], subLinks[5]], 
    },
    {
      link: '/',
      subLinks: [subLinks[3], subLinks[5]], 
    }
  ] : [
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
      link: '/sharedresponses',
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
      subLinks: [subLinks[6], subLinks[7]],
    },
    {
      link: `/markingTemplates/rubrics/${id}`,
      subLinks: [subLinks[8], subLinks[7]],
    },
    {
      link: `/markingTemplates/strengths-and-targets/${id}`,
      subLinks: [subLinks[9], subLinks[7]],
    },
    {
      link: '/commentbanks',
      subLinks: [subLinks[6], subLinks[7]],
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
                  (subLink.link === '/sharedresponses') &&
                  role === 'TEACHER'
                ) {
                  return null;
                }

                const isActive = isActiveButton(subLink, location.pathname, isTeacherNoClass);

                return (
                  <Button
                    key={subIdx}
                    onClick={() => handleButtonClick(subLink.link)}
                    active={isActive}
                  >
                    {subLink.icon && (
                      <img
                        src={
                          subLink.matchLink === location.pathname
                            ? subLink.selectedIcon
                            : subLink.icon
                        }
                        alt={subLink.title}
                      />
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
