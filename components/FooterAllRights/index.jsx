import React from 'react';
import FooterFrame662 from '../FooterFrame662';
import styled from 'styled-components';
import { IbmplexsansNormalChicago13px } from '../../styledMixins';

function Frame65(props) {
  const { frame662Props } = props;

  return (
    <FooterAllRights>
      <X2021JeddleAllRightsReserved>
        © 2021 Jeddle. All rights reserved.
      </X2021JeddleAllRightsReserved>
      <FooterFrame662 className={frame662Props.className} />
    </FooterAllRights>
  );
}

const FooterAllRights = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 30px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const X2021JeddleAllRightsReserved = styled.p`
  ${IbmplexsansNormalChicago13px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame61 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 30px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const X2021JeddleAllRightsReserved1 = styled.p`
  ${IbmplexsansNormalChicago13px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame62 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 30px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const X2021JeddleAllRightsReserved2 = styled.p`
  ${IbmplexsansNormalChicago13px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Frame65;
