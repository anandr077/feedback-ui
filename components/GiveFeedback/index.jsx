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
  PopupContainer,
  FeedbackButtonArrow,
  Frame5086PopUp,
  Frame5086PopUpTitle,
  Frame5086PopUpBody,
  SortPopUpBody,
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
import CloseCircle from '../../static/img/closecircle.svg';
import { isMobileView } from '../ReactiveRender';
import { Dialog } from '@mui/material';
import Cookies from 'js-cookie';
import whiteArrowright from '../../static/img/arrowright-White.svg';
import whiteArrowleft from '../../static/img/arrowleftwhite.svg';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import RoundedDropDown from '../../components2/RoundedDropDown';
import QuestionTooltip from '../../components2/QuestionTooltip';

function GiveFeedback() {
  const [showHistory, setShowHistory] = React.useState(false);

  const [selectedYear, setSelectedYear] = React.useState('');
  const [selectedSubject, setSelectedSubject] = React.useState('');
  const [selectedState, setSelectedState] = React.useState('');
  const [selectedDocumentType, setSelectedDocumentType] = React.useState('');

  const [communityTasks, setCommunityTasks] = React.useState([]);
  const [giveFeedbackCompletedTasks, setGiveFeedbackCompletedTasks] =
    React.useState([]);

  const [sortData, setSortData] = React.useState(true);
  const mobileView = isMobileView();
  const [isShowFilterPopUp, setShowFilterPopUp] = React.useState(false);
  const [isShowSortPopUp, setShowSortPopUp] = React.useState(false);
  const location = useLocation();
  const pathName = location.pathname;

  React.useEffect(() => {
    setSelectedYear('');
    setSelectedSubject('');
    setSelectedState('');
    setSelectedDocumentType('');
    setSortData(true);
  }, [location.pathname]);

  const dropDownData = (type) => {
    const groupedItems = groupItemsByAsWeRequired(
      pathName.includes('/feedbackHistory')
        ? giveFeedbackCompletedTasks
        : communityTasks,
      type
    );

    let menuItems = Object.keys(groupedItems);
    if (type == 'year' && !menuItems.includes(Cookies.get('year'))) {
      menuItems.push(Cookies.get('year'));
    }
    if (type == 'state' && !menuItems.includes(Cookies.get('state'))) {
      menuItems.push(Cookies.get('state'));
    }
    return menuItems;
  };

  const filteredData = (tasks) => {
    const filteredTasks = tasks.filter(
      (task) =>
        (!selectedYear || task.year === selectedYear) &&
        (!selectedSubject || task.subject === selectedSubject) &&
        (!selectedState || task.state === selectedState) &&
        (!selectedDocumentType || task.documentType === selectedDocumentType)
    );

    const sortedTasks = filteredTasks.sort((a, b) => {
      const dateA = new Date(a.requestedAt).getTime();
      const dateB = new Date(b.requestedAt).getTime();
      return sortData ? dateB - dateA : dateA - dateB;
    });

    return sortedTasks;
  };

  const setSelectedValue = (type, selectValue) => {
    if (type === 'state') {
      setSelectedState(selectValue);
    }
    if (type === 'year') {
      setSelectedYear(selectValue);
    }
    if (type === 'subject') {
      setSelectedSubject(selectValue);
    }
    if (type === 'documentType') {
      setSelectedDocumentType(selectValue);
    }
  };

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
      setCommunityTasks(communityTasksQuery.data);
    }
    if (giveFeedbackCompletedTasksQuery.data) {
      setGiveFeedbackCompletedTasks(giveFeedbackCompletedTasksQuery.data);
    }
  }, [communityTasksQuery, giveFeedbackCompletedTasksQuery]);

  let statesData = ['NSW', 'VIC', 'QLD', 'NT', 'SA', 'TAS', 'WA'];
  let yearsData = ['12', '11', '10', '9', '8', '7'];
  let subjectData = ['English'];
  let taskTypeData = [
    'Analytical',
    'Imaginative',
    'Discursive',
    'Persuasive',
    'Reflective',
  ];
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

  const FilterPopContainer = ({ isShowFilterPopUp, setShowFilterPopUp }) => {
    return (
      <Dialog open={isShowFilterPopUp}>
        {isShowFilterPopUp && (
          <PopupContainer>
            <Frame5086PopUp>
              <Frame5086PopUpTitle>
                <Frame5086Img src={FilterSquare} />
                <Frame5086Text>Filters:</Frame5086Text>
              </Frame5086PopUpTitle>
              <FeedbackButtonArrow
                style={{ cursor: 'pointer' }}
                src={CloseCircle}
                onClick={() => setShowFilterPopUp(false)}
              />
            </Frame5086PopUp>
            <Frame5086PopUpBody>
              <RoundedDropDown
                search={false}
                type={'state'}
                selectedIndex={setSelectedValue}
                menuItems={statesData}
                fullWidth={true}
              />
            </Frame5086PopUpBody>
            <Frame5086PopUpBody>
              <RoundedDropDown
                search={false}
                selectedIndex={setSelectedValue}
                menuItems={yearsData}
                type={'year'}
                fullWidth={true}
              />
            </Frame5086PopUpBody>
            <Frame5086PopUpBody>
              <RoundedDropDown
                search={false}
                selectedIndex={setSelectedValue}
                menuItems={subjectData}
                type={'subject'}
                fullWidth={true}
              />
            </Frame5086PopUpBody>
            <Frame5086PopUpBody>
              <RoundedDropDown
                search={false}
                selectedIndex={setSelectedValue}
                menuItems={taskTypeData}
                type={'documentType'}
                fullWidth={true}
              />
            </Frame5086PopUpBody>
          </PopupContainer>
        )}
      </Dialog>
    );
  };
  const SortPopContainer = ({ isShowSortPopUp, setShowSortPopUp }) => {
    return (
      <Dialog open={isShowSortPopUp}>
        {isShowSortPopUp && (
          <PopupContainer>
            <Frame5086PopUp>
              <Frame5086PopUpTitle>
                <Frame5086Img src={SortSquare} />
                <Frame5086Text>Sort by:</Frame5086Text>
              </Frame5086PopUpTitle>
              <FeedbackButtonArrow
                style={{ cursor: 'pointer' }}
                src={CloseCircle}
                onClick={() => setShowSortPopUp(false)}
              />
            </Frame5086PopUp>
            <SortPopUpBody>
              <SortButton
                style={{ backgroundColor: sortData ? '#51009F' : '' }}
                onClick={() => setSortData(true)}
              >
                <SortButtonText style={{ color: sortData ? '#FFFFFF' : '' }}>
                  New to Old
                </SortButtonText>
              </SortButton>
              <SortButton
                style={{ backgroundColor: !sortData ? '#51009F' : '' }}
                onClick={() => setSortData(false)}
              >
                <SortButtonText style={{ color: !sortData ? '#FFFFFF' : '' }}>
                  Old to New
                </SortButtonText>
              </SortButton>
            </SortPopUpBody>
          </PopupContainer>
        )}
      </Dialog>
    );
  };

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
                  <QuestionTooltip
                    text={
                      pathName.includes('/feedbackHistory')
                        ? 'This is a record of the feedback that you have provided to other students in the past' 
                        : 'Help other students who have requested feedback from the community'
                    }
                    img={questionMark}
                  />
                </Title>
                <ConnectContainer>
                  {pathName.includes('/feedbackHistory') ? (
                    <LinkButton
                      link={`#giveFeedback`}
                      label="Go Back"
                      arrowleft={arrowLeft}
                      whiteArrowleft={whiteArrowleft}
                    />
                  ) : (
                    <LinkButton
                      link={`#feedbackHistory`}
                      label="Feedback History"
                      arrowright={arrowRight}
                      whiteArrowright={whiteArrowright}
                    />
                  )}
                </ConnectContainer>
              </TitleContainer>
              <HeadingLine>
                {pathName.includes('/feedbackHistory')
                  ? 'View all of the feedback that you have provided to others'
                  : "By providing other students with feedback, you're more likely to get feedback on your own work"}
              </HeadingLine>
            </TopContainer>
            {!mobileView && (
              <FilterAndSortContainer>
                <FilterContainer>
                  <Frame5086
                    onClick={
                      mobileView
                        ? () => setShowFilterPopUp(!isShowFilterPopUp)
                        : undefined
                    }
                  >
                    <Frame5086Img src={FilterSquare} />
                    <Frame5086Text>Filters {!mobileView && ':'}</Frame5086Text>
                  </Frame5086>

                  {!mobileView ? (
                    <>
                      <RoundedDropDown
                        search={false}
                        type={'state'}
                        selectedIndex={setSelectedValue}
                        menuItems={statesData}
                        width={90}
                      />
                      <RoundedDropDown
                        search={false}
                        selectedIndex={setSelectedValue}
                        menuItems={yearsData}
                        type={'year'}
                        width={90}
                      />
                      <RoundedDropDown
                        search={false}
                        selectedIndex={setSelectedValue}
                        menuItems={subjectData}
                        type={'subject'}
                        width={110}
                      />
                      <RoundedDropDown
                        search={false}
                        selectedIndex={setSelectedValue}
                        menuItems={taskTypeData}
                        type={'documentType'}
                        width={130}
                      />
                    </>
                  ) : (
                    <></>
                  )}
                  <FilterPopContainer
                    isShowFilterPopUp={isShowFilterPopUp}
                    setShowFilterPopUp={setShowFilterPopUp}
                  />
                </FilterContainer>
                <SortContainer>
                  <Frame5086
                    onClick={
                      mobileView
                        ? () => setShowSortPopUp(!isShowSortPopUp)
                        : undefined
                    }
                  >
                    <Frame5086Img src={SortSquare} />
                    <Frame5086Text>Sort by {!mobileView && ':'}</Frame5086Text>
                  </Frame5086>
                  {!mobileView ? (
                    <>
                      <SortButton
                        style={{
                          backgroundColor: sortData ? '#51009F' : '',
                          border: '1px solid #8E33E6',
                          padding: '11.5px 20px',
                        }}
                        onClick={() => setSortData(true)}
                      >
                        <SortButtonText
                          style={{ color: sortData ? '#FFFFFF' : '' }}
                        >
                          New to Old
                        </SortButtonText>
                      </SortButton>
                      <SortButton
                        style={{
                          backgroundColor: !sortData ? '#51009F' : '',
                          border: '1px solid #a6a6a6',
                        }}
                        onClick={() => setSortData(false)}
                      >
                        <SortButtonText
                          style={{ color: !sortData ? '#FFFFFF' : '' }}
                        >
                          Old to New
                        </SortButtonText>
                      </SortButton>
                    </>
                  ) : (
                    <></>
                  )}
                  <SortPopContainer
                    isShowSortPopUp={isShowSortPopUp}
                    setShowSortPopUp={setShowSortPopUp}
                  />
                </SortContainer>
              </FilterAndSortContainer>
            )}
          </HeadingAndFilterCon>
          <ContentContainer>
            <LeftContentContainer>
              <FeedbackDataComponent
                feedbackData={
                  pathName.includes('/feedbackHistory')
                    ? filteredData(giveFeedbackCompletedTasks)
                    : filteredData(communityTasks)
                }
                pathName={pathName}
              />
            </LeftContentContainer>
          </ContentContainer>
        </InnerContainer>
      </MainContainer>
    </>
  );
}

export default GiveFeedback;

const groupItemsByAsWeRequired = (items, type) => {
  return items.reduce((groupedItems, currentItem) => {
    const groupKey = currentItem[type] || 'Other';
    if (!groupedItems[groupKey]) {
      groupedItems[groupKey] = [];
    }
    groupedItems[groupKey].push(currentItem);
    return groupedItems;
  }, {});
};
