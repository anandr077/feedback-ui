import React from "react";
import Frame12973 from "../Frame12973";
import styled from "styled-components";

function QuestionFrame4(props) {
  const { frame12973Props } = props;

  return (
    <QuestionFrame>
      <Frame12973
        text9={frame12973Props.text9}
        frame1284={frame12973Props.frame1284}
        richTextComponentsProps={frame12973Props.richTextComponentsProps}
        frame12803Props={frame12973Props.frame12803Props}
      />
    </QuestionFrame>
  );
}

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

export default QuestionFrame4;
