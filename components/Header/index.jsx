import React from 'react';
import Notifications from '../Notifications';
import UserIcon from '../UserIcon';
import ProfileDropdown from '../ProfileMenu/ProfileDropdown';
import NotificationsBar from '../NotificationsMenu/NotificationsBar';
import { getNotifications } from '../../service.js';
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
import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import HeaderHelpBar from '../../components2/HeaderHelpBar/index.jsx';
import HelpSidebar from '../../components2/HelpSidebar/index.jsx';
import { useState } from 'react';
import HeaderOnboardingMenu from '../../components2/Onboard/HeaderOnboardingMenu.jsx';
import { getUserRole } from '../../service.js';

export default function Header(props) {
  const { headerProps } = props;
  const [dropDown, setDropDown] = React.useState(false);
  const [isHelpBarOpen, setIsHelpBarOpen] = React.useState(false);
  const [pageHeight, setPageHeight] = useState(0);
  const isTeacher = getUserRole() === 'TEACHER';
  const [sliderOpen, setsliderOpen] = useState(false);
  const { data: notifications, isLoading } = useQuery({
    queryKey: ['notifications'],
    queryFn: async () => {
      const result = await getNotifications();
      return result;
    },
    staleTime: 60000,
  });

  const OnFirstButtonClick = () => {
    window.location.href = headerProps.firstButton.redirect;
  };
  const OnSecondButtonClick = () => {
    window.location.href = headerProps.secondButton.redirect;
  };
  const OnThirdButtonClick = () => {
    window.location.href = headerProps.thirdButton.redirect;
  };
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);
  const [slideNotificationBar, setSlideNotificationBar] = useState(false);
  const handleNotificationClick = () => {
    if (!isNotificationOpen) {
      setIsNotificationOpen(true);
      setSlideNotificationBar(true);
    } else {
      setSlideNotificationBar(false);
      setTimeout(() => {
        setIsNotificationOpen(false);
      }, 300);
    }
  };

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  const handleHelpBarClick = () => {
    if (!isHelpBarOpen) {
      setIsHelpBarOpen(true);
      setsliderOpen(true);
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
  
  return (
    <>
      <Frame1344>
        <a href="#">
          <Frame1343 src="/icons/header-logo.png" alt="Frame 1343" />
        </a>
        <Frame5>
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
          {headerProps.thirdButton.selected ? (
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
          )}
        </Frame5>
        <Frame51>
          {!isTeacher && <HeaderOnboardingMenu />}
          <HeaderHelpBar
            src="/img/helpIcon.png"
            onClickFn={handleHelpBarClick}
          />
          
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
          <HelpbarContainer isHelpBarOpen={sliderOpen} pageHeight={pageHeight}>
            <HelpSidebar />
          </HelpbarContainer>
        </Screen>
      )}
      {isNotificationOpen && (
        <Screen onClick={handleNotificationClick} notifications={notifications} pageHeight={pageHeight}>
          <NavigationContainer
            slideNotificationBar={sliderOpen}
            pageHeight={pageHeight}
            onClick={(e) => e.stopPropagation()}
          >
            {' '}
            <NotificationsBar
              notifications={notifications}
              loadingNotifications={isLoading}
            />{' '}
          </NavigationContainer>
        </Screen>
      )}

      {dropDown && (
        <Screen onClick={toggleDropDown}>
          <DropDownContainer>
            <ProfileDropdown />
          </DropDownContainer>
        </Screen>
      )}
    </>
  );
}
