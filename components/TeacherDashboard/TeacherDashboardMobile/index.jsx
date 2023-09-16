import React from 'react';
import styled from 'styled-components';
import { getUserName } from '../../../service';
import { teacherHomeHeaderProps } from '../../../utils/headerProps';
import HeaderSmall from '../../HeaderSmall';
import Frame12842 from '../Frame12842';
import Frame13132 from '../Frame13132';
import Group1205 from '../Group1205';

import {
  IbmplexsansMediumShark20px,
  IbmplexsansBoldWhite36px,
} from '../../../styledMixins';

import {
  IbmplexsansMediumRiverBed24px,
  IbmplexsansNormalChicago13px,
  IbmplexsansNormalPersianIndigo13px,
} from '../styledMixins';
import './TeacherDashboardMobile.css';
import FooterSmall from '../../FooterSmall';
import { teacherHomeHeaderProps } from '../../../utils/headerProps';
import { getUserName } from '../../../service';
import { timeFirstFormattedDate } from '../../../dates';
import TaskCard from '../../TaskCard';

function TeacherDashboardMobile(props) {
  const {
    notifications,
    classes,
    drafts,
    frame131241Props,
    awaitingSubmissions,
    feedbacks,
    keepOrganizedWitho2,
    line171,
    line172,
    recentActivity,
    group1205Props,
    frame131321Props,
  } = props;
  const userName = getUserName();

  return (
    <div className="teacher-dashboard-mbile screen">
      <Frame1419>
        <Frame1418>
          <HeaderSmall headerProps={teacherHomeHeaderProps} />

          <Frame1203>
            <Frame1348>
              <KeepOrganizedWitho>Welcome, {userName}</KeepOrganizedWitho>
              <KeepOrganizedWitho1>{keepOrganizedWitho2}</KeepOrganizedWitho1>
            </Frame1348>
          </Frame1203>
        </Frame1418>
        <Frame1417>
          <Frame1339>
            <Frame1337>
              <Classes>Classes</Classes>
              <Group1205
                link="#classes"
                label="VIEW ALL"
                arrowright={group1205Props.arrowright}
                small={true}
              />
            </Frame1337>
            <Line17 src={line171} alt="Line 17" />
            <Frame1336>{classesFrames(classes, frame131241Props)}</Frame1336>
          </Frame1339>
          {createAssignmentsFrame(
            group1205Props,
            line172,
            (stats = [
              { title: 'DRAFTS', count: drafts.length },
              {
                title: 'ACTIVE',
                count: awaitingSubmissions.length,
              },
              { title: 'CLOSED', count: feedbacks.length },
            ])
          )}
          <Frame1341>
            <Frame1337>
              <Classes>{recentActivity}</Classes>
            </Frame1337>
            <Line17 src={line172} alt="Line 17" />
            {recentActivitiesFrame(notifications)}
          </Frame1341>
        </Frame1417>
      </Frame1419>
      <FooterSmall />
    </div>
  );
}
function recentActivitiesFrame(notifications) {
  const recentActivitiesFrames = notifications.map((notification) => {
    const task = {
      link: notification.link,
      title: notification.title,
      classTitle:
        notification.classTitle +
        ' | at ' +
        timeFirstFormattedDate(notification.dueAt),
    };
    return <TaskCard task={task} />;
  });
  return <Frame1408>{recentActivitiesFrames}</Frame1408>;
}
function createAssignmentsFrame(group1205Props, line172, stats) {
  return (
    <Frame1339>
      <Frame1337>
        <Classes>Tasks</Classes>

        <Group1205
          link="#tasks/new"
          label="CREATE NEW"
          arrowleft={'/img/iconsax-linear-add-1@2x.png'}
          small={true}
        />
        <Group1205
          link="#tasks"
          label="VIEW ALL"
          arrowright={group1205Props.arrowright}
          small={true}
        />
      </Frame1337>
      <Line17 src={line172} alt="Line 17" />
      {createStatsFrame(stats)}
    </Frame1339>
  );
}

function createStatsFrame(stats) {
  const statsFrames = (
    <>
      {stats.map((stat) => {
        return <Frame12842 title={stat.title} count={stat.count} />;
      })}
    </>
  );
  return <Frame1307>{statsFrames}</Frame1307>;
}

function classesFrames(classes, frame131241Props) {
  return (
    <>
      {classes.map((clazz) => {
        return (
          <a href={'#classes/' + clazz.id}>
            <Frame1312>
              <Frame13121>
                <Frame13122>
                  <X12ENGADV3>{clazz.title}</X12ENGADV3>
                </Frame13122>
                <Line17 src={'/img/line-17-22@2x.png'} alt="Line 17" />
                {createStatsFrame(
                  (stats = [
                    { title: 'STUDENTS', count: clazz.students.length },
                    { title: 'PENDING TASKS', count: '-' },
                    { title: 'DRAFTS', count: '-' },
                  ])
                )}
              </Frame13121>
            </Frame1312>
          </a>
        );
      })}
    </>
  );
}

const Frame1312 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
  &:hover {
    background: #f9f5ff;
    border: 1px solid #7200e0;
    box-shadow: 0px 4px 16px rgba(114, 0, 224, 0.2);
  }
`;
const Frame1205 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 8px;
  position: relative;
`;
const IconsaxLinearAdd = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;
const Frame13121 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame13122 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const X12ENGADV3 = styled.div`
  ${IbmplexsansMediumShark20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.5px;
  line-height: normal;
`;

const Frame1419 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  position: relative;
  align-self: stretch;
`;

const Frame1418 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  position: relative;
  align-self: stretch;
`;

const Frame1350 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 16px 30px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const Frame1349 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  position: relative;
  flex: 1;
`;

const Frame5 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  position: relative;
`;

const Frame51 = styled.img`
  position: relative;
  min-width: 48px;
  height: 48px;
  cursor: pointer;
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

const MaskGroup = styled.img`
  position: absolute;
  top: calc(50% - 103px);
  left: calc(50% - 175px);
  width: 350px;
  height: 206px;
`;

const Frame1417 = styled.div`
  ${IbmplexsansMediumRiverBed24px}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1339 = styled.div`
  display: flex;
  flex-direction: column;
  height: 685px;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame1337 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
  flex-wrap: wrap;
`;

const Classes = styled.div`
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Line17 = styled.img`
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
  padding: 0px 20px;
  position: relative;
  flex: 1;
  align-self: stretch;
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const Line31 = styled.img`
  position: absolute;
  top: 2px;
  left: 901px;
  width: 1px;
  height: 72px;
`;

const Frame1340 = styled.div`
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

const Frame13371 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Tasks = styled.div`
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1307 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame6 = styled.div`
  ${IbmplexsansNormalPersianIndigo13px}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1341 = styled.div`
  display: flex;
  flex-direction: column;
  height: 461px;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame1408 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 0px 20px;
  position: relative;
  flex: 1;
  align-self: stretch;
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const Frame1420 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const X2023JeddleAllRightsReserved = styled.p`
  ${IbmplexsansNormalChicago13px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const MainWebsite = styled.div`
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Terms = styled.div`
  position: relative;
  align-self: stretch;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default TeacherDashboardMobile;
