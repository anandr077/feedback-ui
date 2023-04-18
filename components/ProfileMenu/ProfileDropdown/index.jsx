import React from "react";
import ProfileDropDownElement from "../ProfileDropDownElement";
import "./ProfileDropdown.css";
import styled from "styled-components";

function ProfileDropdown() {
  const deleteCookies = () => {
    window.location.href = "/jeddle/logout";
  };
  return (
    <>
      <ProfileDropDownElement text="View Profile" link="/jeddle/view-profile" />
      <Line6 src="/icons/line.png" alt="Line 6" />
      <ProfileDropDownElement
        text="Change Password"
        link="/jeddle/update-password"
      />
      <Line6 src="/icons/line.png" alt="Line 6" />
      <ProfileDropDownElement
        text="Logout"
        noIcon={true}
        link="/jeddle/logout"
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
