import React from 'react';
import { Button, LeftIcon } from './style';
import RightIcon from '../../../static/img/arrowright-White.svg';

const GrayBackgroundBtn = ({
  buttonText,
  onClickFn,
  isDisable = false,
  showRightIcon = false,
  showLeftIcon = false,
}) => {
  return (
    <Button onClick={isDisable ? null : onClickFn} disabled={isDisable}>
      {showLeftIcon && <LeftIcon src={RightIcon} />}
      {buttonText}
      {showRightIcon && <img src={RightIcon} />}
    </Button>
  );
};

export default GrayBackgroundBtn;
