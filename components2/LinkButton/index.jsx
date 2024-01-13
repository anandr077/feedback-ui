import React from 'react';
import {
  ButtonContainer,
  ButtonIcon,
  ButtonIconWhite,
  ButtonText,
} from './style';

function LinkButton({
  arrowright,
  arrowleft,
  link,
  label,
  whiteArrowleft,
  whiteArrowright,
}) {
  return (
    <a href={link}>
      <ButtonContainer>
        {arrowleft ? <ButtonIcon src={arrowleft} /> : <></>}
        {whiteArrowleft ? <ButtonIconWhite src={whiteArrowleft} /> : <></>}
        <ButtonText>{label}</ButtonText>
        {arrowright ? <ButtonIcon src={arrowright} /> : <></>}
        {whiteArrowright ? <ButtonIconWhite src={whiteArrowright} /> : <></>}
      </ButtonContainer>
    </a>
  );
}

export default LinkButton;
