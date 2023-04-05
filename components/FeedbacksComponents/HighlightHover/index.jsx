import React from "react";
import styled from "styled-components";
import "./HighlightHover.css";

function HighlightHover() {
  return (
    <div className="container-center-horizontal">
      <div className="highlight-hover screen">
        <OverlapGroup>
          <Rectangle546></Rectangle546>
          <Rectangle547></Rectangle547>
        </OverlapGroup>
      </div>
    </div>
  );
}

const OverlapGroup = styled.div`
  width: 739px;
  height: 51px;
  position: relative;
`;

const Rectangle546 = styled.div`
  position: absolute;
  width: 500px;
  height: 26px;
  top: 0;
  left: 239px;
  border: 2px solid;
  border-color: var(--light-mode-purple);
`;

const Rectangle547 = styled.div`
  position: absolute;
  width: 444px;
  height: 26px;
  top: 25px;
  left: 0;
  border: 2px solid;
  border-color: var(--light-mode-purple);
`;

export default HighlightHover;
