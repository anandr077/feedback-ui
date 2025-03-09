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
  GlobalStyle,
} from './style';

import { dateOnly } from '../../dates';
import StyledButton from '../../components2/StyledButton';
import WhiteArrowRight from '../../static/img/Arrow-right-purple-24.svg';
import arrowRight from '../../static/img/arrowright.svg';
import ProgressBar from '../ProgressBar';

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
            <TableHeaderCell style={{ width: '20%' }}>
              Task Name
            </TableHeaderCell>
            <TableHeaderCell style={{ width: '20%' }}>Class</TableHeaderCell>
            <TableHeaderCell style={{ width: '20%' }}>
              Completed on
            </TableHeaderCell>
            <TableHeaderCell style={{ width: '35%' }}>
              Submissions
            </TableHeaderCell>
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
              <TableCell>
                <div >
                  <ProgressBar
                    title={'Submissions'}
                    isPercentage={false}
                    count={task.submissionCount}
                    total={task.expectedSubmissions}
                  />
                </div>
                <div >
                  <ProgressBar
                    title={'Reviewed'}
                    isPercentage={false}
                    count={task.reviewCount}
                    total={task.submissionCount}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default TaskHistoryDataComponent;
