import React from 'react';
import Breadcrumb from '../Breadcrumb';
import Breadcrumb2 from '../Breadcrumb2';
import Buttons2 from '../Buttons2';
import GoBack2 from '../GoBack2';
import './CreateAAssignmentLaptop.css';
import {
  TitleContainer,
  DeleteButtonContainer,
  Frame1322,
  IconTrash,
  Delete,
  SLink,
  Frame1379,
  Frame1376,
  Frame1315,
  Frame1378,
  Frame1375,
  Frame1372,
  Title,
  Frame1374,
  TextInput,
  Frame1294,
  Questions,
  Frame1295,
  AssignmentSettings,
  Frame1296,
  Frame1377,
  Frame1299,
  Frame12811,
  Classes,
  Frame1298,
  Frame12981,
  Frame12191,
  Buttons1,
  Button,
  TitleAndLinkContainer,
  LinkContainer,
  TitleImage,
  Title,
  HeadingLine,
  TitleAndSubtitleContainer,
  TaskNameContainer,
  TaskHeadingContainer,
  TaskHeading,
  TaskContainer,
  TaskName,
  TaskTitle,
  StepsContainer,
  StepsPart,
  StepContainer,
  StepImag,
  StepText,
} from './CreateAssignmentLaptopStyle';
import {
  IbmplexsansBoldShark64px,
  IbmplexsansMediumElectricViolet20px,
  IbmplexsansMediumWhite16px,
  IbmplexsansNormalShark20px,
  IbmplexsansNormalStack20px,
  IbmplexsansSemiBoldShark20px,
  IbmplexsansSemiBoldShark24px,
  IbmplexsansNormalElectricViolet16px,
} from '../../styledMixins';
import Breadcrumb from '../Breadcrumb';
import Breadcrumb2 from '../Breadcrumb2';
import Buttons2 from '../Buttons2';
import Footer from '../Footer';
import GoBack2 from '../GoBack2';
import Header from '../Header';
import './CreateAAssignmentLaptop.css';
import LinkButton from '../../components2/LinkButton';
import arrowLeft from '../../static/img/arrowleft.svg';
import whiteArrowleft from '../../static/img/arrowleftwhite.svg';
import questionMark from '../../static/img/question-mark.svg';
import tick from '../../static/img/Ticklightcolor.svg';

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
    showDeletePopuphandler,
    showPublishPopuphandler,
  } = props;

  function titleAndSaveButtons(assignment, saveDraft, publish) {
    const title =
      assignment.status === 'DRAFT' ? (
        <Title>
          Create Task
          <TitleImage src={questionMark} />
        </Title>
      ) : (
        <></>
      );
    return (
      <TitleAndLinkContainer>
        <LinkContainer>
          <LinkButton
            link={`#/`}
            label="Go Back"
            arrowleft={arrowLeft}
            whiteArrowleft={whiteArrowleft}
          />
        </LinkContainer>
        <TitleAndSubtitleContainer
          style={{ borderBottom: '1px solid #d6d6d6', paddingBottom: '20px' }}
        >
          <TitleContainer>
            {title}
            {saveButtons(
              assignment,
              saveDraft,
              publish,
              showPublishPopuphandler
            )}
          </TitleContainer>
          <HeadingLine>
            Follow the steps below to create and assign a task for your classes
          </HeadingLine>
        </TitleAndSubtitleContainer>
      </TitleAndLinkContainer>
    );
  }
  const saveButtons = (
    assignment,
    saveDraft,
    publish,
    showPublishPopuphandler
  ) => {
    if (assignment.status === 'DRAFT') {
      return (
        <Frame12191>
          <Buttons1>
            <Button onClick={(e) => saveDraft(e)}>Save as draft</Button>
          </Buttons1>
          <Buttons1
            style={{
              backgroundColor: 'var(--light-mode-purple)',
              color: 'white',
            }}
          >
            <Button
              onClick={showPublishPopuphandler}
              style={{
                backgroundColor: 'var(--light-mode-purple)',
                color: 'white',
              }}
            >
              Publish
            </Button>
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
  };

  return (
    <div className="create-a-assignment-laptop screen">
      <Frame1379>
        {titleAndSaveButtons(assignment, saveDraft, publish)}
        <Frame1378 readOnly={assignment.status != 'DRAFT'}>
          <Frame1375>
            <TaskContainer>
              <TaskHeadingContainer>
                <TaskHeading>STEP 1</TaskHeading>
              </TaskHeadingContainer>
              <TaskNameContainer>
                <TaskName>
                  <TaskTitle>Name the task</TaskTitle>
                  <TitleImage src={questionMark} />
                </TaskName>
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
              </TaskNameContainer>
            </TaskContainer>
            <TaskContainer>
              <TaskHeadingContainer>
                <TaskHeading>STEP 2</TaskHeading>
              </TaskHeadingContainer>
              <TaskNameContainer>
                <TaskName>
                  <TaskTitle>Select a class</TaskTitle>
                  <TitleImage src={questionMark} />
                </TaskName>
                <Frame1299 id="classesContainer">
                  <Frame1298>{checkboxes}</Frame1298>
                </Frame1299>
              </TaskNameContainer>
            </TaskContainer>
            <TaskContainer>
              <TaskHeadingContainer>
                <TaskHeading>STEP 3</TaskHeading>
              </TaskHeadingContainer>
              <TaskNameContainer>
                <TaskName>
                  <TaskTitle>Set up the task</TaskTitle>
                  <TitleImage src={questionMark} />
                </TaskName>
                <Frame1294>
                  <Frame1295>{questionFrames()}</Frame1295>
                </Frame1294>
                <Frame1296>
                  <Buttons2
                    add={buttons21Props.add}
                    label="Add a new question"
                    onClickFn={addQuestion}
                  />
                </Frame1296>
              </TaskNameContainer>
            </TaskContainer>
            <TaskContainer>
              <TaskHeadingContainer>
                <TaskHeading>STEP 4</TaskHeading>
              </TaskHeadingContainer>
              <TaskNameContainer>
                <TitleAndSubtitleContainer>
                  <TaskName>
                    <TaskTitle>Select the feedback method</TaskTitle>
                    <TitleImage src={questionMark} />
                  </TaskName>
                  <HeadingLine>
                    Would you like to personally mark this task, or would you
                    prefer that students provide feedback to each other?
                  </HeadingLine>
                </TitleAndSubtitleContainer>

                <Frame1295>
                  <Frame1299 id="DnDContainer">
                    <Frame12981>{feedbacksMethodContainer}</Frame12981>
                  </Frame1299>
                </Frame1295>
              </TaskNameContainer>
            </TaskContainer>
            <TaskContainer>
              <TaskHeadingContainer>
                <TaskHeading>STEP 5</TaskHeading>
              </TaskHeadingContainer>
              <TaskNameContainer>
                <TaskName>
                  <TaskTitle>Select the due date</TaskTitle>
                  <TitleImage src={questionMark} />
                </TaskName>

                <Frame1299 id="timeContainer">
                  <Frame12981>{dateSelectorFrame}</Frame12981>
                </Frame1299>
              </TaskNameContainer>
            </TaskContainer>
          </Frame1375>
          <StepsPart>
            <TaskHeadingContainer>
              <TaskHeading>Steps</TaskHeading>
            </TaskHeadingContainer>
            <StepsContainer>
              <StepContainer>
                <StepImag src={tick} />
                <StepText>Name your task</StepText>
              </StepContainer>
              <StepContainer>
                <StepImag src={tick} />
                <StepText>Select a class</StepText>
              </StepContainer>
              <StepContainer>
                <StepImag src={tick} />
                <StepText>Set up the task</StepText>
              </StepContainer>
              <StepContainer>
                <StepImag src={tick} />
                <StepText>Select the feedback method</StepText>
              </StepContainer>
              <StepContainer>
                <StepImag src={tick} />
                <StepText>Select the due date</StepText>
              </StepContainer>
            </StepsContainer>
          </StepsPart>
        </Frame1378>
        <Frame1377>
          <Frame1372>
            <Frame1372>
              {saveButtons(
                assignment,
                saveDraft,
                publish,
                showPublishPopuphandler
              )}
            </Frame1372>
          </Frame1372>
        </Frame1377>
      </Frame1379>
    </div>
  );
}
export default CreateAAssignmentLaptop;
