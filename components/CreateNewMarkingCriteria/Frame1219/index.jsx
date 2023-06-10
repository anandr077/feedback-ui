import React from "react";
import Buttons from "../Buttons";
import styled from "styled-components";
import { IbmplexsansNormalElectricViolet16px } from "../../../styledMixins";


function Frame1219() {
  return (
    <Frame12191>
      <Frame1322>
        <IconTrash src="/img/align-left-align-center-justify-justify-left-trash-can@2x.png" alt="icon-trash" />
        <Delete>Delete</Delete>
      </Frame1322>
      <Buttons />
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

const Frame12192 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 24px;
  position: relative;
`;

const Frame13221 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 4px;
  position: relative;
`;

const IconTrash1 = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

const Delete1 = styled.div`
  ${IbmplexsansNormalElectricViolet16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame12193 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 24px;
  position: relative;
`;

const Frame13222 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 4px;
  position: relative;
`;

const IconTrash2 = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

const Delete2 = styled.div`
  ${IbmplexsansNormalElectricViolet16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Frame1219;
