import React, { useEffect, useReducer, useState } from 'react';
import { getPortfolio, addDocumentToPortfolioWithDetails } from '../../service';
import { portfolioHeaderProps } from '../../utils/headerProps';
import ResponsiveHeader from '../ResponsiveHeader';
import RecentWorkContainer from './RecentWorkContainer';
import { useHistory } from 'react-router-dom';

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
import jsPDF from 'jspdf';

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

  const downloadPdf = (previewData) => {
    console.log('preview data: ', previewData);

    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      margin: {
        top: 0,
        bottom: 10,
        left: 0,
        right: 0,
      },
    });

    const totalpdf = document.createElement('div');

    const title = document.createElement('div');
    title.style.fontFamily = "'IBM Plex Sans', 'Helvetica'";
    title.style.color = '#25222a';
    title.style.fontSize = '24px';
    title.style.fontWeight = '700';
    title.style.textAlign = 'flex-start';
    title.style.marginBottom = '50px';
    title.textContent = previewData.title; // Use the title from the previewData
    totalpdf.appendChild(title);

    // Add the preview content
    const previewContent = document.createElement('div');
    previewContent.style.fontFamily = "'IBM Plex Sans', 'Helvetica'";
    previewContent.style.fontSize = '16px';
    previewContent.style.fontWeight = '400';
    previewContent.style.lineHeight = '26px';
    previewContent.textContent = previewData.preview; // Use the preview from the previewData
    totalpdf.appendChild(previewContent);

    // Set PDF options
    const options = {
      callback: function (generatedDoc) {
        generatedDoc.save(`${previewData.title}.pdf`);
      },
      x: 0,
      y: 0,
      width: 170,
      windowWidth: 1180,
      margin: 20,
      autoSize: true,
    };

    // Generate the PDF
    doc.html(totalpdf, options);
  };

  return (
    <>
      <ResponsiveHeader
        smallScreen={smallScreen}
        headerProps={portfolioHeaderProps()}
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
                state={state}
                showModal={showModal}
                setShowModal={setShowModal}
                downloadPdf={downloadPdf}
              />
              <PortfolioAllFilesContainer
                allFiles={allFiles}
                downloadPdf={downloadPdf}
              />
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
