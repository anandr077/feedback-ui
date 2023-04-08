import React from "react";
import styled from "styled-components";
import { IbmplexsansMediumElectricViolet20px } from "../styledMixins";


function GoBack(props) {
  const { caret } = props;

  return (
    <a href="javascript:history.back()">
      <GoBack1>
        <Caret src={caret} alt="caret" />
        <BackToPreviousPage>back to previous page</BackToPreviousPage>
      </GoBack1>
    </a>
  );
}

const GoBack1 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 4px;
  position: relative;
  border-radius: 24px;
  cursor: pointer;
`;

const Caret = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const BackToPreviousPage = styled.div`
  ${IbmplexsansMediumElectricViolet20px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: right;
  letter-spacing: -0.5px;
  line-height: normal;
`;

const GoBack2 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 4px;
  position: relative;
  border-radius: 24px;
  cursor: pointer;
`;

const Caret1 = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const BackToPreviousPage1 = styled.div`
  ${IbmplexsansMediumElectricViolet20px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: right;
  letter-spacing: -0.5px;
  line-height: normal;
`;

const GoBack3 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 4px;
  position: relative;
  border-radius: 24px;
  cursor: pointer;
`;

const Caret2 = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const BackToPreviousPage2 = styled.div`
  ${IbmplexsansMediumElectricViolet20px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: right;
  letter-spacing: -0.5px;
  line-height: normal;
`;

const GoBack4 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 4px;
  position: relative;
  border-radius: 24px;
  cursor: pointer;
`;

const Caret3 = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const BackToPreviousPage3 = styled.div`
  ${IbmplexsansMediumElectricViolet20px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: right;
  letter-spacing: -0.5px;
  line-height: normal;
`;

export default GoBack;
