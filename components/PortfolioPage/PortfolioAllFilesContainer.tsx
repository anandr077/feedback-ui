import React, { useReducer } from 'react';
import downLoadImg from '../../static/icons/document-download@2x.png';
import previewImg from '../../static/icons/preview@2x.png';
import deleteImg from '../../static/icons/trash-can@2x.png';

import DropdownMenu from '../DropdownMenu';
import {
  AllFileTitle,
  AllFilesContainer,
  DocBtn,
  DocBtnImg,
  DocBtnText,
  DocumentBox,
  DocumentBoxWrapper,
  DocumentBtns,
  DocumentTextFrame,
  DocumentTitle,
  NoFileDiv,
  documentStatusStyle
} from './PortfolioAllFilesStyle';


import { downloadPortfolioPdf } from '../Shared/helper/downloadPdf';

const sortReducer = (state, action) =>{
  switch(action.type){
    case 'A - Z':
      return [...state].sort((a, b)=> a.title.localeCompare(b.title));
    case 'Z - A':
      return [...state].sort((a, b)=> b.title.localeCompare(a.title));
    case 'New to old':
      return [...state].sort((a, b)=> a.date - b.date);
    case 'Old to new':
      return [...state].sort((a, b)=> b.date - a.date);
    default:
      return state;
  }
}
const PortfolioAllFilesContainer = ({ allFiles, handleDeleteDocument }) => {
  const [sortedFiles, dispatch] = useReducer(sortReducer, allFiles);
  const sortOptions = [
    {title: "A - Z"}, 
    {title: "Z - A"}, 
    {title: "New to old"}, 
    {title: "Old to new"}
  ]


  const getSelectedItem = (option) =>{
    dispatch({type: option.title});
  }
  return (
    <AllFilesContainer>
      <AllFileTitle>All files</AllFileTitle>
      <DropdownMenu
          menuItems={sortOptions}
          defaultSearch={false}
          getSelectedItem={getSelectedItem}
        ></DropdownMenu>
      {allFiles.length === 0 ? (
        <NoFileDiv>No files</NoFileDiv>
      ) : (
        sortedFiles.map((document, idx) => {
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
