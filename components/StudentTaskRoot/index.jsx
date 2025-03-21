import React, { useState } from 'react';
import { getTasks, getClasses } from '../../service';
import ReactiveRender, { isTabletView } from '../ReactiveRender';
import TasksDesktop from '../TasksDesktop';
import { taskHeaderProps } from '../../utils/headerProps.js';
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
import FilterSquare from '../../static/img/filter-square.svg';
import TaskSelected from '../../static/img/Columns-new.svg';
import TaskNotSelected from '../../static/img/Columns-new-gray.svg';
import CalNotSelected from '../../static/img/Calendar-new-purple.svg';
import CalSelected from '../../static/img/Calendar-new.svg';
import MyCalendar from '../../components2/Calender/index.js';
import moment from 'moment';
import {
  FilterText,
  FilterImg,
  Filter,
  FilterText,
  FilterContainer,
  FilterLine,
  TitleHeading,
} from '../FilterSort/style.js';
import MenuButton from '../MenuButton/index.jsx';
import { useClassData } from '../state/hooks.js';
import SortItems from '../../components2/SortItems/index.jsx';
export default function StudentTaskRoot() {
  const [allTasks, setAllTasks] = React.useState([]);
  const [classes, setClasses] = React.useState([]);
  const [filteredTasks, setFilteredTasks] = React.useState([]);
  const [sortItem, setSortItems] = React.useState(true);
  const [selectedClass, setSelectedClass] = React.useState('');
  const [tasksSelected, setTasksSelected] = React.useState(true);
  const [isShowMenu, setShowMenu] = React.useState(false);
  const { data: classData, isLoadingdata: isLoadingclassData } = useClassData();
  const [visibleInProgressTaskCount, setVisibleInProgressTaskCount] = useState(3);
  const [visibleAssignedTaskCount, setvisibleAssignedTaskCount] = useState(3);
  const [visibleInReviewTaskCount, setvisibleInReviewTaskCount] = useState(3);
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

  if (tasksQuery.isLoading || studentClassesQuery.isLoading || isLoadingclassData) {
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
      return sortItem ? dateB - dateA : dateA - dateB;
    });

    return sortedTasks;
  };

  const classNames = [...new Set(filteredTasks.map((task) => task.classTitle))];

  const filterTasksByProgressAndClass = (tasks, progressStatus) =>
    filteredData(tasks)
      .filter((task) => task.progressStatus === progressStatus)
      .filter((task) => !selectedClass || task.classTitle === selectedClass);

  const assignedTasks = filterTasksByProgressAndClass(
    filteredTasks,
    'ASSIGNED'
  );
  const inProgressTasks = filterTasksByProgressAndClass(filteredTasks, 'DRAFT');
  const inReviewTasks = filterTasksByProgressAndClass(filteredTasks, 'REVIEW');

  const visibleInProgressTasks = inProgressTasks.slice(0, visibleInProgressTaskCount);
  const visibleAssignedTasks = assignedTasks.slice(0, visibleAssignedTaskCount);
  const visibleInReviewTasks = inReviewTasks.slice(0, visibleInReviewTaskCount);

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

  const handleShowMoreTask = (type, numberOfTasks) =>{
      if(type === "inDraft"){
        setVisibleInProgressTaskCount(numberOfTasks)
      }
      if(type === 'Assigned'){
        setvisibleAssignedTaskCount(numberOfTasks)
      }
      if(type === 'inReview'){
        setvisibleInReviewTaskCount(numberOfTasks)
      }
  }



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
            <Filter>
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
            <SortItems
              sortItem={sortItem}
              setSortItem={setSortItems}
              firstSortText={'New to Old'}
              secondSortText={'Old to New'}
            />
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
        visibleAssignedTasks,
        visibleInProgressTasks,
        visibleInReviewTasks,
        visibleInProgressTaskCount, 
        visibleAssignedTaskCount,  
        visibleInReviewTaskCount,
        inProgressTasks,
        assignedTasks,
        inReviewTasks,
        FilterSortAndCal,
        tasksSelected,
        MyCalendarFile,
        handleShowMoreTask,
        isShowMenu,
        setShowMenu,
        ...tasksDesktopData(classData),
      }}
    />
  );
}


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

const frame13043Data = {
  iconsaxLinearSort: '/img/iconsax-linear-sort-2@2x.png',
};
const frame13061Data = {
  frame1304Props: frame13043Data,
};
const tasksDesktopData = (classData) =>{
  return {
    title: 'Tasks',
    frame1306Props: frame13061Data,
    frame19Props: frame192Data,
    headerProps: taskHeaderProps(classData),
    arrowright: '/img/arrowright@2x.png',
  }
};
