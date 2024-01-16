import React from 'react';
import styled from 'styled-components';
import { IbmplexsansMediumWhite16px } from '../../../styledMixins';

function Buttons4(props) {
  const { text, onClickFn } = props;
  return (
    <Buttons>
      <Button onClick={onClickFn}>{text}</Button>
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
  background-color: var(--light-mode-purple);
  border-radius: 30px;
  border: 1px solid var(--light-mode-purple);
  flex: 1;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--royal-purple);
  }
`;

const Button = styled.div`
  color: var(--white);
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-style: normal;
  font-size: var(--font-size-l);
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 20.8px;
  cursor: pointer;
`;

const Buttons1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  position: relative;
  align-self: stretch;
  background-color: var(--light-mode-purple);
  border-radius: 30px;
  border: 1px solid;
`;

const Button1 = styled.div`
  ${IbmplexsansMediumWhite16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Buttons2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  position: relative;
  align-self: stretch;
  background-color: var(--light-mode-purple);
  border-radius: 30px;
  border: 1px solid;
`;

const Button2 = styled.div`
  ${IbmplexsansMediumWhite16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Buttons3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  position: relative;
  align-self: stretch;
  background-color: var(--light-mode-purple);
  border-radius: 30px;
  border: 1px solid;
`;

const Button3 = styled.div`
  ${IbmplexsansMediumWhite16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default Buttons4;
