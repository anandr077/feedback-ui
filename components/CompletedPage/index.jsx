import React, {useState} from 'react';
import _ from 'lodash';
import Loader from '../Loader';
import {
  ConnectContainer,
  ContentContainer,
  FilterAndSortContainer,
  FilterContainer,
  FilterLine,
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

import TaskHistoryDataComponent from './TaskHistoryDataComponent.jsx';
import FilterSquare from '../../static/img/filter-square.svg';
import RoundedDropDown from '../../components2/RoundedDropDown/index.jsx';
import {
  Frame5086,
  Frame5086Img,
  Frame5086Text,
} from '../GiveFeedback/style.js';
import { isTabletView } from '../ReactiveRender/index.jsx';
import MenuButton from '../MenuButton/index.jsx';
import ImprovedSecondarySideBar from '../ImprovedSecondarySideBar/index.jsx';
import { getUserRole } from '../../userLocalDetails.js';
import { arrayFromArrayOfObject } from '../../utils/arrays.js';
import { useAssignmentsAll, useClassData, useCompletedAll, useProfile } from '../state/hooks.js';
import SortItems from '../../components2/SortItems/index.jsx';

export default function CompletedPage() {
  const [tasks, setTasks] = React.useState([]);
  const [filteredTasks, setFilteredTasks] = React.useState([]);
  const [sortItem, setSortItem] = React.useState(true);
  const [selectedClass, setSelectedClass] = React.useState('');
  const [isShowMenu, setShowMenu] = React.useState(false);
  const tabletView = isTabletView();
  const isTeacher = getUserRole() === 'TEACHER';
  const [isLoading, setIsLoading] = useState(true);
  const { data: classData, isLoadingdata: isLoadingclassData } = useClassData();
  const { data: profile, isLoadingdata: isLoadingProfile } = useProfile();


  const {
    data: allAssignmentData,
    isLoadingData: isAllAssignmentDataLoading, 
  } = useAssignmentsAll();
  
  const {
    data: allCompletedTasksData,
    isLoadingData: isAllCompletedTasksDataLoading, 
  } = useCompletedAll();


 

  const completedTaskFunc = (filteredTasks) =>{
    if (!filteredTasks) {
      return [];
    }
    const newCompletedTask = filteredTasks.flatMap(task => {
      const classesCookies = classData || [];
      const teacherClasses = isTeacher && classesCookies;
      const titles = task.classIds.map(id => {
        const clazz = teacherClasses.find(cls => cls.id === id);
        return clazz ? clazz.title : null;
      });
      return titles.map(title => ({
        classTitle: title,
        id: task.id,
        link: task.link,
        title: task.title,
        completedAt: task.dueAt
      }));
    })
    return newCompletedTask
  }

  React.useEffect(() => {
    if (isTeacher && allAssignmentData) {
      const filteredTasks = allAssignmentData.filter(task => {
        const dueAtDate = new Date(task.dueAt); 
        const currentDate = new Date();
        return task.status === "PUBLISHED" && dueAtDate < currentDate
      })
      const completedTask = completedTaskFunc(filteredTasks)
      setTasks(completedTask);
      setFilteredTasks(completedTask);
      setIsLoading(false);
    }
    else if (allCompletedTasksData) {
      setTasks(allCompletedTasksData);
      setFilteredTasks(allCompletedTasksData);
      setIsLoading(false);
    }
  }, [allAssignmentData, allCompletedTasksData]);




  const setSelectedValue = (type, selectValue) => {
    if (type === 'classes') {
      setSelectedClass(selectValue);
    }
  };

  const filterData = (tasks) => {
    const filteredTasks = tasks.filter(
      (task) => !selectedClass || task.classTitle === selectedClass
    );

    const sortedTasks = filteredTasks.sort((a, b) => {
      const dateA = new Date(a.completedAt).getTime();
      const dateB = new Date(b.completedAt).getTime();
      return sortItem ? dateB - dateA : dateA - dateB;
    });

    return sortedTasks;
  };

  if (isLoading || isLoadingclassData || isAllAssignmentDataLoading || isAllCompletedTasksDataLoading || isLoadingProfile) {
    return <Loader />;
  }
  console.log("Profile", profile)
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
              <SortItems
                sortItem={sortItem}
                setSortItem={setSortItem}
                firstSortText={'New to Old'}
                secondSortText={'Old to New'}
              />
            </FilterAndSortContainer>
          </HeadingAndFilterCon>
          <LeftContentContainer>
            <TaskHistoryDataComponent
              list={filterData(tasks)}
            />
          </LeftContentContainer>
        </InnerContainer>
      </MainContainer>
    </CompletedPageContainer>
  );
}
