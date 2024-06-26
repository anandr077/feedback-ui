import React, { useState } from 'react';
import { SidebarContainer, SideNavbar, SideBottom, Logo } from './style';
import { deleteCookie, getUserRole } from '../../userLocalDetails';
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
  isClassItems,
  isTeacherWithoutClass,
  checkIsActive,
} from './rules';

const MainSidebar = () => {
  const history = useHistory();
  const location = useLocation();
  const role = getUserRole();
  const localClasses = getLocalClasses();
  const isExpert = isTeacherWithoutClass(role, localClasses);
  const homePageLink = isExpert ? '/giveFeedback' : '/tasks';

  const isShowTaskItems = !isNonSchoolStudent(role, localClasses);
  const isShowClassItems = isClassItems(role, localClasses);
  const isShowGetFeedbackItems = !isTeacherWithoutClass(role, localClasses);
  const isShowSettingItems = isShowSetting(role);

  const sideNavItems = [
    isShowTaskItems && taskItems(role, homePageLink, location, checkIsActive),
    isShowClassItems && classItems(location, checkIsActive),
    isShowGetFeedbackItems && getFeedbackItems(role, location, checkIsActive),
    isShowSettingItems && isSettingItems(role, location, checkIsActive),
  ].filter(Boolean);

  const handlePageRoute = (navLink) => {
    history.push(navLink);
    deleteCookie('documentName');
    deleteCookie('documentStatus');
  };

  return (
    <SidebarContainer>
      <SideNavbar>
        <a href="/">
          <Logo src="./img/logo.svg" />
        </a>
        <ul>
          {sideNavItems.map((navItem) => {
            const active = navItem.isActive;
            console.log('the is active', active)
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


function taskItems(role, homePageLink, location, checkIsActive){
  const paths = [
    '/',
    '/tasks',
    '/completed',
    '/submissions/',
    '/giveFeedback',
    '/feedbackHistory',
    '/sharedresponses',
    '/documentsReview',
    '/submissions'
  ];

  return{
    icon: taskIcon,
    activeIcon: activetaskIcon,
    isActive: checkIsActive(location, paths), 
    name: `${role === 'STUDENT' ? 'School Work' : 'Tasks'}`,
    link: homePageLink,
  }
}

function classItems(location, checkIsActive){
  const paths = ['/classes'];

  return{
    icon: classIcon,
    activeIcon: activeClassIcon,
    isActive: checkIsActive(location, paths),
    name: 'Class Insights',
    link: '/classes',
  }
}

function getFeedbackItems(role, location, checkIsActive){
  const paths = ['/getFeedback', '/documents'];

  return {
    icon: `${role === 'STUDENT' ? getfeedbackIcon : jeddaiIcon}`,
    activeIcon: `${
      role === 'STUDENT' ? activeGetfeedbackIcon : jeddaiIconIcon
    }`,
    isActive: checkIsActive(location, paths),
    name: `${role === 'STUDENT' ? 'Get Feedback' : 'Use JeddAI'}`,
    link: '/getFeedback',
  }
}

function isSettingItems(role, location, checkIsActive){
  const paths = [
    '/settings',
    '/markingTemplates/strengths-and-targets',
    '/markingTemplates/rubrics',
    '/commentbanks',
  ];

  return{
    icon: settingIcon,
    activeIcon: activesettingIcon,
    name: 'Feedback Tools',
    isActive: checkIsActive(location, paths),
    link: '/settings',
  }
}