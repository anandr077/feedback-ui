import React from "react";
import styled from "styled-components";
import { IbmplexsansMediumHorsesNeck13px } from "../../styledMixins";

function StatusBubbles(props) {
  const { tag } = props;
  return (
    <StatusBubbles>
      <StatusBubblesText>{tag.name}</StatusBubblesText>
    </StatusBubbles>
  );
}

const StatusBubbles = styled.article`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 3px 8px;
  position: relative;
  background-color: var(--wheatfield);
  border-radius: 11.5px;
  border: 1px solid;
  border-color: var(--golden-sand);
`;

const StatusBubblesText = styled.div`
  ${IbmplexsansMediumHorsesNeck13px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default StatusBubbles;
