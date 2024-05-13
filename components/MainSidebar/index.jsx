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
import myprogressIcon from '../../static/img/myprogressgray.svg';
import ExitHub from '../../static/img/exithubgray26.svg';
import {
  useHistory,
  useLocation,
} from 'react-router-dom/cjs/react-router-dom.min';

const MainSidebar = () => {
  const history = useHistory();
  const location = useLocation();
  const role = getUserRole();

  const sideNavItems = [
    {
      icon: taskIcon,
      activeIcon: activetaskIcon,
      name: `${role === 'STUDENT' ? 'School Work' : 'Tasks'}`,
      link: '/tasks',
    },
    {
      icon: classIcon,
      activeIcon: activeClassIcon,
      name: 'Class Insights',
      link: '/classes',
    },
    {
      icon: `${role === 'STUDENT' ? getfeedbackIcon : jeddaiIcon}`,
      activeIcon: `${role === 'STUDENT' ? activeGetfeedbackIcon : jeddaiIconIcon}`,
      name: `${role === 'STUDENT' ? 'Get Feedback' : 'Use JeddAI'}`,
      link: '/getFeedback',
    },
    {
      icon: myprogressIcon,
      activeIcon: myprogressIcon,
      name: 'My Progress',
      link: '/progress',
    },
    {
      icon: settingIcon,
      activeIcon: activesettingIcon,
      name: 'Settings',
      link: '/settings',
    },
  ];

  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const currentPath = location.pathname;
    const defaultLink = sideNavItems[0].link;

    const foundLink = sideNavItems.find(
      (item) => item.link === currentPath
    )?.link;
    setActiveLink(foundLink || defaultLink);
  }, [location]);

  const handlePageRoute = (navLink) => {
    history.push(navLink);
    setActiveLink(navLink);
    console.log('linl', navLink);
  };

  return (
    <SidebarContainer>
      <SideNavbar>
        <a href="/"><Logo src="./img/logo.svg" /></a>
        <ul>
          {sideNavItems.map((navItem) => {
            if (
              (navItem.link === '/settings' ||
                navItem.link === '/classes' ||
                navItem.link === '/jeddai') &&
              role === 'STUDENT'
            ) {
              return null;
            }
            if (navItem.link === '/progress' && role === 'TEACHER') {
              return null;
            }

            const isActive = navItem.link === activeLink;
            return (
              <li
                key={navItem.link}
                onClick={() => handlePageRoute(navItem.link)}
              >
                <img src={isActive ? navItem.activeIcon : navItem.icon} />
                <span className={isActive ? 'active' : ''}>{navItem.name}</span>
              </li>
            );
          })}
        </ul>
      </SideNavbar>
      <SideBottom>
        <img src={ExitHub} />
        <p>Exit Hub</p>
      </SideBottom>
    </SidebarContainer>
  );
};

export default MainSidebar;
