import React from 'react';
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
  DocBtn,
  DocBtnImg,
  DocBtnText,
  NoFileDiv,
  documentStatusStyle,
} from './PortfolioAllFilesStyle';

const PortfolioAllFilesContainer = ({ allFiles, downloadPdf }) => {
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
                  {document?.preview?.slice(0, 170)}...
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
                  <DocBtn>
                    <DocBtnImg src={previewImg} alt="Preview Button" />
                    <DocBtnText>View</DocBtnText>
                    <span>View</span>
                  </DocBtn>
                </a>
                <DocBtn onClick={() => downloadPdf(document)}>
                  <DocBtnImg src={downLoadImg} alt="Download Button" />
                  <DocBtnText>Download</DocBtnText>
                  <span>Download</span>
                </DocBtn>
                <DocBtn>
                  <DocBtnImg src={deleteImg} alt="Delete Button" />
                  <DocBtnText>Delete</DocBtnText>
                  <span>Delete</span>
                </DocBtn>
              </DocumentBtns>
            </DocumentBox>
          );
        })
      )}
    </AllFilesContainer>
  );
};

export default PortfolioAllFilesContainer;
