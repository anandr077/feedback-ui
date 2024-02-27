import React from 'react';
import { taskHeaderProps } from '../../utils/headerProps.js';
import Breadcrumb from '../Breadcrumb';
import Breadcrumb2 from '../Breadcrumb2';
import Buttons2 from '../Buttons2';
import GoBack from '../GoBack';
import './CreateAAssignmentMobile.css';
import questionMark from '../../static/img/question-mark.svg';
import {
  TitleContainer,
  DeleteButtonContainer,
  Frame1322,
  IconTrash,
  Delete,
  SLink,
  Frame12191,
  TextInput,
  Buttons1,
  Button,
  Frame1379,
  Frame1376,
  Frame1315,
  Frame1378,
  Frame1375,
  Frame1372,
  TaskHeading,
  Title,
  Frame1374,
  Frame1294,
  Frame1293,
  Questions,
  Frame1295,
  Frame1296,
  Frame1377,
  Frame1299,
  Frame12811,
  Classes,
  Frame1298,
  Frame1300,
  Frame1373,
} from './CreateAssignmentMobileStyle.js';
import QuestionTooltip from '../../components2/QuestionTooltip/index.jsx';

function CreateAAssignmentMobile(props) {
  const {
    assignment,
    handleTitleChange,
    addQuestion,
    questionFrames,
    saveDraft,
    publish,
    checkboxes,
    cleanformattingDiv,
    cleanformattingTextBox,
    feedbacksMethodContainer,
    dateSelectorFrame,
    assignmentSettings,
    feedbackMethod,
    buttons22Props,
    goBackProps,
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
      assignment.status === 'DRAFT' ? (
        <TaskHeading>
          <Title>Create Task</Title>
          <QuestionTooltip 
             img={questionMark}
             text={'Follow the steps provided to design the perfect task for your classes'}
          />
        </TaskHeading>
      ) : <></>;

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
    <div className="create-a-assignment-mobile screen">
      <Frame1379>
        <Frame1376>
          <Frame1315>
            <Breadcrumb text="Task" link="/#/tasks" />
            <Breadcrumb2 title={assignment.title} />
          </Frame1315>
          <GoBack />
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
              <Frame1293>
                <Questions>Questions</Questions>
              </Frame1293>
              <Frame1295>{questionFrames()}</Frame1295>
              <Frame1296>
                <Buttons2 add={buttons22Props.add} onClickFn={addQuestion} />
              </Frame1296>
            </Frame1294>
          </Frame1375>
          <Frame1377>
            <Frame1294>
              <Questions>{assignmentSettings}</Questions>
              <Frame1295>
                <Frame1300 id="DnDContainer" onClick={cleanformattingDiv}>
                  <Frame12811>
                    <Classes>{feedbackMethod}</Classes>
                  </Frame12811>
                  {feedbacksMethodContainer}
                </Frame1300>
                <Frame1300 id="timeContainer" onClick={cleanformattingDiv}>
                  <Frame12811>
                    <Classes>Due at</Classes>
                  </Frame12811>
                  {dateSelectorFrame}
                </Frame1300>
              </Frame1295>
            </Frame1294>
            <Frame1373>
              <Frame12191>
                <Frame1372>
                  {saveButtons(
                    assignment,
                    saveDraft,
                    publish,
                    showPublishPopuphandler
                  )}
                </Frame1372>
              </Frame12191>
            </Frame1373>
          </Frame1377>
        </Frame1378>
        <GoBack className={goBackProps.className} />
      </Frame1379>
    </div>
  );
}
export default CreateAAssignmentMobile;
