import React from "react";
import styled from "styled-components";
import { IbmplexsansSemiBoldRiverBed24px } from "../../styledMixins";

function Frame13532(props) {
  const { outstanding, number } = props;

  return (
    <Frame1353>
      <Outstanding>{outstanding}</Outstanding>
      <Number>{number}</Number>
    </Frame1353>
  );
}

const Frame1353 = styled.div`
  ${IbmplexsansSemiBoldRiverBed24px}
  display: flex;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Outstanding = styled.div`
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Number = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: normal;
`;

export default Frame13532;
