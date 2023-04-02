import React from "react";
import Checkbox2 from "../Checkbox2";
import styled from "styled-components";
import { IbmplexsansNormalShark16px } from "../../styledMixins";

function RadioBox(props) {
  const { label } = props;

  return (
    <RadioBox1>
      <Checkbox2 />
      <Label>{label}</Label>
    </RadioBox1>
  );
}

const RadioBox1 = styled.div`
  display: flex;
  width: 278px;
  align-items: center;
  gap: 12px;
  position: relative;
  flex: 1;
`;

const Label = styled.div`
  ${IbmplexsansNormalShark16px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default RadioBox;
