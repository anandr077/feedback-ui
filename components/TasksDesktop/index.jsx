import React from 'react';
import styled from 'styled-components';
import {
  IbmplexsansBoldShark64px,
  IbmplexsansSemiBoldRiverBed24px,
} from '../../styledMixins';
import Footer from '../Footer';
import Header from '../Header';
import TaskCardContainer from '../TaskCardContainer';
import TaskFrame1353 from '../TaskFrame1353';
import './TasksDesktop.css';
import { taskHeaderProps } from '../../utils/headerProps.js';
import CheckboxGroup from '../CheckboxGroup';

function TasksDesktop(props) {
  const {
    menuItems,
    filterTasks,
    assignmedTasks,
    inProgressTasks,
    inReviewTasks,
    frame19Props,
  } = props;

  return (
    <div className="tasks-desktop screen">
      <Header headerProps={taskHeaderProps} />
      <Frame1361>
        <TitleContainer>
          <Title>Tasks</Title>
          <CheckboxGroup
            onChange={filterTasks}
            data={menuItems}
          ></CheckboxGroup>
        </TitleContainer>
        <Frame1360>
          {/* <TaskFrame1306 frame1304Props={frame1306Props.frame1304Props} /> */}
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
        </Frame1360>
      </Frame1361>
      <Footer />
    </div>
  );
}

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
  width: 1200px;
  align-items: flex-start;
  gap: 40px;
  position: relative;
`;

const Title = styled.h1`
  ${IbmplexsansBoldShark64px}
  font-size: 50px;
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: -1.6px;
  line-height: normal;
`;

const Frame1360 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  position: relative;
  align-self: stretch;
  min-height: 600px;
`;

const Frame1359 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  position: relative;
  align-self: stretch;
`;

const Frame1354 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  position: relative;
  flex: 1;
  background-color: var(--white);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 4px 22px #2f1a720a;
`;

const Frame19 = styled.div`
  display: flex;
  flex-direction: column;
  height: 609px;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const Frame1358 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  position: relative;
  flex: 1;
  background-color: var(--white);
  border-radius: 16px;
  box-shadow: 0px 4px 22px #2f1a720a;
`;

const Frame1357 = styled.div`
  ${IbmplexsansSemiBoldRiverBed24px}
  display: flex;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Overdue = styled.div`
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

export default TasksDesktop;
