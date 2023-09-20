import React, { useEffect, useReducer, useState } from 'react';
import {
  getPortfolio,
  updatePortfolio,
} from '../../service';
import { portfolioHeaderProps } from '../../utils/headerProps';
import ResponsiveHeader from '../ResponsiveHeader';
import RecentWorkContainer from './RecentWorkContainer';

import { useQuery } from 'react-query';
import Loader from '../Loader';
import PortfolioAllFilesContainer from './PortfolioAllFilesContainer';
import PortfolioDocModal from './PortfolioDocModal';
import PortfolioHeader from './PortfolioHeader';
import PortfolioSideBar from './PortfolioSideBar';
import {
  initailState, 
  reducer,
  addFile,
  getDocuments
} from './portfolioReducer'

import {
  PortfolioBody,
  PortfolioContainer,
  SideNavContainer
} from './PortfolioStyle';
import { useIsSmallScreen } from '../ReactiveRender';
import ResponsiveFooter from '../ResponsiveFooter';

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


const PortfolioPage = () => {
  const smallScreen = useIsSmallScreen();

  const [state, dispatch] = useReducer(reducer, initailState);

  const [showModal, setShowModal] = useState(false);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['portfolio'],
    queryFn: async () => {
      const data = await getPortfolio();
      dispatch({ type: 'setPortfolio', payload: data });
    },
  });


  if (isLoading) {
    return <Loader />;
  }

  const numColumns = smallScreen ? 3 : 4;


  const displayedWork = recentWork.slice(0, numColumns)
  const allFiles = getDocuments(
    state.portfolio,
    state.activeMainIndex,
    state.activeSubFolderIndex
  );

  const handleCreateDocument = (docName, subjectValue) => {
    addFile(
      state.portfolio,
      state.activeMainIndex,
      state.activeSubFolderIndex,
      docName,
      dispatch
    );
  };

  
  return (
    <>
      <ResponsiveHeader smallScreen={smallScreen} headerProps={ portfolioHeaderProps}></ResponsiveHeader>
      <div style={{ width: '100%', backgroundColor: '#FCFAFF' }}>
        <PortfolioBody>
        <PortfolioHeader setShowModal={setShowModal} showModal={showModal} />
          <PortfolioContainer>
            <SideNavContainer>
              <PortfolioSideBar state={state} dispatch={dispatch} />
            </SideNavContainer>

            {documentsContainerFunc(
              displayedWork,
              allFiles,
              showModal,
              setShowModal
            )}
          </PortfolioContainer>
        </PortfolioBody>
      </div>

      <ResponsiveFooter smallScreen={smallScreen}/>

      {showModal &&
        <PortfolioDocModal
        setShowModal={setShowModal}
        showModal={showModal}
        handleCreateDocument={handleCreateDocument}
      />}
    </>
  );
};

export default PortfolioPage;

function documentsContainerFunc(
  displayedWork: { title: string; desc: string }[],
  allFiles,
  showModal,
  setShowModal
) {
  return (
    <div style={{ width: '100%' }}>
      {
        <RecentWorkContainer
          displayedWork={displayedWork}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      }

      {/*Document section code is here*/}
      <PortfolioAllFilesContainer allFiles={allFiles} />
    </div>
  );
}
