import React from 'react';
import { PopupBackground, PopupContainer, Text, ButtonContainer } from './style';
import OutlineBtn from '../Buttons/OutlineBtn';

const PopupWithoutCloseIcon = ({text, onYes, onNo}) => {
  return (
    <PopupBackground onClick={onNo}>
      <PopupContainer onClick={(event) => event.stopPropagation()}>
        <Text>{text}</Text>
        <ButtonContainer>
          <OutlineBtn text="Yes" leftIcon={'img/like.svg'} leftIconHover={'img/likeWhite.svg'} onClose={onYes} />
          <OutlineBtn text="No" leftIcon={'img/dislike.svg'} leftIconHover={'img/dislikewhite.svg'} onClose={onNo} />
        </ButtonContainer>
      </PopupContainer>
    </PopupBackground>
  );
};

export default PopupWithoutCloseIcon;
