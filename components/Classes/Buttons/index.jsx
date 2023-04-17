import React from "react";
import styled from "styled-components";
import { IbmplexsansMediumWhite16px } from "../styledMixins";

function Buttons(props) {
  const { className, link } = props;

  return (
    <a href={link}>
      <Buttons1 className={`buttons ${className || ""}`}>
      <Add className="add" src="/img/add@2x.png" alt="add" />
      <Button className="button">New assignment</Button>
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
  border: 1px solid;

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
  ${IbmplexsansMediumWhite16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default Buttons;
