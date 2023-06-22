import React from "react";
import styled from "styled-components";
import { IbmplexsansMediumElectricViolet16px } from "../../../styledMixins";


function Buttons2(props) {
  const { add, button, className } = props;

  return (
    <Buttons className={`buttons-1 ${className || ""}`}>
      <Add className="add" src="/icons/add.svg" alt="add" />
      <Button className="button-1">{button}</Button>
    </Buttons>
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

  &.buttons-1.buttons-3 {
    align-self: stretch;
    width: unset;
  }

  &.buttons-1.buttons-4 {
    align-self: stretch;
    width: unset;
  }

  &.buttons-1.buttons-5 {
    align-self: stretch;
    width: unset;
  }

  &.buttons-1.buttons-6 {
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
  ${IbmplexsansMediumElectricViolet16px}
  position: relative;
  width: fit-content;
  margin-top: -1.5px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default Buttons2;
