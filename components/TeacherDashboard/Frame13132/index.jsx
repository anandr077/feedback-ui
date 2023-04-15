import React from "react";
import styled from "styled-components";
import {
  IbmplexsansNormalShark20px,
  IbmplexsansNormalTrendyPink14px,
} from "../styledMixins";

function Frame13132(props) {
  const { jonnyBoyleSubmittedAnAssignment } = props;

  return (
    <Frame1313>
      <JonnyBoyleSubmittedAnAssignment>
        {jonnyBoyleSubmittedAnAssignment}
      </JonnyBoyleSubmittedAnAssignment>
      <Frame1312>
        <X12ENGADV3>12-ENGADV-3</X12ENGADV3>
        <Line17 src="/img/line-17-2@2x.png" alt="Line 17" />
        <X12ENGADV3>at 10:07am on 30 March</X12ENGADV3>
      </Frame1312>
    </Frame1313>
  );
}

const Frame1313 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
  padding: 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

const JonnyBoyleSubmittedAnAssignment = styled.p`
  ${IbmplexsansNormalShark20px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1312 = styled.div`
  ${IbmplexsansNormalTrendyPink14px}
  display: flex;
  align-items: flex-start;
  gap: 10px;
  position: relative;
  align-self: stretch;
`;

const X12ENGADV3 = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Line17 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 1px;
  height: 18px;
  object-fit: cover;
`;

export default Frame13132;
