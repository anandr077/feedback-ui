import React from 'react';
import styled from 'styled-components';
import { IbmplexsansMediumElectricViolet13px } from '../styledMixins';

function Buttons2() {
  return (
    <Buttons>
      <ViewDetails>View response</ViewDetails>
      <Arrowright src="/img/arrowright@2x.png" alt="arrowright" />
    </Buttons>
  );
}

const Buttons = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 4px 8px;
  position: relative;
  border-radius: 14px;
  border: 1px solid;
  border-color: var(--light-mode-purple);
`;

const ViewDetails = styled.div`
  ${IbmplexsansMediumElectricViolet13px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Arrowright = styled.img`
  position: relative;
  min-width: 12px;
  height: 12px;
`;

const Buttons1 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 4px 8px;
  position: relative;
  border-radius: 14px;
  border: 1px solid;
  border-color: var(--light-mode-purple);
`;

const ViewDetails1 = styled.div`
  ${IbmplexsansMediumElectricViolet13px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Arrowright1 = styled.img`
  position: relative;
  min-width: 12px;
  height: 12px;
`;

const Buttons3 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 4px 8px;
  position: relative;
  border-radius: 14px;
  border: 1px solid;
  border-color: var(--light-mode-purple);
`;

const ViewDetails2 = styled.div`
  ${IbmplexsansMediumElectricViolet13px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Arrowright2 = styled.img`
  position: relative;
  min-width: 12px;
  height: 12px;
`;

const Buttons4 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 4px 8px;
  position: relative;
  border-radius: 14px;
  border: 1px solid;
  border-color: var(--light-mode-purple);
`;

const ViewDetails3 = styled.div`
  ${IbmplexsansMediumElectricViolet13px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Arrowright3 = styled.img`
  position: relative;
  min-width: 12px;
  height: 12px;
`;

export default Buttons2;
