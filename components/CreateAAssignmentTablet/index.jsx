import React from 'react';
import Breadcrumb from '../Breadcrumb';
import Breadcrumb2 from '../Breadcrumb2';
import GoBack2 from '../GoBack2';
import Buttons2 from '../Buttons2';
import styled from 'styled-components';
import {
  IbmplexsansMediumElectricViolet20px,
  IbmplexsansSemiBoldShark24px,
  IbmplexsansNormalStack20px,
  IbmplexsansSemiBoldShark20px,
  IbmplexsansBoldShark36px,
  IbmplexsansMediumWhite16px,
  IbmplexsansNormalElectricViolet16px,
} from '../../styledMixins';
import './CreateAAssignmentTablet.css';
// import FooterSmall from '../FooterSmall';
import HeaderSmall from '../HeaderSmall';
import { taskHeaderProps } from '../../utils/headerProps.js';
function CreateAAssignmentTablet(props) {
  const {
    assignment,
    addQuestion,
    handleTitleChange,
    questionFrames,
    saveDraft,
    deleteAssignmentHandler,
    publish,
    checkboxes,
    checkedClasses,
    feedbacksMethodContainer,
    dateSelectorFrame,
    cleanformattingTextBox,
    cleanformattingDiv,
    help1,
    help2,
    goBack21Props,
    buttons21Props,
    goBack22Props,
    showDeletePopuphandler,
    showPublishPopuphandler,
  } = props;

  function titleAndSaveButtons(
    assignment,
    saveDraft,
    publish,
    showPublishPopuphandler
  ) {
    const title =
      assignment.status === 'DRAFT' ? <Title>Create Task</Title> : <></>;

    return (
      <TitleContainer>
        {title}
        {saveButtons(assignment, saveDraft, publish, showPublishPopuphandler)}
      </TitleContainer>
    );
  }
  function saveButtons(
    assignment,
    saveDraft,
    publish,
    showPublishPopuphandler
  ) {
    if (assignment.status === 'DRAFT') {
      return (
        <Frame12191>
          <SLink onClick={saveDraft}>Save as draft</SLink>
          <Buttons1>
            <Button onClick={showPublishPopuphandler}>Publish</Button>
          </Buttons1>
        </Frame12191>
      );
    }
    return (
      <DeleteButtonContainer>
        <Frame1322 onClick={showDeletePopuphandler}>
          <IconTrash src="/icons/trashcan.svg" alt="icon-trash" />
          <Delete>Delete</Delete>
        </Frame1322>
      </DeleteButtonContainer>
    );
  }

  return (
    <div className="create-a-assignment-tablet screen">
      <Frame1379>
        <HeaderSmall headerProps={taskHeaderProps} />
        <Frame1376>
          <Frame1315>
            <Breadcrumb text="Task" link="/#/tasks" />
            <Breadcrumb2 title={assignment.title} />
          </Frame1315>
          <GoBack2 caret={goBack21Props.caret} />
        </Frame1376>
        {titleAndSaveButtons(
          assignment,
          saveDraft,
          publish,
          showPublishPopuphandler
        )}
        <Frame1378 readOnly={assignment.status != 'DRAFT'}>
          <Frame1375>
            <Frame1374
              id="assignmentNameContainer"
              onClick={cleanformattingTextBox}
              onChange={handleTitleChange}
            >
              <TextInput
                placeholder="Type task title here"
                id="assignmentName"
                value={assignment.title}
              ></TextInput>
            </Frame1374>
            <Frame1299 id="classesContainer" onClick={cleanformattingDiv}>
                  <Frame12811>
                    <Classes>Classes</Classes>
                    {/* <Link to="/tooltip1">
                      <Help src={help1} alt="help" />
                    </Link> */}
                  </Frame12811>
                  <Frame1298>{checkboxes}</Frame1298>
                </Frame1299>
            <Frame1294>
              <Frame1372>
                <Questions>Questions</Questions>
              </Frame1372>
              <Frame1295>{questionFrames()}</Frame1295>
              <Buttons2 add={buttons21Props.add} onClickFn={addQuestion} />
            </Frame1294>
          </Frame1375>
          <Frame1377>
            <Frame1294>
              <AssignmentSettings>Task Settings</AssignmentSettings>
              <Frame1295>
                
                <Frame1299>
                  <Frame12811>
                    <Classes>Feedback Method</Classes>
                  </Frame12811>
                  {feedbacksMethodContainer}
                </Frame1299>
                <Frame1299 id="timeContainer" onClick={cleanformattingDiv}>
                  <Frame12811>
                    <Classes>Due at</Classes>
                  </Frame12811>
                  {dateSelectorFrame}
                </Frame1299>
              </Frame1295>
            </Frame1294>

            <Frame1372>
              <Frame12191>
                <Frame1372WithTop>
                  {saveButtons(
                    assignment,
                    saveDraft,
                    publish,
                    showPublishPopuphandler
                  )}
                </Frame1372WithTop>
              </Frame12191>
            </Frame1372>
          </Frame1377>
        </Frame1378>
        <GoBack2
          caret={goBack22Props.caret}
          className={goBack22Props.className}
        />
      </Frame1379>
      {/* <FooterSmall /> */}
    </div>
  );
}

const TitleContainer = styled.div`
  display: flex;
  width: 90%;
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
  ${IbmplexsansMediumElectricViolet20px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: right;
  letter-spacing: -0.5px;
  line-height: normal;
  cursor: pointer;
  &:hover {
    scale: 1.2;
    transition: 0.1s;
  }
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
  position: absolute;
  bottom: 0px;
  right: 0px;
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
  ${(props) => props.readOnly && 'pointer-events: none; opacity: 0.5;'}
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
  gap: 30px;
  position: relative;
  align-self: stretch;
  min-width: 300px;
  z-index: 10;
`;

const Frame1372WithTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  position: relative;
  align-self: stretch;
  top: 20px;
  min-width: 300px;
`;

const Title = styled.h1`
  ${IbmplexsansBoldShark36px}
  font-size: 36px;
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

const Frame1298 = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  align-self: stretch;
  flex-wrap: wrap;
  gap: 16px;
`;

export default CreateAAssignmentTablet;
