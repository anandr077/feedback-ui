import React from 'react';
import TaskCard from '../../TaskCard';
import Cards from '../Cards';
import './NotificationsBar.css';
import {
  acceptFeedbackRequest,
  declineFeedbackRequest,
} from '../../../service';
import { NavbarDiv, Frame1409, MaskGroup, Frame15, Frame16 } from './style';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function NotificationsBar(props) {
  const queryClient = useQueryClient();
  const acceptMutation = useMutation({
    mutationFn: acceptFeedbackRequest,
    onMutate: async (submissionId) => {
      await queryClient.cancelQueries({ queryKey: ['notifications'] });
      const previousNotifications = queryClient.getQueryData(['notifications']);
      const updatedNotifications = previousNotifications.map((n) => {
        if (n.submissionId === submissionId) {
          return { ...n, type: 'URL' };
        }
        return n;
      });
      queryClient.setQueryData(['notifications'], (old) => updatedNotifications);

      return { previousNotifications };
    },

    onError: (err, newTodo, context) => {
      queryClient.setQueryData(
        ['notifications'],
        context.previousNotifications
      );
    },
    onSuccess: (data, variables) => {
      window.location.href = `#documents/${data.id}`;
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
      const updatedNotifications = previousNotifications.filter((n) => n.submissionId !== submissionId);
      queryClient.setQueryData(['notifications'], (old) => updatedNotifications);

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
            acceptMutation.mutate(notification.submissionId)
          }
          onDecline={() =>
            declineMutation.mutate(notification.submissionId)
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
