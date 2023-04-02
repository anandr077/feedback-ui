import { default as React, default as React, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AssignmentTheoryLaptop from "./components/AssignmentTheoryLaptop";
import CreateAAssignmentLaptop from "./components/CreateAAssignmentLaptop";
import CreateAssignment from "./components/CreateAssignment";
import DashboardHomeStudentDesktop from "./components/DashboardHomeStudentDesktop";
import DashboardHomeStudentLaptop from "./components/DashboardHomeStudentLaptop";
import DashboardHomeStudentMobile from "./components/DashboardHomeStudentMobile";
import DashboardHomeStudentTablet from "./components/DashboardHomeStudentTablet";
import TasksDesktop from "./components/TasksDesktop";
import TasksLaptop from "./components/TasksLaptop";
import TasksStudentMobile from "./components/TasksStudentMobile";
import TasksStudentTablet from "./components/TasksStudentTablet";
import { getSubmissionById, getTasks } from "./service.js";
function App() {
  const isMobileView = useMediaQuery({ maxWidth: 1023 });
  const isTabletView = useMediaQuery({ minWidth: 1024, maxWidth: 1439 });
  const isLaptopView = useMediaQuery({ minWidth: 1440, maxWidth: 1919 });
  const isDesktopView = useMediaQuery({ minWidth: 1920 });
  return (
    <Router>
      <Switch>
        <Route path="/assignments/new">
          <CreateAssignment />
        </Route>
        {/* <Route path="/tasks">
          {tasks()}
        </Route>
        <Route path="/submissions">
          {submissions()}
        </Route>
        <Route path="/">
          {dashboard()}
        </Route> */}
      </Switch>
    </Router>
  );

  // function submissions() {
  //   const queryParameters = new URLSearchParams(window.location.search)
  //   const submissionId = queryParameters.get("submissionId")
  //   const serialNumber = queryParameters.get("serialNumber")?queryParameters.get("serialNumber"):1

  //   const [isLoading, setIsLoading] = useState(true);
  //   const [submission, setSubmission] = useState(null);
  //   const [question, setQuestion] = useState(null);
  //   const [answer, setAnswer] = useState(null);

  //   useEffect(() => {
  //     getSubmissionById(submissionId).then((result) => {
  //       if (result) {
  //         setSubmission(result);

  //         const maybeQuestion = result.assignment.questions.find((q) => {
  //           return parseInt(q.serialNumber) === parseInt(serialNumber)
  //         })

  //         const maybeAnswer = result.answers?.find((a) => {
  //           return parseInt(a.serialNumber) === parseInt(serialNumber)
  //         })
  //         setQuestion(maybeQuestion)
  //         setAnswer(maybeAnswer)
  //         setIsLoading(false);
  //       }
  //     });
  //   }, submission);
  //   if (isLoading) {
  //     return <div>Loading...</div>;
  //   }
  //   if (question == null) {
  //     return <div>Wrong serial number...</div>;
  //   }
  //   return <AssignmentTheoryLaptop
  //         {...{ submission, question, answer, ...assignmentTheoryLaptopData }} />;
  // }

  // function tasks() {
  //   const [allTasks, setAllTasks] = useState([]);

  //   useEffect(() => {
  //     getTasks().then((result) => {
  //       setAllTasks(result);
  //     });
  //   }, []);
  //   return <>
  //     {isMobileView && (
  //       <TasksStudentMobile
  //         {...{ allTasks, ...tasksStudentMobileData }} />
  //     )}
  //     {isTabletView && (
  //       <TasksStudentTablet
  //         {...{ allTasks, ...tasksStudentTabletData }} />
  //     )}
  //     {isLaptopView && (
  //       <TasksLaptop {...{ allTasks, ...tasksLaptopData }} />
  //     )}
  //     {isDesktopView && (
  //       <TasksDesktop {...{ allTasks, ...tasksDesktopData }} />
  //     )}
  //   </>;
  // }

  // function dashboard() {
  //   const [allTasks, setAllTasks] = useState([]);

  //   useEffect(() => {
  //     getTasks().then((result) => {
  //       setAllTasks(result);
  //     });
  //   }, []);
  //   return <>
  //     {isLaptopView && (
  //       <DashboardHomeStudentLaptop
  //         {...{ allTasks, ...dashboardHomeStudentLaptopData }} />
  //     )}
  //     {isDesktopView && (
  //       <DashboardHomeStudentDesktop
  //         {...{ allTasks, ...dashboardHomeStudentDesktopData }} />
  //     )}
  //     {isTabletView && (
  //       <DashboardHomeStudentTablet
  //         {...{ allTasks, ...dashboardHomeStudentTabletData }} />
  //     )}
  //     {isMobileView && (
  //       <DashboardHomeStudentMobile
  //         {...{ allTasks, ...dashboardHomeStudentMobileData }} />
  //     )}
  //   </>;
  // }
}

export default App;

const navElement4Data = {
  home3: "/img/home3@2x.png",
  place: "Home",
};

const navElement5Data = {
  home3: "/img/tasksquare@2x.png",
  place: "Tasks",
  className: "nav-element-4",
};

const navElement6Data = {
  home3: "/img/clipboardtick@2x.png",
  place: "Completed",
  className: "nav-element-5",
};

const notifications4Data = {
  src: "/img/notificationbing@2x.png",
};

const notifications1Data = {
  src: "/img/notificationbing@2x.png",
};

const notifications3Data = {
  src: "/img/notificationbing@2x.png",
};

const navElement1Data = {
  home3: "/img/home3@2x.png",
  place: "Home",
};

const navElement2Data = {
  home3: "/img/tasksquare@2x.png",
  place: "Tasks",
  className: "nav-element-1",
};

const navElement3Data = {
  home3: "/img/clipboardtick@2x.png",
  place: "Completed",
  className: "nav-element-2",
};

const notifications4Data1 = {
  src: "/img/notificationbing-2@2x.png",
};

const taskheaderProps = {
  firstButton: {
    text: "Home",
    icon: "/icons/homeIconUnselected.png",
    iconSelected: "/icons/homeIconWhite.png",
    selected: false,
    redirect: "/dashboard-student",
  },
  secondButton: {
    text: "Task",
    icon: "/icons/taskIconUnselected.png",
    iconSelected: "/icons/taskIconWhite.png",
    selected: true,
    redirect: "/tasks",
  },
  thirdButton: {
    text: "Completed",
    icon: "/icons/submissionIconUnselected.png",
    iconSelected: "",
    selected: false,
    redirect: "/submissions",
  },
};

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
    iconSelected: "",
    selected: false,
    redirect: "/submissions",
  },
};

const tabs21Data = {
  children: "In progress",
};

const tabs22Data = {
  children: "Overdue",
};

const statusBubbles21Data = {
  children: "Theory",
};

const statusBubbles31Data = {
  star1: "/img/star1@2x.png",
};

const frame61Data = {
  statusBubbles2Props: statusBubbles21Data,
  statusBubbles3Props: statusBubbles31Data,
};

const content1Data = {
  dueOn2April2023: "Due on 2 April 2023",
};

const cards1Data = {
  frame6Props: frame61Data,
  contentProps: content1Data,
};

const statusBubbles22Data = {
  children: "Assignment",
};

const statusBubbles23Data = {
  children: "MCQ",
};

const frame621Data = {
  statusBubbles21Props: statusBubbles22Data,
  statusBubbles22Props: statusBubbles23Data,
};

const content2Data = {
  dueOn2April2023: "Due on 10 April 2023",
};

const cards21Data = {
  frame62Props: frame621Data,
  contentProps: content2Data,
};

const statusBubbles24Data = {
  children: "MCQ",
};

const frame631Data = {
  statusBubbles2Props: statusBubbles24Data,
};

const content3Data = {
  dueOn2April2023: "Due on 2 April 2023",
};

const cards31Data = {
  frame63Props: frame631Data,
  contentProps: content3Data,
};

const statusBubbles25Data = {
  children: "Theory",
};

const frame641Data = {
  statusBubbles2Props: statusBubbles25Data,
};

const content4Data = {
  dueOn2April2023: "Due on 2 April 2023",
};

const cards41Data = {
  frame64Props: frame641Data,
  contentProps: content4Data,
};

const statusBubbles26Data = {
  children: "Assignment",
};

const statusBubbles27Data = {
  children: "Theory",
};

const frame651Data = {
  statusBubbles21Props: statusBubbles26Data,
  statusBubbles22Props: statusBubbles27Data,
};

const content5Data = {
  dueOn2April2023: "Due on 2 April 2023",
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

const tasksStudentData = {
  logo: "/img/logo@2x.png",
  frame5: "/img/frame-5@2x.png",
  keepOrganizedWitho: "Tasks",
  outstanding: "Outstanding",
  number: "5",
  x2023JeddleAllRightsReserved: "© 2023 Jeddle. All rights reserved.",
  mainWebsite: "Main Website",
  terms: "Terms",
  privacy: "Privacy",
  notificationsProps: notifications1Data,
  tabs21Props: tabs21Data,
  tabs22Props: tabs22Data,
  frame19Props: frame191Data,
};

const frame13041Data = {
  iconsaxLinearSort: "/img/iconsax-linear-sort@2x.png",
};

const tabs23Data = {
  children: "In progress",
  className: "tabs-3",
};

const tabs24Data = {
  children: "Overdue",
  className: "tabs-4",
};

const statusBubbles28Data = {
  children: "Theory",
};

const statusBubbles32Data = {
  star1: "/img/star1@2x.png",
};

const frame66Data = {
  statusBubbles2Props: statusBubbles28Data,
  statusBubbles3Props: statusBubbles32Data,
};

const content6Data = {
  dueOn2April2023: "Due on 2 April 2023",
};

const cards6Data = {
  frame6Props: frame66Data,
  contentProps: content6Data,
};

const statusBubbles29Data = {
  children: "Assignment",
};

const statusBubbles210Data = {
  children: "MCQ",
};

const frame622Data = {
  statusBubbles21Props: statusBubbles29Data,
  statusBubbles22Props: statusBubbles210Data,
};

const content7Data = {
  dueOn2April2023: "Due on 10 April 2023",
};

const cards22Data = {
  frame62Props: frame622Data,
  contentProps: content7Data,
};

const statusBubbles211Data = {
  children: "MCQ",
};

const frame632Data = {
  statusBubbles2Props: statusBubbles211Data,
};

const content8Data = {
  dueOn2April2023: "Due on 2 April 2023",
};

const cards32Data = {
  frame63Props: frame632Data,
  contentProps: content8Data,
};

const statusBubbles212Data = {
  children: "Theory",
};

const frame642Data = {
  statusBubbles2Props: statusBubbles212Data,
};

const content9Data = {
  dueOn2April2023: "Due on 2 April 2023",
};

const cards42Data = {
  frame64Props: frame642Data,
  contentProps: content9Data,
};

const statusBubbles213Data = {
  children: "Assignment",
};

const statusBubbles214Data = {
  children: "Theory",
};

const frame652Data = {
  statusBubbles21Props: statusBubbles213Data,
  statusBubbles22Props: statusBubbles214Data,
};

const content10Data = {
  dueOn2April2023: "Due on 2 April 2023",
};

const cards52Data = {
  frame65Props: frame652Data,
  contentProps: content10Data,
};

const frame192Data = {
  className: "frame-19-1",
  cardsProps: cards6Data,
  cards2Props: cards22Data,
  cards3Props: cards32Data,
  cards4Props: cards42Data,
  cards5Props: cards52Data,
};

const tasksStudentMobileData = {
  frame1304Props: frame13041Data,
  tabs21Props: tabs23Data,
  tabs22Props: tabs24Data,
  frame19Props: frame192Data,
};

const frame13042Data = {
  iconsaxLinearSort: "/img/iconsax-linear-sort@2x.png",
};

const tabs25Data = {
  children: "In progress",
};

const tabs26Data = {
  children: "Overdue",
};

const statusBubbles215Data = {
  children: "Theory",
};

const statusBubbles33Data = {
  star1: "/img/star1-1@2x.png",
};

const frame67Data = {
  statusBubbles2Props: statusBubbles215Data,
  statusBubbles3Props: statusBubbles33Data,
};

const content22Data = {
  dueOn2April2023: "Due on 2 April 2023",
};

const cards62Data = {
  frame6Props: frame67Data,
  content2Props: content22Data,
};

const statusBubbles216Data = {
  children: "Assignment",
};

const statusBubbles217Data = {
  children: "MCQ",
};

const frame623Data = {
  statusBubbles21Props: statusBubbles216Data,
  statusBubbles22Props: statusBubbles217Data,
};

const content23Data = {
  dueOn2April2023: "Due on 10 April 2023",
};

const cards7Data = {
  frame62Props: frame623Data,
  content2Props: content23Data,
};

const statusBubbles218Data = {
  children: "MCQ",
};

const frame633Data = {
  statusBubbles2Props: statusBubbles218Data,
};

const content24Data = {
  dueOn2April2023: "Due on 2 April 2023",
};

const cards8Data = {
  frame63Props: frame633Data,
  content2Props: content24Data,
};

const statusBubbles219Data = {
  children: "Theory",
};

const frame643Data = {
  statusBubbles2Props: statusBubbles219Data,
};

const content25Data = {
  dueOn2April2023: "Due on 2 April 2023",
};

const cards9Data = {
  frame64Props: frame643Data,
  content2Props: content25Data,
};

const statusBubbles220Data = {
  children: "Assignment",
};

const statusBubbles221Data = {
  children: "Theory",
};

const frame653Data = {
  statusBubbles21Props: statusBubbles220Data,
  statusBubbles22Props: statusBubbles221Data,
};

const content26Data = {
  dueOn2April2023: "Due on 2 April 2023",
};

const cards10Data = {
  frame65Props: frame653Data,
  content2Props: content26Data,
};

const tasksStudentTabletData = {
  frame1349: "/img/frame-1349-1.png",
  frame5: "/img/frame-5@2x.png",
  keepOrganizedWitho: "Tasks",
  outstanding: "Outstanding",
  number: "5",
  x2023JeddleAllRightsReserved: "© 2023 Jeddle. All rights reserved.",
  mainWebsite: "Main Website",
  terms: "Terms",
  privacy: "Privacy",
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

const frame13043Data = {
  iconsaxLinearSort: "/img/iconsax-linear-sort-2@2x.png",
};

const frame13061Data = {
  frame1304Props: frame13043Data,
};

const frame13531Data = {
  outstanding: "Outstanding",
  number: "5",
};

const statusBubbles222Data = {
  children: "Theory",
};

const statusBubbles34Data = {
  star1: "/img/star1-1@2x.png",
};

const frame68Data = {
  statusBubbles2Props: statusBubbles222Data,
  statusBubbles3Props: statusBubbles34Data,
};

const content32Data = {
  clock: "/img/clock@2x.png",
  dueOn2April2023: "Due on 10 April 2023",
};

const cards11Data = {
  frame6Props: frame68Data,
  content3Props: content32Data,
};

const statusBubbles223Data = {
  children: "Assignment",
};

const statusBubbles224Data = {
  children: "MCQ",
};

const frame624Data = {
  statusBubbles21Props: statusBubbles223Data,
  statusBubbles22Props: statusBubbles224Data,
};

const content33Data = {
  clock: "/img/clock@2x.png",
  dueOn2April2023: "Due on 10 April 2023",
};

const cards121Data = {
  frame62Props: frame624Data,
  content3Props: content33Data,
};

const statusBubbles225Data = {
  children: "MCQ",
};

const frame634Data = {
  statusBubbles2Props: statusBubbles225Data,
};

const content34Data = {
  clock: "/img/clock@2x.png",
  dueOn2April2023: "Due on 2 April 2023",
};

const cards131Data = {
  frame63Props: frame634Data,
  content3Props: content34Data,
};

const statusBubbles226Data = {
  children: "Theory",
};

const frame644Data = {
  statusBubbles2Props: statusBubbles226Data,
};

const content35Data = {
  clock: "/img/clock@2x.png",
  dueOn2April2023: "Due on 2 April 2023",
};

const cards141Data = {
  frame64Props: frame644Data,
  content3Props: content35Data,
};

const statusBubbles227Data = {
  children: "Assignment",
};

const statusBubbles228Data = {
  children: "Theory",
};

const frame654Data = {
  statusBubbles21Props: statusBubbles227Data,
  statusBubbles22Props: statusBubbles228Data,
};

const cards151Data = {
  frame65Props: frame654Data,
};

const frame13532Data = {
  outstanding: "In progress",
  number: "4",
};

const statusBubbles229Data = {
  children: "Theory",
};

const frame645Data = {
  statusBubbles2Props: statusBubbles229Data,
};

const content36Data = {
  clock: "/img/clock-15@2x.png",
  dueOn2April2023: "Due on 2 April 2023",
};

const cards142Data = {
  className: "cards-17",
  frame64Props: frame645Data,
  content3Props: content36Data,
};

const statusBubbles230Data = {
  children: "Assignment",
};

const statusBubbles231Data = {
  children: "MCQ",
};

const frame625Data = {
  statusBubbles21Props: statusBubbles230Data,
  statusBubbles22Props: statusBubbles231Data,
};

const content37Data = {
  clock: "/img/clock-15@2x.png",
  dueOn2April2023: "Due on 2 April 2023",
};

const cards122Data = {
  className: "cards-12",
  frame62Props: frame625Data,
  content3Props: content37Data,
};

const statusBubbles232Data = {
  children: "MCQ",
};

const frame635Data = {
  statusBubbles2Props: statusBubbles232Data,
};

const content38Data = {
  clock: "/img/clock-15@2x.png",
  dueOn2April2023: "Due on 2 April 2023",
};

const cards132Data = {
  className: "cards-14",
  frame63Props: frame635Data,
  content3Props: content38Data,
};

const statusBubbles233Data = {
  children: "Assignment",
};

const statusBubbles234Data = {
  children: "Theory",
};

const frame655Data = {
  statusBubbles21Props: statusBubbles233Data,
  statusBubbles22Props: statusBubbles234Data,
};

const content39Data = {
  clock: "/img/clock-15@2x.png",
  dueOn2April2023: "Due on 2 April 2023",
};

const cards161Data = {
  frame65Props: frame655Data,
  content3Props: content39Data,
};

const statusBubbles235Data = {
  children: "Assignment",
};

const statusBubbles236Data = {
  children: "Theory",
};

const frame656Data = {
  statusBubbles21Props: statusBubbles235Data,
  statusBubbles22Props: statusBubbles236Data,
};

const content310Data = {
  clock: "/img/clock-19@2x.png",
  dueOn2April2023: "Due on 2 April 2023",
};

const cards162Data = {
  className: "cards-21",
  frame65Props: frame656Data,
  content3Props: content310Data,
};

const statusBubbles237Data = {
  children: "Assignment",
};

const statusBubbles238Data = {
  children: "Theory",
};

const frame657Data = {
  statusBubbles21Props: statusBubbles237Data,
  statusBubbles22Props: statusBubbles238Data,
};

const content311Data = {
  clock: "/img/clock-19@2x.png",
  dueOn2April2023: "Due on 2 April 2023",
};

const cards163Data = {
  className: "cards-22",
  frame65Props: frame657Data,
  content3Props: content311Data,
};

const statusBubbles239Data = {
  children: "MCQ",
};

const frame636Data = {
  statusBubbles2Props: statusBubbles239Data,
};

const content312Data = {
  clock: "/img/clock-19@2x.png",
  dueOn2April2023: "Due on 2 April 2023",
};

const cards133Data = {
  className: "cards-15",
  frame63Props: frame636Data,
  content3Props: content312Data,
};

const statusBubbles240Data = {
  children: "Assignment",
};

const statusBubbles241Data = {
  children: "Theory",
};

const frame658Data = {
  statusBubbles21Props: statusBubbles240Data,
  statusBubbles22Props: statusBubbles241Data,
};

const content313Data = {
  clock: "/img/clock-19@2x.png",
  dueOn2April2023: "Due on 2 April 2023",
};

const cards164Data = {
  className: "cards-23",
  frame65Props: frame658Data,
  content3Props: content313Data,
};

const statusBubbles242Data = {
  children: "Assignment",
};

const statusBubbles243Data = {
  children: "Theory",
};

const frame659Data = {
  statusBubbles21Props: statusBubbles242Data,
  statusBubbles22Props: statusBubbles243Data,
};

const content314Data = {
  clock: "/img/clock-19@2x.png",
  dueOn2April2023: "Due on 2 April 2023",
};

const cards165Data = {
  className: "cards-24",
  frame65Props: frame659Data,
  content3Props: content314Data,
};

const notifications5Data = {
  src: "/img/notificationbing@2x.png",
};

const frame13044Data = {
  iconsaxLinearSort: "/img/iconsax-linear-sort-2@2x.png",
};

const frame13062Data = {
  frame1304Props: frame13044Data,
};

const frame135322Data = {
  outstanding: "Outstanding",
  number: "5",
};

const statusBubbles244Data = {
  children: "Theory",
};

const statusBubbles35Data = {
  star1: "/img/star1-1@2x.png",
};

const frame69Data = {
  statusBubbles2Props: statusBubbles244Data,
  statusBubbles3Props: statusBubbles35Data,
};

const content42Data = {
  clock: "/img/clock@2x.png",
  dueOn2April2023: "Due on 10 April 2023",
};

const cards17Data = {
  frame6Props: frame69Data,
  content4Props: content42Data,
};

const statusBubbles245Data = {
  children: "Assignment",
};

const statusBubbles246Data = {
  children: "MCQ",
};

const frame626Data = {
  statusBubbles21Props: statusBubbles245Data,
  statusBubbles22Props: statusBubbles246Data,
};

const content43Data = {
  clock: "/img/clock@2x.png",
  dueOn2April2023: "Due on 10 April 2023",
};

const cards181Data = {
  frame62Props: frame626Data,
  content4Props: content43Data,
};

const statusBubbles247Data = {
  children: "MCQ",
};

const frame637Data = {
  statusBubbles2Props: statusBubbles247Data,
};

const content44Data = {
  clock: "/img/clock@2x.png",
  dueOn2April2023: "Due on 2 April 2023",
};

const cards191Data = {
  frame63Props: frame637Data,
  content4Props: content44Data,
};

const statusBubbles248Data = {
  children: "Theory",
};

const frame646Data = {
  statusBubbles2Props: statusBubbles248Data,
};

const content45Data = {
  clock: "/img/clock@2x.png",
  dueOn2April2023: "Due on 2 April 2023",
};

const cards201Data = {
  frame64Props: frame646Data,
  content4Props: content45Data,
};

const statusBubbles249Data = {
  children: "Assignment",
};

const statusBubbles250Data = {
  children: "Theory",
};

const frame6510Data = {
  statusBubbles21Props: statusBubbles249Data,
  statusBubbles22Props: statusBubbles250Data,
};

const cards152Data = {
  className: "cards-19",
  frame65Props: frame6510Data,
};

const frame135323Data = {
  outstanding: "In progress",
  number: "4",
};

const statusBubbles251Data = {
  children: "Theory",
};

const frame647Data = {
  statusBubbles2Props: statusBubbles251Data,
};

const content46Data = {
  clock: "/img/clock-15@2x.png",
  dueOn2April2023: "Due on 2 April 2023",
};

const cards202Data = {
  className: "cards-32",
  frame64Props: frame647Data,
  content4Props: content46Data,
};

const statusBubbles252Data = {
  children: "Assignment",
};

const statusBubbles253Data = {
  children: "MCQ",
};

const frame627Data = {
  statusBubbles21Props: statusBubbles252Data,
  statusBubbles22Props: statusBubbles253Data,
};

const content47Data = {
  clock: "/img/clock-15@2x.png",
  dueOn2April2023: "Due on 2 April 2023",
};

const cards182Data = {
  className: "cards-27",
  frame62Props: frame627Data,
  content4Props: content47Data,
};

const statusBubbles254Data = {
  children: "MCQ",
};

const frame638Data = {
  statusBubbles2Props: statusBubbles254Data,
};

const content48Data = {
  clock: "/img/clock-15@2x.png",
  dueOn2April2023: "Due on 2 April 2023",
};

const cards192Data = {
  className: "cards-29",
  frame63Props: frame638Data,
  content4Props: content48Data,
};

const statusBubbles255Data = {
  children: "Assignment",
};

const statusBubbles256Data = {
  children: "Theory",
};

const frame6511Data = {
  statusBubbles21Props: statusBubbles255Data,
  statusBubbles22Props: statusBubbles256Data,
};

const content49Data = {
  clock: "/img/clock-15@2x.png",
  dueOn2April2023: "Due on 2 April 2023",
};

const cards211Data = {
  frame65Props: frame6511Data,
  content4Props: content49Data,
};

const statusBubbles257Data = {
  children: "Assignment",
};

const statusBubbles258Data = {
  children: "Theory",
};

const frame6512Data = {
  statusBubbles21Props: statusBubbles257Data,
  statusBubbles22Props: statusBubbles258Data,
};

const content410Data = {
  clock: "/img/clock-19@2x.png",
  dueOn2April2023: "Due on 2 April 2023",
};

const cards212Data = {
  className: "cards-34",
  frame65Props: frame6512Data,
  content4Props: content410Data,
};

const statusBubbles259Data = {
  children: "Assignment",
};

const statusBubbles260Data = {
  children: "Theory",
};

const frame6513Data = {
  statusBubbles21Props: statusBubbles259Data,
  statusBubbles22Props: statusBubbles260Data,
};

const content411Data = {
  clock: "/img/clock-19@2x.png",
  dueOn2April2023: "Due on 2 April 2023",
};

const cards213Data = {
  className: "cards-35",
  frame65Props: frame6513Data,
  content4Props: content411Data,
};

const statusBubbles261Data = {
  children: "MCQ",
};

const frame639Data = {
  statusBubbles2Props: statusBubbles261Data,
};

const content412Data = {
  clock: "/img/clock-19@2x.png",
  dueOn2April2023: "Due on 2 April 2023",
};

const cards193Data = {
  className: "cards-30",
  frame63Props: frame639Data,
  content4Props: content412Data,
};

const statusBubbles262Data = {
  children: "Assignment",
};

const statusBubbles263Data = {
  children: "Theory",
};

const frame6514Data = {
  statusBubbles21Props: statusBubbles262Data,
  statusBubbles22Props: statusBubbles263Data,
};

const content413Data = {
  clock: "/img/clock-19@2x.png",
  dueOn2April2023: "Due on 2 April 2023",
};

const cards214Data = {
  className: "cards-36",
  frame65Props: frame6514Data,
  content4Props: content413Data,
};

const statusBubbles264Data = {
  children: "Assignment",
};

const statusBubbles265Data = {
  children: "Theory",
};

const frame6515Data = {
  statusBubbles21Props: statusBubbles264Data,
  statusBubbles22Props: statusBubbles265Data,
};

const content414Data = {
  clock: "/img/clock-19@2x.png",
  dueOn2April2023: "Due on 2 April 2023",
};

const cards215Data = {
  className: "cards-37",
  frame65Props: frame6515Data,
  content4Props: content414Data,
};

const tasksLaptopData = {
  frame19Props: frame191Data,
  headerProps: taskheaderProps,
};

const navElement8Data = {
  iconHome: "/img/home3@2x.png",
  place: "Home",
};

const navElement213Data = {
  tasksquare: "/img/tasksquare@2x.png",
  home: "Tasks",
};

const navElement214Data = {
  tasksquare: "/img/clipboardtick@2x.png",
  home: "Submissions",
  className: "nav-element-18",
};

const notifications13Data = {
  src: "/img/notificationbing-2@2x.png",
};

const frame47Data = {
  maskGroup: "/img/mask-group-4@2x.png",
  className: "frame-4-5",
};

const group12055Data = {
  className: "group-1205-2",
};

const statusBubbles80Data = {
  children: "Assignment",
};

const statusBubbles81Data = {
  children: "Theory",
};

const frame6122Data = {
  statusBubbles1Props: statusBubbles80Data,
  statusBubbles2Props: statusBubbles81Data,
};

const cards272Data = {
  iconClock: "/img/clock-4@2x.png",
  frame612Props: frame6122Data,
};

const group12056Data = {
  className: "group-1206-2",
};

const statusBubbles413Data = {
  crown: "/img/crown-2@2x.png",
};

const frame6428Data = {
  statusBubbles4Props: statusBubbles413Data,
};

const cards426Data = {
  frame64Props: frame6428Data,
};

const frame13402Data = {
  line17: "/img/line-17-5.png",
  group1205Props: group12056Data,
  cards42Props: cards426Data,
};

const frame6627Data = {
  className: "frame-6-6",
};

const frame6112Data = {
  frame662Props: frame6627Data,
};

const dashboardHomeStudentLaptopData = {
  frame1343: "/img/frame-1343-1@2x.png",
  keepOrganizedWitho1: "Welcome, Eleanor",
  keepOrganizedWitho2:
    "Your dashboard contains all the vital information you need to start learning right away",
  maskGroup: "/img/mask-group-2.png",
  tasks: "Tasks",
  line17: "/img/line-17-4.png",
  line16: "/img/line-17-4.png",
  navElementProps: navElement8Data,
  navElement21Props: navElement213Data,
  navElement22Props: navElement214Data,
  notificationsProps: notifications13Data,
  frame4Props: frame47Data,
  group1205Props: group12055Data,
  cards27Props: cards272Data,
  frame1340Props: frame13402Data,
  frame611Props: frame6112Data,
  headerProps: studentDashboardheaderProps,
};

const navElement7Data = {
  iconHome: "/img/home3@2x.png",
  place: "Home",
};

const navElement211Data = {
  tasksquare: "/img/tasksquare@2x.png",
  home: "Tasks",
};

const navElement212Data = {
  tasksquare: "/img/clipboardtick@2x.png",
  home: "Submissions",
  className: "nav-element-17",
};

const notifications10Data = {
  src: "/img/notificationbing-2@2x.png",
};

const frame46Data = {
  maskGroup: "/img/mask-group-5@2x.png",
  className: "frame-4-4",
};

const group12053Data = {
  className: "group-1205-1",
};

const statusBubbles74Data = {
  children: "Assignment",
};

const statusBubbles75Data = {
  children: "Theory",
};

const frame6121Data = {
  statusBubbles1Props: statusBubbles74Data,
  statusBubbles2Props: statusBubbles75Data,
};

const cards271Data = {
  iconClock: "/img/clock-6@2x.png",
  frame612Props: frame6121Data,
};

const group12054Data = {
  className: "group-1206-1",
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

const frame13401Data = {
  line17: "/img/line-17-7.png",
  group1205Props: group12054Data,
  cards42Props: cards425Data,
};

const frame6626Data = {
  className: "frame-6-6",
};

const frame6541Data = {
  frame662Props: frame6626Data,
};

const dashboardHomeStudentDesktopData = {
  frame1343: "/img/frame-1343@2x.png",
  keepOrganizedWitho1: "Welcome, Eleanor",
  keepOrganizedWitho2:
    "Your dashboard contains all the vital information you need to start learning right away",
  maskGroup: "/img/mask-group-3.png",
  tasks: "Tasks",
  line17: "/img/line-17-6.png",
  line16: "/img/line-17-6.png",
  navElementProps: navElement7Data,
  navElement21Props: navElement211Data,
  navElement22Props: navElement212Data,
  notificationsProps: notifications10Data,
  frame4Props: frame46Data,
  group1205Props: group12053Data,
  cards27Props: cards271Data,
  frame1340Props: frame13401Data,
  frame65Props: frame6541Data,
  headerProps: studentDashboardheaderProps,
};

const notifications12Data = {
  src: "/img/notificationbing@2x.png",
};

const group120524Data = {
  arrowright: "/img/arrowright-2@2x.png",
};

const frame120822Data = {
  tasks: "Tasks",
  group12052Props: group120524Data,
};

const statusBubbles78Data = {
  children: "Assignment",
};

const statusBubbles79Data = {
  children: "MCQ",
};

const frame6723Data = {
  statusBubbles1Props: statusBubbles78Data,
  statusBubbles2Props: statusBubbles79Data,
};

const cards30Data = {
  physicsThermodyna: "Physics - thermodynamics assignment questions (MCQ)",
  fundamentalsOfThermalPhysics: "Fundamentals of thermal physics",
  frame672Props: frame6723Data,
};

const group120525Data = {
  arrowright: "/img/arrowright-2@2x.png",
};

const frame120823Data = {
  tasks: "Exemplar responses",
  group12052Props: group120525Data,
};

const statusBubbles412Data = {
  crown: "/img/crown@2x.png",
};

const frame6427Data = {
  statusBubbles4Props: statusBubbles412Data,
};

const cards311Data = {
  physicsThermodyna: "Physics - thermodynamics assignment questions (MCQ)",
  fundamentalsOfThermalPhysics: "Fundamentals of thermal physics",
  frame642Props: frame6427Data,
};

const dashboardHomeStudentTabletData = {
  union: "/img/union@2x.png",
  vector2: "/img/vector-1@2x.png",
  vector3: "/img/vector-2@2x.png",
  frame5: "/img/frame-5@2x.png",
  keepOrganizedWitho1: "Welcome, Eleanor",
  keepOrganizedWitho2:
    "Your dashboard contains all the vital information you need to start learning right away",
  maskGroup: "/img/mask-group@2x.png",
  line171: "/img/line-17-2.png",
  line172: "/img/line-17-2.png",
  notificationsProps: notifications12Data,
  frame120821Props: frame120822Data,
  cards30Props: cards30Data,
  frame120822Props: frame120823Data,
  cards31Props: cards311Data,
};

const notifications11Data = {
  src: "/img/notificationbing@2x.png",
};

const group120522Data = {
  arrowright: "/img/arrowright@2x.png",
};

const frame12081Data = {
  tasks: "Tasks",
  group12052Props: group120522Data,
};

const statusBubbles76Data = {
  children: "Assignment",
};

const statusBubbles77Data = {
  children: "MCQ",
};

const frame6722Data = {
  statusBubbles1Props: statusBubbles76Data,
  statusBubbles2Props: statusBubbles77Data,
};

const cards28Data = {
  physicsThermodyna: "Physics - thermodynamics assignment questions (MCQ)",
  fundamentalsOfThermalPhysics: "Fundamentals of thermal physics",
  frame672Props: frame6722Data,
};

const group120523Data = {
  arrowright: "/img/arrowright@2x.png",
};

const frame12082Data = {
  tasks: "Exemplar responses",
  group12052Props: group120523Data,
};

const statusBubbles411Data = {
  crown: "/img/crown@2x.png",
};

const frame6426Data = {
  statusBubbles4Props: statusBubbles411Data,
};

const cards29Data = {
  physicsThermodyna: "Physics - thermodynamics assignment questions (MCQ)",
  fundamentalsOfThermalPhysics: "Fundamentals of thermal physics",
  frame642Props: frame6426Data,
};

const dashboardHomeStudentMobileData = {
  frame1349: "/img/frame-1349@2x.png",
  frame5: "/img/frame-5@2x.png",
  keepOrganizedWitho1: "Welcome, Eleanor",
  keepOrganizedWitho2:
    "Your dashboard contains all the vital information you need to start learning right away",
  maskGroup: "/img/mask-group@2x.png",
  line171: "/img/line-17@2x.png",
  line172: "/img/line-17@2x.png",
  notificationsProps: notifications11Data,
  frame12081Props: frame12081Data,
  cards28Props: cards28Data,
  frame12082Props: frame12082Data,
  cards29Props: cards29Data,
  group1205Props: group12055Data,
  frame1340Props: frame13402Data,
};
const navElement23Data = {
  tasksquare: "/img/home3-1@2x.png",
  home: "Home",
  className: "nav-element-8",
};

const navElement3Data1 = {
  iconHome: "/img/assignment-8@2x.png",
  place: "Assignments",
  className: "nav-element-1",
};

const navElement24Data = {
  tasksquare: "/img/subject@2x.png",
  home: "Classes",
  className: "nav-element-9",
};

const frame42Data1 = {
  maskGroup: "/img/mask-group-5@2x.png",
  className: "frame-4-1",
};

const goBack24Data = {
  caret: "/img/caret-1@2x.png",
};

const buttons25Data = {
  add: "/img/add@2x.png",
};

const frame128032Data = {
  className: "",
};

const input53Data = {
  input: "Theory",
};

const input65Data = {
  label: "Question",
  input: "Enter question",
};

const input66Data = {
  label: "Hint (optional)",
  input: "Enter hint",
};

const frame12912Data = {
  className: "frame-1291-2",
};

const frame128033Data = {
  className: "frame-1280-6",
};

const input54Data = {
  input: "MCQ",
};

const input67Data = {
  label: "Question",
  input: "Enter question",
};

const group12559Data = {
  className: "group-1255-6",
};

const input81Data = {
  option1: "Option 1",
  group1255Props: group12559Data,
};

const group125510Data = {
  className: "group-1255-7",
};

const input82Data = {
  option1: "Option 2",
  group1255Props: group125510Data,
};

const group125511Data = {
  className: "group-1255-8",
};

const input83Data = {
  option1: "Option 3",
  group1255Props: group125511Data,
};

const group125512Data = {
  className: "group-1255-9",
};

const input84Data = {
  option1: "Option 4",
  group1255Props: group125512Data,
};

const input68Data = {
  label: "Hint (optional)",
  input: "Enter hint",
};

const richTextComponents14Data = {
  src: "/img/drag-icon-8@2x.png",
  className: "rich-text-components-5",
};

const frame128035Data = {
  className: "",
};

const frame129734Data = {
  text9: "4.",
  frame1284: "/img/frame-1284-9@2x.png",
  richTextComponentsProps: richTextComponents14Data,
  frame12803Props: frame128035Data,
};

const questionFrame42Data = {
  frame12973Props: frame129734Data,
};

const frame128036Data = {
  className: "frame-1280-7",
};

const buttons26Data = {
  add: "/img/add@2x.png",
};

const checkbox38Data = {
  className: "checkbox-15",
};

const checkbox39Data = {
  className: "checkbox-16",
};

const checkbox310Data = {
  className: "checkbox-17",
};

const checkbox311Data = {
  className: "checkbox-18",
};

const checkbox312Data = {
  className: "checkbox-19",
};

const checkbox313Data = {
  className: "checkbox-20",
};

const goBack25Data = {
  caret: "/img/caret-5@2x.png",
  className: "go-back-5",
};

const frame6622Data = {
  className: "frame-6-6",
};

const frame41Data = {
  maskGroup: "/img/mask-group@2x.png",
};

const richTextComponents1Data = {
  src: "/img/undo-1@2x.png",
};

const richTextComponents2Data = {
  src: "/img/redo-1@2x.png",
  className: "rich-text-components-1",
};

const richTextComponents3Data = {
  src: "/img/bold-1@2x.png",
  className: "rich-text-components-2",
};

const richTextComponents4Data = {
  src: "/img/italic-1@2x.png",
  className: "rich-text-components-3",
};

const richTextComponents5Data = {
  src: "/img/underline-1@2x.png",
  className: "rich-text-components-4",
};

const richTextComponents6Data = {
  src: "/img/uppercase@2x.png",
  className: "rich-text-components-5",
};

const richTextComponents7Data = {
  src: "/img/lowercase-1@2x.png",
  className: "rich-text-components-6",
};

const richTextComponents8Data = {
  src: "/img/text-color-1@2x.png",
  className: "rich-text-components-7",
};

const richTextComponents9Data = {
  src: "/img/paint-bucket@2x.png",
  className: "rich-text-components-8",
};

const dropdown1Data = {
  heading: "Heading",
};

const dropdown2Data = {
  heading: "IBM Plex Sans",
  className: "dropdown-1",
};

const dropdown3Data = {
  heading: "20px",
  className: "dropdown-2",
};

const group251Data = {
  dropdown1Props: dropdown1Data,
  dropdown2Props: dropdown2Data,
  dropdown3Props: dropdown3Data,
};

const richTextComponents22Data = {
  src: "/img/align-left-1@2x.png",
};

const richTextComponents10Data = {
  src: "/img/more@2x.png",
  className: "rich-text-components-9",
};

const notifications2Data = {
  src: "/img/notificationbing@2x.png",
};

const richTextComponents11Data = {
  src: "/img/undo@2x.png",
  className: "rich-text-components-10",
};

const richTextComponents12Data = {
  src: "/img/redo@2x.png",
  className: "rich-text-components-11",
};

const richTextComponents13Data = {
  src: "/img/bold@2x.png",
  className: "rich-text-components-12",
};

const richTextComponents15Data = {
  src: "/img/underline@2x.png",
  className: "rich-text-components-14",
};

const richTextComponents16Data = {
  src: "/img/lowercase@2x.png",
  className: "rich-text-components-15",
};

const richTextComponents17Data = {
  src: "/img/text-color@2x.png",
  className: "rich-text-components-16",
};

const richTextComponents23Data = {
  src: "/img/align-left@2x.png",
};

const richTextComponents18Data = {
  src: "/img/undo-1@2x.png",
  className: "rich-text-components-17",
};

const richTextComponents19Data = {
  src: "/img/redo-1@2x.png",
  className: "rich-text-components-18",
};

const richTextComponents20Data = {
  src: "/img/bold-1@2x.png",
  className: "rich-text-components-19",
};

const richTextComponents21Data = {
  src: "/img/italic-1@2x.png",
  className: "rich-text-components-20",
};

const richTextComponents24Data = {
  src: "/img/underline-1@2x.png",
  className: "rich-text-components-21",
};

const richTextComponents25Data = {
  src: "/img/uppercase@2x.png",
  className: "rich-text-components-22",
};

const richTextComponents26Data = {
  src: "/img/lowercase-1@2x.png",
  className: "rich-text-components-23",
};

const richTextComponents27Data = {
  src: "/img/text-color-1@2x.png",
  className: "rich-text-components-24",
};

const richTextComponents28Data = {
  src: "/img/paint-bucket@2x.png",
  className: "rich-text-components-25",
};

const dropdown4Data = {
  heading: "Heading",
};

const dropdown5Data = {
  heading: "IBM Plex Sans",
  className: "dropdown-4",
};

const dropdown6Data = {
  heading: "20px",
  className: "dropdown-5",
};

const group252Data = {
  dropdown1Props: dropdown4Data,
  dropdown2Props: dropdown5Data,
  dropdown3Props: dropdown6Data,
};

const richTextComponents29Data = {
  src: "/img/align-left-1@2x.png",
};

const richTextComponents30Data = {
  src: "/img/more@2x.png",
  className: "rich-text-components-26",
};

const assignmentTheoryTabletData = {
  frame1349: "/img/frame-1349-1.png",
  frame5: "/img/frame-5@2x.png",
  physicsThermodyna: "Physics - thermodynamics assignment questions",
  boremIpsumDolorSi:
    "Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis?",
  line6: "/img/line-6-1.png",
  koremIpsumDolorSi:
    "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
  line7: "/img/line-7-1.png",
  time015823: "Time : 01:58:23",
  q124: "Q 1/24",
  marks10: "Marks: 10",
  notificationsProps: notifications3Data,
  richTextComponents1Props: richTextComponents18Data,
  richTextComponents2Props: richTextComponents19Data,
  richTextComponents3Props: richTextComponents20Data,
  richTextComponents4Props: richTextComponents21Data,
  richTextComponents5Props: richTextComponents24Data,
  richTextComponents6Props: richTextComponents25Data,
  richTextComponents7Props: richTextComponents26Data,
  richTextComponents8Props: richTextComponents27Data,
  richTextComponents9Props: richTextComponents28Data,
  group25Props: group252Data,
  richTextComponents2Props2: richTextComponents29Data,
  richTextComponents10Props: richTextComponents30Data,
};

const frame42Data = {
  maskGroup: "/img/mask-group@2x.png",
};

const richTextComponents31Data = {
  src: "/img/undo-1@2x.png",
};

const richTextComponents32Data = {
  src: "/img/redo-1@2x.png",
  className: "rich-text-components-28",
};

const richTextComponents33Data = {
  src: "/img/bold-1@2x.png",
  className: "rich-text-components-29",
};

const richTextComponents34Data = {
  src: "/img/italic-1@2x.png",
  className: "rich-text-components-30",
};

const richTextComponents35Data = {
  src: "/img/underline-1@2x.png",
  className: "rich-text-components-31",
};

const richTextComponents36Data = {
  src: "/img/uppercase@2x.png",
  className: "rich-text-components-32",
};

const richTextComponents37Data = {
  src: "/img/lowercase-1@2x.png",
  className: "rich-text-components-33",
};

const richTextComponents38Data = {
  src: "/img/text-color-1@2x.png",
  className: "rich-text-components-34",
};

const richTextComponents39Data = {
  src: "/img/paint-bucket@2x.png",
  className: "rich-text-components-35",
};

const dropdown7Data = {
  heading: "Heading",
};

const dropdown8Data = {
  heading: "IBM Plex Sans",
  className: "dropdown-6",
};

const dropdown9Data = {
  heading: "20px",
  className: "dropdown-7",
};

const group253Data = {
  dropdown1Props: dropdown7Data,
  dropdown2Props: dropdown8Data,
  dropdown3Props: dropdown9Data,
};

const richTextComponents210Data = {
  src: "/img/align-left-1@2x.png",
};

const richTextComponents40Data = {
  src: "/img/more@2x.png",
  className: "rich-text-components-36",
};

const assignmentTheoryLaptopData = {
  headerProps: taskheaderProps,
  frame1343: "/img/frame-1343@2x.png",
  line6: "/img/line-6-2.png",
  x2021JeddleAllRightsReserved: "© 2021 Jeddle. All rights reserved.",
  navElement221Props: navElement4Data,
  navElement222Props: navElement5Data,
  navElement223Props: navElement6Data,
  notificationsProps: notifications4Data,
  frame4Props: frame42Data,
  richTextComponents1Props: richTextComponents31Data,
  richTextComponents2Props: richTextComponents32Data,
  richTextComponents3Props: richTextComponents33Data,
  richTextComponents4Props: richTextComponents34Data,
  richTextComponents5Props: richTextComponents35Data,
  richTextComponents6Props: richTextComponents36Data,
  richTextComponents7Props: richTextComponents37Data,
  richTextComponents8Props: richTextComponents38Data,
  richTextComponents9Props: richTextComponents39Data,
  group25Props: group253Data,
  richTextComponents2Props2: richTextComponents210Data,
  richTextComponents10Props: richTextComponents40Data,
};

const frame129732Data = {
  text9: "1.",
  frame1284: "/img/frame-1284-7@2x.png",
  richTextComponentsProps: richTextComponents11Data,
  frame12803Props: frame128032Data,
};

const assignmentTheoryDesktopData = {
  frame1343: "/img/frame-1343@2x.png",
  line6: "/img/line-6-2.png",
  navElement221Props: navElement1Data,
  navElement222Props: navElement2Data,
  navElement223Props: navElement3Data,
  notificationsProps: notifications1Data,
  frame4Props: frame41Data,
  richTextComponents1Props: richTextComponents1Data,
  richTextComponents2Props: richTextComponents2Data,
  richTextComponents3Props: richTextComponents3Data,
  richTextComponents4Props: richTextComponents4Data,
  richTextComponents5Props: richTextComponents5Data,
  richTextComponents6Props: richTextComponents6Data,
  richTextComponents7Props: richTextComponents7Data,
  richTextComponents8Props: richTextComponents8Data,
  richTextComponents9Props: richTextComponents9Data,
  group25Props: group251Data,
  richTextComponents2Props2: richTextComponents22Data,
  richTextComponents10Props: richTextComponents10Data,
};

const frame129733Data = {
  text9: "2.",
  frame1284: "/img/frame-1284-9@2x.png",
  richTextComponentsProps: richTextComponents12Data,
  frame12803Props: frame128033Data,
};

const tasksDesktopData = {
  frame1343: "/img/frame-1343@2x.png",
  title: "Tasks",
  overdue: "Overdue",
  number: "12",
  x2021JeddleAllRightsReserved: "© 2021 Jeddle. All rights reserved.",
  navElement1Props: navElement1Data,
  navElement2Props: navElement3Data,
  notificationsProps: notifications4Data,
  frame4Props: frame41Data,
  frame1306Props: frame13061Data,
  frame13531Props: frame13531Data,
  cards11Props: cards11Data,
  cards121Props: cards121Data,
  cards131Props: cards131Data,
  cards141Props: cards141Data,
  cards15Props: cards151Data,
  frame13532Props: frame13532Data,
  cards142Props: cards142Data,
  cards122Props: cards122Data,
  cards132Props: cards132Data,
  cards161Props: cards161Data,
  cards162Props: cards162Data,
  cards163Props: cards163Data,
  cards133Props: cards133Data,
  cards164Props: cards164Data,
  cards165Props: cards165Data,
  frame19Props: frame192Data,
  headerProps: taskheaderProps,
};

const assignmentTheoryMobileData = {
  frame1349: "/img/frame-1349@2x.png",
  frame5: "/img/frame-5@2x.png",
  physicsThermodyna: "Physics - thermodynamics assignment questions",
  boremIpsumDolorSi:
    "Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis?",
  line6: "/img/line-6@2x.png",
  koremIpsumDolorSi:
    "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
  line7: "/img/line-7@2x.png",
  time015823: "Time : 01:58:23",
  q124: "Q 1/24",
  marks10: "Marks: 10",
  notificationsProps: notifications2Data,
  richTextComponents1Props: richTextComponents11Data,
  richTextComponents2Props: richTextComponents12Data,
  richTextComponents3Props: richTextComponents13Data,
  richTextComponents4Props: richTextComponents14Data,
  richTextComponents5Props: richTextComponents15Data,
  richTextComponents6Props: richTextComponents16Data,
  richTextComponents7Props: richTextComponents17Data,
  richTextComponents2Props2: richTextComponents23Data,
};

const questionFrame41Data = {
  frame12973Props: frame129733Data,
};

const bulletList3Data = {
  className: "bullet-list-2",
  group25Props: group253Data,
};

const frame129735Data = {
  text9: "5.",
  frame1284: "/img/frame-1284-9@2x.png",
  richTextComponentsProps: richTextComponents15Data,
  frame12803Props: frame128036Data,
};

const questionFrame43Data = {
  frame12973Props: frame129735Data,
};
