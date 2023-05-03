import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';

const CheckboxGroup = ({ data, onChange }) => {
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);

  };

  const handleMenuItemClick = (event, value, category) => {
    event.stopPropagation();
    const currentIndex = selectedItems.findIndex((item) => item.value === value);
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

  const menuContent = data.flatMap((category, index) => [
    <ListSubheader key={`category-${index}`}>{category.name}</ListSubheader>,
    ...category.items.map((item) => (
      <MenuItem
        key={item.value}
        onClick={(event) => handleMenuItemClick(event, item.value, category.name)}
      >
        <Checkbox
          checked={selectedItems.some((selectedItem) => selectedItem.value === item.value)}
        />
        <ListItemText primary={item.label} />
      </MenuItem>
    )),
  ]);

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
        <Button onClick={handleClick} variant="outlined" sx={{ mt: 2 }}>
          {selectedItems.length > 0
            ? selectedItems.map((item) => item.value).join(', ')
            : 'Choose options'}
        </Button>
        <Menu
          id="grouped-select"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'grouped-select',
          }}
        >
          {menuContent}
        </Menu>
      </FormControl>
    </div>
  );
};

export default CheckboxGroup;