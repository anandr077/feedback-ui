import React from 'react';
import styled from 'styled-components';
import { IbmplexsansNormalMountainMist20px } from '../../../styledMixins';

function Frame12853(props) {
  const { children } = props;

  return (
    <Frame1285>
      <LevelName>{children}</LevelName>
    </Frame1285>
  );
}

const Frame1285 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
`;

const LevelName = styled.div`
  ${IbmplexsansNormalMountainMist20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Frame12853;
