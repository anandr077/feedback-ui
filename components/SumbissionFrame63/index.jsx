import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalPersianIndigo13px } from "../../styledMixins";

function SubmissionFrame63() {
  return (
    <Frame6>
      <MainWebsite>Main Website</MainWebsite>
      <MainWebsite>Terms</MainWebsite>
      <MainWebsite>Privacy</MainWebsite>
    </Frame6>
  );
}

const Frame6 = styled.div`
  ${IbmplexsansNormalPersianIndigo13px}
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 28px;
  position: relative;
`;

const MainWebsite = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame61 = styled.div`
  ${IbmplexsansNormalPersianIndigo13px}
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 28px;
  position: relative;
`;

const MainWebsite1 = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default SubmissionFrame63;
