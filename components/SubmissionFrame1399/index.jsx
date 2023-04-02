import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalPersianIndigo20px } from "../../styledMixins";

function SubmissionFrame1399(props) {
  const { label } = props;
  return (
    <Frame13991>
      <PhysicsThermodyna>{label}</PhysicsThermodyna>
    </Frame13991>
  );
}

const Frame13991 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--blue-chalk-2);
  border-radius: 16px 16px 0px 0px;
  overflow: hidden;
`;

const PhysicsThermodyna = styled.p`
  ${IbmplexsansNormalPersianIndigo20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame13992 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--blue-chalk-2);
  border-radius: 16px 16px 0px 0px;
  overflow: hidden;
`;

const PhysicsThermodyna1 = styled.p`
  ${IbmplexsansNormalPersianIndigo20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default SubmissionFrame1399;
