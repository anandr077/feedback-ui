import React from "react";
import Frame65 from "../Frame65";
import Content4 from "../Content4";
import styled from "styled-components";

function Cards21(props) {
  const { className, frame65Props, content4Props } = props;

  return (
    <Cards className={`cards-33 ${className || ""}`}>
      <Frame65
        statusBubbles21Props={frame65Props.statusBubbles21Props}
        statusBubbles22Props={frame65Props.statusBubbles22Props}
      />
      <Content4
        clock={content4Props.clock}
        dueOn2April2023={content4Props.dueOn2April2023}
      />
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

  &.cards-33.cards-34 {
    border-color: var(--jelly-bean);
    box-shadow: 0px 4px 16px #d1372d1a;
  }

  &.cards-33.cards-35 {
    border-color: var(--jelly-bean);
    box-shadow: 0px 4px 16px #d1372d1a;
  }

  &.cards-33.cards-36 {
    border-color: var(--jelly-bean);
    box-shadow: 0px 4px 16px #d1372d1a;
  }

  &.cards-33.cards-37 {
    border-color: var(--atlantis);
    box-shadow: 0px 4px 16px #60d12e1a;
  }
`;

export default Cards21;
