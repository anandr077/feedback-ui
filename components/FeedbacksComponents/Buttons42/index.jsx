import React from 'react';
import styled from 'styled-components';
import { IbmplexsansMediumBlack16px } from '../../../styledMixins';

function Buttons42(props) {
  const { children, className } = props;

  return (
    <Buttons className={`buttons-6 ${className || ''}`}>
      <Button className="button-2">{children}</Button>
    </Buttons>
  );
}

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  position: relative;
  align-self: stretch;
  background-color: var(--selective-yellow);
  border-radius: 30px;
  border: 1px solid;

  &.buttons-6.buttons-7 {
    width: fit-content;
    align-self: unset;
  }
`;

const Button = styled.div`
  ${IbmplexsansMediumBlack16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default Buttons42;
