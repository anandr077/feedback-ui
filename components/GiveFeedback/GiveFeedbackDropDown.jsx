import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Input } from '@mui/material';
import { Avatar } from '@boringer-avatars/react';
import { AvatarContainer, Frame12841 } from './style';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';

export default function GiveFeedbackDropDown({
  menuItems,
  defaultValue = '',
  search = false,
  selectedIndex,
  fullWidth = false,
  type,
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
      sx={!fullWidth ? { minWidth: Math.max(120, maxLength.length * 11) } : {}}
    >
      <Select
        style={{
          border: '1px solid #A6A6A6',
          boxShadow: '0px 4px 8px #2f1a720a',
          backgroundColor: 'white',
          borderRadius: '25px',
          fontSize: '14px',
          display: 'flex',
          textAlign: 'center',
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              padding: '5px',
            },
          },
          fontWeight: '400',
          fontSize: '14px',
        }}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        value={value}
        displayEmpty
        input={<Input disableUnderline={true} />}
      >
        {search && (
          <Input
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
            sx={{
              border: '1px solid var(--light-mode-purple)',
              padding: '5px',
              borderRadius: '10px',
              '&:hover': {
                outline: 'none',
              },
              marginBottom: '5px',
            }}
          />
        )}
        <MenuItem value={''} onClick={() => handleMenuSelect('')}>
          {open
            ? 'None'
            : type === 'documentType'
            ? 'Task Type'
            : capitalizeFirstLetter(type)}
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
      </Select>
    </FormControl>
  );
}

const capitalizeFirstLetter = (str) =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
