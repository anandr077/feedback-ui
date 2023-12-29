import React from 'react';
import styled from 'styled-components';
import { IbmplexsansBoldShark64px } from '../../styledMixins';
import Footer from '../Footer';
import Header from '../Header';
import TaskCardContainer from '../TaskCardContainer';
import TaskFrame1353 from '../TaskFrame1353';
import './TasksDesktop.css';
import { taskHeaderProps } from '../../utils/headerProps.js';
import CheckboxGroup from '../CheckboxGroup';
import Group1205 from '../TeacherDashboard/Group1205';

function TasksDesktop(props) {
  const {
    menuItems,
    filterTasks,
    assignmedTasks,
    inProgressTasks,
    inReviewTasks,
    frame19Props,
    portfolio,
    arrowright,
  } = props;

  return (
    <div className="tasks-desktop screen">
      <Frame1361>
        <TitleContainer>
          <Title>Tasks</Title>
          <LinkAndFilter>
            {portfolio.length != 0 && (
              <Group1205
                link={`#portfolio/${portfolio?.files[0].id}/Tasks`}
                label="COMPLETED TASKS"
                arrowright={arrowright}
              />
            )}

            <CheckboxGroup
              onChange={filterTasks}
              data={menuItems}
            ></CheckboxGroup>
          </LinkAndFilter>
        </TitleContainer>
        <Frame1360>
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
    </div>
  );
}

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 0px 60px;
`;

const Frame1361 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 40px;
  position: relative;
  max-width: 1220px;
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
  justify-content: center;
  gap: 40px;
  position: relative;
  align-self: stretch;
  height: 90vh;
`;

const Frame1359 = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 60px;
  gap: 32px;
  position: relative;
  align-self: stretch;
  min-height: calc(100vh - 285px);
  flex-grow: 1;
  margin: 0px auto;
`;

const Frame1354 = styled.div`
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
  align-self: stretch;
`;

export default TasksDesktop;
