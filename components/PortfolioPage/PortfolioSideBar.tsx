import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import closeIcon from '../../static/icons/closeIcon.png';
import menuIcon from '../../static/icons/menuBar.png';
import { isSmallScreen } from '../ReactiveRender';
import PortfolioSideBarFolder from './PortfolioSidebarFolder';
import './portfolioSideBar.css';

const PortfolioSideBar = ({ state, dispatch }) => {
  const [clickedSubfolder, setClickedSubfolder] = useState('')
  const [showSubfolders, setShowSubfolders] = useState('');
  const [showArrowUp, setShowArrowUp] = useState(false);
  const [activeFolderIndex, setActiveFolderIndex] = useState("0");
  const [showArrowDropDown, setShowArrowDropDown] = useState(true);
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [selectedSubFolder, setSelectedSubFolder] = useState('')
  const history = useHistory();
  const {classId, categoryName}  = useParams();


  useEffect(() => {
    let matchingFolders = state?.portfolio?.files?.filter(folder => folder.classId === classId);

    let activeFolderClassId = matchingFolders.length > 0 ? matchingFolders[0].classId : null;

    if(!activeFolderClassId && state?.portfolio?.files?.length > 0){
      activeFolderClassId = state?.portfolio?.files[0]?.classId || null;
    }

    setActiveFolderIndex(activeFolderClassId)
    let categoryNameToUse = categoryName;
    if (categoryName === null || categoryName === undefined) {
      categoryNameToUse = 'Drafts';
    }
    if (!classId && !categoryNameToUse) {
      setShowSubfolders('');
      setSelectedSubFolder(''); 
      setClickedSubfolder('');
      return;
    }

    if (activeFolderClassId !== null) {
      setShowSubfolders(activeFolderClassId);
      if (categoryNameToUse) {
        setSelectedSubFolder(categoryNameToUse); 
        setClickedSubfolder('')
      } else {
        const defaultSubFolder = matchingFolders[0]?.files?.[0]?.title || '';
        setSelectedSubFolder(defaultSubFolder);
        setClickedSubfolder(defaultSubFolder);
      }
    }
  }, [classId, categoryName, state?.portfolio]);


  

  return (
    <div className="sideNavbar">
      {sideNavHeaderMobile(showNavMenu, setShowNavMenu)}

      {state?.portfolio?.files?.map((folder, mainIndex) =>
        <PortfolioSideBarFolder 
            state={state}
            dispatch={dispatch}
            classId={folder.classId}
            setShowSubfolders={setShowSubfolders}
            showSubfolders={showSubfolders}
            setShowArrowUp={setShowArrowUp}
            showArrowUp={showArrowUp}
            folder={folder}
            showArrowDropDown={showArrowDropDown}
            showNavMenu={showNavMenu}
            isSmallScreen={isSmallScreen}
            setShowNavMenu={setShowNavMenu}
            selectedSubFolder={selectedSubFolder}
            setSelectedSubFolder={setSelectedSubFolder}
            activeFolderIndex={activeFolderIndex}
            setActiveFolderIndex={setActiveFolderIndex}
            clickedSubfolder={clickedSubfolder}
            setClickedSubfolder={setClickedSubfolder}
            history={history}
        />
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
