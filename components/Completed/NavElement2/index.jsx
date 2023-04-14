import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalPersianIndigo20px } from "../styledMixins";


function NavElement2(props) {
  const { tasksquare, home, className } = props;

  return (
    <NavElement className={`nav-element-3 ${className || ""}`}>
      <Group1 className="group-1-1">
        {/* <Tasksquare className="tasksquare" src={tasksquare} alt="tasksquare" /> */}
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
  min-width: 85px;
  height: 26px;
  margin-right: -2px;
`;

const Tasksquare = styled.img`
  margin-top: 1px;
  width: 24px;
  height: 24px;
`;

const Home = styled.div`
  ${IbmplexsansNormalPersianIndigo20px}
  width: 51px;
  height: 26px;
  letter-spacing: 0;
  line-height: normal;
`;

const Group11 = styled.div`
  .nav-element-3.nav-element-4 & {
    min-width: 133px;
  }
`;

const Home1 = styled.div`
  ${IbmplexsansNormalPersianIndigo20px}

  .nav-element-3.nav-element-4  & {
    width: 99px;
  }
`;

const Group12 = styled.div`
  .nav-element-3.nav-element-5 & {
    min-width: 88px;
  }
`;

const Place = styled.div`
  ${IbmplexsansNormalPersianIndigo20px}

  .nav-element-3.nav-element-5  & {
    width: 54px;
  }
`;

const Group13 = styled.div`
  .nav-element-3.nav-element-6 & {
    min-width: 103px;
  }
`;

const Home2 = styled.div`
  ${IbmplexsansNormalPersianIndigo20px}

  .nav-element-3.nav-element-6  & {
    width: 69px;
  }
`;

const Group14 = styled.div`
  .nav-element-3.nav-element-7 & {
    min-width: 88px;
  }
`;

const Place1 = styled.div`
  ${IbmplexsansNormalPersianIndigo20px}

  .nav-element-3.nav-element-7  & {
    width: 54px;
  }
`;

const Group15 = styled.div`
  .nav-element-3.nav-element-8 & {
    min-width: 103px;
  }
`;

const Home3 = styled.div`
  ${IbmplexsansNormalPersianIndigo20px}

  .nav-element-3.nav-element-8  & {
    width: 69px;
  }
`;

export default NavElement2;
