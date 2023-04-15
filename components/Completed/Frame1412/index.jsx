import React from "react";
import Frame1308 from "../Frame1308";
import Cards10 from "../Cards10";
import Cards11 from "../Cards11";
import styled from "styled-components";

function Frame1412(props) {
  const { frame1308Props, cards101Props, cards102Props } = props;

  return (
    <Frame14121>
      <Frame1308>{frame1308Props.children}</Frame1308>
      <Frame1314>
        <Cards10 frame62Props={cards101Props.frame62Props} />
        <Cards10 frame62Props={cards102Props.frame62Props} />
        <Cards11 />
      </Frame1314>
    </Frame14121>
  );
}

const Frame14121 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 40px;
  position: relative;
`;

const Frame1314 = styled.div`
  display: flex;
  flex-direction: column;
  width: 704px;
  align-items: flex-start;
  gap: 20px;
  position: relative;
`;

const Frame14122 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 40px;
  position: relative;
`;

const Frame13141 = styled.div`
  display: flex;
  flex-direction: column;
  width: 704px;
  align-items: flex-start;
  gap: 20px;
  position: relative;
`;

export default Frame1412;
