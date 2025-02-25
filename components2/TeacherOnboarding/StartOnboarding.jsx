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
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { welcomeOnboardingPages } from './onboardingContents';

const StartOnboarding = ({ onCloseOnboarding }) => {
  const history = useHistory();

  return (
    <MainContainer>
      <Section style={{height: '385px'}}>
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
    </MainContainer>
  );
};

export default StartOnboarding;
