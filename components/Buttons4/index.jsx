import React from "react";
import styled from "styled-components";
import { IbmplexsansMediumElectricViolet16px } from "../../styledMixins";

function Buttons4() {
  return (
    <Buttons>
      <Add src="/img/add-1@2x.png" alt="add" />
      <Button>Add option</Button>
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

const Buttons1 = styled.div`
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
`;

const Add1 = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;

const Button1 = styled.div`
  ${IbmplexsansMediumElectricViolet16px}
  position: relative;
  width: fit-content;
  margin-top: -1.5px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Buttons2 = styled.div`
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
`;

const Add2 = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;

const Button2 = styled.div`
  ${IbmplexsansMediumElectricViolet16px}
  position: relative;
  width: fit-content;
  margin-top: -1.5px;
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
  border-radius: 30px;
  border: 1.5px solid;
  border-color: var(--light-mode-purple);
`;

const Add3 = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;

const Button3 = styled.div`
  ${IbmplexsansMediumElectricViolet16px}
  position: relative;
  width: fit-content;
  margin-top: -1.5px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default Buttons4;
