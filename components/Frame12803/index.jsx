import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalElectricViolet14px } from "../../styledMixins";

function Frame12803(props) {
  const { className } = props;

  return (
    <Frame1280 className={`frame-1280-5 ${className || ""}`}>
      <Edit className="edit-2">Edit</Edit>
      <Edit className="duplicate-2">Duplicate</Edit>
      <Edit className="delete-2">Delete</Edit>
    </Frame1280>
  );
}

const Frame1280 = styled.div`
  ${IbmplexsansNormalElectricViolet14px}
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  align-self: stretch;

  &.frame-1280-5.frame-1280-6 {
    opacity: 0;
  }

  &.frame-1280-5.frame-1280-7 {
    opacity: 0;
  }
`;

const Edit = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Frame12803;
