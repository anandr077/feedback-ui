import React from 'react';
import styled from 'styled-components';
import {
  IbmplexsansNormalShark16px,
  IbmplexsansNormalMountainMist20px,
} from '../../styledMixins';

function Input3(props) {
  const { label, input } = props;

  return (
    <Input>
      <Label>{label}</Label>
      <Frame1285>
        <Input1>{input}</Input1>
      </Frame1285>
    </Input>
  );
}

const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  position: relative;
  align-self: stretch;
`;

const Label = styled.div`
  ${IbmplexsansNormalShark16px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
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

const Input1 = styled.div`
  ${IbmplexsansNormalMountainMist20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Input3;
