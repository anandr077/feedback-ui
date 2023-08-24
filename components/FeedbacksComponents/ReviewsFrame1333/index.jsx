import React from 'react';
import ReviewsFrame12972 from '../ReviewsFrame12972';
import ReviewsFrame1385 from '../ReviewsFrame1385';
import styled from 'styled-components';

function ReviewsFrame1333(props) {
  const { className } = props;

  return (
    <Frame13331 className={`frame-1333-1 ${className || ''}`}>
      <ReviewsFrame12972 />
      <ReviewsFrame1385 />
    </Frame13331>
  );
}

const Frame13331 = styled.div`
  display: flex;
  width: 279px;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  margin-right: -56px;

  &.frame-1333-1.frame-1333-2 {
    margin-right: unset;
  }
`;

export default ReviewsFrame1333;
