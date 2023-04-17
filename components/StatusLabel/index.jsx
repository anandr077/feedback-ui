// CustomLabel.js
import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalRiverBed14px } from "../../styledMixins";
const StatusLabel = (props) => {
  const { text } = props;

  return (
    <StatusContainer>
      <Icon id="statusLabelIcon" />
      <label id="statusLabelDiv">{text}</label>
    </StatusContainer>
  );
};

const StatusContainer = styled.div`
  ${IbmplexsansNormalRiverBed14px}
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  gap: 8px;
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url("/icons/saving.png");
  background-size: contain;
  background-repeat: no-repeat;
`;
export default StatusLabel;
