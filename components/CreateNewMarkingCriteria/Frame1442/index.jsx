import React from 'react';
import styled from 'styled-components';
import { IbmplexsansNormalElectricViolet16px } from '../../../styledMixins';

function Frame1442() {
  return (
    <Frame14421>
      <Group1255>
        <Vector src="/img/vector@2x.png" alt="Vector" />
        <Remove>Remove</Remove>
      </Group1255>
    </Frame14421>
  );
}

const Frame14421 = styled.div`
  position: relative;
  display: flex;
  min-width: 79px;
  height: 21px;
`;

const Group1255 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  min-width: 81px;
  gap: 5px;
`;

const Vector = styled.img`
  width: 16px;
  height: 16px;
  margin-left: -1px;
  margin-top: 1px;
`;

const Remove = styled.div`
  ${IbmplexsansNormalElectricViolet16px}
  min-height: 21px;
  min-width: 59px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Frame1442;
