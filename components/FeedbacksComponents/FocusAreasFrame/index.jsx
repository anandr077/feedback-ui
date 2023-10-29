import React from 'react';

import styled from 'styled-components';
import { IbmplexsansNormalPersianIndigo14px } from '../../../styledMixins';

function FocusAreasFrame(props) {
  const { focusAreas, handleAddFocusArea } = props;
  const allFocusAreas = focusAreas?.map((focusArea) => {
    return (
      <>
        <FocusAreasBox onClick={() => handleAddFocusArea(focusArea)}>
          <Ellipse141 backgroundColor={focusArea.color}></Ellipse141>
          <FocusAreasText>{focusArea.title}</FocusAreasText>
        </FocusAreasBox>
      </>
    );
  });
  return <FocusAreasContainer>{allFocusAreas}</FocusAreasContainer>;
}

const Ellipse141 = styled.div`
  position: relative;
  min-width: 20px;
  height: 20px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
`;
const FocusAreasContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: flex-start;
  gap: 10px;
  padding: 16px 0px;
  background-color: var(--white);
  border-radius: 16px;
  overflow: hidden;
  // height: 200px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const FocusAreasBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 6px 12px;
  position: relative;
  background-color: #e6e6e6;
  border-radius: 24.5px;
  border: 1px solid;
  border-color: #e6e6e6;
  cursor: pointer;
  width: 100%;
`;

const FocusAreasText = styled.div`
  ${IbmplexsansNormalPersianIndigo14px}
  position: relative;
  width: 100%;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default FocusAreasFrame;
