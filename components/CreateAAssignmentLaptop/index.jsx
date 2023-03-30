import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavElement2 from "../NavElement2";
import NavElement from "../NavElement";
import Notifications from "../Notifications";
import Frame4 from "../Frame4";
import Breadcrumb from "../Breadcrumb";
import Breadcrumb2 from "../Breadcrumb2";
import GoBack2 from "../GoBack2";
import Frame1219 from "../Frame1219";
import Buttons2 from "../Buttons2";
import Frame12973 from "../Frame12973";
import Input5 from "../Input5";
import Input6 from "../Input6";
import Frame1291 from "../Frame1291";
import Buttons3 from "../Buttons3";
import QuestionFrame4 from "../QuestionFrame4";
import RichTextComponents from "../RichTextComponents";
import RichTextComponents3 from "../RichTextComponents3";
import Frame12803 from "../Frame12803";
import Input8 from "../Input8";
import Buttons4 from "../Buttons4";
import Checkbox3 from "../Checkbox3";
import RadioBox2 from "../RadioBox2";
import Frame662 from "../Frame662";
import styled from "styled-components";
import {
  IbmplexsansNormalShark20px,
  IbmplexsansSemiBoldShark24px,
  IbmplexsansNormalStack20px,
  IbmplexsansBoldShark64px,
  IbmplexsansNormalChicago13px,
  IbmplexsansSemiBoldShark20px,
  IbmplexsansNormalElectricViolet16px,
  IbmplexsansMediumWhite16px,
} from "../../styledMixins";

import "./CreateAAssignmentLaptop.css";
import Header from "../Header";
import Footer from "../Footer";
import { createAssignment, getCourses } from "../../service";

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

  const assignmentTemplate = {
    title: "postman assignment with a very big title ",
    courseIds: [12440],
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
    assignmentTemplate.title = assignmentName;
    console.log(assignmentTemplate);
  };

  const [courses, setCourses] = React.useState([]);
  useEffect(() => {
    getCourses().then((res) => {
      setCourses(res);
      console.log(res);
    });
    createAssignment(assignmentTemplate).then((res) => {
      console.log(res);
    });
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
                    <Input5 input={input51Props.input} />
                    <Input6
                      label={input61Props.label}
                      input={input61Props.input}
                    />
                    <Input6
                      label={input62Props.label}
                      input={input62Props.input}
                    />
                    <Frame1291 className={frame1291Props.className} />
                    <Buttons3 />
                  </Frame1289>
                </QuestionFrame>

                <QuestionFrame>
                  <Frame1295>
                    <Frame1297>
                      <RichTextComponents src={richTextComponentsProps.src} />
                      <Frame1287>
                        <Frame1283>
                          <Frame1282>
                            <Text11>{text11}</Text11>
                            <Frame1281>
                              <ToremIpsumDolorSi>
                                {toremIpsumDolorSi}
                              </ToremIpsumDolorSi>
                              <RichTextComponents3
                                bulletListProps={
                                  richTextComponents3Props.bulletListProps
                                }
                              />
                            </Frame1281>
                          </Frame1282>
                          <Frame1284 src={frame1284} alt="Frame 1284" />
                        </Frame1283>
                        <Frame12803 />
                      </Frame1287>
                    </Frame1297>
                    <Line14 src={line142} alt="Line 14" />
                  </Frame1295>
                  <Frame1289>
                    <Input5 input={input52Props.input} />
                    <Input6
                      label={input63Props.label}
                      input={input63Props.input}
                    />
                    <Input>
                      <Options>{options}</Options>
                      <Frame1285>
                        <Input8
                          option1={input81Props.option1}
                          group1255Props={input81Props.group1255Props}
                        />
                        <Input8
                          option1={input82Props.option1}
                          group1255Props={input82Props.group1255Props}
                        />
                        <Input8
                          option1={input83Props.option1}
                          group1255Props={input83Props.group1255Props}
                        />
                        <Input8
                          option1={input84Props.option1}
                          group1255Props={input84Props.group1255Props}
                        />
                        <Buttons4 />
                      </Frame1285>
                    </Input>
                    <Input6
                      label={input64Props.label}
                      input={input64Props.input}
                    />
                    <Buttons3 />
                  </Frame1289>
                </QuestionFrame>
                <QuestionFrame4
                  frame12973Props={questionFrame42Props.frame12973Props}
                />
                <QuestionFrame4
                  frame12973Props={questionFrame43Props.frame12973Props}
                />
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
                    <Checkbox3 className={checkbox31Props.className} />
                    <Checkbox3 className={checkbox32Props.className} />
                    <Checkbox3 className={checkbox33Props.className} />
                    <Checkbox3 className={checkbox34Props.className} />
                    <Checkbox3 className={checkbox35Props.className} />
                    <Checkbox3 className={checkbox36Props.className} />
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
  align-items: flex-start;
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
export default CreateAAssignmentLaptop;
