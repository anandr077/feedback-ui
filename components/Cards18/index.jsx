import React from "react";
import Frame62 from "../Frame62";
import Content4 from "../Content4";
import styled from "styled-components";


function Cards18(props) {
  const { className, frame62Props, content4Props } = props;

  return (
    <Cards className={`cards-26 ${className || ""}`}>
      <Frame62
        statusBubbles21Props={frame62Props.statusBubbles21Props}
        statusBubbles22Props={frame62Props.statusBubbles22Props}
      />
      <Content4 clock={content4Props.clock} dueOn2April2023={content4Props.dueOn2April2023} />
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
  border-color: var(--corn);
  box-shadow: 0px 4px 16px #f4bf061a;

  &.cards-26.cards-27 {
    border-color: var(--electric-violet);
    box-shadow: 0px 4px 16px #7200e01a;
  }
`;

export default Cards18;
