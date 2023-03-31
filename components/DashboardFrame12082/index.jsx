import React from "react";
import DashboardGroup12052 from "../Group12052";
import styled from "styled-components";
import { IbmplexsansMediumRiverBed24px } from "../../styledMixins";

function DashboardFrame12082(props) {
  const { tasks, group12052Props } = props;

  return (
    <Frame1208>
      <Tasks>{tasks}</Tasks>
      <DashboardGroup12052 arrowright={group12052Props.arrowright} />
    </Frame1208>
  );
}

const Frame1208 = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Tasks = styled.div`
  ${IbmplexsansMediumRiverBed24px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default DashboardFrame12082;
