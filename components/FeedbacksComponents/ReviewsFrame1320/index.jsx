import React from 'react';
import styled from 'styled-components';
import { IbmplexsansNormalPersianIndigo14px } from '../../../styledMixins';

function Tabs(props) {
  const {
    className,
    setFeedback,
    setFocusAreas,
    isFocusAreas,
    isFeedback,
    showFeedbacks = true,
    showFocusAreas = true,
  } = props;

  function handleFocusAreas() {
    console.log('handleFocusAreas');
    setFeedback(false);
    setFocusAreas(true);
  }
  function handleFeedback() {
    console.log('handleFeedback');
    setFeedback(true);
    setFocusAreas(false);
  }

  return (
    <Frame13201 className={`frame-1320 ${className || ''}`}>
      {showFeedbacks && createTab('Feedback', handleFeedback, isFeedback)}
      {showFocusAreas && createTab('Focus areas', handleFocusAreas, isFocusAreas)}
    </Frame13201>
  );
}

const Frame13201 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 20px;
  padding: 4px 12px;
  position: relative;
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
  font-weight: 500;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  &::-webkit-scrollbar {
    display: none;
  }
  cursor: pointer;
  display: flex;
  gap: 2px;
`;
function createTab(title, onClick, isSelected) {
  return (
    <Feedback
      className="feedback"
      onClick={onClick}
      style={{ color: isSelected ? '#301B72' : '#79738C' }}
    >
      {title}
    </Feedback>
  );
}

export default Tabs;
