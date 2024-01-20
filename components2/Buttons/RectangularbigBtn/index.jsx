import React from 'react';
import { ButtonContainer } from './style';

const RectangularBigBtn = ({
  leftIcon = null,
  rightIcon = null,
  text,
  onClickFn,
}) => {
  return (
    <ButtonContainer onClick={onClickFn}>
      {leftIcon && <img src={leftIcon} />}
      {text}
      {rightIcon && <img src={rightIcon} />}
    </ButtonContainer>
  );
};

export default RectangularBigBtn;
