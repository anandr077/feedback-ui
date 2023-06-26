import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalElectricViolet16px , IbmplexsansMediumWhite16px} from "../../../styledMixins";


function Frame1219(props) {
  const {saveMethod, isUpdating} = props;
  return (
    <Frame12191>
      <Frame1322>
        <IconTrash src="/icons/trashcan.svg" alt="icon-trash" />
        <Delete>Delete</Delete>
      </Frame1322>
      <Buttons1>
      <Button onClick={saveMethod}>{isUpdating?'Update Criteria':'Save Criteria'}</Button>
    </Buttons1>
    </Frame12191>
  );
}

const Frame12191 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 24px;
  position: relative;
`;

const Frame1322 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 4px;
  position: relative;
  cursor: pointer;
`;

const IconTrash = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

const Delete = styled.div`
  ${IbmplexsansNormalElectricViolet16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Buttons1 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 8px;
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



export default Frame1219;
