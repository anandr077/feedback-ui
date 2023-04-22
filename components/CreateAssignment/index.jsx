import React from "react";
import { useMediaQuery } from "react-responsive";
import CreateAAssignmentLaptop from "../CreateAAssignmentLaptop";
import CreateAAssignmentTablet from "../CreateAAssignmentTablet";
import CreateAAssignmentMobile from "../CreateAAssignmentMobile";
import styled from "styled-components";
import { IbmplexsansNormalShark20px } from "../../styledMixins";
import { getClasses, createAssignment } from "../../service";
import TheoryQuestionFrame from "../TheoryQuestionFrame";
import ReactiveRender, { isMobileView } from "../ReactiveRender";
import { assignmentsHeaderProps } from "../../utils/headerProps";
import MCQQuestionFrame from "../MCQQuestionFrame";

const createAssignmentHeaderProps = assignmentsHeaderProps;

export default function CreateAssignment() {
  const [classes, setClasses] = React.useState([]);
  const [feedbackMethodValue, setFeedbackMethodValue] =
    React.useState("TEACHER");

  React.useEffect(() => {
    getClasses().then((res) => {
      setClasses(res);
    });
  }, []);

  const feedbackMethodUpdate = (selectedMethod) => {
    setFeedbackMethodValue(selectedMethod);
  };
  const [questionFrames, setQuestionFrames] = React.useState([
    createNewQuestionFrame(1, null, "small"),
  ]);

  const addQuestionFrameFn = () => {
    const newQuestionFrame = createNewQuestionFrame(
      questionFrames.length + 1,
      null,
      "small"
    );

    setQuestionFrames((oldFrames) => [...oldFrames, newQuestionFrame]);
  };

  function deleteQuestionFrameFn(index) {
    setQuestionFrames((oldFrames) => {
      console.log("questionFrames.size", oldFrames.length);
      console.log("index", index);
      const questionFramesBefore = oldFrames.filter((_, i) => i < index);
      const questionFramesAfter = oldFrames
        .filter((_, i) => i > index)
        .map((_, i) => {
          return createNewQuestionFrame(
            index + i + 1,
            (question = {
              serialNumber: index + i + 1,
              question: document.getElementById("question_" + (index + i + 2))
                .value,
              wordLimit: document.getElementById("wordLimit_" + (index + i + 2))
                .value,
              type: "TEXT",
            })
          );
        });
      console.log("questionFramesBefore", questionFramesBefore.length);
      console.log("questionFramesAfter", questionFramesAfter.length);
      return [...questionFramesBefore, ...questionFramesAfter];
    });
  }

  function UpdateQuestionFrame(index, questionType) {
    setQuestionFrames((oldFrames) => {
      const questionFramesBefore = oldFrames.filter((_, i) => i < index - 1);
      const questionFramesAfter = oldFrames.filter((_, i) => i > index - 1);
      return [
        ...questionFramesBefore,
        createNewQuestionFrame(
          index,
          (question = {
            serialNumber: index,
            question: document.getElementById("question_" + index).value,
            wordLimit: document.getElementById("wordLimit_" + index)?.value,
            type: questionType,
          })
        ),
        ...questionFramesAfter,
      ];
    });
  }

  function createNewQuestionFrame(serialNumber, questionDetails) {
    return (
      <>
        {questionDetails?.type === "MCQ" ? (
          <MCQQuestionFrame
            serialNumber={serialNumber}
            deleteQuestionFrameFn={deleteQuestionFrameFn}
            questionDetails={questionDetails}
            UpdateQuestionFrame={UpdateQuestionFrame}
          />
        ) : (
          <TheoryQuestionFrame
            serialNumber={serialNumber}
            deleteQuestionFrameFn={deleteQuestionFrameFn}
            questionDetails={questionDetails}
            UpdateQuestionFrame={UpdateQuestionFrame}
            size="small"
          />
        )}
      </>
    );
  }

  const publish = () => {
    const title = document.getElementById("assignmentName").value;
    // const peertopeer = document.getElementById("peertopeer").checked;
    const reviewedBy = feedbackMethodValue;
    const classIds = classes
      .filter((clazz) => {
        return document.getElementById(clazz.id).checked;
      })
      .map((clazz) => clazz.id);

    const serialNumbers = questionFrames.map((_, index) => index + 1);
    const questions = serialNumbers.map((serialNumber) => {
      const questionType = document.getElementById(
        "option_" + serialNumber + "_1"
      )
        ? "MCQ"
        : "TEXT";

      if (questionType === "MCQ") {
        const optionsIndex = [1, 2, 3, 4];

        const options = optionsIndex.map((index) => {
          const singleOption = {
            questionSerialNumber: serialNumber,
            optionSerialNumber: index,
            option: document.getElementById(
              "option_" + serialNumber + "_" + index
            ).value,
            isCorrect: true,
          };
          return singleOption;
        });
        const question = {
          serialNumber: serialNumber,
          question: document.getElementById("question_" + serialNumber).value,
          type: questionType,
          options: options,
        };
        return question;
      } else {
        const question = {
          serialNumber: serialNumber,
          question: document.getElementById("question_" + serialNumber).value,
          wordLimit: document.getElementById("wordLimit_" + serialNumber).value,
          type: questionType,
        };
        return question;
      }
    });

    const assignment = {
      title,
      classIds,
      questions,
      reviewedBy,
    };
    // createAssignment(assignment).then((res) => {
    //   console.log(res);
    //   window.location.href = "/";
    // });
  };

  const checkboxes = classes.map((clazz) => {
    return (
      <Checkbox>
        <Checkbox1>
          <Rectangle43 key={clazz.id} id={clazz.id} type="checkbox" />
        </Checkbox1>
        <CheckBoxText>{clazz.title}</CheckBoxText>
      </Checkbox>
    );
  });

  const methods = {
    addQuestionFrameFn,
    questionFrames,
    publish,
    checkboxes,
    feedbackMethodUpdate,
  };

  return (
    <ReactiveRender
      mobile={
        <CreateAAssignmentMobile
          {...{
            ...methods,
            feedbackMethodValue,
            ...createAAssignmentMobileData,
          }}
        />
      }
      tablet={
        <CreateAAssignmentTablet
          {...{
            ...methods,
            feedbackMethodValue,
            ...createAAssignmentTabletData,
          }}
        />
      }
      laptop={
        <CreateAAssignmentLaptop
          {...{
            ...methods,
            feedbackMethodValue,
            ...createAAssignmentLaptopData,
          }}
        />
      }
      desktop={
        <CreateAAssignmentLaptop
          {...{
            ...methods,
            feedbackMethodValue,
            ...createAAssignmentLaptopData,
          }}
        />
      }
    />
  );
}

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

const CheckBoxText = styled.div`
  ${IbmplexsansNormalShark20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
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

const createAAssignmentLaptopData = {
  headerProps: createAssignmentHeaderProps,
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

const createAAssignmentTabletData = {
  line141: "/img/line-14-2.png",
  help1: "/img/help@2x.png",
  help2: "/img/help@2x.png",
  goBack21Props: goBack22Data,
  buttons21Props: buttons23Data,
  frame12972Props: frame129722Data,
  goBack22Props: goBack23Data,
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

const goBack2Data = {
  className: "go-back-1",
};

const createAAssignmentMobileData = {
  frame1349: "/img/frame-1349@2x.png",
  frame5: "/img/frame-5@2x.png",
  title: "Create Assignment",
  nameOfAssignment: "Name of assignment",
  questions: "Questions",
  line141: "/img/line-14@2x.png",
  answerWordLimit: "Answer Word Limit",
  number: "1000",
  group1280: "/img/group-1280@2x.png",
  text3: "3.",
  toremIpsumDolorSi: "Torem ipsum dolor sit amet, consectetur adipiscing elit.",
  mcq: "MCQ",
  frame1284: "/img/frame-1284@2x.png",
  line142: "/img/line-14@2x.png",
  options: "Options",
  assignmentSettings: "Assignment Settings",
  classes: "Classes",
  help1: "/img/help@2x.png",
  feedbackMethod: "Feedback Method",
  help2: "/img/help@2x.png",
  notificationsProps: notifications2Data,
  buttons21Props: buttons21Data,
  frame1297Props: frame12971Data,
  input1Props: input1Data,
  input21Props: input21Data,
  input22Props: input22Data,
  questionFrame1Props: questionFrame1Data,
  richTextComponentsProps: richTextComponents3Data,
  bulletListProps: bulletList1Data,
  input2Props: input3Data,
  input3Props: input32Data,
  input41Props: input41Data,
  input42Props: input42Data,
  input43Props: input43Data,
  input44Props: input44Data,
  input23Props: input23Data,
  questionFrame2Props: questionFrame2Data,
  questionFrame3Props: questionFrame3Data,
  buttons22Props: buttons22Data,
  checkbox1Props: checkbox2Data,
  checkbox2Props: checkbox3Data,
  checkbox3Props: checkbox4Data,
  checkbox4Props: checkbox5Data,
  checkbox5Props: checkbox6Data,
  radioBoxProps: radioBoxData,
  goBackProps: goBack2Data,
};
