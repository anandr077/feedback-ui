import { default as React, default as React, useState } from 'react';
import styled from 'styled-components';
import {
  IbmplexsansBoldShark36px,
  IbmplexsansSemiBoldRiverBed24px,
} from '../../../styledMixins';
import { assignmentsHeaderProps } from '../../../utils/headerProps.js';
import Tabs from '../../Tabs';
import TaskCardContainer from '../../TaskCardContainer';
import Buttons from '../../Classes/Buttons';
import CheckboxGroup from '../../CheckboxGroup';
import {
  Title,
  TitleAndFilterContainer,
  TitleAndSubtitleContainer,
  TitleImage,
} from '../../TasksStudentMobile/style.js';
import questionMark from '../../../static/img/question-mark.svg';
import QuestionTooltip from '../../../components2/QuestionTooltip/index.jsx';
import {
  Frame1211,
  Frame1362,
  Frame1364,
  Frame1365,
  Number,
  SectionTitle,
  TaskScreenMainContainer,
  TitleContainer,
} from './style.js';

function TeacherTasksStudentMobile(props) {
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

  React.useEffect(() => {
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
              <Buttons link="#tasks/new" />
            </TitleContainer>
            {/* <SubtitleCon>
              Click on a task bubble to complete or review your work
            </SubtitleCon> */}
          </TitleAndSubtitleContainer>
          {/* <>{FilterSortAndCal}</> */}
        </TitleAndFilterContainer>
        {tasksFrame}
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
          <Frame1364>
            <Frame1362>
              <SectionTitle>
                {title}
                <QuestionTooltip text={tooltipText()} img={questionMark} />
              </SectionTitle>
              <Number>{tasks.length}</Number>
            </Frame1362>
            <TaskCardContainer
              allTasks={tasks}
              showDeletePopuphandler={showDeletePopuphandler}
              showDateExtendPopuphandler={showDateExtendPopuphandler}
            />
          </Frame1364>
        </Frame1364>
      </>
    );
  }
}

export default TeacherTasksStudentMobile;
