import React from "react";
import Frame642 from "../Frame642";
import Frame12824 from "../Frame12824";
import styled from "styled-components";
import { IbmplexsansNormalShark20px2, IbmplexsansNormalRiverBed14px } from "../../styledMixins";


function Cards29(props) {
  const { physicsThermodyna, fundamentalsOfThermalPhysics, frame642Props } = props;

  return (
    <Cards>
      <Frame642 statusBubbles4Props={frame642Props.statusBubbles4Props} />
      <Content>
        <PhysicsThermodyna>{physicsThermodyna}</PhysicsThermodyna>
        <FundamentalsOfThermalPhysics>{fundamentalsOfThermalPhysics}</FundamentalsOfThermalPhysics>
        <Frame12824 />
      </Content>
    </Cards>
  );
}

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

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
  ${IbmplexsansNormalShark20px2}
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

export default Cards29;
