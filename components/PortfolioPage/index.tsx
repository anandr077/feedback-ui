import { default as React, useEffect, useReducer, useState } from 'react';
import {
  addDocumentToPortfolioWithDetails,
  deleteSubmissionById,
  getPortfolio,
} from '../../service';
import RecentWorkContainer from './RecentWorkContainer';

import { useMutation, useQuery, useQueryClient } from 'react-query';
import Loader from '../Loader';
import PortfolioAllFilesContainer from './PortfolioAllFilesContainer';
import PortfolioDocModal from './PortfolioDocModal';
import PortfolioSideBar from './PortfolioSideBar';
import {
  addFile,
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

  const deleteDocumentMutation = useMutation(
    (document) => deleteSubmissionById(document.documentId),
    {
      onMutate: (document) => {
        const previousPortfolio = JSON.parse(JSON.stringify(state.portfolio));    
        dispatch({
          type: 'deleteDocument',
          payload: {
            mainIndex: state.activeMainIndex,
            subFolderIndex: state.activeSubFolderIndex,
            documentId: document.documentId,
          },
        });
        return { previousPortfolio };
      },
      onSuccess: () => {
        queryClient.invalidateQueries('portfolio');
      },
      onError: (_, __, context) => {
        if (context?.previousPortfolio) {
          dispatch({ type: 'setPortfolio', payload: context.previousPortfolio });
        }
      },
    }
  );

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
    dispatch({
      type: 'deleteDocument',
      payload: {
        mainIndex: state.activeMainIndex,
        subFolderIndex: state.activeSubFolderIndex,
        documentId: document.documentId
      },
    })
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
