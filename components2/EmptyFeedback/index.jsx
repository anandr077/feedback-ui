import React from 'react'
import Message from '../../static/img/gray_messages.svg'
import {
  EmptyFeedbackContainer
} from './style'

const EmptyFeedback = ({text}) => {
  return (
    <EmptyFeedbackContainer>
        <img src={Message} />
        <p>{text.comment}</p>
    </EmptyFeedbackContainer>
  )
}

export default EmptyFeedback