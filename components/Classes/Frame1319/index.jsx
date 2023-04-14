import React from "react";
import styled from "styled-components";
import { IbmplexsansMediumShark20px } from "../styledMixins";


function Frame1319(props) {
  const { milesFloyd } = props;

  return (
    <Frame13191>
      <Frame1312>
        <Frame13121>
          <MilesFloyd>{milesFloyd}</MilesFloyd>
          <Arrowdown2 src="/img/arrowdown2-1@2x.png" alt="arrowdown2" />
        </Frame13121>
      </Frame1312>
    </Frame13191>
  );
}

const Frame13191 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame1312 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame13121 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const MilesFloyd = styled.div`
  ${IbmplexsansMediumShark20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.5px;
  line-height: normal;
`;

const Arrowdown2 = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

export default Frame1319;
