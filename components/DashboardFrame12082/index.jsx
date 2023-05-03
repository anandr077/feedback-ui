import React from "react";
import DashboardGroup12052 from "../DashboardGroup12052";
import styled from "styled-components";
import { IbmplexsansMediumRiverBed24px } from "../../styledMixins";

function DashboardFrame12082(props) {
  const { tasks, exempler } = props;

  return (
    <Frame1208>
     {exempler &&  <Crown src="/img/crown@2x.png" alt="crown" />}
      <Tasks>{tasks}</Tasks>
    </Frame1208>
  );
}

const Crown = styled.img`
  position: relative;
  min-width: 26px;
  height: 26px;
`;
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
  font-size: 24px;
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default DashboardFrame12082;
