import React from "react";
import StatusBubbles2 from "../StatusBubbles2";
import styled from "styled-components";


function Frame62(props) {
  const { statusBubbles21Props, statusBubbles22Props } = props;

  return (
    <Frame6>
      <StatusBubbles2>{statusBubbles21Props.children}</StatusBubbles2>
      <StatusBubbles2>{statusBubbles22Props.children}</StatusBubbles2>
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

const Frame63 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  position: relative;
`;

const Frame64 = styled.div`
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

export default Frame62;
