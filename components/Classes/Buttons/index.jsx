import React from 'react';
import styled from 'styled-components';

function Buttons(props) {
  const { className, link } = props;

  return (
    <a href={link}>
      <Buttons1 className={`buttons ${className || ''}`}>
        <Add className="add" src="/img/add@2x.png" alt="add" />
        <Button className="button">New task</Button>
      </Buttons1>
    </a>
  );
}

const Buttons1 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 16px;
  position: relative;
  background-color: var(--light-mode-purple);
  border-radius: 30px;
  border: 1px solid var(--light-mode-purple);

  &.buttons.buttons-1 {
    align-self: stretch;
    width: unset;
  }
`;

const Add = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;

const Button = styled.div`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
  background-color: var(--light-mode-purple);
`;

export default Buttons;
