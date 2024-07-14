import React from 'react';
import {
  GiveFeedbackContainer,
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
  StartImg,
  StartsPart,
  StarsPart,
  StarImg,
  StarPart,
  StartLevel,
  StarsContainer,
  ProgressContainer,
  ProgressBardiv,
} from './style';
import FeedbackDataComponent from './FeedbackDataComponent';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import StyledDropDown from '../../components2/StyledDropDown';
import { useQuery } from '@tanstack/react-query';
import {
  getCommunityTasks,
  getGiveFeedbackCompletedTasks,
  getStudentStats,
} from '../../service';
import Loader from '../Loader';
import FilterSquare from '../../static/img/filter-square.svg';
import SortSquare from '../../static/img/sort-square.svg';
import questionMark from '../../static/img/question-mark.svg';
import line from '../../static/img/line-17-22@2x.png';
import arrowLeft from '../../static/img/arrowleft.svg';
import LinkButton from '../../components2/LinkButton';
import CloseCircle from '../../static/img/closecircle.svg';
import { isMobileView, isTabletView } from '../ReactiveRender';
import { Dialog } from '@mui/material';
import Cookies from 'js-cookie';
import whiteArrowright from '../../static/img/arrowright-White.svg';
import whiteArrowleft from '../../static/img/arrowleftwhite.svg';
import levelEmoji from '../../static/img/Level-emoji.svg';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import RoundedDropDown from '../../components2/RoundedDropDown';
import ProgressBarComponent from './ProgressBarComponent';
import QuestionTooltip from '../../components2/QuestionTooltip';
import SecondSidebar from '../SecondSidebar';
import { getUserRole } from '../../userLocalDetails';
import MenuButton from '../MenuButton';
import ClickOutsideHandler from '../ClickOutsideHandler';
import ImprovedSecondarySideBar from '../ImprovedSecondarySideBar';
import { getLocalStorage } from '../../utils/function';

function GiveFeedback() {
  const [showHistory, setShowHistory] = React.useState(false);

  const [selectedYear, setSelectedYear] = React.useState('');
  const [selectedSubject, setSelectedSubject] = React.useState('');
  const [selectedState, setSelectedState] = React.useState('');
  const [selectedDocumentType, setSelectedDocumentType] = React.useState('');

  const [communityTasks, setCommunityTasks] = React.useState([]);
  const [giveFeedbackCompletedTasks, setGiveFeedbackCompletedTasks] =
    React.useState([]);
  const [studentStats, setStudentStats] = React.useState([]);
  const [sortData, setSortData] = React.useState(true);
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

  const getStudentStatsQuery = useQuery({
    queryKey: ['StudentStats'],
    queryFn: async () => {
      const result = await getStudentStats();
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
    if (getStudentStatsQuery.data) {
      setStudentStats(getStudentStatsQuery.data);
    }
  }, [
    communityTasksQuery,
    giveFeedbackCompletedTasksQuery,
    getStudentStatsQuery,
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
    communityTasksQuery.isLoading ||
    giveFeedbackCompletedTasksQuery.isLoading ||
    getStudentStatsQuery.isLoading
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

              <SortContainer>
                <Frame5086>
                  <Frame5086Img src={SortSquare} />
                  <Frame5086Text>Sort by :</Frame5086Text>
                </Frame5086>
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
              </SortContainer>
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
                giveFeedbackCompletedTasks={giveFeedbackCompletedTasks}
                setGiveFeedbackCompletedTasks={setGiveFeedbackCompletedTasks}
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
