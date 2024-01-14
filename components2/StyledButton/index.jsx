import React from 'react';
import { ButtonContainer, ButtonIcon, ButtonText } from './style';

function StyledButton({ URL, Text, Icon, onAccept }) {
  const redircetFun = (url) => {
    onAccept && onAccept();
    window.location.href = url;
  };
  return (
    <>
      <ButtonContainer onClick={() => redircetFun(URL)}>
        <ButtonText>{Text}</ButtonText>
        <ButtonIcon src={Icon} />
      </ButtonContainer>
    </>
  );
}

export default StyledButton;
