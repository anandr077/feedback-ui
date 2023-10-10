import React from 'react'
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PortfolioSidebarSubfolder from './PortfolioSidebarSubfolder';

const PortfolioSidebarFolder = ({
    state,
    dispatch,
    classId,
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
    history,
}) => {
    const isActive = isSmallScreen() ? showNavMenu : true;

  return (
    <>
      {isActive && (
        <Link
          className={`folder ${folder.classId === activeFolderIndex ? 'active' : ''}`}
          onClick={() => {
            dispatch({
              type: 'setActiveMainIndex',
              payload: folder.classId,
            });
            setActiveFolderIndex(folder.classId);
            setShowSubfolders(showSubfolders === classId ? null : classId);
            setShowArrowUp(
              state.activeMainIndex === classId ? !showArrowUp : true
            );
          }}
          to={`/portfolio/` + folder.classId + "/" + (selectedSubFolder || '')}
        >
          {folder.title}
          <div>
            {showArrowDropDown &&
              (showArrowUp && state.activeMainIndex === classId ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              ))}
          </div>
        </Link>
      )}

      {showSubfolders === classId &&
        folder.files &&
        folder.files.map((subFolder, subfolderIndex) =>
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
            history={history}
          />
        )}
    </>
  );
}

export default PortfolioSidebarFolder


