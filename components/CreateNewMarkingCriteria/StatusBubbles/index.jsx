import React from "react";
import styled from "styled-components";
import { IbmplexsansMediumWhite16px } from "../../../styledMixins";


function StatusBubbles(props) {
  const { className , deleteBubble, deleteCriteriaUpdate } = props;


  return (
    <>
    {deleteBubble ?(
      <StatusBubbles2 className={`status-bubbles ${className || ""}`} onClick={deleteCriteriaUpdate}>
      <CloseIcon src="/icons/closecircle.svg" alt="deleteIcon" />
      <Criteria className="criteria">Remove</Criteria>
    </StatusBubbles2>
    ):(
    <StatusBubbles1 className={`status-bubbles ${className || ""}`}>
      <Criteria className="criteria">Criteria</Criteria>
    </StatusBubbles1>)
    }
    </>
  );
}

const StatusBubbles1 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 3px 8px;
  position: relative;
  border-radius: 0px 0px 11.5px 11.5px;
  border: 1px solid #E3CCF9;
  background: var(--light-mode-purple, #7200E0);

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

const StatusBubbles2 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  position: relative;
  background-color: var(--light-mode-purple);
  border-radius: 0px 0px 11.5px 11.5px;
  border: 1px solid #E3CCF9;
  background: #CC2929;
  cursor: pointer;
  
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

const CloseIcon = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
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
