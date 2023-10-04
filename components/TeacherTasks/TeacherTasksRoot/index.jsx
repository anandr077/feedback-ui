import React from 'react';
import { getAssignments, getClasses } from '../../../service';
import ReactiveRender, { isSmallScreen } from '../../ReactiveRender';
import TeacherTasksStudentMobile from '../TeacherTasksStudentMobile';
import TeacherTasksStudentTablet from '../TeacherTasksStudentTablet';
import TeacherTasksLaptop from '../TeacherTasksLaptop';
import TeacherTasksDesktop from '../TeacherTasksDesktop';
import {
  assignmentsHeaderProps,
  taskHeaderProps,
} from '../../../utils/headerProps.js';
import _ from 'lodash';
import Loader from '../../Loader';
import DeleteAssignmentPopup from '../../DeleteAssignmentPopUp';
import ExtendAssignmentPopup from '../../ExtendAssignmentPopup';
import { useQueries } from 'react-query';

export default function TeacherTaskRoot() {
  const [assignments, setAssignments] = React.useState([]);
  const [filteredTasks, setFilteredTasks] = React.useState([]);
  const [classes, setClasses] = React.useState([]);
  const [showDeletePopup, setShowDeletePopup] = React.useState(false);
  const [selectedAssignment, setSelectedAssignment] = React.useState(null);
  const [showDateExtendPopup, setShowDateExtendPopup] = React.useState(false);


  const [assignmentsQuery, teacherClassesQuery] = useQueries([
    {
      queryKey: ['assignments'],
      queryFn: async () => {
        const result = await getAssignments();
        return result;
      },
      staleTime: 300000,
    },
    {
      queryKey: ['teacherclasses'],
      queryFn: async () => {
        const result = await getClasses();
        return result;
      },
      staleTime: 300000,
    },
  ]);

  React.useEffect(() => {
    if (assignmentsQuery.isSuccess) {
      setFilteredTasks(assignmentsQuery.data);
      setAssignments(assignmentsQuery.data);
    }
    if (teacherClassesQuery.isSuccess) {
      setClasses(teacherClassesQuery.data);
    }
  }, [assignmentsQuery.isSuccess, teacherClassesQuery.isSuccess]);

  if (assignmentsQuery.isLoading || teacherClassesQuery.isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  const drafts = filteredTasks.filter(
    (assignment) => assignment.submissionsStatus === 'DRAFT'
  );
  const awaitingSubmissions = filteredTasks.filter(
    (assignment) => assignment.submissionsStatus === 'AWAITING_SUBMISSIONS'
  );
  const feedbacks = filteredTasks.filter(
    (assignment) => assignment.submissionsStatus === 'FEEDBACK'
  );

  const classesItems = classes.map((clazz) => {
    return { value: clazz.id, label: clazz.title, category: 'CLASSES' };
  });

  const menuItems = [
    {
      name: 'CLASSES',
      title: 'Classes',
      items: classesItems,
    },
  ];

  const filterTasks = (selectedItems) => {
    const groupedData = _.groupBy(selectedItems, 'category');

    const classesValues = _.map(_.get(groupedData, 'CLASSES'), 'value');

    const filteredAssignments = _.filter(assignments, (assignment) => {
      if (_.isEmpty(classesValues)) {
        return true;
      }
      return _.some(assignment.classIds, (classId) =>
        _.includes(classesValues, classId)
      );
    });

    setFilteredTasks(filteredAssignments);
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
