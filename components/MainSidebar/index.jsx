import React from 'react';
import { SidebarContainer, SideNavbar, HelpIcon } from './style';
import taskIcon from '../../static/img/task.svg';
import classIcon from '../../static/img/insights.svg';
import settingIcon from '../../static/img/setting.svg';
import helpIcon from '../../static/img/help.svg';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const sideNavItems = [
  {
    icon: taskIcon,
    name: 'Tasks',
    link: '/tasks',
  },
  {
    icon: classIcon,
    name: 'Class Insights',
    link: '/classes',
  },
  {
    icon: settingIcon,
    name: 'Settings',
    link: '/settings',
  },
];

const MainSidebar = () => {
  const history = useHistory();

  const handlePageRoute = (navLink) =>{
    history.push(navLink);
  }

  return (
    <SidebarContainer>
      <SideNavbar>
        <ul>
          {sideNavItems.map((navItem) => {
            return (
              <li onClick={()=> handlePageRoute(navItem.link)}>
                <img src={navItem.icon} />
                <span>{navItem.name}</span>
              </li>
            );
          })}
        </ul>
      </SideNavbar>
      <HelpIcon src={helpIcon}/>
    </SidebarContainer>
  );
};

export default MainSidebar;
