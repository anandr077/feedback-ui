import React from "react";
import styled from "styled-components";
import { IbmplexsansMediumWhite16px } from "../../../styledMixins";


function Buttons(props) {
  const { text, className, link , noIcon, mobile} = props;

  return (
    <>
    {mobile ?
    <ButtonsMobile className={`buttons ${className || ""}`} onClick={()=> window.location.href=link}>
    {!noIcon && <Add className="add" src="/img/add@2x.png" alt="add" />}
      <Button className="button" >{text}</Button>
    </ButtonsMobile>
     :
    <Buttons1 className={`buttons ${className || ""}`} onClick={()=> window.location.href=link}>
     {!noIcon && <Add className="add" src="/img/add@2x.png" alt="add" />}
      <Button className="button" >{text}</Button>
    </Buttons1>
    }
    </>
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
  cursor: pointer;
  &.buttons.buttons-1 {
    align-self: stretch;
    width: unset;
  }
   &:hover {
    scale: 1.2;
    transition: 0.1s;
  }
`;

const ButtonsMobile = styled.div`
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
  cursor: pointer;
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
