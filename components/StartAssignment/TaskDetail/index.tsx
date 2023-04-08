import styled from "styled-components";
import { IbmplexsansNormalShark16px } from "../styledMixins";
import ReactiveRender from "../../ReactiveRender";
import TaskDetailMobile from "../TaskDetailMobile";
import TaskDetailTablet from "../TaskDetailTablet";
import TaskDetailLaptop from "../TaskDetailLaptop";
import TaskDetailDesktop from "../TaskDetailDesktop";
import { getAssigmentById, startSubmission } from "../../../service";
import { useParams } from "react-router-dom";
import { default as React, useEffect, useState } from "react";

export default function TaskDetail() {
  const { assignmentId } = useParams<{ assignmentId: string }>();

  const [assignment, setAssigment] = React.useState(null);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    getAssigmentById(assignmentId).then((res) => {
      console.log("Assignment " + JSON.stringify(res))
      setAssigment(res);
      setIsLoading(false);
    });
  }, []);
  console.log("Loading: " + isLoading)
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log("Loadr: " + isLoading)

  const methods = {
    onClickStartAssignment: (_) => {
      startSubmission({ assignmentId: assignment.id })
      .then((res) => {
        console.log("res " + res);
        window.location.href = "/submissions/" + res.id;
      });
    }
  };
  return (
    <ReactiveRender
      mobile={
        <TaskDetailMobile
          {...{
            assignment,
            methods,
            ...taskDetailMobileData,
          }}
        />
      }
      tablet={
        <TaskDetailTablet
          {...{
            assignment,
            methods,
            ...taskDetailTabletData,
          }}
        />
      }
      laptop={
        <TaskDetailLaptop
          {...{
            assignment,
            methods,
            ...taskDetailLaptopData,
          }}
        />
      }
      desktop={
        <TaskDetailDesktop
          {...{
            assignment,
            methods,
            ...taskDetailDesktopData,
          }}
        />
      }
    />
  );
  
}

const goBack2Data = {
  className: "go-back-1",
  caret: "/img/caret-5@2x.png",
};

const headerProps = {
  firstButton: {
    text: "Home",
    icon: "/icons/homeIconUnselected.png",
    iconSelected: "/icons/homeIconWhite.png",
    selected: false,
    redirect: "/dashboard-student",
  },
  secondButton: {
    text: "Assignment",
    icon: "/icons/assignmentIconUnselected.png",
    iconSelected: "/icons/assignmentWhite.png",
    selected: true,
    redirect: "/assignments/new",
  },
  thirdButton: {
    text: "Classes",
    icon: "/icons/classesUnselected.png",
    iconSelected: "icons/submissionIconWhite.png",
    selected: false,
    redirect: "/classes",
  },
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

const breadcrumb21Data = {
    assignments: "Assignments",
};

const breadcrumb22Data = {
    assignments: "Physics - thermodynamics assignment questions (Theory)",
};

const goBack1Data = {
    caret: "/img/caret-5@2x.png",
};

const frame12091Data = {
    topicsCovered: "Topics covered:",
    moremIpsumDolorSi: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
};

const frame12092Data = {
    topicsCovered: "Note from the instructor:",
    moremIpsumDolorSi: <React.Fragment>Norem ipsum dolor sit amet, consectetur adipiscing elit.<br />Qorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Vorem ipsum dolor sit amet, consectetur adipiscing elit.</React.Fragment>,
};

const taskDetailDesktopData = {
    headerProps,
    frame1343: "/img/frame-1343@2x.png",
    title: "Assignment",
    physicsThermodyna: "Physics - thermodynamics assignment questions (Theory)",
    line11: "/img/line-11-3.png",
    x2021JeddleAllRightsReserved: "© 2021 Jeddle. All rights reserved.",
    navElement1Props: navElement1Data,
    navElement2Props: navElement2Data,
    navElement3Props: navElement3Data,
    breadcrumb21Props: breadcrumb21Data,
    breadcrumb22Props: breadcrumb22Data,
    goBackProps: goBack1Data,
    frame12091Props: frame12091Data,
    frame12092Props: frame12092Data,
};

const breadcrumb23Data = {
    assignments: "Assignments",
};

const breadcrumb24Data = {
    assignments: "Physics - thermodynamics...",
};


const frame120922Data = {
    topicsCovered: "Topics covered:",
    moremIpsumDolorSi: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
};

const frame120923Data = {
    topicsCovered: "Note from the instructor:",
    moremIpsumDolorSi: <React.Fragment>Norem ipsum dolor sit amet, consectetur adipiscing elit.<br />Qorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Vorem ipsum dolor sit amet, consectetur adipiscing elit.</React.Fragment>,
};

const taskDetailMobileData = {
    frame1349: "/img/frame-1349@2x.png",
    frame5: "/img/frame-5@2x.png",
    title: "Assignment",
    physicsThermodyna: "Physics - thermodynamics assignment questions (Theory)",
    line11: "/img/line-11@2x.png",
    x2023JeddleAllRightsReserved: "© 2023 Jeddle. All rights reserved.",
    mainWebsite: "Main Website",
    terms: "Terms",
    privacy: "Privacy",
    breadcrumb21Props: breadcrumb23Data,
    breadcrumb22Props: breadcrumb24Data,
    goBackProps: goBack2Data,
    frame120921Props: frame120922Data,
    frame120922Props: frame120923Data,
};

const breadcrumb25Data = {
    assignments: "Assignments",
};

const breadcrumb26Data = {
    assignments: "Physics - thermodynamics assignment questions (Theory)",
};

const goBack3Data = {
    caret: "/img/caret-5@2x.png",
};

const frame120931Data = {
    topicsCovered: "Topics covered:",
    moremIpsumDolorSi: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
};

const frame120932Data = {
    topicsCovered: "Note from the instructor:",
    moremIpsumDolorSi: <React.Fragment>Norem ipsum dolor sit amet, consectetur adipiscing elit.<br />Qorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Vorem ipsum dolor sit amet, consectetur adipiscing elit.</React.Fragment>,
};

const taskDetailTabletData = {
    frame1349: "/img/frame-1349-1.png",
    frame5: "/img/frame-5@2x.png",
    title: "Assignment",
    physicsThermodyna: "Physics - thermodynamics assignment questions (Theory)",
    line11: "/img/line-11-1.png",
    x2023JeddleAllRightsReserved: "© 2023 Jeddle. All rights reserved.",
    mainWebsite: "Main Website",
    terms: "Terms",
    privacy: "Privacy",
    breadcrumb21Props: breadcrumb25Data,
    breadcrumb22Props: breadcrumb26Data,
    goBackProps: goBack3Data,
    frame120931Props: frame120931Data,
    frame120932Props: frame120932Data,
};

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

const breadcrumb27Data = {
    assignments: "Assignments",
};

const breadcrumb28Data = {
    assignments: "Physics - thermodynamics assignment questions (Theory)",
};

const goBack4Data = {
    caret: "/img/caret-5@2x.png",
};

const frame120941Data = {
    topicsCovered: "Topics covered:",
    moremIpsumDolorSi: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
};

const frame120942Data = {
    topicsCovered: "Note from the instructor:",
    moremIpsumDolorSi: <React.Fragment>Norem ipsum dolor sit amet, consectetur adipiscing elit.<br />Qorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Vorem ipsum dolor sit amet, consectetur adipiscing elit.</React.Fragment>,
};

const taskDetailLaptopData = {
    headerProps:headerProps,
    frame1343: "/img/frame-1343@2x.png",
    title: "Assignment",
    physicsThermodyna: "Physics - thermodynamics assignment questions (Theory)",
    line11: "/img/line-11-2.png",
    x2021JeddleAllRightsReserved: "© 2021 Jeddle. All rights reserved.",
    navElement1Props: navElement4Data,
    navElement2Props: navElement5Data,
    navElement3Props: navElement6Data,
    breadcrumb21Props: breadcrumb27Data,
    breadcrumb22Props: breadcrumb28Data,
    goBackProps: goBack4Data,
    frame120941Props: frame120941Data,
    frame120942Props: frame120942Data,
};
const Checkbox = styled.article`
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  flex: 1;
`;

const Checkbox1 = styled.div`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

const Rectangle43 = styled.input`
  position: absolute;
  width: 22px;
  height: 22px;
  top: -1px;
  left: -1px;
  background-color: var(--white);

  border: 1px solid;
  border-color: var(--light-mode-purple);
  font: inherit;
  color: currentColor;
  width: 1.25em;
  height: 1.25em;
  border: 1em solid currentColor;
  border-radius: 1em;
  transform: translateY(-0.075em);
  &:checked {
    border-color: red;
    background-color: red;
  }
`;

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

const goBack23Data = {
  caret: "/img/caret-5@2x.png",
  className: "go-back-3",
};


const notifications2Data = {
  src: "/img/notificationbing@2x.png",
};

const buttons21Data = {
  add: "/img/add@2x.png",
};

const richTextComponents1Data = {
  src: "/img/drag-icon@2x.png",
};

const frame12971Data = {
  text1: "1.",
  richTextComponentsProps: richTextComponents1Data,
};

const input1Data = {
  input: "Theory",
};

const input21Data = {
  label: "Question",
  input: "Enter question",
};

const input22Data = {
  label: "Hint (optional)",
  input: "Enter hint",
};

const richTextComponents2Data = {
  src: "/img/drag-icon@2x.png",
};

const frame12972Data = {
  text1: "2.",
  richTextComponentsProps: richTextComponents2Data,
};

const questionFrame1Data = {
  frame1297Props: frame12972Data,
};

const richTextComponents3Data = {
  src: "/img/drag-icon@2x.png",
};

const group251Data = {
  src: "/img/vector@2x.png",
};

const bulletList1Data = {
  group25Props: group251Data,
};

const input3Data = {
  input: "MCQ",
};

const input32Data = {
  label: "Question",
  input: "Enter question",
};

const input41Data = {
  option1: "Option 1",
};

const input42Data = {
  option1: "Option 2",
};

const input43Data = {
  option1: "Option 3",
};

const input44Data = {
  option1: "Option 4",
};

const input23Data = {
  label: "Hint (optional)",
  input: "Enter hint",
};

const richTextComponents4Data = {
  src: "/img/drag-icon@2x.png",
};

const frame12973Data = {
  text1: "4.",
  richTextComponentsProps: richTextComponents4Data,
};

const questionFrame2Data = {
  frame1297Props: frame12973Data,
};

const richTextComponents5Data = {
  src: "/img/drag-icon@2x.png",
};

const frame12974Data = {
  text1: "5.",
  richTextComponentsProps: richTextComponents5Data,
};

const questionFrame3Data = {
  frame1297Props: frame12974Data,
};

const buttons22Data = {
  add: "/img/add-2@2x.png",
};

const checkbox2Data = {
  className: "checkbox-2",
};

const checkbox3Data = {
  className: "checkbox-3",
};

const checkbox4Data = {
  className: "checkbox-4",
};

const checkbox5Data = {
  className: "checkbox-5",
};

const checkbox6Data = {
  className: "checkbox-6",
};

const radioBoxData = {
  label: "Peer to Peer (randomised)",
};

