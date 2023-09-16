import React from 'react';
import styled from 'styled-components';

function Buttons(props) {
  const { children } = props;

  return (
    <Buttons1>
      <Button>{children}</Button>
    </Buttons1>
  );
}

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

const Button = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  color: var(--white);
  font-size: var(--font-size-m);
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default Buttons;
