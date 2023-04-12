import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalWhite20px } from "../styledMixins";


function NavElement() {
  return (
    <NavElement1>
      <Group1>
        <IconHome src="/img/home3@2x.png" alt="icon-home" />
        <Place>Home</Place>
      </Group1>
    </NavElement1>
  );
}

const NavElement1 = styled.article`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 60px;
  position: relative;
  background-color: var(--royal-purple);
  border-radius: 26.5px;
`;

const Group1 = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  min-width: 88px;
  height: 26px;
  margin-right: -2px;
`;

const IconHome = styled.img`
  margin-top: 1px;
  width: 24px;
  height: 24px;
`;

const Place = styled.div`
  ${IbmplexsansNormalWhite20px}
  width: 54px;
  height: 26px;
  letter-spacing: 0;
  line-height: normal;
`;

const NavElement2 = styled.article`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 60px;
  position: relative;
  background-color: var(--royal-purple);
  border-radius: 26.5px;
`;

const Group11 = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  min-width: 88px;
  height: 26px;
  margin-right: -2px;
`;

const IconHome1 = styled.img`
  margin-top: 1px;
  width: 24px;
  height: 24px;
`;

const Place1 = styled.div`
  ${IbmplexsansNormalWhite20px}
  width: 54px;
  height: 26px;
  letter-spacing: 0;
  line-height: normal;
`;

export default NavElement;
