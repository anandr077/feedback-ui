import React from 'react'
import downLoadImg from '../../static/icons/document-download@2x.png';
import previewImg from '../../static/icons/preview@2x.png';
import deleteImg from '../../static/icons/trash-can@2x.png';

import {
    DocumentBox,
    DocumentBoxWrapper,
    DocumentTextFrame,
    DocumentTitle,
    AllFilesContainer,
    AllFileTitle,
    DocumentBtns,
    NoFileDiv,
    documentStatusStyle
  } from './PortfolioAllFilesStyle';

const PortfolioAllFilesContainer = ({ allFiles }) => {
  return (
    <AllFilesContainer>
    <AllFileTitle>All files</AllFileTitle>
    {allFiles.length === 0 ? (
      <NoFileDiv>No files</NoFileDiv>
    ) : (
      allFiles.map((document, idx) => {
        return (
          <DocumentBox key={idx}>
            <DocumentBoxWrapper>
              <DocumentTextFrame>
                {document?.description?.slice(0, 170)}...
              </DocumentTextFrame>
              <div>
                {document.status ? (
                  <p style={documentStatusStyle(document.status)}>
                    {document.status}
                  </p>
                ) : (
                  ''
                )}
                <DocumentTitle>{document.title}</DocumentTitle>
              </div>
            </DocumentBoxWrapper>
            <DocumentBtns>
              <a href={document.url}>
                <button>
                  <img src={previewImg} alt="Preview Button" />
                  <p>View</p>
                  <span>View</span>
                </button>
              </a>
              <button>
                <img src={downLoadImg} alt="Download Button" />
                <p>Download</p>
                <span>Download</span>
              </button>
              <button>
                <img src={deleteImg} alt="Delete Button" />
                <p>Delete</p>
                <span>Delete</span>
              </button>
            </DocumentBtns>
          </DocumentBox>
        );
      })
    )}
  </AllFilesContainer>
  )
}

export default PortfolioAllFilesContainer