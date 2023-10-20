import {
  default as React,
  default as React,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import {
  IbmplexsansBoldShark36px,
  IbmplexsansSemiBoldRiverBed24px,
} from '../../styledMixins';
import { taskHeaderProps } from '../../utils/headerProps.js';
import CheckboxGroup from '../CheckboxGroup';
import FooterSmall from '../FooterSmall';
import HeaderSmall from '../HeaderSmall';
import Tabs from '../Tabs';
import TaskCardContainer from '../TaskCardContainer';
import './TasksStudentMobile.css';
import Group1205 from '../TeacherDashboard/Group1205';

function TasksStudentMobile(props) {
  const {
    menuItems,
    filterTasks,
    assignmedTasks,
    inProgressTasks,
    inReviewTasks,
    arrowright,
    portfolio,
  } = props;
  const prevProps = useRef(props);
  const [isAssigned, setIsAssigned] = useState(true);
  const [isInProgress, setIsInProgress] = useState(false);
  const [isInReview, setIsInReview] = useState(false);
  const [task, setTask] = useState(assignmedTasks);
  const [title, setTittle] = useState('Assigned');

  const [taskFrame, setTasksFrame] = useState(
    createTasksFrame('Assigned', assignmedTasks, true, false, false)
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
    <div className="tasks-student-mobile screen">
      <Frame1365>
        <Frame1307>
          <PageTitle>Tasks</PageTitle>
          <LinkAndFilter>
            {portfolio.length != 0 && (
              <Group1205
                link={`#portfolio/${portfolio?.files[0].id}/Tasks`}
                label="Completed Tasks"
                arrowright={arrowright}
                small={true}
              />
            )}
            <CheckboxGroup
              onChange={filterTasks}
              data={menuItems}
            ></CheckboxGroup>
          </LinkAndFilter>
        </Frame1307>
        {taskFrame}
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
          <Frame1364>
            <Frame1362>
              <SectionTitle>{title}</SectionTitle>
              <Number>{tasks.length}</Number>
            </Frame1362>
            <TaskCardContainer allTasks={tasks} />
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
`;

const Number = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: normal;
`;
const LinkAndFilter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

export default TasksStudentMobile;
