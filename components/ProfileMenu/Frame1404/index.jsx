import React from "react";
import "./Frame1404.css";

function Frame1404(props) {
  const { viewProfile } = props;

  return (
    <div className="frame-140">
      <div className="view-profile ibmplexsans-normal-black-16px">
        {viewProfile}
      </div>
      <img
        className="exportsquare"
        src="/img/exportsquare@2x.png"
        alt="exportsquare"
      />
    </div>
  );
}

export default Frame1404;
