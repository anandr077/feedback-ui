import React from 'react';
import { Link } from 'react-router-dom';
import ReviewsFrame1325 from '../ReviewsFrame1325';
import styled from 'styled-components';
import { IbmplexsansNormalBlack16px } from '../../../styledMixins';

function CommentCard3(props) {
  const { horemIpsumDolorSi, className, frame1325Props } = props;

  return (
    <Link to="/highlight-hover">
      <CommentCard className={`comment-card-7 ${className || ''}`}>
        <ReviewsFrame1325
          ellipse7={frame1325Props.ellipse7}
          more={frame1325Props.more}
        />
        <HoremIpsumDolorSi className="horem-ipsum-dolor-si-2">
          {horemIpsumDolorSi}
        </HoremIpsumDolorSi>
      </CommentCard>
    </Link>
  );
}

const CommentCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 16px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
  cursor: pointer;

  &.comment-card-7.comment-card-8 {
    cursor: unset;
  }

  &.comment-card-7.comment-card-9 {
    cursor: unset;
  }
`;

const HoremIpsumDolorSi = styled.div`
  ${IbmplexsansNormalBlack16px}
  position: relative;
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
`;

export default CommentCard3;
