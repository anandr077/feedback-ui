import { sub } from 'date-fns';
import { addDocumentToPortfolio, updatePortfolio } from '../../service';
import _ from 'lodash';

export const initailState = {
  portfolio: null,
  isLoading: true,
  activeMainFolderId: 0,
  activeSubFolderId: 0,
};

export function reducer(state: any, action: any) {
  switch (action.type) {
    case 'addDocument':
      return {
        ...state,
        portfolio:  addNewFile(state.portfolio, action.payload.folderId, action.payload.submission),
      };
    case 'addFolder':
      return {
        ...state,
        portfolio: addFolder(state.portfolio, action.payload),
      };
    case 'deleteFolder':
      return {
        ...state,
        portfolio: deleteFolder(state.portfolio, action.payload),
      }
    case 'editFolder':
      return {
        ...state,
        portfolio: editFolder(state.portfolio, action.payload)
      }
    case 'deleteDocument':
      return {
        ...state,
        portfolio: deleteDocument(state.portfolio, action.payload.id),
      };
    
    case 'setPortfolio':
      return { ...state, portfolio: action.payload };
    case 'loading':
      return { ...state, isLoading: action.payload };
    case 'setActiveMainFolderId':
      return { ...state, activeMainFolderId: action.payload };
    case 'setActiveSubFolderIndex':
      return { ...state, activeSubFolderIndex: action.payload };
    case 'addFolder':
      return { ...state, activeSubFolderIndex: action.payload };
    default:
      throw new Error();
  }
}


export function getDocuments(
  portfolio,
  maybeFolderId: string,
  categoryName: string = 'Drafts'
) {
  
  const folderId = createFolderIdToUse(portfolio, maybeFolderId);
  const mainFolder = portfolio.files.find(
    (classItem) => classItem.id === folderId
  );
  
  const subFolder = mainFolder?.files?.find(
    (folder) => folder.title === categoryName
  );
  

  return subFolder?.files || [];
}

function createFolderIdToUse(portfolio, folderId: string) {
  if (folderId === undefined || folderId === null) {
    return portfolio?.files[0]?.id;
  }
  return folderId;
}

export function getSubFolder(
  data,
  mainIndex: number,
  subFolderIndex: number = 0
) {
  if (
    mainIndex < 0 ||
    mainIndex >= data?.files?.length ||
    data?.files[mainIndex]?.type !== 'FOLDER'
  ) {
    return [];
  }

  const mainFolder = data?.files[mainIndex];

  return mainFolder?.files?.[subFolderIndex];
}

export const deleteDocument = (portfolio, documentId) => {
  
  const newPortfolio = {
    ...portfolio,
    files: portfolio.files?.map((folder) => ({
      ...folder,
      files: folder.files?.map((subFolder) => {
        const filteredFiles = subFolder.files?.filter((file) => {
          
          return file.id !== documentId;
        });
        return {
          ...subFolder,
          files: filteredFiles,
        };
      }),
    })),
  };
  return newPortfolio;
};
export function addNewFile(portfolio, folderId, submission) {
  const file = {
      title: submission.assignment.title,
      folderId: folderId,
      viewedAt: Number(new Date()),
      status: 'Draft',
      tags: [{name:'Draft'}],
      url: "#documents/" + submission.id,
  }

  return {
      ...portfolio,
      files: portfolio.files.map(folder => {
          if (folder.id === folderId) {
              const draftsFolderIndex = folder.files.findIndex(f => f.title === "Drafts");
              
              if (draftsFolderIndex >= 0) {
                  const updatedDraftsFiles = [
                      ...folder.files[draftsFolderIndex].files || [], 
                      file
                  ];
                  return {
                      ...folder,
                      files: folder.files.map((f, index) => 
                          index === draftsFolderIndex 
                          ? { ...f, files: updatedDraftsFiles } 
                          : f
                      )
                  };
              } else {
                  return folder;
              }
          }
          return folder;
      }),
      recentFiles: [file, ...portfolio.recentFiles]  // Add the new file to the start of the recentFiles array
  }
}


export const addFolder = (portfolio, folder) => {
  return {
    ...portfolio,
    files: [
      ...portfolio.files,
      folder
    ],
  };
};


export const deleteFolder = (portfolio, folderId) =>{
   const newPortfolio = {
    ...portfolio,
    files: portfolio.files.filter(folder => {
      return folder.id !== folderId
    })
   }
   return newPortfolio
}


export const editFolder = (portfolio, folderData) =>{
      const newPortfolio = {
        ...portfolio,
        files: portfolio.files.map(folder =>{
           if(folder.id === folderData.id){
              return {...folder, title: folderData.title}
           }
           return folder
        })
      }
      return newPortfolio
}
