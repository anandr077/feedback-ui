import React from 'react';
import styled from 'styled-components';
import { IbmplexsansNormalPersianIndigo13px } from '../styledMixins';

function Frame6() {
  return (
    <Frame61>
      <MainWebsite>Main Website</MainWebsite>
      <MainWebsite>Terms</MainWebsite>
      <MainWebsite>Privacy</MainWebsite>
    </Frame61>
  );
}

const Frame61 = styled.div`
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

const Frame62 = styled.div`
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

export default Frame6;
