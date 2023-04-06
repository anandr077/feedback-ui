import React from "react";
import styled from "styled-components";
import { IbmplexsansMediumWhite16px } from "../../../styledMixins";

function Buttons2(props) {
  const { button, arrowright, className } = props;

  return (
    <Buttons className={`buttons-1 ${className || ""}`}>
      <Button className="button-1">{button}</Button>
      <Arrowright className="arrowright" src={arrowright} alt="arrowright" />
    </Buttons>
  );
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
