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
  SortContainer,
  SortButton,
  SortButtonText,
} from './style';
import FeedbackDataComponent from './FeedbackDataComponent';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import StyledDropDown from '../../components2/StyledDropDown';
import { useQuery } from '@tanstack/react-query';
import {
  getCommunityTasks,
  getGiveFeedbackCompletedTasks,
} from '../../service';
import Loader from '../Loader';
import FilterSquare from '../../static/img/filter-square.svg';
import SortSquare from '../../static/img/sort-square.svg';
import questionMark from '../../static/img/question-mark.svg';
import arrowRight from '../../static/img/arrowright.svg';
import arrowLeft from '../../static/img/arrowleft.svg';
import LinkButton from '../../components2/LinkButton';
import GiveFeedbackDropDown from './GiveFeedbackDropDown';

function GiveFeedback() {
  const [showHistory, setShowHistory] = React.useState(false);
  const [dropdownSample, setDropdownSample] = React.useState([
    {
      id: '0',
      title: 'Select',
    },
    {
      id: '1',
      title: 'Teluguhhhhh',
    },
    {
      id: '2',
      title: 'Englidh',
    },
  ]);
  const [communityTasks, setCommunityTasks] = React.useState([]);
  const [giveFeedbackCompletedTasks, setGiveFeedbackCompletedTasks] =
    React.useState([]);

  const communityTasksQuery = useQuery({
    queryKey: ['communityTasks'],
    queryFn: async () => {
      const result = await getCommunityTasks();
      return result;
    },
    staleTime: 3600000,
  });
  const giveFeedbackCompletedTasksQuery = useQuery({
    queryKey: ['GiveFeedbackCompletedTasks'],
    queryFn: async () => {
      const result = await getGiveFeedbackCompletedTasks();
      return result;
    },
    staleTime: 3600000,
  });

  React.useEffect(() => {
    if (communityTasksQuery.data) {
      console.log('Community tasks', communityTasksQuery.data);
      setCommunityTasks(communityTasksQuery.data);
    }
    if (giveFeedbackCompletedTasksQuery.data) {
      setGiveFeedbackCompletedTasks(giveFeedbackCompletedTasksQuery.data);
    }
  }, [communityTasksQuery]);

  if (
    communityTasksQuery.isLoading ||
    giveFeedbackCompletedTasksQuery.isLoading
  ) {
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
                    <LinkButton
                      link={`#giveFeedback`}
                      label="Go Back"
                      arrowleft={arrowLeft}
                    />
                  ) : (
                    <LinkButton
                      link={`#feedbackHistory`}
                      label="Feedback History"
                      arrowright={arrowRight}
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
              <GiveFeedbackDropDown
                showAvatars={false}
                search={false}
                selectedIndex={selectedItemIndex}
                menuItems={dropdownSample}
              />
              <GiveFeedbackDropDown
                showAvatars={false}
                search={false}
                selectedIndex={selectedItemIndex}
                menuItems={dropdownSample}
              />
              <GiveFeedbackDropDown
                showAvatars={false}
                search={false}
                selectedIndex={selectedItemIndex}
                menuItems={dropdownSample}
              />
              <GiveFeedbackDropDown
                showAvatars={false}
                search={false}
                selectedIndex={selectedItemIndex}
                menuItems={dropdownSample}
              />
              <SortContainer>
                <Frame5086>
                  <Frame5086Img src={SortSquare} />
                  <Frame5086Text>Sort by:</Frame5086Text>
                </Frame5086>
                <SortButton>
                  <SortButtonText>New to Old</SortButtonText>
                </SortButton>
                <SortButton>
                  <SortButtonText>Old to New</SortButtonText>
                </SortButton>
              </SortContainer>
            </FilterAndSortContainer>
          </HeadingAndFilterCon>
          <ContentContainer>
            <LeftContentContainer>
              <FeedbackDataComponent
                feedbackData={
                  pathName.includes('/feedbackHistory')
                    ? giveFeedbackCompletedTasks
                    : communityTasks
                }
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
