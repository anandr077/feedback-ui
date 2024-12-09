import React from 'react';
import { ZoomContianer, ZoomInput } from './style';

const Zoom = ({ zoomPercentage, onZoomPercentageChange, minimumZoom, maximumZoom }) => {
  return (
    <ZoomContianer>
      Zoom
      <ZoomInput
        name="zoom"
        type="range"
        min={minimumZoom}
        max={maximumZoom}
        value={zoomPercentage}
        onChange={(e) => onZoomPercentageChange(e.target.value)}
      />
      {zoomPercentage}%
    </ZoomContianer>
  );
};

export default Zoom;
