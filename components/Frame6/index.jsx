import React from "react";
import StatusBubbles from "../StatusBubbles";
import styled from "styled-components";

function Frame6(props) {
  const { tags } = props;
  const statusBubbles = tags.map((tag) => {
    return <StatusBubbles tag={tag} />;
  });
  return <StatusBubblesContainer>{statusBubbles}</StatusBubblesContainer>;
}

const StatusBubblesContainer = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  position: relative;
`;

export default Frame6;
