import React from "react";
import Frame13123 from "../Frame13123";
import styled from "styled-components";

function Frame13135(props) {
  const { title } = props;

  return (
    <Frame1313>
      <Frame1312>
        <Frame13123 title={title} arrowdown2="/img/arrowdown2-1@2x.png" />
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

export default Frame13135;
