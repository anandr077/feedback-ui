import React from "react";
import styled from "styled-components";
import {
  IbmplexsansNormalChicago13px,
  IbmplexsansNormalPersianIndigo13px,
} from "../../styledMixins";

export default function FooterSmall() {
  return (
    <SmallFooterContainer>
      <SmallFooterText> © 2023 Jeddle. All rights reserved.</SmallFooterText>
      <SmallFooterLinksContainer>
        <MainWebsite>Main Website</MainWebsite>
        <Terms>Terms</Terms>
        <Terms>Privacy</Terms>
      </SmallFooterLinksContainer>
    </SmallFooterContainer>
  );
}

const SmallFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const SmallFooterText = styled.p`
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

const SmallFooterLinksContainer = styled.div`
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
