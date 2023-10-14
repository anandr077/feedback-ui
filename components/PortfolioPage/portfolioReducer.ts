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
    case 'addFolder':
      return {
        ...state,
        portfolio: addFolder(state.portfolio, action.payload),
      };
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

export function addFile(
  portfolio,
  mainIndex: number,
  subFolderIndex: number,
  fileName: string,
  mutation
) {
  const newData = { ...portfolio, files: [...portfolio.files] };

  if (
    mainIndex < 0 ||
    mainIndex >= newData.files.length ||
    newData.files[mainIndex].type !== 'FOLDER'
  ) {
    throw new Error('Invalid mainIndex!');
  }

  const mainFolder = {
    ...newData.files[mainIndex],
    files: [...(newData.files[mainIndex].files || [])],
  };
  newData.files[mainIndex] = mainFolder;

  if (
    subFolderIndex < 0 ||
    subFolderIndex >= mainFolder.files.length ||
    mainFolder.files[subFolderIndex].type !== 'FOLDER'
  ) {
    throw new Error('Invalid subFolderIndex!');
  }

  const subFolder = {
    ...mainFolder.files[subFolderIndex],
    files: [...(mainFolder.files[subFolderIndex].files || [])],
  };
  mainFolder.files[subFolderIndex] = subFolder;
  const tempFile = { id: 'temp', title: fileName, type: 'FILE' };
  subFolder.files.unshift(tempFile);

  mutation.mutate(
    {
      classId: mainFolder.classId,
      courseId: subFolder.courseId,
      title: fileName,
      folderId: mainFolder.id,
    },
    {
      onMutate: () => {
        const previousPortfolio = { ...portfolio };

        portfolio.files[mainIndex].files[subFolderIndex] = subFolder;
        return previousPortfolio;
      },
      onSuccess: (data) => {
        subFolder.files = subFolder.files.map((file) =>
          file.id === 'temp' ? data : file
        );
        portfolio.files[mainIndex].files[subFolderIndex] = subFolder;
      },
      onError: (_, __, context) => {
        // Reverting to the previous state in case of an error
        if (context) portfolio = context;
      },
    }
  );
}

export function getDocuments(
  portfolio,
  maybeFolderId: string,
  categoryName: string = 'Drafts'
) {
  console.log('Portfolio', portfolio);
  console.log('maybeFolderId', maybeFolderId);
  console.log('categoryName', categoryName);
  const folderId = createFolderIdToUse(portfolio, maybeFolderId);
  const mainFolder = portfolio.files.find(
    (classItem) => classItem.id === folderId
  );
  console.log('mainFolder', mainFolder);
  const subFolder = mainFolder?.files?.find(
    (folder) => folder.title === categoryName
  );
  console.log('subFolder', subFolder);

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
  console.log('Old', portfolio);
  console.log('documentId', documentId);
  const newPortfolio = {
    ...portfolio,
    files: portfolio.files?.map((folder) => ({
      ...folder,
      files: folder.files?.map((subFolder) => {
        const filteredFiles = subFolder.files?.filter((file) => {
          console.log('file.id', file.id);
          console.log('documentId', documentId);
          return file.id !== documentId;
        });
        return {
          ...subFolder,
          files: filteredFiles,
        };
      }),
    })),
  };
  console.log('New', newPortfolio);
  return newPortfolio;
};

export const addFolder = (portfolio, folderName) => {
  return {
    ...portfolio,
    files: [
      ...portfolio.files,
      {
        id: 'temp',
        title: folderName,
        type: 'FOLDER',
        files: [
          {
            id: 'temp',
            title: 'Drafts',
            type: 'FOLDER',
            files: [],
          },
        ],
      },
    ],
  };
};
