import React from 'react'
import {
  ButtonContainer
} from './style';

const UnderlinedGrayBtn = ({text, onclick}) => {
  return (
    <ButtonContainer onClick={onclick}>{text}</ButtonContainer>
  )
}

export default UnderlinedGrayBtn