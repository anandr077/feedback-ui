import React from "react";
import styled from "styled-components";
import { IbmplexsansMediumElectricViolet16px } from "../../styledMixins";

function GoBack(props) {
  const { className } = props;

  return (
      <GoBack1 className={`go-back ${className || ""}`}>
        <Caret className="caret-1" src="/img/caret-1@2x.png" alt="caret" />
        <a href="javascript:history.back()">

        <BackToPreviousPage className="back-to-previous-page">
          back to previous page
        </BackToPreviousPage>
        </a>
      </GoBack1>
  );
}

const GoBack1 = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  align-self: stretch;
  border-radius: 24px;
  cursor: pointer;

  &.go-back.go-back-1 {
    justify-content: center;
  }
`;

const Caret = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const BackToPreviousPage = styled.div`
  ${IbmplexsansMediumElectricViolet16px}
  position: relative;
  width: fit-content;
  text-align: right;
  letter-spacing: -0.4px;
  line-height: normal;
`;

export default GoBack;
