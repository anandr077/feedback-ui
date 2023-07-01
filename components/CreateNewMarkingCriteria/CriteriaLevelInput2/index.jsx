import React from "react";
import Frame12852 from "../Frame12852";
import Frame1286 from "../Frame1286";
import Frame1442 from "../Frame1442";
import styled from "styled-components";


function CriteriaLevelInput2() {
  return (
    <CriteriaLevelInput>
      <Frame12852 />
      <Frame1286 />
      <Frame1442 />
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

export default CriteriaLevelInput2;
