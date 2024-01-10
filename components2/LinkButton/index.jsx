import React from 'react'
import { ButtonContainer, ButtonIcon, ButtonText } from './style';

function LinkButton({ arrowright, arrowleft, link, label }) {
  return (
    <a href={link}>
      <ButtonContainer>
        {arrowleft ? <ButtonIcon src={arrowleft} /> : <></>}
        <ButtonText>{label}</ButtonText>
        {arrowright ? <ButtonIcon src={arrowright} /> : <></>}
      </ButtonContainer>
    </a>
  );
}

export default LinkButton