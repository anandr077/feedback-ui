import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import arrowRight from '../../../static/img/arrowright.svg';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiPaper-root': {
    width: '75%', // Set the width to 75%
  },
}));

export default function CommonMistakesPopup({ studentsCommonMistakes }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        onClick={handleClickOpen}
        style={{
          fontFamily: 'IBM Plex Sans',
          fontStyle: 'normal',
          lineHeight: '21px',
          color: '#7200E0',
          fontSize: '16px',
          fontWeight: '500',
        }}
      >
        View All
        <img src={arrowRight} />
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        style={{
          fontFamily: 'IBM Plex Sans',
          fontStyle: 'normal',
          lineHeight: 'normal',
          color: '#1e252a',
          fontSize: '14px',
          fontWeight: '400',
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Most common feedback
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>{studentsCommonMistakes}</DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
