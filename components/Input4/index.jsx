import React from 'react';
import Group1255 from '../Group1255';
import styled from 'styled-components';
import { IbmplexsansNormalMountainMist16px } from '../../styledMixins';

function Input4(props) {
  const { option1 } = props;

  return (
    <Input>
      <Frame1285>
        <Option1>{option1}</Option1>
      </Frame1285>
      <Group1255 />
    </Input>
  );
}

const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

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

const Option1 = styled.div`
  ${IbmplexsansNormalMountainMist16px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Input4;
