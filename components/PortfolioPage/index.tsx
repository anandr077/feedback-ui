import React, { useEffect, useReducer, useState } from 'react';
import { getPortfolio, updatePortfolio } from '../../service';
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
  getDocuments,
} from './portfolioReducer';

import {
  PortfolioBody,
  PortfolioContainer,
  SideNavContainer,
  DocumentMainSection,
  PortfolioSection,
} from './PortfolioStyle';
import { isSmallScreen, useIsSmallScreen } from '../ReactiveRender';
import ResponsiveFooter from '../ResponsiveFooter';
import HeaderSmall from '../HeaderSmall';
import Header from '../Header';

const PortfolioPage = () => {
  const smallScreen = useIsSmallScreen();

  const [state, dispatch] = useReducer(reducer, initailState);

  const [showModal, setShowModal] = useState(false);
   const [smallScreenView, setSmallScreenView] = React.useState(
     isSmallScreen()
   );

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['portfolio'],
    queryFn: async () => {
      const data = await getPortfolio();
      dispatch({ type: 'setPortfolio', payload: data });
    },
  });

  if (isLoading) {
    return (
      <>
        {smallScreenView ? (
          <HeaderSmall headerProps={portfolioHeaderProps} />
        ) : (
          <Header headerProps={portfolioHeaderProps} />
        )}
        <Loader />
      </>
    );
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
      <ResponsiveHeader
        smallScreen={smallScreen}
        headerProps={portfolioHeaderProps}
      ></ResponsiveHeader>
      <PortfolioSection>
        <PortfolioBody>
          <PortfolioHeader setShowModal={setShowModal} showModal={showModal} />
          <PortfolioContainer>
            <SideNavContainer>
              <PortfolioSideBar state={state} dispatch={dispatch} />
            </SideNavContainer>
            <DocumentMainSection>
              <RecentWorkContainer
                smallScreen={smallScreen}
                showModal={showModal}
                setShowModal={setShowModal}
              />
              <PortfolioAllFilesContainer allFiles={allFiles} />
            </DocumentMainSection>
          </PortfolioContainer>
        </PortfolioBody>
      </PortfolioSection>

      <ResponsiveFooter smallScreen={smallScreen} />

      {showModal && (
        <PortfolioDocModal
          setShowModal={setShowModal}
          showModal={showModal}
          handleCreateDocument={handleCreateDocument}
        />
      )}
    </>
  );
};

export default PortfolioPage;
