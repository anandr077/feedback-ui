import React from 'react';
import { useMediaQuery } from 'react-responsive';
import SnackbarContext from '../SnackbarContext';
import { Snackbar } from '@mui/material';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export function isMobileView() {
  return useMediaQuery({ maxWidth: 765 });
}

export function isTabletView() {
  return useMediaQuery({ minWidth: 766, maxWidth: 1024 });
}

export function isLaptopView() {
  return useMediaQuery({ minWidth: 1025, maxWidth: 1440 });
}

export function isDesktopView() {
  return useMediaQuery({ minWidth: 1441 });
}

export function isSmallScreen() {
  return useMediaQuery({ maxWidth: 1024 });
}

export default function ReactiveRender(props) {
  const { snackbarOpen, snackbarMessage, snackbarLink, closeSnackbar } =
    React.useContext(SnackbarContext);
  const { mobile, tablet, laptop, desktop } = props;
  const mobileView = isMobileView();
  const tabletView = isTabletView();
  const laptopView = isLaptopView();
  const desktopView = isDesktopView();

  const linkButton = snackbarLink ? (
    <Button
      color="secondary"
      style={{ color: 'white' }}
      size="small"
      onClick={() => {
        window.location.href = snackbarLink;
        closeSnackbar();
      }}
    >
      View
    </Button>
  ) : (
    <></>
  );
  const action = (
    <React.Fragment>
      {linkButton}
      <IconButton
        size="small"
        aria-label="close"
        style={{ color: 'white' }}
        onClick={closeSnackbar}
      >
        <CloseIcon fontSize="small" style={{ color: 'white' }} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <Snackbar
        open={snackbarOpen}
        message={snackbarMessage}
        onClose={closeSnackbar}
        autoHideDuration={6000}
        action={action}
      />
      {mobileView && mobile}
      {tabletView && tablet}
      {laptopView && laptop}
      {desktopView && desktop}
    </>
  );
}
