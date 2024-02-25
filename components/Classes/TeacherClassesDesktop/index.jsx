import { default as React, default as React } from 'react';
import DropdownMenu from '../../DropdownMenu';
import Buttons from '../Buttons';
import Exemplar from '../ExemplarContainer/index.jsx';
import { createStudentsFrames } from '../TeacherClassesRoot/methods';
import {
  ActiveTaskContainer,
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
  BtnsContainer,
  TaskContainer,
} from './TeacherClassesDesktopStyle.js';
import StyledDropDown from '../../../components2/StyledDropDown/index.jsx';
import QuestionTooltip from '../../../components2/QuestionTooltip/index.jsx';
import questionMark from '../../../static/img/question-mark.svg';
import arrowRight from '../../../static/img/arrowright.svg';
import whiteArrowright from '../../../static/img/arrowright-White.svg';
import TaskCardContainer from '../../TaskCardContainer/index.jsx';
import TaskCard from '../../TaskCard';
import LinkButton from '../../../components2/LinkButton/index.jsx';
import { Tabs, Tab } from '@mui/material';
import { useRef } from 'react';
import { useIsVisible } from './useIsVisible.js';

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
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  return (
    <TopContainer>
      <Frame1422>
        <Frame14221>
          <Frame13121>
            <Title>
              Classes
              <QuestionTooltip
                text={
                  'I am important tooltip here some important message is displayed'
                }
                img={questionMark}
              />
            </Title>
            <TItlePara>Class description will come here...</TItlePara>
          </Frame13121>
          <Frame1306>
            <Tabs
              value={selectedClassIndex}
              onChange={(event, newValue) => {
                setClassId(classes[newValue]?.id);
              }}
              aria-label="Class tabs"
            >
              {classes.map((classItem, index) => (
                <Tab key={index} label={classItem.title} />
              ))}
            </Tabs>
          </Frame1306>
        </Frame14221>
        <MainContainer>
          <LeftContainer>
            <LeftContainerTitle
              style={{ color: useIsVisible(ref1) ? '#7200E0' : '#7b7382' }}
            >
              Active tasks
            </LeftContainerTitle>
            <LeftContainerTitle
              style={{ color: useIsVisible(ref2) ? '#7200E0' : '#7b7382' }}
            >
              Class Statistics
            </LeftContainerTitle>
            <LeftContainerTitle
              style={{ color: useIsVisible(ref3) ? '#7200E0' : '#7b7382' }}
            >
              Student Statistics
            </LeftContainerTitle>
            <LeftContainerTitle
              style={{ color: useIsVisible(ref4) ? '#7200E0' : '#7b7382' }}
            >
              Smart responses
            </LeftContainerTitle>
          </LeftContainer>
          <RightContainer>
            <ActiveTaskContainer ref={ref1}>
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
                <BtnsContainer>
                  <LinkButton
                    link={`#`}
                    label="All Tasks"
                    arrowright={arrowRight}
                    whiteArrowright={whiteArrowright}
                  />
                  <Frame1426>
                    <Buttons link="#tasks/new" />
                  </Frame1426>
                </BtnsContainer>
              </Frame13371>
              <TasksContainer>
                {awaitingSubmissions.map((task) => {
                  return (
                    <TaskContainer key={task.id}>
                      <a
                        key={task.id}
                        href={'#tasks/' + task.id}
                        style={{ width: '100%' }}
                      >
                        <TaskCard key={task.id} task={task} />
                      </a>
                    </TaskContainer>
                  );
                })}
              </TasksContainer>
            </ActiveTaskContainer>
            <ClassStatsFrame ref={ref2}>
              {annotationAnalyticsFrame}
            </ClassStatsFrame>
            <Frame1339 ref={ref3}>
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
            <SharedResponseFrame ref={ref4}>
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
