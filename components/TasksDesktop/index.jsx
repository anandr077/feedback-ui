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
import RoundedBorderSubmitBtn from '../../components2/Buttons/RoundedBorderSubmitBtn/index.jsx';

function TasksDesktop(props) {
  const {
    menuItems,
    filterTasks,
    visibleAssignedTasks,
    visibleInProgressTasks,
    visibleInReviewTasks,
    frame19Props,
    headingFilter,
    arrowright,
    FilterSortAndCal,
    tasksSelected,
    isShowMenu,
    setShowMenu,
    MyCalendarFile,
    handleShowMoreTask
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
                    number={visibleAssignedTasks.length}
                  />
                  <TaskCardContainer
                    allTasks={visibleAssignedTasks}
                    className={frame19Props.className}
                  />
                  <RoundedBorderSubmitBtn text={"Show more"} onClickFn={()=> handleShowMoreTask('Assigned')}/>
                </Frame1354>
                <Frame1354>
                  <TaskFrame1353
                    outstanding="In Draft"
                    number={visibleInProgressTasks.length}
                  />
                  <TaskCardContainer
                    allTasks={visibleInProgressTasks}
                    className={frame19Props.className}
                  />
                  <RoundedBorderSubmitBtn text={"Show more"} onClickFn={()=> handleShowMoreTask('inDraft')}/>
                </Frame1354>
                <Frame1358>
                  <TaskFrame1353
                    outstanding="In Review"
                    number={visibleInReviewTasks.length}
                  />
                  <TaskCardContainer
                    allTasks={visibleInReviewTasks}
                    className={frame19Props.className}
                  />
                  <RoundedBorderSubmitBtn text={"Show more"} onClickFn={()=> handleShowMoreTask('inReview')}/>
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
