import React, { useEffect, useReducer, useState } from 'react';
import { getPortfolio, addDocumentToPortfolioWithDetails } from '../../service';
import { portfolioHeaderProps } from '../../utils/headerProps';
import ResponsiveHeader from '../ResponsiveHeader';
import RecentWorkContainer from './RecentWorkContainer';

import { useMutation, useQuery, useQueryClient } from 'react-query';
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
  getSubFolder,
} from './portfolioReducer';

import {
  PortfolioBody,
  PortfolioContainer,
  SideNavContainer,
  DocumentMainSection,
  PortfolioSection,
} from './PortfolioStyle';
import { isSmallScreen } from '../ReactiveRender';
import ResponsiveFooter from '../ResponsiveFooter';

const PortfolioPage = () => {
  const smallScreen = isSmallScreen();

  const [state, dispatch] = useReducer(reducer, initailState);

  const [showModal, setShowModal] = useState(false);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['portfolio'],
    queryFn: async () => {
      const data = await getPortfolio();
      dispatch({ type: 'setPortfolio', payload: data });
    },
  });
  const queryClient = useQueryClient()

  const mutation = useMutation(addDocumentToPortfolioWithDetails, {
    onSuccess: () => {
      queryClient.invalidateQueries('portfolio')
    },
  })
  if (isLoading) {
    return <Loader />;
  }

  const allFiles = getDocuments(
    state.portfolio,
    state.activeMainIndex,
    state.activeSubFolderIndex
  );
  const currentFolder = getSubFolder(
    state.portfolio,
    state.activeMainIndex,
    state.activeSubFolderIndex
  );

  const handleCreateDocument = (docName) => {
    addFile(
      state.portfolio,
      state.activeMainIndex,
      state.activeSubFolderIndex,
      docName,
      mutation
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
                showNewDocumentButton = {currentFolder.allowCreateDocument}
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
