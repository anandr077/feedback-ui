import React from "react";
import NavElement42 from "../NavElement42";
import NavElement52 from "../NavElement52";
import NavElement6 from "../NavElement6";
import NavElement7 from "../NavElement7";
import NavElement8 from "../NavElement8";
import styled from "styled-components";
import "./Navigation.css";
import { account, changePassword, getUserName, logout } from "../../../service";
import { Avatar } from "@boringer-avatars/react";

const group1Data = {
  iconHome: "/img/home3-1@2x.png",
};

const navElement42Data = {
  group1Props: group1Data,
};

const navElement71Data = {
  home: "Profile",
};

const navElement72Data = {
  home: "Change Password",
  className: "nav-element-4",
};

const navElement8Data = {
  children: "Logout",
};

function Navigation(props) {
  const name = getUserName();
  const { headerProps, onCloseFn } = props;
  const navigationData = {
    maskGroup: "/img/mask-group-2@2x.png",
    name: "Eleanor Pena",
    iconClose: "/img/close.png",
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
        <NavElement42 button={headerProps.firstButton} />
        <NavElement42 button={headerProps.secondButton} />
        <NavElement42 button={headerProps.thirdButton} />
        <NavElement7 text={"View Profile"} 
        onClick={account()} />
        <NavElement7
          text="Change Password"
          className={navigationData.navElement72Props.className}
          onClick = {changePassword()}
        />
        <NavElement8 onClick={()=>logout()}></NavElement8>
      </Frame5>
    </NavbarDiv>
  );
}

const NavbarDiv = styled.div`
  display: flex;
  width: 100pct;
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
  width: 100pct;
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

export default Navigation;
