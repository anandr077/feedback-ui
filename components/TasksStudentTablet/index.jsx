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
import './TasksStudentTablet.css';
import Group1205 from '../TeacherDashboard/Group1205';
import LinkButton from '../../components2/LinkButton/index.jsx';
import arrowRight from '../../static/img/arrowright.svg';
import whiteArrowright from '../../static/img/arrowright-White.svg';
import share from '../../static/img/share.svg';
import shareColor from '../../static/img/share-color.svg';

function TasksStudentTablet(props) {
  const {
    menuItems,
    filterTasks,
    assignmedTasks,
    inProgressTasks,
    inReviewTasks,
    portfolio,
    headingFilter,
    arrowright,
  } = props;
  const prevProps = useRef(props);
  const [isAssigned, setIsAssigned] = useState(true);
  const [isInProgress, setIsInProgress] = useState(false);
  const [isInReview, setIsInReview] = useState(false);
  const [task, setTask] = useState(assignmedTasks);
  const [title, setTittle] = useState('Not Started');

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
    <div className="tasks-student-tablet screen">
      <Frame1365>
        <HeaderContainer>
          <Frame1307>
            <Heading>
              <KeepOrganizedWitho>
                My Tasks <img src="img/question-mark.svg" />
              </KeepOrganizedWitho>
              <HeadingMessage>
                Click on a task bubble to complete or review your work
              </HeadingMessage>
            </Heading>
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
          </Frame1307>
          <FilterContainer>{headingFilter}</FilterContainer>
        </HeaderContainer>
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
          <Frame1363>
            <Frame1362>
              <Outstanding>{title}</Outstanding>
              <Number>{tasks.length}</Number>
            </Frame1362>
            <TaskCardContainer allTasks={tasks} />
          </Frame1363>
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
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const HeaderContainer = styled.div`
  width: 100%;
`;

const FilterContainer = styled.div`
  margin-top: 20px;
`;

const Frame1307 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const KeepOrganizedWitho = styled.h1`
  ${IbmplexsansBoldShark36px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.72px;
  line-height: 43.2px;
  white-space: nowrap;
  color: var(--royal-purple);
  display: flex;
  align-items: center;
  gap: 10px;
`;

const HeadingMessage = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: var(--font-size-l);
  line-height: 24px;
  color: #333333;
`;

const Frame1364 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
  min-height: 600px;
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
const LinkAndFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export default TasksStudentTablet;
