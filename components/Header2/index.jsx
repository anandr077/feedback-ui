import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  useHistory,
} from 'react-router-dom/cjs/react-router-dom.min';
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
  DocumentName,
} from './HeaderStyle';
import helpbarIcon from '../../static/img/helpgray24.svg';
import addBtnIcon from '../../static/icons/gradient_add.svg';
import notificationsIcon from '../../static/icons/Notifications.svg';
import RoundedBorderLeftIconBtn from '../../components2/Buttons/RoundedBorderLeftIconBtn';
import NotificationsBar from '../NotificationsMenu/NotificationsBar/index.jsx';
import ProfileDropdown from '../ProfileMenu/ProfileDropdown/index.jsx';
import HeaderTitle from './headerTitle.js';
import { Avatar } from '@boringer-avatars/react';
import HelpSidebar from '../../components2/HelpSidebar/index.jsx';
import { isTeacher, isTeacherWithClass } from './rules.js';
import HeaderOnboardingMenu from '../../components2/Onboard/HeaderOnboardingMenu.jsx';
import { useClassData, useNotifications } from '../state/hooks.js';
import Loader from '../Loader/index.jsx';
import Cookies from 'js-cookie';
import { AppContext } from '../../app.context.js';

const Header = ({ breadcrumbs }) => {
  const { showWelcomeOnboarding } = useContext(AppContext);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isHelpBarOpen, setIsHelpBarOpen] = useState(false);
  const [dropDown, setDropDown] = React.useState(false);
  const [pageHeight, setPageHeight] = useState(0);
  const [sliderOpen, setSliderOpen] = useState(false);
  const notificationBarRef = useRef(null);
  const history = useHistory();
  const { data: classData, isLoadingdata: isLoadingclassData } = useClassData();
  const role = getUserRole();
  const name = getUserName();

  useEffect(() => {
    const notificationNotShown = !Cookies.get('showNotificationBar');
    const showForStudent = role === 'STUDENT';
    const showForTeacher = Cookies.get('welcomeOnboardingShown') && !showWelcomeOnboarding;
  
    if (notificationNotShown && (showForStudent || showForTeacher)) {
      setIsNotificationOpen(true);
      setSliderOpen(true); 
    }
  }, [role, showWelcomeOnboarding]);


  const {
    data: notifications,
    isLoadingdata: isLoading,
  } = useNotifications(id = null, condition = true, time = 300000); 

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
      setSliderOpen(true);
    } else {
      setSliderOpen(false);
      setTimeout(() => {
        setIsNotificationOpen(false);
      }, 300);
      Cookies.set('showNotificationBar', 'true');
    }
  };

  const handleHelpBarClick = () => {
    setIsNotificationOpen(false);
    if (!isHelpBarOpen) {
      setIsHelpBarOpen(true);
      setSliderOpen(true);
      setIsNotificationOpen(false);
      setDropDown(false);
    } else {
      setSliderOpen(false);
      setTimeout(() => {
        setIsHelpBarOpen(false);
      }, 300);
    }
  };

  useEffect(() => {
    const updateHeight = () => {
      const fullHeight = document.documentElement.scrollHeight;
      if (fullHeight !== pageHeight) {
        setPageHeight(fullHeight - 120);
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

  if(isLoadingclassData){
    return <Loader />
  }

  return (
    <div
      ref={notificationBarRef}
      style={{
        position: 'sticky',
        top: '0',
        zIndex: '6',
        borderBottom: '1px solid rgba(255, 255, 255, 1)',
        boxShadow: '2px 1px 4px 0px rgba(115, 115, 115, 0.25)',
      }}
    >
      <MainContainer>
        <LeftSide>
          <HeaderTitle breadcrumbs={breadcrumbs} />
        </LeftSide>
        <RightSide>
          {isTeacherWithClass(role, classData) && (
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
            {!isTeacher(role) && <HeaderOnboardingMenu />}
            <HeaderHelpBar src={helpbarIcon} onClick={handleHelpBarClick} />
            <Notification
              src={notificationsIcon}
              onClick={handleNotificationClick}
            />
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
          <Screen
            onClick={handleHelpBarClick}
            pageHeight={pageHeight}
            bgColor={'rgba(0, 0, 0, 0.5)'}
          >
            <HelpbarContainer
              isHelpBarOpen={sliderOpen}
              ref={notificationBarRef}
            >
              <HelpSidebar onCloseFn={handleHelpBarClick}/>
            </HelpbarContainer>
          </Screen>
        )}
        {isNotificationOpen && (
          <Screen
            onClick={handleNotificationClick}
            notifications={notifications}
            pageHeight={pageHeight}
            bgColor={'rgba(0, 0, 0, 0.5)'}
          >
            <NavigationContainer
              slideNotificationBar={sliderOpen}
              pageHeight={document.documentElement.scrollHeight}
              onClick={(e) => e.stopPropagation()}
              ref={notificationBarRef}
            >
              {' '}
              <NotificationsBar
                notifications={notifications}
                loadingNotifications={isLoading}
                onCloseFn={handleNotificationClick}
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
