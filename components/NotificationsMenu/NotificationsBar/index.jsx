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
  CloseNotification,
  NotificationBody,
  HeadingImage,
  Heading,
} from './style';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import NotificationSwitch from './NotificationSwitch';
import Toast from '../../Toast';
import { toast } from 'react-toastify';
import notificationbing from '../../../static/img/notificationbing.svg';

function NotificationsBar(props) {
  const [notificationValue, setNotificationValue] = useState('URL');
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
      toast(<Toast message={'' + err.message} />);

      queryClient.setQueryData(
        ['notifications'],
        context.previousNotifications
      );
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
      queryClient.refetchQueries({ queryKey: ['assignments'] });
      queryClient.refetchQueries({ queryKey: ['tasks'] });
      queryClient.refetchQueries({ queryKey: ['document-reviews'] });
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
      queryClient.refetchQueries({ queryKey: ['assignments'] }),
        queryClient.refetchQueries({ queryKey: ['tasks'] }),
        queryClient.refetchQueries({ queryKey: ['document-reviews'] });
      window.location.href = `#documentsReview/${data.id}`;
    },
    onSettled: () => {},
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

  const { notifications, type, onCloseFn, loadingNotifications, fixedTop } =
    props;
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
    if (notification.type === 'FEEDBACK_REQUEST') {
      return (
        <TaskCard
          task={notification}
          small={true}
          notification={true}
          onAccept={() => acceptMutation.mutate(notification.submissionId)}
          onDecline={() => declineMutation.mutate(notification.submissionId)}
        />
      );
    }
    return <TaskCard task={notification} small={true} notification={true} />;
  });

  return (
    <>
      {type == 'small' ? (
        <NavbarDiv>
          <Frame1409>
            <NotificationHead>
              <HeadingImage src={notificationbing} />
              <Heading>Notifications</Heading>
              <CloseNotification src="/img/close.png" onClick={onCloseFn} />
            </NotificationHead>
            <Frame16 onClick={onCloseFn}>
              {notificationFrames.length > 0 ? (
                notificationFrames
              ) : (
                <EmptyBox>No new notifications</EmptyBox>
              )}
            </Frame16>
          </Frame1409>
        </NavbarDiv>
      ) : (
        <Frame15 onClick={onCloseFn}>
          <NotificationHead>
            <HeadingImage src={notificationbing} />
            <Heading>Notifications</Heading>
          </NotificationHead>
          <NotificationBody>
            {notificationFrames.length > 0 ? (
              notificationFrames
            ) : (
              <EmptyBox>No new notifications</EmptyBox>
            )}
          </NotificationBody>
        </Frame15>
      )}
    </>
  );
}

export default NotificationsBar;
