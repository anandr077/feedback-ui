import React, { useState } from 'react';
import TaskCard from '../../TaskCard';
import Cards from '../Cards';
import './NotificationsBar.css';
import {
  acceptFeedbackRequest,
  declineFeedbackRequest,
} from '../../../service';
import {
  NavbarDiv,
  Frame1409,
  MaskGroup,
  Frame15,
  Frame16,
  NotificationHead,
  EmptyBox,
} from './style';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import NotificationSwitch from './NotificationSwitch';
import SnackbarContext from '../../SnackbarContext';
import { useEffect } from 'react';

function NotificationsBar(props) {
  const { showSnackbar } = React.useContext(SnackbarContext);

  const [notificationValue, setNotificationValue] = useState('URL');
  const [totalNotification, setTotalNotification] = useState(0)
  const [totalRequest, setTotalRequest] = useState(0)
  const queryClient = useQueryClient();
  const acceptMutation = useMutation({
    mutationFn: acceptFeedbackRequest,
    onMutate: async (submissionId) => {
      await queryClient.cancelQueries({ queryKey: ['notifications'] });
      const previousNotifications = queryClient.getQueryData(['notifications']);
      const updatedNotifications = previousNotifications?.map((n) => {
        if (n.submissionId === submissionId) {
          return { ...n, type: 'URL' };
        }
        return n;
      });
      queryClient.setQueryData(
        ['notifications'],
        (old) => updatedNotifications
      );

      return { previousNotifications };
    },

    onError: (err, newTodo, context) => {
      showSnackbar('' + err);

      queryClient.setQueryData(
        ['notifications'],
        context.previousNotifications
      );
    },
    onSuccess: (data, variables) => {
      console.log('data', data);
      window.location.href = `#documentsReview/${data.id}`;
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
      queryClient.invalidateQueries({ queryKey: ['assignments'] });
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      queryClient.invalidateQueries({ queryKey: ['document-reviews'] });
    },
  });

  const declineMutation = useMutation({
    mutationFn: declineFeedbackRequest,
    onMutate: async (submissionId) => {
      await queryClient.cancelQueries({ queryKey: ['notifications'] });
      const previousNotifications = queryClient.getQueryData(['notifications']);
      const updatedNotifications = previousNotifications.filter(
        (n) => n.submissionId !== submissionId
      );
      queryClient.setQueryData(
        ['notifications'],
        (old) => updatedNotifications
      );

      return { previousNotifications };
    },

    onError: (err, newTodo, context) => {
      queryClient.setQueryData(
        ['notifications'],
        context.previousNotifications
      );
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
    },
  });

  const notificationBtnValue = (value) => {
    setNotificationValue(value);
  };

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
          onAccept={() => acceptMutation.mutate(notification.submissionId)}
          onDecline={() => declineMutation.mutate(notification.submissionId)}
        />
      );
    }
    return <TaskCard task={notification} small={true} />;
  });

  const filteredNotifications = notificationFrames.filter(
    (notification) => notification.props.task.type === notificationValue
  );

  useEffect(()=>{
    const filteredFeedbackRequestNotifications = notificationFrames.filter(
      (notification) => notification.props.task.type === 'FEEBACK_REQUEST'
    );
  
    const filteredOtherNotifications = notificationFrames.filter(
      (notification) => notification.props.task.type !== 'FEEBACK_REQUEST'
    );

    setTotalNotification(filteredOtherNotifications.length)
    setTotalRequest(filteredFeedbackRequestNotifications.length)

  }, [notificationFrames])


  return (
    <>
      {type == 'small' ? (
        <NavbarDiv>
          <Frame1409>
            <NotificationHead>
              <NotificationSwitch
                notificationBtnValue={notificationBtnValue}
                totalNotification={totalNotification}
                totalRequest={totalRequest}
              />
              <MaskGroup src="/img/close.png" onClick={onCloseFn} />
            </NotificationHead>
            <Frame16 onClick={onCloseFn}>
              {filteredNotifications.length > 0 ? (
                filteredNotifications
              ) : (
                <EmptyBox>
                  {notificationValue === 'URL'
                    ? 'No new notifications'
                    : 'No new requests'}
                </EmptyBox>
              )}
            </Frame16>
          </Frame1409>
        </NavbarDiv>
      ) : (
        <Frame15 onClick={onCloseFn}>
          <NotificationSwitch
            notificationBtnValue={notificationBtnValue}
            totalNotification={totalNotification}
            totalRequest={totalRequest}
          />
          {filteredNotifications.length > 0 ? (
            filteredNotifications
          ) : (
            <EmptyBox>
              {notificationValue === 'URL'
                ? 'No new notifications'
                : 'No new requests'}
            </EmptyBox>
          )}
        </Frame15>
      )}
    </>
  );
}

export default NotificationsBar;
