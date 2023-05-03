import React from "react";
import DashboardGroup12052 from "../DashboardGroup12052";
import styled from "styled-components";
import { IbmplexsansMediumRiverBed20px } from "../../styledMixins";

function DashboardFrame1208(props) {
  const { tasks, exempler } = props;

  return (
    <Frame12081>
      {exempler && <Crown src="/icons/exemplary_response.png" alt="crown" />}
      <Tasks>{tasks}</Tasks>
    </Frame12081>
  );
}

const Crown = styled.img`
  position: relative;
  min-width: 26px;
  height: 26px;
`;
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
  font-size: 20px;
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default DashboardFrame1208;
