import React from 'react';
import {
  DataContainer,
  DataSubtitle,
  DataTitle,
  DownloadIcon,
  DownloadText,
  IconContainerDown,
  TaskCompiltion,
  TaskCompiltionIcon,
  TaskContainer,
} from './style';

import Download from '../../static/img/Down.svg';
import clock from '../../static/img/clock.svg';
import { dateOnly } from '../../dates';

function TaskHistoryDataComponent({ list, downloadPDF }) {
  console.log('first', list);
  return (
    <>
      {list.map((task, index) => (
        <TaskContainer key={index}>
          <DataContainer>
            <DataTitle>{task.title}</DataTitle>
            <DataSubtitle>Fundamentals of thermal physics</DataSubtitle>
            <TaskCompiltion>
              <TaskCompiltionIcon src={clock} />
              Completed on {dateOnly(task.completedAt)}
            </TaskCompiltion>
          </DataContainer>
          <IconContainerDown onClick={() => downloadPDF(task.id)}>
            <DownloadIcon src={Download} />
            <DownloadText>Download</DownloadText>
          </IconContainerDown>
        </TaskContainer>
      ))}
    </>
  );
}

export default TaskHistoryDataComponent;
