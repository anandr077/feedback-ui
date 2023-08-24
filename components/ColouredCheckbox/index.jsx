import React from 'react';
import styled from 'styled-components';
import { IbmplexsansNormalShark16px } from '../../styledMixins';

function ColouredCheckbox(props) {
  const { children, className } = props;

  return (
    <Checkbox1 className={`checkbox ${className || ''}`}>
      <Ellipse14 className="ellipse-14"></Ellipse14>
      <LightRed className="light-red">{children}</LightRed>
    </Checkbox1>
  );
}

const Checkbox1 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const Ellipse14 = styled.div`
  position: relative;
  min-width: 12px;
  height: 12px;
  background-color: #e39a99;
  border-radius: 6px;
`;

const LightRed = styled.div`
  ${IbmplexsansNormalShark16px}
  position: relative;
  flex: 1;
  margin-top: -0.5px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
`;

const Ellipse141 = styled.div`
  .checkbox.checkbox-1 & {
    background-color: #d76766;
  }
`;

const Ellipse142 = styled.div`
  .checkbox.checkbox-2 & {
    background-color: #f4cb9b;
  }
`;

const Ellipse143 = styled.div`
  .checkbox.checkbox-3 & {
    background-color: #efb269;
  }
`;

const Ellipse144 = styled.div`
  .checkbox.checkbox-4 & {
    background-color: #b9d7a7;
  }
`;

const Ellipse145 = styled.div`
  .checkbox.checkbox-5 & {
    background-color: #98c47b;
  }
`;

const Ellipse146 = styled.div`
  .checkbox.checkbox-6 & {
    background-color: #a6c4c9;
  }
`;

const Ellipse147 = styled.div`
  .checkbox.checkbox-7 & {
    background-color: #7ca5af;
  }
`;

const Ellipse148 = styled.div`
  .checkbox.checkbox-8 & {
    background-color: #a4c5e9;
  }
`;

const Ellipse149 = styled.div`
  .checkbox.checkbox-9 & {
    background-color: #78a8dd;
  }
`;

const Ellipse1410 = styled.div`
  .checkbox.checkbox-10 & {
    background-color: #b3a7d7;
  }
`;

const Ellipse1411 = styled.div`
  .checkbox.checkbox-11 & {
    background-color: #8d7cc4;
  }
`;

const Ellipse1412 = styled.div`
  .checkbox.checkbox-12 & {
    background-color: #d1a6be;
  }
`;

const Ellipse1413 = styled.div`
  .checkbox.checkbox-13 & {
    background-color: #bc7ca1;
  }
`;

export default ColouredCheckbox;
