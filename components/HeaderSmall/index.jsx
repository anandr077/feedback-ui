import React from 'react';
import styled from 'styled-components';
import Navigation from '../Navbar/Navigation';
import Notifications from '../Notifications';
import NotificationsBar from '../NotificationsMenu/NotificationsBar';
import { getNotifications } from '../../service.js';

export default function HeaderSmall(props) {
  const { headerProps } = props;
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [notifications, setNotifications] = React.useState([]);
  const [loadingNotifications, setLoadingNotifications] = React.useState(true);
  React.useEffect(() => {
    getNotifications().then((result) => {
      setNotifications(result);
      setLoadingNotifications(false);
    });
  }, []);

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
          loadingNotifications={loadingNotifications}
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

const NavigationContainer = styled.div`
  position: absolute;
  right: 0;
  z-index: 1;
  background-color: var(--white);
  rbga(255, 255, 255, 0.5);
  align-self: stretch;
  width: 100vw;
  height: 200vh;
  `;

const Screen = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Frame1350 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 16px 20px;
  position: relative;
  max-height: 70px;
  align-self: stretch;
  background-color: var(--white);
`;

const Frame1349 = styled.img`
  position: relative;
  align-self: stretch;
  height: 43.499969482421875px;
  margin-left: -1.75px;
  width: 100%;
  max-width: 170px;
`;

const Frame5 = styled.div`
  display: flex;
  align-self: stretch;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  position: absolute;
  right: 20px;
`;

const Frame51 = styled.img`
  position: relative;
  align-self: stretch;
  height: 48px;
  cursor: pointer;
`;

const Popup = styled.div`
  position: absolute;
  // right: 10px;
  // top: 70px;
  height: 100px;
  cursor: pointer;
  z-index: 1;
  background-color: var(--white);
  rbga(255, 255, 255, 0.5);
  align-self: stretch;
`;
