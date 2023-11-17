import React, { useEffect, useState } from 'react';
import { Chart, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { CSVLink } from 'react-csv';
import './index.css';
import randomColor from 'randomcolor';
import SmartAnotationAnalytics from '../SmartAnnotationsAnalytics';
import DownLoad from '../../static/icons/csv-download@2x.png';

Chart.register(ArcElement);

export default function AnnotationAnalytics(props) {
  const { smartAnnotationAnalytics } = props;
  let data = [];
  let labels = [];

  smartAnnotationAnalytics.forEach((element, key, index) => {
    let sum = 0;
    element.forEach((item) => {
      sum += item;
    });
    data.push(sum);
    labels.push(key);
  });

  const sortedDataIndices = data
    .map((_, index) => index)
    .sort((a, b) => data[b] - data[a]);
  data = sortedDataIndices.map((index) => data[index]);
  labels = sortedDataIndices.map((index) => labels[index]);

  const total = data.reduce((sum, value) => sum + value, 0);
  const percentages = data.map((num) => ((num / total) * 100).toFixed(0));

  const smartAnnotationAnalyticsData = [];
  labels.map((label, index) => {
    const element = smartAnnotationAnalytics.get(label);
    const jsxElement = (
      <SmartAnotationAnalytics
        title={label}
        childrens={element}
        total={data[index]}
      />
    );
    smartAnnotationAnalyticsData.push(jsxElement);
  });

  const csvData = [];

  labels.forEach((label, index) => {
    const element = smartAnnotationAnalytics.get(label);

    const childrens = element instanceof Map ? element : new Map();

    const totalPercentage = percentages[index];
    const totalSuggestionPercentage = data[index]
    
    const parentRow = {
      Title: label,
      Suggestion: '',
      TitlePercentage: totalPercentage,
      SuggestionPercentage: '',
    };

    csvData.push(parentRow);

    const childrenData = Array.from(childrens).map(([key, value]) => ({
      Suggestion: key,
      Percentage: ((value / totalSuggestionPercentage) * 100).toFixed(2),
    }));

    childrenData.forEach((child) => {
      const childRow = {
        Title: '',
        Suggestion: child.Suggestion,
        TitlePercentage: '',
        SuggestionPercentage: child.Percentage,
      };
      csvData.push(childRow);
    });
  });

  const chartData = {
    labels: labels,
    datasets: [
      {
        backgroundColor: randomColor({ count: labels.length, hue: '#7200E0' }),
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
        <div className="legend-label-percentage">{percentages[index]}%</div>
      </div>
    </div>
  ));

  return (
    <>
      {smartAnnotationAnalyticsData.length > 0 ? (
        <div className="parent-card">
          <div className="heading-container">
            <div className="heading-text">Smart Annotations</div>
            <div className="delete-container">
              <CSVLink data={csvData} filename={'smart_annotations.csv'}>
                <img src={DownLoad} className="download-icon" alt="Download" />
              </CSVLink>
              <span className="download-tooltip">Download</span>
            </div>
          </div>
          <div className="line"></div>
          <div className="graph-data">
            <div className="graph-container">
              <div className="graph">
                <Pie data={chartData} />
              </div>
              <div className="legend">{legendItems}</div>
            </div>
          </div>
          <div className="progress">{smartAnnotationAnalyticsData}</div>
        </div>
      ) : (
        <div className="parent-card">
          <div className="heading-text">Smart Annotations</div>
        </div>
      )}
    </>
  );
}
