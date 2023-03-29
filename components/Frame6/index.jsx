import React from "react";
import StatusBubbles from "../StatusBubbles";
import StatusBubbles2 from "../StatusBubbles2";
import StatusBubbles3 from "../StatusBubbles3";
import styled from "styled-components";


function Frame6(props) {
  const { tags } = props;
  const statusBubbles = tags.map((tag) => {
    return <StatusBubbles tag={tag} />
  });
  return (
    <Frame61>
      {statusBubbles}
    </Frame61>
  );
}

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

const Frame65 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  position: relative;
`;

export default Frame6;
