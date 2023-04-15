import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalWhite20px } from "../styledMixins";

function NavElement2() {
  return (
    <NavElement>
      <Group1>
        <Subject src="/img/subject@2x.png" alt="Subject" />
        <Home>Classes</Home>
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
  background-color: var(--royal-purple);
  border-radius: 26.5px;
`;

const Group1 = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  min-width: 103px;
  height: 26px;
  margin-right: -2px;
`;

const Subject = styled.img`
  margin-top: 1px;
  width: 24px;
  height: 24px;
`;

const Home = styled.div`
  ${IbmplexsansNormalWhite20px}
  width: 69px;
  height: 26px;
  letter-spacing: 0;
  line-height: normal;
`;

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

const Group11 = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  min-width: 103px;
  height: 26px;
  margin-right: -2px;
`;

const Subject1 = styled.img`
  margin-top: 1px;
  width: 24px;
  height: 24px;
`;

const Home1 = styled.div`
  ${IbmplexsansNormalWhite20px}
  width: 69px;
  height: 26px;
  letter-spacing: 0;
  line-height: normal;
`;

export default NavElement2;
