import React, { useEffect, useReducer, useState } from 'react';
import {
  getPortfolio,
  updatePortfolio,
} from '../../service';
import { portfolioHeaderProps } from '../../utils/headerProps';
import Footer from '../Footer';
import FooterSmall from '../FooterSmall';
import ResponsiveHeader from '../ResponsiveHeader';
import HeaderSmall from '../HeaderSmall';
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
  SideNavContainer,
  DocumentMainSection,
  PortfolioSection
} from './PortfolioStyle';
import { useIsSmallScreen } from '../ReactiveRender';


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
      <PortfolioSection>
        <PortfolioBody>
        <PortfolioHeader setShowModal={setShowModal} showModal={showModal} />
          <PortfolioContainer>
            <SideNavContainer>
              <PortfolioSideBar state={state} dispatch={dispatch} />
            </SideNavContainer>

            {documentsContainerFunc(
              smallScreen,
              allFiles,
              showModal,
              setShowModal
            )}
          </PortfolioContainer>
        </PortfolioBody>
      </PortfolioSection>

      {/*Footer is displayed here based on the isSmallScreen state*/}
      {smallScreen ? <FooterSmall /> : <Footer />}

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
  smallScreen,
  allFiles,
  showModal,
  setShowModal
) {
  return (
    <DocumentMainSection>
      {
        <RecentWorkContainer
          smallScreen={smallScreen}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      }

      {/*Document section code is here*/}
      <PortfolioAllFilesContainer allFiles={allFiles} />
    </DocumentMainSection>
  );
}
