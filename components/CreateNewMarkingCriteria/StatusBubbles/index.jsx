import React from "react";
import styled from "styled-components";
import { IbmplexsansMediumWhite16px } from "../../../styledMixins";


function StatusBubbles(props) {
  const { className } = props;

  return (
    <StatusBubbles1 className={`status-bubbles ${className || ""}`}>
      <Criteria className="criteria">Criteria</Criteria>
    </StatusBubbles1>
  );
}

const StatusBubbles1 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 3px 8px;
  position: relative;
  background-color: var(--light-mode-purple);
  border-radius: 0px 0px 11.500001907348633px 11.500001907348633px;
  border: 1px solid;
  border-color: var(--moon-raker);

  &.status-bubbles.status-bubbles-1 {
    border-color: var(--perfume);
  }

  &.status-bubbles.status-bubbles-3 {
    border-color: var(--perfume);
  }

  &.status-bubbles.status-bubbles-4 {
    border-color: var(--perfume);
  }

  &.status-bubbles.status-bubbles-5 {
    border-color: var(--perfume);
  }
`;

const Criteria = styled.div`
  ${IbmplexsansMediumWhite16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default StatusBubbles;
