import React from 'react';
import styled from 'styled-components';
import {
  IbmplexsansNormalElectricViolet14px,
  IbmplexsansNormalShark16px,
  IbmplexsansNormalShark20px,
} from '../../styledMixins';
import CheckboxGroup from '../CheckboxGroup';
import Frame1297 from '../Frame1297';
import ImageDropdownMenu from '../ImageDropdownMenu';

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
  } = props;

  const selectedMarkingCriteriaIndex = allMarkingCriterias.findIndex((item) => {
    return item.title === questionDetails.markingCriteria?.title;
  });
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
            allFocusAreas
          )}
        </FocusAreasFrame>

        {/* <Frame1291
          questionDetails={questionDetails}
          serialNumber={serialNumber}
          cleanformattingTextBox={cleanformattingTextBox}
        /> */}

        <MarkingCriteriaSelectionContainer>
          <Label>Marking Criteria</Label>
          <MarkingCriteriaFrame>
            {questionDetails.markingCriteria.title ? (
              <ImageDropdownMenu
                fullWidth={true}
                menuItems={allMarkingCriterias}
                selectedIndex={selectedMarkingCriteriaIndex}
                onItemSelected={(item) => {
                  updateMarkingCriteria(serialNumber, item);
                }}
              ></ImageDropdownMenu>
            ) : (
              <ImageDropdownMenu
                fullWidth={true}
                menuItems={allMarkingCriterias}
                primaryText="Select Marking Criteria"
                onItemSelected={(item) => {
                  updateMarkingCriteria(serialNumber, item);
                }}
              ></ImageDropdownMenu>
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

const MarkingCriteriaSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 16px;
  width: 100%;
  gap: 14px;
`;

const FocusAreasFrame = styled.div`
  font-weight: 400;
  line-height: 26px;
  font-family: var(--font-family-ibm_plex_sans);
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
`;

const Frame1321 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 4px;
  padding: 8px 10px;
  position: relative;
  background-color: #efeef1;
  border-radius: 24px;
  border: 1px solid #e6e6e6;
  height: 36px;
  box-sizing: border-box;
  margin: 8px;
`;

const Structure = styled.div`
  ${IbmplexsansNormalShark16px}
  position: relative;
  width: fit-content;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  font-family: var(--font-family-ibm_plex_sans);
  white-space: nowrap;
`;

const Ellipse141 = styled.div`
  position: relative;
  min-width: 18px;
  height: 18px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
`;

const Frame1323 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 4px;
  padding: 8px;
  position: relative;
  background-color: var(--dark-purple);
  border-radius: 24px;
`;

const Add = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;
const SmalllQuestionFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Line141 = styled.img`
  position: relative;
  align-self: stretch;
  height: 1px;
  object-fit: cover;
`;

const Frame12891 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 0px 16px;
  position: relative;
  align-self: stretch;
`;

const QuestionFrame2 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
`;

const ShowFocusArea = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
  flex-wrap: wrap;
  min-height: 56px;
`;

const QuestionFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame1295 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const DeleteButtonFrame = styled.div`
  ${IbmplexsansNormalElectricViolet14px}
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  align-self: stretch;
  //left: 1em;
  padding: 0px 12px 0px 12px;

  &.frame-1280-5.frame-1280-6 {
    opacity: 0;
  }

  &.frame-1280-5.frame-1280-7 {
    opacity: 0;
  }
`;

const DeleteButton = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const Line14 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 960px;
  height: 1px;
  object-fit: cover;
`;

const Frame1289 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;
const InputQuestion = styled.div`
  ${IbmplexsansNormalShark20px}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  position: relative;
  align-self: stretch;
`;

const Label = styled.div`
  ${IbmplexsansNormalShark20px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const QuestionFrame1 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
`;
const QuestionInput = styled.div`
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const QuestionInputEditable = styled.textarea`
  ${IbmplexsansNormalShark20px}
  position: relative;
  width: 100%;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
`;

const MarkingCriteriaFrame = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Preview = styled.div`
  background: #7200e0;
  padding: 8px;
  border-radius: 12px;
  cursor: pointer;
`;

function createFocusAreasFrame(
  serialNumber,
  updateFocusAreas,
  presentFocusAreas,
  createNewFocusArea,
  allFocusAreas
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
      ></CheckboxGroup>
      {createFocusAreaTags(allFocusAreas, presentFocusAreas)}
    </ShowFocusArea>
  );
}

function createFocusAreaTags(allFocusAreas, presentFocusAreas) {
  return presentFocusAreas?.map((focusArea) => {
    console.log('presentFocusAreas' + JSON.stringify(presentFocusAreas));
    console.log('allFocusAreas' + JSON.stringify(allFocusAreas));
    console.log('focusArea' + JSON.stringify(focusArea));
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
