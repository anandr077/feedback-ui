import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalShark16px } from "../styledMixins";


function Frame13132(props) {
  const { storytellingNotAnalysing, number, group1312 } = props;

  return (
    <Frame1313>
      <Frame1312>
        <StorytellingNotAnalysing>{storytellingNotAnalysing}</StorytellingNotAnalysing>
        <Number>{number}</Number>
      </Frame1312>
      <Group1312 src={group1312} alt="Group 1312" />
    </Frame1313>
  );
}

const Frame1313 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  position: relative;
  align-self: stretch;
`;

const Frame1312 = styled.div`
  ${IbmplexsansNormalShark16px}
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  align-self: stretch;
`;

const StorytellingNotAnalysing = styled.div`
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

const Group1312 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 668px;
  height: 4px;
  margin-bottom: -2px;
  margin-left: -2px;
  margin-right: -2px;
`;

export default Frame13132;
