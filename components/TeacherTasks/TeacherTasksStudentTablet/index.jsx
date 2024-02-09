import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HeaderSmall from '../../HeaderSmall';
import Tabs from '../../Tabs';
import TaskCardContainer from '../../TaskCardContainer';
import questionMark from '../../../static/img/question-mark.svg';

import {
  IbmplexsansBoldShark36px,
  IbmplexsansSemiBoldRiverBed24px,
} from '../../../styledMixins';
import './TeacherTasksStudentTablet.css';
import Buttons from '../../Classes/Buttons';
import CheckboxGroup from '../../CheckboxGroup';
import {
  TitleAndFilterContainer,
  TitleAndSubtitleContainer,
  TitleContainer,
  Title,
  SubtitleCon,
  TitleImage,
} from '../../TasksStudentTablet/style.js';
import QuestionTooltip from '../../../components2/QuestionTooltip/index.jsx';

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
    <div className="tasks-student-tablet screen">
      <Frame1365>
        <TitleAndFilterContainer>
          <TitleAndSubtitleContainer>
            <TitleContainer>
              <Title>
                Tasks
                <QuestionTooltip text={'View the status of every task that you have assigned for your classes'} />
              </Title>
              <ButtonContainer>
                <Buttons link="#tasks/new" />{' '}
              </ButtonContainer>
            </TitleContainer>
            <SubtitleCon>
              Click on a task bubble to complete or review your work
            </SubtitleCon>
          </TitleAndSubtitleContainer>
          <>{FilterSortAndCal}</>
        </TitleAndFilterContainer>
        {tasksSelected ? <>{tasksFrame}</> : MyCalendarFile}
      </Frame1365>
    </div>
  );

  function createTasksFrame(
    title,
    tasks,
    isOutstanding,
    isInProgress,
    isOverdue
  ) {
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
              <Outstanding>{title}</Outstanding>
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 200px;
`;

const Frame1365 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
  min-height: 600px;
`;

const Frame1307 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1364 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1211 = styled.div`
  display: flex;
  width: 442px;
  align-items: flex-start;
  justify-content: space-between;
  padding: 8px;
  position: relative;
  background-color: var(--blue-chalk);
  border-radius: 24px;
`;

const Frame1363 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1362 = styled.div`
  ${IbmplexsansSemiBoldRiverBed24px}
  display: flex;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Outstanding = styled.div`
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Number = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: normal;
`;
const PageTitle = styled.h1`
  ${IbmplexsansBoldShark36px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.72px;
  line-height: 43.2px;
  white-space: nowrap;
`;
export default TeacherTasksStudentTablet;
