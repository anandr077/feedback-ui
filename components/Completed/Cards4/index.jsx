import React from "react";
import StatusBubbles6 from "../StatusBubbles6";
import StatusBubbles3 from "../StatusBubbles3";
import StatusBubbles7 from "../StatusBubbles7";
import Content from "../Content";
import styled from "styled-components";

function Cards4(props) {
  const { statusBubbles7Props, contentProps } = props;

  return (
    <Cards>
      <Frame6>
        <StatusBubbles6 />
        <StatusBubbles3 />
        <StatusBubbles7>{statusBubbles7Props.children}</StatusBubbles7>
      </Frame6>
      <Content iconClock={contentProps.iconClock} />
    </Cards>
  );
}

const Cards = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame6 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  position: relative;
`;

export default Cards4;
