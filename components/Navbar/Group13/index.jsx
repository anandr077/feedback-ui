import React from 'react';
import styled from 'styled-components';
import { IbmplexsansNormalPersianIndigo20px } from '../styledMixins';

function Group13() {
  return (
    <Group1>
      <Clipboardtick src="/img/clipboardtick@2x.png" alt="clipboardtick" />
      <Home>Completed</Home>
    </Group1>
  );
}

const Group1 = styled.div`
  margin-top: 14px;
  width: 133px;
  margin-left: 16px;
  display: flex;
  gap: 8px;
`;

const Clipboardtick = styled.img`
  margin-top: 1px;
  width: 24px;
  height: 24px;
`;

const Home = styled.div`
  ${IbmplexsansNormalPersianIndigo20px}
  width: 99px;
  height: 26px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Group13;
