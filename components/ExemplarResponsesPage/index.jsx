import React, { useEffect, useState } from 'react';
import {
  addToFavouriteList,
  denyModelResponse,
  getModelResponses,
  publishModelResponse,
  removeFromFavouriteList,
} from '../../service.js';
import CompletedRoot from '../Completed/CompletedRoot';
import { groupBy } from 'lodash';
import { dateOnly } from '../../dates.js';
import { useLocation } from 'react-router';
import Loader from '../Loader';
import { arrayFromArrayOfObject } from '../../utils/arrays.js';
import Toast from '../Toast/index.js';
import { toast } from 'react-toastify';
import { useModelResponces } from '../state/hooks.js';

export default function ExemplarResponsesPage(props) {
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

  const {
    data: modelResponcesData,
    isLoadingdata: isLoadingModelResponces,
    setData: setModelResponces,
    resetData,
  } = useModelResponces();

  React.useEffect(() => {
    if (modelResponcesData) {
      
      const createGroup = groupBy(modelResponcesData, (task) =>
        dateOnly(task.reviewedAt)
      );
      setGroups(createGroup);
      setClasses(arrayFromArrayOfObject(modelResponcesData, 'classTitle'));
      setIsLoading(false);
    }
  }, [modelResponcesData]);

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  const handleAddToFavourite = (id) => {
    addToFavouriteList(id).then((result) => {
      setModelResponces((prev) => {
        return prev.map((task) => {
          if (task.id === id) {
            return {
              ...task,
              bookmarkedByStudents: result.bookmarkedByStudents,
            };
          } else {
            return task;
          }
        });
      });
    });
  };

  const handleRemoveFromFavourite = (id) => {
    removeFromFavouriteList(id).then((result) => {
      setModelResponces((prev) => {
        return prev.map((task) => {
          if (task.id === id) {
            return {
              ...task,
              bookmarkedByStudents: result.bookmarkedByStudents,
            };
          } else {
            return task;
          }
        });
      });
    });
  };

  const onAccept = (taskId) => {
    publishModelResponse(taskId).then((res) => {
      if (res.status === 'PUBLISHED') {
        setModelResponces((prev) => {
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
        });
        toast(<Toast message={'Response shared'} link={res.link} />);
      } else {
        return;
      }
    });
  };
  const onDecline = (taskId) => {
    denyModelResponse(taskId).then((res) => {
      if (res.status === 'DENIED') {
        setModelResponces((prev) => {
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
        });
        toast(<Toast message={"Response won't be shared"} link={res.link} />);
      } else {
        return;
      }
    });
  };
  return (
    <CompletedRoot
      title="Exemplars"
      tasks={modelResponcesData}
      groups={groups}
      exemplar={true}
      id={id}
      setPublishActionCompleted={setPublishActionCompleted}
      classes={classes}
      onAccept={onAccept}
      onDecline={onDecline}
      onAddToBookmark={handleAddToFavourite}
      onRemoveFromBookmark={handleRemoveFromFavourite}
    ></CompletedRoot>
  );
}
