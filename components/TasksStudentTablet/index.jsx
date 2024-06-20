import { default as React, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import CheckboxGroup from '../CheckboxGroup';
import HeaderSmall from '../HeaderSmall';
import Tabs from '../Tabs';
import TaskCardContainer from '../TaskCardContainer';

import {
  IbmplexsansBoldShark36px,
  IbmplexsansSemiBoldRiverBed24px,
} from '../../styledMixins';
import { taskHeaderProps } from '../../utils/headerProps.js';
import FooterSmall from '../FooterSmall';
import Group1205 from '../TeacherDashboard/Group1205';
import LinkButton from '../../components2/LinkButton/index.jsx';
import arrowRight from '../../static/img/arrowright.svg';
import whiteArrowright from '../../static/img/arrowright-White.svg';
import questionMark from '../../static/img/question-mark.svg';
import share from '../../static/img/share.svg';
import shareColor from '../../static/img/share-color.svg';
import {
  Frame1211,
  Frame1362,
  Frame1363,
  Frame1364,
  Frame1365,
  LinkAndFilter,
  Number,
  Outstanding,
  SubtitleCon,
  TaskScreenMainContainer,
  Title,
  TitleAndFilterContainer,
  TitleAndSubtitleContainer,
  TitleContainer,
  TitleImage,
} from './style.js';
import QuestionTooltip from '../../components2/QuestionTooltip/index.jsx';
import { isMobileView } from '../ReactiveRender/index.jsx';

function TasksStudentTablet(props) {
  const {
    menuItems,
    filterTasks,
    assignmedTasks,
    inProgressTasks,
    inReviewTasks,
    headingFilter,
    arrowright,
    FilterSortAndCal,
    tasksSelected,
    MyCalendarFile,
  } = props;
  const prevProps = useRef(props);
  const [isAssigned, setIsAssigned] = useState(true);
  const [isInProgress, setIsInProgress] = useState(false);
  const [isInReview, setIsInReview] = useState(false);
  const [task, setTask] = useState(assignmedTasks);
  const [title, setTittle] = useState('Not Started');
  const mobileView = isMobileView();

  const [taskFrame, setTasksFrame] = useState(
    createTasksFrame('Not Started', assignmedTasks, true, false, false)
  );
  useEffect(() => {
    setTasksFrame(
      createTasksFrame(title, task, isAssigned, isInProgress, isInReview)
    );
    if (prevProps.current !== props) {
      isAssigned && setTask(assignmedTasks);
      isInProgress && setTask(inProgressTasks);
      isInReview && setTask(inReviewTasks);
    }
    prevProps.current = props;
  }, [title, task, isAssigned, isInProgress, isInReview, menuItems]);

  return (
    <TaskScreenMainContainer className="screen">
      <Frame1365>
        <TitleAndFilterContainer>
          <TitleAndSubtitleContainer>
            <TitleContainer>
              <Title>
                Homework
                <QuestionTooltip
                  text="View all of your current tasks from school"
                  img={questionMark}
                />
              </Title>
              <LinkAndFilter>
                <LinkButton
                  link={`#/exemplarResponses`}
                  label="Shared Responses"
                  arrowleft={shareColor}
                  whiteArrowleft={share}
                />
                <LinkButton
                  link={`#/completed`}
                  label="Task History"
                  arrowright={arrowRight}
                  whiteArrowright={whiteArrowright}
                />
              </LinkAndFilter>
            </TitleContainer>
            {!mobileView && (
              <SubtitleCon>
                Click on a task bubble to complete or review your work
              </SubtitleCon>
            )}
          </TitleAndSubtitleContainer>
          {!mobileView && <>{FilterSortAndCal}</>}
        </TitleAndFilterContainer>
        {tasksSelected ? <>{taskFrame}</> : MyCalendarFile}
      </Frame1365>
    </TaskScreenMainContainer>
  );

  function createTasksFrame(
    title,
    tasks,
    isOutstanding,
    isInProgress,
    isOverdue
  ) {
    const tooltipText = () => {
      if (title === 'Assigned') {
        return "New tasks that you haven't opened yet";
      }
      if (title === 'In Draft') {
        return 'Tasks that you have started but not yet submitted';
      }
      if (title === 'In Review') {
        return 'Completed tasks that are either awaiting feedback or pending your review';
      }
    };
    return (
      <>
        <Frame1364>
          <Frame1211>
            <Tabs
              text={'Assigned'}
              isSelected={isOutstanding}
              onClickFn={() => {
                setIsAssigned(true);
                setIsInProgress(false);
                setIsInReview(false);
                setTittle('Assigned');
                setTask(assignmedTasks);
              }}
            />
            <Tabs
              text={'In Draft'}
              isSelected={isInProgress}
              onClickFn={() => {
                setIsAssigned(false);
                setIsInProgress(true);
                setIsInReview(false);
                setTittle('In Draft');
                setTask(inProgressTasks);
              }}
            />
            <Tabs
              text={'In Review'}
              isSelected={isOverdue}
              onClickFn={() => {
                setIsAssigned(false);
                setIsInProgress(false);
                setIsInReview(true);
                setTittle('In Review');
                setTask(inReviewTasks);
              }}
            />
          </Frame1211>
          <Frame1363>
            <Frame1362>
              <Outstanding>
                {title}
                <QuestionTooltip text={tooltipText()} img={questionMark} />
              </Outstanding>
              <Number>{tasks.length}</Number>
            </Frame1362>
            <TaskCardContainer allTasks={tasks} />
          </Frame1363>
        </Frame1364>
      </>
    );
  }
}

// const Frame1365 = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 30px;
//   padding: 0px 60px;
//   position: relative;
//   align-self: stretch;
// `;

// const Frame1364 = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 20px;
//   position: relative;
//   align-self: stretch;
//   min-height: 600px;
// `;

// const Frame1211 = styled.div`
//   display: flex;
//   width: 442px;
//   align-items: flex-start;
//   justify-content: space-between;
//   padding: 8px;
//   position: relative;
//   background-color: var(--blue-chalk);
//   border-radius: 24px;
// `;

// const Frame1363 = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 20px;
//   position: relative;
//   align-self: stretch;
// `;

// const Frame1362 = styled.div`
//   ${IbmplexsansSemiBoldRiverBed24px}
//   display: flex;
//   align-items: flex-start;
//   gap: 20px;
//   position: relative;
//   align-self: stretch;
// `;

// const Outstanding = styled.div`
//   position: relative;
//   flex: 1;
//   margin-top: -1px;
//   letter-spacing: 0;
//   line-height: normal;
//   display: flex;
//   gap: 8px;
// `;

// const Number = styled.div`
//   position: relative;
//   width: fit-content;
//   margin-top: -1px;
//   text-align: right;
//   letter-spacing: 0;
//   line-height: normal;
// `;
// const LinkAndFilter = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 20px;
// `;

export default TasksStudentTablet;
