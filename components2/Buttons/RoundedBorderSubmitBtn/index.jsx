import React from 'react';
import { ButtonContainer, LeftImage } from './style';

const RoundedBorderSubmitBtn = ({
  leftIcon = null,
  rightIcon = null,
  text,
  onClickFn,
}) => {
  return (
    <ButtonContainer onClick={onClickFn}>
      {leftIcon && <LeftImage src={leftIcon} />}
      {text}
      {rightIcon && <img src={rightIcon} />}
    </ButtonContainer>
  );
};

export default RoundedBorderSubmitBtn;
