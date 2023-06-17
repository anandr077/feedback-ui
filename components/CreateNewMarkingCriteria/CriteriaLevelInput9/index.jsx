import React from "react";
import Frame12852 from "../Frame12852";
import Frame12863 from "../Frame12863";
import Frame1442 from "../Frame1442";
import styled from "styled-components";


function CriteriaLevelInput9() {
  return (
    <CriteriaLevelInput>
      <Frame12852 />
      <Frame12863 />
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

export default CriteriaLevelInput9;
