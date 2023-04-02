import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalElectricViolet14px } from "../../styledMixins";

function Frame1280() {
  return (
    <Frame12801>
      <Edit>Edit</Edit>
      <Edit>Duplicate</Edit>
      <Edit>Delete</Edit>
    </Frame12801>
  );
}

const Frame12801 = styled.div`
  ${IbmplexsansNormalElectricViolet14px}
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  align-self: stretch;
`;

const Edit = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Frame1280;
