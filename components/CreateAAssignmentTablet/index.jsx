import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import Breadcrumb2 from "../Breadcrumb2";
import GoBack2 from "../GoBack2";
import Buttons2 from "../Buttons2";
import Frame12972 from "../Frame12972";
import Frame1291 from "../Frame1291";
import RadioBox2 from "../RadioBox2";
import styled from "styled-components";
import {
  IbmplexsansNormalShark20px,
  IbmplexsansSemiBoldShark24px,
  IbmplexsansNormalStack20px,
  IbmplexsansSemiBoldShark20px,
  IbmplexsansBoldShark36px,
  IbmplexsansMediumWhite16px,
} from "../../styledMixins";
import "./CreateAAssignmentTablet.css";
import FooterSmall from "../FooterSmall";
import HeaderSmall from "../HeaderSmall";
import { createAssignment, getCourses } from "../../service";

function CreateAAssignmentTablet(props) {
  const {
    line141,
    help1,
    help2,
    goBack21Props,
    buttons21Props,
    frame12972Props,
    goBack22Props,
  } = props;

  const [questionFrames, setQuestionFrames] = React.useState([
    createNewQuestionFrame(1, frame12972Props, line141),
  ]);
  const [courses, setCourses] = React.useState([]);
  const addQuestionFrameFn = () => {
    const newQuestionFrame = createNewQuestionFrame(
      questionFrames.length + 1,
      frame12972Props,
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
    <div className="create-a-assignment-tablet screen">
      <Frame1379>
        <HeaderSmall />
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
              </Frame1372>
              <Frame1295>{questionFrames}</Frame1295>
              <Buttons2
                add={buttons21Props.add}
                onClickFn={addQuestionFrameFn}
              />
            </Frame1294>
          </Frame1375>
          <Frame1377>
            <Frame1294>
              <AssignmentSettings>Assignment Settings</AssignmentSettings>
              <Frame1295>
                <Frame1299>
                  <Frame12811>
                    <Classes>Classes</Classes>
                    <Link to="/tooltip1">
                      <Help src={help1} alt="help" />
                    </Link>
                  </Frame12811>
                  <Frame1298>{checkboxes}</Frame1298>
                </Frame1299>
                <Frame1299>
                  <Frame12811>
                    <Classes>Feedback Method</Classes>
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
            </Frame1372>
          </Frame1377>
        </Frame1378>
      </Frame1379>
      <FooterSmall />
    </div>
  );
}
function createNewQuestionFrame(serialNumber, frame12972Props, line141) {
  return (
    <QuestionFrame>
      <Frame1295>
        <Frame12972
          number={serialNumber}
          frame1284={frame12972Props.frame1284}
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

const Button = styled.div`
  ${IbmplexsansMediumWhite16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame12191 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 24px;
  position: relative;
`;
const Frame1379 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
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
  ${IbmplexsansBoldShark36px}
  position: relative;
  flex: 1;
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
  align-items: center;
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
  min-width: 844px;
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

const AssignmentSettings = styled.div`
  ${IbmplexsansSemiBoldShark24px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
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
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
  flex-wrap: wrap;
`;

const Frame12981 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  position: relative;
  align-self: stretch;
`;

export default CreateAAssignmentTablet;
