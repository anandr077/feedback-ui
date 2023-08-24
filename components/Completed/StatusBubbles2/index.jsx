import React from 'react';
import styled from 'styled-components';
import { IbmplexsansMediumWhite13px } from '../styledMixins';

function StatusBubbles2(props) {
  const { children } = props;

  return (
    <StatusBubbles>
      <Overdue>{children}</Overdue>
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
    rgb(222.06250101327896, 43.48723769187927, 43.48723769187927) 0%,
    rgb(222.06248581409454, 75.63080728054047, 43.48726809024811) 100%
  );
`;

const Overdue = styled.div`
  ${IbmplexsansMediumWhite13px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default StatusBubbles2;
