import React from "react";
import styled from "styled-components";
import { IbmplexsansMediumWhite16px } from "../../../styledMixins";

function Buttons2(props) {
  const { button, arrowleft, arrowright, className, onClickFn } = props;

  return (
    <Buttons className={`buttons-1 ${className || ""}`}>
      {arrowLeft()}
      <Button onClick={onClickFn} className="button-1">
        {button}
      </Button>
      {arrowRight()}
    </Buttons>
  );
  function arrowLeft() {
    if (arrowleft)
      return (
        <Arrowleft
          className="arrowleft"
          src={"/icons/arrowleft.png"}
          alt="arrowleft"
        />
      );
    else return <></>;
  }
  function arrowRight() {
    if (arrowright)
      return (
        <Arrowright
          className="arrowright"
          src={"/icons/arrowright.png"}
          alt="arrowright"
        />
      );
    else return <></>;
  }
}

const Buttons = styled.article`
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

const Arrowleft = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;

const Arrowright = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;

const Button1 = styled.div`
  ${IbmplexsansMediumWhite16px}

  .buttons-1.buttons-3  & {
    text-align: right;
  }
`;

const Button2 = styled.div`
  ${IbmplexsansMediumWhite16px}

  .buttons-1.buttons-4  & {
    text-align: right;
  }
`;

const Button3 = styled.div`
  ${IbmplexsansMediumWhite16px}

  .buttons-1.buttons-5  & {
    text-align: right;
  }
`;

export default Buttons2;
