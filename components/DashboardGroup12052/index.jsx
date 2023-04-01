import React from "react";
import styled from "styled-components";
import { IbmplexsansMediumElectricViolet14px } from "../../styledMixins";

function DashboardGroup12052(props) {
  const { arrowright } = props;

  return (
    <Group1205>
      <ViewAll>VIEW ALL</ViewAll>
      <Arrowright src={arrowright} alt="arrowright" />
    </Group1205>
  );
}

const Group1205 = styled.div`
  position: relative;
  display: flex;
  gap: 4px;
  min-width: 97px;
  height: 18px;
  margin-right: -2px;
`;

const ViewAll = styled.div`
  ${IbmplexsansMediumElectricViolet14px}

  height: 18px;
  letter-spacing: 1.61px;
  line-height: normal;
`;

const Arrowright = styled.img`
  margin-top: 1px;
  width: 16px;
  height: 16px;
`;

const Group12051 = styled.div`
  position: relative;
  display: flex;
  gap: 4px;
  min-width: 97px;
  height: 18px;
  margin-right: -2px;
`;

const ViewAll1 = styled.div`
  ${IbmplexsansMediumElectricViolet14px}
  width: 75px;
  height: 18px;
  letter-spacing: 1.61px;
  line-height: normal;
`;

const Arrowright1 = styled.img`
  margin-top: 1px;
  width: 16px;
  height: 16px;
`;

export default DashboardGroup12052;
