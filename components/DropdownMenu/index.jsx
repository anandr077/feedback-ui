import { Avatar } from '@boringer-avatars/react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import React from 'react';
import {
  MarkingOptionContainer,
  StyledMenuItem,
  StyledHeading,
  StyledBox,
  FlexContainer,
  FlexContainerSmall,
  StyledListItemText,
  StyledListItemTextBold,
  Frame12841,
  StyledTextField,
} from './style';
export const DropdownMenu = (props) => {
  const {
    selectedIndex,
    markingCriteriaType,
    menuItems,
    onItemSelected,
    withCheckbox,
    showAvatar = false,
    small,
    fullWidth,
    primaryText,
    noDefaultSelected = false,
    defaultSearch = false,
    getSelectedItem = null,
  } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchInput, setSearchInput] = React.useState('');
  const [filteredMenuItems, setFilteredMenuItems] = React.useState(menuItems);

  const handleSearchInputChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredItems = menuItems.filter((item) => {
      return item.title.toLowerCase().includes(searchTerm);
    });
    setSearchInput(searchTerm);
    setFilteredMenuItems(filteredItems);
  };

  const initialSelectedItem =
    selectedIndex === undefined || selectedIndex < 0
      ? findFirstSelectableItem(menuItems, noDefaultSelected)
      : menuItems[selectedIndex];
  const [selectedItem, setSelectedItem] = React.useState(initialSelectedItem);

  const menuRef = React.useRef(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (item) => {
    if (getSelectedItem !== null) {
      getSelectedItem(item);
    }
    if (item) {
      setSelectedItem(item);
      setAnchorEl(null);
      if (item.link) {
        window.location.href = item.link;
        window.location.reload();
        return;
      }
      if (item.onClick) {
        item.onClick(item);
        return;
      }
      if (onItemSelected) {
        onItemSelected(item);
      }
    } else {
      setSelectedItem(menuItems[0]);
      setAnchorEl(null);
    }
  };
  React.useEffect(() => {
    if (onItemSelected) {
      onItemSelected(selectedItem);
    }
  }, []);
  return (
    <div style={fullWidth ? { width: '100%' } : {}}>
      <StyledBox
        style={
          fullWidth
            ? { borderColor: '#959595', padding: '0px 20px !important' }
            : {
                borderColor: 'var(--light-mode-purple)',
                padding: selectedItem?.type === 'FOLDER' ? '7px' : '0',
              }
        }
      >
        {small ? (
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
                <StyledListItemText
                  primary={selectedItem.title || selectedItem.name}
                />
              </p>
            </div>
            <IconButton onClick={handleClick}>
              <Frame12841 src="/img/frame-1284@2x.png" alt="Frame 1284" />
            </IconButton>
          </FlexContainerSmall>
        ) : (
          <FlexContainer
            onClick={handleClick}
            style={markingCriteriaType ? { width: '100px' } : {}}
          >
            {showAvatar && (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleClick}
              >
                {createImageFrame(selectedItem, showAvatar)}
              </IconButton>
            )}
            <div
              className="text-container"
              onClick={handleClick}
              style={{ padding: '5px 0px' }}
            >
              <p>
                <StyledListItemText
                  primary={
                    primaryText
                      ? primaryText
                      : selectedItem?.title || selectedItem?.name
                  }
                />
              </p>
            </div>
            <IconButton onClick={handleClick}>
              <Frame12841 src="/img/frame-1284@2x.png" alt="Frame 1284" />
            </IconButton>
          </FlexContainer>
        )}
      </StyledBox>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
        }}
        transformOrigin={{
          vertical: 'top',
        }}
        getContentAnchorEl={null}
        ref={menuRef}
        sx={{
          '& .MuiPaper-root': {
            borderRadius: markingCriteriaType ? '12px' : undefined,
            width: 'fit-content',
          },
          '& .MuiMenu-paper': {
            '& .MuiList-root': {
              paddingTop: 0, // remove top padding
              paddingBottom: 0, // remove bottom padding
            },
            '& .MuiMenuItem-root:hover': {
              backgroundColor: '#F1E7FF',
            },
          },
        }}
      >
        {defaultSearch && (
          <StyledTextField
            variant="outlined"
            value={searchInput}
            onChange={handleSearchInputChange}
            onKeyDown={(e) => e.stopPropagation()}
            fullWidth
          />
        )}
        {filteredMenuItems.map((item) => {
          if (item.heading) {
            return withHeadings(
              item,
              handleClose,
              markingCriteriaType,
              withCheckbox,
              showAvatar
            );
          } else {
            // If the entry is a single item
            return (
              <>
                {markingCriteriaType ? (
                  <StyledMenuItem
                    key={item.id}
                    onClick={() => handleClose(item)}
                  >
                    <MarkingOptionContainer>
                      <StyledListItemTextBold
                        primary={item.name}
                        secondary={item.description}
                      />
                    </MarkingOptionContainer>
                  </StyledMenuItem>
                ) : (
                  <StyledMenuItem
                    key={item.id}
                    onClick={() => handleClose(item)}
                  >
                    {withCheckbox && <CustomCheckbox />}
                    {createImageFrame(item, showAvatar)}
                    <div className="text-container">
                      <p>
                        <StyledListItemText primary={item.title || item.name} />
                      </p>
                    </div>
                  </StyledMenuItem>
                )}
              </>
            );
          }
        })}
      </Menu>
    </div>
  );
};
function withHeadings(
  entry,
  handleClose,
  markingCriteriaType,
  withCheckbox,
  showAvatar
) {
  return (
    <div key={entry.heading}>
      {/* Render the heading */}
      <StyledMenuItem disabled>
        <StyledHeading>{entry.heading}</StyledHeading>
      </StyledMenuItem>

      {/* Render the items under the heading */}
      {entry.items.map((item) => (
        <StyledMenuItem key={item.id} onClick={() => handleClose(item)}>
          {markingCriteriaType ? (
            <MarkingOptionContainer>
              <StyledListItemTextBold
                primary={item.name}
                secondary={item.description}
              />
            </MarkingOptionContainer>
          ) : (
            <>
              {withCheckbox && <CustomCheckbox />}
              {createImageFrame(item, showAvatar)}
              <div className="text-container">
                <p>
                  <StyledListItemText primary={item.title || item.name} />
                </p>
              </div>
            </>
          )}
        </StyledMenuItem>
      ))}
    </div>
  );
}

function createImageFrame(selectedItem, showAvatar) {
  if (selectedItem?.image) {
    return <Frame12841 src={selectedItem.image} alt="Frame 1284" />;
  }
  if (!showAvatar) return <></>;
  return (
    <Avatar
      title={false}
      size={25}
      variant="beam"
      name={selectedItem.title}
      square={false}
    />
  );
}
const findFirstSelectableItem = (menuItems, noDefaultSelected) => {
  if (noDefaultSelected) {
    return null;
  }
  for (let entry of menuItems) {
    if (entry.heading) {
      if (entry.items && entry.items.length > 0) {
        return entry.items[0];
      }
    } else {
      return entry;
    }
  }
  return null;
};

export default DropdownMenu;
