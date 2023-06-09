import React from "react";
import Checkbox from "../Checkbox";
import styled from "styled-components";
import { IbmplexsansNormalMountainMist16px } from "../../styledMixins";
import "./SelectFocusArea.css";

function SelectFocusArea(props) {
  const {
    selectFocusAreas,
    line34,
    checkbox1Props,
    checkbox2Props,
    checkbox3Props,
    checkbox4Props,
    checkbox5Props,
    checkbox6Props,
  } = props;

  return (
    <div className="select-focus-area screen">
      <Frame1370>
        <Frame1369>
          <SelectFocusAreas>{selectFocusAreas}</SelectFocusAreas>
        </Frame1369>
      </Frame1370>
      <Line34 src={line34} alt="Line 34" />
      <Frame1321>
        <Checkbox frame1441Props={checkbox1Props.frame1441Props} />
        <Checkbox className={checkbox2Props.className} frame1441Props={checkbox2Props.frame1441Props} />
        <Checkbox className={checkbox3Props.className} frame1441Props={checkbox3Props.frame1441Props} />
        <Checkbox className={checkbox4Props.className} frame1441Props={checkbox4Props.frame1441Props} />
        <Checkbox className={checkbox5Props.className} frame1441Props={checkbox5Props.frame1441Props} />
        <Checkbox className={checkbox6Props.className} frame1441Props={checkbox6Props.frame1441Props} />
      </Frame1321>
    </div>
  );
}

const Frame1370 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 0px 12px;
  position: relative;
  align-self: stretch;
`;

const Frame1369 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 9px 12px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--text);
`;

const SelectFocusAreas = styled.div`
  ${IbmplexsansNormalMountainMist16px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Line34 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 252px;
  height: 1px;
  object-fit: cover;
`;

const Frame1321 = styled.div`
  display: flex;
  flex-direction: column;
  width: 252px;
  align-items: flex-start;
  gap: 12px;
  padding: 0px 20px;
  position: relative;
`;

export default SelectFocusArea;
