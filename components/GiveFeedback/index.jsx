import React from 'react';
import {
  MainContainer,
  InnerContainer,
  Title,
  TitleContainer,
  TopContainer,
  TitleImage,
  HeadingAndFilterCon,
  HeadingLine,
  FilterContainer,
  ContentContainer,
  LeftContentContainer,
  RightContentContainer,
  CardContainer,
  TextContainer,
  IconsContainer,
  IconContainer,
  CorrectIcon,
  CrossIcon,
  Frame5111,
  Frame5087,
  Frame5088,
  Frame1353,
  Frame5088Para,
  Frame5088Img,
  Frame5111Para,
  Frame5042,
  Frame5042Para1,
  Frame5042Para2,
  Frame5114,
  Frame5112,
  Frame5112para,
  ConnectContainer,
} from './style';
import Group1205 from '../TeacherDashboard/Group1205';
import FeedbackDataComponent from './FeedbackDataComponent';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';

function GiveFeedback() {
  const [feedbackData, setFeedbackData] = React.useState([
    'What is the moral of the short story The Monkey’s Paw?',
    'Forem ipsum dolor sit amet, consectetur adipiscing elit?',
    'Jorem ipsum dolor sit amet, consectetur adipiscing elit?',
    'Borem ipsum dolor sit amet, consectetur adipiscing elit?',
    'Forem ipsum dolor sit amet, consectetur adipiscing elit?',
  ]);
  const [showHistory, setShowHistory] = React.useState(false);
  const location = useLocation();
  const pathName = location.pathname;
  
  return (
    <>
      <MainContainer>
        <InnerContainer>
          <HeadingAndFilterCon>
            <TopContainer>
              <TitleContainer>
                <Title>
                  
                  {pathName.includes('/feedbackHistory')
                    ? 'Feedback History'
                    : 'Give Feedback'}
                  <TitleImage src="/icons/question-mark.png" />
                </Title>
                <ConnectContainer>
                  {pathName.includes('/feedbackHistory') ? (
                    <Group1205
                      link={`#giveFeedback`}
                      label="Go Back"
                      arrowleft={'/img/arrowleft.png'}
                    />
                  ) : (
                    <Group1205
                      link={`#feedbackHistory`}
                      label="Feedback History"
                      arrowright={'/img/arrowright@2x.png'}
                    />
                  )}
                </ConnectContainer>
              </TitleContainer>
              <HeadingLine>
                Feedback requests received from community members
              </HeadingLine>
            </TopContainer>
            <FilterContainer>Filter</FilterContainer>
          </HeadingAndFilterCon>
          <ContentContainer>
            <LeftContentContainer>
              <FeedbackDataComponent feedbackData={feedbackData} pathName={pathName} />
             
            </LeftContentContainer>
            {/* <RightContentContainer>
              <Frame5111>
                <Frame1353>
                  <Frame5087 src="/icons/levelIcon.png" />
                  <Frame5088>
                    <Frame5088Para>Level 1</Frame5088Para>
                    <Frame5088Img src="/icons/question-mark.png" />
                  </Frame5088>
                </Frame1353>
                <Frame5111Para>20 documents reviewed</Frame5111Para>
                <Frame5042>
                  <Frame5042Para1>95%</Frame5042Para1>
                  <Frame5042Para2>
                    of students found your feedback helpful
                  </Frame5042Para2>
                </Frame5042>
              </Frame5111>
              <Frame5114>
                <Frame5112>
                  <Frame5112para>
                    Help 5 more students to level up!
                  </Frame5112para>
                </Frame5112>
              </Frame5114>
            </RightContentContainer> */}
          </ContentContainer>
        </InnerContainer>
      </MainContainer>
    </>
  );
}

export default GiveFeedback;
