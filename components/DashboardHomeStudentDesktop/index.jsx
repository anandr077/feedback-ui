import React from 'react';
import styled from 'styled-components';
import { getUserName } from '../../userLocalDetails';
import {
  IbmplexsansMediumRiverBed24px,
  IbmplexsansNormalWhite20px,
} from '../../styledMixins';
import DashboardFrame1284 from '../DashboardFrame1284';
import DashboardGroup1205 from '../DashboardGroup1205';
import './DashboardHomeStudentDesktop.css';
import TaskCardContainer from '../TaskCardContainer';

function DashboardHomeStudentDesktop(props) {
  const {
    outstandingTasks,
    inProgressTasks,
    overdueTasks,
    modelResponses,
    setPublishActionCompleted,
    keepOrganizedWitho2,
    maskGroup,
    group1205Props,
    headerProps,
  } = props;
  return (
    <div className="dashboard-home-student-desktop screen">
      <Frame1347>
        <Frame1345>
          <Frame1342>
            <Frame1341>
              <KeepOrganizedWitho>Welcome, {getUserName()}</KeepOrganizedWitho>
              <KeepOrganizedWitho1>{keepOrganizedWitho2}</KeepOrganizedWitho1>
            </Frame1341>
            <MaskGroup src={maskGroup} alt="Mask Group" />
          </Frame1342>
        </Frame1345>
        <Frame1346>
          <Frame1339>
            <Frame1337>
              <Tasks>Tasks</Tasks>
              <DashboardGroup1205 className={group1205Props.className} />
            </Frame1337>
            <Line17 src="/img/line-17-6.png" alt="Line 17" />
            <Frame1336>
              <Frame1307>
                <DashboardFrame1284
                  title={'NOT STARTED'}
                  count={outstandingTasks.length}
                />
                <DashboardFrame1284
                  title={'IN PROGRESS'}
                  count={inProgressTasks.length}
                />
                <DashboardFrame1284
                  title={'OVERDUE'}
                  count={overdueTasks.length}
                />
              </Frame1307>
              <Line17 src="/img/line-17-6.png" alt="Line 16" />
              <Frame19>
                <TaskCardContainer
                  allTasks={[
                    ...overdueTasks,
                    ...outstandingTasks,
                    ...inProgressTasks,
                  ]}
                />
              </Frame19>
            </Frame1336>
          </Frame1339>
          <Frame1339>
            <Frame1337>
              <Crown src="/icons/exemplary_response.png" alt="crown" />
              <Tasks>Exemplars</Tasks>
            </Frame1337>
            <Line18 src="/img/line-17-6.png" alt="Line 16" />
            <Frame20>
              <TaskCardContainer
                allTasks={modelResponses}
                exemplar={true}
                setPublishActionCompleted={setPublishActionCompleted}
              />
            </Frame20>
          </Frame1339>
        </Frame1346>
      </Frame1347>
    </div>
  );
}

const Crown = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;
const Frame1347 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  position: relative;
  align-self: stretch;
`;

const Frame1345 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  padding: 0px 30px;
  position: relative;
  align-self: stretch;
`;

const Frame1342 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 70px 80px;
  position: relative;
  align-self: stretch;
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    rgb(48.000000938773155, 27.000000290572643, 114.0000008046627) 0%,
    rgb(56.33729696273804, 16.982998698949814, 94.35000121593475) 100%
  );
`;

const Frame1341 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const KeepOrganizedWitho = styled.h1`
  color: var(--white);
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-xxxxl);
  font-weight: 700;
  font-style: normal;
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  text-align: center;
  letter-spacing: -1.44px;
  line-height: 86.4px;
  white-space: nowrap;
`;

const KeepOrganizedWitho1 = styled.p`
  color: var(--white);
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-xl);
  font-weight: 400;
  font-style: normal;
  position: relative;
  align-self: stretch;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const MaskGroup = styled.img`
  position: absolute;
  top: calc(50% - 130px);
  left: calc(50% - 928px);
  width: 1856px;
  height: 260px;
`;

const Frame1346 = styled.div`
  display: flex;
  width: 1441px;
  align-items: flex-start;
  justify-content: center;
  gap: 32px;
  position: relative;
  min-height: 600px;
  padding: 0px 30px;
`;

const Frame1339 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  flex: 1;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 4px 16px #7200e01a;
  width: 50%;
`;

const Frame1337 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Tasks = styled.div`
  ${IbmplexsansMediumRiverBed24px}
  font-size: 24px;
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Line17 = styled.img`
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 1px;
  object-fit: cover;
`;
const Line18 = styled.img`
  position: relative;
  align-self: stretch;
  height: 1px;
  object-fit: cover;
`;

const Frame1336 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 10px 0px 0px;
  position: relative;
  align-self: stretch;
  border-radius: 12px;
  overflow: hidden;
`;

const Frame1307 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 120px;
  position: relative;
  align-self: stretch;
`;

const Frame19 = styled.div`
  display: flex;
  flex-direction: column;
  height: 493px;
  align-items: flex-start;
  gap: 20px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;
const Frame20 = styled.div`
  display: flex;
  flex-direction: column;
  height: 595px;
  align-items: flex-start;
  gap: 20px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

export default DashboardHomeStudentDesktop;
