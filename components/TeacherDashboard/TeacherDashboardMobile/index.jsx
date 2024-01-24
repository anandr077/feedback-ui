import React from 'react';
import { getUserName } from '../../../userLocalDetails';
import { teacherHomeHeaderProps } from '../../../utils/headerProps';
import HeaderSmall from '../../HeaderSmall';
import Frame12842 from '../Frame12842';
import Group1205 from '../Group1205';
import { 
  Frame1312,
  Frame13121,
  Frame13122,
  X12ENGADV3,
  Frame1419,
  Frame1418,
  Frame1203,
  Frame1348,
  KeepOrganizedWitho,
  KeepOrganizedWitho1,
  Frame1417,
  Frame1339,
  Frame1337, 
  ButtonGroup,
  Classes,
  Line17,
  Frame1336,
  Frame1307,
  Frame1341,
  Frame1408 
} from './style'

import './TeacherDashboardMobile.css';
import { teacherHomeHeaderProps } from '../../../utils/headerProps';
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
function createAssignmentsFrame(group1205Props, line172, stats) {
  return (
    <Frame1339>
      <Frame1337>
        <Classes>Tasks</Classes>

        <ButtonGroup>
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
        </ButtonGroup>
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


export default TeacherDashboardMobile;
