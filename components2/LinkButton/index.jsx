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
  notification,
}) {
  return (
    <a href={link} style={{ textDecoration: 'none' }}>
      <ButtonContainer notification={notification}>
        {arrowleft ? <ButtonIcon src={arrowleft} /> : <></>}
        {whiteArrowleft ? <ButtonIconWhite src={whiteArrowleft} /> : <></>}
        <ButtonText notification={notification}>{label}</ButtonText>
        {arrowright ? (
          <ButtonIcon notification={notification} src={arrowright} />
        ) : (
          <></>
        )}
        {whiteArrowright ? (
          <ButtonIconWhite notification={notification} src={whiteArrowright} />
        ) : (
          <></>
        )}
      </ButtonContainer>
    </a>
  );
}

export default LinkButton;
