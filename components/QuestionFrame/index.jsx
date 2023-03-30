import React from "react";
import Frame1297 from "../Frame1297";
import styled from "styled-components";

function QuestionFrame(props) {
  const { frame1297Props } = props;

  return (
    <QuestionFrame1>
      <Frame1289>
        <Frame1297
          text1={frame1297Props.text1}
          richTextComponentsProps={frame1297Props.richTextComponentsProps}
        />
      </Frame1289>
    </QuestionFrame1>
  );
}

const QuestionFrame1 = styled.div`
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

const Frame1289 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

export default QuestionFrame;
