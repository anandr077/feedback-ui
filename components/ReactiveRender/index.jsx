import React from 'react';
import { useMediaQuery } from 'react-responsive';

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
  const { mobile, tablet, laptop, desktop } = props;
  const mobileView = isMobileView();
  const tabletView = isTabletView();
  const laptopView = isLaptopView();
  const desktopView = isDesktopView();

  return (
    <>
      {mobileView && mobile}
      {tabletView && tablet}
      {laptopView && laptop}
      {desktopView && desktop}
    </>
  );
}
