import { default as React, useReducer, useState } from 'react';
import {
  addDocumentToPortfolioWithDetails,
  addFolderToPortfolio,
  deleteSubmissionById,
  getPortfolio,
} from '../../service';
import RecentWorkContainer from './RecentWorkContainer';

import { useParams } from 'react-router-dom';
import Loader from '../Loader';
import PortfolioAllFilesContainer from './PortfolioAllFilesContainer';
import PortfolioDocModal from './PortfolioDocModal';
import PortfolioSideBar from './PortfolioSideBar';
import {
  addFile,
  getDocuments,
  initailState,
  reducer
} from './portfolioReducer';

import { isSmallScreen } from '../ReactiveRender';
import PortfolioHeader from './PortfolioHeader';
import {
  DocumentMainSection,
  PortfolioBody,
  PortfolioContainer,
  PortfolioSection,
  SideNavContainer,
} from './PortfolioStyle';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const PortfolioPage = () => {
  const [smallScreenView, setSmallScreenView] = React.useState(isSmallScreen());
  const [state, dispatch] = useReducer(reducer, initailState);
  const [showModal, setShowModal] = useState(false);
  const queryClient = useQueryClient();

  const {  folderId, categoryName } = useParams();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['portfolio'],
    queryFn: async () => {
      return await getPortfolio();
    },
    staleTime: 300000,
  });
  React.useEffect(() => {
    dispatch({ type: 'setPortfolio', payload: data });
  }, [data]);

  const addDocumentMutation = useMutation(addDocumentToPortfolioWithDetails, {
    onSuccess: (data) => {
      window.location.href = `#documents/${data.id}`;
    },
  });

  const deleteDocumentMutation = useMutation({
    mutationFn: async (doc) =>
      await deleteSubmissionById(doc.documentId),
    onMutate: async (doc) => {
      console.log('On delete mutate ' , doc);
      await queryClient.cancelQueries({ queryKey: ['portfolio'] });
      const previousPortfolio = queryClient.getQueryData(['portfolio']);
      console.log('previousPortfolio', previousPortfolio);
      dispatch({ type: 'deleteDocument', payload: doc });

      return { previousPortfolio };
    },

    onError: (err, _, context) => {
      console.log('On error');

      queryClient.setQueryData(['portfolio'], context.previousPortfolio);
    },
    onSuccess: (data, variables) => {
      console.log('On success');
    },
    onSettled: () => {
      console.log('Settled');
      queryClient.invalidateQueries({ queryKey: ['portfolio'] });
    },
  });

  const addFolderMutation = useMutation({
    mutationFn: async (folderName) =>
      await addFolderToPortfolio({title: folderName}),
    onMutate: async (folderName) => {
      console.log('On mutate ' + folderName);
      await queryClient.cancelQueries({ queryKey: ['portfolio'] });
      const previousPortfolio = queryClient.getQueryData(['portfolio']);
      console.log('previousPortfolio', previousPortfolio);
      dispatch({ type: 'addFolder', payload: folderName });

      return { previousPortfolio };
    },

    onError: (err, newTodo, context) => {
      console.log('On error');

      queryClient.setQueryData('portfolio', context.previousPortfolio);
    },
    onSuccess: (data, variables) => {
      console.log('On success');
    },
    onSettled: () => {
      console.log('Settled');
      queryClient.invalidateQueries({ queryKey: ['portfolio'] });
    },
  });

  if (
    isLoading ||
    addDocumentMutation.isLoading ||
    !state.portfolio
  ) {
    return <Loader />;
  }

  const allFiles = getDocuments(state.portfolio, folderId, categoryName);

  const handleCreateDocument = (docName, activeMainFolderId = 0) => {
    addFile(
      state.portfolio,
      activeMainFolderId,
      state.activeSubFolderId,
      docName,
      addDocumentMutation
    );
  };
  const handleDeleteDocument = (document) => {
    deleteDocumentMutation.mutate(document);
  };


  const handleNewFolder = (folderName) =>{
      console.log('new folder: ', folderName)
      addFolderMutation.mutate(folderName);
  }

  return (
    <>
      <PortfolioSection>
        <PortfolioBody>
          <PortfolioHeader setShowModal={setShowModal} showModal={showModal} />
          <PortfolioContainer>
            <SideNavContainer>
              <PortfolioSideBar
                state={state}
                dispatch={dispatch}
                folderId={folderId}
                categoryName={categoryName}
                handleNewFolder={handleNewFolder}
              />
            </SideNavContainer>
            <DocumentMainSection>
              <RecentWorkContainer
                smallScreen={smallScreenView}
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
          state={state}
        />
      )}
    </>
  );
};

export default PortfolioPage;
