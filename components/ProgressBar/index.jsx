import React from 'react';
import './index.css';

export default function ProgressBar({ title, count, total }) {
  const percentage = count <= 0 ? 0 : ((count / total) * 100).toFixed(2);
  return (
    <div className="progress-bar-container">
      <div className="progress-bar-heading">
        <div className="title">{title}</div>
        <div className="title">{percentage}%</div>
      </div>
      <div class="progress-container">
        <div class="progress-bar" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}
