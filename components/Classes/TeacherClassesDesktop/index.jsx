import { default as React, default as React } from 'react';
import DropdownMenu from '../../DropdownMenu';
import Buttons from '../Buttons';
import Exemplar from '../ExemplarContainer/index.jsx';
import { createStudentsFrames } from '../TeacherClassesRoot/methods';
import './TeacherClassesDesktop.css';
import {
  ClassStatsFrame,
  Frame1306,
  Frame13121,
  Frame1336,
  Frame13371,
  Frame1339,
  Frame1416,
  Frame1417,
  Frame1422,
  Frame14221,
  Frame1426,
  LeftContainer,
  LeftContainerTitle,
  Line17,
  MainContainer,
  RightContainer,
  SharedResponseFrame,
  Students,
  TasksContainer,
  Title,
  TItlePara,
  TopContainer,
} from './TeacherClassesDesktopStyle.js';
import StyledDropDown from '../../../components2/StyledDropDown/index.jsx';
import QuestionTooltip from '../../../components2/QuestionTooltip/index.jsx';
import questionMark from '../../../static/img/question-mark.svg';
import TaskCardContainer from '../../TaskCardContainer/index.jsx';
import TaskCard from '../../TaskCard';

function TeacherClassesDesktop(props) {
  const {
    drafts,
    awaitingSubmissions,
    feedbacks,
    classes,
    setClassId,
    modelResponses,
    setPublishActionCompleted,
    students,
    selectedClassIndex,
    annotationAnalyticsFrame,
    title,
    headerProps,
    x12Engadv3,
    frame12841,
    xclass,
    line171,
    line176,
    x2021JeddleAllRightsReserved,
  } = props;
  console.log('awaitingSubmissions', awaitingSubmissions);

  return (
    <TopContainer>
      <Frame1422>
        <Frame13121>
          <Title>
            {title}

            <QuestionTooltip
              text={
                'I am important tooltip here some important message is displayed'
              }
              img={questionMark}
            />
          </Title>
          <TItlePara>Class description will come here...</TItlePara>
        </Frame13121>
        <Frame14221>
          <Frame1306>
            {classes.length != 0 && (
              <StyledDropDown
                menuItems={classes}
                onItemSelected={(item) => {
                  setClassId(item?.id);
                }}
                selectedIndex={selectedClassIndex}
              />
            )}
          </Frame1306>
          <Frame1426>
            <Buttons link="#tasks/new" />
          </Frame1426>
        </Frame14221>
        <MainContainer>
          <LeftContainer>
            <LeftContainerTitle>Active tasks</LeftContainerTitle>
            <LeftContainerTitle>Class Statistics</LeftContainerTitle>
            <LeftContainerTitle>Student Statistics</LeftContainerTitle>
            <LeftContainerTitle>Smart responses</LeftContainerTitle>
          </LeftContainer>
          <RightContainer>
            <div>
              <Frame13371>
                <Students>
                  <QuestionTooltip
                    text={
                      'I am important tooltip here some important message is displayed'
                    }
                    img={questionMark}
                  />
                  Active Tasks
                </Students>
              </Frame13371>
              <TasksContainer>
                {awaitingSubmissions.map((task) => (
                  <div key={task.id} style={{ flex: '50%', padding: '10px' }}>
                    <a key={task.id} href={task.link}>
                      <TaskCard key={task.id} task={task} />
                    </a>
                  </div>
                ))}
              </TasksContainer>
            </div>
            <ClassStatsFrame>{annotationAnalyticsFrame}</ClassStatsFrame>
            <Frame1339>
              <Frame13371>
                <Students>
                  Student Statistics
                  <QuestionTooltip
                    text={
                      'I am important tooltip here some important message is displayed'
                    }
                    img={questionMark}
                  />
                </Students>
              </Frame13371>
              <Frame1336>{createStudentsFrames(students)}</Frame1336>
            </Frame1339>
            <SharedResponseFrame>
              <Exemplar
                modelResponses={modelResponses}
                setPublishActionCompleted={setPublishActionCompleted}
              />
            </SharedResponseFrame>
          </RightContainer>
        </MainContainer>
      </Frame1422>
    </TopContainer>
  );
}
export default TeacherClassesDesktop;
