import React from 'react'
import {
    ButtonContainer,
    IconImg,
    Button
} from './style'

const Button5 = ({button, onClickFn, icon}) => {
  return (
    <ButtonContainer onClick={onClickFn}>
        {icon && <IconImg src={icon} />}
        <Button>{button}</Button>
    </ButtonContainer>
  )
}

export default Button5