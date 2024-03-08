import { default as React, default as React } from 'react';
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
  Frame1422,
  Frame14221,
  Frame1426,
  LeftContainer,
  LeftContainerTitle,
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
import QuestionTooltip from '../../../components2/QuestionTooltip/index.jsx';
import questionMark from '../../../static/img/question-mark.svg';
import arrowRight from '../../../static/img/arrowright.svg';
import whiteArrowright from '../../../static/img/arrowright-White.svg';
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

  const handleScroll = (ref) => {
    var elementPosition = ref.current.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - 100;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <TopContainer>
      <Frame1422>
        <Frame14221>
          <Frame13121>
            <Title>
              Classes
              <QuestionTooltip
                text={'View detailed analytics for each class and student'}
                img={questionMark}
              />
            </Title>
            <TItlePara>
              Select a class to view the latest insights on their work
            </TItlePara>
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
              onClick={() => handleScroll(ref1)}
              style={{ color: useIsVisible(ref1) ? '#7200E0' : '#7b7382' }}
            >
              Active Tasks
            </LeftContainerTitle>
            <LeftContainerTitle
              onClick={() => handleScroll(ref2)}
              style={{ color: useIsVisible(ref2) ? '#7200E0' : '#7b7382' }}
            >
              Class Insights
            </LeftContainerTitle>
            <LeftContainerTitle
              onClick={() => handleScroll(ref3)}
              style={{ color: useIsVisible(ref3) ? '#7200E0' : '#7b7382' }}
            >
              Students
            </LeftContainerTitle>
            <LeftContainerTitle
              onClick={() => handleScroll(ref4)}
              style={{ color: useIsVisible(ref4) ? '#7200E0' : '#7b7382' }}
            >
              Shared Responses
            </LeftContainerTitle>
          </LeftContainer>
          <RightContainer>
            <ActiveTaskContainer ref={ref1}>
              <Frame13371>
                <Students>
                  Active Tasks
                  <QuestionTooltip
                    text={'View your most recent tasks for this class'}
                    img={questionMark}
                  />
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
                        <TaskCard
                          key={task.id}
                          task={task}
                          showThreeDots={false}
                        />
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
                  Student
                  <QuestionTooltip
                    text={'See how well each student is performing'}
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
