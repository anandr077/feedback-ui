import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalPersianIndigo14px } from "../../../styledMixins";

function ReviewsFrame1320(props) {
  const { children, className } = props;

  return (
    <Frame13201 className={`frame-1320 ${className || ""}`}>
      <Feedback className="feedback">{children}</Feedback>
    </Frame13201>
  );
}

const Frame13201 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 4px 12px;
  position: relative;
  background-color: var(--blue-chalk-2);
  border-radius: 17px;
  overflow: hidden;

  &.frame-1320.frame-1321 {
    background-color: unset;
  }

  &.frame-1320.frame-1321-1 {
    background-color: unset;
  }

  &.frame-1320.frame-1321-2 {
    background-color: unset;
  }

  &.frame-1320.frame-1320-2 {
    background-color: unset;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Feedback = styled.div`
  ${IbmplexsansNormalPersianIndigo14px}
  position: relative;

  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default ReviewsFrame1320;
