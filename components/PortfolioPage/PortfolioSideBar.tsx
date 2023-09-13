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
import { getPortfolio, updatePortfolio } from '../../service';

const PortfolioSideBar = () => {
  const [portfolio, setPortfolio] = useState(null);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        subActionBtnRef.current &&
        !subActionBtnRef.current.contains(event.target)
      ) {
        setActionMenuSubIndex(null);
      }
      if (
        mainActionBtnRef.current &&
        !mainActionBtnRef.current.contains(event.target)
      ) {
        setActionMenuMainIndex(null);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    Promise.all([
      getPortfolio(),
    ]).then(([result]) => {
      if (result) {
        console.log("result", result);
        setPortfolio(result)
      }
    });
  }, []);

  
  const handleDeleteMainFolder = (indexToDelete) => {
     const updatedData = { ...portfolio };
      updatedData.files =
      portfolio.files.filter(
          (_, index) => index !== indexToDelete
        );
      
      updatePortfolio(updatedData)
      .then((result)=>{
         console.log(result)
         setPortfolio(result)
      })

    setActionMenuMainIndex(null);
  };

  

  const handleSaveEditMainFolder = (index) => {
    const updatedData = { ...portfolio };
    updatedData.files[index].title = inputValue;
    updatePortfolio(updatedData)
    .then((result)=>{
        console.log(result)
        setPortfolio(result)
      });

    setShowInput({ ...showInput, editMain: null });
  };

  const handleAddFolder = async(isMain, index = null) => {
    const updatedData = { ...portfolio };
    if (isMain) {
      updatedData.files.push({ title: inputValue, type: 'FOLDER'});
    } else {
      if (!updatedData.files[index].files) {
        updatedData.files[index].files = [];
      }
      updatedData.files[index].files.push({ title: inputValue, type: 'FOLDER' });
    }
    updatePortfolio(updatedData)
    .then((result)=>{
        console.log(result)
        setPortfolio(result)
        setInputValue('');
        setShowInput({ main: false, sub: null, edit: null, editMain: null });
      }); 
    
  };

  const handleDeleteSubfolder = (mainIndex, subIndex) => {
    const updatedData = { ...portfolio };
    updatedData.files[mainIndex].files =  portfolio.files[mainIndex].files.filter(
      (_, index) => index !== subIndex
    );
    updatePortfolio(updatedData).then((result)=>{
        console.log(result)
        setPortfolio(result)
        setActionMenuSubIndex(null);
      });
  };

  const handleSaveEditSubfolder = (mainIndex, subIndex) => {
    const updatedData = { ...portfolio };
    updatedData.files[mainIndex].files[subIndex].title = inputValue;
    updatePortfolio(updatedData).then((result)=>{
        console.log(result)
        setPortfolio(result)
        setInputValue('');
        setShowInput({ ...showInput, edit: null });
      });
  };
  
  return (
    <div className="sideNavbar">
      {sideNavHeaderMobile(showNavMenu, setShowNavMenu)}

      {portfolio?.files?.map((folder, mainIndex) =>
        mainFolderContainer(
          mainIndex,
          showNavMenu,
          isActive,
          setShowSubfolders,
          showSubfolders,
          setIsActive,
          setShowArrowUp,
          showArrowUp,
          showInput,
          folder,
          inputValue,
          setInputValue,
          handleSaveEditMainFolder,
          setActionMenuMainIndex,
          actionMenuMainIndex,
          mainActionBtnRef,
          showArrowDropDown,
          handleDeleteMainFolder,
          setShowInput,
          setShowArrowDropDown,
          handleSaveEditSubfolder,
          setActionMenuSubIndex,
          actionMenuSubIndex,
          subActionBtnRef,
          handleDeleteSubfolder,
          handleAddFolder
        )
      )}
      {!showInput.main && portfolio?.files?.length < 10 && (
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
            onKeyDown={(e) => e.key === 'Enter' && inputValue.trim() !== '' && handleAddFolder(true)}
            placeholder="New Folder"
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

function mainFolderContainer(
  mainIndex: number,
  showNavMenu: boolean,
  isActive: number,
  setShowSubfolders: React.Dispatch<React.SetStateAction<null>>,
  showSubfolders: null,
  setIsActive: React.Dispatch<React.SetStateAction<number>>,
  setShowArrowUp: React.Dispatch<React.SetStateAction<boolean>>,
  showArrowUp: boolean,
  showInput: { main: boolean; sub: null; edit: null; editMain: null },
  folder: {
    title: string;
    type: string;
    files: { title: string; type: string; preview: string }[];
  },
  inputValue: string,
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
  handleSaveEditMainFolder: (index: any) => void,
  setActionMenuMainIndex: React.Dispatch<React.SetStateAction<null>>,
  actionMenuMainIndex: null,
  mainActionBtnRef: React.MutableRefObject<null>,
  showArrowDropDown: boolean,
  handleDeleteMainFolder: (index: any) => void,
  setShowInput: React.Dispatch<
    React.SetStateAction<{
      main: boolean;
      sub: null;
      edit: null;
      editMain: null;
    }>
  >,
  setShowArrowDropDown: React.Dispatch<React.SetStateAction<boolean>>,
  handleSaveEditSubfolder: (mainIndex: any, subIndex: any) => void,
  setActionMenuSubIndex: React.Dispatch<React.SetStateAction<null>>,
  actionMenuSubIndex: null,
  subActionBtnRef: React.MutableRefObject<null>,
  handleDeleteSubfolder: (mainIndex: any, subIndex: any) => void,
  handleAddFolder: (isMain: any, index?: null) => void
): JSX.Element {
  return (
    <div
      key={mainIndex}
      className={`folderContainer ${showNavMenu ? 'showFolder' : 'hideFolder'}`}
    >
      <div
        className={`folder ${isActive === mainIndex ? 'active' : ''}`}
        onClick={() => {
          setShowSubfolders(showSubfolders === mainIndex ? null : mainIndex);
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
        folder.files && folder.files.map((subFolder, subIndex) =>
          subFolderContainer(
            subIndex,
            showInput,
            subFolder,
            inputValue,
            setInputValue,
            handleSaveEditSubfolder,
            mainIndex,
            setActionMenuSubIndex,
            actionMenuSubIndex,
            subActionBtnRef,
            handleDeleteSubfolder,
            setShowInput
          )
        )}
      {showSubfolders === mainIndex  && (
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
                  e.key === 'Enter' && inputValue.trim() !== '' && handleAddFolder(false, mainIndex)
                }
                className="FolderInputBox"
                placeholder="New Folder"
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
  );
}

function subFolderContainer(
  subIndex: number,
  showInput: { main: boolean; sub: null; edit: null; editMain: null },
  subFolder: { title: string; type: string; preview: string },
  inputValue: string,
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
  handleSaveEditSubfolder: (mainIndex: any, subIndex: any) => void,
  mainIndex: never,
  setActionMenuSubIndex: React.Dispatch<React.SetStateAction<null>>,
  actionMenuSubIndex: null,
  subActionBtnRef: React.MutableRefObject<null>,
  handleDeleteSubfolder: (mainIndex: any, subIndex: any) => void,
  setShowInput: React.Dispatch<
    React.SetStateAction<{
      main: boolean;
      sub: null;
      edit: null;
      editMain: null;
    }>
  >
): JSX.Element {
  return (
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
              e.key === 'Enter' && handleSaveEditSubfolder(mainIndex, subIndex)
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
      {actionMenuSubIndex === subIndex &&
        subActionBtns(
          subActionBtnRef,
          handleDeleteSubfolder,
          mainIndex,
          subIndex,
          showInput,
          setInputValue,
          subFolder,
          setShowInput,
          setActionMenuSubIndex
        )}
    </div>
  );
}

function subActionBtns(
  subActionBtnRef: React.MutableRefObject<null>,
  handleDeleteSubfolder: (mainIndex: any, subIndex: any) => void,
  mainIndex: never,
  subIndex: never,
  showInput: { main: boolean; sub: null; edit: null; editMain: null },
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
  subFolder: { title: string; type: string; preview: string },
  setShowInput: React.Dispatch<
    React.SetStateAction<{
      main: boolean;
      sub: null;
      edit: null;
      editMain: null;
    }>
  >,
  setActionMenuSubIndex: React.Dispatch<React.SetStateAction<null>>
): React.ReactNode {
  return (
    <span className="subActionBtn" ref={subActionBtnRef}>
      <button onClick={() => handleDeleteSubfolder(mainIndex, subIndex)}>
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
