import React from 'react';
import styled from 'styled-components';
import { getUserName } from '../../service';
import {
  DashboardIbmplexsansBoldWhite72px,
  DashboardIbmplexsansNormalWhite20px,
} from '../../styledMixins';
import DashboardFrame12082 from '../DashboardFrame12082';
import TaskCardContainer from '../TaskCardContainer';
import './DashboardHomeStudentTablet.css';
import { homeHeaderProps } from '../../utils/headerProps';
function DashboardHomeStudentTablet(props) {
  const {
    outstandingTasks,
    inProgressTasks,
    overdueTasks,
    modelResponses,
    setPublishActionCompleted,
    keepOrganizedWitho2,
    frame120821Props,
  } = props;
  const userName = getUserName();

  return (
    <div className="dashboard-home-student-tablet screen">
      <Frame1352>
        <Frame1203>
          <Frame1348>
            <KeepOrganizedWitho>Welcome, {userName}</KeepOrganizedWitho>
            <KeepOrganizedWitho1>{keepOrganizedWitho2}</KeepOrganizedWitho1>
          </Frame1348>
          <MaskGroup src="/img/mask-group-2.png" alt="Mask Group" />
        </Frame1203>
      </Frame1352>
      <Frame1351>
        <Frame1206>
          <DashboardFrame12082
            tasks={frame120821Props.tasks}
            group12052Props={frame120821Props.group12052Props}
          />
          <Line17 src="/img/line-17-2.png" alt="Line 17" />
          <Frame11>
            <TaskCardContainer
              allTasks={[
                ...overdueTasks,
                ...outstandingTasks,
                ...inProgressTasks,
              ]}
            />
          </Frame11>
        </Frame1206>
        <Frame1205>
          <DashboardFrame12082 tasks="Exemplars" exemplar={true} />
          <Line17 src="/img/line-17-2.png" alt="Line 17" />
          <Frame11>
            <TaskCardContainer
              allTasks={modelResponses}
              exemplar={true}
              setPublishActionCompleted={setPublishActionCompleted}
            />
          </Frame11>
        </Frame1205>
      </Frame1351>
    </div>
  );
}

const Frame1352 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  position: relative;
  align-self: stretch;
`;

const Frame1203 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 30px;
  position: relative;
  align-self: stretch;
`;

const Frame1348 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 60px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--royal-purple);
  border-radius: 16px;
  overflow: hidden;
`;

const KeepOrganizedWitho = styled.h1`
  ${DashboardIbmplexsansBoldWhite72px}

  position: relative;
  align-self: stretch;
  margin-top: -1px;
  text-align: center;
  letter-spacing: -1.44px;
  line-height: 86.4px;
  white-space: nowrap;
`;

const KeepOrganizedWitho1 = styled.p`
  ${DashboardIbmplexsansNormalWhite20px}
  position: relative;
  align-self: stretch;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const MaskGroup = styled.img`
  position: absolute;
  top: calc(50% - 130px);
  left: calc(50% - 720px);
  width: 1200px;
  height: 260px;
`;

const Frame1351 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
  min-height: 600px;
`;

const Frame1206 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Line17 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 904px;
  height: 1px;
  object-fit: cover;
`;

const Frame11 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
  max-height: 250px;
`;

const Frame1205 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 4px 16px #7200e01a;
`;

export default DashboardHomeStudentTablet;
