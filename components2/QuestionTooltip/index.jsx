import React from 'react'
import {
    TitleImage,
    TooltipContainer
} from './style'
import { Tooltip } from '@mui/material'

const QuestionTooltip = ({text, img}) => {

  return (
    <TooltipContainer>
        <Tooltip title={text} placement={"top"}>
          <TitleImage src={img} />
        </Tooltip>
    </TooltipContainer>
  )
}

export default QuestionTooltip