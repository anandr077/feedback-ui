import React from 'react'
import {
    WorkContainer,
    WorkHeader,
    RecentTag,
    AllWorkBoxes,
    NewDocBtn,
    RecentWork,
    RecentWorkTitle,
    NewDocBtnText,
    NewDocBtnImg,
    RecentWorkPara,
    RecentBtns,
    RecentBtnImg
  } from './RecentWorkContainerStyle';
import AddCircleIcon from '../../static/icons/add-circle.png';
import downLoadImg from '../../static/icons/document-download@2x.png';
import previewImg from '../../static/icons/preview@2x.png';

//dummy data for portfolio
const recentWork = [
  {
    title: 'Lorem ipsum - document name full size',
    desc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  },
  {
    title: 'Lorem ipsum - document name full size',
    desc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  },
  {
    title: 'Lorem ipsum - document name full size',
    desc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  },
  {
    title: 'Lorem ipsum - document name full size',
    desc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  },{
    title: 'Lorem ipsum - document name full size',
    desc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  },
];


const RecentWorkContainer = ({smallScreen, showModal, setShowModal}) => {

  const numColumns = smallScreen ? 3 : 4;
  const displayedWork = recentWork.slice(0, numColumns)

  return (
    <WorkContainer>
        <WorkHeader>
          <RecentTag>Recent</RecentTag>
        </WorkHeader>
        <AllWorkBoxes>
          <NewDocBtn onClick={() => setShowModal(!showModal)}>
            <NewDocBtnImg
              src={AddCircleIcon}
              alt="Button Icon"
              className="NewDocBtnImg"
            ></NewDocBtnImg>
            <NewDocBtnText>New Document</NewDocBtnText>
          </NewDocBtn>

          {displayedWork.map((work, idx) => {
            console.log('work', work);
            return (
              <RecentWork key={idx}>
                <RecentWorkPara>{work.desc.slice(0, 400)}</RecentWorkPara>
                <RecentWorkTitle>{work.title}</RecentWorkTitle>
                <div className="recent-hover">
                  <a>
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
          })}
        </AllWorkBoxes>
      </WorkContainer>
  )
}

export default RecentWorkContainer 