import React from 'react';
import { ButtonContainer, LeftImage } from './style';

const RoundedBorderSubmitBtn = ({
  leftIcon = null,
  rightIcon = null,
  text,
  onClickFn,
  isDisabled = false,
}) => {
  return (
    <ButtonContainer
      onClick={onClickFn}
      disabled={isDisabled}
    >
      {leftIcon && <LeftImage src={leftIcon} />}
      {text}
      {rightIcon && <img src={rightIcon} />}
    </ButtonContainer>
  );
};

export default RoundedBorderSubmitBtn;
