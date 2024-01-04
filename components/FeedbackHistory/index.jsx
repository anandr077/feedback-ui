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
  ParaContainer,
  Frame1333,
  Frame1333Para,
  Frame1333Star,
} from './style';
import Group1205 from '../TeacherDashboard/Group1205';

function FeedbackHistory() {
  return (
    <>
      <MainContainer>
        <InnerContainer>
          <HeadingAndFilterCon>
            <TopContainer>
              <TitleContainer>
                <Title>
                  Feedback History
                  <TitleImage src="/icons/question-mark.png" />
                </Title>

                <Group1205
                  link={`#giveFeedback`}
                  label="Go Back"
                  arrowleft={'/img/arrowleft.png'}
                />
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
                'What is the moral of the short story The Monkeys Paw?',
                'Forem ipsum dolor sit amet, consectetur adipiscing elit?',
                'Jorem ipsum dolor sit amet, consectetur adipiscing elit?',
                'Borem ipsum dolor sit amet, consectetur adipiscing elit?',
                'Forem ipsum dolor sit amet, consectetur adipiscing elit?',
              ].map((text, index) => (
                <CardContainer>
                  <TextContainer>{text}</TextContainer>
                  <ParaContainer>
                    Norem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. ...
                  </ParaContainer>
                  <Frame1333>
                    <Frame1333Para>Feedback Rating:</Frame1333Para>
                    <Frame1333Star src="/img/Star-filled.png" />
                    <Frame1333Star src="/img/Star-filled.png" />
                    <Frame1333Star src="/img/Star-filled.png" />
                    <Frame1333Star src="/img/Star-filled.png" />
                    <Frame1333Star src="/img/Star-empty.png" />
                  </Frame1333>
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

export default FeedbackHistory;
