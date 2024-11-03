import React from 'react';
import {
  CountZoomContainer,
  Lebel
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
      <Lebel>
        {lebel}
      </Lebel>
      <Zoom 
        zoomPercentage={zoomPercentage}
        onZoomPercentageChange={onZoomPercentageChange}
      />
    </CountZoomContainer>
  );
}
