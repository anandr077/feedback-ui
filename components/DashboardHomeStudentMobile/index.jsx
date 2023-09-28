import React from 'react';
import styled from 'styled-components';
import { IbmplexsansBoldWhite36px } from '../../styledMixins';
import DashboardFrame1208 from '../DashboardFrame1208';
import TaskCardContainer from '../TaskCardContainer';
import './DashboardHomeStudentMobile.css';
import { getUserName } from '../../service';
import { homeHeaderProps } from '../../utils/headerProps';

function DashboardHomeStudentMobile(props) {
  const {
    outstandingTasks,
    inProgressTasks,
    overdueTasks,
    modelResponses,
    setPublishActionCompleted,
    keepOrganizedWitho2,
    frame12082Props,
  } = props;
  const userName = getUserName();

  return (
    <div className="dashboard-home-student-mobile screen">
      <Frame1352>
        <Frame1203>
          <Frame1348>
            <KeepOrganizedWitho>Welcome, {userName}</KeepOrganizedWitho>
            <KeepOrganizedWitho1>{keepOrganizedWitho2}</KeepOrganizedWitho1>
          </Frame1348>
        </Frame1203>
      </Frame1352>
      <Frame1351>
        <Frame1205>
          <DashboardFrame1208
            tasks="Tasks"
            group12052Props={frame12082Props.group12052Props}
          />
          <Line17 src="/img/line-17@2x.png" alt="Line 17" />
          <Frame11>
            <TaskCardContainer
              allTasks={[
                ...overdueTasks,
                ...outstandingTasks,
                ...inProgressTasks,
              ]}
            />
          </Frame11>
        </Frame1205>
        <Frame1205>
          <DashboardFrame1208 tasks="Exemplars" exemplar={true} />
          <Line17 src="/img/line-17@2x.png" alt="Line 17" />
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
  padding: 0px 20px;
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
  ${IbmplexsansBoldWhite36px}
  position: relative;
  align-self: stretch;
  height: 34.06922912597656px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: -0.72px;
  line-height: 43.2px;
  white-space: nowrap;
`;

const KeepOrganizedWitho1 = styled.p`
  position: relative;
  align-self: stretch;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  color: var(--white);
  font-size: var(--font-size-m);
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1351 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Line17 = styled.img`
  position: relative;
  align-self: stretch;
  height: 1px;
  object-fit: cover;
`;

const Frame11 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 0px 16px;
  position: relative;
  align-self: stretch;
  max-height: 150px;
`;

const Frame1205 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  padding: 16px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 4px 16px #7200e01a;
`;

export default DashboardHomeStudentMobile;
