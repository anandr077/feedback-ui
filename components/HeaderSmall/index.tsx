import React from "react";
import styled from "styled-components";
import MenuMobile from "../MenuMobile";
import Notifications from "../Notifications";

export default function HeaderSmall() {
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleNotificationClick = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  return (
    <>
      <Frame1350>
        <Frame1349 src="/img/frame-1349@2x.png" />
        <Frame5>
          <Notifications src="/img/notificationbing@2x.png" />
          <Frame51 src="/img/frame-5@2x.png" onClick={handleMenuClick} />
        </Frame5>

        {isMenuOpen && (
          <Popup>
            {" "}
            <MenuMobile />{" "}
          </Popup>
        )}
      </Frame1350>
    </>
  );
}

const Frame1350 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 16px 20px;
  position: relative;
  max-height: 70px;
  align-self: stretch;
  background-color: var(--white);
`;

const Frame1349 = styled.img`
  position: relative;
  align-self: stretch;
  height: 37.48846435546875px;
  margin-left: -1.75px;
`;

const Frame5 = styled.div`
  display: flex;
  align-self: stretch;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  position: absolute;
  right: 20px;
`;

const Frame51 = styled.img`
  position: relative;
  align-self: stretch;
  height: 48px;
  cursor: pointer;
`;

const Popup = styled.div`
  position: absolute;
  right: 10px;
  top: 70px;
  height: 100px;
  cursor: pointer;
  z-index: 1;
  background-color: var(--white);
  rbga(255, 255, 255, 0.5);
  align-self: stretch;
`;
