import React from 'react';
import CheckboxGroup from '../CheckboxGroup';
import Frame1297 from '../Frame1297';
import DropdownMenu from '../DropdownMenu';
import { getFocusAreas, deleteFocusArea } from '../../service';
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
} from './style';

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
    handleMarkingCriteriaPreview,
    setAllFocusAreas,
  } = props;

  const selectedMarkingCriteriaIndex = allMarkingCriterias.findIndex((item) => {
    return item.title === questionDetails.markingCriteria?.title;
  });
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
      <Frame1295>
        <Frame1297
          number={serialNumber}
          UpdateQuestionFrame={UpdateQuestionFrame}
          defaultType={questionDetails.type}
        />
        <DeleteButtonFrame>
          <DeleteButton onClick={() => deleteQuestionFrameFn(serialNumber)}>
            Delete
          </DeleteButton>
        </DeleteButtonFrame>
        <Line141 src="/img/line-14@2x.png" />
      </Frame1295>
      <Frame12891>
        <InputQuestion id={'questionType_' + serialNumber} questionType="TEXT">
          <Label>Question</Label>
          <QuestionFrame2
            id={'question_textBox' + serialNumber}
            onClick={cleanformattingTextBox}
          >
            <QuestionInputEditable
              id={'question_' + serialNumber}
              value={questionDetails?.question}
              onChange={(e) => updateQuestion(serialNumber, e.target.value)}
              placeholder="Type question here (500 characters max)"
            />
          </QuestionFrame2>
        </InputQuestion>
        <FocusAreasFrame>
          <Label>Focus areas</Label>
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
          <Label>Marking Criteria</Label>
          <MarkingCriteriaFrame>
            {questionDetails.markingCriteria.title ? (
              <DropdownMenu
                fullWidth={true}
                menuItems={allMarkingCriterias}
                selectedIndex={selectedMarkingCriteriaIndex}
                onItemSelected={(item) => {
                  updateMarkingCriteria(serialNumber, item);
                }}
              ></DropdownMenu>
            ) : (
              <DropdownMenu
                fullWidth={true}
                menuItems={allMarkingCriterias}
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
              <img src="/icons/preview-eye.png" alt="eye" />
            </Preview>
          </MarkingCriteriaFrame>
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
        dropDownText="Select"
        addCreateNewButton={true}
        backgroundColor={'#25222A'}
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
