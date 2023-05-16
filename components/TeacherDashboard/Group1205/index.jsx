import React from "react";
import styled from "styled-components";
import { IbmplexsansMediumElectricViolet16px } from "../styledMixins";

function Group1205(props) {
  const { arrowright, arrowleft, link, label, small } = props;

  return (
    <a href={link}>
     {small ? 
     <Group12051Small>
        {arrowleft ? <ArrowrightSmall src={arrowleft} /> : <></>}
        <ViewAllSmall>{label}</ViewAllSmall>
        {arrowright ? <ArrowrightSmall src={arrowright} /> : <></>}
      </Group12051Small>
      : 
      <Group12051>
        {arrowleft ? <Arrowright src={arrowleft} /> : <></>}
        <ViewAll>{label}</ViewAll>
        {arrowright ? <Arrowright src={arrowright} /> : <></>}
      </Group12051>
      }
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

const Group12051Small = styled.div`
  position: relative;
  display: flex;
  gap: 4px;
  min-width: 115px;
  height: 15px;
  margin-right: -2px;
  flex-wrap: wrap;
`;

const ViewAll = styled.div`
  ${IbmplexsansMediumElectricViolet16px}
  height: 21px;
  letter-spacing: 1.84px;
  line-height: normal;
`;
const ViewAllSmall = styled.div`
  ${IbmplexsansMediumElectricViolet16px}
  font-size: 12px;
  height: 15px;
  letter-spacing: 1.84px;
  line-height: normal;
`;

const Arrowright = styled.img`
  width: 20px;
  height: 20px;
`;
const ArrowrightSmall = styled.img`
  width: 15px;
  height: 15px;
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
