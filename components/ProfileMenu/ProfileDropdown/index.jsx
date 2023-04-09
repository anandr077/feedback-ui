import React from "react";
import Frame1404 from "../Frame1404";
import "./ProfileDropdown.css";
import styled from "styled-components";

function ProfileDropdown() {
  return (
    <>
      <Frame1404 viewProfile="View Profile" />
      <Line6 src="/icons/line.png" alt="Line 6" />
      <Frame1404 viewProfile="Change Password" />
      <Line6 src="/icons/line.png" alt="Line 6" />
      <div className="frame-1403">
        <div className="logout ibmplexsans-normal-black-16px">Logout</div>
      </div>
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
