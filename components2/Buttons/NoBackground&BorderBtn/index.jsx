import React from 'react';
import { ButtonContainer } from './style';

const NoBackgroundAndBorderBtn = ({
  text,
  leftIcon = null,
  onclick,
  isDisabled = false,
}) => {
  return (
    <ButtonContainer
      onClick={onclick}
      disabled={isDisabled}
      isDisabled={isDisabled}
    >
      {leftIcon && <img src={leftIcon} />}
      <span>{text}</span>
    </ButtonContainer>
  );
};

export default NoBackgroundAndBorderBtn;
