import React from "react";
import DashboardGroup12052 from "../Group12052";
import styled from "styled-components";
import { IbmplexsansMediumRiverBed20px } from "../../styledMixins";

function DashboardFrame1208(props) {
  const { tasks, group12052Props } = props;

  return (
    <Frame12081>
      <Tasks>{tasks}</Tasks>
      <DashboardGroup12052 arrowright={group12052Props.arrowright} />
    </Frame12081>
  );
}

const Frame12081 = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0px 16px;
  position: relative;
  align-self: stretch;
`;

const Tasks = styled.div`
  ${IbmplexsansMediumRiverBed20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default DashboardFrame1208;
