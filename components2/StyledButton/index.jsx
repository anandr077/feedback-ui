import React from 'react'
import { ButtonContainer, ButtonIcon, ButtonText } from './style';

function StyledButton({URL,Text,Icon}) {
  return (
    <>
      <ButtonContainer href={URL}>
        <ButtonText>{Text}</ButtonText>
        <ButtonIcon src={Icon} />
      </ButtonContainer>
    </>
  );
}

export default StyledButton