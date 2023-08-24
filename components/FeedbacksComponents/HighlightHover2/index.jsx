import React from 'react';
import styled from 'styled-components';
import './HighlightHover2.css';

function HighlightHover2() {
  return (
    <div className="container-center-horizontal">
      <div className="highlight-hover-2 screen">
        <OverlapGroup>
          <Rectangle546></Rectangle546>
          <Rectangle547></Rectangle547>
          <Rectangle548></Rectangle548>
        </OverlapGroup>
      </div>
    </div>
  );
}

const OverlapGroup = styled.div`
  width: 739px;
  height: 76px;
  position: relative;
`;

const Rectangle546 = styled.div`
  position: absolute;
  width: 392px;
  height: 26px;
  top: 0;
  left: 347px;
  border: 2px solid;
  border-color: var(--light-mode-purple);
`;

const Rectangle547 = styled.div`
  position: absolute;
  width: 739px;
  height: 26px;
  top: 25px;
  left: 0;
  border: 2px solid;
  border-color: var(--light-mode-purple);
`;

const Rectangle548 = styled.div`
  position: absolute;
  width: 673px;
  height: 26px;
  top: 50px;
  left: 0;
  border: 2px solid;
  border-color: var(--light-mode-purple);
`;

export default HighlightHover2;
