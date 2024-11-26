import React, { useState } from 'react';
import { Snackbar, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RoundedBorderSubmitBtn from '../Buttons/RoundedBorderSubmitBtn';

const TopMessageBox = () => {
    const [openMessageBox, setOpenMessageBox] = useState(true)
  return (
    <Snackbar
      open={openMessageBox}
      onClose={''}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      sx={{
        '& .MuiSnackbarContent-root': {
          width: { xs: '90%', sm: '400px', md: '600px' }, 
          minHeight: '100px', 
          backgroundColor: '#000', 
          color: '#fff',
          borderRadius: '8px', 
          padding: '16px',
          boxShadow: '0px 4px 6px rgba(0, 255, 42, 0.2)',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '10px',
          width: '100%',
          backgroundColor: 'var(--blue-chalk)',
          color: 'var(--royal-purple)',
          padding: '20px 40px',
          borderRadius: '20px',
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: 'bold', marginRight: '15px' }}
        >
          Do you want to review this task?
        </Typography>
        <RoundedBorderSubmitBtn
          text={'Review'}
          onClickFn={() => console.log('')}
        />
        <IconButton size="small" onClick={()=> setOpenMessageBox(false)} sx={{ color: 'var(--light-mode-purple)' }}>
          <CloseIcon />
        </IconButton>
      </Box>
    </Snackbar>
  );
};

export default TopMessageBox;
