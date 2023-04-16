import React from "react";
import { Link } from "react-router-dom";
import ReviewsFrame132532 from "../ReviewsFrame132532";
import styled from "styled-components";
import { IbmplexsansNormalBlack16px } from "../../../styledMixins";

function CommentCard32(props) {
  const { comment, className, reviewer, onClick, isClosable, onClose } = props;
  console.log("isClosable " + isClosable);
  return (
    <CommentCard
      onClick={() => onClick(comment)}
      className={`comment-card-4 ${className || ""}`}
    >
      <ReviewsFrame132532
        isShare={comment.type === "MODEL_RESPONSE"}
        reviewer={reviewer}
        isClosable={isClosable}
        onClose={onClose}
      />
      <HoremIpsumDolorSi className="horem-ipsum-dolor-si-1">
        {comment.comment}
      </HoremIpsumDolorSi>
    </CommentCard>
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

  &.comment-card-4.comment-card-5 {
    cursor: unset;
  }

  &.comment-card-4.comment-card-6 {
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

export default CommentCard32;
