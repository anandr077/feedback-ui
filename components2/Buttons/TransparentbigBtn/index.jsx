import React from 'react';
import { ButtonContainer, ButtonText } from './style';

const TransparentbigBtn = ({
  leftIcon = null,
  rightIcon = null,
  text,
  onClickFn,
}) => {
  return (
    <ButtonContainer onClick={onClickFn}>
      {leftIcon && <img src={leftIcon} />}
      <ButtonText>{text}</ButtonText>
      {rightIcon && <img src={rightIcon} />}
    </ButtonContainer>
  );
};

export default TransparentbigBtn;
