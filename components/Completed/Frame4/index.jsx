import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalBlack16px } from "../styledMixins";

function Frame4(props) {
  const { className } = props;

  return (
    <Frame41 className={`frame-4 ${className || ""}`}>
      <MaskGroup
        className="mask-group"
        src="/img/mask-group@2x.png"
        alt="Mask group"
      />
      <Frame3 className="frame-3">
        <Name className="name">Eleanor Pena</Name>
        <Frame27
          className="frame-27"
          src="/img/frame-27@2x.png"
          alt="Frame 27"
        />
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
  min-width: 6.780029296875px;
  height: 8.1158447265625px;
  margin-right: -1.03px;
`;

const Frame271 = styled.img`
  .frame-4.frame-4-1 & {
    min-width: 6.7802734375px;
    height: 8.11572265625px;
  }
`;

const Frame272 = styled.img`
  .frame-4.frame-4-2 & {
    min-width: 6.7802734375px;
    height: 8.11572265625px;
  }
`;

export default Frame4;
