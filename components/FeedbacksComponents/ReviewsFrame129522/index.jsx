import React from 'react';
import styled from 'styled-components';
import { IbmplexsansNormalBlack16px } from '../../../styledMixins';

function ReviewsFrame129522() {
  return (
    <Frame1295>
      <Ellipse10 src="/icons/ellipse.png" alt="Ellipse 10" />
      <Name>Floyd Miles</Name>
    </Frame1295>
  );
}

const Frame1295 = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;
  flex: 1;
`;

const Ellipse10 = styled.img`
  position: relative;
  min-width: 30px;
  height: 30px;
  object-fit: cover;
`;

const Name = styled.div`
  ${IbmplexsansNormalBlack16px}
  position: relative;
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
`;

export default ReviewsFrame129522;
