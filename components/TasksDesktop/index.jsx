import React from 'react';
import TaskCardContainer from '../TaskCardContainer';
import TaskFrame1353 from '../TaskFrame1353';
import {
  Frame1354,
  Frame1358,
  FixedWidthDiv,
  Frame1359,
  Frame1360,
  Frame1361,
  SubtitleCon,
  TaskScreenMainContainer,
  TitleAndFilterContainer,
  TitleAndSubtitleContainer,
} from './style.js';

import ImprovedSecondarySideBar from '../ImprovedSecondarySideBar/index.jsx';

function TasksDesktop(props) {
  const {
    menuItems,
    filterTasks,
    assignmedTasks,
    inProgressTasks,
    inReviewTasks,
    frame19Props,
    headingFilter,
    arrowright,
    FilterSortAndCal,
    tasksSelected,
    isShowMenu,
    setShowMenu,
    MyCalendarFile,
  } = props;
  return (
    <TaskScreenMainContainer>
      <ImprovedSecondarySideBar
        isShowMenu={isShowMenu}
        setShowMenu={setShowMenu}
      />
      <Frame1361>
        <TitleAndFilterContainer>
          <>{FilterSortAndCal}</>
        </TitleAndFilterContainer>
        <Frame1360>
          {tasksSelected ? (
            <FixedWidthDiv>
              <Frame1359>
                <Frame1354>
                  <TaskFrame1353
                    outstanding="Assigned"
                    number={assignmedTasks.length}
                  />
                  <TaskCardContainer
                    allTasks={assignmedTasks}
                    className={frame19Props.className}
                  />
                </Frame1354>
                <Frame1354>
                  <TaskFrame1353
                    outstanding="In Draft"
                    number={inProgressTasks.length}
                  />
                  <TaskCardContainer
                    allTasks={inProgressTasks}
                    className={frame19Props.className}
                  />
                </Frame1354>
                <Frame1358>
                  <TaskFrame1353
                    outstanding="In Review"
                    number={inReviewTasks.length}
                  />
                  <TaskCardContainer
                    allTasks={inReviewTasks}
                    className={frame19Props.className}
                  />
                </Frame1358>
              </Frame1359>
            </FixedWidthDiv>
          ) : (
            MyCalendarFile
          )}
        </Frame1360>
      </Frame1361>
    </TaskScreenMainContainer>
  );
}

export default TasksDesktop;
