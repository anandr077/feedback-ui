import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalWhite20px } from "../styledMixins";


function NavElement(props) {
  const { className } = props;

  return (
    <NavElement1 className={`nav-element ${className || ""}`}>
      <Group1 className="group-1">
        <IconHome className="icon-home" src="/img/home3@2x.png" alt="icon-home" />
        <Place className="place">Home</Place>
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

const Group11 = styled.div`
  .nav-element.nav-element-1 & {
    min-width: 150px;
  }
`;

const Home = styled.div`
  ${IbmplexsansNormalWhite20px}

  .nav-element.nav-element-1  & {
    width: 116px;
  }
`;

const Group12 = styled.div`
  .nav-element.nav-element-2 & {
    min-width: 150px;
  }
`;

const Home1 = styled.div`
  ${IbmplexsansNormalWhite20px}

  .nav-element.nav-element-2  & {
    width: 116px;
  }
`;

export default NavElement;
