import React from 'react';
import { getModelResponses } from '../../service.js';
import CompletedRoot from '../Completed/CompletedRoot';
import { groupBy } from 'lodash';
import { dateOnly } from '../../dates.js';
import { useLocation } from 'react-router-dom';
import Loader from '../Loader';
import HeaderSmall from '../HeaderSmall/index.jsx';
import Header from '../Header/index.jsx';
import { completedHeaderProps } from '../../utils/headerProps.js';
import { isSmallScreen } from '../ReactiveRender/index.jsx';

export default function ExemplarResponsesPage(props) {
  const [exemplarResponses, setExemplarResponses] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [id, setId] = React.useState(null);
  const [publishActionCompleted, setPublishActionCompleted] =
    React.useState(false);
  const [smallScreenView, setSmallScreenView] = React.useState(isSmallScreen());

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
  if (isLoading) {
    return (
      <>
        {smallScreenView ? (
          <HeaderSmall headerProps={completedHeaderProps(true)} />
        ) : (
          <Header headerProps={completedHeaderProps(true)} />
        )}
        <Loader />
      </>
    );
  }
  const groups = groupBy(exemplarResponses, (task) =>
    dateOnly(task.reviewedAt)
  );
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
