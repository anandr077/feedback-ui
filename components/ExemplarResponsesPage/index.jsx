import React, { useEffect, useState } from 'react';
import { getModelResponses } from '../../service.js';
import CompletedRoot from '../Completed/CompletedRoot';
import { groupBy } from 'lodash';
import { dateOnly } from '../../dates.js';
import { useLocation } from 'react-router-dom';
import Loader from '../Loader';

export default function ExemplarResponsesPage(props) {
  const [exemplarResponses, setExemplarResponses] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [id, setId] = React.useState(null);
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
        setIsLoading(false);
      }
    });
  }, []);
  React.useEffect(() => {
    if (publishActionCompleted) {
      getModelResponses().then((result) => {
        if (result) {
          setExemplarResponses(result);
          setIsLoading(false);
        }
      });
      setPublishActionCompleted(false);
    }
  }, [publishActionCompleted]);

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

  return (
    <CompletedRoot
      title="Exemplars"
      tasks={exemplarResponses}
      groups={groups}
      exemplar={true}
      id={id}
      setPublishActionCompleted={setPublishActionCompleted}
    ></CompletedRoot>
  );
}
