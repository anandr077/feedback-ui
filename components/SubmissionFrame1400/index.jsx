import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalShark20px } from "../../styledMixins";


function SubmissionFrame1400(props) {
  const {label} = props
  return (
    <Frame14001>
      <BoremIpsumDolorSi>
        {label}
      </BoremIpsumDolorSi>
    </Frame14001>
  );
}

const Frame14001 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const BoremIpsumDolorSi = styled.p`
  ${IbmplexsansNormalShark20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame14002 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const BoremIpsumDolorSi1 = styled.p`
  ${IbmplexsansNormalShark20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default SubmissionFrame1400;
