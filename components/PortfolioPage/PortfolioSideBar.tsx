import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import closeIcon from '../../static/icons/closeIcon.png';
import menuIcon from '../../static/icons/menuBar.png';
import './portfolioSideBar.css';

const PortfolioSideBar = ({
  state,
  dispatch,
}) => {
  const [showSubfolders, setShowSubfolders] = useState(null);
  const [showArrowUp, setShowArrowUp] = useState(false);
  const [showArrowDropDown, setShowArrowDropDown] = useState(true);
  const [showNavMenu, setShowNavMenu] = useState(false);
  const history = useHistory()


  const handleClassClick = (title: string) =>{
    history.push(`/portfolio/${title}`)
  }

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
          handleClassClick
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
  handleClassClick
): JSX.Element {
  console.log('state.activeMainIndex', state.activeMainIndex);
  console.log('mainIndex', mainIndex);
  return (
    <>
      <div
        className={`folder ${state.activeMainIndex === mainIndex ? 'active' : ''}`}
        onClick={() => {
          dispatch({
            type: 'setActiveMainIndex',
            payload: mainIndex,
          });
          setShowSubfolders(showSubfolders === mainIndex ? null : mainIndex);
          setIsActive(mainIndex);
          setShowArrowUp(isActive === mainIndex ? !showArrowUp : true);
          handleClassClick(folder.title)
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

      {showSubfolders === mainIndex &&
        folder.files &&
        folder.files.map((subFolder, subfolderIndex) =>
          subFolderContainer(
            state,
            dispatch,
            subfolderIndex,
            subFolder
          )
        )}
    </>
  );
}

function subFolderContainer(
  state,
  dispatch,
  subIndex: number,
  subFolder: { title: string; type: string; preview: string }
): JSX.Element {
  console.log('state.activeSubFolder', state.activeSubFolderIndex);
  console.log('subIndex', subIndex);
  return (
    <div
      className="folder subFolder"
      key={subIndex}
      style={{
        backgroundColor: state.activeSubFolderIndex === subIndex ? '#F1E7FF' : '',
        marginLeft: '20px',
      }}
      onClick={() => {
        dispatch({
          type: 'setActiveSubFolderIndex',
          payload: subIndex,
        })
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
