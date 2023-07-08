import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalPersianIndigo14px } from "../../../styledMixins";

function Tabs(props) {
  const {
    className,
    setFeedback,
    setFocusAreas,
    isFocusAreas,
    isFeedback,
  } = props;

  function handleFocusAreas() {
    setFeedback(false);
    setFocusAreas(true);
  }
  function handleFeedback() {
    setFeedback(true);
    setFocusAreas(false);
  }

  
  return (
    <Frame13201 className={`frame-1320 ${className || ""}`}>
      <Feedback
        className="feedback"
        onClick={handleFeedback}
        style={{ color: isFeedback ? "#301B72" : "#79738C" }}
      >
        {"Feedback"}
      </Feedback>
      

      <Feedback
        className="feedback"
        onClick={handleFocusAreas}
        style={{ color: isFocusAreas ? "#301B72" : "#79738C" }}
      >
        {"Focus Areas"}
      </Feedback>
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

export default Tabs;
