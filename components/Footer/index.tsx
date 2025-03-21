import React from 'react';
import styled from 'styled-components';
import {
  IbmplexsansNormalChicago13px,
  IbmplexsansNormalPersianIndigo20px,
} from '../../styledMixins';
import FooterLinks from '../FooterLinks';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterText>© 2025 Jeddle. All rights reserved.</FooterText>
      <FooterLinks />
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  /* gap: 20px; */
  padding: 12px 30px;

  bottom: 0;
  align-self: stretch;
  background-color: var(--white);
  width: 100%;
  /* position: sticky; */
  z-index: 1000000;
`;

const FooterText = styled.p`
  ${IbmplexsansNormalPersianIndigo20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  height: 26px;
  display: flex;
  align-items: center;
`;
