import React, { useState } from 'react';
import {FileContainer} from './style';
import { DialogContent, Dialog } from '@mui/material';
import PreviewPdfFile from '../PreviewPdfFile';

const UploadedFilePopup = ({ previewedFileUrl, removePreviewdFile }) => {
  const [open, setOpen] = useState(true);
  const [isImageValid, setIsImageValid] = useState(null);

  const checkImgUrl = new window.Image();
  checkImgUrl.src = previewedFileUrl;

  checkImgUrl.onload = () => {
    setIsImageValid(true);
  };

  checkImgUrl.onerror = () => {
    setIsImageValid(false);
  };

  const handleClose = () => {
    setOpen(false);
    removePreviewdFile();
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <FileContainer>
          {isImageValid ? (
            <img
              src={previewedFileUrl}
            />
          ) : (
            <PreviewPdfFile url={previewedFileUrl} />
          )}
        </FileContainer>
      </DialogContent>
    </Dialog>
  );
};

export default UploadedFilePopup;
