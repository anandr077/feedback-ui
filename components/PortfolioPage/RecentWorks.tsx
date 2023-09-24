import React from 'react';
import downLoadImg from '../../static/icons/document-download@2x.png';
import previewImg from '../../static/icons/preview@2x.png';
import {
    RecentWork,
    RecentWorkTitle,
    RecentWorkPara,
    RecentBtns,
    RecentBtnImg
  } from './RecentWorksStyle';

const RecentWorks = ({work}) => {
  return (
    <RecentWork>
      <RecentWorkPara>{work.preview.slice(0, 400)}</RecentWorkPara>
      <RecentWorkTitle>{work.title}</RecentWorkTitle>
      <div className="recent-hover">
        <a href={work.url}>
          <RecentBtns>
            <RecentBtnImg src={previewImg}></RecentBtnImg>
            View
          </RecentBtns>
        </a>
        <RecentBtns>
          <RecentBtnImg src={downLoadImg}></RecentBtnImg>
          Download
        </RecentBtns>
      </div>
    </RecentWork>
  );
};

export default RecentWorks;
