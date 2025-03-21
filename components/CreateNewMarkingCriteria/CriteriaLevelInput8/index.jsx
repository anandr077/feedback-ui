import React from 'react';
import Frame12852 from '../Frame12852';
import Frame12862 from '../Frame12862';
import styled from 'styled-components';

function CriteriaLevelInput8() {
  return (
    <CriteriaLevelInput>
      <Frame12852 />
      <Frame12862 />
      <Frame1442></Frame1442>
    </CriteriaLevelInput>
  );
}

const CriteriaLevelInput = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  align-self: stretch;
`;

const Frame1442 = styled.div`
  position: relative;
  min-width: 79px;
  height: 21px;
`;

export default CriteriaLevelInput8;
