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
  Table,
} from './style';

import Download from '../../static/img/Down.svg';
import DeleteLight from '../../static/img/binLight.svg';
import DownloadLight from '../../static/img/download16purple.svg';
import OpenLight from '../../static/img/16purplearrowupright.svg';
import CompletedIcon from '../../static/img/grayarrowupdown20.svg';
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
      <Table>
        <thead>
          <tr>
            <th class="first-column">Task Name</th>
            <th class="second-column">Class</th>
            <th className='completed-heading'>Completed on <img src={CompletedIcon} /></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {list.map((task, index) => (
            <tr key={index}>
              <td>{task.title}</td>
              <td>{task.classTitle}</td>
              <td>{dateOnly(task.completedAt)}</td>
              <td className='icon-row'>
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
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default TaskHistoryDataComponent;
