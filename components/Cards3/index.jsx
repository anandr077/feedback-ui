import React from "react";
import Frame63 from "../Frame63";
import Content from "../Content";
import styled from "styled-components";

function Cards3(props) {
  const { frame63Props, contentProps } = props;

  return (
    <Cards>
      <Frame63 statusBubbles2Props={frame63Props.statusBubbles2Props} />
      <Content dueOn2April2023={contentProps.dueOn2April2023} />
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
`;

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
  border-color: var(--corn);
  box-shadow: 0px 4px 16px #f4bf061a;
`;

export default Cards3;
