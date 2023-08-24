import React from 'react';
import styled from 'styled-components';
import {
  IbmplexsansMediumElectricViolet14px,
  IbmplexsansMediumShark36px,
} from '../../styledMixins';

function DashboardFrame1283() {
  return (
    <Frame12831>
      <InProgress>IN PROGRESS</InProgress>
      <Number>4</Number>
    </Frame12831>
  );
}

const Frame12831 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 4px;
  position: relative;
`;

const InProgress = styled.div`
  ${IbmplexsansMediumElectricViolet14px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 1.4px;
  line-height: normal;
`;

const Number = styled.div`
  ${IbmplexsansMediumShark36px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame12832 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 4px;
  position: relative;
`;

const InProgress1 = styled.div`
  ${IbmplexsansMediumElectricViolet14px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 1.4px;
  line-height: normal;
`;

const Number1 = styled.div`
  ${IbmplexsansMediumShark36px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: normal;
`;

export default DashboardFrame1283;
