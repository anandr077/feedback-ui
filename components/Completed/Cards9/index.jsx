import React from "react";
import Frame63 from "../Frame63";
import Content3 from "../Content3";
import styled from "styled-components";

function Cards9() {
  return (
    <Cards>
      <Frame63 />
      <Content3 />
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

export default Cards9;
