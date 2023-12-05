import { default as React, useReducer, useState } from 'react';
import {
  addDocumentToPortfolioWithDetails,
  addFolderToPortfolio,
  deleteFolderFromPortfolio,
  updatePortfolio,
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
  reducer,
} from './portfolioReducer';

import PortfolioHeader from './PortfolioHeader';
import {
  DocumentMainSection,
  PortfolioBody,
  PortfolioContainer,
  PortfolioSection,
  SideNavContainer,
} from './PortfolioStyle';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import DeleteAssignmentPopup from '../DeleteAssignmentPopUp';

const PortfolioPage = () => {
  const [state, dispatch] = useReducer(reducer, initailState);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteConfirmationPopup, setShowDeleteConfirmationPopup] =
    useState(false);
  const [documentToDelete, setDocumentToDelete] = useState({});
  const queryClient = useQueryClient();

  const { folderId, categoryName } = useParams();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['portfolio'],
    queryFn: async () => {
      return await getPortfolio();
    },
    staleTime: 3600000,
  });
  React.useEffect(() => {
    dispatch({ type: 'setPortfolio', payload: data });
  }, [data]);

  const addDocumentMutation = useMutation({
    mutationFn: async (documentDetails) => {
      return await addDocumentToPortfolioWithDetails(documentDetails);
    },
    onError: (err, documentDetails, context) => {
      console.log('On error');
    },
    onSuccess: (data, documentDetails) => {
      const updatedState = reducer(state, {
        type: 'addDocument',
        payload: {
          title: documentDetails.title,
          folderId: documentDetails.folderId,
          submission: data,
        },
      });
      queryClient.setQueryData(['portfolio'], updatedState.portfolio);
      window.location.href = `#documents/${data.id}`;
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['portfolio'] });
    },
  });

  const deleteDocumentMutation = useMutation({
    mutationFn: async (doc) => await deleteSubmissionById(doc.documentId),
    onMutate: async (doc) => {
      await queryClient.cancelQueries({ queryKey: ['portfolio'] });
      const previousPortfolio = queryClient.getQueryData(['portfolio']);
      dispatch({ type: 'deleteDocument', payload: doc });

      return { previousPortfolio };
    },

    onError: (err, _, context) => {
      console.log('On error');

      queryClient.setQueryData(['portfolio'], context.previousPortfolio);
    },
    onSuccess: (data, variables) => {},
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['portfolio'] });
    },
  });

  const addFolderMutation = useMutation({
    mutationFn: async (folderName) =>
      await addFolderToPortfolio({ title: folderName }),

    onError: (err, folderName, context) => {
      console.log('On error');
    },
    onSuccess: (data, folderName) => {
      dispatch({ type: 'addFolder', payload: data });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['portfolio'] });
    },
  });

  const deleteFolderMutation = useMutation({
    mutationFn: async (folderId) => await deleteFolderFromPortfolio(folderId),
    onMutate: async (folderId) => {
      await queryClient.cancelQueries({ queryKey: ['portfolio'] });
      const previousPortfolio = queryClient.getQueryData(['portfolio']);
      dispatch({ type: 'deleteFolder', payload: folderId });
      return { previousPortfolio };
    },
    onError: (err, newTodo, context) => {
      console.log('On error');

      queryClient.setQueryData('portfolio', context.previousPortfolio);
    },
    onSuccess: (data, variables) => {},
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['portfolio'] });
    },
  });

  const updateFolderMutation = useMutation({
    mutationFn: async ({ id, title }) => await updatePortfolio(id, title),
    onMutate: async (updatedFolder) => {
      await queryClient.cancelQueries({ queryKey: ['portfolio'] });
      const previousPortfolio = queryClient.getQueryData(['portfolio']);
      dispatch({ type: 'editFolder', payload: updatedFolder });
      return { previousPortfolio };
    },
    onError: (err, newTodo, context) => {
      console.log('On error');

      queryClient.setQueryData('portfolio', context.previousPortfolio);
    },
    onSuccess: (data, variables) => {},
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['portfolio'] });
    },
  });

  if (isLoading || addDocumentMutation.isLoading || !state.portfolio) {
    return <Loader />;
  }

  const allFiles = getDocuments(state.portfolio, folderId, categoryName);

  const handleCreateDocument = (docName, activeMainFolderId = 0) => {
    const folder = state.portfolio?.files[activeMainFolderId];
    addDocumentMutation.mutate({
      title: docName,
      folderId: folder?.id,
      classId: folder?.classId,
    });
  };
  const handleDeleteDocument = (document) => {
    setShowDeleteConfirmationPopup(true);
    setDocumentToDelete(document);
  };

  const hidedeletePopup = () => {
    setShowDeleteConfirmationPopup(false);
  };

  const handleNewFolder = (folderName) => {
    addFolderMutation.mutate(folderName);
  };

  const handleFolderDelete = (folderId) => {
    deleteFolderMutation.mutate(folderId);
  };

  const handleFolderEdit = (editedTitle, folderId) => {
    const updatedFolder = {
      id: folderId,
      title: editedTitle,
    };
    updateFolderMutation.mutate(updatedFolder);
  };

  return (
    <>
      {showDeleteConfirmationPopup && (
        <DeleteAssignmentPopup
          hidedeletePopup={hidedeletePopup}
          deleteDocumentMutation={deleteDocumentMutation}
          documentToDelete={documentToDelete}
        />
      )}
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
                handleFolderDelete={handleFolderDelete}
                handleFolderEdit={handleFolderEdit}
              />
            </SideNavContainer>
            <DocumentMainSection>
              <RecentWorkContainer
                state={state}
                showModal={showModal}
                setShowModal={setShowModal}
                categoryName={categoryName}
              />
              <PortfolioAllFilesContainer
                allFiles={allFiles}
                handleDeleteDocument={handleDeleteDocument}
                categoryName={categoryName}
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
