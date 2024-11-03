import React from 'react';
import {
  CountZoomContainer,
  ZoomContianer,
  ZoomInput
} from './style';
export function Footer({
  openLeftPanel,
  isMobile,
  editorFontSize,
  setEditorFontSize,
  answers,
  questionIndex,
  isSavingAnswer,
}) {
  const selectedAnswer = answers?.find(answer => answer.serialNumber === questionIndex + 1);
  const wordCount = selectedAnswer?.answer?.wordCount ?? 0;

  return (
    <CountZoomContainer open={openLeftPanel} mobileView={isMobile}>
      <div>
        {isSavingAnswer ? 'Saving...' : `${wordCount} ${wordCount === 1 ? 'word' : 'words'}`}
        
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
