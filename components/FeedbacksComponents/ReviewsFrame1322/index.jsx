import React from "react";
import ReviewsFrame1320 from "../ReviewsFrame1320";
import styled from "styled-components";


function ReviewsFrame1322(props) {
  const { frame13201Props, frame13202Props } = props;

  return (
    <Frame13221>
      <ReviewsFrame1320 className={frame13201Props.className}>{frame13201Props.children}</ReviewsFrame1320>
      <ReviewsFrame1320 className={frame13202Props.className}>{frame13202Props.children}</ReviewsFrame1320>
    </Frame13221>
  );
}

const Frame13221 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const Frame13222 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

export default ReviewsFrame1322;
