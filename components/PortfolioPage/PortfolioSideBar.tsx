// import React, { useState } from 'react';
// import sidebarData from './portfolioSideBarData';
// import {

// } from './PortfolioSideBarStyle'

// const PortfolioSideBar = () => {
//   const [data, setData] = useState(sidebarData.files);
//   const [inputValue, setInputValue] = useState("");
//   const [showSubfolders, setShowSubfolders] = useState(null);
//   const [showInput, setShowInput] = useState({ main: false, sub: null, edit: null });
//   const [actionMenuIndex, setActionMenuIndex] = useState(null);

//   const handleAddFolder = (isMain, index = null) => {
//       const newData = [...data];
//       if (isMain) {
//           newData.push({ title: inputValue, type: 'Folder', files: [] });
//       } else {
//           newData[index].files.push({ title: inputValue, type: 'File' });
//       }
//       setData(newData);
//       setInputValue("");
//       setShowInput({ main: false, sub: null, edit: null });
//   };

//   const handleDeleteSubfolder = (mainIndex, subIndex) => {
//       const newData = [...data];
//       newData[mainIndex].files.splice(subIndex, 1);
//       setData(newData);
//       setActionMenuIndex(null);
//   };

//   const handleSaveEditSubfolder = (mainIndex, subIndex) => {
//       const newData = [...data];
//       newData[mainIndex].files[subIndex].title = inputValue;
//       setData(newData);
//       setInputValue("");
//       setShowInput({ ...showInput, edit: null });
//   };

//   return (
//       <div className="sideNavbar">
//           {data.map((folder, mainIndex) => (
//               <div key={mainIndex}>
//                   <div onClick={() => setShowSubfolders(showSubfolders === mainIndex ? null : mainIndex)}>
//                       {folder.title}
//                   </div>
//                   {showSubfolders === mainIndex && folder.files.map((subFolder, subIndex) => (
//                       <div key={subIndex} style={{ marginLeft: '20px' }}>
//                           <span>
//                               {showInput.edit !== subIndex ? subFolder.title : 
//                                   <input 
//                                       value={inputValue}
//                                       onChange={e => setInputValue(e.target.value)}
//                                       onKeyDown={e => e.key === 'Enter' && handleSaveEditSubfolder(mainIndex, subIndex)}
//                                   />
//                               }
//                               <span 
//                                   style={{ cursor: 'pointer', marginLeft: '10px' }}
//                                   onClick={() => setActionMenuIndex(actionMenuIndex === subIndex ? null : subIndex)}
//                               >
//                                   ⚙️
//                               </span>
//                           </span>
//                           {actionMenuIndex === subIndex && (
//                               <span style={{ marginLeft: '10px' }}>
//                                   <button onClick={() => handleDeleteSubfolder(mainIndex, subIndex)}>Delete</button>
//                                   {showInput.edit !== subIndex && (
//                                       <button onClick={() => {
//                                           setInputValue(subFolder.title);
//                                           setShowInput({ ...showInput, edit: subIndex });
//                                           setActionMenuIndex(null);
//                                       }}>Edit</button>
//                                   )}
//                                   {showInput.edit === subIndex && (
//                                       <button onClick={() => handleSaveEditSubfolder(mainIndex, subIndex)}>Save</button>
//                                   )}
//                               </span>
//                           )}
//                       </div>
//                   ))}
//                   {showSubfolders === mainIndex && (
//                       <div style={{ marginLeft: '20px' }}>
//                           {showInput.sub !== mainIndex && (
//                               <button onClick={() => setShowInput({ main: false, sub: mainIndex, edit: null })}>Add Sub-folder</button>
//                           )}
//                           {showInput.sub === mainIndex && (
//                               <div>
//                                   <input 
//                                       value={inputValue}
//                                       onChange={e => setInputValue(e.target.value)}
//                                       onKeyDown={e => e.key === 'Enter' && handleAddFolder(false, mainIndex)}
//                                   />
//                                   <button onClick={() => handleAddFolder(false, mainIndex)}>Add</button>
//                               </div>
//                           )}
//                       </div>
//                   )}
//               </div>
//           ))}
//           {!showInput.main && <button onClick={() => setShowInput({ main: true, sub: null, edit: null })}>Add Folder</button>}
//           {showInput.main && (
//               <div>
//                   <input 
//                       value={inputValue}
//                       onChange={e => setInputValue(e.target.value)}
//                       onKeyDown={e => e.key === 'Enter' && handleAddFolder(true)}
//                   />
//                   <button onClick={() => handleAddFolder(true)}>Add</button>
//               </div>
//           )}
//       </div>
//   );
// }

// export default PortfolioSideBar




import React, { useState } from 'react';
import sidebarData from './portfolioSideBarData';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './portfolioSideBar.css';

const PortfolioSideBar = () => {
  const [data, setData] = useState(sidebarData.files);
  const [inputValue, setInputValue] = useState("");
  const [showSubfolders, setShowSubfolders] = useState(null);
  const [showInput, setShowInput] = useState({ main: false, sub: null, edit: null, editMain: null });
  const [actionMenuMainIndex, setActionMenuMainIndex] = useState(null);
  const [actionMenuSubIndex, setActionMenuSubIndex] = useState(null);

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
    setInputValue("");
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
    setInputValue("");
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
    setInputValue("");
    setShowInput({ ...showInput, edit: null });
  };

  return (
    <div className="sideNavbar">
      {data.map((folder, mainIndex) => (
        <div key={mainIndex}>
            <div className='folder' onClick={() => setShowSubfolders(showSubfolders === mainIndex ? null : mainIndex)}>
                {showInput.editMain !== mainIndex ? folder.title :
                    <input 
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && handleSaveEditMainFolder(mainIndex)}
                    />
                }
                <div>
                    <span 
                        style={{ cursor: 'pointer', marginLeft: '10px' }}
                        onClick={(e) => {
                            setActionMenuMainIndex(actionMenuMainIndex === mainIndex ? null : mainIndex),
                            e.stopPropagation();
                        }}
                    >
                        <MoreHorizIcon />
                    </span>
                    <ArrowDropDownIcon />
                </div>
            </div>
            {actionMenuMainIndex === mainIndex && (
                <span style={{ marginLeft: '10px' }}>
                    <button onClick={() => handleDeleteMainFolder(mainIndex)}>Delete</button>
                    {showInput.editMain !== mainIndex && (
                        <button onClick={() => {
                            setInputValue(folder.title);
                            setShowInput({ ...showInput, editMain: mainIndex });
                            setActionMenuMainIndex(null);
                        }}>Rename</button>
                    )}
                </span>
            )}
            {showSubfolders === mainIndex && folder.files.map((subFolder, subIndex) => (
                <div key={subIndex} style={{ marginLeft: '20px' }}>
                    <span>
                        {showInput.edit !== subIndex ? subFolder.title : 
                            <input 
                                value={inputValue}
                                onChange={e => setInputValue(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && handleSaveEditSubfolder(mainIndex, subIndex)}
                            />
                        }
                        <span 
                            style={{ cursor: 'pointer', marginLeft: '10px' }}
                            onClick={(e) => {
                                setActionMenuSubIndex(actionMenuSubIndex === subIndex ? null : subIndex),
                                e.stopPropagation();
                            }}
                        >
                            <MoreHorizIcon />
                        </span>
                    </span>
                    {actionMenuSubIndex === subIndex && (
                        <span style={{ marginLeft: '10px' }}>
                            <button onClick={() => handleDeleteSubfolder(mainIndex, subIndex)}>Delete</button>
                            {showInput.edit !== subIndex && (
                                <button onClick={() => {
                                    setInputValue(subFolder.title);
                                    setShowInput({ ...showInput, edit: subIndex });
                                    setActionMenuSubIndex(null);
                                }}>Rename</button>
                            )}
                        </span>
                    )}
                </div>
            ))}
            {showSubfolders === mainIndex && (
                <div style={{ marginLeft: '20px' }}>
                    {showInput.sub !== mainIndex && (
                        <button onClick={() => setShowInput({ main: false, sub: mainIndex, edit: null, editMain: null })}>Add Sub-folder</button>
                    )}
                    {showInput.sub === mainIndex && (
                        <div>
                            <input 
                                value={inputValue}
                                onChange={e => setInputValue(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && handleAddFolder(false, mainIndex)}
                            />
                            <button onClick={() => handleAddFolder(false, mainIndex)} style={{display: 'block'}}>Add</button>
                        </div>
                    )}
                </div>
            )}
        </div>
      ))}
      {!showInput.main && <button onClick={() => setShowInput({ main: true, sub: null, edit: null, editMain: null })}>Add Folder</button>}
      {showInput.main && (
          <div>
              <input 
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleAddFolder(true)}
              />
              <button onClick={() => handleAddFolder(true)} style={{display: 'block'}}>Add Folder</button>
          </div>
      )}
    </div>
  );
}

export default PortfolioSideBar;



