import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import React, { useEffect, useRef, useState } from 'react';
import closeIcon from '../../static/icons/closeIcon.png';
import menuIcon from '../../static/icons/menuBar.png';
import './portfolioSideBar.css';

const PortfolioSideBar = ({
  portfolio,
  activeMainIndex,
  activeSubFolderIndex,
  setActiveMainIndex,
  setActiveSubFolderIndex,
}) => {
  const [showSubfolders, setShowSubfolders] = useState(null);
  const [showArrowUp, setShowArrowUp] = useState(false);
  const [showArrowDropDown, setShowArrowDropDown] = useState(true);
  const [showNavMenu, setShowNavMenu] = useState(false);

  const handleSubFolderClick = (id) => {
    setActiveSubFolderIndex(id);
    console.log('id is', id);
  };

  return (
    <div className="sideNavbar">
      {sideNavHeaderMobile(showNavMenu, setShowNavMenu)}

      {portfolio?.files?.map((folder, mainIndex) =>
        mainFolderContainer(
          handleSubFolderClick,
          activeSubFolderIndex,
          mainIndex,
          activeMainIndex,
          setShowSubfolders,
          showSubfolders,
          setActiveMainIndex,
          setShowArrowUp,
          showArrowUp,
          folder,
          showArrowDropDown
        )
      )}
    </div>
  );
};

export default PortfolioSideBar;

function mainFolderContainer(
  handleSubFolderClick,
  activeSubFolder,
  mainIndex: number,
  isActive: number,
  setShowSubfolders: React.Dispatch<React.SetStateAction<null>>,
  showSubfolders: null,
  setIsActive: React.Dispatch<React.SetStateAction<number>>,
  setShowArrowUp: React.Dispatch<React.SetStateAction<boolean>>,
  showArrowUp: boolean,
  folder: {
    title: string;
    type: string;
    files: { title: string; type: string; preview: string }[];
  },
  showArrowDropDown: boolean
): JSX.Element {
  return (
    <>
      <div
        className={`folder ${isActive === mainIndex ? 'active' : ''}`}
        onClick={() => {
          setShowSubfolders(showSubfolders === mainIndex ? null : mainIndex);
          setIsActive(mainIndex);
          setShowArrowUp(isActive === mainIndex ? !showArrowUp : true);
        }}
      >
        {folder.title}
        <div>
          {showArrowDropDown &&
            (showArrowUp && isActive === mainIndex ? (
              <ArrowDropUpIcon />
            ) : (
              <ArrowDropDownIcon />
            ))}
        </div>
      </div>

      {showSubfolders === mainIndex &&
        folder.files &&
        folder.files.map((subFolder, subIndex) =>
          subFolderContainer(
            handleSubFolderClick,
            activeSubFolder,
            subIndex,
            subFolder
          )
        )}
    </>
  );
}

function subFolderContainer(
  handleSubFolderClick,
  activeSubFolder,
  subIndex: number,
  subFolder: { title: string; type: string; preview: string }
): JSX.Element {
  return (
    <div
      className="folder subFolder"
      key={subIndex}
      style={{
        backgroundColor: activeSubFolder === subIndex ? '#F1E7FF' : '',
        marginLeft: '20px',
      }}
      onClick={() => {
        handleSubFolderClick(subIndex);
      }}
    >
      <span className="subFolder-Content">{subFolder.title}</span>
    </div>
  );
}

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
