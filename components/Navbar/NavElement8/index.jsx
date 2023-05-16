import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalPersianIndigo20px } from "../styledMixins";

function NavElement8({ onClick }) {
  return (
    <NavElement onClick={onClick}>
      <Group1>
        <Home>Logout</Home>
      </Group1>
    </NavElement>
  );
}

const NavElement = styled.article`
  position: relative;
  display: flex;
  align-self: stretch;

  height: 54px;
  border-radius: 26.5px;
`;

const Group1 = styled.div`
  margin-top: 14px;
  width: 64px;
  margin-left: 16px;
  display: flex;
`;

const Home = styled.div`
  ${IbmplexsansNormalPersianIndigo20px}
  width: 62px;
  height: 26px;
  letter-spacing: 0;
  line-height: normal;
`;

export default NavElement8;
