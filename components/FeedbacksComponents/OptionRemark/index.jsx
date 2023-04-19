import React from "react";

import styled from "styled-components";
import { IbmplexsansNormalPersianIndigo14px } from "../../../styledMixins";

export default function OptionRemark(props) {
  const { isCorrect } = props;
  return (
    <>
      {" "}
      {isCorrect ? (
        <CorrectOptionBox>
          <IconContainer src="/icons/correct.png" />
          <RemarkText>Correct Response</RemarkText>
        </CorrectOptionBox>
      ) : (
        <InCorrectOptionBox>
          <IconContainer src="/icons/incorrect.png" />
          <RemarkText>Incorrect</RemarkText>
        </InCorrectOptionBox>
      )}
    </>
  );
}

const IconContainer = styled.img`
  width: 15px;
  height: 15px;
`;
const CorrectOptionBox = styled.div`
  width: 145px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3px 8px;
  gap: 5px;
  height: 23px;
  background: linear-gradient(89.71deg, #0c8f8f 0.21%, #0c8f77 99.73%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 11.5px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const InCorrectOptionBox = styled.div`
  width: 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3px 8px;
  gap: 10px;
  height: 23px;
  background: linear-gradient(90deg, #de2b2b 2.99%, #de4c2b 100%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 11.5px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const RemarkText = styled.div`
  height: 17px;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
