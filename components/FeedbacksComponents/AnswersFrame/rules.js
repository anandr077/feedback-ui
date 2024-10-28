export const isDeleteAndRestartButton = (textExtractedAt, pageMode, mainTab) => {
  return pageMode === 'DRAFT' && textExtractedAt && mainTab === "2";
};

export const isUploadTabs = (pageMode, answer) => {
  return (pageMode === 'DRAFT' || pageMode === 'REVISE') && (answer?.answer.textExtractedAt === null || answer?.answer.textExtractedAt === undefined);
};

export const isPreviewButton = (answer, pageMode) => {
  return (
    (pageMode === 'DRAFT' || pageMode === 'REVISE') &&
    (answer?.answer.textExtractedAt === null || answer?.answer.textExtractedAt === undefined)
  );
};

export const isTypedAndHandWrittenTab = (textExtractedAt, pageMode) => {
  return textExtractedAt || pageMode === 'DRAFT';
};
