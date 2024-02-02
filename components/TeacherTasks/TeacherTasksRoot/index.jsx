import React from 'react';
import {
  getAssignments,
  getClasses,
  getDocumentReviews,
} from '../../../service';
import ReactiveRender, { isMobileView, isTabletView } from '../../ReactiveRender';
import TeacherTasksStudentMobile from '../TeacherTasksStudentMobile';
import TeacherTasksStudentTablet from '../TeacherTasksStudentTablet';
import TeacherTasksLaptop from '../TeacherTasksLaptop';
import TeacherTasksDesktop from '../TeacherTasksDesktop';
import { Dialog } from '@mui/material';
import {
  assignmentsHeaderProps,
  taskHeaderProps,
} from '../../../utils/headerProps.js';
import _ from 'lodash';
import Loader from '../../Loader';
import DeleteAssignmentPopup from '../../DeleteAssignmentPopUp';
import ExtendAssignmentPopup from '../../ExtendAssignmentPopup';
import { useQuery } from '@tanstack/react-query';
import {
  CalenderContainer,
  FilterAndSortContainer,
  MainContainer,
  TasksImg,
  TasksImgCal,
} from '../../StudentTaskRoot/style.js';

import {
  FilterContainer,
  FilterLine,
} from '../../CompletedPage/style.js';
import RoundedDropDown from '../../../components2/RoundedDropDown/index.jsx';
import SortSquare from '../../../static/img/sort-square.svg';
import FilterSquare from '../../../static/img/filter-square.svg';
import TaskSelected from '../../../static/img/taskselected.svg';
import Closecircle from '../../../static/img/closecircle.svg';
import TaskUnSelected from '../../../static/img/taskunselected.svg';
import CalSelected from '../../../static/img/calselected.svg';
import CalUnSelected from '../../../static/img/calunselected.svg';
import moment from 'moment';
import MyCalendar from '../../../components2/Calender/index.js';
import { 
  Filter, 
  FilterImg, 
  FilterText, 
  SortHeading,
  SortImg,
  SortText,
  SortButton,
  SortButtonText,
} from '../../FilterSort/style.js';
import { 
  FeedbackButtonArrow, 
  Frame5086Img, 
  Frame5086PopUp, 
  Frame5086PopUpTitle, 
  Frame5086Text, 
  PopupContainer, 
  SortPopUpBody, 
  SortContainer,
  Frame5086PopUpBody,
} from '../../GiveFeedback/style.js';

export default function TeacherTaskRoot() {
  const [assignments, setAssignments] = React.useState([]);
  const [filteredTasks, setFilteredTasks] = React.useState([]);
  const [classes, setClasses] = React.useState([]);
  const [showDeletePopup, setShowDeletePopup] = React.useState(false);
  const [selectedAssignment, setSelectedAssignment] = React.useState(null);
  const [showDateExtendPopup, setShowDateExtendPopup] = React.useState(false);

  const [sortData, setSortData] = React.useState(true);
  const [selectedClass, setSelectedClass] = React.useState('');
  const [tasksSelected, setTasksSelected] = React.useState(true);
  const [isShowFilterPopUp, setShowFilterPopUp] = React.useState(false);
  const [isShowSortPopUp, setShowSortPopUp] = React.useState(false);
  const mobileView = isMobileView();
  const tabletView = isTabletView();

  const assignmentsQuery = useQuery({
    queryKey: ['assignments'],
    queryFn: async () => {
      const result = await getAssignments();
      return result;
    },
    staleTime: 3600000,
  });
  const documentReviewTasksQuery = useQuery({
    queryKey: ['document-reviews'],
    queryFn: async () => {
      return await getDocumentReviews();
    },
    staleTime: 3600000,
  });
  const teacherClassesQuery = useQuery({
    queryKey: ['classes'],
    queryFn: async () => {
      const result = await getClasses();
      return result;
    },
    staleTime: 3600000,
  });

  React.useEffect(() => {
    if (assignmentsQuery.data) {
      if (documentReviewTasksQuery.data) {
        setAssignments([
          ...assignmentsQuery.data.map((assignment) => ({
            ...assignment,
            type: 'TASK',
          })),
          ...documentReviewTasksQuery.data,
        ]);
        setFilteredTasks([
          ...assignmentsQuery.data.map((assignment) => ({
            ...assignment,
            type: 'TASK',
          })),
          ...documentReviewTasksQuery.data,
        ]);
      } else {
        setAssignments(
          assignmentsQuery.data.map((assignment) => ({
            ...assignment,
            type: 'TASK',
          }))
        );
        setFilteredTasks(
          assignmentsQuery.data.map((assignment) => ({
            ...assignment,
            type: 'TASK',
          }))
        );
      }
    }
    if (teacherClassesQuery.data) {
      setClasses(teacherClassesQuery.data);
    }
  }, [
    assignmentsQuery.data,
    teacherClassesQuery.data,
    documentReviewTasksQuery.data,
  ]);

  if (
    assignmentsQuery.isLoading ||
    teacherClassesQuery.isLoading ||
    documentReviewTasksQuery.isLoading
  ) {
    return (
      <>
        <Loader />
      </>
    );
  }

  const setSelectedValue = (type, selectValue) => {
    if (type === 'classes') {
      setSelectedClass(selectValue);
    }
  };

  const filteredData = (tasks) => {
    const sortedTasks = tasks.sort((a, b) => {
      const dateA = new Date(a.dueAt).getTime();
      const dateB = new Date(b.dueAt).getTime();
      return sortData ? dateB - dateA : dateA - dateB;
    });

    return sortedTasks;
  };

  const drafts = filteredData(filteredTasks).filter(
    (assignment) => assignment.submissionsStatus === 'DRAFT'
  );
  const awaitingSubmissions = filteredData(filteredTasks).filter((assignment) => {
    return (
      assignment.submissionsStatus === 'AWAITING_SUBMISSIONS' ||
      assignment.submissionStatus === 'FEEDBACK_ACCEPTED'
    );
  });

  const feedbacks = filteredData(filteredTasks).filter(
    (assignment) => assignment.submissionsStatus === 'FEEDBACK'
  );

  const classesItems = classes.map((clazz) => {
    return { value: clazz.id, label: clazz.title, category: 'CLASSES' };
  });

  const menuItems = [
    {
      name: 'TYPES',
      title: 'Types',
      items: [
        {
          value: 'TASK',
          label: 'Tasks',
          category: 'TYPES',
        },
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

    const filteredAssignments = _.filter(assignments, (assignment) => {
      if (_.isEmpty(typesValues)) {
        return true;
      }
      return _.includes(typesValues, assignment.type);
    });
    const classesValues = _.map(_.get(groupedData, 'CLASSES'), 'value');

    const filteredClasses = _.filter(filteredAssignments, (assignment) => {
      if (_.isEmpty(classesValues)) {
        return true;
      }
      return _.some(assignment.classIds, (classId) =>
        _.includes(classesValues, classId)
      );
    });

    setFilteredTasks(filteredClasses);
  };

  const hidedeletePopup = () => {
    setShowDeletePopup(false);
  };
  const showDeletePopuphandler = (assignment) => {
    setSelectedAssignment(assignment);
    setShowDeletePopup(true);
  };

  const showDateExtendPopuphandler = (assignment) => {
    setSelectedAssignment(assignment);
    setShowDateExtendPopup(true);
  };
  const hideDateExtendPopup = () => {
    setShowDateExtendPopup(false);
  };

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
                src={Closecircle}
                onClick={() => setShowFilterPopUp(false)}
              />
            </Frame5086PopUp>
            <Frame5086PopUpBody>
                <RoundedDropDown
                  search={false}
                  type={'classes'}
                  selectedIndex={setSelectedValue}
                  menuItems={['class1', 'class2', 'class3']}
                  defaultValue={selectedClass}
                  width={110}
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
                src={Closecircle}
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

  const FilterSortAndCal = (
    <>
      <MainContainer>
        <FilterAndSortContainer>
          <FilterContainer>
            <Filter
              onClick={
                mobileView
                  ? () => setShowFilterPopUp(!isShowFilterPopUp)
                  : undefined
              }
            >
              <FilterImg src={FilterSquare} />
              <FilterText>Filter {!mobileView && ':'}</FilterText>
            </Filter>

            {!mobileView ? (
              <>
                <RoundedDropDown
                  search={false}
                  type={'classes'}
                  selectedIndex={setSelectedValue}
                  menuItems={['class1', 'class2', 'class3']}
                  defaultValue={selectedClass}
                  width={110}
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
          {!tabletView && <FilterLine />}   
          <SortContainer>
            <SortHeading
              onClick={
                mobileView
                  ? () => setShowSortPopUp(!isShowSortPopUp)
                  : undefined
              }
            >
              <SortImg src={SortSquare} />
              <SortText>Sort by {!mobileView && ':'}</SortText>
            </SortHeading>
            {!mobileView ? (
              <>
                <SortButton
                  style={{ backgroundColor: sortData ? '#51009F' : '', border: '1px solid #8E33E6' }}
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
        <CalenderContainer>
          <TasksImg
            src={
              tasksSelected
                ? TaskSelected
                : mobileView
                ? TaskSelected
                : TaskUnSelected
            }
            selected={tasksSelected}
            onClick={() => setTasksSelected(true)}
          />
          {!mobileView && (
            <TasksImgCal
              src={!tasksSelected ? CalSelected : CalUnSelected}
              selected={!tasksSelected}
              onClick={() => setTasksSelected(false)}
            />
          )}
        </CalenderContainer>
      </MainContainer>
    </>
  );

  const calenderEvents = filteredTasks.map((task) => ({
    link: task.link,
    title: task.title,
    start: moment(task.dueAt).toDate(),
    end: moment(task.dueAt).toDate(),
  }));

  const MyCalendarFile = <MyCalendar calenderEvents={calenderEvents} />;

  return (
    <>
      {showDeletePopup && (
        <DeleteAssignmentPopup
          assignment={selectedAssignment}
          hidedeletePopup={hidedeletePopup}
        />
      )}
      {showDateExtendPopup && (
        <ExtendAssignmentPopup
          assignment={selectedAssignment}
          hideDateExtendPopup={hideDateExtendPopup}
        />
      )}

      <ReactiveRender
        mobile={
          <TeacherTasksStudentMobile
            {...{
              menuItems,
              filterTasks,
              drafts,
              awaitingSubmissions,
              feedbacks,
              showDeletePopuphandler,
              showDateExtendPopuphandler,
              FilterSortAndCal,
              tasksSelected,
              MyCalendarFile,
              ...tasksStudentMobileData,
            }}
          />
        }
        tablet={
          <TeacherTasksStudentTablet
            {...{
              menuItems,
              filterTasks,
              drafts,
              awaitingSubmissions,
              showDeletePopuphandler,
              showDateExtendPopuphandler,
              feedbacks,
              FilterSortAndCal,
              tasksSelected,
              MyCalendarFile,
              ...tasksStudentTabletData,
            }}
          />
        }
        laptop={
          <TeacherTasksLaptop
            {...{
              menuItems,
              filterTasks,
              drafts,
              awaitingSubmissions,
              feedbacks,
              showDeletePopuphandler,
              showDateExtendPopuphandler,
              showDeletePopup,
              hidedeletePopup,
              selectedAssignment,
              FilterSortAndCal,
              tasksSelected,
              MyCalendarFile,
              ...tasksLaptopData,
            }}
          />
        }
        desktop={
          <TeacherTasksDesktop
            {...{
              menuItems,
              filterTasks,
              drafts,
              awaitingSubmissions,
              feedbacks,
              showDeletePopuphandler,
              showDateExtendPopuphandler,
              FilterSortAndCal,
              tasksSelected,
              MyCalendarFile,
              ...tasksDesktopData,
            }}
          />
        }
      />
    </>
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

const tasksStudentMobileData = {
  headerProps: assignmentsHeaderProps,
  frame1304Props: frame13041Data,
  tabs21Props: tabs23Data,
  tabs22Props: tabs24Data,
  frame19Props: frame192Data,
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
const tasksStudentTabletData = {
  frame1349: '/img/frame-1349-1.png',
  frame5: '/img/frame-5@2x.png',
  keepOrganizedWitho: 'Tasks',
  outstanding: 'Outstanding',
  number: '5',
  x2023JeddleAllRightsReserved: '© 2023 Jeddle. All rights reserved.',
  mainWebsite: 'Main Website',
  terms: 'Terms',
  privacy: 'Privacy',
  notificationsProps: notifications3Data,
  frame1304Props: frame13042Data,
  tabs21Props: tabs25Data,
  tabs22Props: tabs26Data,
  cards6Props: cards62Data,
  cards7Props: cards7Data,
  cards8Props: cards8Data,
  cards9Props: cards9Data,
  cards10Props: cards10Data,
  frame19Props: frame192Data,
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

const tasksLaptopData = {
  frame19Props: frame191Data,
  headerProps: taskHeaderProps,
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
};
