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
import CloseCircle from '../../static/img/closecircle.svg';
import { isMobileView } from '../ReactiveRender';
import { Dialog } from '@mui/material';
import Cookies from 'js-cookie';
import whiteArrowright from '../../static/img/arrowright-White.svg';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

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
  console.log('Testing Year', Cookies.get('year'));
  const [selectedYear, setSelectedYear] = React.useState(Cookies.get('year'));
  const [selectedSubject, setSelectedSubject] = React.useState('');
  const [selectedState, setSelectedState] = React.useState(
    Cookies.get('state')
  );
  // const [selectedDockType, setSelectedDockType] = React.useState('');
  const [selectedDocumentType, setSelectedDocumentType] = React.useState('');

  const [communityTasks, setCommunityTasks] = React.useState([]);
  const [giveFeedbackCompletedTasks, setGiveFeedbackCompletedTasks] =
    React.useState([]);

  const [sortData, setSortData] = React.useState(true);
  const mobileView = isMobileView();
  const [isShowFilterPopUp, setShowFilterPopUp] = React.useState(false);
  // const history = useHistory();
  const location = useLocation();
  const pathName = location.pathname;

  React.useEffect(() => {
    setSelectedYear(Cookies.get('year'));
    setSelectedState(Cookies.get('state'));
  }, [location.pathname]);

  const dropDownData = (type) => {
    const groupedItems = groupItemsByAsWeRequired(
      pathName.includes('/feedbackHistory')
        ? giveFeedbackCompletedTasks
        : communityTasks,
      type
    );

    return Object.keys(groupedItems);
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
              <GiveFeedbackDropDown
                search={false}
                type={'state'}
                selectedIndex={setSelectedValue}
                menuItems={dropDownData('state')}
                fullWidth={true}
              />
            </Frame5086PopUpBody>
            <Frame5086PopUpBody>
              <GiveFeedbackDropDown
                search={false}
                selectedIndex={setSelectedValue}
                menuItems={dropDownData('year')}
                type={'year'}
                fullWidth={true}
              />
            </Frame5086PopUpBody>
            <Frame5086PopUpBody>
              <GiveFeedbackDropDown
                search={false}
                selectedIndex={setSelectedValue}
                menuItems={dropDownData('subject')}
                type={'subject'}
                fullWidth={true}
              />
            </Frame5086PopUpBody>
            <Frame5086PopUpBody>
              <GiveFeedbackDropDown
                search={false}
                selectedIndex={setSelectedValue}
                menuItems={dropDownData('documentType')}
                type={'documentType'}
                fullWidth={true}
              />
            </Frame5086PopUpBody>
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
                  <TitleImage src={questionMark} />
                </Title>
                <ConnectContainer>
                  {pathName.includes('/feedbackHistory') ? (
                    <LinkButton
                      link={`#giveFeedback`}
                      label="Go Back"
                      arrowleft={arrowLeft}
                      // whiteArrowright={whiteArrowright}
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
                Feedback requests received from community members
              </HeadingLine>
            </TopContainer>
            <FilterAndSortContainer>
              <FilterContainer>
                <Frame5086>
                  <Frame5086Img src={FilterSquare} />
                  <Frame5086Text>Filters:</Frame5086Text>
                </Frame5086>

                {!mobileView ? (
                  <>
                    <GiveFeedbackDropDown
                      search={false}
                      type={'state'}
                      selectedIndex={setSelectedValue}
                      menuItems={dropDownData('state')}
                      defaultValue={selectedState}
                    />
                    <GiveFeedbackDropDown
                      search={false}
                      selectedIndex={setSelectedValue}
                      menuItems={dropDownData('year')}
                      type={'year'}
                      defaultValue={selectedYear}
                    />
                    <GiveFeedbackDropDown
                      search={false}
                      selectedIndex={setSelectedValue}
                      menuItems={dropDownData('subject')}
                      type={'subject'}
                      defaultValue={selectedSubject}
                    />
                    <GiveFeedbackDropDown
                      search={false}
                      selectedIndex={setSelectedValue}
                      menuItems={dropDownData('documentType')}
                      type={'documentType'}
                      defaultValue={selectedDocumentType}
                    />
                  </>
                ) : (
                  <></>
                )}
                {/* <FilterPopContainer
                isShowFilterPopUp={isShowFilterPopUp}
                setShowFilterPopUp={setShowFilterPopUp}
              /> */}
              </FilterContainer>
              <SortContainer>
                <Frame5086>
                  <Frame5086Img src={SortSquare} />
                  <Frame5086Text>Sort by:</Frame5086Text>
                </Frame5086>
                {!mobileView ? (
                  <>
                    <SortButton
                      style={{ backgroundColor: sortData ? '#51009F' : '' }}
                      onClick={() => setSortData(true)}
                    >
                      <SortButtonText
                        style={{ color: sortData ? '#FFFFFF' : '' }}
                      >
                        New to Old
                      </SortButtonText>
                    </SortButton>
                    <SortButton
                      style={{ backgroundColor: !sortData ? '#51009F' : '' }}
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
              </SortContainer>
            </FilterAndSortContainer>
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
