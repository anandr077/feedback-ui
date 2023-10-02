import React from 'react';
import Cards from '../Cards';
import styled from 'styled-components';
import './NotificationsBar.css';
import Loader from '../../Loader';
import TaskCard from '../../TaskCard';
function NotificationsBar(props) {
  const { notifications, type, onCloseFn, loadingNotifications } = props;
  if (!notifications || notifications?.length === 0) {
    return (
      <>
        {type == 'small' ? (
          <NavbarDiv>
            <Frame1409>
              <Frame15>
                {loadingNotifications ? (
                  <div>Loading...</div>
                ) : (
                  <Cards emptyCard={true} />
                )}
              </Frame15>
              <MaskGroup src="/img/close.png" onClick={onCloseFn} />
            </Frame1409>
          </NavbarDiv>
        ) : (
          <Frame16>
            {loadingNotifications ? (
              <div>Loading...</div>
            ) : (
              <Frame15>
                <Cards emptyCard={true} />
              </Frame15>
            )}
          </Frame16>
        )}
      </>
    );
  }

  const notificationFrames = notifications?.map((notification) => {
    return <TaskCard task={notification} small={true} />;
  });
  return (
    <>
      {type == 'small' ? (
        <NavbarDiv>
          <Frame1409>
            <Frame16>{notificationFrames}</Frame16>
            <MaskGroup src="/img/close.png" onClick={onCloseFn} />
          </Frame1409>
        </NavbarDiv>
      ) : (
        <Frame15>{notificationFrames}</Frame15>
      )}
    </>
  );
}

const NavbarDiv = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: flex-start;
  gap: 20px;
  padding: 16px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  z-index: 1;
`;
const Frame1409 = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  gap: 20px;
  padding: 16px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;
const MaskGroup = styled.img`
  position: sticky;
  top: 0;
  right: 0;
  height: 48px;
  width: 48px;
`;

const Frame4 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  flex: 1;
`;

const Frame15 = styled.div`
  display: flex;
  width: 300px;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  position: relative;
  align-self: stretch;
  z-index: 10;
  height: 100%;
  flex-direction: column;
  overflow: visible;
`;
const Frame16 = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  align-self: stretch;
  z-index: 10;
  gap: 10px;
  flex-direction: column;
`;

export default NotificationsBar;
