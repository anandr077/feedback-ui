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
import UnderlinedGrayBtn from '../../components2/Buttons/UnderlinedGrayBtn/index.jsx';
import { isShowMoreAssignedButton, isShowMoreDraftButton, isShowMoreInReviewButton } from './rules.js';

function TasksDesktop(props) {
  const {
    visibleAssignedTasks,
    visibleInProgressTasks,
    visibleInReviewTasks,
    visibleInProgressTaskCount, 
    visibleAssignedTaskCount,  
    visibleInReviewTaskCount,
    inProgressTasks,
    assignedTasks,
    inReviewTasks,
    frame19Props,
    FilterSortAndCal,
    tasksSelected,
    isShowMenu,
    setShowMenu,
    MyCalendarFile,
    handleShowMoreTask,
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
                    number={assignedTasks.length}
                  />
                  <TaskCardContainer
                    allTasks={visibleAssignedTasks}
                    className={frame19Props.className}
                  />
                  {isShowMoreAssignedButton(visibleAssignedTaskCount, assignedTasks) && (
                    <UnderlinedGrayBtn
                      text={'Show more'}
                      onclick={() => handleShowMoreTask('Assigned')}
                    />
                  )}
                </Frame1354>
                <Frame1354>
                  <TaskFrame1353
                    outstanding="In Draft"
                    number={inProgressTasks.length}
                  />
                  <TaskCardContainer
                    allTasks={visibleInProgressTasks}
                    className={frame19Props.className}
                  />
                  {isShowMoreDraftButton(visibleInProgressTaskCount, inProgressTasks) && (
                    <UnderlinedGrayBtn
                      text={'Show more'}
                      onclick={() => handleShowMoreTask('inDraft')}
                    />
                  )}
                </Frame1354>
                <Frame1358>
                  <TaskFrame1353
                    outstanding="In Review"
                    number={inReviewTasks.length}
                  />
                  <TaskCardContainer
                    allTasks={visibleInReviewTasks}
                    className={frame19Props.className}
                  />
                  {isShowMoreInReviewButton(visibleInReviewTaskCount, inReviewTasks)&& (
                    <UnderlinedGrayBtn
                      text={'Show more'}
                      onclick={() => handleShowMoreTask('inReview')}
                    />
                  )}
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
