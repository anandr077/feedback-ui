export const isDeleteAndRestartButton = (fileUrls, pageMode) =>{
  return fileUrls?.length > 0 && pageMode === "DRAFT";
}

export const isTabSection = (fileUrls) =>{
  return fileUrls
}

export const isPreviewButton = (fileUrls) =>{
  return fileUrls
}

export const isTypedAndHandWrittenTab = (fileUrls, pageMode) =>{
  return fileUrls?.length > 0 || pageMode === "DRAFT";
}