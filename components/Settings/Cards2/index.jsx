import React from 'react';
import Buttons2 from '../Buttons2';
import styled from 'styled-components';
import { IbmplexsansNormalShark20px } from '../../../styledMixins';

function Cards2(props) {
  const { systemDefault, className } = props;

  return (
    <Cards className={`cards-1 ${className || ''}`}>
      <SystemDefault className="system-default-1">
        {systemDefault}
      </SystemDefault>
      <Buttons2 />
    </Cards>
  );
}

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--wild-sand);
  box-shadow: 0px 4px 22px #2f1a720a;

  &.cards-1.cards-2 {
    justify-content: center;
  }

  &.cards-1.cards-4 {
    justify-content: center;
  }

  &.cards-1.cards-5 {
    justify-content: center;
  }
`;

const SystemDefault = styled.div`
  ${IbmplexsansNormalShark20px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Cards2;
