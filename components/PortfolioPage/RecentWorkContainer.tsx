import React from 'react';
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

const RecentWorkContainer = ({
  smallScreen,
  state,
  showModal,
  setShowModal,
  downloadPdf,
}) => {
  const numColumns = smallScreen ? 3 : 4;
  const displayedWork = state?.portfolio?.recentFiles?.slice(0, numColumns);
  console.log('displayedWork:', displayedWork);

  return (
    <WorkContainer>
      <WorkHeader>
        <RecentTag>Recent</RecentTag>
      </WorkHeader>
      <AllWorkBoxes>
        {newDocumentButton(setShowModal, showModal)}

        {displayedWork?.map((work, idx) => {
          return (
            <RecentWorks work={work} key={idx} downloadPdf={downloadPdf} />
          );
        })}
      </AllWorkBoxes>
    </WorkContainer>
  );
};

export default RecentWorkContainer;

function newDocumentButton(setShowModal: any, showModal: any) {
  return (
    <NewDocBtn onClick={() => setShowModal(!showModal)}>
      <NewDocBtnImg
        src={AddCircleIcon}
        alt="Button Icon"
        className="NewDocBtnImg"
      ></NewDocBtnImg>
      <NewDocBtnText>New Document</NewDocBtnText>
    </NewDocBtn>
  );
}
