import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalBlack20px, IbmplexsansNormalShark20px } from "../../../styledMixins";


function CriteriaLevelInput4(props) {
  const { high, providesASkilfulA } = props;

  return (
    <CriteriaLevelInput>
      <Frame1285>
        <High>{high}</High>
      </Frame1285>
      <Frame1285>
        <ProvidesASkilfulA>{providesASkilfulA}</ProvidesASkilfulA>
      </Frame1285>
    </CriteriaLevelInput>
  );
}

const CriteriaLevelInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;
  position: relative;
  align-self: stretch;
`;

const Frame1285 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
`;

const High = styled.div`
  ${IbmplexsansNormalShark20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const ProvidesASkilfulA = styled.p`
  ${IbmplexsansNormalBlack20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default CriteriaLevelInput4;
