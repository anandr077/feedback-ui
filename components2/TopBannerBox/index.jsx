import React from 'react';
import { Snackbar, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RoundedBorderSubmitBtn from '../Buttons/RoundedBorderSubmitBtn';
import questionMark from '../../static/img/24questionbordered.svg';
import QuestionTooltip from '../../components2/QuestionTooltip';
import { BannerTextContainer } from './style';

const TopBannerBox = ({
  onclickFn,
  bannerText,
  showBannerButton = true,
  openBanner,
  setOpenBanner,
  showTooltip = true,
}) => {
  return (
    <Snackbar
      open={openBanner}
      onClose={() => setOpenBanner(true)}
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
          gap: '5px',
          width: '100%',
          backgroundColor: 'var(--blue-chalk)',
          color: 'var(--royal-purple)',
          padding: '20px 40px',
          borderRadius: '20px',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <BannerTextContainer>{bannerText}</BannerTextContainer>
          {showTooltip && (
            <QuestionTooltip text={bannerText} img={questionMark} />
          )}
        </Typography>
        {showBannerButton && (
          <RoundedBorderSubmitBtn text={'Mark Now'} onClickFn={onclickFn} />
        )}

        <IconButton
          size="small"
          onClick={() => setOpenBanner(false)}
          sx={{ color: 'var(--light-mode-purple)', padding: 0 }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Snackbar>
  );
};

export default TopBannerBox;
