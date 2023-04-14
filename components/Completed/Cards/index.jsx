import React from "react";
import StatusBubbles from "../StatusBubbles";
import StatusBubbles2 from "../StatusBubbles2";
import Content from "../Content";
import styled from "styled-components";


function Cards(props) {
  const { statusBubbles1Props, statusBubbles2Props, statusBubbles2Props2, contentProps } = props;

  return (
    <Cards1>
      <Frame6>
        <StatusBubbles>{statusBubbles1Props.children}</StatusBubbles>
        <StatusBubbles>{statusBubbles2Props.children}</StatusBubbles>
        <StatusBubbles2>{statusBubbles2Props2.children}</StatusBubbles2>
      </Frame6>
      <Content iconClock={contentProps.iconClock} />
    </Cards1>
  );
}

const Cards1 = styled.article`
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

export default Cards;
