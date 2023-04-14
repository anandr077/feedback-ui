import React from "react";
import Frame14072 from "../Frame14072";
import styled from "styled-components";
import { IbmplexsansMediumRiverBed24px } from "../styledMixins";


function Frame1337(props) {
  const { tasks } = props;

  return (
    <Frame13371>
      <Tasks>{tasks}</Tasks>
      <Frame14072 />
    </Frame13371>
  );
}

const Frame13371 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
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

export default Frame1337;
