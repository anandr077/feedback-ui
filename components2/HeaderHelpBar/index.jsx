import React from 'react';
import { IconContainer, HelpImg } from './style';

const HeaderHelpBar = ({ src, onClickFn }) => {
  return (
    <IconContainer onClick={onClickFn}>
      <HelpImg src={src} />
    </IconContainer>
  );
};

export default HeaderHelpBar;