import React from 'react';
import { Title, MenuContainer, MenuButton, SidebarContainer } from './style';
import GrayBackgroundBtn from '../Buttons/GrayBackgroundBtn';

const SideMenuBar = ({
  menuTitle,
  menuItems,
  onClickMenuItem,
  currentItem,
  handlePreviousButtonClick
}) => {

  return (
    <SidebarContainer>
      <Title>{menuTitle}</Title>
      <MenuContainer>
        {menuItems.map((item, idx) => {
          return (
            <MenuButton
              highlight={idx === currentItem}
              onClick={() => onClickMenuItem(idx)}
            >
              {item}
            </MenuButton>
          );
        })}
      </MenuContainer>

      <GrayBackgroundBtn
        buttonText={'Previous'}
        onClickFn={handlePreviousButtonClick}
        showLeftIcon={true}
      />
    </SidebarContainer>
  );
};

export default SideMenuBar;
