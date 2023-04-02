import React from "react";
import RichTextComponents from "../RichTextComponents";
import Frame1280 from "../Frame1280";
import styled from "styled-components";
import {
  IbmplexsansNormalShark16px,
  IbmplexsansNormalShark20px,
} from "../../styledMixins";

function Frame1297(props) {
  const { number, richTextComponentsProps } = props;

  return (
    <Frame12971>
      <RichTextComponents src={richTextComponentsProps.src} />
      <Frame1287>
        <Frame1283>
          <Frame1282>
            <Frame1281>
              <ToremIpsumDolorSi>Section {number}</ToremIpsumDolorSi>
              <RichTextComponents1>
                <Assignment src="/img/assignment@2x.png" alt="Assignment" />
                <Theory>Theory</Theory>
              </RichTextComponents1>
            </Frame1281>
          </Frame1282>
          <Frame1284 src="/img/frame-1284@2x.png" alt="Frame 1284" />
        </Frame1283>
      </Frame1287>
    </Frame12971>
  );
}

const Frame12971 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0px 12px 0px 8px;
  position: relative;
  align-self: stretch;
`;

const Frame1287 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  position: relative;
  flex: 1;
`;

const Frame1283 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const Frame1282 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
  position: relative;
  flex: 1;
`;

const Text1 = styled.div`
  ${IbmplexsansNormalShark20px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const ToremIpsumDolorSi = styled.p`
  ${IbmplexsansNormalShark16px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1281 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
  position: relative;
  align-self: stretch;
`;

const RichTextComponents1 = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px;
  position: relative;
  align-self: stretch;
  border-radius: 4px;
  overflow: hidden;
`;

const Assignment = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

const Theory = styled.div`
  ${IbmplexsansNormalShark16px}
  position: relative;
  width: 63px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1284 = styled.img`
  position: relative;
  min-width: 28px;
  height: 28px;
`;

export default Frame1297;
