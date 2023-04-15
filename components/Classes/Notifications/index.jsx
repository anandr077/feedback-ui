import React from "react";
import styled from "styled-components";

function Notifications(props) {
  const { src, className } = props;

  return (
    <Notifications1 className={`notifications ${className || ""}`}>
      <OverlapGroup className="overlap-group">
        <Notificationbing
          className="notificationbing"
          src={src}
          alt="notificationbing"
        />
        <Ellipse1 className="ellipse-1"></Ellipse1>
      </OverlapGroup>
    </Notifications1>
  );
}

const Notifications1 = styled.div`
  position: relative;
  min-width: 48px;
  height: 48px;
  background-color: var(--blue-chalk-2);
  border-radius: 24px;

  &.notifications.notifications-1 {
    cursor: pointer;
  }

  &.notifications.notifications-3 {
    cursor: pointer;
  }
`;

const OverlapGroup = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
  left: 12px;
`;

const Notificationbing = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 12px;
  left: 0;
`;

const Ellipse1 = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  top: 0;
  left: 22px;
  background-color: var(--light-mode-purple);
  border-radius: 7px;
`;

export default Notifications;
