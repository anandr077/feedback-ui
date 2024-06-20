import React, { useState, useEffect } from 'react';
import { SidebarContainer, SideNavbar, SideBottom, Logo } from './style';
import { getUserRole } from '../../userLocalDetails';
import taskIcon from '../../static/img/Task2.svg';
import activetaskIcon from '../../static/img/activetask.svg';
import classIcon from '../../static/img/insights.svg';
import activeClassIcon from '../../static/img/active-class-insights-icon.svg';
import settingIcon from '../../static/img/setting.svg';
import activesettingIcon from '../../static/img/activesetting.svg';
import jeddaiIcon from '../../static/img/jeddaigray32.svg';
import jeddaiIconIcon from '../../static/img/JeddAI-Icon-active.svg';
import getfeedbackIcon from '../../static/img/getfeedback32gray.svg';
import activeGetfeedbackIcon from '../../static/img/activeGetFeedback.svg';
import ExitHub from '../../static/img/exithubgray26.svg';
import {
  useHistory,
  useLocation,
} from 'react-router-dom/cjs/react-router-dom.min';
import { getLocalClasses } from '../../service';
import {
  isNonSchoolStudent,
  isShowSetting,
  isTeacherWithClass,
  isTeacherWithoutClass,
} from './rules';

const MainSidebar = () => {
  const history = useHistory();
  const location = useLocation();
  const role = getUserRole();
  const [isActive, setIsActive] = useState(() => (obj) => false);
  const localClasses = getLocalClasses();
  const isExpert = isTeacherWithoutClass(role, localClasses);
  const homePageLink = isExpert ? '/giveFeedback' : '/tasks'

  const sideNavItems = [
    !isNonSchoolStudent(role, localClasses) && {
      icon: taskIcon,
      activeIcon: activetaskIcon,
      name: `${role === 'STUDENT' ? 'School Work' : 'Tasks'}`,
      link: homePageLink,
      linksContainer: [
        '/tasks',
        '/completed',
        '/submissions/',
        '/giveFeedback',
        '/feedbackHistory',
        '/sharedresponses',
      ],
    },
    isTeacherWithClass(role, localClasses) && {
      icon: classIcon,
      activeIcon: activeClassIcon,
      name: 'Class Insights',
      link: '/classes',
      linksContainer: ['/classes'],
    },
    !isTeacherWithoutClass(role, localClasses) && {
      icon: `${role === 'STUDENT' ? getfeedbackIcon : jeddaiIcon}`,
      activeIcon: `${
        role === 'STUDENT' ? activeGetfeedbackIcon : jeddaiIconIcon
      }`,
      name: `${role === 'STUDENT' ? 'Get Feedback' : 'Use JeddAI'}`,
      link: '/getFeedback',
      linksContainer: ['/getFeedback', '/documents'],
    },
    isShowSetting(role) && {
      icon: settingIcon,
      activeIcon: activesettingIcon,
      name: 'Feedback Tools',
      link: '/settings',
      linksContainer: [
        '/settings',
        '/markingTemplates/strengths-and-targets',
        '/markingTemplates/rubrics',
        '/commentbanks',
      ],
    },
  ].filter(Boolean);

  const handlePageRoute = (navLink) => {
    history.push(navLink);
    updateIsActive();
  };
  const updateIsActive = () => {
    const checkIsActive = (obj) => {
      if (location.pathname === '/' && (obj.link === '/tasks' || (isExpert && obj.linksContainer.includes('/tasks')))) {
        return true;
      }
      return obj.linksContainer.some((item) =>
        new RegExp(`${item}`).test(location.pathname)
      );
    };

    setIsActive(() => checkIsActive);
  };

  useEffect(() => {
    updateIsActive();
  }, [location]);

  return (
    <SidebarContainer>
      <SideNavbar>
        <a href="/">
          <Logo src="./img/logo.svg" />
        </a>
        <ul>
          {sideNavItems.map((navItem) => {
            const active = isActive(navItem);
              return (
                <li
                  key={navItem.link}
                  onClick={() => handlePageRoute(navItem.link)}
                >
                  <img
                    src={active ? navItem.activeIcon : navItem.icon}
                  />
                  <span className={active ? 'active' : ''}>
                    {navItem.name}
                  </span>
                </li>
              );
            })}
        </ul>
      </SideNavbar>
      <SideBottom href="https://jeddle.com/my-courses/">
        <img src={ExitHub} />
        <p>Exit Hub</p>
      </SideBottom>
    </SidebarContainer>
  );
};

export default MainSidebar;
