import { addDocumentToPortfolio, updatePortfolio } from '../../service';

export const initailState = {
  portfolio: null,
  isLoading: true,
  activeMainIndex: 0,
  activeSubFolderIndex: 0,
};

export function reducer(state: any, action: any) {
  switch (action.type) {
    case 'deleteDocument':
      const { mainIndex, subFolderIndex, documentId } = action.payload;
      const newPortfolio = JSON.parse(JSON.stringify(state.portfolio)); 
      newPortfolio.files[mainIndex].files[subFolderIndex].files =
        newPortfolio.files[mainIndex].files[subFolderIndex].files.filter(
          (file) => file.id !== documentId
        );
      return { ...state, portfolio: newPortfolio };
    case 'setPortfolio':
      return { ...state, portfolio: action.payload };
    case 'loading':
      return { ...state, isLoading: action.payload };
    case 'setActiveMainIndex':
      return { ...state, activeMainIndex: action.payload };
    case 'setActiveSubFolderIndex':
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
      classId: subFolder.classId,
      courseId: subFolder.courseId,
      title: fileName,
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
  data,
  mainIndex: number,
  subFolderIndex: number = 0
) {
  console.log('getDocuments: ', data);

  if (
    mainIndex < 0 ||
    mainIndex >= data?.files?.length ||
    data?.files[mainIndex]?.type !== 'FOLDER'
  ) {
    return [];
  }

  const mainFolder = data?.files[mainIndex];

  const subFolder = mainFolder?.files?.[subFolderIndex];

  if (!subFolder?.files) return [];

  // Filter out files of type 'DOCUMENT'
  return subFolder?.files?.filter((file) => file.type === 'DOCUMENT');
}

export function getSubFolder(
  data,
  mainIndex: number,
  subFolderIndex: number = 0
) {
  console.log('getDocuments: ', data);

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
