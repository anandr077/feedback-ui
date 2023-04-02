import React from "react";
import { useMediaQuery } from "react-responsive";
import CreateAAssignmentLaptop from "../CreateAAssignmentLaptop";
import CreateAAssignmentTablet from "../CreateAAssignmentTablet";

export default function CreateAssignment() {
  const isMobileView = useMediaQuery({ maxWidth: 1023 });
  const isTabletView = useMediaQuery({ minWidth: 1024, maxWidth: 1439 });
  const isLaptopView = useMediaQuery({ minWidth: 1440, maxWidth: 1919 });
  const isDesktopView = useMediaQuery({ minWidth: 1920 });
  return (
    <>
      {/* {isMobileView && (
        <TasksStudentMobile
          {...{ allTasks, ...tasksStudentMobileData }} />
      )} */}
      {isTabletView && (
        <CreateAAssignmentTablet {...createAAssignmentTabletData} />
      )}
      {isLaptopView && (
        <CreateAAssignmentLaptop {...createAAssignmentLaptopData} />
      )}
      {isDesktopView && (
        <CreateAAssignmentLaptop {...createAAssignmentLaptopData} />
      )}
    </>
  );
}

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
const richTextComponents12Data = {
  src: "/img/redo@2x.png",
  className: "rich-text-components-11",
};
const frame128033Data = {
  className: "frame-1280-6",
};

const frame129733Data = {
  text9: "2.",
  frame1284: "/img/frame-1284-9@2x.png",
  richTextComponentsProps: richTextComponents12Data,
  frame12803Props: frame128033Data,
};

const questionFrame41Data = {
  frame12973Props: frame129733Data,
};

const richTextComponents15Data = {
  src: "/img/underline@2x.png",
  className: "rich-text-components-14",
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

const notifications4Data1 = {
  src: "/img/notificationbing-2@2x.png",
};

const richTextComponents11Data = {
  src: "/img/undo@2x.png",
  className: "rich-text-components-10",
};

const frame128032Data = {
  className: "",
};

const frame129732Data = {
  text9: "1.",
  frame1284: "/img/frame-1284-7@2x.png",
  richTextComponentsProps: richTextComponents11Data,
  frame12803Props: frame128032Data,
};

const richTextComponents13Data = {
  src: "/img/bold@2x.png",
  className: "rich-text-components-12",
};

const richTextComponents33Data = {
  src: "/img/bold-1@2x.png",
  className: "rich-text-components-29",
};

const createAAssignmentLaptopData = {
  headerProps: taskheaderProps,
  logo: "/img/logo-1@2x.png",
  title: "Create Assignment",
  nameOfAssignment: "Name of assignment",
  line141: "/img/line-14-4.png",
  text11: "3.",
  toremIpsumDolorSi: "Torem ipsum dolor sit amet, consectetur adipiscing elit.",
  frame1284: "/img/frame-1284-7@2x.png",
  line142: "/img/line-14-4.png",
  options: "Options",
  assignmentSettings: "Assignment Settings",
  classes: "Classes",
  help1: "/img/help@2x.png",
  feedbackMethod: "Feedback Method",
  help2: "/img/help@2x.png",
  x2021JeddleAllRightsReserved: "© 2021 Jeddle. All rights reserved.",
  navElement21Props: navElement23Data,
  navElementProps: navElement3Data1,
  navElement22Props: navElement24Data,
  notificationsProps: notifications4Data1,
  frame4Props: frame42Data1,
  goBack21Props: goBack24Data,
  buttons21Props: buttons25Data,
  frame12973Props: frame129732Data,
  input51Props: input53Data,
  input61Props: input65Data,
  input62Props: input66Data,
  questionFrame41Props: questionFrame41Data,
  richTextComponentsProps: richTextComponents13Data,
  richTextComponents3Props: richTextComponents33Data,
  input52Props: input54Data,
  input63Props: input67Data,
  input81Props: input81Data,
  input82Props: input82Data,
  input83Props: input83Data,
  input84Props: input84Data,
  input64Props: input68Data,
  questionFrame42Props: questionFrame42Data,
  questionFrame43Props: questionFrame43Data,
  buttons22Props: buttons26Data,
  checkbox31Props: checkbox38Data,
  checkbox32Props: checkbox39Data,
  checkbox33Props: checkbox310Data,
  checkbox34Props: checkbox311Data,
  checkbox35Props: checkbox312Data,
  checkbox36Props: checkbox313Data,
  goBack22Props: goBack25Data,
  frame662Props: frame6622Data,
};

const notifications3Data = {
  src: "/img/notificationbing-2@2x.png",
};

const goBack22Data = {
  caret: "/img/caret-1@2x.png",
};

const buttons23Data = {
  add: "/img/add@2x.png",
};

const richTextComponents6Data = {
  src: "/img/drag-icon-5@2x.png",
  className: "",
};

const frame128022Data = {
  className: "",
};

const frame129722Data = {
  text6: "1.",
  frame1284: "/img/frame-1284-7@2x.png",
  richTextComponentsProps: richTextComponents6Data,
  frame12802Props: frame128022Data,
};

const input51Data = {
  input: "Theory",
};

const input61Data = {
  label: "Question",
  input: "Enter question",
};

const input62Data = {
  label: "Hint (optional)",
  input: "Enter hint",
};

const richTextComponents7Data = {
  src: "/img/drag-icon-5@2x.png",
};

const frame128023Data = {
  className: "frame-1280-2",
};

const questionFrame22Data = {
  text7: "2.",
  toremIpsumDolorSi: "Torem ipsum dolor sit amet, consectetur adipiscing elit.",
  frame1284: "/img/frame-1284-9@2x.png",
  richTextComponentsProps: richTextComponents7Data,
  frame12802Props: frame128023Data,
};

const richTextComponents8Data = {
  src: "/img/drag-icon-5@2x.png",
};

const group252Data = {
  src: "/img/vector-11@2x.png",
};

const bulletList2Data = {
  className: "bullet-list-1",
  group25Props: group252Data,
};

const richTextComponents32Data = {
  bulletListProps: bulletList2Data,
};

const input52Data = {
  input: "MCQ",
};

const input63Data = {
  label: "Question",
  input: "Enter question",
};

const group12555Data = {
  className: "group-1255-2",
};

const input71Data = {
  option1: "Option 1",
  group1255Props: group12555Data,
};

const group12556Data = {
  className: "group-1255-3",
};

const input72Data = {
  option1: "Option 2",
  group1255Props: group12556Data,
};

const group12557Data = {
  className: "group-1255-4",
};

const input73Data = {
  option1: "Option 3",
  group1255Props: group12557Data,
};

const group12558Data = {
  className: "group-1255-5",
};

const input74Data = {
  option1: "Option 4",
  group1255Props: group12558Data,
};

const input64Data = {
  label: "Hint (optional)",
  input: "Enter hint",
};

const richTextComponents9Data = {
  src: "/img/drag-icon-8@2x.png",
  className: "rich-text-components-4",
};

const frame128025Data = {
  className: "",
};

const frame129723Data = {
  text6: "4.",
  frame1284: "/img/frame-1284-9@2x.png",
  richTextComponentsProps: richTextComponents9Data,
  frame12802Props: frame128025Data,
};

const questionFrame32Data = {
  frame12972Props: frame129723Data,
};

const richTextComponents10Data = {
  src: "/img/drag-icon-5@2x.png",
  className: "",
};

const frame128026Data = {
  className: "frame-1280-4",
};

const frame129724Data = {
  text6: "5.",
  frame1284: "/img/frame-1284-9@2x.png",
  richTextComponentsProps: richTextComponents10Data,
  frame12802Props: frame128026Data,
};

const questionFrame33Data = {
  frame12972Props: frame129724Data,
};

const buttons24Data = {
  add: "/img/add@2x.png",
};

const checkbox33Data = {
  className: "checkbox-10",
};

const checkbox34Data = {
  className: "checkbox-11",
};

const checkbox35Data = {
  className: "checkbox-12",
};

const checkbox36Data = {
  className: "checkbox-13",
};

const checkbox37Data = {
  className: "checkbox-14",
};

const goBack23Data = {
  caret: "/img/caret-5@2x.png",
  className: "go-back-3",
};

const createAAssignmentTabletData = {
  frame1349: "/img/frame-1349.png",
  frame5: "/img/frame-5@2x.png",
  title: "Create Assignment",
  nameOfAssignment: "Name of assignment",
  questions: "Questions",
  line141: "/img/line-14-2.png",
  text8: "3.",
  toremIpsumDolorSi: "Torem ipsum dolor sit amet, consectetur adipiscing elit.",
  frame1284: "/img/frame-1284-7@2x.png",
  line142: "/img/line-14-2.png",
  options: "Options",
  assignmentSettings: "Assignment Settings",
  classes: "Classes",
  help1: "/img/help@2x.png",
  feedbackMethod: "Feedback Method",
  help2: "/img/help@2x.png",
  notificationsProps: notifications3Data,
  goBack21Props: goBack22Data,
  buttons21Props: buttons23Data,
  frame12972Props: frame129722Data,
  frame12973Props: frame129732Data,
  input51Props: input51Data,
  input61Props: input61Data,
  input62Props: input62Data,
  questionFrame2Props: questionFrame22Data,
  richTextComponentsProps: richTextComponents8Data,
  richTextComponents3Props: richTextComponents32Data,
  input52Props: input52Data,
  input63Props: input63Data,
  input71Props: input71Data,
  input72Props: input72Data,
  input73Props: input73Data,
  input74Props: input74Data,
  input64Props: input64Data,
  questionFrame31Props: questionFrame32Data,
  questionFrame32Props: questionFrame33Data,
  buttons22Props: buttons24Data,
  checkbox31Props: checkbox33Data,
  checkbox32Props: checkbox34Data,
  checkbox33Props: checkbox35Data,
  checkbox34Props: checkbox36Data,
  checkbox35Props: checkbox37Data,
  goBack22Props: goBack23Data,
};
