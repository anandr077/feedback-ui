import React from "react";
import Frame63 from "../Frame63";
import Content3 from "../Content3";
import styled from "styled-components";


function Cards13(props) {
  const { className, frame63Props, content3Props } = props;

  return (
    <Cards className={`cards-13 ${className || ""}`}>
      <Frame63 statusBubbles2Props={frame63Props.statusBubbles2Props} />
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
  border-color: var(--corn);
  box-shadow: 0px 4px 16px #f4bf061a;

  &.cards-13.cards-14 {
    border-color: var(--electric-violet);
    box-shadow: 0px 4px 16px #7200e01a;
  }

  &.cards-13.cards-15 {
    border-color: var(--jelly-bean);
    box-shadow: 0px 4px 16px #d1372d1a;
  }
`;

export default Cards13;
