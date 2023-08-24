import React from 'react';
import SubmissionFrame63 from '../Frame63';
import styled from 'styled-components';
import { IbmplexsansNormalChicago13px } from '../../styledMixins';

function SubmissionFrame6() {
  return (
    <Frame61>
      <X2021JeddleAllRightsReserved>
        © 2021 Jeddle. All rights reserved.
      </X2021JeddleAllRightsReserved>
      <SubmissionFrame63 />
    </Frame61>
  );
}

const Frame61 = styled.div`
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

export default SubmissionFrame6;
