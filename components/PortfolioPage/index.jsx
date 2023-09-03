import React, { useState, useEffect } from "react";
import Header from "../Header";
import { portfolioHeaderProps } from "../../utils/headerProps";
import HeaderSmall from "../HeaderSmall";

const PortfolioPage = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1440);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1440);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <HeaderSmall headerProps={portfolioHeaderProps} />
      ) : (
        <Header headerProps={portfolioHeaderProps} />
      )}
      Portfolio
    </>
  );
};

export default PortfolioPage;
