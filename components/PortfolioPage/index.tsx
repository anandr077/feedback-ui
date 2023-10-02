import React, { useReducer, useState } from 'react';
import { addDocumentToPortfolioWithDetails, getPortfolio } from '../../service';
import RecentWorkContainer from './RecentWorkContainer';

import { useMutation, useQuery } from 'react-query';
import Loader from '../Loader';
import PortfolioAllFilesContainer from './PortfolioAllFilesContainer';
import PortfolioDocModal from './PortfolioDocModal';
import PortfolioHeader from './PortfolioHeader';
import PortfolioSideBar from './PortfolioSideBar';
import {
  addFile,
  getDocuments,
  initailState,
  reducer
} from './portfolioReducer';

import { isSmallScreen } from '../ReactiveRender';
import {
  DocumentMainSection,
  PortfolioBody,
  PortfolioContainer,
  PortfolioSection,
  SideNavContainer,
} from './PortfolioStyle';

const PortfolioPage = () => {
  const [smallScreenView, setSmallScreenView] = React.useState(
    isSmallScreen()
  );
  const [state, dispatch] = useReducer(reducer, initailState);

  const [showModal, setShowModal] = useState(false);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['portfolio'],
    queryFn: async () => {
      const data = await getPortfolio();
      dispatch({ type: 'setPortfolio', payload: data });
    },
  });

  const mutation = useMutation(addDocumentToPortfolioWithDetails, {
    onSuccess: (data) => {
      window.location.href = `#documents/${data.id}`;
    },
  });
  if (isLoading || mutation.isLoading || !state.portfolio) {
    return <Loader />;
  }

  const allFiles = getDocuments(
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
      <PortfolioSection>
        <PortfolioBody>
          {/* <PortfolioHeader setShowModal={setShowModal} showModal={showModal} /> */}
          <PortfolioContainer>
            <SideNavContainer>
              <PortfolioSideBar state={state} dispatch={dispatch} />
            </SideNavContainer>
            <DocumentMainSection>
              <RecentWorkContainer
                smallScreen={smallScreenView}
                state={state}
                showModal={showModal}
                setShowModal={setShowModal}
              />
              <PortfolioAllFilesContainer allFiles={allFiles} />
            </DocumentMainSection>
          </PortfolioContainer>
        </PortfolioBody>
      </PortfolioSection>

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
