import {
    addDocumentToPortfolio,
    updatePortfolio,
  } from '../../service';

export const initailState = {
    portfolio: null,
    isLoading: true,
    activeMainIndex: 0,
    activeSubFolderIndex: 0,
  };


export function reducer(state: any, action: any) {
    switch (action.type) {
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
    dispatch
  ) {
    // Clone the data for immutability
    const newData = { ...portfolio, files: [...portfolio.files] };

    // Ensure the mainIndex is within bounds
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

    // Ensure the subFolderIndex is within bounds and is a folder
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
    console.log('subFolder', subFolder);
    addDocumentToPortfolio(
      subFolder.courseId,
      subFolder.classId,
      fileName
    ).then((document) => {
      console.log('document', document);
      // Add the new file
      const newFile = {
        type: 'DOCUMENT',
        title: fileName,
        status: '',
        documentId: document.id,
        courseId: subFolder.courseId,
        classId: subFolder.classId,
        description: 'The description',
        url: '#documents/' + document.id,
      };
      subFolder.files.push(newFile);
      console.log('newData', newData);

      updatePortfolio(newData).then((result) => {
        dispatch({ type: 'setPortfolio', payload: result });
        // window.location.href = '#documents/' + document.id;
      });
    });
  }


export function getDocuments(data, mainIndex: number, subFolderIndex: number = 0) {
    console.log('getDocuments: ', data);

    if (
      mainIndex < 0 ||
      mainIndex >= data?.files?.length ||
      data?.files[mainIndex]?.type !== 'FOLDER'
    ) {
      return [];
    }

    const mainFolder = data?.files[mainIndex];

    // if (
    //   subFolderIndex < 0 ||
    //   subFolderIndex >= mainFolder.files.length ||
    //   mainFolder?.files[subFolderIndex].type !== 'FOLDER'
    // ) {
    //   throw new Error('Invalid subFolderIndex!');
    // }

    const subFolder = mainFolder?.files?.[subFolderIndex];

    if (!subFolder?.files) return [];

    // Filter out files of type 'DOCUMENT'
    return subFolder?.files?.filter((file) => file.type === 'DOCUMENT');
  }
  