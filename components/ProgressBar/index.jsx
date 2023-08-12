import React from "react";
import "./index.css";

export default function ProgressBar({ title, count, total }) {
  const percentage = count <= 0 ? 0 : (count/total) * 100;
  console.log("percentage: ", percentage);
  return (
    <div className="progress-bar-container">
      <div className="progress-bar-heading">
        <div className="title">{title}</div>
        <div className="title">{count}</div>
      </div>
      <div class="progress-container">
        <div class="progress-bar" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}
