import React from "react";
import Frame12972 from "../Frame12972";
import styled from "styled-components";

function QuestionFrame3(props) {
  const { frame12972Props } = props;

  return (
    <QuestionFrame>
      <Frame12972
        text6={frame12972Props.text6}
        frame1284={frame12972Props.frame1284}
        richTextComponentsProps={frame12972Props.richTextComponentsProps}
        frame12802Props={frame12972Props.frame12802Props}
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

export default QuestionFrame3;
