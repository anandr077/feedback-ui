import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalChicago13px } from "../../styledMixins";
import Frame66 from "../Frame66";

export default function Footer() {
  return (
    <Frame6>
      <FooterText>© 2021 Jeddle. All rights reserved.</FooterText>
      <Frame66 />
    </Frame6>
  );
}

const Frame6 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 30px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const FooterText = styled.p`
  ${IbmplexsansNormalChicago13px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;
