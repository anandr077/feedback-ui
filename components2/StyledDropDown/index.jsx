import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Input } from '@mui/material';
import { Avatar } from '@boringer-avatars/react';
import { AvatarContainer, Frame12841 } from './style';

export default function StyledDropDown({
  menuItems,
  showAvatars = false,
  search = false,
  group = false,
  independent = false,
  showImage = false,
  selectedIndex,
  fullWidth = false,
  onItemSelected
}) {

  const initialSelectedItem =
    selectedIndex >= 0 ? menuItems[selectedIndex] : menuItems[0];
  console.log("initialSelectedItem", initialSelectedItem)
  const [value, setValue] = React.useState(initialSelectedItem);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setValue(initialSelectedItem);
  }, [selectedIndex, menuItems]);

  const handleMenuSelect = (menuItem) => {
    setSearchTerm('');
    setValue(menuItem);
    setOpen(false);
    if (menuItem.link) {
      window.location.href = menuItem.link;
      window.location.reload();
      return;
    }
    if (menuItem.onClick) {
      menuItem.onClick(menuItem);
      return;
    }
    if (onItemSelected) {
      onItemSelected(menuItem);
    }
  };

  const groupedMenuItems = group
    ? groupItemsByFirstLetter(menuItems)
    : { all: menuItems };

  const filteredMenuItems = group
    ? Object.keys(groupedMenuItems).reduce(
        (result, key) =>
          result.concat(
            groupedMenuItems[key].filter((item) =>
              item.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
          ),
        []
      )
    : menuItems.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <FormControl fullWidth={fullWidth} sx={!fullWidth ? { m: 1, minWidth: 150 } : {}}>
      <Select
        style={{
          border: !independent ? '1px solid #D6D6D6' : 'none',
          backgroundColor: 'white',
          borderRadius: '10px',
          fontSize: '16px',
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              padding: '5px',
            },
          },
          fontWeight: '400',
          fontSize: '20px',
        }}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        value={value}
        displayEmpty
        input={<Input disableUnderline={true} />}
        renderValue={(value) => (
          <AvatarContainer>
            {showAvatars && (
              <Avatar
                title={false}
                size={25}
                variant="beam"
                name={value.title}
                square={false}
              />
            )}
            {showImage && createImageFrame(value)}
            <span>{value.title}</span>
          </AvatarContainer>
        )}
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
        {Object.keys(groupedMenuItems).map((groupKey) => (
          <React.Fragment key={groupKey}>
            {group && <MenuItem disabled>{groupKey}</MenuItem>}
            {filteredMenuItems.map((menuItem) => (
              <MenuItem
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontWeight: '400',
                  fontSize: '16px',
                }}
                key={menuItem.id}
                value={menuItem.id}
                onClick={() => handleMenuSelect(menuItem)}
              >
                {showAvatars && (
                  <Avatar
                    title={false}
                    size={25}
                    variant="beam"
                    name={menuItem.title}
                    square={false}
                  />
                )}
                {showImage && createImageFrame(menuItem)}
                {menuItem.title}
              </MenuItem>
            ))}
          </React.Fragment>
        ))}
      </Select>
    </FormControl>
  );
}


const groupItemsByFirstLetter = (items) => {
  return items.reduce((groupedItems, currentItem) => {
    let groupKey;

    if (/^[0-9]/.test(currentItem.title)) {
      groupKey = '#';
    } else {
      groupKey = currentItem.title.charAt(0).toUpperCase();
    }

    if (!groupedItems[groupKey]) {
      groupedItems[groupKey] = [];
    }

    groupedItems[groupKey].push(currentItem);
    return groupedItems;
  }, {});
};

function createImageFrame(selectedItem) {
  if (selectedItem?.image) {
    return <Frame12841 src={selectedItem.image} alt="Frame 1284" />;
  }
}
