import React from 'react';
import {
    DocBtn,
    DocBtnImg,
    DocBtnText
} from './style'

const ButtonTooltip = ({
    document,
    buttonAction,
    buttonText,
    btnIcon
}) => {
  return (
    <DocBtn onClick={(e) => {
        e.preventDefault();
        buttonAction(document);
        e.stopPropagation();
      }}>
        <DocBtnImg src={btnIcon} alt={btnIcon} />
        <DocBtnText>{buttonText}</DocBtnText>
        <span>{buttonText}</span>
    </DocBtn>
  )
}

export default ButtonTooltip