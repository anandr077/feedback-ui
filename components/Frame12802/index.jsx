import React from 'react';
import styled from 'styled-components';
import { IbmplexsansNormalElectricViolet14px } from '../../styledMixins';

function Frame12802(props) {
  const { className } = props;

  return (
    <Frame1280 className={`frame-1280-1 ${className || ''}`}>
      <Edit className="edit-1">Edit</Edit>
      <Edit className="duplicate-1">Duplicate</Edit>
      <Edit className="delete-1">Delete</Edit>
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

  &.frame-1280-1.frame-1280-2 {
    opacity: 0;
  }

  &.frame-1280-1.frame-1280-4 {
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

export default Frame12802;
