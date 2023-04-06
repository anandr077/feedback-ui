import React from "react";
import NavElement from "../NavElement";
import Notifications from "../Notifications";
import Frame4 from "../ReviewsFrame41";
import styled from "styled-components";

function TeacherDashboardHeader22(props) {
  const {
    logo,
    navElement1Props,
    navElement2Props,
    navElement3Props,
    frame4Props,
  } = props;

  return (
    <TeacherDashboardHeader>
      <Logo src={logo} alt="Logo" />
      <Frame5>
        <NavElement
          home3={navElement1Props.home3}
          place={navElement1Props.place}
        />
        <NavElement
          home3={navElement2Props.home3}
          place={navElement2Props.place}
          className={navElement2Props.className}
        />
        <NavElement
          home3={navElement3Props.home3}
          place={navElement3Props.place}
          className={navElement3Props.className}
        />
      </Frame5>
      <Frame51>
        <Notifications />
        <Frame4 maskGroup={frame4Props.maskGroup} />
      </Frame51>
    </TeacherDashboardHeader>
  );
}

const TeacherDashboardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 32px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const Logo = styled.img`
  position: relative;
  min-width: 241.75px;
  height: 43.5px;
  margin-left: -1.75px;
`;

const Frame5 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1;
`;

const Frame51 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: flex-end;
  gap: 28px;
  position: relative;
`;

export default TeacherDashboardHeader22;
