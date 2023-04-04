import React from "react";
import styled from "styled-components";
import { IbmplexsansMediumBlack16px } from "../../../styledMixins";


function ReviewsFrame132532() {
  return (
    <Frame1325>
      <Frame1324>
        <Ellipse7 src="/img/ellipse-10@2x.png" alt="Ellipse 7" />
        <Instructer>Instructer</Instructer>
      </Frame1324>
      <More src="/img/more@2x.png" alt="more" />
    </Frame1325>
  );
}

const Frame1325 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  position: relative;
  align-self: stretch;
`;

const Frame1324 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  flex: 1;
`;

const Ellipse7 = styled.img`
  position: relative;
  min-width: 30px;
  height: 30px;
  object-fit: cover;
`;

const Instructer = styled.div`
  ${IbmplexsansMediumBlack16px}
  position: relative;
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
`;

const More = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

export default ReviewsFrame132532;
