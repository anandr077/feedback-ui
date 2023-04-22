import React from "react";
import styled from "styled-components";
import { IbmplexsansMediumElectricViolet16px } from "../styledMixins";

function Group1205(props) {
  const { arrowright, arrowleft, link, label } = props;

  return (
    <a href={link}>
      <Group12051>
        {arrowleft ? <Arrowright src={arrowleft} /> : <></>}
        <ViewAll>{label}</ViewAll>
        {arrowright ? <Arrowright src={arrowright} /> : <></>}
      </Group12051>
    </a>
  );
}

const Group12051 = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  min-width: 115px;
  height: 21px;
  margin-right: -2px;
`;

const ViewAll = styled.div`
  ${IbmplexsansMediumElectricViolet16px}
  height: 21px;
  letter-spacing: 1.84px;
  line-height: normal;
`;

const Arrowright = styled.img`
  width: 20px;
  height: 20px;
`;

const Group12052 = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  min-width: 115px;
  height: 21px;
  margin-right: -2px;
`;

const ViewAll1 = styled.div`
  ${IbmplexsansMediumElectricViolet16px}
  width: 85px;
  height: 21px;
  letter-spacing: 1.84px;
  line-height: normal;
`;

const Arrowright1 = styled.img`
  width: 20px;
  height: 20px;
`;

const Group12053 = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  min-width: 115px;
  height: 21px;
  margin-right: -2px;
`;

const ViewAll2 = styled.div`
  ${IbmplexsansMediumElectricViolet16px}
  width: 85px;
  height: 21px;
  letter-spacing: 1.84px;
  line-height: normal;
`;

const Arrowright2 = styled.img`
  width: 20px;
  height: 20px;
`;

const Group12054 = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  min-width: 115px;
  height: 21px;
  margin-right: -2px;
`;

const ViewAll3 = styled.div`
  ${IbmplexsansMediumElectricViolet16px}
  width: 85px;
  height: 21px;
  letter-spacing: 1.84px;
  line-height: normal;
`;

const Arrowright3 = styled.img`
  width: 20px;
  height: 20px;
`;

export default Group1205;
