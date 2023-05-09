import React from "react";
import ReactiveRender from "../../ReactiveRender";
import CompletedDesktop from "../CompletedDesktop";
import CompletedLaptop from "../CompletedLaptop";
import CompletedMobile from "../CompletedMobile";
import CompletedTablet from "../CompletedTablet";

export default function CompletedRoot(props) {
  const { menuItems, filterTasks, title, groups,exemplar, id, setPublishActionCompleted} = props
  console.log("CompletedRoot "+ setPublishActionCompleted)
  
  

  return (
    <ReactiveRender
      mobile={<CompletedMobile {...{ menuItems, filterTasks, title,groups, exemplar,id, setPublishActionCompleted,...completedMobileData }} />}
      tablet={<CompletedTablet {...{ menuItems, filterTasks, title,groups, exemplar,id, setPublishActionCompleted, ...completedTabletData }} />}
      laptop={<CompletedLaptop {...{ menuItems, filterTasks, title,groups, exemplar,id, setPublishActionCompleted, ...completedLaptopData }} />}
      desktop={<CompletedDesktop {...{ menuItems, filterTasks, title,groups, exemplar,id, setPublishActionCompleted, ...completedDesktopData }} />}
    />
  );
}
const navElement21Data = {
  tasksquare: "/img/tasksquare@2x.png",
  home: "Tasks",
};

const navElement22Data = {
  tasksquare: "/img/clipboardtick@2x.png",
  home: "Completed",
  className: "nav-element-4",
};

const notifications1Data = {
  src: "/img/notificationbing@2x.png",
};

const group12051Data = {
  arrowright: "/img/arrowright@2x.png",
};

const group12052Data = {
  arrowright: "/img/arrowright-8@2x.png",
  className: "group-1206",
};

const statusBubbles1Data = {
  children: "Assignment",
};

const statusBubbles2Data = {
  children: "MCQ",
};

const statusBubbles22Data = {
  children: "Overdue",
};

const content1Data = {
  iconClock: "/img/clock@2x.png",
};

const cardsData = {
  statusBubbles1Props: statusBubbles1Data,
  statusBubbles2Props: statusBubbles2Data,
  statusBubbles2Props2: statusBubbles22Data,
  contentProps: content1Data,
};

const statusBubbles4Data = {
  children: "MCQ",
};

const statusBubbles42Data = {
  children: "Due in 3 days",
};

const content2Data = {
  iconClock: "/img/clock@2x.png",
};

const cards2Data = {
  statusBubblesProps: statusBubbles4Data,
  statusBubbles4Props: statusBubbles42Data,
  contentProps: content2Data,
};

const content3Data = {
  iconClock: "/img/clock-2@2x.png",
};

const cards3Data = {
  contentProps: content3Data,
};

const statusBubbles7Data = {
  children: "Due tomorrow",
};

const content4Data = {
  iconClock: "/img/clock-2@2x.png",
};

const cards4Data = {
  statusBubbles7Props: statusBubbles7Data,
  contentProps: content4Data,
};

const cards51Data = {
  iconClock: "/img/clock@2x.png",
};

const cards52Data = {
  iconClock: "/img/clock@2x.png",
};

const cards53Data = {
  iconClock: "/img/clock-2@2x.png",
};

const cards54Data = {
  iconClock: "/img/clock-2@2x.png",
};

const dashboardHomeStudentData = {
  logo: "/img/logo@2x.png",
  keepOrganizedWithoContainer: "/img/mask-group-1.png",
  keepOrganizedWitho1: "Welcome, Eleanor",
  keepOrganizedWitho2:
    "Facilitate collaborative marking and feedback for your classes",
  tasks: "Tasks",
  exemplarResponses: "Exemplary Responses",
  x2021JeddleAllRightsReserved: "© 2021 Jeddle. All rights reserved.",
  navElement21Props: navElement21Data,
  navElement22Props: navElement22Data,
  notificationsProps: notifications1Data,
  group12051Props: group12051Data,
  group12052Props: group12052Data,
  cardsProps: cardsData,
  cards2Props: cards2Data,
  cards3Props: cards3Data,
  cards4Props: cards4Data,
  cards51Props: cards51Data,
  cards52Props: cards52Data,
  cards53Props: cards53Data,
  cards54Props: cards54Data,
};

const notifications2Data = {
  src: "/img/notificationbing-1@2x.png",
};

const frame13081Data = {
  children: "20 Mar 2023",
};

const statusBubbles8Data = {
  children: "Assignment",
};

const frame621Data = {
  statusBubblesProps: statusBubbles8Data,
};

const cards61Data = {
  frame62Props: frame621Data,
};

const frame14101Data = {
  frame1308Props: frame13081Data,
  cards6Props: cards61Data,
};

const frame13082Data = {
  children: "22 Mar 2023",
};

const statusBubbles9Data = {
  children: "Assignment",
};

const frame622Data = {
  statusBubblesProps: statusBubbles9Data,
};

const cards62Data = {
  frame62Props: frame622Data,
};

const statusBubbles10Data = {
  children: "Assignment",
};

const frame623Data = {
  statusBubblesProps: statusBubbles10Data,
};

const cards63Data = {
  frame62Props: frame623Data,
};

const frame13083Data = {
  children: "23 Mar 2023",
};

const statusBubbles11Data = {
  children: "Assignment",
};

const frame624Data = {
  statusBubblesProps: statusBubbles11Data,
};

const cards64Data = {
  frame62Props: frame624Data,
};

const frame14102Data = {
  className: "frame-1413-1",
  frame1308Props: frame13083Data,
  cards6Props: cards64Data,
};

const completedMobileData = {
  frame1349: "/img/frame-1349@2x.png",
  frame5: "/img/frame-5@2x.png",
  title: "Completed",
  subject: "Subject",
  frame1284: "/img/frame-1284@2x.png",
  line18: "/img/line-18@2x.png",
  line19: "/img/line-18@2x.png",
  line20: "/img/line-18@2x.png",
  x2023JeddleAllRightsReserved: "© 2023 Jeddle. All rights reserved.",
  mainWebsite: "Main Website",
  terms: "Terms",
  privacy: "Privacy",
  notificationsProps: notifications2Data,
  frame14101Props: frame14101Data,
  frame1308Props: frame13082Data,
  cards61Props: cards62Data,
  cards62Props: cards63Data,
  frame14102Props: frame14102Data,
};

const notifications3Data = {
  src: "/img/notificationbing@2x.png",
};

const frame13084Data = {
  children: "20 Mar 2023",
};

const statusBubbles12Data = {
  children: "Assignment",
};

const frame625Data = {
  statusBubblesProps: statusBubbles12Data,
};

const cards81Data = {
  frame62Props: frame625Data,
};

const frame141022Data = {
  frame1308Props: frame13084Data,
  cards8Props: cards81Data,
};

const frame13085Data = {
  children: "22 Mar 2023",
};

const statusBubbles13Data = {
  children: "Assignment",
};

const frame626Data = {
  statusBubblesProps: statusBubbles13Data,
};

const cards82Data = {
  frame62Props: frame626Data,
};

const statusBubbles14Data = {
  children: "Assignment",
};

const frame627Data = {
  statusBubblesProps: statusBubbles14Data,
};

const cards83Data = {
  frame62Props: frame627Data,
};

const frame13086Data = {
  children: "23 Mar 2023",
};

const statusBubbles15Data = {
  children: "Assignment",
};

const frame628Data = {
  statusBubblesProps: statusBubbles15Data,
};

const cards84Data = {
  frame62Props: frame628Data,
};

const frame141023Data = {
  frame1308Props: frame13086Data,
  cards8Props: cards84Data,
};

const completedTabletData = {
  frame1349: "/img/frame-1349-1.png",
  frame5: "/img/frame-5@2x.png",
  title: "Completed",
  subject: "Subject",
  frame1284: "/img/frame-1284@2x.png",
  line18: "/img/line-17-14.png",
  line19: "/img/line-17-14.png",
  line20: "/img/line-17-14.png",
  x2023JeddleAllRightsReserved: "© 2023 Jeddle. All rights reserved.",
  mainWebsite: "Main Website",
  terms: "Terms",
  privacy: "Privacy",
  notificationsProps: notifications3Data,
  frame141021Props: frame141022Data,
  frame1308Props: frame13085Data,
  cards81Props: cards82Data,
  cards82Props: cards83Data,
  frame141022Props: frame141023Data,
};

const navElement23Data = {
  tasksquare: "/img/home3-1@2x.png",
  home: "Home",
  className: "nav-element-5",
};

const navElement3Data = {
  className: "nav-element-1",
};

const navElement24Data = {
  tasksquare: "/img/subject@2x.png",
  home: "Classes",
  className: "nav-element-6",
};

const notifications4Data = {
  src: "/img/notificationbing@2x.png",
};

const frame42Data = {
  className: "frame-4-1",
};

const teacherDashboardHeader1Data = {
  navElement21Props: navElement23Data,
  navElementProps: navElement3Data,
  navElement22Props: navElement24Data,
  notificationsProps: notifications4Data,
  frame4Props: frame42Data,
};

const frame13087Data = {
  children: "20 Mar 2023",
};

const statusBubbles16Data = {
  children: "Assignment",
};

const frame629Data = {
  statusBubblesProps: statusBubbles16Data,
};

const cards101Data = {
  frame62Props: frame629Data,
};

const frame141031Data = {
  frame1308Props: frame13087Data,
  cards10Props: cards101Data,
};

const frame13088Data = {
  children: "22 Mar 2023",
};

const statusBubbles17Data = {
  children: "Assignment",
};

const frame6210Data = {
  statusBubblesProps: statusBubbles17Data,
};

const cards102Data = {
  frame62Props: frame6210Data,
};

const statusBubbles18Data = {
  children: "Assignment",
};

const frame6211Data = {
  statusBubblesProps: statusBubbles18Data,
};

const cards103Data = {
  frame62Props: frame6211Data,
};

const frame14121Data = {
  frame1308Props: frame13088Data,
  cards101Props: cards102Data,
  cards102Props: cards103Data,
};

const frame13089Data = {
  children: "23 Mar 2023",
};

const statusBubbles19Data = {
  children: "Assignment",
};

const frame6212Data = {
  statusBubblesProps: statusBubbles19Data,
};

const cards104Data = {
  frame62Props: frame6212Data,
};

const frame141032Data = {
  frame1308Props: frame13089Data,
  cards10Props: cards104Data,
};

const frame64Data = {
  className: "frame-6-6",
};

const completedDesktopData = {
  title: "Completed",
  subject: "Subject",
  frame1284: "/img/frame-1284@2x.png",
  line18: "/img/line-18-2.png",
  line19: "/img/line-18-2.png",
  line20: "/img/line-18-2.png",
  x2021JeddleAllRightsReserved: "© 2021 Jeddle. All rights reserved.",
  teacherDashboardHeaderProps: teacherDashboardHeader1Data,
  frame141031Props: frame141031Data,
  frame1412Props: frame14121Data,
  frame141032Props: frame141032Data,
  frame6Props: frame64Data,
};

const navElement25Data = {
  tasksquare: "/img/home3-1@2x.png",
  home: "Home",
  className: "nav-element-7",
};

const navElement4Data = {
  className: "nav-element-2",
};

const navElement26Data = {
  tasksquare: "/img/subject@2x.png",
  home: "Classes",
  className: "nav-element-8",
};

const notifications5Data = {
  src: "/img/notificationbing@2x.png",
};

const frame43Data = {
  className: "frame-4-2",
};

const teacherDashboardHeader2Data = {
  frame4Props: navElement25Data,
  navElement21Props: navElement4Data,
  navElementProps: navElement26Data,
  notificationsProps: notifications5Data,
  frame4Props2: frame43Data,
};

const frame130810Data = {
  children: "20 Mar 2023",
};

const statusBubbles20Data = {
  children: "Assignment",
};

const frame6213Data = {
  statusBubblesProps: statusBubbles20Data,
};

const cards105Data = {
  frame62Props: frame6213Data,
};

const frame141033Data = {
  frame1308Props: frame130810Data,
  cards10Props: cards105Data,
};

const frame130811Data = {
  children: "22 Mar 2023",
};

const statusBubbles21Data = {
  children: "Assignment",
};

const frame6214Data = {
  statusBubblesProps: statusBubbles21Data,
};

const cards106Data = {
  frame62Props: frame6214Data,
};

const statusBubbles23Data = {
  children: "Assignment",
};

const frame6215Data = {
  statusBubblesProps: statusBubbles23Data,
};

const cards107Data = {
  frame62Props: frame6215Data,
};

const frame14122Data = {
  frame1308Props: frame130811Data,
  cards101Props: cards106Data,
  cards102Props: cards107Data,
};

const frame130812Data = {
  children: "23 Mar 2023",
};

const statusBubbles24Data = {
  children: "Assignment",
};

const frame6216Data = {
  statusBubblesProps: statusBubbles24Data,
};

const cards108Data = {
  frame62Props: frame6216Data,
};

const frame141034Data = {
  frame1308Props: frame130812Data,
  cards10Props: cards108Data,
};

const frame65Data = {
  className: "frame-6-6",
};

const completedLaptopData = {
  subject: "Subject",
  frame1284: "/img/frame-1284@2x.png",
  line18: "/img/line-18-3.png",
  line19: "/img/line-18-3.png",
  line20: "/img/line-18-3.png",
  x2021JeddleAllRightsReserved: "© 2021 Jeddle. All rights reserved.",
  teacherDashboardHeaderProps: teacherDashboardHeader2Data,
  frame141031Props: frame141033Data,
  frame1412Props: frame14122Data,
  frame141032Props: frame141034Data,
  frame6Props: frame65Data,
};
