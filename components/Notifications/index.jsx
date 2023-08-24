import React from 'react';
import styled from 'styled-components';

function Notifications(props) {
  const { src, onClickFn, showNewNotifications } = props;

  return (
    <Notifications1 onClick={onClickFn}>
      <OverlapGroup>
        <Notificationbing src={src} alt="notificationbing" />
        {createShowNewNotifications(showNewNotifications)}
      </OverlapGroup>
    </Notifications1>
  );

  function createShowNewNotifications(showNewNotifications) {
    if (showNewNotifications) return <Ellipse1></Ellipse1>;
    return <></>;
  }
}

const Notifications1 = styled.div`
  position: relative;
  min-width: 48px;
  height: 48px;
  background-color: var(--blue-chalk-2);
  border-radius: 24px;
  cursor: pointer;
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

const Notifications2 = styled.div`
  position: relative;
  min-width: 48px;
  height: 48px;
  background-color: var(--blue-chalk-2);
  border-radius: 24px;
  cursor: pointer;
`;

const OverlapGroup1 = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
  left: 12px;
`;

const Notificationbing1 = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 12px;
  left: 0;
`;

const Ellipse11 = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  top: 0;
  left: 22px;
  background-color: var(--light-mode-purple);
  border-radius: 7px;
`;

const Notifications3 = styled.div`
  position: relative;
  min-width: 48px;
  height: 48px;
  background-color: var(--blue-chalk-2);
  border-radius: 24px;
  cursor: pointer;
`;

const OverlapGroup2 = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
  left: 12px;
`;

const Notificationbing2 = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 12px;
  left: 0;
`;

const Ellipse12 = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  top: 0;
  left: 22px;
  background-color: var(--light-mode-purple);
  border-radius: 7px;
`;

const Notifications4 = styled.div`
  position: relative;
  min-width: 48px;
  height: 48px;
  background-color: var(--blue-chalk-2);
  border-radius: 24px;
  cursor: pointer;
`;

const OverlapGroup3 = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
  left: 12px;
`;

const Notificationbing3 = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 12px;
  left: 0;
`;

const Ellipse13 = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  top: 0;
  left: 22px;
  background-color: var(--light-mode-purple);
  border-radius: 7px;
`;

const Notifications5 = styled.div`
  position: relative;
  min-width: 48px;
  height: 48px;
  background-color: var(--blue-chalk-2);
  border-radius: 24px;
  cursor: pointer;
`;

const OverlapGroup4 = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
  left: 12px;
`;

const Notificationbing4 = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 12px;
  left: 0;
`;

const Ellipse14 = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  top: 0;
  left: 22px;
  background-color: var(--light-mode-purple);
  border-radius: 7px;
`;

export default Notifications;
