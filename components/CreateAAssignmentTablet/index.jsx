import React from 'react';
import Breadcrumb from '../Breadcrumb';
import Breadcrumb2 from '../Breadcrumb2';
import GoBack2 from '../GoBack2';
import Buttons2 from '../Buttons2';
import './CreateAAssignmentTablet.css';
// import FooterSmall from '../FooterSmall';
import HeaderSmall from '../HeaderSmall';
import { taskHeaderProps } from '../../utils/headerProps.js';
import {
  TitleContainer,
  DeleteButtonContainer,
  Frame1322,
  IconTrash,
  Delete,
  SLink,
  TextInput,
  Buttons1,
  Button,
  Frame12191,
  Frame1379,
  Frame1376,
  Frame1315,
  Frame1378,
  Frame1375,
  Frame1372,
  Frame1372WithTop,
  Title,
  Frame1374,
  Frame1294,
  Questions,
  Frame1295,
  AssignmentSettings,
  Frame1377,
  Frame1299,
  Frame12811,
  Classes,
  Frame1298,
} from './CreateAssignmentTabletStyle';

function CreateAAssignmentTablet(props) {
  const {
    assignment,
    addQuestion,
    handleTitleChange,
    questionFrames,
    saveDraft,
    publish,
    checkboxes,
    feedbacksMethodContainer,
    dateSelectorFrame,
    cleanformattingTextBox,
    cleanformattingDiv,
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
export default CreateAAssignmentTablet;
