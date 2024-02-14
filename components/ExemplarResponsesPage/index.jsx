import React, { useEffect, useState } from 'react';
import { denyModelResponse, getModelResponses, publishModelResponse } from '../../service.js';
import CompletedRoot from '../Completed/CompletedRoot';
import { groupBy } from 'lodash';
import { dateOnly } from '../../dates.js';
import { useLocation } from 'react-router-dom';
import Loader from '../Loader';
import { arrayFromArrayOfObject } from '../../utils/arrays.js';
import SnackbarContext from '../SnackbarContext/index.jsx';

export default function ExemplarResponsesPage(props) {
  const { showSnackbar } = React.useContext(SnackbarContext);
  const [exemplarResponses, setExemplarResponses] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [id, setId] = React.useState(null);
  const [classes, setClasses] = React.useState([]);
  const [publishActionCompleted, setPublishActionCompleted] =
    React.useState(false);
  const [groups, setGroups] = useState({});

  const l = useLocation();
  React.useEffect(() => {
    const exemplarResponseId = new URLSearchParams(l.search).get('id');
    setId(exemplarResponseId);
  }, []);
  React.useEffect(() => {
    getModelResponses().then((result) => {
      if (result) {
        setExemplarResponses(result);
        setClasses(arrayFromArrayOfObject(result, 'classTitle'));
        setIsLoading(false);
      }
    });
  }, []);
  React.useEffect(() => {
   
    getModelResponses().then((result) => {
      if (result) {
        setExemplarResponses(result);
        setIsLoading(false);
      }
    });
      
    
  }, []);

  React.useEffect(() => {
    const createGroup = groupBy(exemplarResponses, (task) =>
      dateOnly(task.reviewedAt)
    );
    setGroups(createGroup)
  }, [exemplarResponses]);

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  const onAccept = (taskId) => {
    publishModelResponse(taskId).then((res) => {
      if (res.status === 'PUBLISHED') {
        // setPublishActionCompleted(taskId, 'PUBLISHED', true);
        setExemplarResponses((prev) => {
          return prev.map((task) => {
            if (task.id === taskId) {
              return {
                ...task,
                status: 'PUBLISHED',
              };
            } else {
              return task;
            }
          });
        })
        // onSlideChange();
        showSnackbar('Response shared', res.link);
      } else {
        return;
      }
    });
  }
  const onDecline = (taskId) => {
    denyModelResponse(taskId).then((res) => {
      if (res.status === 'DENIED') {
        setExemplarResponses((prev) => {
          return prev.map((task) => {
            if (task.id === taskId) {
              return {
                ...task,
                status: 'DENIED',
              };
            } else {
              return task;
            }
          });
        })
        // onSlideChange();
        showSnackbar("Response won't be shared", res.link);
      } else {
        return;
      }
    });
  }

  return (
    <CompletedRoot
      title="Exemplars"
      tasks={exemplarResponses}
      groups={groups}
      exemplar={true}
      id={id}
      setPublishActionCompleted={setPublishActionCompleted}
      classes={classes}
      onAccept={onAccept}
      onDecline={onDecline}
    ></CompletedRoot>
  );
}
