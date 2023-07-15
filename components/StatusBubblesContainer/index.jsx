import React from "react";
import StatusBubbles from "../StatusBubbles";
import styled from "styled-components";

function StatusBubblesContainer(props) {
  const { tags } = props;
  console.log("###",tags);
  const statusBubbles = tags.map((tag) => {
    return <StatusBubbles tag={tag} />;
  });
  return (
    <StatusBubblesInternalContainer>
      {statusBubbles}
    </StatusBubblesInternalContainer>
  );
}

const StatusBubblesInternalContainer = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  position: relative;
`;

export default StatusBubblesContainer;
