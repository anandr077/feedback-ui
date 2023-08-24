import React from 'react';
import styled from 'styled-components';
import { IbmplexsansNormalChicago13px } from '../../styledMixins';
import FooterLinks from '../FooterLinks';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterText>© 2023 Jeddle. All rights reserved.</FooterText>
      <FooterLinks />
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 30px;
  bottom: 0;
  align-self: stretch;
  background-color: var(--white);
  height: 100px;

  width: 100%;
`;

const FooterText = styled.p`
  ${IbmplexsansNormalChicago13px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;
