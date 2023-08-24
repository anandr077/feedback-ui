import React from 'react';
import styled from 'styled-components';

function RichTextComponents2() {
  return (
    <RichTextComponents>
      <Assignment src="/img/assignment-4@2x.png" alt="Assignment" />
      <Theory>Theory</Theory>
    </RichTextComponents>
  );
}

const RichTextComponents = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  padding: 3px;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
`;

const Assignment = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const Theory = styled.div`
  position: relative;
  width: 63px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const RichTextComponents1 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  padding: 3px;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
`;

const Assignment1 = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const Theory1 = styled.div`
  position: relative;
  width: 63px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const RichTextComponents3 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  padding: 3px;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
`;

const Assignment2 = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const Theory2 = styled.div`
  position: relative;
  width: 63px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default RichTextComponents2;
