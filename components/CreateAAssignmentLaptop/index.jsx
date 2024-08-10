import React, { useEffect, useRef, useState } from 'react';
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
  StepNum,
  LeftStepNumber,
  TitleAndSubtitleSubContainer,
  LinkIcon,
  LinkText,
  LinkPartContainer,
} from './CreateAssignmentLaptopStyle';

import Buttons2 from '../Buttons2';
import Footer from '../Footer';
import GoBack2 from '../GoBack2';
import { isMobileView, isSmallScreen } from '../ReactiveRender';
import Buttons2 from '../Buttons2';
import Footer from '../Footer';
import GoBack2 from '../GoBack2';
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
    setSaveAsDraftPopup,
    setPendingLocation,
    isChanged,
  } = props;

  const smallScreenView = isSmallScreen();
  const mobileView = isMobileView();


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
        <TitleAndSubtitleContainer>
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
          {!smallScreenView && (
            <StepsPart>
              <StepsContainer>
                <StepContainer>
                  <StepNum
                    style={{
                      backgroundColor:
                        assignment.title === '' ? '#fff' : '#7200E0',
                      color: assignment.title === '' ? '#918b97' : '#fff',
                      border:
                        assignment.title === ''
                          ? '1.5px solid #918b97'
                          : '1.5px solid #7200E0',
                    }}
                  >
                    1
                  </StepNum>
                  <StepText
                    style={{
                      color: assignment.title === '' ? '#918b97' : '#7200E0',
                    }}
                  >
                    Name the task
                  </StepText>
                </StepContainer>
                <StepContainer>
                  <StepNum
                    style={{
                      backgroundColor:
                        assignment.classIds.length === 0 ? '#fff' : '#7200E0',
                      color:
                        assignment.classIds.length === 0 ? '#918b97' : '#fff',
                      border:
                        assignment.classIds.length === 0
                          ? '1.5px solid #918b97'
                          : '1.5px solid #7200E0',
                    }}
                  >
                    2
                  </StepNum>
                  <StepText
                    style={{
                      color:
                        assignment.classIds.length === 0
                          ? '#918b97'
                          : '#7200E0',
                    }}
                  >
                    Select a class
                  </StepText>
                </StepContainer>
                <StepContainer>
                  <StepNum
                    style={{
                      backgroundColor:
                        assignment.questions &&
                        assignment.questions.length > 0 &&
                        assignment.questions[0].question === ''
                          ? '#fff'
                          : '#7200E0',
                      color:
                        assignment.questions &&
                        assignment.questions.length > 0 &&
                        assignment.questions[0].question === ''
                          ? '#918b97'
                          : '#fff',
                      border:
                        assignment.questions &&
                        assignment.questions.length > 0 &&
                        assignment.questions[0].question === ''
                          ? '1.5px solid #918b97'
                          : '1.5px solid #7200E0',
                    }}
                  >
                    3
                  </StepNum>
                  <StepText
                    style={{
                      color:
                        assignment.questions &&
                        assignment.questions.length > 0 &&
                        assignment.questions[0].question === ''
                          ? '#918b97'
                          : '#7200E0',
                    }}
                  >
                    Set up the task
                  </StepText>
                </StepContainer>
                <StepContainer>
                  <StepNum
                    style={{
                      backgroundColor:
                        assignment.reviewedBy === 'NONE' ? '#fff' : '#7200E0',
                      color:
                        assignment.reviewedBy === 'NONE' ? '#918b97' : '#fff',
                      border:
                        assignment.reviewedBy === 'NONE'
                          ? '1.5px solid #918b97'
                          : '1.5px solid #7200E0',
                    }}
                  >
                    4
                  </StepNum>
                  <StepText
                    style={{
                      color:
                        assignment.reviewedBy === 'NONE'
                          ? '#918b97'
                          : '#7200E0',
                    }}
                  >
                    Select the feedback method
                  </StepText>
                </StepContainer>
                <StepContainer>
                  <StepNum
                    style={{
                      backgroundColor: !updateDueDateTick ? '#fff' : '#7200E0',
                      color: !updateDueDateTick ? '#918b97' : '#fff',
                      border: !updateDueDateTick
                        ? '1.5px solid #918b97'
                        : '1.5px solid #7200E0',
                    }}
                  >
                    5
                  </StepNum>
                  <StepText
                    style={{
                      color: !updateDueDateTick ? '#918b97' : '#7200E0',
                    }}
                  >
                    Select the due date
                  </StepText>
                </StepContainer>
              </StepsContainer>
            </StepsPart>
          )}
          <Frame1375>
            <TaskContainer>
              <TaskHeadingContainer>
                <LeftStepNumber>STEP 1</LeftStepNumber>
              </TaskHeadingContainer>
              <TaskNameContainer>
                <TaskName>
                  <TaskTitle>Name the task</TaskTitle>
                  <QuestionTooltip
                    text={'Create a title that accurately reflects the task'}
                    img={questionMark}
                  />
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
                <LeftStepNumber>STEP 2</LeftStepNumber>
              </TaskHeadingContainer>
              <TaskNameContainer>
                <TaskName>
                  <TaskTitle>Select a class</TaskTitle>
                  <QuestionTooltip
                    text={'Which classes are you setting this task for ?'}
                    img={questionMark}
                  />
                </TaskName>
                <Frame1299 id="classesContainer">
                  <Frame1298>{checkboxes}</Frame1298>
                </Frame1299>
              </TaskNameContainer>
            </TaskContainer>
            <TaskContainer>
              <TaskHeadingContainer>
                <LeftStepNumber>STEP 3</LeftStepNumber>
              </TaskHeadingContainer>
              <TaskNameContainer>
                <TaskName>
                  <TaskTitle>Set up the task</TaskTitle>
                  <QuestionTooltip
                    text={'Add questions and/or instructions for the task'}
                    img={questionMark}
                  />
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
                <LeftStepNumber>STEP 4</LeftStepNumber>
              </TaskHeadingContainer>
              <TaskNameContainer>
                <TitleAndSubtitleSubContainer>
                  <TaskName>
                    <TaskTitle>Select the feedback method</TaskTitle>
                    <QuestionTooltip
                      text={
                        'Would you like to personally mark this task, or would you prefer that students provide feedback to each other?'
                      }
                      img={questionMark}
                    />
                  </TaskName>
                  <HeadingLine>
                    Would you like to personally mark this task, or would you
                    prefer that students provide feedback to each other?
                  </HeadingLine>
                </TitleAndSubtitleSubContainer>

                <Frame1295>
                  <Frame1299 id="DnDContainer">
                    <Frame12981>{feedbacksMethodContainer}</Frame12981>
                  </Frame1299>
                </Frame1295>
              </TaskNameContainer>
            </TaskContainer>
            <TaskContainer>
              <TaskHeadingContainer>
                <LeftStepNumber>STEP 5</LeftStepNumber>
              </TaskHeadingContainer>
              <TaskNameContainer>
                <TaskName>
                  <TaskTitle>Select the due date</TaskTitle>
                  <QuestionTooltip
                    text={'Set a due date for the task'}
                    img={questionMark}
                  />
                </TaskName>

                <Frame1299 id="timeContainer">
                  <Frame12981>{dateSelectorFrame}</Frame12981>
                </Frame1299>
              </TaskNameContainer>
            </TaskContainer>
          </Frame1375>
        </Frame1378>
        <Frame1377>
          <Frame1372>
            {saveButtons(
              assignment,
              saveDraft,
              publish,
              showPublishPopuphandler
            )}
          </Frame1372>
        </Frame1377>
      </Frame1379>
    </MainContainer>
  );
}
export default CreateAAssignmentLaptop;
