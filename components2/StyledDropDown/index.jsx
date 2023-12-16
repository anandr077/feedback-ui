import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Input } from '@mui/material';
import { Avatar } from '@boringer-avatars/react';

import styled from 'styled-components';

export default function StyledDropDown({
  menuItems,
  showAvatars,
  search,
  group,
  selectedIndex,
}) {
  const initialSelectedItem =
    selectedIndex === undefined || selectedIndex < 0
      ? findFirstSelectableItem(menuItems, noDefaultSelected)
      : menuItems[selectedIndex];
  const [value, setValue] = React.useState(initialSelectedItem);
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleMenuSelect = (menuItem) => {
    setSearchTerm('');
    setValue(menuItem);
    if (menuItem.link) {
      window.location.href = menuItem.link;
      window.location.reload();
      return;
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
    <FormControl sx={{ m: 1, minWidth: 150 }}>
      <Select
        style={{
          border: '1px solid var(--light-mode-purple)',
          boxShadow: '0px 4px 8px #2f1a720a',
          backgroundColor: 'white',
          borderRadius: '10px',
        }}
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
                  boxShadow: '0px 4px 8px #2f1a720a',
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

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 12px;
  border-radius: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
