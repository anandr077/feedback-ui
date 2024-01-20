import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Input } from '@mui/material';
import { Avatar } from '@boringer-avatars/react';
import {
  AvatarContainer,
  Frame12841,
  SelectInput,
  StyledInput,
  StyledSelect,
} from './style';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';

export default function RoundedDropDown({
  menuItems,
  defaultValue = '',
  search = false,
  selectedIndex,
  fullWidth = false,
  type,
  width = 120,
}) {
  const [value, setValue] = React.useState(defaultValue);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  const maxLength = menuItems.reduce((maxLength, currentString) => {
    return currentString.length > maxLength.length ? currentString : maxLength;
  }, '');

  React.useEffect(() => {
    setValue(defaultValue);
  }, [location.pathname]);
  const handleMenuSelect = (menuItem) => {
    setSearchTerm('');
    setValue(menuItem);
    setOpen(false);
    selectedIndex(type, menuItem);
  };

  return (
    <FormControl
      fullWidth={fullWidth}
      sx={
        !fullWidth ? { minWidth: Math.max(width, maxLength.length * 12) } : {}
      }
    >
      <StyledSelect
        MenuProps={{
          PaperProps: {
            sx: {
              padding: '5px',
            },
          },
          fontWeight: '400',
          fontSize: '16px',
        }}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        value={value}
        displayEmpty
        input={<SelectInput disableUnderline={true} />}
      >
        {search && (
          <StyledInput
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search...."
            disableUnderline={true}
            onClickCapture={(e) => {
              e.stopPropagation();
            }}
            onKeyDown={(e) => {
              e.stopPropagation();
            }}
          />
        )}
        <MenuItem value={''} onClick={() => handleMenuSelect('')}>
          {type === 'documentType' ? 'Task Type' : capitalizeFirstLetter(type)}
        </MenuItem>
        {menuItems
          .filter((item) =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((filteredItem) => (
            <MenuItem
              key={filteredItem}
              value={filteredItem}
              onClick={() => handleMenuSelect(filteredItem)}
            >
              {filteredItem}
            </MenuItem>
          ))}
      </StyledSelect>
    </FormControl>
  );
}

const capitalizeFirstLetter = (str) =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
