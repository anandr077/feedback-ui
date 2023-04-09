import React from "react";
import Frame1404 from "../Frame1404";
import "./ProfileDropdown.css";

function ProfileDropdown() {
  return (
    <div className="profile-dropdown screen">
      <Frame1404 viewProfile="View Profile" />
      <img className="line" src={"/img/line-29@2x.png"} alt="Line 29" />
      <Frame1404 viewProfile="Change Password" />
      <img className="line" src={"/img/line-29@2x.png"} alt="Line 30" />
      <div className="frame-1403">
        <div className="logout ibmplexsans-normal-black-16px">"Logout"</div>
      </div>
    </div>
  );
}

export default ProfileDropdown;
