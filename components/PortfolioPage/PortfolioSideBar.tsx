import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import React, { useEffect, useRef, useState } from 'react';
import closeIcon from '../../static/icons/closeIcon.png';
import menuIcon from '../../static/icons/menuBar.png';
import { isSmallScreen } from '../ReactiveRender';
import './portfolioSideBar.css';

const PortfolioSideBar = ({ state, dispatch }) => {
  const [showSubfolders, setShowSubfolders] = useState(null);
  const [showArrowUp, setShowArrowUp] = useState(false);
  const [showArrowDropDown, setShowArrowDropDown] = useState(true);
  const [showNavMenu, setShowNavMenu] = useState(false);

  return (
    <div className="sideNavbar">
      {sideNavHeaderMobile(showNavMenu, setShowNavMenu)}

      {state?.portfolio?.files?.map((folder, mainIndex) =>
        mainFolderContainer(
          state,
          dispatch,
          mainIndex,
          setShowSubfolders,
          showSubfolders,
          setShowArrowUp,
          showArrowUp,
          folder,
          showArrowDropDown,
          showNavMenu,
          isSmallScreen,
          setShowNavMenu
        )
      )}
    </div>
  );
};

export default PortfolioSideBar;

function mainFolderContainer(
  state,
  dispatch,
  mainIndex: number,
  setShowSubfolders: React.Dispatch<React.SetStateAction<null>>,
  showSubfolders: null,
  setShowArrowUp: React.Dispatch<React.SetStateAction<boolean>>,
  showArrowUp: boolean,
  folder: {
    title: string;
    type: string;
    files: { title: string; type: string; preview: string }[];
  },
  showArrowDropDown: boolean,
  showNavMenu,
  isSmallScreen,
  setShowNavMenu
): JSX.Element {

  const isActive = isSmallScreen() ? showNavMenu : true;

  return (
    <>
      {isActive && (
        <div
          className={`folder ${
            state.activeMainIndex === mainIndex ? 'active' : ''
          }`}
          onClick={() => {
            dispatch({
              type: 'setActiveMainIndex',
              payload: mainIndex,
            });
            setShowSubfolders(showSubfolders === mainIndex ? null : mainIndex);
            setShowArrowUp(
              state.activeMainIndex === mainIndex ? !showArrowUp : true
            );
          }}
        >
          {folder.title}
          <div>
            {showArrowDropDown &&
              (showArrowUp && state.activeMainIndex === mainIndex ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              ))}
          </div>
        </div>
      )}

      {showSubfolders === mainIndex &&
        folder.files &&
        folder.files.map((subFolder, subfolderIndex) =>
          subFolderContainer(
            state,
            dispatch,
            subfolderIndex,
            subFolder,
            setShowSubfolders,
            setShowNavMenu
          )
        )}
    </>
  );
}

function subFolderContainer(
  state,
  dispatch,
  subIndex: number,
  subFolder: { title: string; type: string; preview: string },
  setShowSubfolders,
  setShowNavMenu
): JSX.Element {
  console.log('state.activeSubFolder', state.activeSubFolderIndex);
  console.log('subIndex', subIndex);
  return (
    <div
      className="folder subFolder"
      key={subIndex}
      style={{
        backgroundColor:
          state.activeSubFolderIndex === subIndex ? '#F1E7FF' : '',
        marginLeft: '20px',
      }}
      onClick={() => {
        dispatch({
          type: 'setActiveSubFolderIndex',
          payload: subIndex,
        });
        if(window.innerWidth < 1024){
          setShowSubfolders(null);
          setShowNavMenu(false);
        }
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
