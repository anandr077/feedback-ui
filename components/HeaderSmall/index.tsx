import React from "react";
import styled from "styled-components";
import Notifications from "../Notifications";

export default function HeaderSmall() {
  return (
    <Frame1350>
      <Frame1349 src="/img/frame-1349-1.png" />
      <Frame5>
        <Notifications src="/img/notificationbing@2x.png" />
        <Frame51 src="/img/frame-5@2x.png" />
      </Frame5>
    </Frame1350>
  );
}

const Frame1350 = styled.div`
  display: flex;
  align-items: space-between;
  gap: 20px;
  padding: 16px 20px;
  position: relative;
  width: 100%;
  background-color: var(--white);
`;

const Frame1349 = styled.img`
  position: relative;
  min-width: 857.75px;
  height: 37.48846435546875px;
  margin-left: -1.75px;
`;

const Frame5 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  position: absolute;
  right: 20px;
`;

const Frame51 = styled.img`
  position: relative;
  min-width: 48px;
  height: 48px;
  cursor: pointer;
`;
