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
import { useLocation } from 'react-router-dom';
import Loader from '../Loader';
import { arrayFromArrayOfObject } from '../../utils/arrays.js';
import Toast from '../Toast/index.js';
import { toast } from 'react-toastify';

export default function ExemplarResponsesPage(props) {
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
    const createGroup = groupBy(exemplarResponses, (task) =>
      dateOnly(task.reviewedAt)
    );
    setGroups(createGroup);
  }, [exemplarResponses]);

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  const handleAddToFavourite = (id) => {
    addToFavouriteList(id).then((result) => {
      setExemplarResponses((prev) => {
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
      setExemplarResponses((prev) => {
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
        });
        // onSlideChange();
        toast(<Toast message={'Response shared'} link={res.link} />);
      } else {
        return;
      }
    });
  };
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
        });
        // onSlideChange();
        toast(<Toast message={"Response won't be shared"} link={res.link} />);
      } else {
        return;
      }
    });
  };

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
      onAddToBookmark={handleAddToFavourite}
      onRemoveFromBookmark={handleRemoveFromFavourite}
    ></CompletedRoot>
  );
}
