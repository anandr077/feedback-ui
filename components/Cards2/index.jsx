import React from "react";
import Frame62 from "../Frame62";
import Content from "../Content";
import styled from "styled-components";

function Cards2(props) {
  const { frame62Props, contentProps } = props;

  return (
    <Cards>
      <Frame62
        statusBubbles21Props={frame62Props.statusBubbles21Props}
        statusBubbles22Props={frame62Props.statusBubbles22Props}
      />
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

export default Cards2;
