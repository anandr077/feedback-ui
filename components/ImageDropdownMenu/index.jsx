import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import styled, { css } from "styled-components";
import ListItemText from "@mui/material/ListItemText";
import { Avatar } from "@boringer-avatars/react";
import { Popover } from '@mui/material';

import {IbmplexsansNormalBlack16px} from "../../styledMixins";
import { IbmplexsansNormalBlack16px } from "../../styledMixins";
import { Avatar } from "@boringer-avatars/react";
import CheckboxBordered from "../CheckboxBordered";
export const ImageDropdownMenu = (props) => {
  // const menuItems = [
  //   {id: 1, title:"View Profile", onClick:()=>console.log("V")},
  //   {id: 2, title:"A", onClick:()=>console.log("A")},
  //   {id: 3, title:"VVVV", onClick:()=>console.log("V")},
  //   {id: 4, title:"DDDD", onClick:()=>console.log("FFF")},
  // ]
  // const {   onItemSelected, withCheckbox } = props;
  const { selectedIndex, menuItems, onItemSelected, withCheckbox, showAvatar, small, fullWidth, primaryText } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedItem, setSelectedItem] = React.useState(selectedIndex === undefined?menuItems[0]:menuItems[selectedIndex]);
  const menuRef = React.useRef(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  React.useEffect(() => {
    setSelectedItem(menuItems[selectedIndex] || menuItems[0]);
  }, [selectedIndex]);
 
  const handleClose = (item) => {
    if (item) {
      setSelectedItem(item);
      setAnchorEl(null);
      if (item.link) {
        window.location.href = item.link;
         window.location.reload();
        return 
      }
      if (item.onClick) {
        item.onClick(item);
        return 
      }
      if (onItemSelected) {
        onItemSelected(item);
      }
    } else {
      setSelectedItem(menuItems[0]);
      setAnchorEl(null);
    }
  };

  return (
    <div style={fullWidth ? { width: "100%" } : {}}>
    <StyledBox style={fullWidth ? { borderColor: "var(--text)" } : { borderColor: "var(--light-mode-purple)"}}>
     { small ?
     <FlexContainerSmall onClick={handleClick}>
     <IconButton
       edge="start"
       color="inherit"
       aria-label="menu"
       onClick={handleClick}
     >
       {createImageFrame(selectedItem, showAvatar)}
     </IconButton>
     <div className="text-container" onClick={handleClick}>
       <p>
         <StyledListItemText primary={selectedItem.title || selectedItem.name} />
       </p>
     </div>
     <IconButton onClick={handleClick}>
       <Frame12841 src="/img/frame-1284@2x.png" alt="Frame 1284" />
     </IconButton>
   </FlexContainerSmall>
     :<FlexContainer onClick={handleClick}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
        >
          {createImageFrame(selectedItem, showAvatar)}
        </IconButton>
        <div className="text-container" onClick={handleClick}>
          <p>
            <StyledListItemText primary=  {primaryText ? primaryText:( selectedItem.title || selectedItem.name)} />
          </p>
        </div>
        <IconButton onClick={handleClick}>
          <Frame12841 src="/img/frame-1284@2x.png" alt="Frame 1284" />
        </IconButton>
      </FlexContainer>
      }
    </StyledBox>
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={() => setAnchorEl(null)}
      anchorOrigin={ fullWidth? {
        vertical: 'bottom',
      }:{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={ fullWidth? {
        vertical: 'top',
      }:{
        vertical: 'top',
        horizontal: 'right',
      }}
      getContentAnchorEl={null}
      ref={menuRef}
    >
      {menuItems.map((item) => (
        <StyledMenuItem key={item.id} onClick={() => handleClose(item)}>
          {withCheckbox && <CustomCheckbox />}
          {createImageFrame(item, showAvatar)}
          <div className="text-container">
            <p>
              <StyledListItemText primary={item.title || item.name} />
            </p>
          </div>
        </StyledMenuItem>
      ))}
    </Menu>
    <style>{`
      .text-container {
        display: flex;
        align-items: center;
        cursor: pointer;
      }
  
      .text-container:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
  
      .text-container p {
        margin: 0;
      }
    `}</style>
  </div>
  );
};

export const IbmplexsansNormalShark16px = css`
  color: var(--text);
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-xs);
  font-weight: 400;
  font-style: normal;
`;
const StyledMenuItem = styled(MenuItem)`
display: flex;
  gap: 12px;
  
  align-items: center;
  padding: 0px 0px 0px 12px;
  position: relative;
  background-color: var(--white);
  border-radius: 8px;
  border: 1px solid;
  border-color: var(--light-mode-purple);
  box-shadow: 0px 4px 8px #2f1a720a;
  cursor: pointer;
  color: var(--text);
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-xs);
  font-weight: 400;
  font-style: normal;
  .MuiTypography-root {
    ${IbmplexsansNormalShark16px}
    font-size: 14px;
  }
`;

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 12px;
  position: relative;
  background-color: var(--white);
  border-radius: 8px;
  border: 1px solid;
  border-color: var(--light-mode-purple);
  box-shadow: 0px 4px 8px #2f1a720a;
  cursor: pointer;
  color: var(--text);
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-xs);
  font-weight: 400;
  font-style: normal;
  .MuiTypography-root {
    ${IbmplexsansNormalShark16px}
    font-size: 14px;
  }
`;

const FlexContainer = styled('div')`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-grow: 1;
  .text-container {
    display: inline-block;
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const FlexContainerSmall = styled('div')`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-grow: 1;
  max-width: 250px;
  .text-container {
    display: inline-block;
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const StyledIconButton = styled(IconButton)`
  width: 100%;
  margin: 0;
`;

const StyledListItemText = styled(ListItemText)`
  ${IbmplexsansNormalShark16px}
  position: relative;
  flex: 1;

  letter-spacing: 0;
  line-height: normal;
  border-radius: 50%;

  .MuiTypography-root {
    ${IbmplexsansNormalShark16px}
    font-size: 14px;
  }
`;
const Frame12841 = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;
export default ImageDropdownMenu;
function createImageFrame(selectedItem, showAvatar) {
  if (selectedItem.image) {
    return  <Frame12841 src={selectedItem.image} alt="Frame 1284" />
  }
  if (!showAvatar)
    return <></>
  return <Avatar
    title={false}
    size={25}
    variant="beam"
    name={selectedItem.title}
    square={false} />;
}

