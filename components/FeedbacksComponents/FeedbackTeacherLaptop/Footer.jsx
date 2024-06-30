import React from 'react';
import {
  CountZoomContainer,
  ZoomContianer,
  ZoomInput
} from './style';
export function Footer({
  openLeftPanel,
  isMobile,
  countWords,
  editorFontSize,
  setEditorFontSize,
}) {
  return (
    <CountZoomContainer open={openLeftPanel} mobileView={isMobile}>
      <div>
        {countWords} {countWords === 1 ? 'word' : 'words'}
      </div>
      <ZoomContianer>
        Zoom
        <ZoomInput
          name="zoom"
          type="range"
          min="50"
          max="150"
          value={editorFontSize}
          onChange={(e) => setEditorFontSize(e.target.value)}
        />
        {editorFontSize}%
      </ZoomContianer>
    </CountZoomContainer>
  );
}
