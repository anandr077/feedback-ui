import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  IbmplexsansBoldShark64px,
  IbmplexsansMediumWhite16px,
  IbmplexsansNormalChicago13px,
  IbmplexsansNormalElectricViolet16px,
  IbmplexsansNormalMountainMist20px,
  IbmplexsansNormalShark20px,
  IbmplexsansNormalStack20px,
  IbmplexsansSemiBoldShark20px,
  IbmplexsansSemiBoldShark24px,
} from "../../styledMixins";
import Breadcrumb from "../Breadcrumb";
import Breadcrumb2 from "../Breadcrumb2";
import Buttons2 from "../Buttons2";
import Frame1291 from "../Frame1291";
import Frame12973 from "../Frame12973";
import GoBack2 from "../GoBack2";
import RadioBox2 from "../RadioBox2";

import { createAssignment, getCourses } from "../../service";
import Footer from "../Footer";
import Header from "../Header";
import "./CreateAAssignmentLaptop.css";

function CreateAAssignmentLaptop(props) {
  const {
    headerProps,
    line141,
    assignmentSettings,
    classes,
    help1,
    feedbackMethod,
    help2,
    goBack21Props,
    buttons21Props,
    frame12973Props,
    goBack22Props,
  } = props;
  const [courses, setCourses] = React.useState([]);
  const [questionFrames, setQuestionFrames] = React.useState([
    createNewQuestionFrame(1, frame12973Props, line141),
  ]);
  const addQuestionFrameFn = () => {
    const newQuestionFrame = createNewQuestionFrame(
      questionFrames.length + 1,
      frame12973Props,
      line141
    );
    setQuestionFrames([...questionFrames, newQuestionFrame]);
  };

  useEffect(() => {
    getCourses().then((res) => {
      setCourses(res);
    });
  }, []);

  const publish = () => {
    const title = document.getElementById("assignmentName").value;
    const courseIds = courses
      .filter((course) => {
        return document.getElementById(course.id).checked;
      })
      .map((course) => course.id);

    const serialNumbers = questionFrames.map((_, index) => index + 1);
    const questions = serialNumbers.map((serialNumber) => {
      const question = {
        serialNumber: serialNumber,
        question: document.getElementById("question_" + serialNumber).value,
        type: "TEXT",
      };
      return question;
    });

    const assignment = {
      title,
      courseIds,
      questions,
    };
    createAssignment(assignment).then((res) => {
      window.location.href = "/";
    });
  };
  const checkboxes = courses.map((course) => {
    return (
      <Checkbox>
        <Checkbox1>
          <Rectangle43 key={course.id} id={course.id} type="checkbox" />
        </Checkbox1>
        <CheckBoxText>{course.title}</CheckBoxText>
      </Checkbox>
    );
  });
  return (
    <div className="create-a-assignment-laptop screen">
      <Frame1379>
        <Header headerProps={headerProps} />
        <Frame1376>
          <Frame1315>
            <Breadcrumb />
            <Breadcrumb2 />
          </Frame1315>
          <GoBack2 caret={goBack21Props.caret} />
        </Frame1376>
        <Frame1378>
          <Frame1375>
            <Frame1372>
              <Title>Create Assignment</Title>
              <Frame12191>
                <Buttons1>
                  <Button onClick={publish}>Publish</Button>
                </Buttons1>
              </Frame12191>
            </Frame1372>
            <Frame1374>
              <TextInput id="assignmentName"></TextInput>
            </Frame1374>
            <Frame1294>
              <Frame1372>
                <Questions>Questions</Questions>
                <Buttons2
                  add={buttons21Props.add}
                  label="Add a new question"
                  onClickFn={addQuestionFrameFn}
                />
              </Frame1372>

              <Frame1295>{questionFrames}</Frame1295>
              <Frame1296>
                <Buttons2
                  add={buttons21Props.add}
                  label="Add a new question"
                  onClickFn={addQuestionFrameFn}
                />
              </Frame1296>
            </Frame1294>
          </Frame1375>
          <Frame1377>
            <Frame1294>
              <AssignmentSettings>{assignmentSettings}</AssignmentSettings>
              <Frame1295>
                <Frame1299>
                  <Frame12811>
                    <Classes>{classes}</Classes>
                    <Link to="/tooltip1">
                      <Help src={help1} alt="help" />
                    </Link>
                  </Frame12811>
                  <Frame1298>
                    {checkboxes}

                    {/* <Checkbox3 className={checkbox32Props.className} /> */}
                  </Frame1298>
                </Frame1299>
                <Frame1299>
                  <Frame12811>
                    <Classes>{feedbackMethod}</Classes>
                    <Link to="/tooltip2">
                      <Help src={help2} alt="help" />
                    </Link>
                  </Frame12811>
                  <Frame12981>
                    <RadioBox2 />
                  </Frame12981>
                </Frame1299>
              </Frame1295>
            </Frame1294>
            <Frame1372>
              <GoBack2
                caret={goBack22Props.caret}
                className={goBack22Props.className}
              />
              <Frame12191>
                <Buttons1>
                  <Button onClick={publish}>Publish</Button>
                </Buttons1>
              </Frame12191>
            </Frame1372>
          </Frame1377>
        </Frame1378>
      </Frame1379>

      <Footer />
    </div>
  );
}

function createNewQuestionFrame(serialNumber, frame12973Props, line141) {
  return (
    <QuestionFrame>
      <Frame1295>
        <Frame12973
          number={serialNumber}
          frame1284={frame12973Props.frame1284}
          richTextComponentsProps={frame12973Props.richTextComponentsProps}
          sectiontitle="Section 1"
        />
        <Line14 src={line141} alt="Line 14" />
      </Frame1295>

      <Frame1289>
        <InputQuestion>
          <Label>Type of question</Label>
          <QuestionFrame1>
            <QuestionInput id={"questionType_" + serialNumber}>
              Theory
            </QuestionInput>
          </QuestionFrame1>
        </InputQuestion>

        <InputQuestion>
          <Label>Question</Label>
          <QuestionFrame1>
            <QuestionInputEditable
              id={"question_" + serialNumber}
              placeholder="Type Your Question here"
            />
          </QuestionFrame1>
        </InputQuestion>
        <InputQuestion>
          <Label>Hint (Optional)</Label>
          <QuestionFrame1>
            <QuestionInputEditable
              id={"questionHint_" + serialNumber}
              placeholder="Optional"
            />
          </QuestionFrame1>
        </InputQuestion>

        <Frame1291 />
        {/* <Buttons3 /> */}
      </Frame1289>
    </QuestionFrame>
  );
}

const Frame1379 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame41 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 32px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const Logo = styled.img`
  position: relative;
  min-width: 241.7498779296875px;
  height: 43.5px;
  margin-left: -1.75px;
`;

const Frame5 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1;
`;

const Frame51 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: flex-end;
  gap: 28px;
  position: relative;
`;

const Frame1376 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const Frame1315 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  position: relative;
  align-self: stretch;
`;

const Frame1378 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 72px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const Frame1375 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  position: relative;
  align-self: stretch;
`;

const Frame1372 = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  position: relative;
  align-self: stretch;
`;

const Title = styled.h1`
  ${IbmplexsansBoldShark64px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -1.6px;
  line-height: normal;
`;

const Frame1374 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 21px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--text);
`;

const TextInput = styled.input`
  ${IbmplexsansNormalStack20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
`;

const X2021JeddleAllRightsReserved = styled.p`
  ${IbmplexsansNormalChicago13px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1294 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 30px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  box-shadow: 0px 4px 22px #2f1a720a;
`;

const Questions = styled.div`
  ${IbmplexsansSemiBoldShark24px}
  position: relative;
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
`;

const ToremIpsumDolorSi = styled.p`
  position: relative;
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1295 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const QuestionFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Line14 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 960px;
  height: 1px;
  object-fit: cover;
`;

const Frame1289 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const Frame1297 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1287 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  position: relative;
  flex: 1;
`;

const Frame1283 = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  position: relative;
  align-self: stretch;
`;

const Frame1282 = styled.div`
  ${IbmplexsansNormalShark20px}
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  flex: 1;
`;

const Text11 = styled.div`
  position: relative;
  width: 20px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1281 = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  position: relative;
  flex: 1;
`;

const Frame1284 = styled.img`
  position: relative;
  min-width: 28px;
  height: 28px;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  position: relative;
  align-self: stretch;
`;

const Options = styled.div`
  ${IbmplexsansNormalShark20px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const AssignmentSettings = styled.div`
  ${IbmplexsansSemiBoldShark24px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1285 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame1296 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
  position: relative;
  align-self: stretch;
`;

const Frame1377 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  position: relative;
  align-self: stretch;
`;

const Frame1299 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame12811 = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  align-self: stretch;
`;

const Classes = styled.div`
  ${IbmplexsansSemiBoldShark20px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Help = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Frame1298 = styled.div`
  display: flex;
  align-items: space-between;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame12981 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  position: relative;
  align-self: stretch;
`;

const Frame6 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 30px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const Frame12191 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 24px;
  position: relative;
`;

const SaveAsDraft = styled.div`
  ${IbmplexsansNormalElectricViolet16px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame12192 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 24px;
  position: relative;
`;

const SaveAsDraft1 = styled.div`
  ${IbmplexsansNormalElectricViolet16px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame12193 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 24px;
  position: relative;
`;

const SaveAsDraft2 = styled.div`
  ${IbmplexsansNormalElectricViolet16px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame12194 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 24px;
  position: relative;
`;

const SaveAsDraft3 = styled.div`
  ${IbmplexsansNormalElectricViolet16px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: normal;
`;

const Buttons1 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  position: relative;
  background-color: var(--light-mode-purple);
  border-radius: 30px;
  border: 1px solid;
  &:hover {
    scale: 1.2;
    transition: 0.3s;
  }
`;

const Button = styled.div`
  ${IbmplexsansMediumWhite16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const InputQuestion = styled.div`
  ${IbmplexsansNormalShark20px}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  position: relative;
  align-self: stretch;
`;

const Label = styled.div`
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const QuestionFrame1 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
`;

const QuestionInput = styled.div`
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const QuestionInputEditable = styled.input`
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
`;

const MCQInput = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  align-self: stretch;
`;

const MCQFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 20px;
  position: relative;
  flex: 1;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
`;

const OptionText = styled.div`
  ${IbmplexsansNormalMountainMist20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
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
export default CreateAAssignmentLaptop;
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

const notifications1Data = {
  src: "/img/notificationbing@2x.png",
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

const richTextComponents14Data = {
  src: "/img/italic@2x.png",
  className: "rich-text-components-13",
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

const notifications3Data = {
  src: "/img/notificationbing@2x.png",
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
