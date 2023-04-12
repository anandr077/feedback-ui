import React from "react";
import NavElement from "../NavElement";
import NavElement2 from "../NavElement2";
import Notifications from "../Notifications";
import Frame4 from "../Frame4";
import styled from "styled-components";


function TeacherDashboardHeader(props) {
  const { navElement21Props, navElement22Props } = props;

  return (
    <TeacherDashboardHeader1>
      <Logo src="/img/logo@2x.png" alt="Logo" />
      <Frame5>
        <NavElement />
        <NavElement2 assignment={navElement21Props.assignment} home={navElement21Props.home} />
        <NavElement2
          assignment={navElement22Props.assignment}
          home={navElement22Props.home}
          className={navElement22Props.className}
        />
      </Frame5>
      <Frame51>
        <Notifications />
        <Frame4 />
      </Frame51>
    </TeacherDashboardHeader1>
  );
}

const TeacherDashboardHeader1 = styled.div`
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

const TeacherDashboardHeader2 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 32px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const Logo1 = styled.img`
  position: relative;
  min-width: 241.75px;
  height: 43.5px;
  margin-left: -1.75px;
`;

const Frame52 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1;
`;

const Frame53 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: flex-end;
  gap: 28px;
  position: relative;
`;

export default TeacherDashboardHeader;
