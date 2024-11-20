import React from 'react'
import { StyledCloseButton } from './style';
import CloseIcon from '../../../static/img/closecircle24gray.svg'

const CloseButton = ({onclickFn}) => {
  return (
    <StyledCloseButton onClick={onclickFn}>
        <img src={CloseIcon} />
    </StyledCloseButton>
  )
}

export default CloseButton