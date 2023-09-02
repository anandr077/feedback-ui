import React from 'react';
import styled from 'styled-components';
import { IbmplexsansNormalMountainMist20px } from '../../../styledMixins';

function Input(props) {
  const { children } = props;

  return (
    <Input1>
      {/* <Frame1285> */}
      <Input2>{children}</Input2>
      {/* </Frame1285> */}
    </Input1>
  );
}

const Input1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  position: relative;
  align-self: stretch;
`;

const Input2 = styled.div`
  ${IbmplexsansNormalMountainMist20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Input;
