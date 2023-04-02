import React from "react";
import RichTextComponents2 from "../RichTextComponents2";
import styled from "styled-components";
import { IbmplexsansNormalShark20px } from "../../styledMixins";

function Frame12972(props) {
  const { number, frame1284, richTextComponentsProps } = props;

  return (
    <Frame1297>
      <Frame1287>
        <Frame1283>
          <Frame1282>
            <Text6>{number}</Text6>
            <Frame1281>
              <ToremIpsumDolorSi>Section {number}</ToremIpsumDolorSi>
              <RichTextComponents2 />
            </Frame1281>
          </Frame1282>
          <Frame1284 src={frame1284} alt="Frame 1284" />
        </Frame1283>
      </Frame1287>
    </Frame1297>
  );
}

const Frame1297 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1287 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  position: relative;
  flex: 1;
`;

const Frame1283 = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  position: relative;
  align-self: stretch;
`;

const Frame1282 = styled.div`
  ${IbmplexsansNormalShark20px}
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  flex: 1;
`;

const Text6 = styled.div`
  position: relative;
  width: 20px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1281 = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  position: relative;
  flex: 1;
`;

const ToremIpsumDolorSi = styled.p`
  position: relative;
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1284 = styled.img`
  position: relative;
  min-width: 28px;
  height: 28px;
`;

export default Frame12972;
