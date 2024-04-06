import React, { useState, useEffect } from 'react';
import HeaderSmall from '../../HeaderSmall';
import Tabs from '../../Tabs';
import TaskCardContainer from '../../TaskCardContainer';
import questionMark from '../../../static/img/question-mark.svg';

import {
  IbmplexsansBoldShark36px,
  IbmplexsansSemiBoldRiverBed24px,
} from '../../../styledMixins';
import Buttons from '../../Classes/Buttons';
import CheckboxGroup from '../../CheckboxGroup';
import {
  TitleAndFilterContainer,
  TitleAndSubtitleContainer,
  Title,
  SubtitleCon,
  TitleImage,
} from '../../TasksStudentTablet/style.js';
import QuestionTooltip from '../../../components2/QuestionTooltip/index.jsx';
import {
  ButtonContainer,
  TitleContainer,
  Frame1211,
  Frame1362,
  Frame1363,
  Frame1364,
  Frame1365,
  Number,
  Outstanding,
  TaskScreenMainContainer,
} from './style.js';
import { isMobileView } from '../../ReactiveRender/index.jsx';

function TeacherTasksStudentTablet(props) {
  const {
    menuItems,
    filterTasks,
    drafts,
    awaitingSubmissions,
    feedbacks,
    showDeletePopuphandler,
    showDateExtendPopuphandler,
    FilterSortAndCal,
    tasksSelected,
    MyCalendarFile,
  } = props;
  const [tasksFrame, setTasksFrame] = useState(null);
  const mobileView = isMobileView();

  useEffect(() => {
    setTasksFrame(
      createTasksFrame('Active', awaitingSubmissions, false, true, false)
    );
  }, [drafts]);

  function updateTasksFrame(
    title,
    tasks,
    isOutstanding,
    isInProgress,
    isOverdue
  ) {
    setTasksFrame(
      createTasksFrame(title, tasks, isOutstanding, isInProgress, isOverdue)
    );
  }

  return (
    <TaskScreenMainContainer className="screen">
      <Frame1365>
        <TitleAndFilterContainer>
          <TitleAndSubtitleContainer>
            <TitleContainer>
              <Title>
                Tasks
                <QuestionTooltip
                  text={
                    'View the status of every task that you have assigned for your classes'
                  }
                  img={questionMark}
                />
              </Title>
              <ButtonContainer>
                <Buttons link="#tasks/new" />{' '}
              </ButtonContainer>
            </TitleContainer>
            {!mobileView && (
              <SubtitleCon>
                Click on a task bubble to complete or review your work
              </SubtitleCon>
            )}
          </TitleAndSubtitleContainer>
          {!mobileView && <>{FilterSortAndCal}</>}
        </TitleAndFilterContainer>
        {tasksSelected ? <>{tasksFrame}</> : MyCalendarFile}
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
      if (title === 'Drafts') {
        return 'Tasks that you have started to create but have not yet assigned to a class';
      }
      if (title === 'Active') {
        return 'Tasks that are currently being completed by students and/or that await your feedback';
      }
      if (title === 'Closed') {
        return 'Previous tasks that are no longer accepting submissions or feedback';
      }
    };
    return (
      <>
        <Frame1364>
          <Frame1211>
            <Tabs
              text={'Drafts'}
              isSelected={isOutstanding}
              onClickFn={() => {
                updateTasksFrame('Drafts', drafts, true, false, false);
              }}
            />
            <Tabs
              text={'Active'}
              isSelected={isInProgress}
              onClickFn={() => {
                updateTasksFrame(
                  'Active',
                  awaitingSubmissions,
                  false,
                  true,
                  false
                );
              }}
            />
            <Tabs
              text={'Closed'}
              isSelected={isOverdue}
              onClickFn={() => {
                updateTasksFrame('Closed', feedbacks, false, false, true);
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
            <TaskCardContainer
              allTasks={tasks}
              showDeletePopuphandler={showDeletePopuphandler}
              showDateExtendPopuphandler={showDateExtendPopuphandler}
            />
          </Frame1363>
        </Frame1364>
      </>
    );
  }
}

export default TeacherTasksStudentTablet;
