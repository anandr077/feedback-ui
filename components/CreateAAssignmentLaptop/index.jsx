import React from 'react';
import Breadcrumb from '../Breadcrumb';
import Breadcrumb2 from '../Breadcrumb2';
import Buttons2 from '../Buttons2';
import GoBack2 from '../GoBack2';
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
  MainContainer,
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
import LinkButton from '../../components2/LinkButton';
import arrowLeft from '../../static/img/arrowleft.svg';
import whiteArrowleft from '../../static/img/arrowleftwhite.svg';
import questionMark from '../../static/img/question-mark.svg';
import tick from '../../static/img/Ticklightcolor.svg';
import tickColor from '../../static/img/tickColor.svg';
import { isMobileView, isSmallScreen } from '../ReactiveRender';
import Breadcrumb from '../Breadcrumb';
import Breadcrumb2 from '../Breadcrumb2';
import Buttons2 from '../Buttons2';
import Footer from '../Footer';
import GoBack2 from '../GoBack2';
import Header from '../Header';
import QuestionTooltip from '../../components2/QuestionTooltip';
import questionMark from '../../static/img/question-mark.svg';

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
    updateDueDateTick,
    buttons21Props,
    goBack22Props,
    showDeletePopuphandler,
    showPublishPopuphandler,
  } = props;

  const smallScreenView = isSmallScreen();
  const mobileView = isMobileView();
  console.log('first assignment', assignment);

  function titleAndSaveButtons(assignment, saveDraft, publish) {
    const title =
      assignment.status === 'DRAFT' ? (
        <TaskHeading>
          <Title>Create Task</Title>
          <QuestionTooltip
            img={questionMark}
            text={
              'Follow the steps provided to design the perfect task for your classes'
            }
          />
        </TaskHeading>
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
          <HeadingLine style={{ display: mobileView ? 'none' : 'flex' }}>
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
    <MainContainer>
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
                    placeholder="Name of task"
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
              </TaskNameContainer>
              <Frame1296>
                <Buttons2
                  add={buttons21Props.add}
                  label="Add a new question"
                  onClickFn={addQuestion}
                />
              </Frame1296>
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
          {!smallScreenView && (
            <StepsPart>
              <TaskHeadingContainer>
                <TaskHeading>Steps</TaskHeading>
              </TaskHeadingContainer>
              <StepsContainer>
                <StepContainer>
                  <StepImag src={assignment.title === '' ? tick : tickColor} />
                  <StepText
                    style={{ color: assignment.title != '' && '#7200E0' }}
                  >
                    Name your task
                  </StepText>
                </StepContainer>
                <StepContainer>
                  <StepImag
                    src={assignment.classIds.length === 0 ? tick : tickColor}
                  />
                  <StepText
                    style={{
                      color: assignment.classIds.length != 0 && '#7200E0',
                    }}
                  >
                    Select a class
                  </StepText>
                </StepContainer>
                <StepContainer>
                  <StepImag
                    src={
                      assignment.questions &&
                      assignment.questions.length > 0 &&
                      assignment.questions[0].question !== ''
                        ? tickColor
                        : tick
                    }
                  />
                  <StepText
                    style={{
                      color:
                        assignment.questions &&
                        assignment.questions.length > 0 &&
                        assignment.questions[0].question !== '' &&
                        '#7200E0',
                    }}
                  >
                    Set up the task
                  </StepText>
                </StepContainer>
                <StepContainer>
                  <StepImag
                    src={assignment.reviewedBy === 'NONE' ? tick : tickColor}
                  />
                  <StepText
                    style={{
                      color: assignment.reviewedBy !== 'NONE' && '#7200E0',
                    }}
                  >
                    Select the feedback method
                  </StepText>
                </StepContainer>
                <StepContainer>
                  <StepImag src={updateDueDateTick ? tickColor : tick} />
                  <StepText style={{ color: updateDueDateTick && '#7200E0' }}>
                    Select the due date
                  </StepText>
                </StepContainer>
              </StepsContainer>
            </StepsPart>
          )}
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
    </MainContainer>
  );
}
export default CreateAAssignmentLaptop;
