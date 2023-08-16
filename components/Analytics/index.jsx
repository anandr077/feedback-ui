import React , {useEffect, useState} from "react";
import { Chart, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./index.css";
import ProgressBar from "../ProgressBar";
import randomColor from "randomcolor";
import SmartAnotationAnalytics from "../SmartAnnotationsAnalytics";


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


const total = data.reduce((sum, value) => sum + value, 0);
const percentages = data.map(num => ((num / total) * 100).toFixed(2));

const smartAnnotationAnalyticsData = [];
let count = 0;
smartAnnotationAnalytics.forEach((element, key) => {
  const jsxElement = <SmartAnotationAnalytics title={key} childrens={element} total= {data[count]} />;
  smartAnnotationAnalyticsData.push(jsxElement);
  count++;
});


  const chartData = {
    labels: labels,
    datasets: [
      {
        backgroundColor: randomColor({  count: labels.length, hue: '#7200E0' }),
        data: percentages,
      },
    ],
  };
 
  const legendItems = labels.map((label, index) => (
    <div key={index} className="legend-item">
      <div
        className="legend-color"
        style={{
          backgroundColor: chartData.datasets[0].backgroundColor[index],
        }}
      ></div>
      <div className="legend-label-container">
      <div className="legend-label">{label}</div>
      <div className="legend-label">{percentages[index]}</div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="parent-card">
        <div className="heading-text">Smart Annotations</div>
        <div className="line"></div>
        <div className="graph-data">
          <div className="graph-container">
            <div className="graph">
              <Pie data={chartData} />
            </div>
            <div className="legend">
              {legendItems}
            </div>
          </div>
        </div>
        <div className="progress">
{smartAnnotationAnalyticsData}
        </div>
      </div>
    </>
  );
}
