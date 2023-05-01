import React from "react";
import { useMediaQuery } from "react-responsive";
import SnackbarContext from '../SnackbarContext';
import { Snackbar } from '@mui/material';
export default function ReactiveRender(props) {
  const { snackbarOpen, snackbarMessage, closeSnackbar } = React.useContext(SnackbarContext);

  const { mobile, tablet, laptop, desktop } = props;
  const isMobileView = useMediaQuery({ maxWidth: 1023 });
  const isTabletView = useMediaQuery({ minWidth: 1024, maxWidth: 1439 });
  const isLaptopView = useMediaQuery({ minWidth: 1440, maxWidth: 1919 });
  const isDesktopView = useMediaQuery({ minWidth: 1920 });
  return (
    <>
      <Snackbar
    open={snackbarOpen}
    message={snackbarMessage}
    onClose={closeSnackbar}
    autoHideDuration={3000}
  />
      {isMobileView && mobile}
      {isTabletView && tablet}
      {isLaptopView && laptop}
      {isDesktopView && desktop}
    </>
  );
}

export function isMobileView() {
  const isMobileView = useMediaQuery({ maxWidth: 1023 });
  return isMobileView;
}
export function isTabletView() {
  const isTabletView = useMediaQuery({ minWidth: 1024, maxWidth: 1439 });
  return isTabletView;
}

export function isLaptopView() {
  const isLaptopView = useMediaQuery({ minWidth: 1440, maxWidth: 1919 });
  return isLaptopView;
}

export function isDesktopView() {
  const isDesktopView = useMediaQuery({ minWidth: 1920 });
  return isDesktopView;
}
