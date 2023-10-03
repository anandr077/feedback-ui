import React from 'react';
import TaskCard from '../../TaskCard';
import Cards from '../Cards';
import './NotificationsBar.css';
import {
  acceptFeedbackRequest,
  declineFeedbackRequest,
} from '../../../service';
import { NavbarDiv, Frame1409, MaskGroup, Frame15, Frame16 } from './style';
import { useQueryClient } from 'react-query';

function NotificationsBar(props) {
  const queryClient = useQueryClient();

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

  const notificationFrames = notifications.map((notification) => {
    if (notification.type === 'FEEBACK_REQUEST') {
      return (
        <TaskCard
          task={notification}
          small={true}
          onAccept={() =>
            acceptFeedbackRequest(notification.submissionId).then((res) => {
              queryClient.invalidateQueries(['notifications']);

              window.location.href = `#documents/${notification.submissionId}`;
            })
          }
          onDecline={() =>
            declineFeedbackRequest(notification.submissionId).then((res) => {
              queryClient.invalidateQueries(['notifications']);

              // window.location.reload();
            })
          }
        />
      );
    }
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

export default NotificationsBar;
