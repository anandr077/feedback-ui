import React, { useEffect, useRef, useState } from 'react';
import {
  useHistory,
  useLocation,
} from 'react-router-dom/cjs/react-router-dom.min';
import { getNotifications } from '../../service.js';
import { getUserName, getUserRole } from '../../userLocalDetails.js';
import {
  MainContainer,
  LeftSide,
  Title,
  RightSide,
  NotificationAccount,
  Notification,
  HeaderHelpBar,
  HelpbarContainer,
  Account,
  Screen,
  NavigationContainer,
  DropDownContainer,
  TitleMain,
  ArrowRightImg,
  TitleConatiner,
} from './HeaderStyle';
import QuestionTooltip from '../../components2/QuestionTooltip';
import questionMark from '../../static/img/24questionbordered.svg';
import arrowRightMini from '../../static/img/arrowRightMini.svg';
import helpbarIcon from '../../static/img/helpgray24.svg';
import addBtnIcon from '../../static/icons/gradient_add.svg';
import notificationsIcon from '../../static/icons/notifications.svg';
import accountIcon from '../../static/icons/mask-group-4@2x.png';
import RoundedBorderLeftIconBtn from '../../components2/Buttons/RoundedBorderLeftIconBtn';
import { useQuery } from '@tanstack/react-query';
import NotificationsBar from '../NotificationsMenu/NotificationsBar/index.jsx';
import ProfileDropdown from '../ProfileMenu/ProfileDropdown/index.jsx';
import { headerTitle } from './headerTitle.js';
import { Avatar } from '@boringer-avatars/react';
import { headerMainTitle } from './headerMainTitle.js';
import HelpSidebar from '../../components2/HelpSidebar/index.jsx';
//import HeaderHelpBar from '../../components2/HeaderHelpBar/index.jsx';

const Header = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [slideNotificationBar, setSlideNotificationBar] = useState(false);
  const [isHelpBarOpen, setIsHelpBarOpen] = useState(false);
  const [dropDown, setDropDown] = React.useState(false);
  const [pageHeight, setPageHeight] = useState(0);
  const [sliderOpen, setsliderOpen] = useState(false);
  const [fixedTop, setfixedTop] = useState(false);
  const notificationBarRef = useRef(null);
  const history = useHistory();
  const location = useLocation();
  const role = getUserRole();
  const name = getUserName();

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

  const handleHelpBarClick = () => {
    setIsNotificationOpen(false);
    if (!isHelpBarOpen) {
      setIsHelpBarOpen(true);
      setsliderOpen(true);
      setIsNotificationOpen(false);
      setDropDown(false);
    } else {
      setsliderOpen(false);
      setTimeout(() => {
        setIsHelpBarOpen(false);
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

  const pageHeader = headerTitle.find((item) =>
    new RegExp(`${item.link}`).test(location.pathname)
  );
  const pageMainHeader = headerMainTitle.find(
    (item) => item.link === location.pathname
  );

  return (
    <div
      ref={notificationBarRef}
      style={{
        position: 'sticky',
        top: '0',
        zIndex: '5',
        borderBottom: '1px solid rgba(255, 255, 255, 1)',
        boxShadow: '2px 1px 4px 0px rgba(115, 115, 115, 0.25)'
      }}
    >
      <MainContainer>
        <LeftSide>
          <TitleConatiner>
            <TitleMain>{pageMainHeader && pageMainHeader.title}</TitleMain>
            {pageMainHeader && <ArrowRightImg src={arrowRightMini} />}
            <Title>
              {pageHeader && pageHeader.title}
              <QuestionTooltip
                img={questionMark}
                text={
                  pageHeader && role === 'TEACHER'
                    ? pageHeader.teacherTooltip
                    : role === 'STUDENT'
                    ? pageHeader?.studentTooltip
                    : ''
                }
              />
            </Title>
          </TitleConatiner>
        </LeftSide>
        <RightSide>
          {/* <Buttons link="#tasks/new" /> */}
          {role === 'TEACHER' && (
            <div
              style={{ borderRight: '2px solid #DADADA', paddingRight: '20px' }}
            >
              <RoundedBorderLeftIconBtn
                onclick={handleNewTaskClick}
                leftIcon={addBtnIcon}
                btnText="New Task"
              />
            </div>
          )}
          <NotificationAccount>
            <HeaderHelpBar src={helpbarIcon} onClick={handleHelpBarClick} />
            <Notification
              src={notificationsIcon}
              onClick={handleNotificationClick}
            />
            {/* <Account src={accountIcon} onClick={toggleDropDown} /> */}
            <Account onClick={toggleDropDown}>
              <Avatar
                title={false}
                size={36}
                variant="beam"
                name={name}
                square={false}
              />
            </Account>
          </NotificationAccount>
        </RightSide>
        {isHelpBarOpen && (
          <Screen onClick={handleHelpBarClick} pageHeight={pageHeight}>
            <HelpbarContainer
              isHelpBarOpen={sliderOpen}
              pageHeight={pageHeight}
              ref={notificationBarRef}
              fixedTop={fixedTop}
            >
              <HelpSidebar fixedTop={fixedTop} />
            </HelpbarContainer>
          </Screen>
        )}
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
