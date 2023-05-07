import React from "react";
import styled from "styled-components";
import { IbmplexsansMediumWhite20px } from "../styledMixins";

function Buttons(props) {
  const { onClickFn } = props;
  return (
    <Buttons1 onClick={onClickFn}>
      <Button>Start Task</Button>
      <Arrowright src="/img/arrowright@2x copy 3.png" alt="arrowright" />
    </Buttons1>
  );
}

const Buttons1 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  position: relative;
  background-color: var(--light-mode-purple);
  border-radius: 30px;
  border: 1px solid;
  cursor: pointer;
  &:hover {
    scale: 1.2;
    transition: 0.1s;
  }
`;

const Button = styled.div`
  ${IbmplexsansMediumWhite20px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Arrowright = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const Buttons2 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  position: relative;
  background-color: var(--light-mode-purple);
  border-radius: 30px;
  border: 1px solid;
`;

const Button1 = styled.div`
  ${IbmplexsansMediumWhite20px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Arrowright1 = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const Buttons3 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  position: relative;
  background-color: var(--light-mode-purple);
  border-radius: 30px;
  border: 1px solid;
`;

const Button2 = styled.div`
  ${IbmplexsansMediumWhite20px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Arrowright2 = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const Buttons4 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  position: relative;
  background-color: var(--light-mode-purple);
  border-radius: 30px;
  border: 1px solid;
`;

const Button3 = styled.div`
  ${IbmplexsansMediumWhite20px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Arrowright3 = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

export default Buttons;
