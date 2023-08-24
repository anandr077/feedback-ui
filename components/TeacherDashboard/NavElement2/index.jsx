import React from 'react';
import styled from 'styled-components';
import { IbmplexsansNormalPersianIndigo20px } from '../styledMixins';

function NavElement2(props) {
  const { assignment, home, className } = props;

  return (
    <NavElement className={`nav-element-1 ${className || ''}`}>
      <Group1 className="group-1-1">
        <Assignment className="assignment" src={assignment} alt="Assignment" />
        <Home className="home">{home}</Home>
      </Group1>
    </NavElement>
  );
}

const NavElement = styled.article`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 60px;
  position: relative;
  border-radius: 26.5px;
`;

const Group1 = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  min-width: 150px;
  height: 26px;
  margin-right: -2px;
`;

const Assignment = styled.img`
  margin-top: 1px;
  width: 24px;
  height: 24px;
`;

const Home = styled.div`
  ${IbmplexsansNormalPersianIndigo20px}
  width: 116px;
  height: 26px;
  letter-spacing: 0;
  line-height: normal;
`;

const Group11 = styled.div`
  .nav-element-1.nav-element-2 & {
    min-width: 103px;
  }
`;

const Home1 = styled.div`
  ${IbmplexsansNormalPersianIndigo20px}

  .nav-element-1.nav-element-2  & {
    width: 69px;
  }
`;

const Group12 = styled.div`
  .nav-element-1.nav-element-4 & {
    min-width: 103px;
  }
`;

const Home2 = styled.div`
  ${IbmplexsansNormalPersianIndigo20px}

  .nav-element-1.nav-element-4  & {
    width: 69px;
  }
`;

export default NavElement2;
