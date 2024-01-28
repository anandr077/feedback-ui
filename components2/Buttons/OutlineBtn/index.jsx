import React from 'react';
import { ButtonContainer } from './style';

const OutlineBtn = ({
  text,
  leftIcon = null,
  leftIconHover = null,
  onClose = () => {},
}) => {
  return (
    <ButtonContainer onClick={onClose}>
      {leftIcon && <img src={leftIcon} className="leftIcon" />}
      {leftIconHover && <img src={leftIconHover} className="leftIconHover" />}
      {text}
    </ButtonContainer>
  );
};

export default OutlineBtn;
