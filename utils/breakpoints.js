import { useMediaQuery } from "react-responsive";

export function render(mobile, tablet, laptop, desktop) {
  const isMobileView = useMediaQuery({ maxWidth: 1023 });
  const isTabletView = useMediaQuery({ minWidth: 1024, maxWidth: 1439 });
  const isLaptopView = useMediaQuery({ minWidth: 1440, maxWidth: 1919 });
  const isDesktopView = useMediaQuery({ minWidth: 1920 });
  console.log("isMobileView " + isMobileView);
  console.log("isMobileView " + isTabletView);
  console.log("isMobileView " + isLaptopView);
  console.log("isMobileView " + isDesktopView);
  <>
    {isMobileView && mobile}
    {isTabletView && tablet}
    {isLaptopView && laptop}
    {isDesktopView && desktop}
  </>;
}
