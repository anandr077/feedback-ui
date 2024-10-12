import React, { useState } from 'react';
import Navigation from '../Navbar/Navigation';
import Notifications from '../Notifications';
import NotificationsBar from '../NotificationsMenu/NotificationsBar';
import { getNotifications } from '../../service.js';
import { getUserRole } from '../../userLocalDetails.js';
import {
  NavigationContainer,
  Frame1350,
  Frame1349,
  Frame5,
  Frame51,
} from './HeaderSmallStyle';
import { useQuery } from '@tanstack/react-query';

import HeaderHelpBar from '../../components2/HeaderHelpBar/index.jsx';
import HelpSidebar from '../../components2/HelpSidebar';
import { useNotifications } from '../state/hooks.js';

export default function HeaderSmall(props) {
  const { headerProps } = props;
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHelpBarOpen, setIsHelpBarOpen] = useState(false);
  const isTeacher = getUserRole() === 'TEACHER';

  const {
    data: notifications,
    isLoadingdata: isLoading,
  } = useNotifications(id = null, condition = true, time = 300000); 

  const handleNotificationClick = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleHelpBarClick = () =>{
    setIsHelpBarOpen(!isHelpBarOpen)
  }
  
  if (isMenuOpen) {
    return (
      <NavigationContainer>
        {' '}
        <Navigation headerProps={headerProps} onCloseFn={handleMenuClick} />
      </NavigationContainer>
    );
  }
  if (isNotificationOpen) {
    return (
      <NavigationContainer>
        {' '}
        <NotificationsBar
          notifications={notifications}
          type="small"
          onCloseFn={handleNotificationClick}
          loadingNotifications={isLoading}
        />{' '}
      </NavigationContainer>
    );
  }
  if(isHelpBarOpen){
    return(
      <NavigationContainer>
         <HelpSidebar onCloseFn={handleHelpBarClick} />
      </NavigationContainer>
    )
  }
  return (
    <>
      <Frame1350>
        <a href="#">
          <Frame1349 src="icons/header-logo.png" />
        </a>
        <Frame5>
          <HeaderHelpBar 
            src="/img/helpIcon.png"
            onClickFn={handleHelpBarClick}
          />
          <Notifications
            src="/img/notificationbing@2x.png"
            onClickFn={handleNotificationClick}
            showNewNotifications={notifications?.length > 0}
          />
          <Frame51 src="/img/frame-5@2x.png" onClick={handleMenuClick} />
        </Frame5>
      </Frame1350>
    </>
  );
}
