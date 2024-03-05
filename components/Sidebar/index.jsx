import React from 'react';
import { SidebarContainer, SideNavbar } from './style';
import taskIcon from '../../static/img/task.svg';
import classIcon from '../../static/img/insights.svg';
import settingIcon from '../../static/img/setting.svg';

const sideNavItems = [
  {
    icon: taskIcon,
    name: 'Tasks',
    link: '',
  },
  {
    icon: classIcon,
    name: 'Class Insights',
    link: '',
  },
  {
    icon: settingIcon,
    name: 'Settings',
    link: '',
  },
];

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SideNavbar>
        <ul>
          {sideNavItems.map((navItem) => {
            return (
              <li>
                <img src={navItem.icon} />
                <span>{navItem.name}</span>
              </li>
            );
          })}
        </ul>
      </SideNavbar>
    </SidebarContainer>
  );
};

export default Sidebar;
