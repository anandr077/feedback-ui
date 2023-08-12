import React from "react";
import { Chart, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./index.css";
import ProgressBar from "../ProgressBar";
import randomColor from "randomcolor";

Chart.register(ArcElement);

export default function AnnotationAnalytics(props) {
  const {smartAnnotationAnalytics} = props;
  let data = [];
  let labels = [];

  smartAnnotationAnalytics.forEach((element, key, index) => {
    let sum = 0;
    element.forEach((item) => {
      sum += item;
    }
    );
    data.push(sum);
    labels.push(key);
});


  const chartData = {
    labels: labels,
    datasets: [
      {
        backgroundColor: randomColor({ count: data.length }),
        data: data,
      },
    ],
  };
  const total = data.reduce((sum, value) => sum + value, 0);

  const legendItems = labels.map((label, index) => (
    <div key={index} className="legend-item">
      <div
        className="legend-color"
        style={{
          backgroundColor: chartData.datasets[0].backgroundColor[index],
        }}
      ></div>
      <div className="legend-label">{`${label}: ${data[index]}`}</div>
    </div>
  ));

  return (
    <>
      <div className="parent-card">
        <div className="heading-text">Smart Annotations</div>
        <div className="line"></div>
        <div className="graph-data">
          <div className="subheading-text">Overall Usage</div>
          <div className="line"></div>
          <div className="graph-container">
            <div className="graph">
              <Pie data={chartData} />
            </div>
            <div className="legend">
              {legendItems}
              <div className="legend-label">{`Total: ${total}`}</div>
            </div>
          </div>
        </div>
        <div className="progress">
          <ProgressBar title={"Total"} count={10} total={20} />
        </div>
      </div>
    </>
  );
}
