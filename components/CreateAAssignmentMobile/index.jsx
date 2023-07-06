import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  IbmplexsansBoldShark36px,
  IbmplexsansMediumWhite16px,
  IbmplexsansNormalShark20px,
  IbmplexsansNormalStack20px,
  IbmplexsansSemiBoldShark20px,
  IbmplexsansSemiBoldShark24px,
  IbmplexsansMediumElectricViolet16px,
  IbmplexsansNormalElectricViolet16px
} from "../../styledMixins";
import { taskHeaderProps } from "../../utils/headerProps.js";
import Breadcrumb from "../Breadcrumb";
import Breadcrumb2 from "../Breadcrumb2";
import Buttons2 from "../Buttons2";
import FooterSmall from "../FooterSmall";
import GoBack from "../GoBack";
import HeaderSmall from "../HeaderSmall";
import "./CreateAAssignmentMobile.css";

import ScreenPopup from "../ScreenPopup";

function CreateAAssignmentMobile(props) {
  const {
    assignment,
    handleTitleChange,
    addQuestion,
    questionFrames,
    saveDraft,
    deleteAssignmentHandler,
    publish,
    checkboxes,
    checkedClasses,
    cleanformattingDiv,
    cleanformattingTextBox,
    feedbacksMethodContainer,
    dateSelectorFrame,
    assignmentSettings,
    help1,
    feedbackMethod,
    help2,
    buttons22Props,
    goBackProps,
    showDeletePopuphandler,
  } = props;


  function titleAndSaveButtons(assignment, saveDraft, publish) {
    const title =   (assignment.status === "DRAFT")?<Title>Create Task</Title>:<></>
  
    return <TitleContainer>
      {title}
      {saveButtons(assignment, saveDraft, publish)}
    </TitleContainer>;
  }
  function saveButtons(assignment, saveDraft, publish) {
      if (assignment.status === "DRAFT") {
        return <Frame12191>
          <SLink onClick={saveDraft}>Save as draft</SLink>
  
          <Buttons1>
            <Button onClick={publish}>Publish</Button>
          </Buttons1>
        </Frame12191>;
      }
      return (<DeleteButtonContainer>
        <Frame1322 onClick={showDeletePopuphandler} >
          <IconTrash src="/icons/trashcan.svg" alt="icon-trash" />
          <Delete>Delete</Delete>
        </Frame1322>
      </DeleteButtonContainer> );
  }


  return (
    <div className="create-a-assignment-mobile screen">
      <Frame1379>
        <HeaderSmall headerProps={taskHeaderProps} />
        <Frame1376>
          <Frame1315>
            <Breadcrumb text = "Task" link = "/#/tasks"/>
            <Breadcrumb2 title={assignment.title} />
          </Frame1315>
          <GoBack />
        </Frame1376>
        {titleAndSaveButtons(assignment, saveDraft, publish)}
        <Frame1378  readOnly={assignment.status!= "DRAFT"}>
          <Frame1375>
            <Frame1374
              id="assignmentNameContainer"
              onClick={cleanformattingTextBox}
              onChange={handleTitleChange}
            >
              <TextInput  placeholder="Type task title here" id="assignmentName" value={assignment.title}></TextInput>
            </Frame1374>
            <Frame1294>
              <Frame1293>
                <Questions>Questions</Questions>
              </Frame1293>
              <Frame1295>{questionFrames()}</Frame1295>
              <Frame1296>
                <Buttons2
                  add={buttons22Props.add}
                  onClickFn={addQuestion}
                />
              </Frame1296>
            </Frame1294>
          </Frame1375>
          <Frame1377>
            <Frame1294>
              <Questions>{assignmentSettings}</Questions>
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
                <Frame1300>
                  <Frame12811>
                    <Classes>{feedbackMethod}</Classes>
                    {/* <Link to="/tooltip2">
                      <Help src={help2} alt="help" />
                    </Link> */}
                  </Frame12811>
                  {feedbacksMethodContainer}
                </Frame1300>
                <Frame1300 id="timeContainer" onClick={cleanformattingDiv}>
                  <Frame12811>
                    <Classes>Due at</Classes>
                    {/* <Link to="/tooltip2">
                      <Help src={help2} alt="help" />
                    </Link> */}
                  </Frame12811>
                  {dateSelectorFrame}
                </Frame1300>
              </Frame1295>
            </Frame1294>
            <Frame1373>
              {/* <Frame1219 /> */}
              <Frame12191>
              <Frame1372>
                {saveButtons(assignment, saveDraft, publish)}
              </Frame1372>
              </Frame12191>
            </Frame1373>
          </Frame1377>
        </Frame1378>
        <GoBack className={goBackProps.className} />
      </Frame1379>
      <FooterSmall />
    </div>
  );
}

const TitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 93%;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  position: relative;
  margin-top: 16px;
`;


const DeleteButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  position: relative;
  cursor: pointer;
`;

const Frame1322 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 4px;
  position: relative;
  cursor: pointer;
   &:hover {
    scale: 1.2;
    transition: 0.1s;
  }
`;
const IconTrash = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;
const Delete = styled.div`
  ${IbmplexsansNormalElectricViolet16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;


const SLink = styled.div`
  ${IbmplexsansMediumElectricViolet16px}
  position: relative;
  width: fit-content;
  text-align: right;
  letter-spacing: -0.4px;
  line-height: normal;
  cursor: pointer;
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
  background-color: var(--light-mode-purple);
  border-radius: 30px;
  border: 1px solid;
  cursor: pointer;
  &:hover {
    scale: 1.2;
    transition: 0.1s;
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
  flex-direction: column;
  // align-items: center;
  justify-content: space-between;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Title = styled.h1`
  ${IbmplexsansBoldShark36px}
  font-size: 36px;
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: -0.9px;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 8px;
  
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

const Frame1295 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
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

