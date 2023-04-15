import React from "react";
import styled from "styled-components";
import Frame1297 from "../Frame1297";
import {
  IbmplexsansNormalElectricViolet14px,
  IbmplexsansNormalShark20px,
} from "../../styledMixins";
import Frame1291 from "../Frame1291";
import Buttons4 from "../Buttons4";
import Group1255 from "../Group1255";

export default function MCQQuestionFrame(props) {
  const {
    serialNumber,
    deleteQuestionFrameFn,
    questionDetails,
    UpdateQuestionFrame,
  } = props;
  const options = [1, 2, 3, 4];

  const optionFrame = options.map((index) => {
    return (
      <OptionsContainer>
        <OptionInputEditable
          id={"option_" + serialNumber + "_" + index}
          placeholder={"Option " + index}
        />
        <Group1255 />
      </OptionsContainer>
    );
  });

  return (
    <SmalllQuestionFrame>
      <Frame1295>
        <Frame1297
          number={serialNumber}
          UpdateQuestionFrame={UpdateQuestionFrame}
          defaultType="MCQ"
        />
        <DeleteButtonFrame>
          <DeleteButton onClick={() => deleteQuestionFrameFn(serialNumber - 1)}>
            Delete
          </DeleteButton>
        </DeleteButtonFrame>
        <Line141 src="/img/line-14@2x.png" />
      </Frame1295>
      <Frame12891>
        <InputQuestion>
          <Label>Question</Label>
          <QuestionFrame2>
            <QuestionInputEditable
              id={"question_" + serialNumber}
              placeholder="Type Your Question here"
              value={questionDetails?.question}
            />
          </QuestionFrame2>
          <Label>Options</Label>
          <OptionsQuestionFrame>{optionFrame}</OptionsQuestionFrame>
          <Buttons4 />
        </InputQuestion>
        <Frame1291
          questionDetails={questionDetails}
          serialNumber={serialNumber}
        />
      </Frame12891>
    </SmalllQuestionFrame>
  );
}

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 13px 20px;
  align-self: stretch;
`;
const OptionInputEditable = styled.input`
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  border: 1px solid;
  border-radius: 12px;
  padding: 13px 20px;
  background-color: var(--white);
  width: 100%;
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
const Line141 = styled.img`
  position: relative;
  align-self: stretch;
  height: 1px;
  object-fit: cover;
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

const OptionsQuestionFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

const DeleteButton = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const DeleteButtonFrame = styled.div`
  ${IbmplexsansNormalElectricViolet14px}
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  align-self: stretch;
  left: 1em;
  &.frame-1280-5.frame-1280-6 {
    opacity: 0;
  }

  &.frame-1280-5.frame-1280-7 {
    opacity: 0;
  }
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
