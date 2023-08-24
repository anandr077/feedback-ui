import React from 'react';
import styled from 'styled-components';

function RichTextComponents2(props) {
  const { src } = props;

  return (
    <RichTextComponents>
      <AlignLeft src={src} alt="align-left" />
    </RichTextComponents>
  );
}

const RichTextComponents = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 4px;
  padding: 3px;
  position: relative;
  background-color: var(--fog);
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--mauve);
  cursor: pointer;
`;

const AlignLeft = styled.img`
  position: relative;
  min-width: 38.0166015625px;
  height: 25px;
`;

const RichTextComponents1 = styled.article`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 4px;
  padding: 3px;
  position: relative;
  background-color: var(--fog);
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--mauve);
  cursor: pointer;
`;

const AlignLeft1 = styled.img`
  position: relative;
  min-width: 38.0166015625px;
  height: 25px;
`;

const RichTextComponents3 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 4px;
  padding: 3px;
  position: relative;
  background-color: var(--fog);
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--mauve);
  cursor: pointer;
`;

const AlignLeft2 = styled.img`
  position: relative;
  min-width: 38.0166015625px;
  height: 25px;
`;

const RichTextComponents4 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 4px;
  padding: 3px;
  position: relative;
  background-color: var(--fog);
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--mauve);
  cursor: pointer;
`;

const AlignLeft3 = styled.img`
  position: relative;
  min-width: 38.0166015625px;
  height: 25px;
`;

export default RichTextComponents2;
