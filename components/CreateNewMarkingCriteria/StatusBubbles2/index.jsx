import React from 'react';
import styled from 'styled-components';
import { feedbacksIbmplexsansMediumPersianIndigo16px } from '../../../styledMixins';

function StatusBubbles2() {
  return (
    <StatusBubbles>
      <Place>Levels</Place>
    </StatusBubbles>
  );
}

const StatusBubbles = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 3px 8px;
  position: relative;
  background-color: var(--blue-chalk);
  border-radius: 0px 0px 11.500001907348633px 11.500001907348633px;
  border: 1px solid;
  border-color: var(--text);
`;

const Place = styled.div`
  ${feedbacksIbmplexsansMediumPersianIndigo16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default StatusBubbles2;
