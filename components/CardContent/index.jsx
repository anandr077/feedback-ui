import React from "react";
import styled from "styled-components";
import {
  IbmplexsansNormalRiverBed14px,
  IbmplexsansNormalShark20px,
} from "../../styledMixins";

function CardContent(props) {
  const { task } = props;

  return (
    <Content>
      <TaskTitle
        onClick={() => {
          window.location.href = `${task.link}`;
        }}
      >
        {task.title}
      </TaskTitle>
      <FundamentalsOfThermalPhysics>
        {task.classTitle}
      </FundamentalsOfThermalPhysics>
      <Frame1282>
        <IconClock src="/img/clock@2x.png" alt="icon-clock" />
        <DueAt>{task.dueAt}</DueAt>
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

const TaskTitle = styled.p`
  ${IbmplexsansNormalShark20px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
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

const DueAt = styled.p`
  ${IbmplexsansNormalRiverBed14px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0.11px;
  line-height: normal;
`;

const Content2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  position: relative;
  align-self: stretch;
`;

const PhysicsThermodyna1 = styled.p`
  ${IbmplexsansNormalShark20px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const FundamentalsOfThermalPhysics1 = styled.div`
  ${IbmplexsansNormalRiverBed14px}
  position: relative;
  align-self: stretch;
  letter-spacing: 0.11px;
  line-height: normal;
`;

const Frame12821 = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
  align-self: stretch;
`;

const IconClock1 = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;

const DueOn2April20231 = styled.p`
  ${IbmplexsansNormalRiverBed14px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0.11px;
  line-height: normal;
`;

export default CardContent;
