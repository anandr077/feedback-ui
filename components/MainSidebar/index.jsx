import React, { useState, useEffect } from 'react';
import { SidebarContainer, SideNavbar, HelpIcon } from './style';
import taskIcon from '../../static/img/task.svg';
import activetaskIcon from '../../static/img/activetask.svg';
import classIcon from '../../static/img/insights.svg';
import activeClassIcon from '../../static/img/active-class-insights-icon.svg';
import settingIcon from '../../static/img/setting.svg';
import activesettingIcon from '../../static/img/activesetting.svg';
import helpIcon from '../../static/img/help.png';
import {
  useHistory,
  useLocation,
} from 'react-router-dom/cjs/react-router-dom.min';

const sideNavItems = [
  {
    icon: taskIcon,
    activeIcon: activetaskIcon,
    name: 'Tasks',
    link: '/tasks',
  },
  {
    icon: classIcon,
    activeIcon: activeClassIcon,
    name: 'Class Insights',
    link: '/classes',
  },
  {
    icon: settingIcon,
    activeIcon: activesettingIcon,
    name: 'Settings',
    link: '/settings',
  },
];

const MainSidebar = () => {
  const history = useHistory();
  const location = useLocation();

  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const currentPath = location.pathname;
    const defaultLink = sideNavItems[0].link; 

    const foundLink = sideNavItems.find((item) => item.link === currentPath)?.link;
    setActiveLink(foundLink || defaultLink);
  }, [location]);

  const handlePageRoute = (navLink) => {
    history.push(navLink);
    setActiveLink(navLink);
  };

  return (
    <SidebarContainer>
      <SideNavbar>
        <ul>
          {sideNavItems.map((navItem) => {
            const isActive = navItem.link === activeLink;
            return (
              <li
                key={navItem.link}
                onClick={() => handlePageRoute(navItem.link)}
              >
                <img src={isActive ? navItem.activeIcon : navItem.icon} />
                <span className={isActive ? "active" : ''}>
                  {navItem.name}
                </span>
              </li>
            );
          })}
        </ul>
      </SideNavbar>
      <HelpIcon src={helpIcon} />
    </SidebarContainer>
  );
};

export default MainSidebar;
