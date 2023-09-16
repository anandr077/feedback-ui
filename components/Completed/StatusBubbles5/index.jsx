import React from 'react';
import styled from 'styled-components';
import { IbmplexsansMediumHorsesNeck13px } from '../styledMixins';

function StatusBubbles5() {
  return (
    <StatusBubbles>
      <Frame3>
        <Crown src="/img/crown@2x.png" alt="crown" />
        <ExemplarResponse>Exemplar Response</ExemplarResponse>
      </Frame3>
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

const Frame3 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 3px;
  position: relative;
`;

const Crown = styled.img`
  position: relative;
  min-width: 15px;
  height: 15px;
`;

const ExemplarResponse = styled.div`
  ${IbmplexsansMediumHorsesNeck13px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default StatusBubbles5;
