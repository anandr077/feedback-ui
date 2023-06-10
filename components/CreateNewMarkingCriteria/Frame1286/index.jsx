import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalMountainMist20px } from "../../../styledMixins";


function Frame1286() {
  return (
    <Frame12861>
      <AnAnswerOfThisLevelContains>An answer of this level should...</AnAnswerOfThisLevelContains>
    </Frame12861>
  );
}

const Frame12861 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 20px;
  position: relative;
  flex: 1;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
`;

const AnAnswerOfThisLevelContains = styled.p`
  ${IbmplexsansNormalMountainMist20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Frame1286;
