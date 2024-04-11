import React from 'react';
import {
  DataContainer,
  DataSubtitle,
  DataTitle,
  DeleteText,
  DownloadIcon,
  DownloadIconColor,
  DownloadText,
  IconContainerDown,
  TaskCompiltion,
  TaskCompiltionIcon,
  TaskContainer,
  TaskIconContainer,
  TaskIconsContainer,
} from './style';

import Download from '../../static/img/Down.svg';
import DeleteLight from '../../static/img/binLight.svg';
import DownloadLight from '../../static/img/downloadLight.svg';
import OpenLight from '../../static/img/openLight.svg';
import PreviewLight from '../../static/img/previewLight.svg';
import PreviewColor from '../../static/img/previewColor.svg';
import OpenColor from '../../static/img/openColor.svg';
import BinRed from '../../static/img/binRed.svg';
import clock from '../../static/img/clock.svg';
import { dateOnly } from '../../dates';

function TaskHistoryDataComponent({ list, downloadPDF }) {
  const redirectFunction = (url) => {
    window.location.href = url;
  };
  return (
    <>
      {list.map((task, index) => (
        <TaskContainer key={index}>
          <DataContainer>
            <DataTitle>{task.title}</DataTitle>
            <DataSubtitle>{task.classTitle}</DataSubtitle>
            <TaskCompiltion>
              <TaskCompiltionIcon src={clock} />
              Completed on {dateOnly(task.completedAt)}
            </TaskCompiltion>
          </DataContainer>
          <TaskIconsContainer>
            <TaskIconContainer>
              <DownloadIcon src={PreviewLight} />
              <DownloadIconColor src={PreviewColor} />
              <DownloadText>Preview</DownloadText>
            </TaskIconContainer>
            <TaskIconContainer onClick={() => redirectFunction(task.link)}>
              <DownloadIcon src={OpenLight} />
              <DownloadIconColor src={OpenColor} />
              <DownloadText>Open</DownloadText>
            </TaskIconContainer>
            <TaskIconContainer onClick={() => downloadPDF(task.id)}>
              <DownloadIcon src={DownloadLight} />
              <DownloadIconColor src={Download} />
              <DownloadText>Download</DownloadText>
            </TaskIconContainer>
            <TaskIconContainer>
              <DownloadIcon src={DeleteLight} />
              <DownloadIconColor src={BinRed} />
              <DeleteText>Delete</DeleteText>
            </TaskIconContainer>
          </TaskIconsContainer>
          {/* <IconContainerDown onClick={() => downloadPDF(task.id)}>
            <DownloadIcon src={Download} />
            
          </IconContainerDown> */}
        </TaskContainer>
      ))}
    </>
  );
}

export default TaskHistoryDataComponent;
