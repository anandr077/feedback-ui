import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalRiverBed14px, IbmplexsansNormalShark20px } from "../styledMixins";


function Content2() {
  return (
    <Content>
      <PhysicsThermodyna>Physics - thermodynamics assignment questions (MCQ)</PhysicsThermodyna>
      <FundamentalsOfThermalPhysics>Fundamentals of thermal physics</FundamentalsOfThermalPhysics>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  position: relative;
  align-self: stretch;
`;

const PhysicsThermodyna = styled.p`
  ${IbmplexsansNormalShark20px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const FundamentalsOfThermalPhysics = styled.div`
  ${IbmplexsansNormalRiverBed14px}
  position: relative;
  align-self: stretch;
  letter-spacing: 0.11px;
  line-height: normal;
`;

export default Content2;
