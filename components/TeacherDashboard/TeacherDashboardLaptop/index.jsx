import React from 'react';
import styled from 'styled-components';
import { timeFirstFormattedDate } from '../../../dates';
import { getUserName } from '../../../service';
import { teacherHomeHeaderProps } from '../../../utils/headerProps';
import TaskCard from '../../TaskCard';
import Frame12842 from '../Frame12842';
import Frame13124 from '../Frame13124';
import Frame14072 from '../Frame14072';
import Group1205 from '../Group1205';
import { IbmplexsansMediumRiverBed24px } from '../styledMixins';
import {
  DashboardIbmplexsansNormalWhite20px,
  DashboardIbmplexsansBoldWhite72px,
} from '../../../styledMixins';
import './TeacherDashboardLaptop.css';

function TeacherDashboardLaptop(props) {
  const {
    notifications,
    classes,
    drafts,
    awaitingSubmissions,
    feedbacks,
    keepOrganizedWitho2,
    maskGroup,
    line172,
    recentActivity,
    line173,
    group1205Props,
    frame131241Props,
    frame14072Props,
  } = props;
  const userName = getUserName();
  return (
    <div className="teacher-dashboard-lptp screen">
      <Frame1419>
        <Frame1418>
          <Frame1312>
            <Frame1342>
              <Frame1341>
                <KeepOrganizedWitho>Welcome, {userName}</KeepOrganizedWitho>
                <KeepOrganizedWitho1>{keepOrganizedWitho2}</KeepOrganizedWitho1>
              </Frame1341>
              <MaskGroup src={maskGroup} alt="Mask Group" />
            </Frame1342>
          </Frame1312>
        </Frame1418>
        <Frame1417>
          <Frame1339>
            <Frame1337>
              <Classes>Classes</Classes>
              <Group1205
                link="#classes"
                label="VIEW ALL"
                arrowright={group1205Props.arrowright}
              />
            </Frame1337>
            <Line17 src={line172} alt="Line 17" />
            <Frame1336>{classesFrames(classes, frame131241Props)}</Frame1336>
          </Frame1339>
          <Frame1416>
            <Frame1340>
              <Frame1337>
                <Classes>Tasks</Classes>
                <Frame14072
                  showCreateNew={true}
                  iconsaxLinearAdd={frame14072Props.iconsaxLinearAdd}
                  line17={frame14072Props.line17}
                  arrowright={frame14072Props.arrowright}
                />
              </Frame1337>
              <Line18 src={line172} alt="Line 17" />
              <Frame1307>
                <Frame12842 title={'DRAFTS'} count={drafts.length} />
                <Frame12842
                  title={'ACTIVE'}
                  count={awaitingSubmissions.length}
                />
                <Frame12842 title={'CLOSED'} count={feedbacks.length} />
              </Frame1307>
            </Frame1340>
            <Frame13411>
              <Frame1337>
                <Classes>{recentActivity}</Classes>
              </Frame1337>
              <Line18 src={line173} alt="Line 17" />
              {recentActivitiesFrame(notifications)}
            </Frame13411>
          </Frame1416>
        </Frame1417>
      </Frame1419>
    </div>
  );
}
function recentActivitiesFrame(notifications) {
  const recentActivitiesFrames = notifications.map((notification) => {
    const task = {
      link: notification.link,
      title: notification.title,
      classTitle:
      (notification.classTitle ? (notification.classTitle +
        ' | at '):'') +
        timeFirstFormattedDate(notification.dueAt),
    };
    return <TaskCard task={task} />;
  });
  return <Frame1408>{recentActivitiesFrames}</Frame1408>;
}
function classesFrames(classes, frame131241Props) {
  if (classes.length > 0) {
    return (
      <>
        {classes.map((clazz) => {
          return (
            <Frame13124
              key={'frame13124_' + clazz.id}
              clazz={clazz}
              x12Engadv3={frame131241Props.x12Engadv3}
              frame1407Props={frame131241Props.frame1407Props}
              frame1284Props={frame131241Props.frame1284Props}
              frame1283Props={frame131241Props.frame1283Props}
              frame1282Props={frame131241Props.frame1282Props}
            />
          );
        })}
      </>
    );
  }
  return <></>;
}

const Frame1419 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  position: relative;
  align-self: stretch;
`;

const Frame1418 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  position: relative;
  align-self: stretch;
`;

const Frame1312 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
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

const Frame1417 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const Frame1339 = styled.div`
  display: flex;
  flex-direction: column;
  height: 685px;
  width: 60%;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  flex: 1;
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
`;

const Classes = styled.div`
  ${IbmplexsansMediumRiverBed24px}
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
  min-width: 100%;
  max-width: 100%;
  height: auto;
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
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const Frame1416 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  position: relative;
  flex: 1;
`;

const Frame1340 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 10px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame1307 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  position: relative;
  align-self: stretch;
`;

const Frame13411 = styled.div`
  display: flex;
  flex-direction: column;
  height: 473px;
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

export default TeacherDashboardLaptop;
