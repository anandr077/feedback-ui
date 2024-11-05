export const isDeleteAndRestartButton = (textExtractedAt, pageMode, mainTab) => {
  return pageMode === 'DRAFT' && textExtractedAt && mainTab === "2";
};

export const isUploadTabs = (pageMode, answer) => {
  return (pageMode === 'DRAFT' || pageMode === 'REVISE') && (answer?.answer.textExtractedAt === null || answer?.answer.textExtractedAt === undefined);
};

export const isPreviewButton = (answer, pageMode, filesLength) => {
  return (
    (pageMode === 'DRAFT' || pageMode === 'REVISE') &&
    (answer?.answer.textExtractedAt === null || answer?.answer.textExtractedAt === undefined)
    && filesLength !== 0
  );
};

export const isTypedAndHandWrittenTab = (textExtractedAt, pageMode) => {
  return textExtractedAt || pageMode === 'DRAFT';
};

export const isContinueButtonAccessible = (uploadedFileLength) =>{
  return uploadedFileLength !== 0
}

export const isTabAccessable = (fileLength, isUploadingFiles=false) =>{
   return fileLength === 0 || isUploadingFiles
}
