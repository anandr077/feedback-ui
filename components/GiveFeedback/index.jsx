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
  FilterAndSortContainer,
  Frame5086,
  Frame5086Img,
  Frame5086Text,
} from './style';
import Group1205 from '../TeacherDashboard/Group1205';
import FeedbackDataComponent from './FeedbackDataComponent';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import StyledDropDown from '../../components2/StyledDropDown';
import { useQuery } from '@tanstack/react-query';
import { getCommunityTasks } from '../../service';
import Loader from '../Loader';
import FilterSquare from '../../static/img/filter-square.png';
import questionMark from '../../static/img/question-mark.png';

function GiveFeedback() {
  const [feedbackData, setFeedbackData] = React.useState([
    'What is the moral of the short story The Monkey’s Paw?',
    'Forem ipsum dolor sit amet, consectetur adipiscing elit?',
    'Jorem ipsum dolor sit amet, consectetur adipiscing elit?',
    'Borem ipsum dolor sit amet, consectetur adipiscing elit?',
    'Forem ipsum dolor sit amet, consectetur adipiscing elit?',
  ]);
  const [showHistory, setShowHistory] = React.useState(false);
  const [dropdownSample, setDropdownSample] = React.useState([
    {
      id: '0',
      title: 'Select',
    },
    {
      id: '1',
      title: 'Telugu',
    },
    {
      id: '2',
      title: 'Englidh',
    },
  ]);

  const communityTasksQuery = useQuery({
    queryKey: ['communityTasks'],
    queryFn: async () => {
      const result = await getCommunityTasks();
      return result;
    },
    staleTime: 3600000,
  });

  React.useEffect(() => {
    if (communityTasksQuery.data) {
      console.log('Community', communityTasksQuery.data);
    }
  }, [communityTasksQuery]);

  if (communityTasksQuery.isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  const selectedItemIndex = dropdownSample.findIndex((selectSubject) => {
    return selectSubject.id === 'id';
  });
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
                  <TitleImage src={questionMark} />
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
            <FilterAndSortContainer>
              <Frame5086>
                <Frame5086Img src={FilterSquare} />
                <Frame5086Text>Filters:</Frame5086Text>
              </Frame5086>
              <StyledDropDown
                showAvatars={false}
                search={false}
                selectedIndex={selectedItemIndex}
                menuItems={dropdownSample}
              />
            </FilterAndSortContainer>
          </HeadingAndFilterCon>
          <ContentContainer>
            <LeftContentContainer>
              <FeedbackDataComponent
                feedbackData={feedbackData}
                pathName={pathName}
              />
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
