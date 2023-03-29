import React from "react";
import Frame64 from "../Frame64";
import Content4 from "../Content4";
import styled from "styled-components";

function Cards20(props) {
  const { className, frame64Props, content4Props } = props;

  return (
    <Cards className={`cards-31 ${className || ""}`}>
      <Frame64 statusBubbles2Props={frame64Props.statusBubbles2Props} />
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
  border-color: var(--corn);
  box-shadow: 0px 4px 16px #f4bf061a;

  &.cards-31.cards-32 {
    border-color: var(--electric-violet);
    box-shadow: 0px 4px 16px #7200e01a;
  }
`;

export default Cards20;
