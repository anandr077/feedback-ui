import React from 'react';
import Navigation from '../Navbar/Navigation';
import Notifications from '../Notifications';
import NotificationsBar from '../NotificationsMenu/NotificationsBar';
import { getNotifications, getUserRole } from '../../service.js';
import {
  NavigationContainer,
  Frame1350,
  Frame1349,
  Frame5,
  Frame51,
} from './HeaderSmallStyle';
import { useQuery } from '@tanstack/react-query';
import HeaderOnboardingMenu from '../../components2/Onboard/HeaderOnboardingMenu.jsx';

export default function HeaderSmall(props) {
  const { headerProps } = props;
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isTeacher = getUserRole() === 'TEACHER';

  const { data: notifications, isLoading } = useQuery({
    queryKey: ['notifications'],
    queryFn: async () => {
      const result = await getNotifications();
      return result;
    },
    staleTime: 60000,
  });

  const handleNotificationClick = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
  return (
    <>
      <Frame1350>
        <a href="#">
          <Frame1349 src="icons/header-logo.png" />
        </a>
        <Frame5>
          {!isTeacher && <HeaderOnboardingMenu />}
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
