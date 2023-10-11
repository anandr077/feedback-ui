import { default as React, useReducer, useState, useEffect } from 'react';
import {
  addDocumentToPortfolioWithDetails,
  deleteSubmissionById,
  getPortfolio,
} from '../../service';
import RecentWorkContainer from './RecentWorkContainer';

import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import Loader from '../Loader';
import PortfolioAllFilesContainer from './PortfolioAllFilesContainer';
import PortfolioDocModal from './PortfolioDocModal';
import PortfolioSideBar from './PortfolioSideBar';
import {
  addFile,
  deleteDocument,
  getDocuments,
  initailState,
  reducer,
} from './portfolioReducer';

import { isSmallScreen } from '../ReactiveRender';
import {
  DocumentMainSection,
  PortfolioBody,
  PortfolioContainer,
  PortfolioSection,
  SideNavContainer,
} from './PortfolioStyle';
import PortfolioHeader from './PortfolioHeader';

const PortfolioPage = () => {
  const [smallScreenView, setSmallScreenView] = React.useState(isSmallScreen());
  const [state, dispatch] = useReducer(reducer, initailState);
  const [showModal, setShowModal] = useState(false);
  const queryClient = useQueryClient();

  const { classId, categoryName } = useParams();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['portfolio'],
    queryFn: async () => {
      const data = await getPortfolio();
      return data;
    },
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
      deleteSubmissionById(doc.documentId, doc.classId),
    onMutate: async (doc) => {
      console.log('On mutate ' + doc.documentId);
      await queryClient.cancelQueries({ queryKey: ['portfolio'] });
      const previousPortfolio = queryClient.getQueryData(['portfolio']);
      console.log('previousPortfolio', previousPortfolio);
      const updatedPortfolio = deleteDocument(
        previousPortfolio,
        doc.documentId,
        doc.classId
      );
      console.log('updatedPortfolio', updatedPortfolio);
      queryClient.setQueryData(['portfolio'], (old) => updatedPortfolio);

      return { previousPortfolio };
    },

    onError: (err, newTodo, context) => {
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

  if (
    isLoading ||
    addDocumentMutation.isLoading ||
    !state.portfolio
    // ||
    // deleteDocumentMutation.isLoading
  ) {
    return <Loader />;
  }

  const allFiles = getDocuments(state.portfolio, classId, categoryName);

  const handleCreateDocument = (docName, activeMainIndex = 0) => {
    addFile(
      state.portfolio,
      activeMainIndex,
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
              <PortfolioSideBar
                state={state}
                dispatch={dispatch}
                classId={classId}
                categoryName={categoryName}
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
