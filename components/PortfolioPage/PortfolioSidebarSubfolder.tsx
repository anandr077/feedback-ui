import React from 'react'
import { useHistory } from 'react-router-dom'
import { isSmallScreen } from '../ReactiveRender';

const PortfolioSidebarSubfolder = ({
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
    folder
}) => {
  const history = useHistory()
  const smallScreenIs = isSmallScreen()
    return (
        <div
          className="folder subFolder"
          key={subfolderIndex}
          style={{
            backgroundColor: (selectedSubFolder === subFolder.title || clickedSubfolder === subFolder.title) ? '#F1E7FF' : '',
            marginLeft: '20px',
          }}
          onClick={() => {
            dispatch({
              type: 'setActiveSubFolderIndex',
              payload: subfolderIndex,
            });
            setSelectedSubFolder(subFolder.title)
            setClickedSubfolder(subFolder.title)
            history.replace(`/portfolio/${folder.id}/${subFolder.title}`)
            if(smallScreenIs){
              setShowSubfolders(null);
              setShowNavMenu(false);
            }
          }}
        >
          <span className="subFolder-Content">{subFolder.title}</span>
        </div>
      );
}

export default PortfolioSidebarSubfolder