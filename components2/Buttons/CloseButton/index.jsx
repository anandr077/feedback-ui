import React from 'react'
import { CloseModal } from './style';
import CloseIcon from '../../../static/img/closecircle24gray.svg'

const CloseButton = ({onclickFn}) => {
  return (
    <CloseModal onClick={onclickFn}>
        <img src={CloseIcon} />
    </CloseModal>
  )
}

export default CloseButton