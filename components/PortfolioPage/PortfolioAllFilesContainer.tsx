import React, { useEffect, useReducer, useState } from 'react';
import downLoadImg from '../../static/icons/document-download@2x.png';
import previewImg from '../../static/icons/preview@2x.png';
import deleteImg from '../../static/icons/trash-can@2x.png';

import DropdownMenu from '../DropdownMenu';
import {
  AllFileTitle,
  AllFilesContainer,
  AllFilesHeader,
  DocBtn,
  DocBtnImg,
  DocBtnText,
  DocumentBox,
  DocumentBoxWrapper,
  DocumentBtns,
  DocumentTextFrame,
  DocumentTitle,
  NoFileDiv,
  documentStatusStyle,
} from './PortfolioAllFilesStyle';

import { downloadPortfolioPdf } from '../Shared/helper/downloadPdf';

const sortReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      return [...action.payload];
    case 'A - Z':
      return [...state].sort((a, b) => a.title.localeCompare(b.title));
    case 'Z - A':
      return [...state].sort((a, b) => b.title.localeCompare(a.title));
    case 'New to old':
      return [...state].sort(
        (a, b) => new Date(b.viewedAt) - new Date(a.viewedAt)
      );
    case 'Old to new':
      return [...state].sort(
        (a, b) => new Date(a.viewedAt) - new Date(b.viewedAt)
      );
    default:
      return state;
  }
};
const PortfolioAllFilesContainer = ({ allFiles, handleDeleteDocument }) => {
  console.log('allFiles', allFiles);
  const [sortedFiles, dispatch] = useReducer(sortReducer, allFiles);
  const [displayFiles, setDisplayFiles] = useState(false);

  const sortOptions = [
    { title: 'A - Z' },
    { title: 'Z - A' },
    { title: 'New to old' },
    { title: 'Old to new' },
  ];

  useEffect(()=>{
    dispatch({type: 'UPDATE', payload: allFiles});
    setDisplayFiles(false)
  }, [allFiles])

  const getSelectedItem = (option) => {
    dispatch({ type: option.title });
    setDisplayFiles(true)
  };

  const filesToDisplay = displayFiles ? sortedFiles : allFiles;

  return (
    <AllFilesContainer>
      <AllFilesHeader>
        <AllFileTitle>All files</AllFileTitle>
        <DropdownMenu
          menuItems={sortOptions}
          defaultSearch={false}
          getSelectedItem={getSelectedItem}
        ></DropdownMenu>
      </AllFilesHeader>
      {filesToDisplay.length === 0 ? (
        <NoFileDiv>No files</NoFileDiv>
      ) : (
        filesToDisplay.map((document, idx) => {
          return (
            <DocumentBox key={idx}>
              <DocumentBoxWrapper>
                <DocumentTextFrame>
                  {document?.preview && document.preview.length > 130
                    ? document.preview + '...'
                    : document.preview}
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
                <DocBtn onClick={() => downloadPortfolioPdf(document)}>
                  <DocBtnImg src={downLoadImg} alt="Download Button" />
                  <DocBtnText>Download</DocBtnText>
                  <span>Download</span>
                </DocBtn>
                <DocBtn onClick={() => handleDeleteDocument(document)}>
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
