import React from "react";
import Frame65 from "../Frame65";
import styled from "styled-components";
import {
  IbmplexsansNormalRiverBed14px,
  IbmplexsansNormalShark20px,
} from "../../styledMixins";

function Cards15(props) {
  const { className, frame65Props } = props;

  return (
    <Cards className={`cards-18 ${className || ""}`}>
      <Frame65
        statusBubbles21Props={frame65Props.statusBubbles21Props}
        statusBubbles22Props={frame65Props.statusBubbles22Props}
      />
      <Content className="content-3">
        <PhysicsThermodyna className="physics-thermodyna-3">
          Physics - thermodynamics assignment questions (MCQ)
        </PhysicsThermodyna>
        <FundamentalsOfThermalPhysics className="fundamentals-of-thermal-physics-3">
          Fundamentals of thermal physics
        </FundamentalsOfThermalPhysics>
        <Frame1282 className="frame-1282-4">
          <IconClock
            className="icon-clock-3"
            src="/img/clock@2x.png"
            alt="icon-clock"
          />
          <DueOn2April2023 className="due-on-2-april-2023-3">
            Due on 2 April 2023
          </DueOn2April2023>
        </Frame1282>
      </Content>
    </Cards>
  );
}

const Cards = styled.article`
  display: flex;
  flex-direction: column;
  width: 419px;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
  position: relative;
  margin-right: -0.33px;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--corn);
  box-shadow: 0px 4px 16px #f4bf061a;

  &.cards-18.cards-19 {
    margin-right: -40.33px;
  }
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

export default Cards15;
