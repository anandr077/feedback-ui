import React from 'react';
import Frame12853 from '../Frame12853';
import Frame1442 from '../Frame1442';
import styled from 'styled-components';

function CriteriaLevelInput5(props) {
  const { frame128531Props, frame128532Props } = props;

  return (
    <CriteriaLevelInput>
      <Frame12853>{frame128531Props.children}</Frame12853>
      <Frame12853>{frame128532Props.children}</Frame12853>
      <Frame1442 />
    </CriteriaLevelInput>
  );
}

const CriteriaLevelInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;
  position: relative;
  align-self: stretch;
`;

export default CriteriaLevelInput5;
