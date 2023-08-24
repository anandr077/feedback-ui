import React from 'react';
import { Link } from 'react-router-dom';
import ReviewsFrame132522 from '../ReviewsFrame132522';
import styled from 'styled-components';
import { IbmplexsansNormalBlack16px } from '../../../styledMixins';

function CommentCard22(props) {
  const { horemIpsumDolorSi, className } = props;

  return (
    <Link to="/highlight-hover">
      <CommentCard className={`comment-card ${className || ''}`}>
        <ReviewsFrame132522 />
        <HoremIpsumDolorSi className="horem-ipsum-dolor-si">
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

  &.comment-card.comment-card-2 {
    cursor: unset;
  }

  &.comment-card.comment-card-3 {
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

export default CommentCard22;
