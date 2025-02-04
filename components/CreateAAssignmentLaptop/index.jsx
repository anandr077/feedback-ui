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
import RoundedBorderSubmitBtn from '../../components2/Buttons/RoundedBorderSubmitBtn';
import { isTaskNotSetUp, isReadOnly, isFeedbackMethodNotSelected, noClassSelected } from './rules';
import TopBannerBox from '../../components2/TopBannerBox';
import { isNullOrEmpty } from '../../utils/arrays';


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
    showUpdatePopuphandler,
    setSaveAsDraftPopup,
    setPendingLocation,
    isChanged,
    submissions
  } = props;

  const smallScreenView = isSmallScreen();
  const mobileView = isMobileView();
  const [showBanner, setShowBanner] = useState(false);
  const bannerTextForAcceptedAssignment = 'This task can not be updated as students have already started working it.'
  
  useEffect(() => {
    setShowBanner(!isNullOrEmpty(submissions));
  }, [submissions]);

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
              showPublishPopuphandler,
              showUpdatePopuphandler
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
    showPublishPopuphandler,
    showUpdatePopuphandler
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
        <RoundedBorderSubmitBtn
          text="Update"
          onClickFn={showUpdatePopuphandler}
        />
      </DeleteButtonContainer>
    );
  };

  return (
    <>
      {showBanner && (
        <TopBannerBox
          bannerText={bannerTextForAcceptedAssignment}
          showBannerButton={false}
          openBanner={showBanner}
          setOpenBanner={setShowBanner}
          showTooltip={bannerTextForAcceptedAssignment > 75}
        />
      )}
      <MainContainer notEditable={submissions.length > 0}>
        <Frame1379>
          {titleAndSaveButtons(assignment, saveDraft, publish)}
          <Frame1378 readOnly={isReadOnly(assignment)}>
            {!smallScreenView && (
              <StepsPart>
                <StepsContainer>
                  <StepContainer>
                    <StepNum
                      style={{
                        backgroundColor: isNullOrEmpty(assignment.title)
                          ? '#fff'
                          : '#7200E0',
                        color: isNullOrEmpty(assignment.title)
                          ? '#918b97'
                          : '#fff',
                        border: isNullOrEmpty(assignment.title)
                          ? '1.5px solid #918b97'
                          : '1.5px solid #7200E0',
                      }}
                    >
                      1
                    </StepNum>
                    <StepText
                      style={{
                        color: isNullOrEmpty(assignment.title)
                          ? '#918b97'
                          : '#7200E0',
                      }}
                    >
                      Name the task
                    </StepText>
                  </StepContainer>
                  <StepContainer>
                    <StepNum
                      style={{
                        backgroundColor: noClassSelected(assignment.classIds)
                          ? '#fff'
                          : '#7200E0',
                        color: noClassSelected(assignment.classIds)
                          ? '#918b97'
                          : '#fff',
                        border: noClassSelected(assignment.classIds)
                          ? '1.5px solid #918b97'
                          : '1.5px solid #7200E0',
                      }}
                    >
                      2
                    </StepNum>
                    <StepText
                      style={{
                        color: noClassSelected(assignment.classIds)
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
                        backgroundColor: isTaskNotSetUp(assignment.questions)
                          ? '#fff'
                          : '#7200E0',
                        color: isTaskNotSetUp(assignment.questions)
                          ? '#918b97'
                          : '#fff',
                        border: isTaskNotSetUp(assignment.questions)
                          ? '1.5px solid #918b97'
                          : '1.5px solid #7200E0',
                      }}
                    >
                      3
                    </StepNum>
                    <StepText
                      style={{
                        color: isTaskNotSetUp(assignment.questions)
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
                        backgroundColor: isFeedbackMethodNotSelected(
                          assignment.reviewedBy
                        )
                          ? '#fff'
                          : '#7200E0',
                        color: isFeedbackMethodNotSelected(
                          assignment.reviewedBy
                        )
                          ? '#918b97'
                          : '#fff',
                        border: isFeedbackMethodNotSelected(
                          assignment.reviewedBy
                        )
                          ? '1.5px solid #918b97'
                          : '1.5px solid #7200E0',
                      }}
                    >
                      4
                    </StepNum>
                    <StepText
                      style={{
                        color: isFeedbackMethodNotSelected(
                          assignment.reviewedBy
                        )
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
                        backgroundColor: !updateDueDateTick
                          ? '#fff'
                          : '#7200E0',
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
                      text={'Which classes are you setting this task for?'}
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
                          "Choose between teacher-led feedback (with optional AI-suggestions), peer-to-peer feedback (where students review each other's work) or instant feedback from JeddAI using a teacher-trained AI marking model."
                        }
                        img={questionMark}
                      />
                    </TaskName>
                    <HeadingLine>
                      Choose between teacher-led feedback (with optional
                      AI-suggestions), peer-to-peer feedback (where students
                      review each other's work) or instant feedback from JeddAI
                      using a teacher-trained AI marking model.
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
                showPublishPopuphandler,
                showUpdatePopuphandler
              )}
            </Frame1372>
          </Frame1377>
        </Frame1379>
      </MainContainer>
    </>
  );
}
export default CreateAAssignmentLaptop;
