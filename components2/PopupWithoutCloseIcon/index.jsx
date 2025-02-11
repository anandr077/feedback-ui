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
            href="mailto:ai@jeddle.com?subject=Report%20an%20Issue%20with%20JeddAI&body=Please%20describe%20the%20issue%20you%20are%20reporting%20below,%20and%20include%20screenshots%20where%20possible:">
            Report
          </a>
        </Text>
      </PopupContainer>
    </PopupBackground>
  );
};

export default PopupWithoutCloseIcon;
