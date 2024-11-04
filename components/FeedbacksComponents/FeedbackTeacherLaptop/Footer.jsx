import React from 'react';
import {
  CountZoomContainer,
  CountContainer
} from './style';
import Zoom from '../../../components2/Zoom';
export function Footer({
  isMobile,
  zoomPercentage,
  onZoomPercentageChange,
  lebel
}) {
  

  return (
    <CountZoomContainer mobileView={isMobile}>
      <CountContainer>
        {lebel}
      </CountContainer>
      <Zoom 
        zoomPercentage={zoomPercentage}
        onZoomPercentageChange={onZoomPercentageChange}
      />
    </CountZoomContainer>
  );
}
