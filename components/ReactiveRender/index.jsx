import React from 'react';
import { useMediaQuery } from 'react-responsive';
import SnackbarContext from '../SnackbarContext';
import { Snackbar } from '@mui/material';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
export default function ReactiveRender(props) {
  const { snackbarOpen, snackbarMessage, snackbarLink, closeSnackbar } =
    React.useContext(SnackbarContext);

  const { mobile, tablet, laptop, desktop } = props;
  const isMobileView = useMediaQuery({ maxWidth: 1023 });
  const isTabletView = useMediaQuery({ minWidth: 1024, maxWidth: 1199 });
  const isLaptopView = useMediaQuery({ minWidth: 1200, maxWidth: 1919 });
  const isDesktopView = useMediaQuery({ minWidth: 1920 });
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
      {isMobileView && mobile}
      {isTabletView && tablet}
      {isLaptopView && laptop}
      {isDesktopView && desktop}
    </>
  );
}

export function isSmallScreen() {
  return isMobileView() || isTabletView();
}
export function isMobileView() {
  const isMobileView = useMediaQuery({ maxWidth: 1023 });
  return isMobileView;
}
export function isTabletView() {
  const isTabletView = useMediaQuery({ minWidth: 1024, maxWidth: 1199 });
  return isTabletView;
}
export function useIsMobileView() {
  return useMediaQuery({ maxWidth: 1023 });
}

export function useIsTabletView() {
  return useMediaQuery({ minWidth: 1024, maxWidth: 1199 });
}

export function useIsSmallScreen() {
  const isMobile = useIsMobileView();
  const isTablet = useIsTabletView();
  return isMobile || isTablet;
}
export function isLaptopView() {
  const isLaptopView = useMediaQuery({ minWidth: 1200, maxWidth: 1919 });
  return isLaptopView;
}

export function isDesktopView() {
  const isDesktopView = useMediaQuery({ minWidth: 1920 });
  return isDesktopView;
}
