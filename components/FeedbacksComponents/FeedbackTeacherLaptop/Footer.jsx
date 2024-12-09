import React from 'react';
import {
  CountZoomContainer,
  CountContainer
} from './style';
import Zoom from '../../../components2/Zoom';
export function Footer({
  isMobile,
  editorFontSize,
  setEditorFontSize,
  lebel
}) {
  

  return (
    <CountZoomContainer mobileView={isMobile}>
      <CountContainer>
        {lebel}
      </CountContainer>
      <Zoom 
        zoomPercentage={editorFontSize}
        onZoomPercentageChange={setEditorFontSize}
        minimumZoom={"50"}
        maximumZoom={"150"}
      />
    </CountZoomContainer>
  );
}
