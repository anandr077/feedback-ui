import React from 'react';
import { getCompletedTasks } from '../../service.js';
import CompletedRoot from '../Completed/CompletedRoot';
import { groupBy, groupedData } from 'lodash';
import { dateOnly } from '../../dates.js';
import _ from 'lodash';
import Loader from '../Loader';
import {
  ConnectContainer,
  ContentContainer,
  FilterAndSortContainer,
  FilterContainer,
  FilterLine,
  SortButton,
  SortButtonText,
  SortContainer,
  SortHeading,
  SortImg,
  SortText,
} from '../FilterSort/style.js';
import {
  Title,
  TitleContainer,
  TitleImage,
  TopContainer,
  ConnectContainer,
  ContentContainer,
  HeadingAndFilterCon,
  HeadingLine,
  InnerContainer,
  LeftContentContainer,
  MainContainer,
  CompletedPageContainer,
} from './style.js';

import whiteArrowleft from '../../static/img/arrowleftwhite.svg';
import arrowLeft from '../../static/img/arrowleft.svg';
import questionMark from '../../static/img/question-mark.svg';
import LinkButton from '../../components2/LinkButton/index.jsx';
import TaskHistoryDataComponent from './TaskHistoryDataComponent.jsx';
import { useQuery } from '@tanstack/react-query';
import SortSquare from '../../static/img/sort-square.svg';
import { downloadSubmissionPdf } from '../Shared/helper/downloadPdf.js';
import FilterSquare from '../../static/img/filter-square.svg';
import RoundedDropDown from '../../components2/RoundedDropDown/index.jsx';
import {
  Frame5086,
  Frame5086Img,
  Frame5086Text,
} from '../GiveFeedback/style.js';
import { arrayFromArrayOfObject } from '../../utils/arrays.js';
import QuestionTooltip from '../../components2/QuestionTooltip/index.jsx';
import SecondSidebar from '../SecondSidebar/index.js';
import { isTabletView } from '../ReactiveRender/index.jsx';
import ClickOutsideHandler from '../ClickOutsideHandler/index.jsx';
import MenuButton from '../MenuButton/index.jsx';
import ImprovedSecondarySideBar from '../ImprovedSecondarySideBar/index.jsx';

export default function CompletedPage() {
  const [tasks, setTasks] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [filteredTasks, setFilteredTasks] = React.useState([]);
  const [sortData, setSortData] = React.useState(true);
  const [classes, setClasses] = React.useState([]);
  const [selectedClass, setSelectedClass] = React.useState('');
  const [isShowMenu, setShowMenu] = React.useState(false);
  const tabletView = isTabletView();

  const completedTasksQuery = useQuery({
    queryKey: ['completedTasks'],
    queryFn: async () => {
      const result = await getCompletedTasks();
      return result;
    },
    staleTime: 3600000,
  });

  React.useEffect(() => {
    if (completedTasksQuery.data) {
      setTasks(completedTasksQuery.data);
      setFilteredTasks(completedTasksQuery.data);
    }
  }, [completedTasksQuery.data]);

  if (completedTasksQuery.isLoading) {
    return <Loader />;
  }
  const groups = groupBy(filteredTasks, (task) => dateOnly(task.completedAt));
  const menuItems = [
    {
      name: 'TYPES',
      title: 'Types',
      items: [
        { value: 'ASSIGNMENT', label: 'Tasks', category: 'TYPES' },
        { value: 'REVIEW', label: 'Reviews', category: 'TYPES' },
      ],
    },
  ];

  const filterTasks = (selectedItems) => {
    const groupedData = _.groupBy(selectedItems, 'category');
    let typesValues = _.map(_.get(groupedData, 'TYPES'), 'value');

    if (typesValues.length === 0) {
      typesValues = ['REVIEW', 'ASSIGNMENT'];
    }
    const filteredTasks = _.filter(tasks, (task) =>
      _.includes(typesValues, task.type)
    );

    setFilteredTasks(filteredTasks);
  };

  const setSelectedValue = (type, selectValue) => {
    if (type === 'classes') {
      setSelectedClass(selectValue);
    }
  };

  const filteredData = (tasks) => {
    const filteredTasks = tasks.filter(
      (task) => !selectedClass || task.classTitle === selectedClass
    );

    const sortedTasks = filteredTasks.sort((a, b) => {
      const dateA = new Date(a.completedAt).getTime();
      const dateB = new Date(b.completedAt).getTime();
      return sortData ? dateB - dateA : dateA - dateB;
    });

    return sortedTasks;
  };

  const downloadPDF = (Id) => {
    downloadSubmissionPdf(Id);
  };

  return (
    <CompletedPageContainer>
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
                  <Frame5086Text>Filters:</Frame5086Text>
                </Frame5086>

                <>
                  <RoundedDropDown
                    search={false}
                    type={'classes'}
                    selectedIndex={setSelectedValue}
                    menuItems={arrayFromArrayOfObject(tasks, 'classTitle')}
                    defaultValue={selectedClass}
                    width={110}
                  />
                </>
              </FilterContainer>
              <FilterLine />
              <SortContainer>
                <SortHeading>
                  <SortImg src={SortSquare} />
                  <SortText>Sort by:</SortText>
                </SortHeading>

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
              </SortContainer>
            </FilterAndSortContainer>
          </HeadingAndFilterCon>
          <LeftContentContainer>
            <TaskHistoryDataComponent
              downloadPDF={downloadPDF}
              list={filteredData(tasks)}
            />
          </LeftContentContainer>
        </InnerContainer>
      </MainContainer>
    </CompletedPageContainer>
  );
}
