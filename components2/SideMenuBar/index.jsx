import React from 'react';
import { Title, MenuContainer, MenuButton, SidebarContainer } from './style';
import GrayBackgroundBtn from '../Buttons/GrayBackgroundBtn';

const SideMenuBar = ({
  menuTitle,
  menuItems,
  onClickMenuItem,
  currentItem,
  onCloseOnboarding
}) => {

  const lastItem = currentItem === menuItems.length - 1;
  const handleNextButtonClick = () => {
    if (lastItem) {
      onCloseOnboarding(); 
    } else {
      onClickMenuItem((prevIdx) => prevIdx + 1); 
    }
  };

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
        buttonText={lastItem ? 'Finish' : 'Next'}
        onClickFn={handleNextButtonClick}
      />
    </SidebarContainer>
  );
};

export default SideMenuBar;
