import React, { useEffect, useState } from 'react';
import { Chart, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { CSVLink } from 'react-csv';
import './index.css';
import randomColor from 'randomcolor';
import SmartAnotationAnalytics from '../SmartAnnotationsAnalytics';
import DownLoad from '../../static/img/Download.svg';
import questionMark from '../../static/img/question-mark.svg';
import QuestionTooltip from '../../components2/QuestionTooltip';

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
  const percentages = data.map((num) => ((num / total) * 100).toFixed(2));

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
    const totalSuggestionPercentage = data[index];

    const parentRow = {
      'Feedback Area': label,
      Suggestion: '',
      '% Frequency of Feedback Area': totalPercentage,
      '% Frequency of Suggestion': '',
    };

    csvData.push(parentRow);

    const childrenData = Array.from(childrens).map(([key, value]) => ({
      Suggestion: key,
      Percentage: ((value / totalSuggestionPercentage) * 100).toFixed(2),
    }));

    childrenData.forEach((child) => {
      const childRow = {
        'Feedback Area': '',
        Suggestion: child.Suggestion,
        '% Frequency of Feedback Area': '',
        '% Frequency of Suggestion': child.Percentage,
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
            <div className="heading-text">
              Class Statistics
              <QuestionTooltip
                text={
                  'See where your class is struggling the most with their writing'
                }
                img={questionMark}
              />
            </div>
            <div className="download-container">
              <CSVLink data={csvData} filename={'smart_annotations.csv'}>
                <div style={{ display: 'flex' }}>
                  <img
                    src={DownLoad}
                    className="download-icon"
                    alt="Download"
                  />
                  <p
                    style={{
                      margin: '0px',
                      fontFamily: 'IBM Plex Sans',
                      fontSize: '16px',
                      fontWeight: '500',
                      lineHeight: '24px',
                      letterSpacing: '0em',
                      textAlign: 'left',
                    }}
                  >
                    Download
                  </p>
                </div>
              </CSVLink>
            </div>
          </div>
          <div className="graph-data">
            <div className="graph-heading">
              <p
                style={{
                  margin: '0px',
                  fontFamily: 'IBM Plex Sans',
                  fontSize: '16px',
                  fontWeight: '500',
                  lineHeight: '20.8px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                }}
              >
                Overall Usage
              </p>
            </div>
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
