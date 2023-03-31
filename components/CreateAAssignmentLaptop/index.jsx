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
    logo,
    title,
    nameOfAssignment,
    questions,
    line141,
    text11,
    toremIpsumDolorSi,
    frame1284,
    line142,
    options,
    assignmentSettings,
    classes,
    help1,
    feedbackMethod,
    help2,
    x2021JeddleAllRightsReserved,
    navElement21Props,
    navElementProps,
    navElement22Props,
    notificationsProps,
    frame4Props,
    goBack21Props,
    buttons21Props,
    frame12973Props,
    input51Props,
    input61Props,
    input62Props,
    frame1291Props,
    questionFrame41Props,
    richTextComponentsProps,
    richTextComponents3Props,
    input52Props,
    input63Props,
    input81Props,
    input82Props,
    input83Props,
    input84Props,
    input64Props,
    questionFrame42Props,
    questionFrame43Props,
    buttons22Props,
    checkbox31Props,
    checkbox32Props,
    checkbox33Props,
    checkbox34Props,
    checkbox35Props,
    checkbox36Props,
    goBack22Props,
    frame662Props,
  } = props;
  const [courses, setCourses] = React.useState([]);

  useEffect(() => {
    getCourses().then((res) => {
      setCourses(res);
    });
  }, []);

  const assignmentTemplate = {
    title: "postman assignment with a very big title ",
    courseIds: [],
    questions: [
      {
        serialNumber: "1",
        question: "1 postman question",
        type: "TEXT",
      },
      {
        serialNumber: "2",
        question: "2 postman question",
        type: "TEXT",
      },
    ],
  };

  const publish = () => {
    const assignmentName = document.getElementById("assignmentName").value;
    assignmentTemplate.courseIds = [];
    courses.forEach((course) => {
      if (document.getElementById(course.id).checked) {
        assignmentTemplate.courseIds.push(course.id);
      }
    });

    assignmentTemplate.title = assignmentName;
    const questions = [];
    const question1 = {
      serialNumber: "1",
      question: document.getElementById("question1").value,
      type: "TEXT",
    };
    questions.push(question1);
    assignmentTemplate.questions = questions;
    console.log(assignmentTemplate);

    createAssignment(assignmentTemplate).then((res) => {
      console.log(res);
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
        <Header />
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
              <Title>{title}</Title>
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
                <Questions>{questions}</Questions>
                <Buttons2 add={buttons21Props.add} />
              </Frame1372>

              <Frame1295>
                <QuestionFrame>
                  <Frame1295>
                    <Frame12973
                      number="1"
                      frame1284={frame12973Props.frame1284}
                      richTextComponentsProps={
                        frame12973Props.richTextComponentsProps
                      }
                      sectiontitle="Section 1"
                    />
                    <Line14 src={line141} alt="Line 14" />
                  </Frame1295>

                  <Frame1289>
                    <InputQuestion>
                      <Label>Type of question</Label>
                      <QuestionFrame1>
                        <QuestionInput>Theory</QuestionInput>
                      </QuestionFrame1>
                    </InputQuestion>

                    <InputQuestion>
                      <Label>Question</Label>
                      <QuestionFrame1>
                        <QuestionInputEditable
                          id="question1"
                          placeholder="Type Your Question here"
                        />
                      </QuestionFrame1>
                    </InputQuestion>
                    <InputQuestion>
                      <Label>Hint (Optional)</Label>
                      <QuestionFrame1>
                        <QuestionInputEditable
                          id="question1hint"
                          placeholder="Optional"
                        />
                      </QuestionFrame1>
                    </InputQuestion>

                    <Frame1291 className={frame1291Props.className} />
                    {/* <Buttons3 /> */}
                  </Frame1289>
                </QuestionFrame>

                {/* <QuestionFrame>
                  <Frame1295>
                    <Frame1297>
                      <RichTextComponents src={richTextComponentsProps.src} />
                      <Frame1287>
                        <Frame1283>
                          <Frame1282>
                            <Text11>2</Text11>
                            <Frame1281>
                              <ToremIpsumDolorSi>Section 2</ToremIpsumDolorSi>
                              <RichTextComponents3
                                bulletListProps={
                                  richTextComponents3Props.bulletListProps
                                }
                              />
                            </Frame1281>
                          </Frame1282>
                          <Frame1284 src={frame1284} alt="Frame 1284" />
                        </Frame1283>
                      </Frame1287>
                    </Frame1297>
                    <Line14 src={line142} alt="Line 14" />
                  </Frame1295>

                  <Frame1289>
                    <InputQuestion>
                      <Label>Type of question</Label>
                      <QuestionFrame1>
                        <QuestionInput>MCQ</QuestionInput>
                      </QuestionFrame1>
                    </InputQuestion>

                    <InputQuestion>
                      <Label>Question</Label>
                      <QuestionFrame1>
                        <QuestionInputEditable
                          id="question2"
                          placeholder="Type Your Question here"
                        />
                      </QuestionFrame1>
                    </InputQuestion>
                    <Input>
                      <Options>{options}</Options>
                      <Frame1285>
                        <MCQInput>
                          <MCQFrame>
                            <QuestionInputEditable
                              id="option1"
                              placeholder="Option 1"
                            />
                          </MCQFrame>
                          <Group1255
                            className={input82Props.group1255Props.className}
                          />
                        </MCQInput>

                        <MCQInput>
                          <MCQFrame>
                            <QuestionInputEditable
                              id="option2"
                              placeholder="Option 2"
                            />
                          </MCQFrame>
                          <Group1255
                            className={input82Props.group1255Props.className}
                          />
                        </MCQInput>

                        <MCQInput>
                          <MCQFrame>
                            <QuestionInputEditable
                              id="option3"
                              placeholder="Option 3"
                            />
                          </MCQFrame>
                          <Group1255
                            className={input82Props.group1255Props.className}
                          />
                        </MCQInput>

                        <MCQInput>
                          <MCQFrame>
                            <QuestionInputEditable
                              id="option4"
                              placeholder="Option 4"
                            />
                          </MCQFrame>
                          <Group1255
                            className={input82Props.group1255Props.className}
                          />
                        </MCQInput>
                        <Buttons4 />
                      </Frame1285>
                    </Input>
                    <InputQuestion>
                      <Label>Hint (Optional)</Label>
                      <QuestionFrame1>
                        <QuestionInputEditable
                          id="question1hint"
                          placeholder="Optional"
                        />
                      </QuestionFrame1>
                    </InputQuestion>
                    <Buttons3 />
                  </Frame1289>
                </QuestionFrame> */}
              </Frame1295>
              <Frame1296>
                <Buttons2 add={buttons22Props.add} />
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
