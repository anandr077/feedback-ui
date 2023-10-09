import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import closeIcon from '../../static/icons/closeIcon.png';
import menuIcon from '../../static/icons/menuBar.png';
import { isSmallScreen } from '../ReactiveRender';
import './portfolioSideBar.css';

const PortfolioSideBar = ({ state, dispatch }) => {
  const [clickedSubfolder, setClickedSubfolder] = useState('')
  const [showSubfolders, setShowSubfolders] = useState(null);
  const [showArrowUp, setShowArrowUp] = useState(false);
  const [activeFolderIndex, setActiveFolderIndex] = useState(0);
  const [showArrowDropDown, setShowArrowDropDown] = useState(true);
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [selectedSubFolder, setSelectedSubFolder] = useState('')
  const history = useHistory();
  const {classId, categoryName}  = useParams();


  useEffect(() => {
    let folderIndex = state?.portfolio?.files?.findIndex(folder => folder.classId === classId);

    if(folderIndex === -1){
       folderIndex = 0
    }
    setActiveFolderIndex(folderIndex)

    if (!classId && !categoryName) {
      setShowSubfolders(null);
      setSelectedSubFolder(''); 
      setClickedSubfolder('');
      return;
    }

    if (folderIndex !== -1) {
      setShowSubfolders(folderIndex);
      // if (files) {
      //   const subFolderIndex = state?.portfolio.files[folderIndex]?.files?.findIndex(subFolder => subFolder.title === files);
      //   if (subFolderIndex !== -1) {
      //     setSelectedSubFolder(state?.portfolio.files[folderIndex]?.files?.[subFolderIndex]?.title || '');
      //   }
      // } else {
      //   setSelectedSubFolder(state?.portfolio.files[folderIndex]?.files?.[0]?.title || '');
      // }
      if (categoryName) {
        setSelectedSubFolder(categoryName); 
        setClickedSubfolder('')
      } else {
        const defaultSubFolder = state?.portfolio.files[folderIndex]?.files?.[0]?.title || '';
        setSelectedSubFolder(defaultSubFolder);
        setClickedSubfolder(defaultSubFolder);
      }
    }
  }, [classId, categoryName, state?.portfolio]);
  

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
          setShowNavMenu,
          selectedSubFolder, 
          setSelectedSubFolder,
          activeFolderIndex, 
          setActiveFolderIndex,
          clickedSubfolder, 
          setClickedSubfolder,
          history
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
    classId: number;
  },
  showArrowDropDown: boolean,
  showNavMenu,
  isSmallScreen,
  setShowNavMenu,
  selectedSubFolder, 
  setSelectedSubFolder,
  activeFolderIndex, 
  setActiveFolderIndex,
  clickedSubfolder, 
  setClickedSubfolder,
  history
): JSX.Element {

  const isActive = isSmallScreen() ? showNavMenu : true;

  return (
    <>
      {isActive && (
        <Link
          className={`folder ${mainIndex === activeFolderIndex ? 'active' : ''}`}
          onClick={() => {
            dispatch({
              type: 'setActiveMainIndex',
              payload: mainIndex,
            });
            setActiveFolderIndex(mainIndex);
            setShowSubfolders(showSubfolders === mainIndex ? null : mainIndex);
            setShowArrowUp(
              state.activeMainIndex === mainIndex ? !showArrowUp : true
            );
          }}
          to={`/portfolio/` + folder.classId + "/" + (selectedSubFolder || '')}
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
        </Link>
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
            setShowNavMenu,
            selectedSubFolder,
            setSelectedSubFolder,
            clickedSubfolder, 
            setClickedSubfolder,
            folder,
            history
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
  setShowNavMenu,
  selectedSubFolder,
  setSelectedSubFolder,
  clickedSubfolder, 
  setClickedSubfolder,
  folder,
  history
): JSX.Element {
  console.log('state.activeSubFolder', state.activeSubFolderIndex);
  console.log('subIndex', subIndex);

  return (
    <div
      className="folder subFolder"
      key={subIndex}
      style={{
        backgroundColor: (selectedSubFolder === subFolder.title || clickedSubfolder === subFolder.title) ? '#F1E7FF' : '',
        marginLeft: '20px',
      }}
      onClick={() => {
        dispatch({
          type: 'setActiveSubFolderIndex',
          payload: subIndex,
        });
        setSelectedSubFolder(subFolder.title)
        setClickedSubfolder(subFolder.title)
        history.replace(`/portfolio/${folder.classId}/${subFolder.title}`)
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
