import React from "react";
import styled from "styled-components";
import { IbmplexsansMediumWhite13px } from "../styledMixins";


function StatusBubbles4(props) {
  const { children } = props;

  return (
    <StatusBubbles>
      <DueIn3Days>{children}</DueIn3Days>
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
    rgb(10.199990272521973, 94.65611279010773, 193.8000127673149) 0%,
    rgb(10.199990272521973, 138.71997714042664, 193.8000127673149) 100%
  );
`;

const DueIn3Days = styled.div`
  ${IbmplexsansMediumWhite13px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default StatusBubbles4;
