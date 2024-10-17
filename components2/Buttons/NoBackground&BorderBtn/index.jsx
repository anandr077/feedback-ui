import React from 'react';
import { ButtonContainer } from './style';

const NoBackgroundAndBorderBtn = ({ text, leftIcon = null, onclick }) => {
  return (
    <ButtonContainer onClick={onclick}>
      {leftIcon && <img src={leftIcon} />}
      <span>{text}</span>
    </ButtonContainer>
  );
};

export default NoBackgroundAndBorderBtn;
