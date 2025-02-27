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
  TableHeader,
  TableRowHeader,
  TableHeaderCell,
  TableRow,
  TableCell,
  ButtonContainer,
  GlobalStyle
} from './style';

import { dateOnly } from '../../dates';
import StyledButton from '../../components2/StyledButton';
import WhiteArrowRight from '../../static/img/Arrow-right-purple-24.svg';
import arrowRight from '../../static/img/arrowright.svg';

function TaskHistoryDataComponent({ list }) {
  const [clickHighLightRow, setClickHighlightRow] = useState(null);

  const handleClick = (index) => {
    setClickHighlightRow(index);
  };

  return (
    <>
      <GlobalStyle />
      <Table>
        <TableHeader>
          <TableRowHeader>
            <TableHeaderCell style={{ width: '40%' }}>Task Name</TableHeaderCell>
            <TableHeaderCell style={{ width: '30%' }}>Class</TableHeaderCell>
            <TableHeaderCell style={{ width: '30%' }}>Completed on</TableHeaderCell>
          </TableRowHeader>
        </TableHeader>
        <tbody>
          {list.map((task, index) => (
            <TableRow
              key={index}
              onClick={() => handleClick(index)}
              highlight={clickHighLightRow === index}
            >
              <TableCell>
                <div>{task.title}</div>
                {task.link && (
                  <ButtonContainer>
                    <StyledButton
                      URL={task.link}
                      Text="View"
                      Icon={WhiteArrowRight}
                      ColoredIcon={arrowRight}
                      className="no-padding guDwQT"
                    />
                  </ButtonContainer>
                )}
              </TableCell>
              <TableCell>{task.classTitle}</TableCell>
              <TableCell>{dateOnly(task.completedAt)}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default TaskHistoryDataComponent;
