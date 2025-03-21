import React from 'react';
import Notifications from '../Notifications';
import UserIcon from '../UserIcon';
import ProfileDropdown from '../ProfileMenu/ProfileDropdown';
import NotificationsBar from '../NotificationsMenu/NotificationsBar';
import {
  NavigationContainer,
  HelpbarContainer,
  Screen,
  DropDownContainer,
  Frame1344,
  Frame1343,
  Frame5,
  Frame51,
  HeaderButton,
  HeaderButtonInnnerContainer,
  IconContainer,
  ButtonText,
  SelectedButtonText,
  HeaderButtonSelected,
} from './HeaderStyle';
import { useState, useEffect, useRef } from 'react';
import { useState } from 'react';
import HeaderOnboardingMenu from '../../components2/Onboard/HeaderOnboardingMenu.jsx';
import { getUserRole } from '../../userLocalDetails.js';
import HelpSidebar from '../../components2/HelpSidebar/index.jsx';
import { useClassData, useNotifications } from '../state/hooks.js';
import { isNullOrEmpty } from '../../utils/arrays.js';
import Loader from '../Loader/index.jsx';

export default function Header(props) {
  const { headerProps } = props;
  const [dropDown, setDropDown] = React.useState(false);
  const [isHelpBarOpen, setIsHelpBarOpen] = React.useState(false);
  const [pageHeight, setPageHeight] = useState(0);
  const isTeacher = getUserRole() === 'TEACHER';
  const [sliderOpen, setsliderOpen] = useState(false);
  const [fixedTop, setfixedTop] = useState(false);
  const helpBarRef = useRef(null);
  const { data: classData, isLoadingdata: isLoadingclassData } = useClassData();

  const {
    data: notifications,
    isLoadingdata: isLoading,
  } = useNotifications(id = null, condition = true, time = 300000); 

  const OnFirstButtonClick = (event) => {
    if (event.ctrlKey || event.metaKey) {
      window.open(headerProps.firstButton.redirect, '_blank');
    } else {
      window.location.href = headerProps.firstButton.redirect;
    }
  };
  const OnSecondButtonClick = (event) => {
    if (event.ctrlKey || event.metaKey) {
      window.open(headerProps.secondButton.redirect, '_blank');
    } else {
      window.location.href = headerProps.secondButton.redirect;
    }
  };
  const OnThirdButtonClick = (event) => {
    if (event.ctrlKey || event.metaKey) {
      window.open(headerProps.thirdButton.redirect, '_blank');
    } else {
      window.location.href = headerProps.thirdButton.redirect;
    }
  };
  const OnFourthButtonClick = (event) => {
    if (event.ctrlKey || event.metaKey) {
      window.open(headerProps.fourthButton.redirect, '_blank');
    } else {
      window.location.href = headerProps.fourthButton.redirect;
    }
  };
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);
  const [slideNotificationBar, setSlideNotificationBar] = useState(false);
  const handleNotificationClick = () => {
    if (!isNotificationOpen) {
      setIsNotificationOpen(true);
      setSlideNotificationBar(true);
      setsliderOpen(true);
      setIsHelpBarOpen(false);
      setDropDown(false);
    } else {
      setSlideNotificationBar(false);
      setsliderOpen(false);
      setTimeout(() => {
        setIsNotificationOpen(false);
      }, 300);
    }
  };

  const toggleDropDown = () => {
    setDropDown(!dropDown);
    setIsHelpBarOpen(false);
    setIsNotificationOpen(false);
  };

  const handleHelpBarClick = () => {
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

  const checkSticky = () => {
    const helpBar = helpBarRef.current;
    if (!helpBar) return;

    const shouldStick = window.scrollY > 70;
    setfixedTop(shouldStick);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkSticky);

    return () => {
      window.removeEventListener('scroll', checkSticky);
    };
  }, []);

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

  if(isLoadingclassData){
    return <Loader />
  }

  return (
    <div
      ref={helpBarRef}
      style={{
        position: 'sticky',
        top: '0',
        zIndex: '5',
      }}
    >
      <Frame1344>
        <a href="#">
          <Frame1343 src="/icons/header-logo.png" alt="Frame 1343" />
        </a>
        <Frame5>
          {!isNullOrEmpty(classData) && (
            <>
              {headerProps.firstButton.selected ? (
                <HeaderButtonSelected onClick={OnFirstButtonClick}>
                  <HeaderButtonInnnerContainer>
                    <IconContainer
                      src={headerProps.firstButton.iconSelected}
                      alt="buttonIcon"
                    />
                    <SelectedButtonText>
                      {headerProps.firstButton.text}
                    </SelectedButtonText>
                  </HeaderButtonInnnerContainer>
                </HeaderButtonSelected>
              ) : (
                <HeaderButton onClick={OnFirstButtonClick}>
                  <HeaderButtonInnnerContainer className="group-1">
                    <IconContainer
                      src={headerProps.firstButton.icon}
                      alt="buttonIcon"
                    />
                    <ButtonText>{headerProps.firstButton.text}</ButtonText>
                  </HeaderButtonInnnerContainer>
                </HeaderButton>
              )}
              {headerProps.secondButton.selected ? (
                <HeaderButtonSelected onClick={OnSecondButtonClick}>
                  <HeaderButtonInnnerContainer>
                    <IconContainer
                      src={headerProps.secondButton.iconSelected}
                      alt="buttonIcon"
                    />
                    <SelectedButtonText>
                      {headerProps.secondButton.text}
                    </SelectedButtonText>
                  </HeaderButtonInnnerContainer>
                </HeaderButtonSelected>
              ) : (
                <HeaderButton onClick={OnSecondButtonClick}>
                  <HeaderButtonInnnerContainer className="group-1">
                    <IconContainer
                      src={headerProps.secondButton.icon}
                      alt="buttonIcon"
                    />
                    <ButtonText>{headerProps.secondButton.text}</ButtonText>
                  </HeaderButtonInnnerContainer>
                </HeaderButton>
              )}
            </>
          )}
          {isTeacher &&
            !isNullOrEmpty(classData) &&
            (headerProps.thirdButton.selected ? (
              <HeaderButtonSelected onClick={OnThirdButtonClick}>
                <HeaderButtonInnnerContainer>
                  <IconContainer
                    src={headerProps.thirdButton.iconSelected}
                    alt="buttonIcon"
                  />
                  <SelectedButtonText>
                    {headerProps.thirdButton.text}
                  </SelectedButtonText>
                </HeaderButtonInnnerContainer>
              </HeaderButtonSelected>
            ) : (
              <HeaderButton onClick={OnThirdButtonClick}>
                <HeaderButtonInnnerContainer className="group-1">
                  <IconContainer
                    src={headerProps.thirdButton.icon}
                    alt="buttonIcon"
                  />
                  <ButtonText>{headerProps.thirdButton.text}</ButtonText>
                </HeaderButtonInnnerContainer>
              </HeaderButton>
            ))}
          {!isNullOrEmpty(classData) &&
            !isTeacher &&
            (headerProps.thirdButton.selected ? (
              <HeaderButtonSelected onClick={OnThirdButtonClick}>
                <HeaderButtonInnnerContainer>
                  <IconContainer
                    src={headerProps.thirdButton.iconSelected}
                    alt="buttonIcon"
                  />
                  <SelectedButtonText>
                    {headerProps.thirdButton.text}
                  </SelectedButtonText>
                </HeaderButtonInnnerContainer>
              </HeaderButtonSelected>
            ) : (
              <HeaderButton onClick={OnThirdButtonClick}>
                <HeaderButtonInnnerContainer className="group-1">
                  <IconContainer
                    src={headerProps.thirdButton.icon}
                    alt="buttonIcon"
                  />
                  <ButtonText>{headerProps.thirdButton.text}</ButtonText>
                </HeaderButtonInnnerContainer>
              </HeaderButton>
            ))}
          {isTeacher &&
            (headerProps.fourthButton.selected ? (
              <HeaderButtonSelected onClick={OnFourthButtonClick}>
                <HeaderButtonInnnerContainer>
                  <IconContainer
                    src={headerProps.fourthButton.iconSelected}
                    alt="buttonIcon"
                  />
                  <SelectedButtonText>
                    {headerProps.fourthButton.text}
                  </SelectedButtonText>
                </HeaderButtonInnnerContainer>
              </HeaderButtonSelected>
            ) : (
              <HeaderButton onClick={OnFourthButtonClick}>
                <HeaderButtonInnnerContainer className="group-1">
                  <IconContainer
                    src={headerProps.fourthButton.icon}
                    alt="buttonIcon"
                  />
                  <ButtonText>{headerProps.fourthButton.text}</ButtonText>
                </HeaderButtonInnnerContainer>
              </HeaderButton>
            ))}
        </Frame5>
        <Frame51>
          {!isTeacher && <HeaderOnboardingMenu />}
          <Notifications
            src="/img/notificationbing-3@2x.png"
            onClickFn={handleNotificationClick}
            showNewNotifications={notifications?.length > 0}
          />
          <div onClick={toggleDropDown}>
            <UserIcon maskGroup="/img/mask-group-1@2x.png" />
          </div>
        </Frame51>
      </Frame1344>
      {isHelpBarOpen && (
        <Screen onClick={handleHelpBarClick} pageHeight={pageHeight}>
          <HelpbarContainer
            isHelpBarOpen={sliderOpen}
            pageHeight={pageHeight}
            ref={helpBarRef}
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
            ref={helpBarRef}
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
    </div>
  );
}
