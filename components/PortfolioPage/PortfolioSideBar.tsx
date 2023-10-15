import React, { useEffect, useRef, useState } from 'react';
import closeIcon from '../../static/icons/closeIcon.png';
import menuIcon from '../../static/icons/menuBar.png';
import PortfolioSideBarFolder from './PortfolioSidebarFolder';
import './portfolioSideBar.css';

const PortfolioSideBar = ({
  state,
  dispatch,
  folderId,
  categoryName,
  handleNewFolder,
  handleFolderDelete,
  handleFolderEdit
}) => {
  const [clickedSubfolder, setClickedSubfolder] = useState('');
  const [showSubfolders, setShowSubfolders] = useState('');
  const [activeFolderIndex, setActiveFolderId] = useState('0');
  const [showArrowDropDown, setShowArrowDropDown] = useState(true);
  const [showArrowUp, setShowArrowUp] = useState(false);
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [selectedSubFolder, setSelectedSubFolder] = useState('');
  const [addFolder, setAddFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');

  const getAddFolderData = () => {
    handleNewFolder(newFolderName);
    setNewFolderName('');
    setAddFolder(false);
  };

  useEffect(() => {
    const matchingFolders = state?.portfolio?.files?.filter(
      (folder) => folder.id === folderId
    );

    let activeFolderFolderId =
      matchingFolders.length > 0 ? matchingFolders[0].id : null;

    if (!activeFolderFolderId && state?.portfolio?.files?.length > 0) {
      activeFolderFolderId = state?.portfolio?.files[0]?.id || null;
    }

    setActiveFolderId(activeFolderFolderId);
    let categoryNameToUse = categoryName;
    if (categoryName === null || categoryName === undefined) {
      categoryNameToUse = 'Drafts';
    }
    if (!folderId && !categoryNameToUse) {
      setShowSubfolders('');
      setSelectedSubFolder('');
      setClickedSubfolder('');
      return;
    }

    if (activeFolderFolderId !== null) {
      setShowSubfolders(activeFolderFolderId);
      if (categoryNameToUse) {
        setSelectedSubFolder(categoryNameToUse);
        setClickedSubfolder('');
      } else {
        const defaultSubFolder = matchingFolders[0]?.files?.[0]?.title || '';
        setSelectedSubFolder(defaultSubFolder);
        setClickedSubfolder(defaultSubFolder);
      }
    }
  }, [folderId, categoryName, state?.portfolio]);

  return (
    <div className="sideNavbar">
      {sideNavHeaderMobile(showNavMenu, setShowNavMenu)}

      {state?.portfolio?.files?.map((folder, mainIndex) => (
        <PortfolioSideBarFolder
          state={state}
          dispatch={dispatch}
          setShowSubfolders={setShowSubfolders}
          showSubfolders={showSubfolders}
          setShowArrowUp={setShowArrowUp}
          showArrowUp={showArrowUp}
          folder={folder}
          showArrowDropDown={showArrowDropDown}
          showNavMenu={showNavMenu}
          setShowNavMenu={setShowNavMenu}
          selectedSubFolder={selectedSubFolder}
          setSelectedSubFolder={setSelectedSubFolder}
          activeFolderIndex={activeFolderIndex}
          setActiveFolderIndex={setActiveFolderId}
          clickedSubfolder={clickedSubfolder}
          setClickedSubfolder={setClickedSubfolder}
          handleFolderDelete={handleFolderDelete}
          handleFolderEdit={handleFolderEdit}
        />
      ))}
      {addFolder ? (
        <div className="new-folder-box">
          <input
            className="FolderInputBox"
            placeholder="Folder name"
            type="text"
            onKeyUp={(e) => {
              console.log(e.key);
              if (e.key === 'Enter') {
                handleNewFolder(newFolderName);
                setNewFolderName('');
                setAddFolder(false);
              }
            }}
            onChange={(e) => setNewFolderName(e.target.value)}
          />
          <button className="newFolderBtn" onClick={getAddFolderData}>
            + New folder
          </button>
        </div>
      ) : (
        <button className="newFolderBtn" onClick={() => setAddFolder(true)}>
          + New folder
        </button>
      )}
    </div>
  );
};

export default PortfolioSideBar;

function sideNavHeaderMobile(
  showNavMenu: boolean,
  setShowNavMenu: React.Dispatch<React.SetStateAction<boolean>>
) {
  return (
    <div
      className="SideNavHeader"
      style={{ marginBottom: showNavMenu ? '16px' : '0px' }}
    >
      <p>Folders</p>
      {showNavMenu ? (
        <img
          src={closeIcon}
          onClick={() => setShowNavMenu(false)}
          alt="close"
          className="close"
        />
      ) : (
        <img
          src={menuIcon}
          onClick={() => setShowNavMenu(true)}
          alt="open"
          className="close"
        />
      )}
    </div>
  );
}
