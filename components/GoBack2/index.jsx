import React from 'react';
import styled from 'styled-components';
import { IbmplexsansMediumElectricViolet20px } from '../../styledMixins';

function GoBack2(props) {
  const { caret, className } = props;

  return (
    <GoBack className={`go-back-2 ${className || ''}`}>
      <Caret className="caret-2" src={caret} alt="caret" />
      <a href="javascript:history.back()">
        <BackToPreviousPage className="back-to-previous-page-1">
          back to previous page
        </BackToPreviousPage>
      </a>
    </GoBack>
  );
}

const GoBack = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  align-self: stretch;
  border-radius: 24px;
  cursor: pointer;

  &.go-back-2.go-back-3 {
    flex: 1;
    align-self: unset;
  }

  &.go-back-2.go-back-5 {
    flex: 1;
    align-self: unset;
  }

  &.go-back-2.go-back-6 {
    flex: 1;
    align-self: unset;
  }
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

export default GoBack2;
