import React from 'react'
import TaskCardContainer from '../../TaskCardContainer'
import {
    ExemplarsContainer,
    ExemplarsTitle,
    Tasks,
    Crown,
    Line,
    TaskWrapper
  } from './ExemplarsStyle';

const Exemplar = ({modelResponses, setPublishActionCompleted}) => {
  return (
    <ExemplarsContainer>
        <ExemplarsTitle>
            <Crown src="/icons/exemplary_response.png" alt="crown" />
            <Tasks>Exemplars</Tasks>
        </ExemplarsTitle>
        <Line src="/img/line-17-6.png" alt="Line 16" />
        <TaskWrapper>
            <TaskCardContainer allTasks={modelResponses} exemplar={true} setPublishActionCompleted={setPublishActionCompleted} />
        </TaskWrapper>
    </ExemplarsContainer>
  )
}

export default Exemplar