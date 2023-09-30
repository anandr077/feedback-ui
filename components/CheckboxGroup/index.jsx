import FormControl from '@mui/material/FormControl';
import Menu from '@mui/material/Menu';
import React from 'react';
import CheckboxBordered from '../CheckboxBordered';
import './index.css';
import TrashIcon from '../../static/icons/taskDeleteIcon.png';
import ColoredTrashIcon from '../../static/icons/ColoredTrascan.png';
import {
  StyledMenuItem,
  StyledBox,
  FlexContainer,
  StyledIconButton,
  StyledListItemText,
  StyledListSubheader,
  CheckboxContainer,
  CheckBoxText,
  Ellipse141,
  CreateNew,
  FocusAreadiv,
  Iconcontainer,
  StyledDeleteButton,
} from './style';

const CheckboxGroup = ({
  data,
  onChange,
  dropDownText,
  addCreateNewButton,
  backgroundColor,
  textColor,
  openDialogForNewEvent,
  previouslySelectedItems = [],
  deleteHandler = (id) => {},
  trashOption = false,
}) => {
  const [selectedItems, setSelectedItems] = React.useState(
    previouslySelectedItems
  );
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [trashHover, setTrashHover] = React.useState(
    Array.from({ length: data[0].items.length }, () => false)
  );

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

  const handleMouse = (index, state, hoverArray, setHoverArray) => {
    const updatedElements = [...hoverArray];
    updatedElements[index] = state;
    setHoverArray(updatedElements);
  };

  const handleDelete = (item) => {
    deleteHandler(item.value);
  };

  const menuContent = data.flatMap((category, index) => [
    <StyledListSubheader key={`category-${index}`}>
      {category.title}
    </StyledListSubheader>,
    ...category.items?.map((item, index) => (
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
        {trashOption && (
          <Iconcontainer>
            {!selectedItems.some((obj) => obj.value === item.value) && (
              <StyledDeleteButton
                src={trashHover[index] ? ColoredTrashIcon : TrashIcon}
                onMouseEnter={() =>
                  handleMouse(index, true, trashHover, setTrashHover)
                }
                onMouseLeave={() =>
                  handleMouse(index, false, trashHover, setTrashHover)
                }
                onClick={() => handleDelete(item)}
              />
            )}
          </Iconcontainer>
        )}
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

function filterText(selectedItems, dropDownText) {
  if (dropDownText) {
    return dropDownText;
  }
  return `Filters (${selectedItems.length})`;
}

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
