import React from "react";
import "./Frame1404.css";

function Frame1404(props) {
  const { text, link } = props;
  const redirectTo = () => {
    console.log("redirecting to " + link);
    window.location.href = link;
  };
  return (
    <div className="frame-140" onClick={redirectTo}>
      <div className="view-profile ibmplexsans-normal-black-16px">{text}</div>
      <img
        className="exportsquare"
        src="/icons/redirectIcon.png"
        alt="exportsquare"
      />
    </div>
  );
}

export default Frame1404;
