import React from "react";
import styled from "styled-components";
import { IbmplexsansMediumWhite16px } from "../../styledMixins";

function Buttons2(props) {
  const { add, label, onClickFn } = props;
  console.log("add " + add);
  return (
    <Buttons onClick={onClickFn}>
      <Add src={add} alt="add" />
      <Button>{label} </Button>
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
  background-color: var(--light-mode-purple);
  border-radius: 30px;
  border: 1px solid;
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
`;

const Add1 = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
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

const Buttons3 = styled.div`
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

const Add2 = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
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

const Buttons4 = styled.div`
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

const Add3 = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
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

export default Buttons2;
