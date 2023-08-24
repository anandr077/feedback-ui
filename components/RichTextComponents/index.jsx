import React from 'react';
import styled from 'styled-components';

function RichTextComponents(props) {
  const { src, className } = props;

  return (
    <RichTextComponents1
      className={`rich-text-components-2 ${className || ''}`}
    >
      <DragIcon className="drag-icon" src={src} alt="Drag-icon" />
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
  border-radius: 4px;
  overflow: hidden;

  &.rich-text-components-2.rich-text-components-4 {
    background-color: var(--blue-chalk);
  }

  &.rich-text-components-2.rich-text-components-5 {
    background-color: var(--blue-chalk);
  }

  &.rich-text-components-2.rich-text-components-6 {
    background-color: var(--blue-chalk);
  }
`;

const DragIcon = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

export default RichTextComponents;
