import React from 'react';
import {
  ButtonContainer,
  ButtonIcon,
  ButtonIconColored,
  ButtonText,
} from './style';

function StyledButton({ URL, Text, Icon, onAccept, ColoredIcon }) {
  const redircetFun = (url) => {
    onAccept && onAccept();
    window.location.href = url;
  };
  return (
    <>
      <ButtonContainer onClick={() => redircetFun(URL)}>
        <ButtonText>{Text}</ButtonText>
        <ButtonIcon src={Icon} />
        {ColoredIcon ? <ButtonIconColored src={ColoredIcon} /> : <></>}
      </ButtonContainer>
    </>
  );
}

export default StyledButton;
