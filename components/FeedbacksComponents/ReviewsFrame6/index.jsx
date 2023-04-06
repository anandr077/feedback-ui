import React from "react";
import ReviewsFrame622 from "../ReviewsFrame622";
import styled from "styled-components";
import { IbmplexsansNormalChicago13px } from "../../../styledMixins";

function ReviewsFrame6(props) {
  const { className } = props;

  return (
    <Frame61 className={`frame-6-4 ${className || ""}`}>
      <X2021JeddleAllRightsReserved className="x2021-jeddle-all-rights-reserved-1">
        © 2021 Jeddle. All rights reserved.
      </X2021JeddleAllRightsReserved>
      <ReviewsFrame622 />
    </Frame61>
  );
}

const Frame61 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 30px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);

  &.frame-6-4.frame-6-5 {
    width: 1920px;
    height: 77px;
    margin-top: 120px;
    align-self: unset;
  }
`;

const X2021JeddleAllRightsReserved = styled.p`
  ${IbmplexsansNormalChicago13px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default ReviewsFrame6;
