import React from 'react'
import {
    BtnContainer,
} from './style'

const RoundedBorderLeftIconBtn = ({leftIcon, btnText, onclick}) => {
  return (
    <BtnContainer onClick={onclick}>
       <img src={leftIcon} />
       <span>{btnText}</span>
    </BtnContainer>
  )
}

export default RoundedBorderLeftIconBtn