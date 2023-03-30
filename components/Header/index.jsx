import React from "react";
import styled from "styled-components";
import NavElement from "../NavElement";
import NavElement2 from "../NavElement2";
import Notifications from "../Notifications";
import Frame4 from "../Frame4";

export default function Header() {
  return (
    <Frame1344>
      <Frame1343 src="/img/frame-1343@2x.png" alt="Frame 1343" />
      <Frame5>
        <NavElement home3="/img/home3@2x.png" place="Home" />
        <NavElement2 />
        <NavElement
          home3="/img/clipboardtick@2x.png"
          place="Submissions"
          className="nav-element-1"
        />
      </Frame5>
      <Frame51>
        <Notifications src="/img/notificationbing-3@2x.png" />
        <Frame4 maskGroup="/img/mask-group-1@2x.png" />
      </Frame51>
    </Frame1344>
  );
}

const Frame1344 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 30px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const Frame1343 = styled.img`
  position: relative;
  min-width: 241.7498779296875px;
  height: 43.499969482421875px;
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
