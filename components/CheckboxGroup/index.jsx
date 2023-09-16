import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import styled from 'styled-components';
import { IbmplexsansNormalShark20px } from '../../styledMixins';
import CheckboxBordered from '../CheckboxBordered';
import './index.css';
import { IbmplexsansNormalShark16px } from '../../styledMixins';
import editIcon from '../../static/icons/taskEditicon.png';
import colored from '../../static/icons/ColoredEditIcon.png';
import deleteIcon from '../../static/icons/taskDeleteIcon.png';
import ColoredTrascan from '../../static/icons/ColoredTrascan.png';
// import BorderColorIcon from '@mui/icons-material/BorderColor';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const CheckboxGroup = ({
  data,
  onChange,
  dropDownText,
  addCreateNewButton,
  backgroundColor,
  textColor,
  openDialogForNewEvent,
  previouslySelectedItems = [],
}) => {
  const [selectedItems, setSelectedItems] = React.useState(
    previouslySelectedItems
  );
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [hover, setHover] = React.useState(false);
  const [editHover, setEditHover] = React.useState(Array.from({ length: (data[0].items.length) }, () => false));
  const [trashHover, setTrashHover] = React.useState(Array.from({ length: (data[0].items.length) }, () => false));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (event, value, category) => {
    event.stopPropagation();
    const currentIndex = selectedItems.findIndex(
      (item) => item.value === value
    );
    const newSelectedItems = [...selectedItems];

    if (currentIndex === -1) {
      newSelectedItems.push({ value, category });
    } else {
      newSelectedItems.splice(currentIndex, 1);
    }

    setSelectedItems(newSelectedItems);
    if (onChange) {
      onChange(newSelectedItems);
    }
  };

  const handleMouseEnter =(index,state) => {
    if(state){
      const updatedElements = [...editHover];
    updatedElements[index] = true;
    setEditHover(updatedElements);
    }
    else{
      const updatedElements = [...trashHover];
    updatedElements[index] = true;
    setTrashHover(updatedElements);

    }
    
  };
  const handleMouseLeave =(index,state) => {
    if(state){
         const updatedElements = [...editHover];
    updatedElements[index] = false;
    setEditHover(updatedElements);
    }
    else{
      const updatedElements = [...trashHover];
    updatedElements[index] = false;
    setTrashHover(updatedElements);
    }
 

  };

  const menuContent = data.flatMap((category, index) => [
    <StyledListSubheader key={`category-${index}`}>
      {category.title}
    </StyledListSubheader>,
    ...category.items?.map((item,index) => (
      <FocusAreadiv>
      <StyledMenuItem
        key={item.value.title}
        onClick={(event) =>
          handleMenuItemClick(event, item.value, category.name)
        }
      >
        <CheckboxContainer>
          <CheckboxBordered
            checked={selectedItems.some(
              (selectedItem) => selectedItem.value === item.value
            )}
          />
          <CheckBoxText>{item.value.title}</CheckBoxText>
        </CheckboxContainer>
        {focusAreaColor(item)}
        <StyledListItemText primary={item.label} />
      </StyledMenuItem>
      <Icondiv>
        {/* <StyledEditButton src={editHover[index] ? colored : editIcon} onMouseEnter={() => handleMouseEnter(index,true)}
        onMouseLeave={() => handleMouseLeave(index,true)} /> */}
        <StyledDeleteButton src={trashHover[index]? ColoredTrascan :deleteIcon} onMouseEnter={() => handleMouseEnter(index,false)}
        onMouseLeave={() => handleMouseLeave(index,false)} />
        </Icondiv>
      </FocusAreadiv>
      
    )),
  ]);

  return (
    <>
      <FormControl sx={{ m: 1 }}>
        <StyledBox backgroundColor={backgroundColor}>
          <FlexContainer onClick={handleClick}>
            <StyledIconButton onClick={handleClick}>
              <StyledListItemText textColor={textColor}>
                {filterText(selectedItems, dropDownText)}
              </StyledListItemText>
            </StyledIconButton>
          </FlexContainer>
        </StyledBox>
        <Menu
          id="grouped-select"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'grouped-select',
          }}
        >
          <div className="customMenuContent">{menuContent}</div>
          {addCreateNewInstanceButton(
            addCreateNewButton,
            openDialogForNewEvent
          )}
        </Menu>
      </FormControl>
    </>
  );
};

export default CheckboxGroup;
const StyledMenuItem = styled(MenuItem)`
  display: flex;
  // flex-Wrap: wrap;
  gap: 6px;
  width: 250px;
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
  justify-content: flex-end;
  max-width: 200px;
  margin-right: 10px;
  // height:40px;
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.backgroundColor || 'var(--white)'};
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
  // display: flex;
  // align-items: center;
  // // gap: 8px;
  // flex-grow: 1;

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
  && {
    padding: 3px 10px 3px 10px;
  }
`;

const StyledListItemText = styled(ListItemText)`
  ${IbmplexsansNormalShark16px}
  position: relative;
  flex: 1;
  // border:2px solid yellow;
  // background-Color:blue;
  // display:flex;
  // flex-Wrap: wrap;

  // letter-spacing: 0;
  // line-height: normal;
  // border-radius: 50%;
  // span{
  //   flex-wrap:wrap;
  //   background-Color:blue;
  // }

  .MuiTypography-root {
    color: ${(props) => props.textColor || "var(--text)"};
    white-space: normal; 
  }
  .MuiButtonBase-root {
    padding: 0px;
  }
`;
const StyledListSubheader = styled(ListSubheader)`
  ${IbmplexsansNormalShark20px}
  position: relative;
  margin-top: -1px;
  letter-spacing: 0;
  // line-height: normal;
  // display: flex;
`;

function filterText(selectedItems, dropDownText) {
  if (dropDownText) {
    return dropDownText;
  }
  return `Filters (${selectedItems.length})`;
}

const CheckboxContainer = styled.div``;

const CheckBoxText = styled.div`
  ${IbmplexsansNormalShark20px}
  // position: relative;
  // margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  // display: flex;
`;

function focusAreaColor(item) {
  if (item.color) {
    return <Ellipse141 backgroundColor={item.color}></Ellipse141>;
  }
}

function addCreateNewInstanceButton(addCreateNewButton, openDialogForNewEvent) {
  if (addCreateNewButton) {
    return <CreateNew onClick={openDialogForNewEvent}>Create new</CreateNew>;
  }
}

const Ellipse141 = styled.div`
  position: relative;
  min-width: 12px;
  height: 12px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
`;

const CreateNew = styled.div`
  ${IbmplexsansNormalShark16px}
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 30px;
  background: #7200e0;
  border: 1px solid #7200e0;
  border-radius: 30px;
  padding: 8px 16px;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
  margin: 10px;
`;
const FocusAreadiv = styled.div`
  display:flex;
  padding:0px 20px 0px 0px;
`;

const Icondiv = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  gap:5px;
  // padding:0px 10px 0px 0px;
  // border:1px solid red;
`;
const StyledEditButton = styled.img`
  width: 16px;
  height: 16px;
  margin: 0;
   cursor: pointer;
  color:#979797;
  
  
`;
const StyledDeleteButton = styled.img`
  width: 16px;
  height: 16px;
   cursor: pointer;
  margin: 0;
  color:#979797;
  
`;
