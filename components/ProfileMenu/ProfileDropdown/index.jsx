import React from "react";
import ProfileDropDownElement from "../ProfileDropDownElement";
import "./ProfileDropdown.css";
import styled from "styled-components";
import { account, changePassword, logout } from "../../../service";

function ProfileDropdown() {
  return (
    <>
      <ProfileDropDownElement text="View Profile" onClick={() => account()} />
      <Line6 src="/icons/line.png" alt="Line 6" />
      <ProfileDropDownElement
        text="Change Password"
        onClick={() => changePassword()}
      />
      <Line6 src="/icons/line.png" alt="Line 6" />
      <ProfileDropDownElement
        text="Logout"
        noIcon={true}
        onClick={() => {
          logout();
        }}
      />
    </>
  );
}

const Line6 = styled.img`
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 1px;
  object-fit: cover;
`;

export default ProfileDropdown;
