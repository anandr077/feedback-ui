import React from "react";
import BulletList from "../BulletList";
import styled from "styled-components";

function RichTextComponents3(props) {
  const { bulletListProps } = props;

  return (
    <RichTextComponents>
      <BulletList
        className={bulletListProps.className}
        group25Props={bulletListProps.group25Props}
      />
      <MCQ>MCQ</MCQ>
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

const MCQ = styled.div`
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

const MCQ1 = styled.div`
  position: relative;
  width: 63px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const RichTextComponents2 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  padding: 3px;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
`;

const MCQ2 = styled.div`
  position: relative;
  width: 63px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default RichTextComponents3;
