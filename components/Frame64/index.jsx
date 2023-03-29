import React from "react";
import StatusBubbles from "../StatusBubbles";
import StatusBubbles2 from "../StatusBubbles2";
import styled from "styled-components";


function Frame64(props) {
  const { statusBubbles2Props } = props;

  return (
    <Frame6>
      <StatusBubbles />
      <StatusBubbles2>{statusBubbles2Props.children}</StatusBubbles2>
    </Frame6>
  );
}

const Frame6 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  position: relative;
`;

const Frame61 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  position: relative;
`;

const Frame62 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  position: relative;
`;

const Frame63 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  position: relative;
`;

const Frame65 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  position: relative;
`;

export default Frame64;
