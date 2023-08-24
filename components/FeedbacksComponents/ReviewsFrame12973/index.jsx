import React from 'react';
import styled from 'styled-components';
import { IbmplexsansNormalDeepBronze16px } from '../../../styledMixins';

function ReviewsFrame12973(props) {
  const { children } = props;

  return (
    <Frame1297>
      <UseMoreTechniques>{children}</UseMoreTechniques>
    </Frame1297>
  );
}

const Frame1297 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 16px;
  position: relative;
  align-self: stretch;
  background-color: var(--marzipan);
  border-radius: 24.5px;
  border: 1px solid;
  border-color: var(--orange-yellow);
`;

const UseMoreTechniques = styled.div`
  ${IbmplexsansNormalDeepBronze16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default ReviewsFrame12973;
