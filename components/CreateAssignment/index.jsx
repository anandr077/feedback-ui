import dayjs from "dayjs";
import React from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import styled from "styled-components";
import {
  getClasses,
  createAssignment,
  updateAssignment,
  getAssignmentById,
  publishAssignment,
} from "../../service";
import {
  IbmplexsansNormalShark20px,
  IbmplexsansBoldShark64px,
} from "../../styledMixins";
import { assignmentsHeaderProps } from "../../utils/headerProps";
import CheckboxBordered from "../CheckboxBordered";
import CreateAAssignmentLaptop from "../CreateAAssignmentLaptop";
import CreateAAssignmentMobile from "../CreateAAssignmentMobile";
import CreateAAssignmentTablet from "../CreateAAssignmentTablet";
import DateSelector from "../DateSelector";
import MCQQuestionFrame from "../MCQQuestionFrame";
import ReactiveRender from "../ReactiveRender";
import TheoryQuestionFrame from "../TheoryQuestionFrame";
import SnackbarContext from "../SnackbarContext";
import { tr } from "date-fns/locale";
import Loader from "../Loader";
import FocusAreaDialog from "./Dialog/newFocusArea";
import { getFocusAreas, updateNewFocusAreas, getAllColors } from "../../service";
const createAssignmentHeaderProps = assignmentsHeaderProps;

export default function CreateAssignment(props) {
  const { assignmentId } = useParams();
  const draft = {
    id: uuidv4(),
    title: "",
    classIds: [],
    questions: [
      {
        serialNumber: 1,
        question: "",
        type: "TEXT",
        options: [
          {
            questionSerialNumber: 1,
            optionSerialNumber: 1,
            option: "",
            isCorrect: false,
          },
          {
            questionSerialNumber: 1,
            optionSerialNumber: 2,
            option: "",
            isCorrect: false,
          },
          {
            questionSerialNumber: 1,
            optionSerialNumber: 3,
            option: "",
            isCorrect: false,
          },
          {
            questionSerialNumber: 1,
            optionSerialNumber: 4,
            option: "",
            isCorrect: false,
          },
        ],
        focusAreas: [1, 2],
      },
    ],
    reviewedBy: "TEACHER",
    status: "DRAFT",
    dueAt: dayjs().add(3, "day"),
  };
  const [assignment, setAssignment] = React.useState(draft);

  const [openFocusAreaDialog, setOpenFocusAreaDialog] = React.useState(false);

  const { showSnackbar } = React.useContext(SnackbarContext);

  const getAssignment = async (id) => {
    if (id === "new") {
      return draft;
    } else {
      return await getAssignmentById(id);
    }
  };
  const [isLoading, setIsLoading] = React.useState(true);
  const [classes, setClasses] = React.useState([]);
  const [allFocusAreas, setAllFocusAreas] = React.useState([]);
  const [allFocusAreasColors, setAllFocusAreasColors] = React.useState([])

  React.useEffect(() => {
    Promise.all([getClasses(), getAssignment(assignmentId)]).then(
      ([classesResult, assignmentResult]) => {
        setAssignment((prevState) => ({
          ...prevState,
          ...assignmentResult,
          classIds: assignmentResult.classIds ?? [],
        }));
        setClasses(classesResult);
        setIsLoading(false);
      }
    );
  }, [assignmentId]);

  React.useEffect(()=>{
    setAllFocusAreas(getFocusAreas());
    setAllFocusAreasColors(getAllColors());
  });


  if (isLoading) {
    return <Loader />;
  }

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setAssignment((prevAssignment) => ({ ...prevAssignment, title: newTitle }));
  };
  const feedbackMethodUpdate = (newReviewedBy) => {
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      reviewedBy: newReviewedBy,
    }));
  };
  const updateDueAt = (newDueAt) => {
    setAssignment((prevAssignment) => ({ ...prevAssignment, dueAt: newDueAt }));
  };
  const cleanformattingTextBox = (e) => {
    e.currentTarget.style.border = "1px solid var(--text)";
  };
  const cleanformattingDiv = (e) => {
    e.currentTarget.style.border = "1px solid #E0E0E0";
  };

  const questionFrames = () => {
    return assignment.questions.map((question) => questionFrame(question));
  };
  const questionFrame = (question) => {
    return question?.type === "MCQ" ? (
      <MCQQuestionFrame
        serialNumber={question.serialNumber}
        deleteQuestionFrameFn={deleteQuestion}
        questionDetails={question}
        UpdateQuestionFrame={updateQuestionType}
        updateQuestion={updateQuestion}
        cleanformattingTextBox={cleanformattingTextBox}
        cleanformattingDiv={cleanformattingDiv}
        onOptionChange={updateMCQOption}
        options={question.options}
      />
    ) : (
      <TheoryQuestionFrame
        serialNumber={question.serialNumber}
        deleteQuestionFrameFn={deleteQuestion}
        questionDetails={question}
        UpdateQuestionFrame={updateQuestionType}
        updateQuestion={updateQuestion}
        updateFocusAreas={updateFocusAreas}
        cleanformattingTextBox={cleanformattingTextBox}
        cleanformattingDiv={cleanformattingDiv}
        createNewFocusArea={createNewFocusArea}
        allFocusAreas={allFocusAreas}
      />
    );
  };

  function addQuestion() {
    const newId = assignment.questions.length + 1;
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      questions: [
        ...prevAssignment.questions,
        {
          serialNumber: newId,
          question: "",
          type: "TEXT",
          options: [
            {
              questionSerialNumber: newId,
              optionSerialNumber: 1,
              option: "",
              isCorrect: false,
            },
            {
              questionSerialNumber: newId,
              optionSerialNumber: 2,
              option: "",
              isCorrect: false,
            },
            {
              questionSerialNumber: newId,
              optionSerialNumber: 3,
              option: "",
              isCorrect: false,
            },
            {
              questionSerialNumber: newId,
              optionSerialNumber: 4,
              option: "",
              isCorrect: false,
            },
          ],
        },
      ],
    }));
  }

  function deleteQuestion(serialNumber) {
    setAssignment((prevAssignment) => {
      const newQuestions = prevAssignment.questions.filter(
        (question) => question.serialNumber !== serialNumber
      );
      return {
        ...prevAssignment,
        questions: newQuestions.map((question, index) => {
          if (question.serialNumber > serialNumber) {
            // Update the questionSerialNumber for the options as well
            const updatedOptions = question.options.map((option) => ({
              ...option,
              questionSerialNumber: index + 1,
            }));
            return {
              ...question,
              serialNumber: index + 1,
              options: updatedOptions,
            };
          }
          return question;
        }),
      };
    });
  }

  function updateMCQOption(
    questionSerialNumber,
    optionSerialNumber,
    newOption,
    newIsCorrect
  ) {
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      questions: prevAssignment.questions.map((question) =>
        question.serialNumber === questionSerialNumber
          ? {
              ...question,
              options: question.options.map((o) =>
                o.optionSerialNumber === optionSerialNumber
                  ? { ...o, option: newOption, isCorrect: newIsCorrect }
                  : o
              ),
            }
          : question
      ),
    }));
  }

  function updateQuestion(id, newContent) {
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      questions: prevAssignment.questions.map((q) =>
        q.serialNumber === id ? { ...q, question: newContent } : q
      ),
    }));
  }

  function updateQuestionType(id, newType) {
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      questions: prevAssignment.questions.map((question) =>
        question.serialNumber === id ? { ...question, type: newType } : question
      ),
    }));
  }

  function updateFocusAreas(id, newFocusAreas) {
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      questions: prevAssignment.questions.map((q) =>
        q.serialNumber === id ? { ...q, focusAreas: newFocusAreas } : q
      ),
    }));
  }

  function createNewFocusArea() {
    setOpenFocusAreaDialog(true);
  }

  function addNewFocusArea(title, description, selectedColor) {
    setOpenFocusAreaDialog(false);
    if(title!=="" && selectedColor!==""){
      updateNewFocusAreas(title, selectedColor, description);
      setAllFocusAreas(getFocusAreas());
    }
  }

  const handleClassCheckboxChange = (classId, isChecked) => {
    setAssignment((prevAssignment) => {
      if (isChecked) {
        return {
          ...prevAssignment,
          classIds: [...prevAssignment.classIds, classId],
        };
      } else {
        return {
          ...prevAssignment,
          classIds: prevAssignment.classIds.filter((id) => id !== classId),
        };
      }
    });
  };

  const saveDraft = () => {
    updateAssignment(assignment.id, assignment).then((res) => {
      if (res.status === "DRAFT") {
        showSnackbar("Task saved");
        return;
      } else {
        showSnackbar("Could not save task");
        return;
      }
    });
  };

  const isTitleValid = () => {
    assignment.title = assignment.title.trim();
    if (assignment.title.length > 0) {
      return true;
    } else {
      document.getElementById("assignmentNameContainer");
      assignmentNameContainer.style.border = "1px solid red";
      showSnackbar("Please enter task title");
      return false;
    }
  };
  const isQuestionsValid = () => {
    let invalidQuestion = false;
    const questions = assignment.questions;
    questions.map((question) => {
      question.question = question.question.trim();
      if (question.question.length === 0) {
        const questionContainer = document.getElementById(
          "questionContainer_" + question.serialNumber
        );
        questionContainer.style.border = "1px solid red";
        const questionTextBox = document.getElementById(
          "question_textBox" + question.serialNumber
        );
        questionTextBox.style.border = "1px solid red";
        invalidQuestion = true;
        showSnackbar("Please enter Question " + question.serialNumber);
        return false;
      }
      if (question.type === "MCQ") {
        let isCorrectPresent = false;
        question.options.map((option, index) => {
          option.option = option.option.trim();
          if (option.option.length === 0) {
            const optionTextBox = document.getElementById(
              "option_" + question.serialNumber + "_" + index
            );
            optionTextBox.style.border = "1px solid red";
            invalidQuestion = true;
          }
          if (option.isCorrect) {
            isCorrectPresent = true;
          }
        });
        if (invalidQuestion) {
          showSnackbar(
            "Please enter options for Question " + question.serialNumber
          );
          return false;
        }
        if (!isCorrectPresent) {
          const optionContainer = document.getElementById(
            "optionFrame_" + question.serialNumber
          );
          optionContainer.style.border = "1px solid red";
          invalidQuestion = true;
          showSnackbar(
            "Please select atleast one correct option for Question " +
              question.serialNumber
          );
          return false;
        }
      }
    });
    return invalidQuestion ? false : true;
  };

  const isClassesValid = () => {
    if (assignment.classIds.length > 0) {
      return true;
    } else {
      const classesContainer = document.getElementById("classesContainer");
      classesContainer.style.border = "1px solid red";
      showSnackbar("Please select atleast one class");
    }
  };

  const isDateValid = () => {
    const assignmentDate = new Date(assignment.dueAt);
    if (assignmentDate.getTime() - Date.now() > 3600000) {
      return true;
    } else {
      const dueDateContainer = document.getElementById("timeContainer");
      dueDateContainer.style.border = "1px solid red";
      showSnackbar("Please choose due time at least one hour from now.");
      return false;
    }
  };

  const isAssignmentValid = () => {
    return isTitleValid() &&
      isQuestionsValid() &&
      isClassesValid() &&
      isDateValid()
      ? true
      : false;
  };

  const publish = () => {
    if (isAssignmentValid()) {
      updateAssignment(assignment.id, assignment).then((_) => {
        publishAssignment(assignment.id).then((res) => {
          if (res.status === "PUBLISHED") {
            showSnackbar("Task published", res.link);
            window.location.href = "#tasks";
          } else {
            showSnackbar("Task creation failed", res.link);
            return;
          }
        });
      });
    } else {
      // showSnackbar('Please fill all the fields');
    }
  };

  const checkboxes = classes.map((clazz) => {
    const isChecked = assignment.classIds.includes(clazz.id);

    return (
      <CheckboxContainer>
        <CheckboxBordered
          key={clazz.id}
          id={clazz.id}
          checked={isChecked}
          onChange={(e) =>
            handleClassCheckboxChange(clazz.id, e.target.checked)
          }
        />
        <CheckBoxText>{clazz.title}</CheckBoxText>
      </CheckboxContainer>
    );
  });

  const feedbacksMethodContainer = (
    <StyledRadioGroup
      value={assignment.reviewedBy}
      onChange={(event) => feedbackMethodUpdate(event.target.value)}
    >
      <StyledFormControlLabel
        value="TEACHER"
        control={<Radio />}
        label="Teacher Feedback"
      />
      <StyledFormControlLabel
        value="P2P"
        control={<Radio />}
        label="Peer to Peer (randomised)"
      />
    </StyledRadioGroup>
  );

  const dateSelectorFrame = (
    <DateSelector
      value={dayjs(assignment.dueAt)}
      onChange={(newValue) => updateDueAt(newValue)}
    />
  );

  const methods = {
    assignment,
    handleTitleChange,
    addQuestion,
    questionFrames,
    handleClassCheckboxChange,
    publish,
    saveDraft,
    checkboxes,
    // setShowPopup,
    // setDismissable,
    cleanformattingTextBox,
    cleanformattingDiv,
  };

  return (
    <>
      <ReactiveRender
        mobile={
          <CreateAAssignmentMobile
            {...{
              ...methods,
              classes,
              checkedClasses: assignment.classIds,
              assignment,
              feedbacksMethodContainer,
              dateSelectorFrame,
              ...createAAssignmentMobileData,
            }}
          />
        }
        tablet={
          <CreateAAssignmentTablet
            {...{
              ...methods,
              classes,
              assignment,
              checkedClasses: assignment.classIds,
              feedbacksMethodContainer,
              dateSelectorFrame,
              ...createAAssignmentTabletData,
            }}
          />
        }
        laptop={
          <CreateAAssignmentLaptop
            {...{
              ...methods,
              classes,
              assignment,
              checkedClasses: assignment.classIds,
              feedbacksMethodContainer,
              dateSelectorFrame,
              ...createAAssignmentLaptopData,
            }}
          />
        }
        desktop={
          <CreateAAssignmentLaptop
            {...{
              ...methods,
              classes,
              assignment,
              checkedClasses: assignment.classIds,
              feedbacksMethodContainer,
              dateSelectorFrame,
              ...createAAssignmentLaptopData,
            }}
          />
        }
      />
      {openFocusAreaDialog && <FocusAreaDialog handleData={addNewFocusArea} colors={allFocusAreasColors} />}
    </>
  );
}
const Title = styled.h1`
  ${IbmplexsansBoldShark64px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -1.6px;
  line-height: normal;
`;
const StyledRadioGroup = styled(RadioGroup)`
  display: flex;
  flex-direction: row;
  &.MuiFormGroup-root {
    display: flex;
    flex-direction: row;
  }
`;

const StyledFormControlLabel = styled(FormControlLabel)`
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
  .MuiTypography-root {
    ${IbmplexsansNormalShark20px}
  }
  .MuiRadio-root {
    color: var(--light-mode-purple);
  }
  .MuiRadio-colorPrimary.Mui-checked .MuiSvgIcon-root {
    color: var(--light-mode-purple);
  }
`;
const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex: 1;
  flex-direction: row;
`;

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
  display: flex;
  align-items: center;
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
  title: "Create Task",
  nameOfAssignment: "Name of task",
  line141: "/img/line-14-4.png",
  text11: "3.",
  toremIpsumDolorSi: "Torem ipsum dolor sit amet, consectetur adipiscing elit.",
  frame1284: "/img/frame-1284-7@2x.png",
  line142: "/img/line-14-4.png",
  options: "Options",
  assignmentSettings: "Task Settings",
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
  title: "Create Task",
  nameOfAssignment: "Name of task",
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
  assignmentSettings: "Task Settings",
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
