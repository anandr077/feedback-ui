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
import { isShowAllAssignmentFunc, isShowAllButton, isShowAllDraftsFunc, isShowAllInReviewFunc } from './rules.js';
import arrowDown from '../../static/img/arrowdown2.svg';
import arrowUp from '../../static/img/arrowup2.svg';

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

  const isShowAllAssignment = isShowAllAssignmentFunc(visibleAssignedTaskCount, assignedTasks);
  const isShowAllDraft = isShowAllDraftsFunc(visibleInProgressTaskCount, inProgressTasks);
  const isShowAllInReview = isShowAllInReviewFunc(visibleInReviewTaskCount, inReviewTasks);

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
                  {isShowAllButton(assignedTasks) && (
                    <UnderlinedGrayBtn
                      text={isShowAllAssignment ? 'Show all' : 'Show less'}
                      onclick={() =>
                        handleShowMoreTask(
                          'Assigned',
                          isShowAllAssignment ? assignedTasks.length : 3
                        )
                      }
                      rightIcon={isShowAllAssignment ? arrowDown : arrowUp}
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
                  {isShowAllButton(inProgressTasks) && (
                    <UnderlinedGrayBtn
                      text={isShowAllDraft ? 'Show all' : 'Show less'}
                      onclick={() =>
                        handleShowMoreTask(
                          'inDraft',
                          isShowAllDraft ? inProgressTasks.length : 3
                        )
                      }
                      rightIcon={isShowAllDraft ? arrowDown : arrowUp}
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
                  {isShowAllButton(inReviewTasks) && (
                    <UnderlinedGrayBtn
                      text={isShowAllInReview ? 'Show all' : 'Show less'}
                      onclick={() =>
                        handleShowMoreTask(
                          'inReview',
                          isShowAllInReview ? inReviewTasks.length : 3
                        )
                      }
                      rightIcon={isShowAllInReview ? arrowDown : arrowUp}
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
