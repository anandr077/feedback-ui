import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalPersianIndigo13px } from "../../styledMixins";

function FooterLinks() {
  return (
    <FooterLinksContainer>
      <a href="https://jeddle.com/"><MainWebsite>Main Website</MainWebsite></a>
      <a href="https://jeddle.com/terms-conditions/"><MainWebsite>Terms</MainWebsite></a>
      <a href="https://jeddle.com/privacy-policy/"><MainWebsite>Privacy</MainWebsite></a>
    </FooterLinksContainer>
  );
}

const FooterLinksContainer = styled.div`
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

export default FooterLinks;
