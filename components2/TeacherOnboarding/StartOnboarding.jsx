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
import { useNotifications } from '../../components/state/hooks';
import Loader from '../../components/Loader';
import { welcomeOnboardingPages } from './onboardingContents';

const StartOnboarding = ({ onCloseOnboarding }) => {
  const history = useHistory();
  const { data: notifications, isLoadingdata: isLoading } = useNotifications(
    (id = null),
    (condition = true),
    (time = 300000)
  );

  
  if (isLoading) {
    return <Loader />;
  }

  const recentNotifications = notifications
    .sort((a, b) => new Date(b.dueAt) - new Date(a.dueAt))
    .slice(0, 4);

  return (
    <MainContainer>
      <Section>
        <Title>New</Title>
        <Pages>
          {welcomeOnboardingPages.map((page) => (
            <Page
              onClick={() => {
                history.push(page.link), onCloseOnboarding();
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
          {recentNotifications.map((notification) => {
            return (
              <TaskDetail>
                <TaskTitle>{notification.title}</TaskTitle>
                <div onClick={onCloseOnboarding}>
                  <LinkButton
                    link={notification.link}
                    label="View details"
                    arrowright={arrowRight}
                    whiteArrowright={whiteArrowright}
                    notification={true}
                  />
                </div>
              </TaskDetail>
            );
          })}
        </RecentTasks>
      </RecentSection>
    </MainContainer>
  );
};

export default StartOnboarding;
