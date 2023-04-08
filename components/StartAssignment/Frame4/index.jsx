import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalBlack16px } from "../styledMixins";


function Frame4() {
  return (
    <Frame41>
      <MaskGroup src="/img/mask-group@2x.png" alt="Mask group" />
      <Frame3>
        <Name>Eleanor Pena</Name>
        <Frame27 src="/img/frame-27@2x.png" alt="Frame 27" />
      </Frame3>
    </Frame41>
  );
}

const Frame41 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  position: relative;
`;

const MaskGroup = styled.img`
  position: relative;
  min-width: 48px;
  height: 48px;
`;

const Frame3 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 4px;
  position: relative;
`;

const Name = styled.div`
  ${IbmplexsansNormalBlack16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame27 = styled.img`
  position: relative;
  min-width: 6.7802734375px;
  height: 8.115837097167969px;
  margin-right: -1.03px;
`;

const Frame42 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  position: relative;
`;

const MaskGroup1 = styled.img`
  position: relative;
  min-width: 48px;
  height: 48px;
`;

const Frame31 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 4px;
  position: relative;
`;

const Name1 = styled.div`
  ${IbmplexsansNormalBlack16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame271 = styled.img`
  position: relative;
  min-width: 6.7802734375px;
  height: 8.115837097167969px;
  margin-right: -1.03px;
`;

export default Frame4;
