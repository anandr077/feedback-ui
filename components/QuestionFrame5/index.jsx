import React from 'react';
import Frame12974 from '../Frame12974';
import styled from 'styled-components';

function QuestionFrame5(props) {
  const { frame12974Props } = props;

  return (
    <QuestionFrame>
      <Frame12974
        text12={frame12974Props.text12}
        frame1284={frame12974Props.frame1284}
        richTextComponentsProps={frame12974Props.richTextComponentsProps}
        frame12804Props={frame12974Props.frame12804Props}
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

export default QuestionFrame5;
