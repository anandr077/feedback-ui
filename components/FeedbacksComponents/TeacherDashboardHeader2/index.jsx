import React from 'react';
import Frame5 from '../ReviewsFrame5';
import Notifications from '../Notifications';
import Frame4 from '../ReviewsFrame41';
import styled from 'styled-components';

function TeacherDashboardHeader2(props) {
  const { logo, className, frame5Props, frame4Props } = props;

  return (
    <TeacherDashboardHeader
      className={`teacher-dashboard-header-1 ${className || ''}`}
    >
      <Logo className="logo-1" src={logo} alt="Logo" />
      <Frame5
        navElement1Props={frame5Props.navElement1Props}
        navElement2Props={frame5Props.navElement2Props}
        navElement3Props={frame5Props.navElement3Props}
      />
      <Frame51 className="frame-5-6">
        <Notifications />
        <Frame4
          maskGroup={frame4Props.maskGroup}
          className={frame4Props.className}
        />
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

  &.teacher-dashboard-header-1.teacher-dashboard-header-2 {
    width: 1920px;
    height: 80px;
    align-self: unset;
  }
`;

const Logo = styled.img`
  position: relative;
  min-width: 241.75px;
  height: 43.5px;
  margin-left: -1.75px;
`;

const Frame51 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: flex-end;
  gap: 28px;
  position: relative;
`;

export default TeacherDashboardHeader2;
