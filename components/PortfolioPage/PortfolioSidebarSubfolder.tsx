import React from 'react'

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
    folder,
    history
}) => {
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

export default PortfolioSidebarSubfolder