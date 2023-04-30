import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  IbmplexsansBoldShark64px,
  IbmplexsansMediumWhite16px,
  IbmplexsansNormalShark20px,
  IbmplexsansNormalStack20px,
  IbmplexsansSemiBoldShark20px,
  IbmplexsansSemiBoldShark24px,
  IbmplexsansMediumElectricViolet20px
} from "../../styledMixins";
import Breadcrumb from "../Breadcrumb";
import Breadcrumb2 from "../Breadcrumb2";
import Buttons2 from "../Buttons2";
import GoBack2 from "../GoBack2";
import Footer from "../Footer";
import Header from "../Header";
import "./CreateAAssignmentLaptop.css";
import ScreenPopup from "../ScreenPopup";

function CreateAAssignmentLaptop(props) {
  const {
    addQuestion,
    questionFrames,
    handleTitleChange,
    publish,
    saveDraft,
    checkboxes,
    assignment,
    dateSelectorFrame,
    feedbacksMethodContainer,
    cleanformattingTextBox,
    cleanformattingDiv,
    headerProps,
    assignmentSettings,
    feedbackMethod,
    goBack21Props,
    buttons21Props,
    goBack22Props,
  } = props;

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
        <Frame1376Sticky>
          {titleAndSaveButtons(assignment, saveDraft, publish)}
        </Frame1376Sticky>
        <Frame1378 readOnly={assignment.status!= "DRAFT"}>
          <Frame1375>
            
            <Frame1374
              id="assignmentNameContainer"
              onClick={cleanformattingTextBox}
              onChange={handleTitleChange}
            >
              <TextInput id="assignmentName" value={assignment.title}></TextInput>
            </Frame1374>
            <Frame1294>
              <Frame1372>
                <Questions>Questions</Questions>
              </Frame1372>

              <Frame1295>{questionFrames()}</Frame1295>
              <Frame1296>
                <Buttons2
                  add={buttons21Props.add}
                  label="Add a new question"
                  onClickFn={addQuestion}
                />
              </Frame1296>
            </Frame1294>
          </Frame1375>
          <Frame1377>
            <Frame1294>
              <AssignmentSettings>{assignmentSettings}</AssignmentSettings>
              <Frame1295>
                <Frame1299 id="classesContainer" onClick={cleanformattingDiv}>
                  <Frame12811>
                    <Classes>Classes</Classes>
                    {/* <Link to="/tooltip1">
                      <Help src={help1} alt="help" />
                    </Link> */}
                  </Frame12811>
                  <Frame1298>{checkboxes}</Frame1298>
                </Frame1299>
                <Frame1299>
                  <Frame12811>
                    <Classes>{feedbackMethod}</Classes>   
                  </Frame12811>
                  <Frame12981>{feedbacksMethodContainer}</Frame12981>
                </Frame1299>
                <Frame1299 id="timeContainer" onClick={cleanformattingDiv}>
                  <Frame12811>
                    <Classes>Due at</Classes>
                  </Frame12811>
                  <Frame12981>{dateSelectorFrame}</Frame12981>
                </Frame1299>
              </Frame1295>
            </Frame1294>
            <Frame1372>
              <GoBack2
                caret={goBack22Props.caret}
                className={goBack22Props.className}
              />
              <Frame12191>
              <Frame1372>
                {saveButtons(assignment, saveDraft, publish)}
              </Frame1372>
              </Frame12191>
            </Frame1372>
          </Frame1377>
        </Frame1378>
        
      </Frame1379>
      
      <Footer />
    </div>
  );

  
}

function titleAndSaveButtons(assignment, saveDraft, publish) {
  const title =   (assignment.status === "DRAFT")?<Title>Create Assignment</Title>:<></>
  return <Frame1372>
    {title}
    {saveButtons(assignment, saveDraft, publish)}
  </Frame1372>;
}
const saveButtons = (assignment, saveDraft, publish)=> {
  if (assignment.status === "DRAFT") {
  return <Frame12191>
    <Link onClick={saveDraft}>Save as draft</Link>
    <Buttons1>
      <Button onClick={publish}>Publish</Button>
    </Buttons1>
  </Frame12191>
  } 
  return <></>
}
const Link = styled.div`
  ${IbmplexsansMediumElectricViolet20px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: right;
  letter-spacing: -0.5px;
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

const Frame1376 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;
const Frame1376Sticky = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 60px;
  // position: sticky;
  top:0;
  z-index: 1;
  background-color: var(--white-pointer);  border-radius: 16px;
  var(--light-mode-purple)
  overflow-y: scroll;
  box-shadow: 0px 4px 22px #2f1a720a;
  &::-webkit-scrollbar {
    display: none;
  }
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
  ${(props) => props.readOnly && "pointer-events: none; opacity: 0.5;"}
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
  align-self: stretch;
  z-index: 1;
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

const Frame1295 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
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
  position: relative;
  align-self: stretch;
  gap: 16px;
`;

const Frame12981 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  position: relative;
  align-self: stretch;
`;

const Frame12191 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 24px;
  position: relative;
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
  cursor: pointer;
  &:hover {
    scale: 1.2;
    transition: 0.1s;
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
  background-color: var(--light-mode-purple);
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
