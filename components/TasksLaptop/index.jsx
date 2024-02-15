import React from 'react';
import styled from 'styled-components';
import { IbmplexsansBoldShark64px } from '../../styledMixins';
import { taskHeaderProps } from '../../utils/headerProps.js';
import Footer from '../Footer';
import Header from '../Header';
import TaskCardContainer from '../TaskCardContainer';
import TaskFrame1353 from '../TaskFrame1353';
import './TasksLaptop.css';
import CheckboxGroup from '../CheckboxGroup';
import Group1205 from '../TeacherDashboard/Group1205';
import LinkButton from '../../components2/LinkButton/index.jsx';
import arrowRight from '../../static/img/arrowright.svg';
import whiteArrowright from '../../static/img/arrowright-White.svg';
import questionMark from '../../static/img/question-mark.svg';
import share from '../../static/img/share.svg';
import shareColor from '../../static/img/share-color.svg';
import {
  SubtitleCon,
  TitleAndFilterContainer,
  TitleAndSubtitleContainer,
  TitleImage,
} from './style.js';
import QuestionTooltip from '../../components2/QuestionTooltip/index.jsx';
function TasksLaptop(props) {
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
    <div className="tasks-laptop screen">
      <Frame1361>
        <TitleAndFilterContainer>
          <TitleAndSubtitleContainer>
            <TitleContainer>
              <Title>
                My Tasks
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
            <SubtitleCon>
              Click on a task bubble to complete or review your work
            </SubtitleCon>
          </TitleAndSubtitleContainer>
          <>{FilterSortAndCal}</>
        </TitleAndFilterContainer>
        <Frame1360>
          {tasksSelected ? (
            <Frame1359>
              <Frame1358>
                <TaskFrame1353
                  outstanding="Assigned"
                  number={assignmedTasks.length}
                />
                <TaskCardContainer
                  allTasks={assignmedTasks}
                  className={frame19Props.className}
                  cardsProps={frame19Props.cardsProps}
                />
              </Frame1358>
              <Frame1358>
                <TaskFrame1353
                  outstanding="In Draft"
                  number={inProgressTasks.length}
                />
                <TaskCardContainer
                  allTasks={inProgressTasks}
                  className={frame19Props.className}
                  cardsProps={frame19Props.cardsProps}
                />
              </Frame1358>

              <Frame1358>
                <TaskFrame1353
                  outstanding="In Review"
                  number={inReviewTasks.length}
                />
                <TaskCardContainer
                  allTasks={inReviewTasks}
                  className={frame19Props.className}
                  cardsProps={frame19Props.cardsProps}
                />
              </Frame1358>
            </Frame1359>
          ) : (
            MyCalendarFile
          )}
        </Frame1360>
      </Frame1361>
    </div>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  padding: 0px 60px;
`;

const FilterContainer = styled.div`
  margin-top: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
`;
const Frame1361 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 40px;
  position: relative;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: IBM Plex Sans;
  font-size: 36px;
  font-weight: 700;
  line-height: 47px;
  letter-spacing: -0.025em;
  text-align: left;
  color: #301b72;
`;

const Frame1360 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  position: relative;
  align-self: stretch;
  // height: 80vh;
  padding: 0px 60px;
`;

const Frame1359 = styled.div`
  display: flex;
  gap: 32px;
  position: relative;
  align-self: stretch;
  width: 100%;
  min-height: calc(100vh - 285px);
  flex-grow: 1;
  margin: 0px auto;
  height: 80vh;
`;

const Frame1358 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0px;
  position: relative;
  flex: 1;
  flex-grow: 1;
  background-color: var(--white);
  border-radius: 16px;
  box-shadow: 0px 4px 22px #2f1a720a;
`;

const LinkAndFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export default TasksLaptop;
