import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import styled, { css } from "styled-components";
import ListItemText from "@mui/material/ListItemText";
import { Avatar } from "@boringer-avatars/react";

import { Avatar } from "@boringer-avatars/react";
import CheckboxBordered from "../CheckboxBordered";
export const ImageDropdownMenu = (props) => {
  // const menuItems = [
  //   {id: 1, title:"View Profile", onClick:()=>console.log()},
  //   {id: 2, title:"A", onClick:()=>console.log()},
  //   {id: 1, title:"VVVV", onClick:()=>console.log()},
  //   {id: 1, title:"DDDD", onClick:()=>console.log()},
  // ]
  const { menuItems, onItemSelected, withCheckbox } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedItem, setSelectedItem] = React.useState(menuItems[0]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (item) => {
    setSelectedItem(item);
    setAnchorEl(null);
    if (item.link) {
      window.location.href = item.link
    }
    if (onItemSelected) {
      onItemSelected(item);
    }
  };

  return (
    <div>
      <StyledBox>
        {" "}
        <StyledIconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
        >
          <Avatar
          title={false}
          size={25}
          variant="beam"
          name={selectedItem.title}
          square={false}
        />
          <StyledListItemText primary={selectedItem.title} />
          <Frame12841 src="/img/frame-1284@2x.png" alt="Frame 1284" />
        </StyledIconButton>
      </StyledBox>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        //onClose={handleClose}
      >
        {menuItems.map((item) => (
          <MenuItem key={item.id} onClick={() => handleClose(item)}>
            {withCheckbox && <CheckboxBordered />}
            <Avatar
              title={false}
              size={25}
              variant="beam"
              name={selectedItem.title}
              square={false}
            />
            <ListItemText primary={item.title} />

            {/* <Avatar name="test" /> */}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
const StyledBox = styled(Box)`
  display: flex;
  width: 370px;
  align-items: center;
  gap: 8px;
  jystify-content: space-between;
  padding: 0px 0px 0px 12px;
  position: relative;
  background-color: var(--white);
  border-radius: 8px;
  border: 1px solid;
  border-color: var(--blue-chalk);
  box-shadow: 0px 4px 8px #2f1a720a;
  cursor: pointer;
`;
const StyledIconButton = styled(IconButton)`
  width: 100%;
  margin: 0;
`;

const Frame12851 = styled.div`
  display: flex;
  width: 336px;
  align-items: center;
  gap: 8px;
  padding: 12px;
  position: relative;
  background-color: var(--white);
  border-radius: 8px;
  border: 1px solid;
  border-color: var(--blue-chalk);
  box-shadow: 0px 4px 8px #2f1a720a;
  cursor: pointer;
`;
export const IbmplexsansNormalShark16px = css`
  color: var(--text);
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-xs);
  font-weight: 400;
  font-style: normal;
`;
const StyledListItemText = styled(ListItemText)`
  ${IbmplexsansNormalShark16px}
  position: relative;
  flex: 1;

  letter-spacing: 0;
  line-height: normal;
`;
const X12ENGADV3 = styled.div`
  ${IbmplexsansNormalShark16px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;
const Frame12841 = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;
export default ImageDropdownMenu;
