import React, { useState, useEffect, useContext } from 'react';
import NavElement42 from '../NavElement42';
import NavElement52 from '../NavElement52';
import NavElement6 from '../NavElement6';
import NavElement7 from '../NavElement7';
import NavElement8 from '../NavElement8';
import styled from 'styled-components';
import './Navigation.css';
import { account, changePassword, getUserName, logout } from '../../../service';
import { Avatar } from '@boringer-avatars/react';
import { useQueryClient } from '@tanstack/react-query';
import { getUserRole } from '../../../service';
import Cookies from 'js-cookie';
import countriesData from '../../../components2/Onboard/countries.json';

const group1Data = {
  iconHome: '/img/home3-1@2x.png',
};

const navElement42Data = {
  group1Props: group1Data,
};

const navElement71Data = {
  home: 'Profile',
};

const navElement72Data = {
  home: 'Change Password',
  className: 'nav-element-4',
};

const navElement8Data = {
  children: 'Logout',
};

function Navigation(props) {
  const name = getUserName();
  const queryClient = useQueryClient();
  const [state, setState] = useState('State');
  const [year, setYear] = useState('Year');
  const defaultCountry = Object.keys(countriesData)[0] || 'Australia';
  const [country, setCountry] = useState(defaultCountry);
  const isTeacher = getUserRole() === 'TEACHER';

  const findFlagIcon = (state = defaultCountry.state) => {
    const matchingState = countriesData[country].find(
      (cntry) => cntry.state === state
    );

    return matchingState
      ? matchingState.flagIcon
      : countriesData[country][0].flagIcon;
  };

  const flagIcon = findFlagIcon(state);

  useEffect(() => {
    const savedState = Cookies.get('state');
    const savedYear = Cookies.get('year');

    savedState && setState(savedState);
    savedYear && setYear(savedYear);
  }, []);

  const { headerProps, onCloseFn } = props;
  const navigationData = {
    maskGroup: '/img/mask-group-2@2x.png',
    name: 'Eleanor Pena',
    iconClose: '/img/close.png',
    navElement4Props: navElement42Data,
    navElement71Props: navElement71Data,
    navElement72Props: navElement72Data,
    navElement8Props: navElement8Data,
  };
  return (
    <NavbarDiv
      className="navigation screen"
      name="form1"
      action="form1"
      method="post"
    >
      <Frame1409>
        <Frame4>
          <Avatar
            title={false}
            size={45}
            variant="beam"
            name={name}
            square={false}
          />
          {/* <MaskGroup src={navigationData.maskGroup} alt="Mask group" /> */}
          <Frame3>
            <Name>{name}</Name>
            <Frame27></Frame27>
          </Frame3>
        </Frame4>
        <MaskGroup
          src={navigationData.iconClose}
          alt="icon-close"
          onClick={onCloseFn}
        />
      </Frame1409>
      <Frame5>
        <NavElement42 button={headerProps.firstButton} onClick={onCloseFn} />
        <NavElement42 button={headerProps.secondButton} onClick={onCloseFn} />
        {(Cookies.get('classes') || isTeacher) && <NavElement42 button={headerProps.thirdButton} onClick={onCloseFn} />}
        <NavElement7 text={'View Profile'} onClick={() => account()} />
        <NavElement7
          text="Change Password"
          className={navigationData.navElement72Props.className}
          onClick={() => changePassword()}
        />
        <NavElement7
          text="Settings"
          className={navigationData.navElement72Props.className}
          onClick={() => {
            window.location.href = '/#/settings';
            onCloseFn();
          }}
        />
        <NavElement8
          onClick={() => {
            queryClient.clear();
            logout();
          }}
        ></NavElement8>
      </Frame5>
      {!isTeacher && (
        <>
          <Frame1410>
            <LocationAgeContainer>
              <FlagBox>
                <FlagIcon src={flagIcon} />
              </FlagBox>
              <div>
                Year {year}, Australia, {state}
              </div>
            </LocationAgeContainer>
            <EditBtn
              onClick={() => {
                setEditStateYear(true);
                onCloseFn();
              }}
            >
              <img src="/img/editSmall.png" />
              <p>Edit</p>
            </EditBtn>
          </Frame1410>
        </>
      )}
    </NavbarDiv>
  );
}

const NavbarDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 20px;
  padding: 16px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  z-index: 1;
`;
const Frame1409 = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 20px;
  padding: 16px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const Frame4 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  flex: 1;
`;

const MaskGroup = styled.img`
  position: relative;
  min-width: 48px;
  height: 48px;
`;

const Frame3 = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  flex: 1;
`;

const Name = styled.div`
  position: relative;
  flex: 1;
  margin-top: -1px;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  color: var(--black);
  font-size: var(--font-size-s);
  letter-spacing: 0;
  line-height: normal;
`;

const Frame27 = styled.div`
  position: relative;
  min-width: 5px;
  height: 8px;
`;

const Frame5 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
  width: 100%;
`;

const Frame1410 = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background: #f2f2f2;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LocationAgeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  overflow-x: hidden;

  div {
    color: #333333;
    font-family: var(--font-family-ibm_plex_sans);
    font-weight: 400;
    font-size: var(--font-size-l);
    line-height: 24px;
  }
`;

const FlagBox = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

const FlagIcon = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const EditBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border: 1px solid var(--light-mode-purple);
  border-radius: 17px;
  color: var(--light-mode-purple);
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  cursor: pointer;

  img {
    width: 10.66px;
    height: 11.07px;
  }
`;

export default Navigation;
