import React, {useState} from 'react';
import { getAssignments, getCompletedTasks, getLocalClasses } from '../../service.js';
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
import { isTabletView } from '../ReactiveRender/index.jsx';
import MenuButton from '../MenuButton/index.jsx';
import ImprovedSecondarySideBar from '../ImprovedSecondarySideBar/index.jsx';
import { getUserRole } from '../../userLocalDetails.js';
import { arrayFromArrayOfObject } from '../../utils/arrays.js';

export default function CompletedPage() {
  const [tasks, setTasks] = React.useState([]);
  const [teacherTask, setTeacherTask] = useState([])
  const [filteredTasks, setFilteredTasks] = React.useState([]);
  const [sortData, setSortData] = React.useState(true);
  const [selectedClass, setSelectedClass] = React.useState('');
  const [isShowMenu, setShowMenu] = React.useState(false);
  const tabletView = isTabletView();
  const isTeacher = getUserRole() === 'TEACHER';

  const assignmentsQuery = useQuery({
    queryKey: ['assignments'],
    queryFn: async () => {
      const result = await getAssignments();
      return result;
    },
    staleTime: 3600000,
  });

  const completedTasksQuery = useQuery({
    queryKey: ['completedTasks'],
    queryFn: async () => {
      const result = await getCompletedTasks();
      return result;
    },
    staleTime: 3600000,
  });

  const completedTaskFunc = (filteredTasks) =>{
    const newCompletedTask = filteredTasks.flatMap(task => {
      const classesCookies = getLocalClasses();
      const teacherClasses = isTeacher && JSON.parse(classesCookies)
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
    if (isTeacher && assignmentsQuery.data) {
      const filteredTasks = assignmentsQuery.data.filter(task => {
        const dueAtDate = new Date(task.dueAt); 
        const currentDate = new Date();
        return task.status === "PUBLISHED" && dueAtDate < currentDate
      })
      const completedTask = completedTaskFunc(filteredTasks)
      setTasks(completedTask);
      setFilteredTasks(completedTask);
    }
    else if (completedTasksQuery.data) {
      setTasks(completedTasksQuery.data);
      setFilteredTasks(completedTasksQuery.data);
    }
  }, [assignmentsQuery.data, completedTasksQuery.data]);

  if (assignmentsQuery.isLoading) {
    return <Loader />;
  }

  if(completedTasksQuery.isLoading){
    return <Loader />;
  }

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
              list={filterData(tasks)}
            />
          </LeftContentContainer>
        </InnerContainer>
      </MainContainer>
    </CompletedPageContainer>
  );
}
