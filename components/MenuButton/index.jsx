import React from 'react';
import { TasksImg, TitleHeading } from './style';
import MenuNavIcon from '../../static/icons/Menu-nav-icon.svg';

function MenuButton({ setShowMenu }) {
  return (
    <TitleHeading onClick={() => setShowMenu(true)}>
      <TasksImg src={MenuNavIcon} />
    </TitleHeading>
  );
}

export default MenuButton;
