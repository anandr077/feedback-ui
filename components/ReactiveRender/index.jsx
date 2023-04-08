import React from "react";
import { useMediaQuery } from "react-responsive";

export default function ReactiveRender(props) {
  const { mobile, tablet, laptop, desktop } = props;
  const isMobileView = useMediaQuery({ maxWidth: 1023 });
  const isTabletView = useMediaQuery({ minWidth: 1024, maxWidth: 1439 });
  const isLaptopView = useMediaQuery({ minWidth: 1440, maxWidth: 1919 });
  const isDesktopView = useMediaQuery({ minWidth: 1920 });

  return (
    <>
      {isMobileView && mobile}
      {isTabletView && tablet}
      {isLaptopView && laptop}
      {isDesktopView && desktop}
    </>
  );
}

export function isMobileView() {
  const isMobileView = useMediaQuery({ maxWidth: 1023 });
  console.log("##", isMobileView);
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
