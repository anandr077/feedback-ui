import React from "react";
import styled from "styled-components";


function RichTextComponents(props) {
  const { src, className } = props;

  return (
    <RichTextComponents1 className={`rich-text-components ${className || ""}`}>
      <Undo className="undo" src={src} alt="undo" />
    </RichTextComponents1>
  );
}

const RichTextComponents1 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 4px;
  padding: 3px;
  position: relative;
  margin-left: -1.73px;
  border-radius: 4px;
  overflow: hidden;

  &.rich-text-components.rich-text-components-1 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-2 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-3 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-4 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-5 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-6 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-7 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-8 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-9 {
    margin-right: -1.73px;
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-10 {
    margin-left: -4.03px;
  }

  &.rich-text-components.rich-text-components-11 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-12 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-13 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-14 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-15 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-16 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-17 {
    margin-left: -4.73px;
  }

  &.rich-text-components.rich-text-components-18 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-19 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-20 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-21 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-22 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-23 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-24 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-25 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-26 {
    margin-right: -4.73px;
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-28 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-29 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-30 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-31 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-32 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-33 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-34 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-35 {
    margin-left: unset;
  }

  &.rich-text-components.rich-text-components-36 {
    margin-right: -1.73px;
    margin-left: unset;
  }
`;

const Undo = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const TextColor = styled.img`
  .rich-text-components.rich-text-components-7 & {
    min-width: 37.0166015625px;
  }
`;

const PaintBucket = styled.img`
  .rich-text-components.rich-text-components-8 & {
    min-width: 35.421875px;
  }
`;

const TextColor1 = styled.img`
  .rich-text-components.rich-text-components-16 & {
    min-width: 37.0166015625px;
  }
`;

const TextColor2 = styled.img`
  .rich-text-components.rich-text-components-24 & {
    min-width: 37.0166015625px;
  }
`;

const PaintBucket1 = styled.img`
  .rich-text-components.rich-text-components-25 & {
    min-width: 35.421875px;
  }
`;

const TextColor3 = styled.img`
  .rich-text-components.rich-text-components-34 & {
    min-width: 37.0166015625px;
  }
`;

const PaintBucket2 = styled.img`
  .rich-text-components.rich-text-components-35 & {
    min-width: 35.421875px;
  }
`;

export default RichTextComponents;
