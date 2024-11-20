import React from 'react';
import {Button} from './style';

const GrayBackgroundBtn = ({buttonText, onClickFn}) => {
  return (
    <Button onClick={onClickFn}>{buttonText}</Button>
  )
}

export default GrayBackgroundBtn