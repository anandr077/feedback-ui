import React from "react";
import styled from "styled-components";
import {
  IbmplexsansNormalChicago13px,
  IbmplexsansNormalPersianIndigo13px,
} from "../../styledMixins";

export default function FooterSmall() {
  return (
    <Frame6>
      <X2023JeddleAllRightsReserved>
        {" "}
        © 2023 Jeddle. All rights reserved.
      </X2023JeddleAllRightsReserved>
      <Frame61>
        <MainWebsite>Main Website</MainWebsite>
        <Terms>Terms</Terms>
        <Terms>Privacy</Terms>
      </Frame61>
    </Frame6>
  );
}

const Frame6 = styled.div`
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

const Frame61 = styled.div`
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
