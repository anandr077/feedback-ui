import React from "react";
import styled from "styled-components";
import Frame12973 from "../Frame12973";
import Frame1291 from "../Frame1291";
import Frame1297 from "../Frame1297";
import {
  IbmplexsansNormalElectricViolet14px,
  IbmplexsansNormalShark20px,
  IbmplexsansNormalShark16px,
} from "../../styledMixins";
import CheckboxGroup from "../CheckboxGroup";

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
  } = props;
  return (
    <SmalllQuestionFrame
      id={"questionContainer_" + serialNumber}
      onClick={cleanformattingDiv}
    >
      <Frame1295>
        <Frame1297
          number={serialNumber}
          UpdateQuestionFrame={UpdateQuestionFrame}
          defaultType="TEXT"
        />
        <DeleteButtonFrame>
          <DeleteButton onClick={() => deleteQuestionFrameFn(serialNumber)}>
            Delete
          </DeleteButton>
        </DeleteButtonFrame>
        <Line141 src="/img/line-14@2x.png" />
      </Frame1295>
      <Frame12891>
        <InputQuestion id={"questionType_" + serialNumber} questionType="TEXT">
          <Label>Question</Label>
          <QuestionFrame2
            id={"question_textBox" + serialNumber}
            onClick={cleanformattingTextBox}
          >
            <QuestionInputEditable
              id={"question_" + serialNumber}
              value={questionDetails?.question}
              onChange={(e) => updateQuestion(serialNumber, e.target.value)}
              placeholder="Type question here"
            />
          </QuestionFrame2>
        </InputQuestion>
        {createFocusAreasFrame(
          serialNumber,
          updateFocusAreas,
          questionDetails.focusAreas,
          createNewFocusArea,
          allFocusAreas
        )}
        {/* <Frame1291
          questionDetails={questionDetails}
          serialNumber={serialNumber}
          cleanformattingTextBox={cleanformattingTextBox}
        /> */}
      </Frame12891>
    </SmalllQuestionFrame>
  );
}

const Frame1321 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 4px;
  padding: 8px 10px;
  position: relative;
  background-color: var(--gallery);
  border-radius: 24px;
  border: 1px solid;
  border-color: var(--mercury);
`;

const Structure = styled.div`
  ${IbmplexsansNormalShark16px}
  position: relative;
  width: fit-content;
  font-family: var(--font-family-ibm_plex_sans);
  white-space: nowrap;
`;

const Ellipse141 = styled.div`
  position: relative;
  min-width: 12px;
  height: 12px;
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

const QuestionInputEditable = styled.input`
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
      category: "FOCUS_AREAS",
    };
  });

  const menuItems = [
    {
      name: "FOCUS_AREAS",
      title: "Focus Areas",
      items: focusAreaItems,
    },
  ];
  return (
    <QuestionFrame2>
      <CheckboxGroup
        onChange={getSelectedFocusArea(serialNumber, updateFocusAreas)}
        data={menuItems}
        dropDownText="+ Add"
        addCreateNewButton={true}
        backgroundColor={"#25222A"}
        textColor={"var(--white)"}
        openDialogForNewEvent={createNewFocusArea}
      ></CheckboxGroup>
      {createFocusAreaTags(allFocusAreas, presentFocusAreas)}
    </QuestionFrame2>
  );
}

function createFocusAreaTags(allFocusAreas, presentFocusAreas) {
  return presentFocusAreas.map((focusArea) => {
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
