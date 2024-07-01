import React from 'react';
import { getTasks, getClasses } from '../../service';
import ReactiveRender, { isMobileView, isTabletView } from '../ReactiveRender';
import TasksDesktop from '../TasksDesktop';
import { taskHeaderProps } from '../../utils/headerProps.js';
import { Dialog } from '@mui/material';
import _ from 'lodash';
import Loader from '../Loader';
import { useQuery } from '@tanstack/react-query';
import {
  CalenderContainer,
  FilterAndSortContainer,
  MainContainer,
  TasksImg,
  TasksImgCal,
} from './style.js';

import RoundedDropDown from '../../components2/RoundedDropDown/index.jsx';
import SortSquare from '../../static/img/sort-square.svg';
import FilterSquare from '../../static/img/filter-square.svg';
import TaskSelected from '../../static/img/Columns-new.svg';
import CloseCircle from '../../static/img/closecircle.svg';
import TaskNotSelected from '../../static/img/Columns-new-gray.svg';
import CalNotSelected from '../../static/img/Calendar-new-purple.svg';
import CalSelected from '../../static/img/Calendar-new.svg';
import CalUnSelected from '../../static/img/calunselected.svg';
import MyCalendar from '../../components2/Calender/index.js';
import moment from 'moment';

import {
  FilterText,
  FilterImg,
  Filter,
  FilterText,
  FilterContainer,
  FilterLine,
  SortButton,
  SortButtonText,
  SortContainer,
  SortHeading,
  SortImg,
  SortText,
  TitleHeading,
} from '../FilterSort/style.js';
import {
  FeedbackButtonArrow,
  Frame5086Img,
  Frame5086PopUp,
  Frame5086PopUpBody,
  Frame5086PopUpTitle,
  Frame5086Text,
  PopupContainer,
  SortPopUpBody,
} from '../GiveFeedback/style.js';
import MenuButton from '../MenuButton/index.jsx';
export default function StudentTaskRoot() {
  const [allTasks, setAllTasks] = React.useState([]);
  const [classes, setClasses] = React.useState([]);
  const [filteredTasks, setFilteredTasks] = React.useState([]);
  const [sortData, setSortData] = React.useState(true);
  const [selectedClass, setSelectedClass] = React.useState('');
  const [tasksSelected, setTasksSelected] = React.useState(true);
  const [isShowFilterPopUp, setShowFilterPopUp] = React.useState(false);
  const [isShowSortPopUp, setShowSortPopUp] = React.useState(false);
   const [isShowMenu, setShowMenu] = React.useState(false);
  const mobileView = isMobileView();
   const tabletView = isTabletView();

  const tasksQuery = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const result = await getTasks();
      return result;
    },
    staleTime: 3600000,
  });
  const studentClassesQuery = useQuery({
    queryKey: ['classes'],
    queryFn: async () => {
      const result = await getClasses();
      return result;
    },
    staleTime: 3600000,
  });

  React.useEffect(() => {
    if (tasksQuery.data) {
      setFilteredTasks(tasksQuery.data);
      setAllTasks(tasksQuery.data);
    }
    if (studentClassesQuery.data) {
      setClasses(studentClassesQuery.data);
    }
  }, [tasksQuery.data, studentClassesQuery.data]);

  const setSelectedValue = (type, selectValue) => {
    if (type === 'classes') {
      setSelectedClass(selectValue);
    }
  };

  if (tasksQuery.isLoading || studentClassesQuery.isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  const filteredData = (tasks) => {
    const sortedTasks = tasks.sort((a, b) => {
      const dateA = new Date(a.dueAt).getTime();
      const dateB = new Date(b.dueAt).getTime();
      return sortData ? dateB - dateA : dateA - dateB;
    });

    return sortedTasks;
  };

  const classNames = [...new Set(filteredTasks.map((task) => task.classTitle))];

  const filterTasksByProgressAndClass = (tasks, progressStatus) =>
    filteredData(tasks)
      .filter((task) => task.progressStatus === progressStatus)
      .filter((task) => !selectedClass || task.classTitle === selectedClass);

  const assignmedTasks = filterTasksByProgressAndClass(
    filteredTasks,
    'ASSIGNED'
  );
  const inProgressTasks = filterTasksByProgressAndClass(filteredTasks, 'DRAFT');
  const inReviewTasks = filterTasksByProgressAndClass(filteredTasks, 'REVIEW');

  const classesItems = classes.map((clazz) => {
    return { value: clazz.id, label: clazz.title, category: 'CLASSES' };
  });

  const menuItems = [
    {
      name: 'TYPES',
      title: 'Types',
      items: [
        { value: 'ASSIGNMENT', label: 'Submissions', category: 'TYPES' },
        { value: 'REVIEW', label: 'Reviews', category: 'TYPES' },
        {
          value: 'DRAFT_REVIEW',
          label: 'Community',
          category: 'TYPES',
        },
      ],
    },
    {
      name: 'CLASSES',
      title: 'Classes',
      items: classesItems,
    },
  ];

  const filterTasks = (selectedItems) => {
    const groupedData = _.groupBy(selectedItems, 'category');
    let typesValues = _.map(_.get(groupedData, 'TYPES'), 'value');
    if (typesValues.length === 0) {
      typesValues = ['REVIEW', 'ASSIGNMENT', 'DRAFT_REVIEW'];
    }
    const filteredTasks = _.filter(allTasks, (task) =>
      _.includes(typesValues, task.type)
    );

    let classesValues = _.map(_.get(groupedData, 'CLASSES'), 'value');
    if (classesValues.length === 0) {
      classesValues = classes.map((clazz) => clazz.id);
    }
    classesValues = [null, undefined, ...classesValues];
    const filteredClasses = _.filter(filteredTasks, (task) =>
      _.includes(classesValues, task.classId)
    );

    setFilteredTasks(filteredClasses);
  };



  const FilterSortAndCal = (
    <>
      <MainContainer>
        <CalenderContainer>
          {tabletView && <MenuButton setShowMenu={setShowMenu} />}
          <TitleHeading
            style={tasksSelected ? { color: '#7200E0' } : { color: '#7B7382' }}
            className={tasksSelected ? 'active' : ''}
            onClick={() => setTasksSelected(true)}
          >
            <TasksImg
              src={!tasksSelected ? TaskNotSelected : TaskSelected}
              selected={tasksSelected}
            />
            Column
          </TitleHeading>
          
            <TitleHeading
              style={
                tasksSelected ? { color: '#7B7382' } : { color: '#7200E0' }
              }
              className={!tasksSelected ? 'active' : ''}
              onClick={() => setTasksSelected(false)}
            >
              <TasksImgCal
                src={!tasksSelected ? CalNotSelected : CalSelected}
                selected={!tasksSelected}
              />
              Calendar
            </TitleHeading>
          
        </CalenderContainer>
        <FilterAndSortContainer>
          <FilterContainer>
            <Filter
              
            >
              <FilterImg src={FilterSquare} />
              <FilterText>Filter :</FilterText>
            </Filter>

           
              <>
                <RoundedDropDown
                  search={false}
                  type={'classes'}
                  selectedIndex={setSelectedValue}
                  menuItems={classNames}
                  defaultValue={selectedClass}
                  width={110}
                />
              </>
           
            
          </FilterContainer>
          {!isTabletView && <FilterLine />}
          {tasksSelected && (
            <SortContainer>
              <SortHeading
                
              >
                <SortImg src={SortSquare} />
                <SortText>Sort by :</SortText>
              </SortHeading>
              
                <>
                  <SortButton
                    style={{
                      backgroundColor: sortData ? '#51009F' : '',
                      border: '1px solid #8E33E6',
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
          )}
        </FilterAndSortContainer>
      </MainContainer>
    </>
  );

  const calenderEvents = allTasks
    .filter((task) => !selectedClass || task.classTitle === selectedClass)
    .map((task) => ({
      link: task.link,
      title: task.title,
      class: task.classTitle,
      start: moment(task.dueAt).toDate(),
      end: moment(task.dueAt).toDate(),
    }));

  const MyCalendarFile = <MyCalendar calenderEvents={calenderEvents} />;
  return (
    <TasksDesktop
      {...{
        menuItems,
        filterTasks,
        assignmedTasks,
        inProgressTasks,
        inReviewTasks,
        FilterSortAndCal,
        tasksSelected,
        MyCalendarFile,
        isShowMenu,
        setShowMenu,
        ...tasksDesktopData,
      }}
    />
  );
}

const frame13041Data = {
  iconsaxLinearSort: '/img/iconsax-linear-sort@2x.png',
};
const tabs23Data = {
  children: 'In progress',
  className: 'tabs-3',
};
const tabs24Data = {
  children: 'Overdue',
  className: 'tabs-4',
};
const statusBubbles28Data = {
  children: 'Theory',
};
const statusBubbles32Data = {
  star1: '/img/star1@2x.png',
};

const frame66Data = {
  statusBubbles2Props: statusBubbles28Data,
  statusBubbles3Props: statusBubbles32Data,
};

const content6Data = {
  dueOn2April2023: 'Due on 2 April 2023',
};

const cards6Data = {
  frame6Props: frame66Data,
  contentProps: content6Data,
};

const statusBubbles29Data = {
  children: 'Assignment',
};

const statusBubbles210Data = {
  children: 'MCQ',
};

const frame622Data = {
  statusBubbles21Props: statusBubbles29Data,
  statusBubbles22Props: statusBubbles210Data,
};

const content7Data = {
  dueOn2April2023: 'Due on 10 April 2023',
};

const cards22Data = {
  frame62Props: frame622Data,
  contentProps: content7Data,
};

const statusBubbles211Data = {
  children: 'MCQ',
};

const frame632Data = {
  statusBubbles2Props: statusBubbles211Data,
};

const content8Data = {
  dueOn2April2023: 'Due on 2 April 2023',
};

const cards32Data = {
  frame63Props: frame632Data,
  contentProps: content8Data,
};

const statusBubbles212Data = {
  children: 'Theory',
};

const frame642Data = {
  statusBubbles2Props: statusBubbles212Data,
};

const content9Data = {
  dueOn2April2023: 'Due on 2 April 2023',
};

const cards42Data = {
  frame64Props: frame642Data,
  contentProps: content9Data,
};

const statusBubbles213Data = {
  children: 'Assignment',
};

const statusBubbles214Data = {
  children: 'Theory',
};

const frame652Data = {
  statusBubbles21Props: statusBubbles213Data,
  statusBubbles22Props: statusBubbles214Data,
};

const content10Data = {
  dueOn2April2023: 'Due on 2 April 2023',
};

const cards52Data = {
  frame65Props: frame652Data,
  contentProps: content10Data,
};

const frame192Data = {
  className: 'frame-19-1',
  cardsProps: cards6Data,
  cards2Props: cards22Data,
  cards3Props: cards32Data,
  cards4Props: cards42Data,
  cards5Props: cards52Data,
};



const frame13042Data = {
  iconsaxLinearSort: '/img/iconsax-linear-sort@2x.png',
};

const tabs25Data = {
  children: 'In progress',
};

const tabs26Data = {
  children: 'Overdue',
};

const statusBubbles215Data = {
  children: 'Theory',
};

const statusBubbles33Data = {
  star1: '/img/star1-1@2x.png',
};

const frame67Data = {
  statusBubbles2Props: statusBubbles215Data,
  statusBubbles3Props: statusBubbles33Data,
};

const content22Data = {
  dueOn2April2023: 'Due on 2 April 2023',
};

const cards62Data = {
  frame6Props: frame67Data,
  content2Props: content22Data,
};

const statusBubbles216Data = {
  children: 'Assignment',
};

const statusBubbles217Data = {
  children: 'MCQ',
};

const frame623Data = {
  statusBubbles21Props: statusBubbles216Data,
  statusBubbles22Props: statusBubbles217Data,
};

const content23Data = {
  dueOn2April2023: 'Due on 10 April 2023',
};

const cards7Data = {
  frame62Props: frame623Data,
  content2Props: content23Data,
};

const statusBubbles218Data = {
  children: 'MCQ',
};

const frame633Data = {
  statusBubbles2Props: statusBubbles218Data,
};

const content24Data = {
  dueOn2April2023: 'Due on 2 April 2023',
};

const cards8Data = {
  frame63Props: frame633Data,
  content2Props: content24Data,
};

const statusBubbles219Data = {
  children: 'Theory',
};

const frame643Data = {
  statusBubbles2Props: statusBubbles219Data,
};

const content25Data = {
  dueOn2April2023: 'Due on 2 April 2023',
};

const cards9Data = {
  frame64Props: frame643Data,
  content2Props: content25Data,
};

const statusBubbles220Data = {
  children: 'Assignment',
};

const statusBubbles221Data = {
  children: 'Theory',
};

const frame653Data = {
  statusBubbles21Props: statusBubbles220Data,
  statusBubbles22Props: statusBubbles221Data,
};

const content26Data = {
  dueOn2April2023: 'Due on 2 April 2023',
};

const cards10Data = {
  frame65Props: frame653Data,
  content2Props: content26Data,
};
const notifications3Data = {
  src: '/img/notificationbing@2x.png',
};


const statusBubbles21Data = {
  children: 'Theory',
};

const statusBubbles31Data = {
  star1: '/img/star1@2x.png',
};
const frame61Data = {
  statusBubbles2Props: statusBubbles21Data,
  statusBubbles3Props: statusBubbles31Data,
};

const content1Data = {
  dueOn2April2023: 'Due on 2 April 2023',
};

const cards1Data = {
  frame6Props: frame61Data,
  contentProps: content1Data,
};

const statusBubbles22Data = {
  children: 'Assignment',
};

const statusBubbles23Data = {
  children: 'MCQ',
};

const frame621Data = {
  statusBubbles21Props: statusBubbles22Data,
  statusBubbles22Props: statusBubbles23Data,
};

const content2Data = {
  dueOn2April2023: 'Due on 10 April 2023',
};

const cards21Data = {
  frame62Props: frame621Data,
  contentProps: content2Data,
};

const statusBubbles24Data = {
  children: 'MCQ',
};

const frame631Data = {
  statusBubbles2Props: statusBubbles24Data,
};

const content3Data = {
  dueOn2April2023: 'Due on 2 April 2023',
};

const cards31Data = {
  frame63Props: frame631Data,
  contentProps: content3Data,
};

const statusBubbles25Data = {
  children: 'Theory',
};

const frame641Data = {
  statusBubbles2Props: statusBubbles25Data,
};

const content4Data = {
  dueOn2April2023: 'Due on 2 April 2023',
};

const cards41Data = {
  frame64Props: frame641Data,
  contentProps: content4Data,
};

const statusBubbles26Data = {
  children: 'Assignment',
};

const statusBubbles27Data = {
  children: 'Theory',
};

const frame651Data = {
  statusBubbles21Props: statusBubbles26Data,
  statusBubbles22Props: statusBubbles27Data,
};

const content5Data = {
  dueOn2April2023: 'Due on 2 April 2023',
};

const cards51Data = {
  frame65Props: frame651Data,
  contentProps: content5Data,
};
const frame191Data = {
  cardsProps: cards1Data,
  cards2Props: cards21Data,
  cards3Props: cards31Data,
  cards4Props: cards41Data,
  cards5Props: cards51Data,
};



const frame13043Data = {
  iconsaxLinearSort: '/img/iconsax-linear-sort-2@2x.png',
};
const frame13061Data = {
  frame1304Props: frame13043Data,
};
const tasksDesktopData = {
  title: 'Tasks',
  frame1306Props: frame13061Data,
  frame19Props: frame192Data,
  headerProps: taskHeaderProps,
  arrowright: '/img/arrowright@2x.png',
};
