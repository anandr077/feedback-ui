import React from 'react';
import { ZoomContianer, ZoomInput } from './style';

const Zoom = ({ zoomPercentage, onZoomPercentageChange }) => {
  return (
    <ZoomContianer>
      Zoom
      <ZoomInput
        name="zoom"
        type="range"
        min="50"
        max="150"
        value={zoomPercentage}
        onChange={(e) => onZoomPercentageChange(e.target.value)}
      />
      {zoomPercentage}%
    </ZoomContianer>
  );
};

export default Zoom;
