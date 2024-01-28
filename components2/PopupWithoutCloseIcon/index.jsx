import React from 'react';
import { PopupBackground, PopupContainer, Text, ButtonContainer } from './style';
import OutlineBtn from '../Buttons/OutlineBtn';

const PopupWithoutCloseIcon = ({text, onYes, onNo}) => {
  return (
    <PopupBackground>
      <PopupContainer>
        <Text>{text}</Text>
        <ButtonContainer>
          <OutlineBtn text="Yes" leftIcon={'img/like.svg'} leftIconHover={'img/likeWhite.svg'} onClose={onYes} />
          <OutlineBtn text="No" leftIcon={'img/dislike.svg'} leftIconHover={'img/dislikeWhite.svg'} onClose={onNo} />
        </ButtonContainer>
      </PopupContainer>
    </PopupBackground>
  );
};

export default PopupWithoutCloseIcon;
