import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalPersianIndigo13px, IbmplexsansNormalChicago13px } from "../../styledMixins";


function SubmissionFrame13922() {
  return (
    <Frame1392>
      <X2023JeddleAllRightsReserved>© 2023 Jeddle. All rights reserved.</X2023JeddleAllRightsReserved>
      <Frame6>
        <MainWebsite>Main Website</MainWebsite>
        <Terms>Terms</Terms>
        <Terms>Privacy</Terms>
      </Frame6>
    </Frame1392>
  );
}

const Frame1392 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const X2023JeddleAllRightsReserved = styled.p`
  ${IbmplexsansNormalChicago13px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const MainWebsite = styled.div`
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame6 = styled.div`
  ${IbmplexsansNormalPersianIndigo13px}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Terms = styled.div`
  position: relative;
  align-self: stretch;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default SubmissionFrame13922;
