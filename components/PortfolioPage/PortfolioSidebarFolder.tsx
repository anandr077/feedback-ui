import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { isMobileView } from '../ReactiveRender';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import EditNoteIcon from '@mui/icons-material/EditNote';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import deleteIcon from '../../static/icons/delete-small.png';
import PortfolioSidebarSubfolder from './PortfolioSidebarSubfolder';

const PortfolioSidebarFolder = ({
  state,
  dispatch,
  setShowSubfolders,
  showSubfolders,
  setShowArrowUp,
  showArrowUp,
  folder,
  showArrowDropDown,
  showNavMenu,
  setShowNavMenu,
  selectedSubFolder,
  setSelectedSubFolder,
  activeFolderIndex,
  setActiveFolderIndex,
  clickedSubfolder,
  setClickedSubfolder,
  handleFolderDelete,
  handleFolderEdit
}) => {
  const isActive = isMobileView() ? showNavMenu : true;
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleDropdown = (event) => {
    setActiveDropdown((prev) => !prev);
    event.stopPropagation();
  };

  const handleEditDropdown = (event) => {
    setActiveDropdown((prev) => !prev);
    event.stopPropagation();
    setIsEditing(true);
    setEditedTitle(folder.title);
  };

  const handleDeleteDropdown = (event) => {
    setActiveDropdown((prev) => !prev);
    event.stopPropagation();
    handleFolderDelete(folder.id)
  };


  return (
    <>
      {isActive && (
        <Link
          className={`folder ${
            folder.id === activeFolderIndex ? 'active' : ''
          }`}
          onClick={() => {
            dispatch({
              type: 'setActiveMainFolderId',
              payload: folder.id,
            });
            setActiveFolderIndex(folder.id);
            setShowSubfolders(showSubfolders === folder.id ? null : folder.id);
            setShowArrowUp(
              state.activeMainFolderId === folder.id ? !showArrowUp : true
            );
          }}
          to={`/portfolio/` + folder.id + '/' + (selectedSubFolder || '')}
          title={folder.title?.length > 12 ? folder.title : undefined}
        >
          {isEditing ? (
            <input
              type="text"
              className="FolderInputBox"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  setIsEditing(false);
                  handleFolderEdit(editedTitle, folder.id)
                }
              }}
            />
          ) : folder.title?.length > 12 ? (
            `${folder.title.slice(0, 12)}...`
          ) : (
            folder.title
          )}
          {!isEditing && (
            <div className="icon-container">
              {(folder.allowDelete || folder.allowRename) && (
                  <div className="folder-dropdown-container" ref={dropdownRef}>
                    <MoreHorizIcon onClick={toggleDropdown} />
                    <div
                      className={`${
                        activeDropdown ? 'folder-dropdown' : 'dropdown-hidden'
                      }`}
                    >
                      <span onClick={handleEditDropdown}>
                            <EditNoteIcon /> Rename
                      </span>
                      {
                        folder.allowDelete && (
                          <span onClick={handleDeleteDropdown}>
                            <img src={deleteIcon} /> Delete
                          </span>
                        )
                      }
                    </div>
                  </div>
                )}
              {showArrowDropDown &&
                (showArrowUp && state.activeMainFolderId === folder.id ? (
                  <ArrowDropUpIcon />
                ) : (
                  <ArrowDropDownIcon />
                ))}
            </div>
          )}
        </Link>
      )}

      {isActive &&
        showSubfolders === folder.id &&
        folder.files &&
        folder.files.map((subFolder, subfolderIndex) => (
          <PortfolioSidebarSubfolder
            state={state}
            dispatch={dispatch}
            subfolderIndex={subfolderIndex}
            subFolder={subFolder}
            setShowSubfolders={setShowSubfolders}
            setShowNavMenu={setShowNavMenu}
            selectedSubFolder={selectedSubFolder}
            setSelectedSubFolder={setSelectedSubFolder}
            clickedSubfolder={clickedSubfolder}
            setClickedSubfolder={setClickedSubfolder}
            folder={folder}
          />
        ))}
    </>
  );
};

export default PortfolioSidebarFolder;
