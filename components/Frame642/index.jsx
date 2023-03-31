import React from "react";
import StatusBubbles4 from "../StatusBubbles4";
import styled from "styled-components";

function Frame642(props) {
  const { statusBubbles4Props } = props;

  return (
    <Frame6>
      <StatusBubbles4 crown={statusBubbles4Props.crown} />
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

const Frame64 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  position: relative;
`;

export default Frame642;
