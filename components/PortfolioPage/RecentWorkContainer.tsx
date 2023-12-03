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
import { isSmallScreen } from '../ReactiveRender';

//dummy data for portfolio

const RecentWorkContainer = ({
  state,
  showModal,
  setShowModal,
  categoryName,
}) => {
  const numColumns = isSmallScreen() ? 3 : 4;
  const displayedWork = state?.portfolio?.recentFiles?.slice(0, numColumns);
  

  return (
    categoryName !== 'Reviews' && categoryName !== 'Tasks' && (
  <WorkContainer>
    <WorkHeader>
      <RecentTag>Recent</RecentTag>
    </WorkHeader>
    <AllWorkBoxes>
      {newDocumentButton(setShowModal, showModal)}

      {displayedWork?.map((work, idx) => {
        return <RecentWorks work={work} key={idx} />;
      })}
    </AllWorkBoxes>
  </WorkContainer>)
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
      <NewDocBtnText>New document</NewDocBtnText>
    </NewDocBtn>
  );
}
