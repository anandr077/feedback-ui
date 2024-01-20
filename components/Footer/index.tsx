import React from 'react';
import styled from 'styled-components';
import { IbmplexsansNormalChicago13px } from '../../styledMixins';
import FooterLinks from '../FooterLinks';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterText>© 2024 Jeddle. All rights reserved.</FooterText>
      <FooterLinks />
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  /* gap: 20px; */
  padding: 0px 30px;
  
  bottom: 0;
  align-self: stretch;
  background-color: var(--white);
  height: 77px;
  width: 100%;
  /* position: sticky; */
  bottom: 0;
  z-index: 1000000;
`;

const FooterText = styled.p`
  ${IbmplexsansNormalChicago13px}
  font-size: var(--font-size-s);
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;
