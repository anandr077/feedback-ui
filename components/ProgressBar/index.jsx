import React from 'react';
import './index.css';

export default function ProgressBar({
  title,
  count,
  total,
  isPercentage = true,
  isProgressBar = true,
}) {
  const percentage = count <= 0 ? 0 : ((count / total) * 100).toFixed(2);

  const heading = () => {
    if (isPercentage) {
      return (
        <div className="progress-bar-heading">
          <div className="title">{title}</div>
          <div className="title">{percentage}%</div>
        </div>
      );
    }
    return (
      <div className="ratio-bar-heading">
        <div className="ration-title">{title}</div>
        <div className="ration-number">
          {count} of {total}
        </div>
      </div>
    );
  };
  return (
    <div className="progress-bar-container">
      {heading()}
      {isProgressBar && (
        <div class="progress-container">
          <div class="progress-bar" style={{ width: `${percentage}%` }}></div>
        </div>
      )}
    </div>
  );
}
