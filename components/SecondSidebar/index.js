import React, { useState, useEffect } from 'react';
import {
  useLocation,
  useHistory,
} from 'react-router-dom/cjs/react-router-dom.min';
import { MainContainer, Button } from './style';
import { useQuery } from '@tanstack/react-query';
import { getCommunityTasks, getCompletedTasks, getTasks, getAssignments } from '../../service';
import settings from '../../static/icons/settings.svg';
import banks from '../../static/icons/banks.svg';
import marking from '../../static/icons/marking.svg';
import commentSelected from '../../static/img/commentSelected.svg';
import commentUnSelected from '../../static/img/commentUnSelected.svg';
import markSelected from '../../static/img/markSelected.svg';
import markUnSelected from '../../static/img/markUnSelected.svg';
import { getUserRole } from '../../userLocalDetails';

const SecondSidebar = ({ id }) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [feedbackRequestsLength, setFeedbackRequestsLength] = useState(0);
  const [completedTaskLength, setCompletedTaskLength] = useState(0);
  const [allStudentTasks, setAllStudentTasks] = useState(0);
  const [allTeacherTasks, setAllTeacherTasks] = useState(0);
  const location = useLocation();
  const history = useHistory();
  const role = getUserRole();

  useEffect(() => {
    Promise.all([getCompletedTasks(), getCommunityTasks(), getTasks(), getAssignments()]).then(
      ([getCompletedTasks, getCommunityTasks, getTasks, getAssignments]) => {
        setCompletedTaskLength(getCompletedTasks.length);
        setFeedbackRequestsLength(getCommunityTasks.length);
        setAllStudentTasks(getTasks.length);
        setAllTeacherTasks(getAssignments.length);
      }
    );
  }, []);

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
          : `Student Requests (${feedbackRequestsLength})`
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
      title: `Feedback History`,
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
                    active={subLink.matchLink === location.pathname}
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
