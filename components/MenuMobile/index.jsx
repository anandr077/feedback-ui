import React from "react";

function MenuMobile() {
  return (
    <div className="container-center-horizontal">
      <div className="navigationscreen">
        <div className="overlap-group">
          <div className="frame-4">
            <img className="mask-group" src="mask-group.png" alt="Mask group" />
            <div className="frame-3">
              <div className="nameibmplexsans-normal-black-16px">
                Eleanor Pena
              </div>
              <div className="frame-27"></div>
            </div>
          </div>
          <img className="icon-close" src="frame-5.png" alt="icon-close" />
        </div>
        <div className="frame-5">
          <NavElement iconHome="home3.png" place="Home" />
          <NavElement2 tasksquare="tasksquare.png" home="Tasks" />
          <NavElement2
            tasksquare="clipboardtick.png"
            home="Submissions"
            className="nav-element-1"
          />
          <NavElement3 home="Profile" />
          <NavElement3 home="Change Password" className="nav-element-2" />
        </div>
      </div>
    </div>
  );
}

export default MenuMobile;

function NavElement(props) {
  const { iconHome, place } = props;

  return (
    <article className="nav-element">
      <div className="group-1">
        <img className="icon-home" src={iconHome} alt="icon-home" />
        <div className="placeibmplexsans-normal-white-20px">{place}</div>
      </div>
    </article>
  );
}

function NavElement2(props) {
  const { tasksquare, home, className } = props;

  return (
    <article className={`nav-element-1-1 ${className || ""}`}>
      <div className="group-1-1">
        <img className="tasksquare" src={tasksquare} alt="tasksquare" />
        <div className="homeibmplexsans-normal-persian-indigo-20px">{home}</div>
      </div>
    </article>
  );
}

function NavElement3(props) {
  const { home, className } = props;

  return (
    <article className={`nav-element-2-1 ${className || ""}`}>
      <div className="group-1-2">
        <div className="home-1ibmplexsans-normal-persian-indigo-20px">
          {home}
        </div>
        <img
          className="exportsquare"
          src="exportsquare.png"
          alt="exportsquare"
        />
      </div>
    </article>
  );
}