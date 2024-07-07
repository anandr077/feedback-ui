import React from 'react';
import CheckboxGroup from '../CheckboxGroup';
import Frame1297 from '../Frame1297';
import DropdownMenu from '../DropdownMenu';
import { getFocusAreas, deleteFocusArea } from '../../service';
import questionMark from '../../static/img/question-mark.svg';
import Bincolor from '../../static/img/Bincolor.svg';
import {
  MarkingCriteriaSelectionContainer,
  FocusAreasFrame,
  Frame1321,
  Structure,
  Ellipse141,
  SmalllQuestionFrame,
  Line141,
  Frame12891,
  QuestionFrame2,
  ShowFocusArea,
  Frame1295,
  DeleteButtonFrame,
  DeleteButton,
  InputQuestion,
  Label,
  QuestionInputEditable,
  MarkingCriteriaFrame,
  Preview,
  TitleImage,
  QuestionMarkContainer,
  BinImage,
  MarkingCriteriaAndListFrame,
  MarkingCriteriaList,
} from './style';
import QuestionTooltip from '../../components2/QuestionTooltip';
import { useHistory } from 'react-router-dom';

export default function TheoryQuestionFrame(props) {
  const {
    serialNumber,
    deleteQuestionFrameFn,
    questionDetails,
    UpdateQuestionFrame,
    updateQuestion,
    cleanformattingTextBox,
    cleanformattingDiv,
    updateFocusAreas,
    createNewFocusArea,
    allFocusAreas,
    allMarkingCriterias,
    updateMarkingCriteria,
    updateCommentBank,
    handleMarkingCriteriaPreview,
    handleCommentBankPreview,
    setAllFocusAreas,
    allCommentBanks,
  } = props;
  const history = useHistory();

  const selectedMarkingCriteriaIndex = allMarkingCriterias?.findIndex(
    (item) => {
      return item.title === questionDetails.markingCriteria?.title;
    }
  );
  const selectedCommentBankIndex = allCommentBanks.findIndex((item) => {
    return item.id === questionDetails?.commentBankId;
  });

  const appendFunction = (markingCriterias) => {
    return markingCriterias.map((item) => {
      if (item.type === 'STRENGTHS_TARGETS' && !item.title.includes('(S&T)')) {
        item.title = item.title + ' (S&T)';
      }
      if (item.type === 'RUBRICS' && !item.title.includes('(R)')) {
        item.title = item.title + ' (R)';
      }
      return item;
    });
  };
  const handleDeleteFocusArea = (id) => {
    deleteFocusArea(id).then((res) => {
      getFocusAreas().then((focusAreas) => {
        setAllFocusAreas(focusAreas);
      });
    });
  };
  return (
    <SmalllQuestionFrame
      id={'questionContainer_' + serialNumber}
      onClick={cleanformattingDiv}
    >
      <Frame1297
        serialNumber={serialNumber}
        UpdateQuestionFrame={UpdateQuestionFrame}
        defaultType={questionDetails.type}
        deleteQuestionFrameFn={deleteQuestionFrameFn}
      />

      <Frame12891>
        <InputQuestion id={'questionType_' + serialNumber} questionType="TEXT">
          <Label>Task Description</Label>
          <QuestionFrame2
            id={'question_textBox' + serialNumber}
            onClick={cleanformattingTextBox}
          >
            <QuestionInputEditable
              id={'question_' + serialNumber}
              value={questionDetails?.question}
              onChange={(e) => updateQuestion(serialNumber, e.target.value)}
              placeholder="Enter question"
            />
          </QuestionFrame2>
        </InputQuestion>
        <FocusAreasFrame>
          <QuestionMarkContainer>
            <Label>Focus areas</Label>
            <QuestionTooltip
              text={
                "Select the focus areas the student's answer should have. You can add new focus areas using the +New button below"
              }
              img={questionMark}
            />
          </QuestionMarkContainer>
          {createFocusAreasFrame(
            serialNumber,
            updateFocusAreas,
            questionDetails.focusAreaIds,
            createNewFocusArea,
            allFocusAreas,
            handleDeleteFocusArea
          )}
        </FocusAreasFrame>

        <MarkingCriteriaSelectionContainer>
          <QuestionMarkContainer>
            <Label>Marking Template</Label>
            <QuestionTooltip
              text={
                'Select the marking template which will be used in the assessment of this task. New marking templates can be created in the account settings'
              }
              img={questionMark}
            />
          </QuestionMarkContainer>
          <MarkingCriteriaAndListFrame>
            <MarkingCriteriaFrame>
              {questionDetails?.markingCriteria?.title ? (
                <DropdownMenu
                  fullWidth={true}
                  menuItems={appendFunction(allMarkingCriterias)}
                  selectedIndex={selectedMarkingCriteriaIndex}
                  onItemSelected={(item) => {
                    updateMarkingCriteria(serialNumber, item);
                  }}
                  defaultSearch={true}
                ></DropdownMenu>
              ) : (
                <DropdownMenu
                  fullWidth={true}
                  menuItems={appendFunction(allMarkingCriterias)}
                  primaryText="Select Marking Criteria"
                  onItemSelected={(item) => {
                    updateMarkingCriteria(serialNumber, item);
                  }}
                ></DropdownMenu>
              )}
              <Preview
                onClick={() => {
                  handleMarkingCriteriaPreview(questionDetails.markingCriteria);
                }}
              >
                <img
                  src="/icons/preview-eye.png"
                  alt="eye"
                  style={{ width: '32px', height: '32px' }}
                />
              </Preview>
            </MarkingCriteriaFrame>
            <MarkingCriteriaList onClick={() => history.push('/settings')}>
              Go to marking templates
            </MarkingCriteriaList>
          </MarkingCriteriaAndListFrame>
        </MarkingCriteriaSelectionContainer>
        <MarkingCriteriaSelectionContainer>
          <QuestionMarkContainer>
            <Label>Comment Bank</Label>
            <QuestionTooltip
              text={
                'Select the commnet bank which will be used in the assessment of this task. New commnet bank can be created in the account settings'
              }
              img={questionMark}
            />
          </QuestionMarkContainer>
          <MarkingCriteriaAndListFrame>
            <MarkingCriteriaFrame>
              {questionDetails.commentBankId ? (
                <DropdownMenu
                  fullWidth={true}
                  menuItems={allCommentBanks}
                  selectedIndex={selectedCommentBankIndex}
                  onItemSelected={(item) => {
                    updateCommentBank(serialNumber, item);
                  }}
                  defaultSearch={true}
                ></DropdownMenu>
              ) : (
                <DropdownMenu
                  fullWidth={true}
                  menuItems={allCommentBanks}
                  primaryText="Select Comment Bank"
                  onItemSelected={(item) => {
                    updateCommentBank(serialNumber, item);
                  }}
                ></DropdownMenu>
              )}
              <Preview
                onClick={() => {
                  handleCommentBankPreview(questionDetails.commentBankId);
                }}
              >
                <img
                  src="/icons/preview-eye.png"
                  alt="eye"
                  style={{ width: '32px', height: '32px' }}
                />
              </Preview>
            </MarkingCriteriaFrame>
            <MarkingCriteriaList onClick={() => history.push('/commentbanks')}>
              Go to comment banks
            </MarkingCriteriaList>
          </MarkingCriteriaAndListFrame>
        </MarkingCriteriaSelectionContainer>
      </Frame12891>
    </SmalllQuestionFrame>
  );
}

function createFocusAreasFrame(
  serialNumber,
  updateFocusAreas,
  presentFocusAreas,
  createNewFocusArea,
  allFocusAreas,
  handleDeleteFocusArea
) {
  const focusAreaItems = allFocusAreas.map((focusArea) => {
    return {
      value: focusArea.id,
      label: focusArea.title,
      color: focusArea.color,
      category: 'FOCUS_AREAS',
    };
  });

  const menuItems = [
    {
      name: 'FOCUS_AREAS',
      title: 'Focus Areas',
      items: focusAreaItems,
    },
  ];
  return (
    <ShowFocusArea>
      <CheckboxGroup
        onChange={getSelectedFocusArea(serialNumber, updateFocusAreas)}
        data={menuItems}
        dropDownText="Add"
        addCreateNewButton={true}
        backgroundColor={'#7200E0'}
        textColor={'var(--white)'}
        openDialogForNewEvent={createNewFocusArea}
        previouslySelectedItems={presentFocusAreas?.map((value) => ({
          value,
          category: 'FOCUS_AREAS',
        }))}
        deleteHandler={handleDeleteFocusArea}
        trashOption={true}
      ></CheckboxGroup>
      {createFocusAreaTags(allFocusAreas, presentFocusAreas)}
    </ShowFocusArea>
  );
}

function createFocusAreaTags(allFocusAreas, presentFocusAreas) {
  return presentFocusAreas?.map((focusArea) => {
    const unitFocusArea = allFocusAreas.find((x) => x.id === focusArea);
    return (
      <Frame1321>
        <Ellipse141 backgroundColor={unitFocusArea.color}></Ellipse141>
        <Structure>{unitFocusArea.title}</Structure>
      </Frame1321>
    );
  });
}

const getSelectedFocusArea =
  (serialNUmber, updateFocusAreas) => (selectedFocusArea) => {
    updateFocusAreas(
      serialNUmber,
      selectedFocusArea.map((x) => x.value)
    );
  };
