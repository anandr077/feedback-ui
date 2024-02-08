import React from 'react'
import {
    TitleImage,
    TooltipContainer,
} from './style'
import { IconButton, Tooltip } from '@mui/material';

const QuestionTooltip = ({tooltipText, tooltipIcon}) => {


  return (
    <TooltipContainer>
        <Tooltip title={tooltipText} placement='top' arrow>
           <IconButton>
           <TitleImage src={tooltipIcon} />
           </IconButton>
        </Tooltip>
    </TooltipContainer>
  )
}

export default QuestionTooltip