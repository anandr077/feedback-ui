import React from "react";
import styled from "styled-components";

function ReviewsFrame1311() {
  return (
    <Frame13111>
      <Contents src="/img/contents@2x.png" alt="contents" />
      <Contents1>Contents</Contents1>
    </Frame13111>
  );
}

const Frame13111 = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;
  align-self: stretch;
`;

const Contents = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const Contents1 = styled.div`
  position: relative;
  flex: 1;
  margin-top: -1px;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  color: var(--black);
  font-size: var(--font-size-m);
  letter-spacing: 0;
  line-height: normal;
`;

export default ReviewsFrame1311;
