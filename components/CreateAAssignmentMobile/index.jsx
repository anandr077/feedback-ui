import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Notifications from "../Notifications";
import Breadcrumb from "../Breadcrumb";
import Breadcrumb2 from "../Breadcrumb2";
import GoBack from "../GoBack";
import Frame1219 from "../Frame1219";
import Buttons2 from "../Buttons2";
import Frame1297 from "../Frame1297";
import Input from "../Input";
import Input2 from "../Input2";
import Buttons3 from "../Buttons3";
import RichTextComponents from "../RichTextComponents";
import BulletList from "../BulletList";
import Frame1280 from "../Frame1280";
import Input3 from "../Input3";
import Input4 from "../Input4";
import Buttons4 from "../Buttons4";
import RadioBox from "../RadioBox";
import Frame692 from "../Frame692";
import styled from "styled-components";
import Frame1291 from "../Frame1291";
import {
  IbmplexsansNormalShark16px,
  IbmplexsansNormalShark20px,
  IbmplexsansSemiBoldShark24px,
  IbmplexsansSemiBoldShark20px,
  IbmplexsansNormalStack20px,
  IbmplexsansNormalBlack16px,
  IbmplexsansBoldShark36px,
  IbmplexsansMediumWhite16px,
  IbmplexsansNormalElectricViolet14px
} from "../../styledMixins";
import "./CreateAAssignmentMobile.css";
import FooterSmall from "../FooterSmall";
import HeaderSmall from "../HeaderSmall";
import { createAssignment, getCourses } from "../../service";

function CreateAAssignmentMobile(props) {
  const {
    nameOfAssignment,
    questions,
    line141,
    answerWordLimit,
    number,
    group1280,
    text3,
    toremIpsumDolorSi,
    mcq,
    frame1284,
    line142,
    options,
    assignmentSettings,
    classes,
    help1,
    feedbackMethod,
    help2,
    buttons21Props,
    frame1297Props,
    input1Props,
    input21Props,
    input22Props,
    questionFrame1Props,
    richTextComponentsProps,
    bulletListProps,
    input2Props,
    input3Props,
    input41Props,
    input42Props,
    input43Props,
    input44Props,
    input23Props,
    questionFrame2Props,
    questionFrame3Props,
    buttons22Props,
    checkbox1Props,
    checkbox2Props,
    checkbox3Props,
    checkbox4Props,
    checkbox5Props,
    radioBoxProps,
    goBackProps,
  } = props;

  const deleteQuestionFrameFn = (index) => {
    const newQuestionFrames = questionFrames.filter((_, i) => i !== index);
    setQuestionFrames(newQuestionFrames);
  };
  const [questionFrames, setQuestionFrames] = React.useState([
    createNewQuestionFrame(1, frame1297Props, line141, deleteQuestionFrameFn),
  ]);
  const [courses, setCourses] = React.useState([]);
  const addQuestionFrameFn = () => {
    const newQuestionFrame = createNewQuestionFrame(
      questionFrames.length + 1,
      frame1297Props,
      line141,
      deleteQuestionFrameFn
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
    <div className="create-a-assignment-mobile screen">
      <Frame1379>
        <HeaderSmall />
        <Frame1376>
          <Frame1315>
            <Breadcrumb />
            <Breadcrumb2 />
          </Frame1315>
          <GoBack />
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
              <Frame1293>
                <Questions>Questions</Questions>
              </Frame1293>
              <Frame1295>{questionFrames}</Frame1295>
              <Frame1296>
                <Buttons2
                  add={buttons22Props.add}
                  onClickFn={addQuestionFrameFn}
                />
              </Frame1296>
            </Frame1294>
          </Frame1375>
          <Frame1377>
            <Frame1294>
              <Questions>{assignmentSettings}</Questions>
              <Frame1295>
                <Frame1299>
                  <Frame12811>
                    <Classes>{classes}</Classes>
                    <Link to="/tooltip1">
                      <Help src={help1} alt="help" />
                    </Link>
                  </Frame12811>
                  <Frame1298>{checkboxes}</Frame1298>
                </Frame1299>
                <Frame1300>
                  <Frame12811>
                    <Classes>{feedbackMethod}</Classes>
                    <Link to="/tooltip2">
                      <Help src={help2} alt="help" />
                    </Link>
                  </Frame12811>
                  <Checkbox>
                    <Checkbox1>
                      <Rectangle43 id="peertopeer" type="checkbox" />
                    </Checkbox1>
                    <CheckBoxText>Peer to Peer (randomised) </CheckBoxText>
                  </Checkbox>
                </Frame1300>
              </Frame1295>
            </Frame1294>
            <Frame1373>
              {/* <Frame1219 /> */}
              <GoBack className={goBackProps.className} />
            </Frame1373>
          </Frame1377>
        </Frame1378>
      </Frame1379>
      <FooterSmall />
    </div>
  );
}

function createNewQuestionFrame(
  serialNumber,
  frame1297Props,
  line141,
  deleteQuestionFrameFn
) {
  return (
    <QuestionFrame1>
      <Frame1295>
        <Frame1297
          number={serialNumber}
          richTextComponentsProps={frame1297Props.richTextComponentsProps}
        />
        <DeleteButtonFrame>
          <DeleteButton onClick={() => deleteQuestionFrameFn(serialNumber)}>
            Delete
          </DeleteButton>
        </DeleteButtonFrame>
        <Line14 src={line141} alt="Line 14" />
      </Frame1295>
      <Frame1289>
        <InputQuestion>
          <Label>Question</Label>
          <QuestionFrame2>
            <QuestionInputEditable
              id={"question_" + serialNumber}
              placeholder="Type Your Question here"
            />
          </QuestionFrame2>
        </InputQuestion>
        <InputQuestion>
          <Label>Hint (Optional)</Label>
          <QuestionFrame2>
            <QuestionInputEditable
              id={"questionHint_" + serialNumber}
              placeholder="Optional"
            />
          </QuestionFrame2>
        </InputQuestion>
        <Frame1291 />
      </Frame1289>
    </QuestionFrame1>
  );
}


const DeleteButtonFrame = styled.div`
  ${IbmplexsansNormalElectricViolet14px}
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  align-self: stretch;
  left: 60px;
  &.frame-1280-5.frame-1280-6 {
    opacity: 0;
  }

  &.frame-1280-5.frame-1280-7 {
    opacity: 0;
  }
`;

const DeleteButton = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
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
const QuestionInput = styled.div`
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const QuestionFrame2 = styled.div`
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
const Frame12191 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 24px;
  position: relative;
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

const Buttons1 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  position: relative;
  background-color: var(--royal-purple);
  border-radius: 30px;
  border: 1px solid;
  &:hover {
    scale: 1.2;
    transition: 0.3s;
  }
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
const Checkbox = styled.article`
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  flex: 1;
`;

const CheckBoxText = styled.div`
  ${IbmplexsansNormalShark20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
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
const Frame1379 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1350 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 16px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const Frame1349 = styled.img`
  position: relative;
  flex: 1;
  min-width: 223.75px;
  height: 37.4892578125px;
  margin-left: -1.75px;
`;

const Frame5 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  position: relative;
`;

const Frame51 = styled.img`
  position: relative;
  min-width: 48px;
  height: 48px;
  cursor: pointer;
`;

const Frame1376 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 20px;
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
  gap: 60px;
  padding: 0px 20px;
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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Title = styled.h1`
  ${IbmplexsansBoldShark36px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: -0.9px;
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

const NameOfAssignment = styled.div`
  ${IbmplexsansNormalStack20px}
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
  padding: 16px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  box-shadow: 0px 4px 22px #2f1a720a;
`;

const Frame1293 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  position: relative;
  align-self: stretch;
`;

const Questions = styled.div`
  ${IbmplexsansSemiBoldShark24px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const AnswerWordLimit = styled.div`
  ${IbmplexsansNormalShark16px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Text3 = styled.div`
  ${IbmplexsansNormalShark20px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const ToremIpsumDolorSi = styled.p`
  position: relative;
  align-self: stretch;
  margin-top: -1px;
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

const QuestionFrame1 = styled.div`
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
  min-width: 318px;
  height: 1px;
  object-fit: cover;
`;

const Frame1289 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 0px 16px;
  position: relative;
  align-self: stretch;
`;

const Frame1290 = styled.div`
  display: flex;
  width: 212px;
  align-items: center;
  gap: 16px;
  padding: 11px 14px;
  position: relative;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--black);
`;

const Number = styled.div`
  ${IbmplexsansNormalBlack16px}
  position: relative;
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
`;

const Group1280 = styled.img`
  position: relative;
  min-width: 19.701171875px;
  height: 31.40234375px;
  margin-top: -0.7px;
  margin-bottom: -0.7px;
  margin-right: -0.35px;
`;

const Frame12971 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0px 12px 0px 8px;
  position: relative;
  align-self: stretch;
`;

const Frame1287 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  position: relative;
  flex: 1;
`;

const Frame1283 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const Frame1282 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
  position: relative;
  flex: 1;
`;

const Frame1281 = styled.div`
  ${IbmplexsansNormalShark16px}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
  position: relative;
  align-self: stretch;
`;

const RichTextComponents1 = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px;
  position: relative;
  align-self: stretch;
  border-radius: 4px;
  overflow: hidden;
`;

const MCQ = styled.div`
  position: relative;
  width: 63px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1284 = styled.img`
  position: relative;
  min-width: 28px;
  height: 28px;
`;

const Input1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  position: relative;
  align-self: stretch;
`;

const Frame1285 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;
  padding: 16px;
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
  justify-content: center;
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
  padding: 16px;
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
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  position: relative;
  align-self: stretch;
`;

const Frame1300 = styled.div`
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

const Frame1373 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  position: relative;
  align-self: stretch;
`;

export default CreateAAssignmentMobile;
