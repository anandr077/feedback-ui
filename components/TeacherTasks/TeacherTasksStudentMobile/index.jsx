import { default as React, default as React, useState } from 'react';
import styled from 'styled-components';
import {
  IbmplexsansBoldShark36px,
  IbmplexsansSemiBoldRiverBed24px,
} from '../../../styledMixins';
import { assignmentsHeaderProps } from '../../../utils/headerProps.js';
import Tabs from '../../Tabs';
import TaskCardContainer from '../../TaskCardContainer';
import './TeacherTasksStudentMobile.css';
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
    <div className="tasks-student-mobile screen">
      <Frame1365>
        <TitleAndFilterContainer>
          <TitleAndSubtitleContainer>
            <TitleContainer>
              <Title>
                Tasks
                <QuestionTooltip
                  text={'View the status of every task that you have assigned for your classes'} 
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
    </div>
  );

  function createTasksFrame(
    title,
    tasks,
    isOutstanding,
    isInProgress,
    isOverdue
  ) {
    const tooltipText = () =>{
      if(title === "Drafts"){
        return "Tasks that you have started to create but have not yet assigned to a class"
      }
      if(title === "Active"){
        return "Tasks that are currently being completed by students and/or that await your feedback"
      }
      if(title === "Closed"){
        return "Previous tasks that are no longer accepting submissions or feedback"
      }
    }
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
                <QuestionTooltip 
                  text={tooltipText()} 
                  img={questionMark}
                />
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

const Frame1365 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 20px;
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
  flex-wrap: wrap;
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

const Frame1364 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1211 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 8px;
  position: relative;
  align-self: stretch;
  background-color: var(--blue-chalk);
  border-radius: 24px;
  flex-wrap: wrap;
`;

const Frame1362 = styled.div`
  ${IbmplexsansSemiBoldRiverBed24px}
  display: flex;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const SectionTitle = styled.div`
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  display: flex;
  gap: 8px;
`;

const Number = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: normal;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  
`;

export default TeacherTasksStudentMobile;
