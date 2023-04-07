import React from "react";
import ReactiveRender from "../ReactiveRender";
import DashboardHomeStudentLaptop from "../DashboardHomeStudentLaptop";
import DashboardHomeStudentDesktop from "../DashboardHomeStudentDesktop";
import DashboardHomeStudentTablet from "../DashboardHomeStudentTablet";
import DashboardHomeStudentMobile from "../DashboardHomeStudentMobile";
import { getTasks } from "../../service";

export default function StudentDashboardRoot() {
  const [allTasks, setAllTasks] = React.useState([]);

  React.useEffect(() => {
    getTasks().then((result) => {
      setAllTasks(result);
    });
  }, []);
  // return (
  //   <>
  //     {isLaptopView && (
  //       <DashboardHomeStudentLaptop
  //         {...{ allTasks, ...dashboardHomeStudentLaptopData }}
  //       />
  //     )}
  //     {isDesktopView && (
  //       <DashboardHomeStudentDesktop
  //         {...{ allTasks, ...dashboardHomeStudentDesktopData }}
  //       />
  //     )}
  //     {isTabletView && (
  //       <DashboardHomeStudentTablet
  //         {...{ allTasks, ...dashboardHomeStudentTabletData }}
  //       />
  //     )}
  //     {isMobileView && (
  //       <DashboardHomeStudentMobile
  //         {...{ allTasks, ...dashboardHomeStudentMobileData }}
  //       />
  //     )}
  //   </>
  // );

  return (
    <ReactiveRender
      mobile={
        <DashboardHomeStudentMobile
          {...{ allTasks, ...dashboardHomeStudentMobileData }}
        />
      }
      tablet={
        <DashboardHomeStudentTablet
          {...{ allTasks, ...dashboardHomeStudentTabletData }}
        />
      }
      laptop={
        <DashboardHomeStudentLaptop
          {...{ allTasks, ...dashboardHomeStudentLaptopData }}
        />
      }
      desktop={
        <DashboardHomeStudentDesktop
          {...{ allTasks, ...dashboardHomeStudentDesktopData }}
        />
      }
    />
  );
}

const studentDashboardheaderProps = {
  firstButton: {
    text: "Home",
    icon: "/icons/homeIconUnselected.png",
    iconSelected: "/icons/homeIconWhite.png",
    selected: true,
    redirect: "/dashboard-student",
  },
  secondButton: {
    text: "Task",
    icon: "/icons/taskIconUnselected.png",
    iconSelected: "/icons/taskIconWhite.png",
    selected: false,
    redirect: "/tasks",
  },
  thirdButton: {
    text: "Completed",
    icon: "/icons/submissionIconUnselected.png",
    iconSelected: "icons/submissionIconWhite.png",
    selected: false,
    redirect: "/submissions",
  },
};

const group120523Data = {
  arrowright: "/img/arrowright@2x.png",
};

const frame12082Data = {
  tasks: "Exemplar responses",
  group12052Props: group120523Data,
};

const dashboardHomeStudentMobileData = {
  keepOrganizedWitho1: "Welcome, Eleanor",
  keepOrganizedWitho2:
    "Your dashboard contains all the vital information you need to start learning right away",
  frame12082Props: frame12082Data,
};

const group120525Data = {
  arrowright: "/img/arrowright-2@2x.png",
};

const frame120823Data = {
  tasks: "Exemplar responses",
  group12052Props: group120525Data,
};
const group120524Data = {
  arrowright: "/img/arrowright-2@2x.png",
};
const frame120822Data = {
  tasks: "Tasks",
  group12052Props: group120524Data,
};

const dashboardHomeStudentTabletData = {
  keepOrganizedWitho1: "Welcome, Eleanor",
  keepOrganizedWitho2:
    "Your dashboard contains all the vital information you need to start learning right away",
  frame120821Props: frame120822Data,
  frame120822Props: frame120823Data,
};

const group12055Data = {
  className: "group-1205-2",
};
const group12056Data = {
  className: "group-1206-2",
};
const frame13402Data = {
  line17: "/img/line-17-5.png",
  group1205Props: group12056Data,
};

const dashboardHomeStudentLaptopData = {
  keepOrganizedWitho1: "Welcome, Eleanor",
  keepOrganizedWitho2:
    "Your dashboard contains all the vital information you need to start learning right away",
  maskGroup: "/img/mask-group-2.png",
  group1205Props: group12055Data,
  frame1340Props: frame13402Data,
  headerProps: studentDashboardheaderProps,
};

const group12053Data = {
  className: "group-1205-1",
};

const statusBubbles410Data = {
  crown: "/img/crown-3@2x.png",
};

const frame6425Data = {
  statusBubbles4Props: statusBubbles410Data,
};

const cards425Data = {
  frame64Props: frame6425Data,
};
const group12054Data = {
  className: "group-1206-1",
};
const frame13401Data = {
  line17: "/img/line-17-7.png",
  group1205Props: group12054Data,
  cards42Props: cards425Data,
};

const dashboardHomeStudentDesktopData = {
  keepOrganizedWitho1: "Welcome, Eleanor",
  keepOrganizedWitho2:
    "Your dashboard contains all the vital information you need to start learning right away",
  maskGroup: "/img/mask-group-3.png",
  group1205Props: group12053Data,
  frame1340Props: frame13401Data,
  headerProps: studentDashboardheaderProps,
};
