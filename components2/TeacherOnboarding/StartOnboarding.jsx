import React from 'react';
import {
  MainContainer,
  Section,
  Title,
  Pages,
  Page,
  PageName,
  PageIcon,
} from './startOnboardingStyle';
import { useNavigate } from 'react-router';
import { welcomeOnboardingPages } from './onboardingContents';

const StartOnboarding = ({ onCloseOnboarding }) => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Section style={{height: '385px'}}>
        <Title>New</Title>
        <Pages>
          {welcomeOnboardingPages.map((page) => (
            <Page
              onClick={() => {
                navigate(page.link), onCloseOnboarding();
              }}
            >
              <PageIcon src={page.icon} />
              <PageName>{page.name}</PageName>
            </Page>
          ))}
        </Pages>
      </Section>
    </MainContainer>
  );
};

export default StartOnboarding;
