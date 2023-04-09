import React from "react";
import styled from "styled-components";
import {
  IbmplexsansMediumElectricViolet14px,
  IbmplexsansMediumShark36px,
} from "../../styledMixins";

function DashboardFrame1284(props) {
  const { title, count } = props;
  return (
    <Frame12841>
      <Outstanding>{title}</Outstanding>
      <Number>{count}</Number>
    </Frame12841>
  );
}

const Frame12841 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 4px;
  position: relative;
`;

const Outstanding = styled.div`
  ${IbmplexsansMediumElectricViolet14px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 1.4px;
  line-height: normal;
`;

const Number = styled.div`
  ${IbmplexsansMediumShark36px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame12842 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 4px;
  position: relative;
`;

const Outstanding1 = styled.div`
  ${IbmplexsansMediumElectricViolet14px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 1.4px;
  line-height: normal;
`;

const Number1 = styled.div`
  ${IbmplexsansMediumShark36px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: normal;
`;

export default DashboardFrame1284;
