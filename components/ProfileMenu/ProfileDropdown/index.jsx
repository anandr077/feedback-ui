import React from "react";
import Frame1404 from "../Frame1404";
import "./ProfileDropdown.css";
import styled from "styled-components";

function ProfileDropdown() {
  const deleteCookies = () => {
    // this code deletes all cookies in the browser lets see if we want to do this
    //   var cookies = document.cookie.split(";");
    // for (var i = 0; i < cookies.length; i++) {
    //   var cookie = cookies[i];
    //   var eqPos = cookie.indexOf("=");
    //   var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    //   document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    // }
    window.location.href = "/jeddle/logout";
  };
  return (
    <>
      <Frame1404 text="View Profile" link="/jeddle/view-profile" />
      <Line6 src="/icons/line.png" alt="Line 6" />
      <Frame1404 text="Change Password" link="/jeddle/update-password" />
      <Line6 src="/icons/line.png" alt="Line 6" />
      <div className="frame-1403">
        <div
          className="logout ibmplexsans-normal-black-16px"
          onClick={deleteCookies}
        >
          Logout
        </div>
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
