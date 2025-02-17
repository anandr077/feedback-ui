import React from 'react';
import {
  MainContainer,
  Section,
  Title,
  Pages,
  Page,
  PageName,
  PageIcon,
  RecentSection,
  RecentTasks,
  TaskDetail,
  TaskTitle,
} from './startOnboardingStyle';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import LinkButton from '../LinkButton';
import arrowRight from '../../static/img/arrowright.svg';
import whiteArrowright from '../../static/img/arrowright-White.svg';

const pages = [
  {
    name: 'Task',
    link: '/tasks',
    icon: '/img/taskIcon.svg',
  },
  {
    name: 'JeddAI Draft',
    link: '/getFeedback',
    icon: '/img/jedaiIcon.svg',
  },
  {
    name: 'Marking Template',
    link: '/settings',
    icon: '/img/rubrics2.svg',
  },
  {
    name: 'Comment Bank',
    link: '/commentbanks',
    icon: '/img/commentbankIcon.svg',
  },
];

const tasks = [
  {
    name: 'Darrell(Instructor) from C programming mastery has sent you a peer-review request for data structures assignment. This is the task',
  },
  { name: 'This is the task' },
  { name: 'This is the task' },
  { name: 'This is the task' },
  ,
];

const StartOnboarding = ({ onCloseOnboarding }) => {
  const history = useHistory();
  return (
    <MainContainer>
      <Section>
        <Title>New</Title>
        <Pages>
          {pages.map((page) => (
            <Page
              onClick={() => {
                history.push(page.link), 
                onCloseOnboarding();
              }}
            >
              <PageIcon src={page.icon} />
              <PageName>{page.name}</PageName>
            </Page>
          ))}
        </Pages>
      </Section>
      <RecentSection>
        <Title>Recent</Title>
        <RecentTasks>
          {tasks.map((task) => {
            return (
              <TaskDetail>
                <TaskTitle>{task.name}</TaskTitle>
                <LinkButton
                  link={'/tasks'}
                  label="View details"
                  arrowright={arrowRight}
                  whiteArrowright={whiteArrowright}
                  notification={true}
                />
              </TaskDetail>
            );
          })}
        </RecentTasks>
      </RecentSection>
    </MainContainer>
  );
};

export default StartOnboarding;
