import React from 'react'
import MessageIcon from '../../static/img/gray_messages.svg'
import {
  EmptyFeedbackContainer
} from './style'

const EmptyFeedback = ({text}) => {
  return (
    <EmptyFeedbackContainer>
        <img src={MessageIcon} />
        <p>{text.comment}</p>
    </EmptyFeedbackContainer>
  )
}

export default EmptyFeedback