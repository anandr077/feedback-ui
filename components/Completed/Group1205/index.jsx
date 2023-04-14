import React from "react";
import styled from "styled-components";
import { IbmplexsansMediumElectricViolet16px } from "../styledMixins";


function Group1205(props) {
  const { arrowright, className } = props;

  return (
    <Group12051 className={`group-1205 ${className || ""}`}>
      <ViewAll className="view-all">VIEW ALL</ViewAll>
      <Arrowright className="arrowright" src={arrowright} alt="arrowright" />
    </Group12051>
  );
}

const Group12051 = styled.div`
  width: 115px;
  margin-left: 631px;
  margin-top: 3px;
  display: flex;
  gap: 8px;

  &.group-1205.group-1206 {
    margin-left: 170px;
  }
`;

const ViewAll = styled.div`
  ${IbmplexsansMediumElectricViolet16px}
  width: 85px;
  height: 21px;
  letter-spacing: 1.84px;
  line-height: normal;
`;

const Arrowright = styled.img`
  width: 20px;
  height: 20px;
`;

export default Group1205;
