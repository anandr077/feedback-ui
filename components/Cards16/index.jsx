import React from "react";
import Frame65 from "../Frame65";
import Content3 from "../Content3";
import styled from "styled-components";


function Cards16(props) {
  const { className, frame65Props, content3Props } = props;

  return (
    <Cards className={`cards-20 ${className || ""}`}>
      <Frame65
        statusBubbles21Props={frame65Props.statusBubbles21Props}
        statusBubbles22Props={frame65Props.statusBubbles22Props}
      />
      <Content3 clock={content3Props.clock} dueOn2April2023={content3Props.dueOn2April2023} />
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

  &.cards-20.cards-21 {
    border-color: var(--jelly-bean);
    box-shadow: 0px 4px 16px #d1372d1a;
  }

  &.cards-20.cards-22 {
    border-color: var(--jelly-bean);
    box-shadow: 0px 4px 16px #d1372d1a;
  }

  &.cards-20.cards-23 {
    border-color: var(--jelly-bean);
    box-shadow: 0px 4px 16px #d1372d1a;
  }

  &.cards-20.cards-24 {
    border-color: var(--atlantis);
    box-shadow: 0px 4px 16px #60d12e1a;
  }
`;

export default Cards16;
