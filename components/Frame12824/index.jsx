import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalRiverBed14px } from "../../styledMixins";

function Frame12824() {
  return (
    <Frame1282>
      <IconClock src="/img/clock@2x.png" alt="icon-clock" />
      <DueOn2April2023>Due on 2 April 2023</DueOn2April2023>
    </Frame1282>
  );
}

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

const DueOn2April2023 = styled.p`
  ${IbmplexsansNormalRiverBed14px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0.11px;
  line-height: normal;
`;

export default Frame12824;
