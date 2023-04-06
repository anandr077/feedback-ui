import React from "react";
import ReviewsFrame1316 from "../ReviewsFrame1316";
import ReviewsFrame1317 from "../ReviewsFrame1317";
import styled from "styled-components";

function ReviewsFrame1370(props) {
  const { frame1317Props } = props;

  return (
    <Frame13701>
      <ReviewsFrame1316 />
      <ReviewsFrame1317
        buttonsProps={frame1317Props.buttonsProps}
        buttons2Props={frame1317Props.buttons2Props}
      />
    </Frame13701>
  );
}

const Frame13701 = styled.div`
  display: flex;
  margin-left: 1099px;
  width: 581px;
  height: 46px;
  position: relative;
  margin-top: 60px;
  align-items: center;
  gap: 30px;
`;

export default ReviewsFrame1370;
