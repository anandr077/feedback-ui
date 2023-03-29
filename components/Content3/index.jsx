import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalRiverBed14px, IbmplexsansNormalShark20px } from "../../styledMixins";


function Content3(props) {
  const { clock, dueOn2April2023 } = props;

  return (
    <Content>
      <PhysicsThermodyna>Physics - thermodynamics assignment questions (MCQ)</PhysicsThermodyna>
      <FundamentalsOfThermalPhysics>Fundamentals of thermal physics</FundamentalsOfThermalPhysics>
      <Frame1282>
        <IconClock src={clock} alt="icon-clock" />
        <DueOn2April2023>{dueOn2April2023}</DueOn2April2023>
      </Frame1282>
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

const Frame1282 = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
  align-self: stretch;
`;

const IconClock = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;

const DueOn2April2023 = styled.p`
  ${IbmplexsansNormalRiverBed14px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0.11px;
  line-height: normal;
`;

export default Content3;
