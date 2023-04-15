import React from "react";
import styled from "styled-components";
import { IbmplexsansMediumWhite13px } from "../styledMixins";

function StatusBubbles7(props) {
  const { children } = props;

  return (
    <StatusBubbles>
      <DueTomorrow>{children}</DueTomorrow>
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
  border-radius: 11.5px;
  border: 1px solid;
  border-color: var(--white-2);
  background: linear-gradient(
    180deg,
    rgb(216.22821807861328, 99.39210265874863, 33.67178678512573) 0%,
    rgb(216.22821807861328, 132.25226819515228, 33.67178678512573) 100%
  );
`;

const DueTomorrow = styled.div`
  ${IbmplexsansMediumWhite13px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default StatusBubbles7;
