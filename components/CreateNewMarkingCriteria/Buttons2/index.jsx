import React from 'react';
import styled from 'styled-components';
import { IbmplexsansMediumElectricViolet16px } from '../../../styledMixins';

function Buttons2(props) {
  const { text, small, onClickFn } = props;

  return (
    <>
      {small ? (
        <Buttons onClick={onClickFn}>
          <Add src="/icons/add.svg" alt="add" />
          <Button>{text}</Button>
        </Buttons>
      ) : (
        <ButtonsLarge onClick={onClickFn}>
          <Add src="/icons/add.svg" alt="add" />
          <Button>{text}</Button>
        </ButtonsLarge>
      )}
    </>
  );
}

const Buttons = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 16px;
  position: relative;
  border-radius: 30px;
  border: 1.5px solid;
  border-color: var(--light-mode-purple);
  cursor: pointer;
`;

const ButtonsLarge = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 16px;
  position: relative;
  border-radius: 30px;
  border: 1.5px solid;
  border-color: var(--light-mode-purple);
  align-self: stretch;
  width: unset;
  cursor: pointer;
`;

const Add = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;

const Button = styled.div`
  ${IbmplexsansMediumElectricViolet16px}
  position: relative;
  width: fit-content;
  margin-top: -1.5px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default Buttons2;
