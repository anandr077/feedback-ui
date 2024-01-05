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

function GiveFeedback() {
  return (
    <>
      <MainContainer>
        <InnerContainer>
          <HeadingAndFilterCon>
            <TopContainer>
              <TitleContainer>
                <Title>
                  Give Feedback
                  <TitleImage src="/icons/question-mark.png" />
                </Title>
                <ConnectContainer>
                  <Group1205
                    link={`#feedbackHistory`}
                    label="Feedback History"
                    arrowright={'/img/arrowright@2x.png'}
                  />
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
              {[
                'What is the moral of the short story The Monkey’s Paw?',
                'Forem ipsum dolor sit amet, consectetur adipiscing elit?',
                'Jorem ipsum dolor sit amet, consectetur adipiscing elit?',
                'Borem ipsum dolor sit amet, consectetur adipiscing elit?',
                'Forem ipsum dolor sit amet, consectetur adipiscing elit?',
              ].map((text, index) => (
                <CardContainer>
                  <TextContainer>{text}</TextContainer>
                  <IconsContainer>
                    <IconContainer>
                      <CorrectIcon src="/icons/correct.svg" alt="" />
                    </IconContainer>
                    <IconContainer>
                      <CrossIcon src="/icons/wrong.svg" alt="" />
                    </IconContainer>
                  </IconsContainer>
                </CardContainer>
              ))}
            </LeftContentContainer>
            <RightContentContainer>
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
            </RightContentContainer>
          </ContentContainer>
        </InnerContainer>
      </MainContainer>
    </>
  );
}

export default GiveFeedback;
