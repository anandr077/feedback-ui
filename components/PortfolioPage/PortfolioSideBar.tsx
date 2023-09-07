import React, { useState, useEffect, useRef } from 'react';
import sidebarData from './portfolioSideBarData';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import closeIcon from '../../static/icons/closeIcon.png';
import menuIcon from '../../static/icons/menuBar.png';
import editSM from '../../static/icons/EditSM.png';
import deleteSM from '../../static/icons/deleteSM.png';
import './portfolioSideBar.css';

const PortfolioSideBar = () => {
  const [data, setData] = useState(sidebarData.files);
  const [inputValue, setInputValue] = useState('');
  const [showSubfolders, setShowSubfolders] = useState(null);
  const [showInput, setShowInput] = useState({
    main: false,
    sub: null,
    edit: null,
    editMain: null,
  });
  const [actionMenuMainIndex, setActionMenuMainIndex] = useState(null);
  const [actionMenuSubIndex, setActionMenuSubIndex] = useState(null);
  const [isActive, setIsActive] = useState(0);
  const [showArrowUp, setShowArrowUp] = useState(false);
  const [showArrowDropDown, setShowArrowDropDown] = useState(true);
  const [showNavMenu, setShowNavMenu] = useState(false);
  const subActionBtnRef = useRef(null);
  const mainActionBtnRef = useRef(null);


  //this userEffect controll the delete and edit button click outside of the button. if user clicks outside of the button this useEffect closes the button box
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (subActionBtnRef.current && !subActionBtnRef.current.contains(event.target)) {
        setActionMenuSubIndex(null);
      }
      if (mainActionBtnRef.current && !mainActionBtnRef.current.contains(event.target)) {
        setActionMenuMainIndex(null);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);


  const handleDeleteMainFolder = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    setActionMenuMainIndex(null);
  };

  const handleSaveEditMainFolder = (index) => {
    const newData = [...data];
    newData[index].title = inputValue;
    setData(newData);
    setInputValue('');
    setShowInput({ ...showInput, editMain: null });
  };

  const handleAddFolder = (isMain, index = null) => {
    const newData = [...data];
    if (isMain) {
      newData.push({ title: inputValue, type: 'Folder', files: [] });
    } else {
      newData[index].files.push({ title: inputValue, type: 'File' });
    }
    setData(newData);
    setInputValue('');
    setShowInput({ main: false, sub: null, edit: null, editMain: null });
  };

  const handleDeleteSubfolder = (mainIndex, subIndex) => {
    const newData = [...data];
    newData[mainIndex].files.splice(subIndex, 1);
    setData(newData);
    setActionMenuSubIndex(null);
  };

  const handleSaveEditSubfolder = (mainIndex, subIndex) => {
    const newData = [...data];
    newData[mainIndex].files[subIndex].title = inputValue;
    setData(newData);
    setInputValue('');
    setShowInput({ ...showInput, edit: null });
  };

  return (
    <div className="sideNavbar">
      <div className="SideNavHeader" style={{marginBottom: showNavMenu ? '16px' : '0px'}}>
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
      {data.map((folder, mainIndex) => (
        <div key={mainIndex} className={`folderContainer ${showNavMenu ? 'showFolder' : 'hideFolder'}`}>
          <div
            className={`folder ${isActive === mainIndex ? 'active' : ''}`}
            onClick={() => {
              setShowSubfolders(
                showSubfolders === mainIndex ? null : mainIndex
              );
              setIsActive(mainIndex);
              setShowArrowUp(isActive === mainIndex ? !showArrowUp : true);
            }}
          >
            {showInput.editMain !== mainIndex ? (
              folder.title
            ) : (
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) =>
                  e.key === 'Enter' && handleSaveEditMainFolder(mainIndex)
                }
                className="FolderInputBox"
                style={{ padding: '8px 12px' }}
              />
            )}
            <div>
              <span
                style={{ cursor: 'pointer', marginLeft: '10px' }}
                onClick={(e) => {
                  setActionMenuMainIndex(
                    actionMenuMainIndex === mainIndex ? null : mainIndex
                  ),
                    e.stopPropagation();
                }}
                ref={mainActionBtnRef}
              >
                <MoreHorizIcon />
              </span>

              {showArrowDropDown &&
                (showArrowUp && isActive === mainIndex ? (
                  <ArrowDropUpIcon />
                ) : (
                  <ArrowDropDownIcon />
                ))}
            </div>
          </div>
          {actionMenuMainIndex === mainIndex && (
            <span className="subActionBtn">
              <button onClick={() => handleDeleteMainFolder(mainIndex)}>
                Delete
              </button>
              {showInput.editMain !== mainIndex && (
                <button
                  onClick={() => {
                    setInputValue(folder.title);
                    setShowInput({ ...showInput, editMain: mainIndex });
                    setActionMenuMainIndex(null);
                    setShowArrowDropDown(false);
                  }}
                >
                  Rename
                </button>
              )}
            </span>
          )}
          {showSubfolders === mainIndex &&
            folder.files.map((subFolder, subIndex) => (
              <div
                className="folder subFolder"
                key={subIndex}
                style={{ marginLeft: '20px' }}
              >
                <span className="subFolder-Content">
                  {showInput.edit !== subIndex ? (
                    subFolder.title
                  ) : (
                    <input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) =>
                        e.key === 'Enter' &&
                        handleSaveEditSubfolder(mainIndex, subIndex)
                      }
                      className="FolderInputBox"
                      style={{ padding: '8px 12px' }}
                    />
                  )}
                  <span
                    style={{ cursor: 'pointer', marginLeft: '10px' }}
                    onClick={(e) => {
                      setActionMenuSubIndex(
                        actionMenuSubIndex === subIndex ? null : subIndex
                      ),
                        e.stopPropagation();
                    }}
                  >
                    <MoreHorizIcon />
                  </span>
                </span>
                {actionMenuSubIndex === subIndex && (
                  <span className="subActionBtn" ref={subActionBtnRef}>
                    <button
                      onClick={() => handleDeleteSubfolder(mainIndex, subIndex)}
                    >
                      <img src={deleteSM} alt="Delete Btn" />
                      Delete
                    </button>
                    {showInput.edit !== subIndex && (
                      <button
                        onClick={() => {
                          setInputValue(subFolder.title);
                          setShowInput({ ...showInput, edit: subIndex });
                          setActionMenuSubIndex(null);
                        }}
                      >
                        <img src={editSM} alt="Edit Btn" />
                        Rename
                      </button>
                    )}
                  </span>
                )}
              </div>
            ))}
          {showSubfolders === mainIndex && (
            <div style={{ marginLeft: '20px' }}>
              {showInput.sub !== mainIndex && (
                <button
                  className="newFolderBtn"
                  onClick={() =>
                    setShowInput({
                      main: false,
                      sub: mainIndex,
                      edit: null,
                      editMain: null,
                    })
                  }
                >
                  + New Folder
                </button>
              )}
              {showInput.sub === mainIndex && (
                <div>
                  <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === 'Enter' && handleAddFolder(false, mainIndex)
                    }
                    className="FolderInputBox"
                    placeholder="New Folder |"
                  />
                  <button
                    className="newFolderBtn"
                    onClick={() => {
                      if (inputValue.trim() !== '') {
                        handleAddFolder(false, mainIndex);
                      }
                    }}
                  >
                    + New Folder
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
      {!showInput.main && (
        <button
          className={`newFolderBtn ${showNavMenu ? 'showBtn' : 'hideBtn'}`}
          onClick={() =>
            setShowInput({ main: true, sub: null, edit: null, editMain: null })
          }
        >
          + New Folder
        </button>
      )}
      {showInput.main && (
        <div className={showNavMenu ? 'showBtn' : 'hideBtn'}>
          <input
            className="FolderInputBox"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddFolder(true)}
            placeholder="New Folder |"
          />
          <button
            onClick={() => {
              if (inputValue.trim() !== '') {
                handleAddFolder(true);
              }
            }}
            className="newFolderBtn"
          >
            + New Folder
          </button>
        </div>
      )}
    </div>
  );
};

export default PortfolioSideBar;
