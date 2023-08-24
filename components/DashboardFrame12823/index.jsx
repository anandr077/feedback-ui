import React from 'react';
import styled from 'styled-components';
import {
  IbmplexsansMediumElectricViolet14px,
  IbmplexsansMediumShark36px,
} from '../../styledMixins';

function DashboardFrame12823() {
  return (
    <Frame1282>
      <Overdue>OVERDUE</Overdue>
      <Number>3</Number>
    </Frame1282>
  );
}

const Frame1282 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 4px;
  position: relative;
`;

const Overdue = styled.div`
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

const Frame12821 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 4px;
  position: relative;
`;

const Overdue1 = styled.div`
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

export default DashboardFrame12823;
