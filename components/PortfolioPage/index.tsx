import React, { useEffect, useReducer, useState } from 'react';
import {
  getPortfolio,
  addDocumentToPortfolioWithDetails,
  deleteSubmissionById,
} from '../../service';
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
} from './portfolioReducer';

import {
  PortfolioBody,
  PortfolioContainer,
  SideNavContainer,
  DocumentMainSection,
  PortfolioSection,
} from './PortfolioStyle';
import { isSmallScreen } from '../ReactiveRender';

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
  const queryClient = useQueryClient();

  const addDocumentMutation = useMutation(addDocumentToPortfolioWithDetails, {
    onSuccess: (data) => {
      window.location.href = `#documents/${data.id}`;
    },
  });
  const deleteDocumentMutation = useMutation(
    (document) => deleteSubmissionById(document.documentId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('portfolio');
      },
    }
  );
  useEffect(() => {
    if (
      isLoading ||
      addDocumentMutation.isLoading ||
      !state.portfolio ||
      deleteDocumentMutation.isLoading
    ) {
      return;
    }
  }, [
    isLoading,
    addDocumentMutation.isLoading,
    state.portfolio,
    deleteDocumentMutation.isLoading,
  ]);

  if (
    isLoading ||
    addDocumentMutation.isLoading ||
    !state.portfolio ||
    deleteDocumentMutation.isLoading
  ) {
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
      addDocumentMutation
    );
  };
  const handleDeleteDocument = (document) => {
    deleteDocumentMutation.mutate(document);
  };
  return (
    <>
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
                state={state}
                showModal={showModal}
                setShowModal={setShowModal}
              />
              <PortfolioAllFilesContainer
                allFiles={allFiles}
                handleDeleteDocument={handleDeleteDocument}
              />
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
