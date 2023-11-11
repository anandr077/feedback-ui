import React from 'react';
import Checkbox2 from '../Checkbox2';
import styled from 'styled-components';
import { IbmplexsansNormalShark20px } from '../../styledMixins';

function RadioBox2() {
  return (
    <RadioBox>
      <Checkbox2 />
      <Label>Peer to Peer</Label>
    </RadioBox>
  );
}

const RadioBox = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  position: relative;
  flex: 1;
`;

const Label = styled.div`
  ${IbmplexsansNormalShark20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const RadioBox1 = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  position: relative;
  flex: 1;
`;

const Label1 = styled.div`
  ${IbmplexsansNormalShark20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const RadioBox3 = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  position: relative;
  flex: 1;
`;

const Label2 = styled.div`
  ${IbmplexsansNormalShark20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default RadioBox2;
