import React from 'react';
import Group1255 from '../Group1255';
import styled from 'styled-components';
import { IbmplexsansNormalMountainMist20px } from '../../styledMixins';

function Input8() {
  return (
    <Input>
      <Frame1285>
        <Option1>Text</Option1>
      </Frame1285>
      <Group1255 />
    </Input>
  );
}

const Input = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  align-self: stretch;
`;

const Frame1285 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 20px;
  position: relative;
  flex: 1;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
`;

const Option1 = styled.div`
  ${IbmplexsansNormalMountainMist20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Input8;
