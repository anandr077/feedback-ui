import React from 'react'
import {
    WorkContainer,
    WorkHeader,
    RecentTag,
    AllWorkBoxes,
    NewDocBtn,
    NewDocBtnText,
    NewDocBtnImg,
  } from './RecentWorkContainerStyle';
import AddCircleIcon from '../../static/icons/add-circle.png';
import RecentWorks from './RecentWorks';

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


const RecentWorkContainer = ({showNewDocumentButton, smallScreen, showModal, setShowModal}) => {

  const numColumns = smallScreen ? 3 : 4;
  const displayedWork = recentWork.slice(0, numColumns)

  return (
    <WorkContainer>
        <WorkHeader>
          <RecentTag>Recent</RecentTag>
        </WorkHeader>
        <AllWorkBoxes>
          {newDocumentButton(showNewDocumentButton, setShowModal, showModal)}

          {displayedWork.map((work, idx) => {
            console.log('work', work);
            return (
              <RecentWorks work={work} key={idx} />
            );
          })}
        </AllWorkBoxes>
      </WorkContainer>
  )
}

export default RecentWorkContainer 

function newDocumentButton(showNewDocumentButton, setShowModal: any, showModal: any) {
  if (!showNewDocumentButton) {
    return <></>
  }
  return <NewDocBtn onClick={() => setShowModal(!showModal)}>
    <NewDocBtnImg
      src={AddCircleIcon}
      alt="Button Icon"
      className="NewDocBtnImg"
    ></NewDocBtnImg>
    <NewDocBtnText>New Document</NewDocBtnText>
  </NewDocBtn>;
}
