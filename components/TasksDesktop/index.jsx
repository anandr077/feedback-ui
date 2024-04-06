import React from 'react';
import styled from 'styled-components';
import TaskCardContainer from '../TaskCardContainer';
import TaskFrame1353 from '../TaskFrame1353';
import LinkButton from '../../components2/LinkButton/index.jsx';
import arrowRight from '../../static/img/arrowright.svg';
import whiteArrowright from '../../static/img/arrowright-White.svg';
import questionMark from '../../static/img/question-mark.svg';
import share from '../../static/img/share.svg';
import shareColor from '../../static/img/share-color.svg';
import {
  Frame1354,
  Frame1358,
  Frame1359,
  Frame1360,
  Frame1361,
  SubtitleCon,
  TaskScreenMainContainer,
  TitleAndFilterContainer,
  TitleAndSubtitleContainer,
} from './style.js';
import QuestionTooltip from '../../components2/QuestionTooltip/index.jsx';
import SecondSidebar from '../SecondSidebar/index.js';

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
    MyCalendarFile,
  } = props;
  return (
    <TaskScreenMainContainer>
      <SecondSidebar />
      <Frame1361>
        <TitleAndFilterContainer>
          <>{FilterSortAndCal}</>
        </TitleAndFilterContainer>
        <Frame1360>
          {tasksSelected ? (
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
          ) : (
            MyCalendarFile
          )}
        </Frame1360>
      </Frame1361>
    </TaskScreenMainContainer>
  );
}

// const Frame1361 = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: calc(100vw - 305px);
//   align-items: center;
//   justify-content: flex-start;
//   gap: 20px;
//   position: relative;
//   border-top: 1px solid #e3e3e3;
// `;

// const Frame1360 = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 40px;
//   position: relative;
//   align-self: stretch;
//   padding: 0px 20px;
// `;

// const Frame1359 = styled.div`
//   display: flex;
//   width: 100%;
//   gap: 32px;
//   position: relative;
//   align-self: stretch;
//   // min-height: calc(100vh - 285px);
//   height: 90vh;
//   flex-grow: 1;
//   margin: 0px auto;
// `;

// const Frame1354 = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding-top: 0px;
//   position: relative;
//   flex: 1;
//   background-color: #f2f1f3;
//   border-radius: 16px;
//   box-shadow: 0px 4px 22px #2f1a720a;
// `;

// const Frame1358 = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding-top: 0px;
//   position: relative;
//   flex: 1;
//   flex-grow: 1;
//   background-color: #f2f1f3;
//   border-radius: 16px;
//   box-shadow: 0px 4px 22px #2f1a720a;
// `;

export default TasksDesktop;
