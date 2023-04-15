import React from "react";
import Frame62 from "../Frame62";
import Content2 from "../Content2";
import styled from "styled-components";

function Cards6(props) {
  const { task } = props;

  return (
    <Cards>
      <Frame62 statusBubblesProps={frame62Props.statusBubblesProps} />
      <Content2 />
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

export default Cards6;
