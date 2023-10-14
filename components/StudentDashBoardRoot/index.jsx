import React from 'react';
import ReactiveRender, { isSmallScreen } from '../ReactiveRender';
import DashboardHomeStudentLaptop from '../DashboardHomeStudentLaptop';
import DashboardHomeStudentDesktop from '../DashboardHomeStudentDesktop';
import DashboardHomeStudentTablet from '../DashboardHomeStudentTablet';
import DashboardHomeStudentMobile from '../DashboardHomeStudentMobile';
import { getTasks, getModelResponses } from '../../service';
import { homeHeaderProps } from '../../utils/headerProps.js';
import { limitParagraph } from '../../utils/strings';
import _ from 'lodash';
import Loader from '../Loader';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export default function StudentDashboardRoot(props) {
  const [allTasks, setAllTasks] = React.useState([]);
  const [modelResponses, setModelResponses] = React.useState([]);
  const [publishActionCompleted, setPublishActionCompleted] =
    React.useState(false);
  const [smallScreenView, setSmallScreenView] = React.useState(isSmallScreen());
  const queryClient = useQueryClient();

  const tasksQuery = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const result = await getTasks();
      return result;
    },
    staleTime: 300000,
  });
  const modelResponsesQuery = useQuery({
    queryKey: ['modelresponses'],
    queryFn: async () => {
      const result = await getModelResponses();
      return result;
    },
    staleTime: 300000,
  });

  React.useEffect(() => {
    if (tasksQuery.data) {
      setAllTasks(tasksQuery.data.slice(0, 10));
    }
    if (modelResponsesQuery.data) {
      const firstTen = modelResponsesQuery.data.slice(0, 10);
      const trimmedResponses = _.map(firstTen, (obj) => ({
        ...obj,
        response: limitParagraph(obj.response, 200),
      }));
      setModelResponses(trimmedResponses);
    }
  }, [tasksQuery.data, modelResponsesQuery.data]);

  React.useEffect(() => {
    queryClient.invalidateQueries(['modelresponses'], { force: true });
  }, [publishActionCompleted]);

  if (tasksQuery.isLoading || modelResponsesQuery.isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  const outstandingTasks = allTasks.filter(
    (task) => task.progressStatus === 'OUTSTANDING'
  );
  const inProgressTasks = allTasks.filter(
    (task) => task.progressStatus === 'DRAFT'
  );
  const overdueTasks = allTasks.filter(
    (task) => task.progressStatus === 'OVERDUE'
  );

  return (
    <ReactiveRender
      mobile={
        <DashboardHomeStudentMobile
          {...{
            outstandingTasks,
            inProgressTasks,
            overdueTasks,
            modelResponses,
            setPublishActionCompleted,
            ...dashboardHomeStudentMobileData,
          }}
        />
      }
      tablet={
        <DashboardHomeStudentTablet
          {...{
            outstandingTasks,
            inProgressTasks,
            overdueTasks,
            modelResponses,
            setPublishActionCompleted,
            ...dashboardHomeStudentTabletData,
          }}
        />
      }
      laptop={
        <DashboardHomeStudentLaptop
          {...{
            outstandingTasks,
            inProgressTasks,
            overdueTasks,
            modelResponses,
            setPublishActionCompleted,
            ...dashboardHomeStudentLaptopData,
          }}
        />
      }
      desktop={
        <DashboardHomeStudentDesktop
          {...{
            outstandingTasks,
            inProgressTasks,
            overdueTasks,
            modelResponses,
            setPublishActionCompleted,
            ...dashboardHomeStudentDesktopData,
          }}
        />
      }
    />
  );
}

const group120523Data = {
  arrowright: '/img/arrowright@2x.png',
};

const frame12082Data = {
  tasks: 'Exemplars',
  group12052Props: group120523Data,
};

const dashboardHomeStudentMobileData = {
  keepOrganizedWitho1: 'Welcome, Eleanor',
  keepOrganizedWitho2:
    'Track your work. Improve your writing. Share your insights.',
  frame12082Props: frame12082Data,
};

const group120525Data = {
  arrowright: '/img/arrowright-2@2x.png',
};

const frame120823Data = {
  tasks: 'Exemplars',
  group12052Props: group120525Data,
};
const group120524Data = {
  arrowright: '/img/arrowright-2@2x.png',
};
const frame120822Data = {
  tasks: 'Tasks',
  group12052Props: group120524Data,
};

const dashboardHomeStudentTabletData = {
  keepOrganizedWitho1: 'Welcome, Eleanor',
  keepOrganizedWitho2:
    'Track your work. Improve your writing. Share your insights.',
  frame120821Props: frame120822Data,
  frame120822Props: frame120823Data,
};

const group12055Data = {
  className: 'group-1205-2',
};
const group12056Data = {
  className: 'group-1206-2',
};
const frame13402Data = {
  line17: '/img/line-17-5.png',
  group1205Props: group12056Data,
};

const dashboardHomeStudentLaptopData = {
  keepOrganizedWitho1: 'Welcome, Eleanor',
  keepOrganizedWitho2:
    'Track your work. Improve your writing. Share your insights.',
  maskGroup: '/img/mask-group-2.png',
  group1205Props: group12055Data,
  frame1340Props: frame13402Data,
  headerProps: homeHeaderProps,
};

const group12053Data = {
  className: 'group-1205-1',
};

const statusBubbles410Data = {
  crown: '/img/crown-3@2x.png',
};

const frame6425Data = {
  statusBubbles4Props: statusBubbles410Data,
};

const cards425Data = {
  frame64Props: frame6425Data,
};
const group12054Data = {
  className: 'group-1206-1',
};
const frame13401Data = {
  line17: '/img/line-17-7.png',
  group1205Props: group12054Data,
  cards42Props: cards425Data,
};

const dashboardHomeStudentDesktopData = {
  keepOrganizedWitho1: 'Welcome, Eleanor',
  keepOrganizedWitho2:
    'Track your work. Improve your writing. Share your insights.',
  maskGroup: '/img/mask-group-3.png',
  group1205Props: group12053Data,
  frame1340Props: frame13401Data,
  headerProps: homeHeaderProps,
};
