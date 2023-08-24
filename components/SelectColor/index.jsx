import React from 'react';
import Checkbox from '../Checkbox';
import styled from 'styled-components';
import './SelectColor.css';

function SelectColor(props) {
  const {
    pickAColourForFocusArea,
    line34,
    checkbox1Props,
    checkbox2Props,
    checkbox3Props,
    checkbox4Props,
    checkbox5Props,
    checkbox6Props,
    checkbox7Props,
    checkbox8Props,
    checkbox9Props,
    checkbox10Props,
    checkbox11Props,
    checkbox12Props,
    checkbox13Props,
    checkbox14Props,
  } = props;

  return (
    <div className="select-color screen">
      <Frame1321>
        <Frame1369>
          <PickAColourForFocusArea>
            {pickAColourForFocusArea}
          </PickAColourForFocusArea>
        </Frame1369>
      </Frame1321>
      <Line34 src={line34} alt="Line 34" />
      <Frame13211>
        <Checkbox>{checkbox1Props.children}</Checkbox>
        <Checkbox className={checkbox2Props.className}>
          {checkbox2Props.children}
        </Checkbox>
        <Checkbox className={checkbox3Props.className}>
          {checkbox3Props.children}
        </Checkbox>
        <Checkbox className={checkbox4Props.className}>
          {checkbox4Props.children}
        </Checkbox>
        <Checkbox className={checkbox5Props.className}>
          {checkbox5Props.children}
        </Checkbox>
        <Checkbox className={checkbox6Props.className}>
          {checkbox6Props.children}
        </Checkbox>
        <Checkbox className={checkbox7Props.className}>
          {checkbox7Props.children}
        </Checkbox>
        <Checkbox className={checkbox8Props.className}>
          {checkbox8Props.children}
        </Checkbox>
        <Checkbox className={checkbox9Props.className}>
          {checkbox9Props.children}
        </Checkbox>
        <Checkbox className={checkbox10Props.className}>
          {checkbox10Props.children}
        </Checkbox>
        <Checkbox className={checkbox11Props.className}>
          {checkbox11Props.children}
        </Checkbox>
        <Checkbox className={checkbox12Props.className}>
          {checkbox12Props.children}
        </Checkbox>
        <Checkbox className={checkbox13Props.className}>
          {checkbox13Props.children}
        </Checkbox>
        <Checkbox className={checkbox14Props.className}>
          {checkbox14Props.children}
        </Checkbox>
      </Frame13211>
    </div>
  );
}

const Frame1321 = styled.div`
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

const PickAColourForFocusArea = styled.p`
  position: relative;
  flex: 1;
  margin-top: -1px;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  color: #979797;
  font-size: var(--font-size-m);
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Line34 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 281px;
  height: 1px;
  object-fit: cover;
`;

const Frame13211 = styled.div`
  display: flex;
  flex-direction: column;
  width: 281px;
  align-items: flex-start;
  gap: 20px;
  padding: 0px 20px;
  position: relative;
`;

export default SelectColor;
