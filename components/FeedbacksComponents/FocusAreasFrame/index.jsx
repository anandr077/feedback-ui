import React from "react";

import styled from "styled-components";
import { IbmplexsansNormalPersianIndigo14px } from "../../../styledMixins";

function FocusAreas(props) {
  const { focusAreas } = props;
  const allFocusAreas = focusAreas.map((focusArea) => {
    return (
      <>
        <FocusAreasBox onClick={() => handleShortcutAddComment(focusArea.title)}>
          <FocusAreasText>{focusArea.text}</FocusAreasText>
        </FocusAreasBox>
      </>
    );
  });
  return <FocusAreasContainer>{allFocusAreas}</FocusAreasContainer>;
}
const FocusAreasContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: fit-content;
  align-items: flex-start;
  gap: 12px;
  padding: 16px 0px;
  background-color: var(--white);
  border-radius: 16px;
  overflow: hidden;
  height: 200px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const FocusAreasBox = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 6px 12px;
  position: relative;
  background-color: var(--electric-violet);
  border-radius: 24.5px;
  border: 1px solid;
  border-color: var(--electric-violet);
  cursor: pointer;
`;

const FocusAreasText = styled.div`
  ${IbmplexsansNormalPersianIndigo14px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default FocusAreas;
