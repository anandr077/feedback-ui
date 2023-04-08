import React from "react";
import styled from "styled-components";
import {
  IbmplexsansNormalFuscousGray16px,
  IbmplexsansMediumShark20px,
} from "../styledMixins";

function Frame12093(props) {
  const { topicsCovered, moremIpsumDolorSi } = props;

  return (
    <Frame1209>
      <TopicsCovered>{topicsCovered}</TopicsCovered>
      <MoremIpsumDolorSi>{moremIpsumDolorSi}</MoremIpsumDolorSi>
    </Frame1209>
  );
}

const Frame1209 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 0px 40px;
  position: relative;
  align-self: stretch;
`;

const TopicsCovered = styled.div`
  ${IbmplexsansMediumShark20px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const MoremIpsumDolorSi = styled.p`
  ${IbmplexsansNormalFuscousGray16px}
  position: relative;
  align-self: stretch;
  letter-spacing: 0;
  line-height: 22.4px;
`;

export default Frame12093;
