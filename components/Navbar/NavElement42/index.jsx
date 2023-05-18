import React from "react";
import Group1 from "../Group1";
import styled from "styled-components";

function NavElement42(props) {
  const { button } = props;
  const icon = button.selected ? button.iconSelected : button.icon;
  if (button.selected) {
    return (
      <a href={button.redirect}>
        <NavElement>
          <Group1
            isSelected={button.selected}
            iconHome={icon}
            text={button.text}
          />
        </NavElement>
      </a>
    );
  } else {
    return (
      <a href={button.redirect}>
        <UnselectedNavElement>
          <Group1
            isSelected={button.selected}
            iconHome={icon}
            text={button.text}
          />
        </UnselectedNavElement>
      </a>
    );
  }
}

const NavElement = styled.article`
  position: relative;
  display: flex;
  align-self: stretch;
  
  height: 54px;
  background-color: var(--royal-purple);
  border-radius: 26.5px;
  cursor: pointer;
`;

const UnselectedNavElement = styled.article`
  position: relative;
  display: flex;
  align-self: stretch;
 
  height: 54px;
  border-radius: 26.5px;
`;
export default NavElement42;
