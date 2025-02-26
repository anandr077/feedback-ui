import React from 'react';
import { ButtonContainer, Icon } from './style';

const UnderlinedGrayBtn = ({ text, onclick, rightIcon = null }) => {
  return (
    <ButtonContainer onClick={onclick}>
      {text} {rightIcon && <Icon src={rightIcon} />}
    </ButtonContainer>
  );
};

export default UnderlinedGrayBtn;
