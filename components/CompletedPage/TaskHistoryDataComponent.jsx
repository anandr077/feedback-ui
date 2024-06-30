import React, { useState } from 'react';
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

import DownloadLight from '../../static/img/download16purple.svg';
import { dateOnly } from '../../dates';
import { Tooltip } from '@mui/material';
import { getUserRole } from '../../userLocalDetails';

function TaskHistoryDataComponent({ list, downloadPDF }) {
  const [clickHighLightRow, setClickHighlightRow] = useState(null);
  const isTeacher = getUserRole() === 'TEACHER';

  const handleClick = (index) => {
    setClickHighlightRow(index);
  };

  const handleDoubleClick = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th class="first-column">Task Name</th>
            <th class="second-column">Class</th>
            <th className="completed-heading">Completed on</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {list.map((task, index) => (
            <tr
              key={index}
              style={{
                backgroundColor:
                  clickHighLightRow === index
                    ? 'rgba(242, 241, 243, 0.5)'
                    : 'transparent',
              }}
              onClick={() => handleClick(index)}
              onDoubleClick={() => handleDoubleClick(task.link)}
            >
              <td>{task.title}</td>
              {isTeacher ? (
                <td>
                  {task.classIds.map((cls, idx) => {
                    return (
                      <span key={idx}>
                        {'Class' + cls}
                        {idx < task.classIds.length - 1 && ', '}
                      </span>
                    );
                  })}
                </td>
              ) : (
                <td>{task.classTitle}</td>
              )}
              <td>{dateOnly(task.dueAt)}</td>
              <td>
                <div style={{ display: 'flex' }}>
                  <TaskIconContainer onClick={() => downloadPDF(task.id)}>
                    <Tooltip
                      title={'Download'}
                      placement={'top'}
                      onClick={() => downloadPDF(task.id)}
                    >
                      <DownloadIcon src={DownloadLight} />
                    </Tooltip>
                  </TaskIconContainer>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default TaskHistoryDataComponent;
