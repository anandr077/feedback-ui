import React from 'react';
import {
  GiveFeedbackContainer,
  MainContainer,
  InnerContainer,
  HeadingAndFilterCon,
  FilterContainer,
  ContentContainer,
  LeftContentContainer,
  FilterAndSortContainer,
  Frame5086,
  Frame5086Img,
  Frame5086Text,
} from './style';
import FeedbackDataComponent from './FeedbackDataComponent';
import { useLocation } from 'react-router';
import Loader from '../Loader';
import FilterSquare from '../../static/img/filter-square.svg';
import {  isTabletView } from '../ReactiveRender';
import RoundedDropDown from '../../components2/RoundedDropDown';

import { getUserRole } from '../../userLocalDetails';
import MenuButton from '../MenuButton';
import ImprovedSecondarySideBar from '../ImprovedSecondarySideBar';
import { getLocalStorage } from '../../utils/function';
import { useCommunityTasks, useGiveFeedbackCompletedTasks, useStudentStats } from '../state/hooks';
import SortItems from '../../components2/SortItems';

function GiveFeedback() {
  const [selectedYear, setSelectedYear] = React.useState('');
  const [selectedSubject, setSelectedSubject] = React.useState('');
  const [selectedState, setSelectedState] = React.useState('');
  const [selectedDocumentType, setSelectedDocumentType] = React.useState('');

  const [communityTasks, setCommunityTasks] = React.useState([]);
  const [giveFeedbackCompletedTasks, setGiveFeedbackCompletedTasks] =
    React.useState([]);
  const [studentStats, setStudentStats] = React.useState([]);
  const [sortItem, setSortItem] = React.useState(true);
  const [isShowFilterPopUp, setShowFilterPopUp] = React.useState(false);
  const [isShowSortPopUp, setShowSortPopUp] = React.useState(false);
  const [isShowMenu, setShowMenu] = React.useState(false);
  const location = useLocation();
  const pathName = location.pathname;
  const tabletView = isTabletView();
  const role = getUserRole();

  React.useEffect(() => {
    setSelectedYear('');
    setSelectedSubject('');
    setSelectedState('');
    setSelectedDocumentType('');
    setSortItem(true);
  }, [location.pathname]);

  const dropDownData = (type) => {
    const groupedItems = groupItemsByAsWeRequired(
      pathName.includes('/feedbackHistory')
        ? giveFeedbackCompletedTasks
        : communityTasks,
      type
    );

    let menuItems = Object.keys(groupedItems);
    if (type == 'year' && !menuItems.includes(getLocalStorage('year'))) {
      menuItems.push(getLocalStorage('year'));
    }
    if (type == 'state' && !menuItems.includes(getLocalStorage('state'))) {
      menuItems.push(getLocalStorage('state'));
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
      return sortItem ? dateB - dateA : dateA - dateB;
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


  const {
    data: communityTasksData,
    isLoadingdata: isLoadingCommunityTasksData,
    setData: setCommunityTasksData,
    resetData: resetCommunityTasksData,
  } = useCommunityTasks();
  
  const {
    data: giveFeedbackCompletedTasksData,
    isLoadingdata: isLoadingGiveFeedbackCompletedTasksData,
    setData: setGiveFeedbackCompletedTasksData,
    resetData: resetGiveFeedbackCompletedTasksData,
  } = useGiveFeedbackCompletedTasks();
  
  const {
    data: studentStatsData,
    isLoadingdata: isLoadingStudentStatsData,
    setData: setStudentStatsData,
    resetData: resetStudentStatsData,
  } = useStudentStats();

  React.useEffect(() => {
    if (communityTasksData) {
      setCommunityTasks(communityTasksData);
    }
    if (giveFeedbackCompletedTasksData) {
      setGiveFeedbackCompletedTasks(giveFeedbackCompletedTasksData);
    }
    if (studentStatsData) {
      setStudentStats(studentStatsData);
    }
    resetCommunityTasksData()
    resetGiveFeedbackCompletedTasksData()
  }, [
    communityTasksData,
    giveFeedbackCompletedTasksData,
    studentStatsData,
    location
  ]);

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
    isLoadingCommunityTasksData ||
    isLoadingGiveFeedbackCompletedTasksData ||
    isLoadingStudentStatsData
  ) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <GiveFeedbackContainer>
      <MainContainer>
        <ImprovedSecondarySideBar
          isShowMenu={isShowMenu}
          setShowMenu={setShowMenu}
        />
        <InnerContainer>
          <HeadingAndFilterCon>
            {tabletView && <MenuButton setShowMenu={setShowMenu} />}
            <FilterAndSortContainer>
              <FilterContainer>
                <Frame5086>
                  <Frame5086Img src={FilterSquare} />
                  <Frame5086Text>Filters :</Frame5086Text>
                </Frame5086>

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
              </FilterContainer>
              <SortItems 
                sortItem={sortItem}
                setSortItem={setSortItem}
                firstSortText={"New to Old"}
                secondSortText={"Old to New"}
              />
            </FilterAndSortContainer>
          </HeadingAndFilterCon>
          <ContentContainer>
            <LeftContentContainer fullWidth={role === 'TEACHER'}>
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
                  <Frame5087 src={levelEmoji} />
                  <Frame5088>
                    <Frame5088Para>Level {studentStats.level}</Frame5088Para>
                    <QuestionTooltip 
                      img={questionMark} 
                      text={'Level up by providing meaningfull feedback to other students'}
                    />
                  </Frame5088>
                </Frame1353>
                <Frame5111Para>
                  {studentStats.total}{' '}
                  {studentStats.total === 1
                    ? 'document reviewed'
                    : 'documents reviewed'}
                </Frame5111Para>
                <Frame5042>
                  <Frame5042Para1>{studentStats.percentage}%</Frame5042Para1>
                  <Frame5042Para2>
                    of students found your feedback helpful
                  </Frame5042Para2>
                </Frame5042>
              </Frame5111>
              <Frame5114>
                <Frame5112>
                  <ProgressBarComponent levelNumber={studentStats.level} />
                  {studentStats.toGoForNextLevel > 0 && (
                    <Frame5112para>
                      Help {studentStats.toGoForNextLevel} more{' '}
                      {studentStats.toGoForNextLevel === 1
                        ? 'student'
                        : 'students'}{' '}
                      to level up!
                    </Frame5112para>
                  )}
                </Frame5112>
              </Frame5114>
            </RightContentContainer> */}
          </ContentContainer>
        </InnerContainer>
      </MainContainer>
    </GiveFeedbackContainer>
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
