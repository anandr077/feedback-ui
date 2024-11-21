import React from 'react';
import { Title, MenuContainer, MenuButton, SidebarContainer } from './style';
import GrayBackgroundBtn from '../Buttons/GrayBackgroundBtn';
import { profileStateYear } from '../../service';
import { setLocalStorage } from '../../utils/function';

const SideMenuBar = ({
  menuTitle,
  menuItems,
  onClickMenuItem,
  currentItem,
  onCloseOnboarding
}) => {
  const year = 2024;
  const state = 'NSW'

  const lastItem = currentItem === menuItems.length - 1;
  const handleNext = () => {
    if (lastItem) {
      profileStateYear({
        year: year,
        state: state,
      }).then(() => {
        setLocalStorage('state', state);
        setLocalStorage('year', year);
        onCloseOnboarding(); 
      });
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
        onClickFn={handleNext}
      />
    </SidebarContainer>
  );
};

export default SideMenuBar;
