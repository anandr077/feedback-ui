import React from "react";
import Frame13124 from "../Frame13124";
import styled from "styled-components";


function Frame13137(props) {
  const { frame13124Props } = props;

  return (
    <Frame1313>
      <Frame1312>
        <Frame13124 boyleJonny={frame13124Props.boyleJonny} arrowdown2={frame13124Props.arrowdown2} />
      </Frame1312>
    </Frame1313>
  );
}

const Frame1313 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame1312 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

export default Frame13137;
