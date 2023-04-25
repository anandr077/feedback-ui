import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalPersianIndigo20px } from "../styledMixins";

function NavElement7(props) {
  const { text, className, link, onClick } = props;
  const redirectTo = () => {
    if (onClick) {
      onClick();
      return;
    }
    window.location.href = link;
  };

  return (
    <NavElement className={`nav-element-3 ${className || ""}`}>
      <Group1 className="group-1-3">
        <Home className="home-2">{text}</Home>
        <Exportsquare
          onClick={redirectTo}
          className="exportsquare"
          src="/icons/redirectIcon.png"
          alt="exportsquare"
        />
      </Group1>
    </NavElement>
  );
}

const NavElement = styled.article`
  position: relative;
  display: flex;
  align-self: stretch;
  min-width: 330px;
  height: 54px;
  border-radius: 26.5px;
  width: 100%;
`;

const Group1 = styled.div`
  margin-top: 14px;
  width: 300px;
  margin-left: 16px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Home = styled.div`
  ${IbmplexsansNormalPersianIndigo20px}
  width: 300px;
  height: 26px;
  letter-spacing: 0;
  line-height: normal;
`;

const Exportsquare = styled.img`
  margin-top: 1px;
  width: 24px;
  height: 24px;
  margin-right: 2px;
`;

const Home1 = styled.div`
  ${IbmplexsansNormalPersianIndigo20px}

  .nav-element-3.nav-element-4  & {
    width: 160px;
  }
`;

const Exportsquare1 = styled.img`
  .nav-element-3.nav-element-4 & {
    margin-top: 1px;
    height: 23.999969482421875px;
  }
`;

export default NavElement7;
