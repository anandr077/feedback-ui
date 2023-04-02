import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalShark16px } from "../../styledMixins";

function Input(props) {
  const { input } = props;

  return (
    <Input1>
      <Label>Type of question</Label>
      <Frame1285>
        <Input2>{input}</Input2>
        <Frame1284 src="/img/frame-1284-1@2x.png" alt="Frame 1284" />
      </Frame1285>
    </Input1>
  );
}

const Input1 = styled.div`
  ${IbmplexsansNormalShark16px}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  position: relative;
  align-self: stretch;
`;

const Label = styled.div`
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

const Input2 = styled.div`
  position: relative;
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1284 = styled.img`
  position: relative;
  min-width: 26px;
  height: 26px;
`;

export default Input;
