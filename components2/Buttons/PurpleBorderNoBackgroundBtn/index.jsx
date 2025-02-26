import React from 'react';
import { ButtonContainer } from './style';

const PurpleBorderNoBackgroundBtn = ({ leftIcon = null, text, onclick }) => {
  return (
    <ButtonContainer onClick={onclick}>
      {leftIcon && <img src={leftIcon} />}
      {text}
    </ButtonContainer>
  );
};

export default PurpleBorderNoBackgroundBtn;
