import { Avatar } from '@boringer-avatars/react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import React from 'react';
import styled, { css } from 'styled-components';
import { IbmplexsansSemiBoldShark20px } from '../../styledMixins';
export const DropdownMenu = (props) => {
  const {
    selectedIndex,
    markingCriteriaType,
    menuItems,
    onItemSelected,
    withCheckbox,
    showAvatar,
    small,
    fullWidth,
    primaryText,
    noDefaultSelected = false,
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
    selectedIndex === undefined
      ? findFirstSelectableItem(menuItems, noDefaultSelected)
      : menuItems[selectedIndex];
  const [selectedItem, setSelectedItem] = React.useState(initialSelectedItem);

  const menuRef = React.useRef(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (item) => {
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
            ? { borderColor: 'var(--text)', padding: '7px' }
            : { borderColor: 'var(--light-mode-purple)' }
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
            minWidth: fullWidth ? '81%' : undefined,
            borderRadius: markingCriteriaType ? '12px' : undefined,
            width: markingCriteriaType ? '20%' : undefined,
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
        <StyledTextField
          variant="outlined"
          value={searchInput}
          onChange={handleSearchInputChange}
          onKeyDown={(e) => e.stopPropagation()}
          fullWidth
        />
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
      <StyledMenuItem disabled>{entry.heading}</StyledMenuItem>

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

const MarkingOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 12px;
  width: 100%;

  .MuiListItemText-root {
    margin: 0;
  }
`;

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
    /* white-space: nowrap; */
    overflow: hidden;
    text-overflow: ellipsis;
    /* width:100%; */
    /* max-width: 420px; */
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

const StyledListItemTextBold = styled(ListItemText)`
  ${IbmplexsansSemiBoldShark20px}
  position: relative;
  flex: 1;

  letter-spacing: 0;
  line-height: normal;
  border-radius: 50%;

  .MuiTypography-root {
    ${IbmplexsansSemiBoldShark20px}
    font-size: 14px;
    font-weight: bold;
  }

  .MuiTypography-root.MuiListItemText-secondary {
    font-weight: normal;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    word-break: break-word;
    white-space: normal;
  }
`;

const Frame12841 = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;

const StyledTextField = styled(TextField)`
  .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root {
    border-radius: 10px;
  }
  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 10px;
  }
`;

export default DropdownMenu;
