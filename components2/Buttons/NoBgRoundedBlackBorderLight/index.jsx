import React, { useState } from 'react';
import styled from 'styled-components';

const NoBgRoundedBlackBorderLight = ({
  leftIcon = '',
  rightIcon = '',
  disabled = false,
  text,
  onclick,
}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    setClicked((prev) => !prev);

    if (onclick) {
      onclick(e);
    }
  };

  return (
    <QuestionBtn onClick={handleClick} clicked={clicked}>
      {leftIcon && <img src={leftIcon} />}
      <span>{text}</span>
      {rightIcon && <img src={rightIcon} />}
    </QuestionBtn>
  );
};

export default NoBgRoundedBlackBorderLight;

export const QuestionBtn = styled.button`
  min-width: 85px;
  justify-content: center;
  gap: 6px;
  font-family: var(--font-family-ibm_plex_sans);
  white-space: nowrap;
  background-color: ${(props) => (props.clicked ? '#51009F' : 'transparent')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  font-size: 13px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  color: ${(props) => (props.clicked ? '#FFFFFF' : '#7b7382')};
  text-align: center;
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 25px;
  border: 1px solid ${(props) => (props.clicked ? '#8E33E6' : '#7b7382')} ;
  cursor: pointer;

  img {
    height: 16px;
    width: 16px;
  }
`;
