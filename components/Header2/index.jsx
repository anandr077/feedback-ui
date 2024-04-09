import React, { useEffect, useRef, useState } from 'react';
import {
  useHistory,
  useLocation,
} from 'react-router-dom/cjs/react-router-dom.min';
import { getNotifications } from '../../service.js';
import { getUserRole } from '../../userLocalDetails.js';
import {
  MainContainer,
  Logo,
  LeftSide,
  Title,
  RightSide,
  NotificationAccount,
  Notification,
  Account,
  Screen,
  NavigationContainer,
  DropDownContainer,
} from './HeaderStyle';
import QuestionTooltip from '../../components2/QuestionTooltip';
import questionMark from '../../static/img/question-mark.svg';
import addBtnIcon from '../../static/icons/gradient_add.svg';
import notificationsIcon from '../../static/icons/notifications.svg';
import accountIcon from '../../static/icons/mask-group-4@2x.png';
import RoundedBorderLeftIconBtn from '../../components2/Buttons/RoundedBorderLeftIconBtn';
import { useQuery } from '@tanstack/react-query';
import NotificationsBar from '../NotificationsMenu/NotificationsBar/index.jsx';
import ProfileDropdown from '../ProfileMenu/ProfileDropdown/index.jsx';
import { headerTitle } from './headerTitle.js';

const Header = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [slideNotificationBar, setSlideNotificationBar] = useState(false);
  const [dropDown, setDropDown] = React.useState(false);
  const [pageHeight, setPageHeight] = useState(0);
  const [sliderOpen, setsliderOpen] = useState(false);
  const [fixedTop, setfixedTop] = useState(false);
  const notificationBarRef = useRef(null);
  const history = useHistory();
  const location = useLocation();
  const role = getUserRole();

  const { data: notifications, isLoading } = useQuery({
    queryKey: ['notifications'],
    queryFn: async () => {
      const result = await getNotifications();
      return result;
    },
    staleTime: 60000,
  });

  const handleNewTaskClick = () => {
    history.push('/tasks/new');
  };

  const toggleDropDown = () => {
    setDropDown(!dropDown);
    setIsNotificationOpen(false);
  };

  const handleNotificationClick = () => {
    if (!isNotificationOpen) {
      setIsNotificationOpen(true);
      setSlideNotificationBar(true);
      setsliderOpen(true);
    } else {
      setSlideNotificationBar(false);
      setsliderOpen(false);
      setTimeout(() => {
        setIsNotificationOpen(false);
      }, 300);
    }
  };

  useEffect(() => {
    const updateHeight = () => {
      const fullHeight = document.documentElement.scrollHeight;
      if (fullHeight !== pageHeight) {
        setPageHeight(fullHeight - 170);
      }
    };

    const observer = new MutationObserver((mutations) => {
      let shouldUpdateHeight = false;

      for (const mutation of mutations) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          shouldUpdateHeight = true;
          break;
        }
      }

      if (shouldUpdateHeight) {
        updateHeight();
      }
    });

    const config = { childList: true, subtree: true };

    observer.observe(document.body, config);

    updateHeight();

    return () => observer.disconnect();
  }, []);

  const pageHeader = headerTitle.find(
    (item) => item.link === location.pathname
  );

  return (
    <div
      ref={notificationBarRef}
      style={{
        position: 'sticky',
        top: '0',
        zIndex: '5',
      }}
    >
      <MainContainer>
        <LeftSide>
          <Logo src="./img/logo.svg" />
          <Title>
            {pageHeader && pageHeader.title}
            <QuestionTooltip
              img={questionMark}
              text={
                pageHeader && role === 'TEACHER'
                  ? pageHeader.teacherTooltip
                  : role === 'STUDENT'
                  ? pageHeader.studentTooltip
                  : ''
              }
            />
          </Title>
        </LeftSide>
        <RightSide>
          {/* <Buttons link="#tasks/new" /> */}
          {role === 'TEACHER' && (
            <div style={{borderRight: '2px solid #DADADA', paddingRight: '20px'}}>
              <RoundedBorderLeftIconBtn
                onclick={handleNewTaskClick}
                leftIcon={addBtnIcon}
                btnText="New Task"
              />
            </div>
          )}
          <NotificationAccount>
            <Notification
              src={notificationsIcon}
              onClick={handleNotificationClick}
            />
            <Account src={accountIcon} onClick={toggleDropDown} />
          </NotificationAccount>
        </RightSide>
        {isNotificationOpen && (
          <Screen
            onClick={handleNotificationClick}
            notifications={notifications}
            pageHeight={pageHeight}
          >
            <NavigationContainer
              slideNotificationBar={sliderOpen}
              pageHeight={pageHeight}
              onClick={(e) => e.stopPropagation()}
              ref={notificationBarRef}
              fixedTop={fixedTop}
            >
              {' '}
              <NotificationsBar
                notifications={notifications}
                loadingNotifications={isLoading}
                fixedTop={fixedTop}
              />{' '}
            </NavigationContainer>
          </Screen>
        )}
        {dropDown && (
          <Screen onClick={toggleDropDown} pageHeight={pageHeight}>
            <DropDownContainer>
              <ProfileDropdown />
            </DropDownContainer>
          </Screen>
        )}
      </MainContainer>
    </div>
  );
};

export default Header;
