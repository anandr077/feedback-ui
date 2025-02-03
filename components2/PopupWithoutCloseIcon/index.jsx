import React from 'react';
import { PopupBackground, PopupContainer, Text, ButtonContainer } from './style';
import OutlineBtn from '../Buttons/OutlineBtn';

const PopupWithoutCloseIcon = ({text, onYes, onNo, onClickOutside}) => {
  return (
    <PopupBackground onClick={onClickOutside}>
      <PopupContainer onClick={(event) => event.stopPropagation()}>
        <Text>{text}</Text>
        <ButtonContainer>
          <OutlineBtn text="Yes" leftIcon={'img/like.svg'} leftIconHover={'img/likeWhite.svg'} onClose={onYes} />
          <OutlineBtn text="No" leftIcon={'img/dislike.svg'} leftIconHover={'img/dislikewhite.svg'} onClose={onNo} />
        </ButtonContainer>
        <Text>
          <a 
          style={{color: 'var(--light-mode-purple)'}}
          href="mailto:ai@jeddle.com">Report</a>
        </Text>
      </PopupContainer>
    </PopupBackground>
  );
};

export default PopupWithoutCloseIcon;
